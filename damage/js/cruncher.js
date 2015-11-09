/* jshint loopfunc: true */

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
 *                        type-based (eg Impact Usopp), orb-based (eg Coby) or condition-based (eg Sadi-chan).
 *                        Type-based and class-based multipliers can't stack with each other or with themselves, but they
 *                        do stack with orb-based multipliers and condition-based multipliers. Likewise, condition-based
 *                        multipliers can't stack with themselves but can stack with the other types.
 *                        Non-orb multipliers are provided in the `specials` file via the `atk` property and must have a
 *                        `type` property describing their exact type (type, class or condition).
 *                        Orb-based multipliers are provided in the `specials` file via the `orb` property.
 * - Type multiplier:     Multiplier applied to the damage contribution of each unit, depending on the type 
 *                        compatibility between the unit itself and the hypothetical enemy. For example, STR units get
 *                        a 2.0 type multiplier when calculating the damage on DEX enemies, a 0.5 multiplier for QCK
 *                        enemies and a 1.0 multiplier for all other enemies. Cannot be modified by captain effects or
 *                        specials (so far).
 */

// TODO Check if the effect bonuses are applied before or after the static bonuses from the ships and other stuff

var MODIFIERS = [ 'Below Good', 'Good', 'Great', 'Perfect', 'Miss' ];
var DEFAULT_HIT_MODIFIERS = [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]; 

/****************
 * CruncherCtrl *
 ****************/

