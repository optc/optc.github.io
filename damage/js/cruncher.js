/* jshint evil: true */

(function() {

/* Terminology: 
 * - Hit modifiers:       Array of elements detailing the type of hits (Miss, Good, Great or Perfect) used in the
 *                        attack chain. Also used to specify the activation conditions for the captain effects of
 *                        certain types of units (G3, Killer, etc.) when provided via the `hitModifiers` property
 *                        in the `captains` file. Must have 6 elements, each element the hit modifier to be used
 *                        in the corresponding turn.  When provided through the `hitModifiers` property, the unit
 *                        is also expected to specify how to apply its own captain effect (via the `hitAtk` property).
 * - Bonus multiplier:    Multiplier associated to each hit modifier (close to 1.9x for Perfect hits, close to 1.4x
 *                        for Great's, ...). Affected by the unit's effective attack, CMB stat and by the enemy's defense.
 *                        Cannot be modified by captains or specials (so far).
 * - Chain multiplier:    Multiplier associated to the combo chain. Applied to the damage contribution of each unit.
 *                        Increased by 0.3 when hitting Perfect's, by 0.1 when hitting Great's, left untouched
 *                        when hitting Good's and reset back to its initial value of 1.0 when hitting Misses.
 *                        Can be modified by captain effects (via the chain modifier, see below) but not specials (so far).
 * - Chain modifier:      Modifier applied to the chain multiplier when computing its new value for the following
 *                        turn. Affects the amount the multiplier is increased by.  Typically a static value (eg 4.0 for
 *                        Rayleigh, 2.0 for Domino). Provided in the `captains` file via the `chainModifier` property.
 * - Damage sorters:      Functions that modify the normal chain attack order to make sure that certain captain effects
 *                        are activated whenever possible. Tipically required by Okama characters (Ivankov, Caroline, ...).
 * - Orb multiplier:      Multiplier applied to the damage contribution of each unit, depending on the type of
 *                        the orb assigned to the unit itself (controlled by the `orbs` module).  Units with matching
 *                        orbs get a 2.0 orb multiplier, units with opposite orbs get 0.5  and units with unrelated orbs
 *                        get 1.0. Cannot be modified by captain effects or specials (so far), though some captains (eg
 *                        SW Ace) use the multiplier as the activation condition for their captain effects.
 * - Special multipliers: Multiplier granted by specials, applied to the damage contribution of every unit affected
 *                        by the special itself. The multipliers can be class-based (eg Zephyr),
 *                        type-based (eg Impact Usopp) or orb-based (eg Coby). Type-based and class-based multipliers
 *                        can't stack with each other or with themselves, but they do stack with orb-based multipliers.
 *                        Class-based and type-based multipliers are provided in the `specials` file via the `atk`
 *                        property and must have a `type` property describing whether they are class-based or type-based.
 *                        Orb-based multipliers are provided in the `specials` file via the `orb` property.
 *                        There's actually a fourth type of multiplier (indicated by a `type` property with value
 *                        `all`) for specials whose effect and stacking model are not completely clear; it's tipically
 *                        used for specials that boost the whole party (eg Sadi-chan, Usoppun etc.). Right now
 *                        "all-based" multipliers stack with all the other multipliers and with themselves; this
 *                        might need to be modified.
 * - Type multiplier:     Multiplier applied to the damage contribution of each unit, depending on the type 
 *                        compatibility between the unit itself and the hypothetical enemy. For example, STR units get
 *                        a 2.0 type multiplier when calculating the damage on DEX enemies, a 0.5 multiplier for QCK
 *                        enemies and a 1.0 multiplier for all other enemies. Cannot be modified by captain effects or
 *                        specials (so far).
 */

var MODIFIERS = [ 'Miss', 'Good', 'Great', 'Perfect' ];
var DEFAULT_HIT_MODIFIERS = [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]; 

var team = [ null, null, null, null, null, null ];
var enabledSpecials = [ null, null, null, null, null, null ];
var captainAbilities = [ null, null ];

var merryBonus = 1;
var currentHP = 1, maxHP = 1, percHP = 100.0;

var defense = 0;
var currentDefense = 0;

var crunchingEnabled = true;

var specialsCombinations = [ ];

var customModifiers = null;

/* * * * * Crunching * * * * */

var crunch = function() {
    if (!crunchingEnabled) return;
    var result = { };
    ['STR','QCK','DEX','PSY','INT'].forEach(function(type) {
        result[type] = crunchForType(type).overall;
    });
    result.HP = 0;
    team.forEach(function(x,n) {
        if (x === null) return;
        var hp = getStatOfUnit(x,'hp');
        result.HP += applyCaptainEffectsToHP(x,hp);
    });
    result.HP = Math.max(1,result.HP);
    result.team = getTeamDetails();
    $(document).trigger('numbersCrunched',result);
};

// TODO Needlessly repeated initialization
var crunchForType = function(type) {
    // check if defense is down (required by some captain effects)
    var isDefenseDown = enabledSpecials.some(function(x) { return x !== null && x.hasOwnProperty('def'); });
    // initialize ability array
    var abilities = [ ], l;
    if (captainAbilities[0] !== null) abilities.push(captainAbilities[0]);
    if (captainAbilities[1] !== null) abilities.push(captainAbilities[1]);
    // initialize non-static captain effects
    var cptsWithHitModifiers   = abilities.filter(function(x) { return x.hasOwnProperty('hitModifiers');  });
    var cptsWithChainModifiers = abilities.filter(function(x) { return x.hasOwnProperty('chainModifier'); });
    var cptsWithDamageSorters  = abilities.filter(function(x) { return x.hasOwnProperty('damageSorter');  });
    // get all non-default hit modifiers
    var hitModifiers = getPossibleHitModifiers(cptsWithHitModifiers);
    // compute base damage
    var damage = getBaseDamageForType(type,abilities,isDefenseDown);
    // compute best overall damage
    var overallDamage = optimizeDamage(damage,cptsWithHitModifiers,cptsWithChainModifiers,hitModifiers);
    // apply damage sorters to base damage, recalculate the new damage and update overallDamage if necessary
    for (var i=0;i<cptsWithDamageSorters.length;++i) {
        var newDamage = cptsWithDamageSorters[i].damageSorter(damage);
        if (newDamage === null) return;
        var newOverallDamage = optimizeDamage(newDamage,cptsWithHitModifiers,cptsWithChainModifiers,hitModifiers);
        if (newOverallDamage.overall > overallDamage.overall) overallDamage = newOverallDamage;
    }
    // return results
    return overallDamage;
};

/* Calculates the base damage of each unit in the team.
 * The base damage is defined as the product of:
 * - Base ATK
 * - Type multipliers
 * - Orb multipliers
 * - Static (ie, non-positional) captain effect multipliers
 * - Special multipliers
 * - Merry bonus
 * Returns a sorted array of objects detailing the base damage of each
 * unit in the team, sorted from weakest to strongest.
 */
var getBaseDamageForType = function(type,captainAbilities,isDefenseDown) {
    var result = [ ];
    // populate array with the damage of each unit in the team
    team.forEach(function(x,n) {
        if (x === null) return;
        var atk = getStatOfUnit(x,'atk'); // basic attack (scales with level);
        atk *= x.orb; // orb multiplier (fixed)
        atk *= getTypeMultiplierOfUnit(x,type); // type multiplier (fixed)
        result.push({ unit: x, damage: Math.floor(atk) * merryBonus, position: n });
    });
    // apply special multipliers
    result = applySpecialMultipliers(result,isDefenseDown); 
    // apply static multipliers
    for (var i=0;i<captainAbilities.length;++i) {
        if (!captainAbilities[i].hasOwnProperty('atk')) continue;
        result = applyCaptainEffectToDamage(result,captainAbilities[i].atk);
    }
    // sort from weakest to stongest
    result.sort(function(x,y) { return x.damage - y.damage; });
    return result;
};

/* Calculates the overall damage of each unit in the team.
 * The overall damage is defined as the product of:
 * - Base damage
 * - Positional captain effects multipliers (eg G3, Killer, Log Luffy, etc.)
 * - Chain multipliers (which are themselves affected by captains with chain modifiers)
 * - Bonus multipliers
 * Returns an object detailing the updated damage including the two new multipliers mentioned
 * above, the overall damage and the hit modifiers used to compute said damage.
 */
var getOverallDamage = function(damage,atkModifiers,chainModifiers,hitModifiers) {
    var result = damage;
    for (var i=0;i<atkModifiers.length;++i)
        result = applyCaptainEffectToDamage(result,atkModifiers[i].hitAtk,hitModifiers);
    result = applyChainAndBonusMultipliers(result,chainModifiers,hitModifiers);
    var overallDamage = result.result.reduce(function(prev,x) { return prev + x.damage; },0);
    return { damage: result.result, overall: overallDamage,
        hitModifiers: hitModifiers, chainMultipliers: result.chainMultipliers };
};

/* Calculates the highest overall damage for an array of hit modifiers. */
var optimizeDamage = function(damage,atkModifiers,chainModifiers,hitModifiers) {
    // check damage from default order (or custom order) first, we'll use it as a base for comparison
    var currentResult = getOverallDamage(damage,atkModifiers,chainModifiers,hitModifiers[0]);
    for (var i=1;i<hitModifiers.length;++i) {
        var newResult = getOverallDamage(damage,atkModifiers,chainModifiers,hitModifiers[i]);
        if (newResult.overall > currentResult.overall) currentResult = newResult;
    }
    return currentResult;
};

/* Calculates all the possible hit modifiers to be used during the calculation.
 * In most cases it will return an array with a single element, either DEFAULT_HIT_MODIFIERS or customModifiers.
 */
var getPossibleHitModifiers = function(captains) {
    var result = [ ];
    if (customModifiers)
        result.push(customModifiers); // if the user specified custom modifiers, we'll only use those
    else  {
        result.push(DEFAULT_HIT_MODIFIERS); // default modifiers are always checked
        for (i=0;i<captains.length && !customModifiers;++i) {
            // check if the captain's hit modifiers are not already included
            var alreadyIncluded = result.some(function(x) {
                return arraysAreEqual(x,captains[i].hitModifiers);
            });
            // if they aren't, include them
            if (!alreadyIncluded)
                result.push(JSON.parse(JSON.stringify(captains[i].hitModifiers)));
        }
    }
    return result;
};

/* * * * * * Static multipliers/modifiers * * * * */

var getTypeMultiplierOfUnit = function(data,against) {
    var type = data.unit.type;
    if (type == 'STR' && against == 'DEX') return 2;
    if (type == 'QCK' && against == 'STR') return 2;
    if (type == 'DEX' && against == 'QCK') return 2;
    if (type == 'INT' && against == 'PSY') return 2;
    if (type == 'PSY' && against == 'INT') return 2;
    if (type == 'STR' && against == 'QCK') return 0.5;
    if (type == 'QCK' && against == 'DEX') return 0.5;
    if (type == 'DEX' && against == 'STR') return 0.5;
    return 1;
};

var getChainMultiplier = function(currentChainMultiplier,hit,chainModifier) {
    if (hit == 'Perfect') return currentChainMultiplier + 0.3 * chainModifier;
    else if (hit == 'Great') return currentChainMultiplier +  0.1 * chainModifier;
    else if (hit == 'Good') return currentChainMultiplier;
    return 1.0;
};

/* * * * * Captain effects/specials * * * * */

var applyChainAndBonusMultipliers = function(damage,captains,modifiers) {
    // NOTE: all the captains provided must have a chain modifier (array can be empty - don't include them if they don't)
    var multipliersUsed = [ ];
    var currentChainMultiplier = 1.0;
    var result = damage.map(function(x,n) {
        var result = x.damage * currentChainMultiplier;
        var chainModifier = captains.reduce(function(x,y) {
            return x * y.chainModifier(x.unit.unit,n,currentHP,maxHP,percHP,modifiers[n]);
        },1);
        result = computeDamageOfUnit(x.unit.unit,result,modifiers[n]);
        // update chain multiplier for the next hit
        multipliersUsed.push(currentChainMultiplier);
        currentChainMultiplier = getChainMultiplier(currentChainMultiplier,modifiers[n],chainModifier);
        // return value
        return { unit: x.unit, damage: result, position: x.position };
    });
    return { result: result, chainMultipliers: multipliersUsed };
};

var applyCaptainEffectToDamage = function(damage,func,modifiers) {
    return damage.map(function(x,n) {
        var params = { unit: x.unit.unit, chainPosition: n, currentHP: currentHP, maxHP: maxHP, percHP: percHP,
            orb: x.unit.orb, damage: damage, modifiers: modifiers };
        var newDamage = x.damage * func(params);
        return { unit: x.unit, damage: newDamage, position: x.position };
    });
};

var applyCaptainEffectsToHP = function(unit,hp) {
    for (var i=0;i<2;++i) {
        if (captainAbilities[i] !== null && captainAbilities[i].hasOwnProperty('hp'))
            hp *= captainAbilities[i].hp({ unit: unit.unit });
    }
    return hp;
};

var applySpecialMultipliers = function(damage,isDefenseDown,modifiers) {
    var result = damage, current = -1;
    // for each special combination
    specialsCombinations.forEach(function(specials) {
        // apply all the specials of the combination to every unit
        var temp = damage.map(function(x,n) {
            var multiplier = specials.reduce(function(prev,next) {
                var params = { unit: x.unit.unit, chainPosition: x.position, currentHP: currentHP, maxHP: maxHP,
                    percHP: percHP, defenseDown: isDefenseDown, orb: x.unit.orb, modifiers: modifiers };
                return prev * next(params);
            },1);
            return { unit: x.unit, damage: x.damage * multiplier, position: x.position };
        });
        // calculate the new overall damage
        var total = temp.reduce(function(prev,next) { return prev + next.damage; },0);
        if (total < current) return;
        result = temp;
        current = total;
    });
    return current > -1 ? result : JSON.parse(JSON.stringify(result));
};

/* The effective damage of a unit is affected by the hit modifier being used, by the defense threshold of the enemy
 * and by the CMB stat of the unit:
 * FULL MISS hits : BASE_DAMAGE *  CMB
 * MISS hits      : BASE_DAMAGE * (CMB - 2)
 * GOOD hits      : BASE_DAMAGE * (CMB - 2) + BONUS_DAMAGE_GOOD
 * GREAT hits     : BASE_DAMAGE * (CMB - 1) + BONUS_DAMAGE_GREAT
 * PERFECT hits   : BASE_DAMAGE *  CMB      + BONUS_DAMAGE_PERFECT
 * where:
 * - BASE_DAMAGE = floor(max(1,STARTING_DAMAGE / CMB - DEFENSE))
 * - STARTING_DAMAGE is the damage computed for the unit, including the Merry's bonus and the chain bonus
 * The way the bonus damages are calculated depends on the value of BASE_DAMAGE.
 * If BASE_DAMAGE is greater than 1, meaning the unit is able to overcome the enemy's defense, then:
 * - BONUS_DAMAGE_PERFECT = floor(STARTING_DAMAGE * 0.9)
 * - BONUS_DAMAGE_GREAT   = floor(STARTING_DAMAGE * 0.9 * 0.66)
 * - BONUS_DAMAGE_GOOD    = floor(STARTING_DAMAGE * 0.9 * 0.33)
 * This bonus bypasses defense entirely.
 * If, on the other hand, BASE_DAMAGE is 1, the starting damage gets an additional bonus of 1/CMB but the
 * defense is factored into the calculation, meaning the bonus damages become:
 * - BONUS_DAMAGE_PERFECT = max(0,floor(STARTING_DAMAGE * (0.9 + 1/CMB)) - DEFENSE)
 * - BONUS_DAMAGE_GREAT   = max(0,floor(STARTING_DAMAGE * (0.9 * 0.66 + 1/CMB)) - DEFENSE)
 * - BONUS_DAMAGE_GOOD    = max(0,floor(STARTING_DAMAGE * (0.9 * 0.33 + 1/CMB)) - DEFENSE)
 */
var computeDamageOfUnit = function(unit,unitAtk,hitModifier) {
    var baseDamage = Math.floor(Math.max(1,unitAtk / unit.combo - currentDefense));
    var result = 0, bonusDamageBase;
    if (hitModifier == 'Full Miss') return baseDamage * unit.combo;
    if (hitModifier == 'Miss') return baseDamage * (unit.combo -2);
    if (hitModifier == 'Good') {
        result = baseDamage * (unit.combo - 2);
        bonusDamageBase = 0.33;
    } else if (hitModifier == 'Great') {
        result = baseDamage * (unit.combo - 1);
        bonusDamageBase = 0.66;
    } else if (hitModifier == 'Perfect') { 
        result = baseDamage * unit.combo;
        bonusDamageBase = 1;
    }
    if (baseDamage > 1)
        return result + Math.floor(unitAtk * 0.9 * bonusDamageBase);
    else
        return result + Math.max(0,Math.floor(unitAtk * (0.9 * bonusDamageBase + 1 / unit.combo)) - currentDefense);

};

/* Computes all the possible combinations of specials given the following conditions:
 * - Type-based and class-based are incompatible with each other and with themselves, but they stack with
 *   orb-based multipliers and with "all-based" multipliers;
 * - Orb-based multipliers are incompatible with themselves, but they stack with type-based OR class-based
 *   multipliers and with "all-based" multipliers;
 * - All-based multipliers stack with all the other multipliers and with themselves
 * The function should return true if there's a conflict between specials
 */
var computeSpecialsCombinations = function() {
    var result = { type: [ ], class: [ ], orb: [ ], all: [ ] };
    enabledSpecials.forEach(function(data) {
        if (data === null) return;
        if (data.hasOwnProperty('atk'))
            result[data.type].push(data.atk);
        if (data.hasOwnProperty('orb'))
            result.orb.push(data.orb);
    });
    specialsCombinations = Utils.arrayProduct([ result.type.concat(result.class), result.orb ]);
    if (result.all.length > 0 && specialsCombinations.length > 0)
        specialsCombinations = specialsCombinations.map(function(x) { return x.concat(result.all); });
    else if (result.all.length > 0)
        specialsCombinations = [ result.all ];
    return (result.class.length + result.type.length > 1) || result.orb.length > 1 || result.all.length > 1;
};

/* Computes the actual defense threshold of the enemy after the specials are factored in.
 * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
 */
var computeActualDefense = function() {
    currentDefense = defense;
    enabledSpecials.forEach(function(x) {
        if (x === null || !x.hasOwnProperty('def')) return;
        currentDefense = Math.min(currentDefense,defense * x.def());
    });
};

/* * * * * * Utility functions * * * * */

var getStatOfUnit = function(data,stat) {
    var unit = data.unit;
    var level = data.level -1 , maxLevel = (unit.maxLevel == 1 ? 1 : unit.maxLevel -1);
    var growth = unit.growth || 1;
    var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();
    return Math.floor(unit[minStat] + (unit[maxStat] - unit[minStat]) * Math.pow(level / maxLevel, growth));
};

var setCaptain = function(slotNumber) {
    if (team[slotNumber] === null)
        captainAbilities[slotNumber] = null;
    else if (captains.hasOwnProperty(team[slotNumber].unit.number+1))
        captainAbilities[slotNumber] = createFunctions(captains[team[slotNumber].unit.number+1]);
    else
        captainAbilities[slotNumber] = null;
};

var createFunctions = function(data) {
    var result = { };
    for (var key in data) {
        if (data[key] === undefined)
            Utils.warn("The unit you selected has a strange ass ability that can't be parsed correctly yet",'captains');
        else if (key == 'type' || data[key].constructor == Array || data[key].constructor == Function)
            result[key] = data[key];
        else
            result[key] = new Function('p','return ' + data[key]);
    }
    return result;
};

var arraysAreEqual = function(a,b) {
    return a.length == b.length && a.every(function(x,n) { return x == b[n]; });
};

var getTeamDetails = function() {
    return team.map(function(data) {
        if (data === null) return null;
        return {
            name: data.unit.name,
            hp: getStatOfUnit(data,'hp'),
            atk: getStatOfUnit(data,'atk'),
            rcv: getStatOfUnit(data,'rcv'),
            cmb: data.unit.combo
        };
    });
};

/* * * * * Event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    team[slotNumber] = { unit: units[unitNumber], level: 1, orb: 1 };
    if (slotNumber < 2) setCaptain(slotNumber);
    enabledSpecials[slotNumber] = null;
    computeSpecialsCombinations();
    customModifiers = null;
    crunch();
};

var onLevelChange = function(event,slotNumber,level) {
    team[slotNumber].level = level;
    customModifiers = null;
    crunch();
};

var onMerryChange = function(event,bonus) {
    merryBonus = bonus;
    crunch();
};

var onDefenseChanged = function(event,value) {
    defense = value;
    computeActualDefense();
    crunch();
};

var onHpChange = function(event,current,max,perc) {
    currentHP = current;
    maxHP = max;
    percHP = perc;
    customModifiers = null;
    crunch();
};

var onOrbMultiplierChanged = function(event,slotNumber,multiplier) {
    team[slotNumber].orb = multiplier;
    customModifiers = null;
    crunch();
};

var onUnitsSwitched = function(event,slotA,slotB) {
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    if (slotA === 0 || slotB === 0) setCaptain(0);
    if (slotA == 1 || slotB == 1) setCaptain(1);
    var specialA = enabledSpecials[slotA];
    enabledSpecials[slotA] = enabledSpecials[slotB];
    enabledSpecials[slotB] = specialA;
    customModifiers = null;
    crunch();
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
    if (slotNumber < 2) captainAbilities[slotNumber] = null;
    enabledSpecials[slotNumber] = null;
    computeSpecialsCombinations();
    customModifiers = null;
    crunch();
};

var onDetailsRequested = function(event,type) {
    $(document).trigger('detailsReady',crunchForType(type.toUpperCase()));
};

var onCustomModifiers = function(event,data) {
    customModifiers = data;
    crunch();
};

var onCrunchToggled = function(event,enabled) {
    crunchingEnabled = enabled;
    if (enabled) crunch();
};

var onSpecialToggled = function(event,slotNumber,enabled) {
    if (!enabled) enabledSpecials[slotNumber] = null;
    else enabledSpecials[slotNumber] = createFunctions(specials[team[slotNumber].unit.number+1]);
    computeActualDefense();
    if (computeSpecialsCombinations())
        Utils.warn('Two or more specials you selected are incompatible with each other, only the strongest combination will be used.','specials');
    customModifiers = null;
    crunch();
};

/* * * * * Events * * * * */

// core
$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('merryBonusUpdated',onMerryChange);
$(document).on('hpChanged',onHpChange);
$(document).on('defenseChanged',onDefenseChanged);
// loader
$(document).on('crunchingToggled',onCrunchToggled);
// orb control
$(document).on('orbMultiplierChanged',onOrbMultiplierChanged);
// drag & drop
$(document).on('unitsSwitched',onUnitsSwitched);
$(document).on('unitRemoved',onUnitRemoved);
// details
$(document).on('detailsRequested',onDetailsRequested);
$(document).on('customModifiers',onCustomModifiers);
// specials
$(document).on('specialToggled',onSpecialToggled);

// function required by certain captain effects
// TODO Stop modifying prototypes because you're lazy

Array.prototype.subcontains = function(data) {
    return this.join('!').indexOf(data.join('!')) != -1;
};

Array.prototype.okamaCheck = function(modifiers,data) {
    for (var i=0;i<this.length;++i) {
        for (var j=0;j<data.length && i+j<this.length;++j) {
            var different = (data[j].type && this[i+j].unit.unit.type != data[j].type) ||
                (data[j].minModifier && MODIFIERS.indexOf(modifiers[i+j]) < MODIFIERS.indexOf(data[j].minModifier));
            if (different) break;
        }
        if (j == data.length) return true;
    }
    return false;
};

Array.prototype.okamaSort = function(data) {
    var that = JSON.parse(JSON.stringify(this)), temp = [ ];
    for (var i=0;i<data.length;++i) {
        for (var j=0;j<that.length;++j) {
            if (that[j].unit.unit.type != data[i]) continue;
            temp.push(that.splice(j,1)[0]);
            break;
        }
        if (i == data.length) break;
    }
    if (temp.length != data.length) return null;
    else return temp.concat(that);
};

})();