var CruncherCtrl = function($scope, $rootScope, $timeout) {

    /* * * * * Local variables * * * * */

    var cptsWith = { };
    var currentDefense = 0;
    var isDefenseDown = false;

    var specialsCombinations = [ ];
    var hitModifiers = [ ];
    var shipBonus = { };
    var enabledSpecials = [ ];

    var crunchSelfInhibit = false;
    var mapEffect = { };

    /* * * * * Events * * * * */

    $rootScope.$on('specialToggled', function(e, slot, enabled) {
        var id = $scope.data.team[slot].unit.number + 1;
        if (!specials.hasOwnProperty(id)) return;
        if (enabled && specials[id].hasOwnProperty('onActivation'))
            specials[id].onActivation(getParameters(slot));
        else if (!enabled && specials[id].hasOwnProperty('onDeactivation'))
            specials[id].onDeactivation(getParameters(slot));
    });

    $scope.$watch('data',crunch,true);
    $scope.$watch('tdata',crunch,true);

    $rootScope.cruncherReady = true;

    /* * * * * Crunching * * * * */

    function crunch() { // leave as function(...) so it's hoisted up
        if (crunchSelfInhibit) return;
        if ($scope.options.crunchInhibitor > 0) return (--$scope.options.crunchInhibitor);
        crunchSelfInhibit = true;
        initializeDataStructs();
        var result = { };
        ['STR','QCK','DEX','PSY','INT'].forEach(function(type) {
            result[type] = crunchForType(type);
        });
        result.team = getTeamDetails();
        var hpMax = 0, rcvTotal = 0;
        $scope.data.team.forEach(function(x,n) {
            if (n > 5 || x.unit === null) return;
            // hp
            var hp = getStatOfUnit(x,'hp');
            hp += getShipBonus('hp',true,x.unit,n);
            hp *= getShipBonus('hp',false,x.unit,n);
            hp *= getEffectBonus('hp',x.unit);
            hpMax += Math.floor(applyCaptainEffectsToHP(n,hp));
            // rcv
            var rcv = getStatOfUnit(x,'rcv');
            rcv += getShipBonus('rcv',true,x.unit,n);
            rcv *= getShipBonus('rcv',false,x.unit,n);
            rcv *= getEffectBonus('rcv',x.unit);
            rcvTotal += Math.floor(applyCaptainEffectsAndSpecialsToRCV(n,rcv));
        });
        result.rcv = Math.max(0,rcvTotal);
        var cost = $scope.data.team.slice(1,6).reduce(function(prev,next) { return prev + (!next.unit ? 0 : next.unit.cost); },0);
        result.cost = { cost: cost, level: Math.max(1,Math.floor(cost / 2) * 2 - 18) };
        $scope.numbers = $.extend($scope.numbers, result);
        $scope.numbers.hp = Math.max(1,hpMax);
        $scope.numbers.zombie = checkZombieTeam(result);
        $timeout(function() { crunchSelfInhibit = false; });
    }

    var crunchForType = function(type) {
        // compute base damage
        var damage = getBaseDamageForType(type,false);
        // compute best overall damage
        var noSorting = $scope.tdata.orderOverride.hasOwnProperty(type);
        var overallDamage = optimizeDamage(damage,noSorting);
        // apply damage sorters to base damage, recalculate the new damage and update overallDamage if necessary
        // only done if the user hasn't already specified a custom order of their own
        if (!noSorting) {
            for (var i=0;i<cptsWith.damageSorters.length;++i) {
                var baseDamage = $.extend([ ], damage);
                var newDamage = cptsWith.damageSorters[i].damageSorter(baseDamage);
                if (newDamage === null) continue;
                var newOverallDamage = optimizeDamage(newDamage,true);
                if (newOverallDamage.overall > overallDamage.overall) overallDamage = newOverallDamage;
            }
        }
        // return results
        return overallDamage;
    };

    /* Calculates the base damage of each unit in the team.
     * The base damage is defined as the product of:
     * - Base ATK
     * - Type multipliers
     * - Orb multipliers
     * - Static (ie, non-positional) captain effect multipliers and bonuses
     * - Ship bonus
     * Returns a sorted array of objects detailing the base damage of each
     * unit in the team, sorted from weakest to strongest.
     */
    var getBaseDamageForType = function(type) {
        var result = [ ];
        // populate array with the damage of each unit in the team
        $scope.data.team.forEach(function(x,n) {
            if (n > 5 || x.unit === null || $scope.tdata.team[n].lock > 0) return;
            var orb = $scope.tdata.team[n].orb;
            var atk = getStatOfUnit(x,'atk'); // basic attack (scales with level);
            var ship = getShipBonus('atk',false,x.unit,n);
            atk += getShipBonus('atk',true,x.unit,n);
            atk *= orb; // orb multiplier (fixed)
            atk *= getTypeMultiplierOfUnit(x.unit,type); // type multiplier (fixed)
            atk *= getEffectBonus('atk',x.unit); // effect bonus (fixed)
            result.push({ unit: x, orb: orb, damage: Math.floor(atk) * ship, position: n });
        });
        // apply static multipliers and static bonuses
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('atkStatic'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atkStatic,null,true);
            if (enabledEffects[i].hasOwnProperty('atk'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atk);
        }
        // if the user has specified a custom order, sort by that
        if ($scope.tdata.orderOverride.hasOwnProperty(type)) {
            var order = $scope.tdata.orderOverride[type];
            result = order.map(function(x) {
                return result.filter(function(y) {
                    return y.position == x;
                })[0];
            });
        } else // otherwise, sort from weakest to stongest
            result.sort(function(x,y) { return x.damage - y.damage; });
        return result;
    };

    /* Calculates the overall damage of each unit in the team.
     * The overall damage is defined as the product of:
     * - Base damage
     * - Positional captain effects multipliers (eg G3, Killer, Log Luffy, etc.)
     * - Chain multipliers (which are themselves affected by captains with chain modifiers)
     * - Bonus multipliers
     * - Special multipliers
     * Returns an object detailing the updated damage including the two new multipliers mentioned
     * above, the overall damage and the hit modifiers used to compute said damage.
     */
    var getOverallDamage = function(damage,hitModifiers,noSorting) {
        if (mapEffect.comboShield) mapEffect.shieldLeft = mapEffect.comboShield;
        var result = applySpecialMultipliersAndCaptainEffects(damage,hitModifiers,noSorting);
        // apply chain and bonus multipliers
        result = applyChainAndBonusMultipliers(result,hitModifiers);
        var overallDamage = result.result.reduce(function(prev,x) { return prev + x.damage; },0);
        return { damage: result.result, overall: overallDamage,
            hitModifiers: hitModifiers, chainMultipliers: result.chainMultipliers };
    };

    /* Calculates the highest overall damage for an array of hit modifiers. */
    var optimizeDamage = function(damage,noSorting) {
        // check damage from default order (or custom order) first, we'll use it as a base for comparison
        var currentResult = getOverallDamage(damage,hitModifiers[0],noSorting);
        for (var i=1;i<hitModifiers.length;++i) {
            var newResult = getOverallDamage(damage,hitModifiers[i],noSorting);
            if (newResult.overall > currentResult.overall) currentResult = newResult;
        }
        return currentResult;
    };

    /* * * * * * Basic operations * * * * */

    var getStatOfUnit = function(data,stat) {
        var maxLevel = (data.unit.maxLevel == 1 ? 1 : data.unit.maxLevel -1);
        var growth = data.unit.growth[stat] || 1;
        var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();
        var result = data.unit[minStat] + (data.unit[maxStat] - data.unit[minStat]) * Math.pow((data.level-1) / maxLevel, growth);
        var candyBonus = (data.candies && data.candies[stat] ? data.candies[stat] * { hp: 5, atk: 2, rcv: 1 }[stat] : 0);
        return Math.floor(result) + candyBonus;
    };

    /* The effective damage of a unit is affected by the hit modifier being used, by the defense threshold of the enemy
     * and by the CMB stat of the unit:
     * BELOW GOOD hits : BASE_DAMAGE * (CMB - 3)
     * GOOD hits       : BASE_DAMAGE * (CMB - 2) + BONUS_DAMAGE_GOOD
     * GREAT hits      : BASE_DAMAGE * (CMB - 1) + BONUS_DAMAGE_GREAT
     * PERFECT hits    : BASE_DAMAGE *  CMB      + BONUS_DAMAGE_PERFECT
     * MISS hits       : BASE_DAMAGE *  CMB
     * where:
     * - BASE_DAMAGE = floor(max(1,STARTING_DAMAGE / CMB - DEFENSE))
     * - STARTING_DAMAGE is the damage computed for the unit, including the Merry's bonus and the chain bonus
     * The way the bonus damages are calculated depends on the value of BASE_DAMAGE.
     * If BASE_DAMAGE is greater than 1, meaning the unit is able to overcome the enemy's defense, then:
     * - BONUS_DAMAGE_GOOD    = floor(STARTING_DAMAGE * 0.9 * 0.33)
     * - BONUS_DAMAGE_GREAT   = floor(STARTING_DAMAGE * 0.9 * 0.66)
     * - BONUS_DAMAGE_PERFECT = floor(STARTING_DAMAGE * 0.9)
     * This bonus bypasses defense entirely.
     * If, on the other hand, BASE_DAMAGE is 1, the starting damage gets an additional bonus of 1/CMB but the
     * defense is factored into the calculation, meaning the bonus damages become:
     * - BONUS_DAMAGE_GOOD    = max(0,floor(STARTING_DAMAGE * (0.9 * 0.33 + 1/CMB)) - DEFENSE)
     * - BONUS_DAMAGE_GREAT   = max(0,floor(STARTING_DAMAGE * (0.9 * 0.66 + 1/CMB)) - DEFENSE)
     * - BONUS_DAMAGE_PERFECT = max(0,floor(STARTING_DAMAGE * (0.9 + 1/CMB)) - DEFENSE)
     */
    var computeDamageOfUnit = function(unit,unitAtk,hitModifier) {
        var baseDamage = Math.floor(Math.max(1,unitAtk / unit.combo - currentDefense));
        var result = 0, bonusDamageBase = 0, combo = 0;
        if (hitModifier == 'Below Good') {
            combo = unit.combo - 3;
            //return baseDamage * (unit.combo - 3);
        } else if (hitModifier == 'Good') {
            combo = unit.combo - 2;
            //result = baseDamage * (unit.combo - 2);
            bonusDamageBase = 0.33;
        } else if (hitModifier == 'Great') {
            combo = unit.combo - 1;
            //result = baseDamage * (unit.combo - 1);
            bonusDamageBase = 0.66;
        } else if (hitModifier == 'Perfect') { 
            combo = unit.combo;
            //result = baseDamage * unit.combo;
            bonusDamageBase = 1;
        } else if (hitModifier == 'Miss') {
            combo = unit.combo;
            //return baseDamage * unit.combo;
        }
        // apply combo shield if active
        var actualCombo = (mapEffect.shieldLeft ? Math.max(0, combo - mapEffect.shieldLeft) : combo);
        if (mapEffect.shieldLeft) mapEffect.shieldLeft = Math.max(0, mapEffect.shieldLeft - combo);
        // calculate actual damage
        if (actualCombo === 0)
            return 0;
        else if (bonusDamageBase === 0)
            return baseDamage * actualCombo;
        else if (baseDamage > 1)
            return baseDamage * actualCombo + Math.floor(unitAtk * 0.9 * bonusDamageBase);
        else
            return baseDamage * actualCombo +
                Math.max(0,Math.floor(unitAtk * (0.9 * bonusDamageBase + 1 / unit.combo)) - currentDefense);
    };

    /* Computes the actual defense threshold of the enemy after the specials are factored in.
     * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
     */
    var computeActualDefense = function() {
        currentDefense = $scope.data.defense;
        enabledSpecials.forEach(function(x) {
            if (x === null || !x.hasOwnProperty('def')) return;
            currentDefense = Math.min(currentDefense,$scope.data.defense * x.def());
        });
    };

    var getShipBonus = function(type,static,unit,slot) {
        var result = (static ? 0 : 1);
        for (var key in shipBonus.bonus) {
            if (key.indexOf(type) !== 0) continue;
            var isStatic = (key.indexOf('Static') !== -1);
            if (isStatic != static) continue;
            if (static) result += shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot });
            else result *= shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot });
        }
        return result;
    };

    var getEffectBonus = function(type,unit) {
        if (!$scope.data.effect || !effects[$scope.data.effect].hasOwnProperty(type)) return 1;
        return effects[$scope.data.effect][type](unit.unit || unit);
    };

    var getTypeMultiplierOfUnit = function(unit,against) {
        var type = unit.type;
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

    var applyCaptainEffectsToDamage = function(damage,func,modifiers,isStatic) {
        return damage.map(function(x,n) {
            var params = $.extend({ chainPosition: n, damage: damage, modifiers: modifiers },getParameters(x.position));
            var newDamage = (isStatic ? x.damage + func(params) : x.damage * func(params));
            return { unit: x.unit, orb: x.orb, damage: newDamage, position: x.position };
        });
    };

    var applyCaptainEffectsToHP = function(slotNumber,hp) {
        var params = getParameters(slotNumber);
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('hp'))
                hp *= enabledEffects[i].hp(params);
        }
        return hp;
    };

    var applyCaptainEffectsAndSpecialsToRCV = function(slotNumber,rcv) {
        var params = getParameters(slotNumber);
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('rcv'))
                rcv *= enabledEffects[i].rcv(params);
        }
        // static rcv first
        for (var j=0;j<enabledSpecials.length;++j) {
            if (enabledSpecials[j].hasOwnProperty('rcvStatic'))
                rcv += enabledSpecials[j].rcvStatic(params);
        }
        // maximum non-static rcv
        var maximum = rcv;
        for (var k=0;k<enabledSpecials.length;++k) {
            if (enabledSpecials[k].hasOwnProperty('rcv'))
                maximum = Math.max(maximum,rcv * enabledSpecials[k].rcv(params));
        }
        return maximum;
    };

    var applyChainAndBonusMultipliers = function(damage,modifiers) {
        var multipliersUsed = [ ];
        var currentChainMultiplier = 1.0;
        var result = damage.map(function(x,n) {
            var result = x.damage * currentChainMultiplier;
            var chainModifier = cptsWith.chainModifiers.reduce(function(prev,next) {
                return prev * next.chainModifier(getParameters(x.position));
            },1);
            result = computeDamageOfUnit(x.unit.unit,result,modifiers[n]);
            // update chain multiplier for the next hit
            multipliersUsed.push(currentChainMultiplier);
            currentChainMultiplier = getChainMultiplier(currentChainMultiplier,modifiers[n],chainModifier);
            if (mapEffect.chainLimiter)
                currentChainMultiplier = Math.min(mapEffect.chainLimiter, currentChainMultiplier);
            // return value
            return { unit: x.unit, orb: x.orb, damage: result, position: x.position };
        });
        return { result: result, chainMultipliers: multipliersUsed };
    };

    var applySpecialMultipliersAndCaptainEffects = function(damage,hitModifiers,noSorting) {
        var result = damage, current = -1;
        // if there are no specials available, just apply the non-static captain effects and return the result
        if (specialsCombinations.length === 0) {
            for (var i=0;i<cptsWith.hitModifiers.length;++i)
                result = applyCaptainEffectsToDamage(result,cptsWith.hitModifiers[i].hitAtk,hitModifiers);
            return result;
        }
        // for each special combination
        specialsCombinations.forEach(function(specials,n) {
            // apply all the specials of the combination to every unit
            var temp = damage.map(function(x,n) {
                var multiplier = specials.reduce(function(prev,next) {
                    return prev * next.f($.extend({ sourceSlot: next.sourceSlot },getParameters(x.position)));
                },1);
                return { unit: x.unit, orb: x.orb, damage: x.damage * multiplier, position: x.position };
            });
            // sort by damage again
            if (!noSorting) temp = temp.sort(function(x,y) { return x.damage - y.damage; });
            // apply non-static captain effects
            for (var i=0;i<cptsWith.hitModifiers.length;++i)
                temp = applyCaptainEffectsToDamage(temp,cptsWith.hitModifiers[i].hitAtk,hitModifiers);
            // calculate the new overall damage
            var total = temp.reduce(function(prev,next) { return prev + next.damage; },0);
            if (total < current) return;
            result = temp;
            current = total;
        });
        return current > -1 ? result : JSON.parse(JSON.stringify(damage));
    };

    /* Calculates all the possible hit modifiers to be used during the calculation.
     * In most cases it will return an array with a single element, either DEFAULT_HIT_MODIFIERS or customModifiers.
     */
    var getPossibleHitModifiers = function(captains) {
        var result = [ ];
        if ($scope.tdata.customHitModifiers)
            result.push($scope.tdata.customHitModifiers); // if the user specified custom modifiers, we'll only use those
        else  {
            result.push(DEFAULT_HIT_MODIFIERS); // default modifiers are always checked
            for (i=0;i<captains.length;++i) {
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

    /* Computes all the possible combinations of specials given the following conditions:
     * - Type-based and class-based are incompatible with each other and with themselves, but they stack with
     *   orb-based multipliers and with condition-based multipliers;
     * - Condition-based multipliers are incompatible with themselves, but they stack with type-based, class-based
     *   and orb-based multipliers;
     * - Orb-based multipliers are incompatible with themselves, but they stack with type-based OR class-based
     *   multipliers and with condition-based multipliers;
     * The function should return true if there's a conflict between specials
     */
    var computeSpecialsCombinations = function() {
        var result = { type: [ ], class: [ ], orb: [ ], condition: [ ] };
        enabledSpecials.forEach(function(data) {
            if (data === null) return;
            if (data.hasOwnProperty('atk'))
                result[data.type].push({ sourceSlot: data.sourceSlot, f: data.atk });
            if (data.hasOwnProperty('orb'))
                result.orb.push({ sourceSlot: data.sourceSlot, f: data.orb });
        });
        specialsCombinations = Utils.arrayProduct([ result.type.concat(result.class), result.condition, result.orb ]);
        return (result.class.length + result.type.length > 1) || result.orb.length > 1 || result.condition.length > 1;
    };

    /* * * * * * Utility functions * * * * */

    var initializeDataStructs = function() {
        // get enabled specials
        var conflictWarning = false;
        enabledSpecials = [ ];
        // deactivate turn counter (will be reactivated if necessary)
        $scope.tdata.turnCounter.enabled = false;
        // orb map effects
        mapEffect = { };
        if ($scope.data.effect) {
            var data = effects[$scope.data.effect];
            if (data.orb) enabledSpecials.push({ orb: data.orb, permanent: true, sourceSlot: -1 });
            if (data.chainLimiter) mapEffect.chainLimiter = data.chainLimiter;
            if (data.comboShield) mapEffect.comboShield = data.comboShield;
        }
        // team specials
        // "sourceSlot": slot of the unit the special belongs to
        $scope.tdata.team.forEach(function(x,n) {
            if (!$scope.data.team[n].unit) return;
            var id = $scope.data.team[n].unit.number + 1;
            if (x.special && specials.hasOwnProperty(id)) {
                if (specials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent)
                    conflictWarning = true;
                else
                    enabledSpecials.push($.extend({ sourceSlot: n },specials[id]));
            }
            // activate turn counter if necessary
            if (n < 2 && (id == 794 || id == 795))
                $scope.tdata.turnCounter.enabled = true;
        });
        if (conflictWarning) 
            $scope.notify({ type: 'error', text: 'One or more specials you selected cannot be activated due to an active map effect.' });
        // check if defense is down (required by some captain effects)
        computeActualDefense();
        isDefenseDown = enabledSpecials.some(function(x) { return x !== null && x.hasOwnProperty('def'); });
        // captain effect array
        enabledEffects = [ ];
        for (var i=0;i<2;++i) {
            if ($scope.data.team[i].unit === null) continue;
            var id = $scope.data.team[i].unit.number + 1;
            if (!window.captains.hasOwnProperty(id)) continue;
            var effect = $.extend({ },window.captains[id]),
                locked = ($scope.tdata.team[i].lock > 0), silenced = ($scope.tdata.team[i].silence > 0);
            if (locked || silenced) {
                for (var func in effect) {
                    if (!silenced && func == 'hp') continue;
                    delete effect[func];
                }
            }
            enabledEffects.push(effect);
        }
        // find non-static captain effects
        cptsWith = {
            hitModifiers:   enabledEffects.filter(function(x) { return x.hasOwnProperty('hitModifiers');  }),
            chainModifiers: enabledEffects.filter(function(x) { return x.hasOwnProperty('chainModifier'); }),
            damageSorters:  enabledEffects.filter(function(x) { return x.hasOwnProperty('damageSorter');  })
        };
        // get all non-default hit modifiers
        hitModifiers = getPossibleHitModifiers(cptsWith.hitModifiers);
        // compute special combinations
        computeSpecialsCombinations();
        $scope.conflictingSpecials = (specialsCombinations.length > 1);
        // get ship bonus
        shipBonus = $.extend({ bonus: ships[$scope.data.ship[0]] },{ level: $scope.data.ship[1] });
    };


    var getParameters = function(slotNumber) {
        return {
            unit: $scope.data.team[slotNumber].unit,
            orb: $scope.tdata.team[slotNumber].orb,
            maxHP: $scope.numbers.hp,
            percHP: $scope.data.percHP,
            defenseDown: isDefenseDown,
            data: $scope.data.team[slotNumber],
            tdata: $scope.tdata.team[slotNumber],
            scope: $scope,
            slot: slotNumber,
            turnCounter: $scope.tdata.turnCounter.value
        };
    };

    var arraysAreEqual = function(a,b) {
        return a.length == b.length && a.every(function(x,n) { return x == b[n]; });
    };

    var getTeamDetails = function() {
        return $scope.data.team.map(function(x,n) {
            if (x.unit === null) return null;
            return {
                name : x.unit.name,
                hp   : Math.floor(getStatOfUnit(x,'hp') * getEffectBonus('hp', x)),
                atk  : Math.floor(getStatOfUnit(x,'atk') * getEffectBonus('atk', x)),
                rcv  : Math.floor(getStatOfUnit(x,'rcv') * getEffectBonus('rcv', x)),
                cmb  :  x.unit.combo
            };
        });
    };

    var checkZombieTeam = function(data) {
        var team = $scope.data.team;
        if (!team[0].unit || !team[1].unit) return null;
        var ids = [ team[0].unit.number + 1, team[1].unit.number + 1 ];
        if (!zombies.hasOwnProperty(ids[0]) || !zombies.hasOwnProperty(ids[1])) return;
        var healer = -1, other = -1;
        for (var i=0;i<2;++i) {
           if (zombies[ids[i]].type == 'healer') healer = i;
           else other = i;
        }
        if (healer == -1 || other == -1) return null;
        var healAmount = zombies[ids[healer]].amount || Math.floor(data.team[healer].rcv * zombies[ids[healer]].multiplier);
        if (zombies[ids[other]].type == 'zombie') { // zombie
            var works = 1 + healAmount >= Math.floor($scope.numbers.hp * zombies[ids[other]].threshold);
            if (works) return true;
            else return -(healAmount / zombies[ids[other]].threshold);
        } else // reducer
            return Math.floor(healAmount / zombies[ids[other]].multiplier);
    };

    // TODO Stop modifying prototypes because you're lazy

    Array.prototype.subcontains = function(data) {
        return this.join('!').indexOf(data.join('!')) != -1;
    };

    Array.prototype.has = function(what) {
        return this.indexOf(what) != -1;
    };

    String.prototype.has = function(what) {
        return this == what;
    };

};

angular.module('optc')
    .controller('CruncherCtrl', CruncherCtrl);

})();
