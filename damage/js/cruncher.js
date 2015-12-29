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

var MODIFIERS = [ 'Below Good', 'Good', 'Great', 'Perfect', 'Miss' ];
var DEFAULT_HIT_MODIFIERS = [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]; 

/****************
 * CruncherCtrl *
 ****************/

var CruncherCtrl = function($scope, $rootScope, $timeout) {

    /* * * * * Local variables * * * * */

    var cptsWith = { }; // convenience variable that holds data on the current captains
    var currentDefense = 0; // holds the enemy's current defense (after specials are applied)
    var isDefenseDown = false; // true if the enemy defense has been debuffed by a special

    var activeEffects = { map: { }, specials: { }, warnings: [ ] }; // holds the currently active effects
    var effectConflicts = { map: [ ], specials: [ ] }; // holds all conflicting effects
    var activeCaptainEffects = [ ]; // holds all the active captain effects
    var hitModifiers = [ ]; // holds all the possible hit modifiers required by different captains
    var shipBonus = { }; // holds the current ship bonus

    var crunchSelfInhibit = false; // prevents crunching if true
    var team = [ ]; // holds a copy the current team (not using $scope.team as some debuffs remove units from the team)
    var initDone = false; // true if the data structs have been initialized at least once

    /* * * * * Events * * * * */

    // triggered every time a special is enabled or disabled
    // checks whether there are onActivation or onDeactivation methods to be fired and fires them
    // doesn't invoke crunch directly since activating or deactivating a special will
    // change $scope.tdata or $scope.data, and that will induce a curnching
    $rootScope.$on('specialToggled', function(e, slot, enabled) {
        var unit = $scope.data.team[slot].unit;
        if (!unit) return;
        var id = unit.number + 1;
        if (!specials.hasOwnProperty(id)) return;
        if (enabled && specials[id].hasOwnProperty('onActivation')) {
            if (!initDone) initializeDataStructs();
            specials[id].onActivation(getParameters(slot));
        } else if (!enabled && specials[id].hasOwnProperty('onDeactivation')) {
            if (!initDone) initializeDataStructs();
            specials[id].onDeactivation(getParameters(slot));
        }
    });

    $scope.$watch('data', function() { $timeout(crunch); }, true);
    $scope.$watch('tdata', function(){ $timeout(crunch); }, true);

    /* * * * * Crunching * * * * */

    function crunch() { // leave as function(...) so it's hoisted up

        if (crunchSelfInhibit) return;
        if ($scope.options.crunchInhibitor > 0) return (--$scope.options.crunchInhibitor);
        crunchSelfInhibit = true; // inhibit cruncher while a crunching is underway

        initializeDataStructs();
        
        // calculate damage for each type
        var result = { };
        ['STR', 'QCK', 'DEX', 'PSY', 'INT'].forEach(function(type) {
            result[type] = crunchForType(type);
        });

        // calculate team details
        result.team = getTeamDetails();
        var hpMax = 0, rcvTotal = 0;
        team.forEach(function(x,n) {
            if (n > 5 || x.unit === null) return;
            // hp
            var hp = getStatOfUnit(x,'hp');
            hp += getShipBonus('hp', true, x.unit, n);
            hp *= getShipBonus('hp', false, x.unit, n);
            hp *= getEffectBonus('hp', x.unit);
            hpMax += Math.floor(applyCaptainEffectsToHP(n,hp));
            // rcv
            var rcv = getStatOfUnit(x,'rcv');
            rcv += getShipBonus('rcv', true, x.unit, n);
            rcv *= getShipBonus('rcv', false, x.unit, n);
            rcv *= getEffectBonus('rcv', x.unit);
            rcvTotal += Math.floor(applyCaptainEffectsAndSpecialsToRCV(n, rcv));
        });

        // calculate total RCV and cost
        result.rcv = Math.max(0,rcvTotal);
        var cost = team.slice(1,6).reduce(function(prev,next) { return prev + (!next.unit ? 0 : next.unit.cost); },0);
        result.cost = { cost: cost, level: Math.max(1,Math.floor(cost / 2) * 2 - 18) };

        // update scope variables
        $scope.numbers = jQuery.extend($scope.numbers, result);
        $scope.numbers.hp = Math.max(1,hpMax);
        $scope.numbers.zombie = checkZombieTeam(result);

        $timeout(function() { crunchSelfInhibit = false; });

    }

    var crunchForType = function(type) {
        var noSorting = $scope.tdata.orderOverride.hasOwnProperty(type);
        // compute base damage
        var baseDamage = getBaseDamageForType(type,false);
        // compute best overall damage
        var overallDamage = optimizeDamage(baseDamage, noSorting);
        // apply damage sorters to base damage, recalculate the new damage and update overallDamage if necessary
        // only done if the user hasn't already specified a custom order of their own for the given tyèe
        if (!noSorting) {
            for (var i=0;i<cptsWith.damageSorters.length;++i) {
                // make a copy since we'll modify the multipliers and we want to keep the original version clean
                var baseDamageCopy = JSON.parse(JSON.stringify(baseDamage));
                // remove chain multiplier and non-static captain effect multipliers from the copy,
                // they'll be added again when we calculate the overall damage
                for (var j=0;j<baseDamageCopy.length;++j) {
                    baseDamageCopy[j].multipliers = baseDamageCopy[j].multipliers
                        .filter(function(x) { return !(x[1] == 'chain' || (x[1] == 'captain effect' && !x[2])); });
                }
                // apply the damage sorter
                var newDamages = cptsWith.damageSorters[i].damageSorter(baseDamage);
                if (newDamages === null) continue;
                // calculate the new overall damage, checks if it's higher than the current overall damage and if
                // it is, set it as the current overall damage
                for (var k=0;k<newDamages.length;++k) {
                    var newOverallDamage = optimizeDamage(newDamages[k],true);
                    if (newOverallDamage.overall > overallDamage.overall) overallDamage = newOverallDamage;
                }
            }
        }
        // prep multipliers
        for (var l=0;l<overallDamage.damage.length;++l) {
            // remove 1.0x multipliers from the multiplier list as they only generate useless nosie
            overallDamage.damage[l].multipliers = overallDamage.damage[l].multipliers.filter(function(x) { return x[0] != 1; });
            // sort multipliers alphabetically
            overallDamage.damage[l].multipliers.sort(function(x,y) { return x[1].localeCompare(y[1]); });
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
        team.forEach(function(x,n) {
            if (n > 5 || x.unit === null || $scope.tdata.team[n].lock > 0) return;
            var atk = getStatOfUnit(x, 'atk') + getShipBonus('atk', true, x.unit, n); // base atk
            var multipliers = [ ];
            multipliers.push([ $scope.tdata.team[n].orb, 'orb' ]); // orb multiplier (fixed)
            multipliers.push([ getTypeMultiplierOfUnit(x.unit.type, type), 'type' ]); // type multiplier
            multipliers.push([ getEffectBonus('atk', x.unit), 'map effect' ]); // effect bonus (fixed)
            multipliers.push([ getShipBonus('atk', false, x.unit, n), 'ship' ]); // ship bonus (fixed)
            result.push({ unit: x, base: Math.floor(atk), multipliers: multipliers, position: n });
        });
        // apply static multipliers and static bonuses
        for (var i=0;i<activeCaptainEffects.length;++i) {
            if (activeCaptainEffects[i].hasOwnProperty('atkStatic'))
                result = applyCaptainEffectsToDamage(result, activeCaptainEffects[i].atkStatic, null, true);
            if (activeCaptainEffects[i].hasOwnProperty('atk'))
                result = applyCaptainEffectsToDamage(result, activeCaptainEffects[i].atk, null, false);
        }
        // if the user has specified a custom order, sort by that
        if ($scope.tdata.orderOverride.hasOwnProperty(type)) {
            var order = $scope.tdata.orderOverride[type];
            result = order.map(function(x) {
                return result.filter(function(y) {
                    return y.position == x;
                })[0];
            });
        } else { // otherwise, sort from weakest to stongest
            result.sort(function(x,y) {
                return x.base * totalMultiplier(x.multipliers) - y.base * totalMultiplier(y.multipliers);
            });
        }
        // apply type overrides if any
        if ($scope.tdata.typeOverride[type]) {
            var override = $scope.tdata.typeOverride[type];
            for (var j=0;j<result.length;++j) {
                if (!override[j]) continue;
                var currentMultiplier = getTypeMultiplierOfUnit(result[j].unit.unit.type, type);
                var newMultiplier = getTypeMultiplierOfUnit(result[j].unit.unit.type, override[j]);
                result[j].multipliers.push([ newMultiplier / currentMultiplier, 'type override' ]);
            }
        }
        return result;
    };

    /* Calculates the highest overall using the array of hit
     * modifiers generated by initializeDataStructs.
     */
    var optimizeDamage = function(damage, noSorting) {
        // check damage from default order (or user-specified order, if any) first,
        // we'll use it as a base for comparison
        var temp = JSON.parse(JSON.stringify(damage));
        var currentResult = getOverallDamage(temp, hitModifiers[0], noSorting);
        for (var i=1;i<hitModifiers.length;++i) {
            var newDamage = JSON.parse(JSON.stringify(damage));
            var newResult = getOverallDamage(newDamage,hitModifiers[i],noSorting);
            if (newResult.overall > currentResult.overall) currentResult = newResult;
        }
        return currentResult;
    };

    /* Calculates the overall damage of each unit in the team.
     * The overall damage is defined as the product of:
     * - Base damage (as returned by getBaseDamageForType)
     * - Positional captain effects multipliers (eg G3, Killer, Log Luffy, etc.)
     * - Chain multipliers (which are themselves affected by captains with chain modifiers)
     * - Bonus multipliers
     * - Special multipliers
     * Returns an object detailing the updated damage including the two new multipliers mentioned
     * above, the overall damage and the hit modifiers used to compute said damage.
     * TODO mapEffect
     */
    var getOverallDamage = function(damage, hitModifiers, noSorting) {
        // we reset the combo shield here if active
        if (activeEffects.map.comboShield) activeEffects.map.shieldLeft = activeEffects.map.comboShield;
        else activeEffects.map.shieldLeft = 0;
        // apply specials and positional captain effects
        var result = applySpecialMultipliersAndPositionalCaptainEffects(damage, hitModifiers, noSorting);
        // apply chain and bonus multipliers
        result = applyChainAndBonusMultipliers(result,hitModifiers);
        // if there is a damage reduction effect, apply it here
        if (activeEffects.map.damage)
            result.result = applyDamageReductionEffect(result.result, activeEffects.map.damage);
        // calculate overall damage
        var overallDamage = result.result.reduce(function(prev,x) { return prev + x.damage; },0);
        // return result;
        return {
            damage: result.result,
            overall: overallDamage,
            hitModifiers: hitModifiers,
            chainMultipliers: result.chainMultipliers
        };
    };

    /* * * * * * Basic operations * * * * */

    /* Computes the value of a given stat for a given unit at a given level,
     * including the bonus from candies
     */
    var getStatOfUnit = function(data, stat) {
        var maxLevel = (data.unit.maxLevel == 1 ? 1 : data.unit.maxLevel -1);
        var growth = data.unit.growth[stat] || 1;
        var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();
        var min = data.unit[minStat], max = data.unit[maxStat], candies = data.candies;
        var result = min + (max - min) * Math.pow((data.level - 1) / maxLevel, growth);
        var candyBonus = (candies && candies[stat] ? candies[stat] * { hp: 5, atk: 2, rcv: 1 }[stat] : 0);
        return Math.floor(result) + candyBonus;
    };

    /* Computes the actual defense threshold of the enemy after the specials are factored in.
     * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
     */
    var computeActualDefense = function() {
        currentDefense = $scope.data.defense;
        if (activeEffects.specials.hasOwnProperty('def'))
            currentDefense = Math.min(currentDefense, $scope.data.defense * activeEffects.specials.def());
    };

    /* Computes the bonus granted by the currently selected ship for a given stat.
     */
    var getShipBonus = function(stat, onlyStatic, unit, slot) {
        for (var key in shipBonus.bonus) {
            if (key.indexOf(stat) !== 0) continue;
            var isStatic = (key.indexOf('Static') !== -1);
            if (isStatic != onlyStatic) continue;
            if (onlyStatic)
                return shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot });
            else
                return shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot });
        }
        // no bonus found
        return (onlyStatic ? 0 : 1);
    };

    /* Computes the bonus granted by the currently selected map effect for a given stat.
     */
    var getEffectBonus = function(stat, unit) {
        if (!$scope.data.effect || !effects[$scope.data.effect].hasOwnProperty(stat)) return 1;
        return effects[$scope.data.effect][stat](unit.unit || unit);
    };

    /* Computes the type (dis)advantage multiplier.
     */
    var getTypeMultiplierOfUnit = function(attackerType,attackedType) {
        if (attackerType == 'STR' && attackedType == 'DEX') return 2;
        if (attackerType == 'QCK' && attackedType == 'STR') return 2;
        if (attackerType == 'DEX' && attackedType == 'QCK') return 2;
        if (attackerType == 'INT' && attackedType == 'PSY') return 2;
        if (attackerType == 'PSY' && attackedType == 'INT') return 2;
        if (attackerType == 'STR' && attackedType == 'QCK') return 0.5;
        if (attackerType == 'QCK' && attackedType == 'DEX') return 0.5;
        if (attackerType == 'DEX' && attackedType == 'STR') return 0.5;
        return 1;
    };

    /* Calculates the current chain multiplier given a base multiplier (typically 1.0), an
     * array of hit modifiers and a chainModifier (typically from a captain effect).
     * If the hitModifiers array has length N, returns the chain multiplier to be used on the (N+1)th turn.
     */
    var getChainMultiplier = function(chainBase, hitModifiers, chainModifier) {
        var result = chainBase;
        for (var i=0;i<hitModifiers.length;++i) {
            if (hitModifiers[i] == 'Perfect') result += chainBase * chainModifier * 0.3;
            else if (hitModifiers[i] == 'Great') result += chainBase * chainModifier * 0.1;
            else if (hitModifiers[i] == 'Good') result += 0;
            else result = chainBase;
        }
        return result;
    };

    /* Computes the effective damage of a unit.
     * The effective damage of a unit is affected by the hit modifier being used, by the defense threshold of the enemy
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
     * TODO mapEffect
     */
    var computeEffectiveDamage = function(unit, unitAtk, hitModifier, currentHitCount) {
        var baseDamage = Math.floor(Math.max(1,unitAtk / unit.combo - currentDefense));
        var result = { hits: currentHitCount, result: 0 }, bonusDamageBase = 0, combo = 0, lastAtk = 0, lastHit = 0;
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
        // apply hits
        for (var i=0;i<combo;++i) {
            ++result.hits;
            // apply combo shield if active
            if (activeEffects.map.shieldLeft > 0) {
                --activeEffects.map.shieldLeft;
                continue;
            }
            lastAtk = unitAtk;
            // apply hit-based captain effects if any
            cptsWith.hitMultipliers.forEach(function(x) { lastAtk *= x.hit(result.hits); });
            // apply defense
            lastHit = lastAtk / unit.combo;
            lastHit = Math.floor(Math.max(1, lastHit - currentDefense));
            // add hit to current total
            result.result += lastHit;
        }
        // apply hit bonus
        if (bonusDamageBase > 0) {
            if (lastHit > 1) result.result += Math.floor(lastAtk * 0.9 * bonusDamageBase);
            else result.result += Math.max(0,Math.floor(lastAtk * (0.9 * bonusDamageBase + 1 / unit.combo)) - currentDefense);
        }
        return result;
    };

    /* * * * * Captain effects/specials * * * * */

    /* Applies a captain function to damage.
     * If the captain effect is static, the bonus is added to the base damage, otherwise the
     * base damage is left untouched and the bonus is added in the multiplier list.
     */
    var applyCaptainEffectsToDamage = function(damage, func, modifiers, isStatic) {
        return damage.map(function(x,n) {
            var params = jQuery.extend({ damage: damage, modifiers: modifiers }, getParameters(x.position, n));
            if (isStatic) x.base += func(params);
            else x.multipliers.push([ func(params), 'captain effect', (isStatic || modifiers === null) ]);
            return { unit: x.unit, base: x.base, multipliers: x.multipliers, position: x.position };
        });
    };

    /* Applies all HP-multiplying captain effects to a number representing HP.
     * TODO
     */
    var applyCaptainEffectsToHP = function(slotNumber, hp) {
        var params = getParameters(slotNumber);
        for (var i=0;i<activeCaptainEffects.length;++i) {
            if (activeCaptainEffects[i].hasOwnProperty('hp'))
                hp *= activeCaptainEffects[i].hp(params);
        }
        return hp;
    };

    /* Applies all captain effects and specials that affect RCV to a number representing RCV;
     */
    var applyCaptainEffectsAndSpecialsToRCV = function(slotNumber, rcv) {
        var params = getParameters(slotNumber);
        var temp = jQuery.extend(activeEffects.map, activeEffects.specials);
        // TODO
        /*
        // static rcv
        for (var j=0;j<enabledSpecials.length;++j) {
            if (enabledSpecials[j].hasOwnProperty('rcvStatic'))
                rcv += enabledSpecials[j].rcvStatic(params);
        }
        // non-static rcv
        for (var i=0;i<activeCaptainEffects.length;++i) {
            if (activeCaptainEffects[i].hasOwnProperty('rcv'))
                rcv *= activeCaptainEffects[i].rcv(params);
        }
        // maximum non-static rcv
        var maximum = rcv;
        for (var k=0;k<enabledSpecials.length;++k) {
            if (enabledSpecials[k].hasOwnProperty('rcv'))
                maximum = Math.max(maximum,rcv * enabledSpecials[k].rcv(params));
        }
        return maximum;*/
        return 0;
    };

    var applyChainAndBonusMultipliers = function(damage, hitModifiers) {
        var result = { multipliers: [ ] };
        var params = [ ], currentHits = 0, overall = 0;
        var chainBase = getEffect('chainBase') || function() { return 1.0; };
        // pre-compute function parameters
        for (var i=0;i<damage.length;++i)
            params.push(getParameters(damage[i].position, i));
        result.result = damage.map(function(subDamage,n) {
            // calculate current chain multiplier
            var chainModifier = cptsWith.chainModifiers.reduce(function(prev,next) {
                return prev * next.chainModifier(getParameters(subDamage.position, n));
            },1);
            var chainMultiplier = getChainMultiplier(chainBase(params[n]), hitModifiers.slice(0,n), chainModifier);
            if (getEffect('chainLimiter'))
                chainMultiplier = Math.min(getEffect('chainLimiter')(params[n]), chainMultiplier);
            subDamage.multipliers.push([ chainMultiplier, 'chain' ]);
            // compute damage
            var unitAtk = Math.floor(subDamage.base * totalMultiplier(subDamage.multipliers));
            var temp = computeEffectiveDamage(subDamage.unit.unit, unitAtk, hitModifiers[n], currentHits);
            currentHits = temp.hits;
            overall += temp.result;
            result.multipliers.push(chainMultiplier);
            // return result
            return {
                unit: subDamage.unit,
                damage: temp.result,
                base: subDamage.base,
                multipliers: subDamage.multipliers,
                position: subDamage.position
            };
        });
        return result; 
    };

    var applySpecialMultipliersAndPositionalCaptainEffects = function(damage, hitModifiers, noSorting) {
        var effects = jQuery.extend(activeEffects.map, activeEffects.specials);
        var result = damage.map(function(subDamage,n) {
            var multipliers = jQuery.extend([ ], subDamage.multipliers), base = subDamage.base;
            var parameters = getParameters(subDamage.position, n);
            for (var effect in effects) {
                if (effect.indexOf('atk') == -1 && effect != 'orb') continue;
                var data = effects[effect], isStatic = (effect.indexOf('Static') > -1);
                var params = jQuery.extend({ sourceSlot: data.sourceSlot }, parameters);
                if (!isStatic) {
                    var text = (team[data.sourceSlot] ?  'special (' + shortName(team[data.sourceSlot].unit.name) + ')' : 'special');
                    multipliers.push([ data.func(params), text ]);
                } else // static
                    base += data.f(params);
            }
            return { unit: subDamage.unit, base: base, multipliers: multipliers, position: subDamage.position };
        });
        // sort by damage again
        if (!noSorting) {
            result = result.sort(function(x,y) {
                return x.base * totalMultiplier(x.multipliers) - y.base * totalMultiplier(y.multipliers);
            });
        }
        // apply non-static captain effects
        for (var i=0;i<cptsWith.hitModifiers.length;++i)
            result = applyCaptainEffectsToDamage(result, cptsWith.hitModifiers[i].hitAtk, hitModifiers);
        // return result;
        return result;
    };

    var applyDamageReductionEffect = function(damage,func) {
        for (var i=0;i<damage.length;++i)
            damage[i].multipliers.push([ func(damage[i].unit.unit), 'map effect' ]);
        return damage;
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

    /* * * * * * Utility functions * * * * */

    var initializeDataStructs = function() {
        initDone = true;
        activeEffects = { map: { }, specials: { }, warnings: [ ] };
        effectConflicts = { map: [ ], specials: [ ] };
        // deactivate turn counter (will be reactivated later if necessary)
        $scope.tdata.turnCounter.enabled = false;
        // team copy
        team = $scope.data.team.map(function(x,n) {
            if (!$scope.tdata.team[n] || $scope.tdata.team[n].removed)
                return { unit: null, level: -1, candies: { atk: 0, hp: 0, rcv: 0 } };
            else
                return x;
        });
        team = team.slice(0,6);
        // map effects
        if ($scope.data.effect) {
            for (var key in window.effects[$scope.data.effect]) {
                if (key == 'description' || key == 'thumb' || key == 'id') continue;
                if (activeEffects.map.hasOwnProperty(key)) {
                    effectConflicts.map.push({ key: key });
                    continue;
                }
                activeEffects.map[key] = { func: window.effects[$scope.data.effect][key], sourceSlot: -1 };
            }
        }
        // special effects
        $scope.tdata.specialOrder.forEach(function(slot) {
            if (!team[slot].unit) return;
            var id = team[slot].unit.number + 1, special = window.specials[id];
            if (!special) return;
            // add atk and rcv bonuses
            [ 'atk', 'rcv', 'atkStatic', 'rcvStatic' ].forEach(function(stat) {
                if (!special.hasOwnProperty(stat)) return;
                var key = stat + (special.type == 'type' ? 'Class' : special.type[0].toUpperCase() + special.type.slice(1));
                if (activeEffects.map.hasOwnProperty(key))
                    effectConflicts.specials.push({ key: stat, source: 'map' });
                else if (activeEffects.specials.hasOwnProperty(key))
                    effectConflicts.specials.push({ key: stat, source: 'specials' });
                else
                    activeEffects.specials[key] = { func: special[stat], sourceSlot: slot };
                if (special.warning)
                    activeEffects.warnings.push(special.warning);
            });
            // add other effects
            [ 'def', 'orb', 'chainBase', 'chainLimiter' ].forEach(function(effect) {
                if (!special.hasOwnProperty(effect)) return;
                if (activeEffects.map.hasOwnProperty(effect))
                    effectConflicts.specials.push({ key: effect, source: 'map' });
                else if (activeEffects.specials.hasOwnProperty(effect))
                    effectConflicts.specials.push({ key: effect, source: 'specials' });
                else
                    activeEffects.specials[effect] = { func: special[effect], sourceSlot: slot };
                if (special.warning)
                    activeEffects.warning.push(special.warning);
            });
        });
        // TODO
        //if (conflictWarning) 
            //$scope.notify({ type: 'error', text: 'One or more specials you selected cannot be activated due to an active map effect.' });
        // check if defense is down (required by some captain effects)
        computeActualDefense();
        isDefenseDown = activeEffects.specials.hasOwnProperty('def');
        // captain effect array
        activeCaptainEffects = [ ];
        for (var i=0;i<2;++i) {
            if (team[i].unit === null) continue;
            var id = team[i].unit.number + 1;
            if (!window.captains.hasOwnProperty(id)) continue;
            var effect = jQuery.extend({ }, window.captains[id]),
                locked = ($scope.tdata.team[i].lock > 0), silenced = ($scope.tdata.team[i].silence > 0);
            // disables effects if locked or silenced
            if (locked || silenced) {
                for (var func in effect) {
                    if (!silenced && func == 'hp') continue;
                    delete effect[func];
                }
            }
            activeCaptainEffects.push(effect);
        }
        // find non-static captain effects
        cptsWith = {
            hitModifiers:   activeCaptainEffects.filter(function(x) { return x.hasOwnProperty('hitModifiers');  }),
            hitMultipliers: activeCaptainEffects.filter(function(x) { return x.hasOwnProperty('hit');  }),
            chainModifiers: activeCaptainEffects.filter(function(x) { return x.hasOwnProperty('chainModifier'); }),
            damageSorters:  activeCaptainEffects.filter(function(x) { return x.hasOwnProperty('damageSorter');  })
        };
        // get all non-default hit modifiers
        hitModifiers = getPossibleHitModifiers(cptsWith.hitModifiers);
        // TODO
        //$scope.conflictingSpecials = (specialsCombinations.length > 1 || chainSpecials.length > 1);
        // get ship bonus
        shipBonus = { bonus: ships[$scope.data.ship[0]], level: $scope.data.ship[1] };
    };


    var getParameters = function(slotNumber, chainPosition) {
        return {
            unit: team[slotNumber].unit,
            orb: $scope.tdata.team[slotNumber].orb,
            maxHP: $scope.numbers.hp,
            percHP: $scope.data.percHP,
            defenseDown: isDefenseDown,
            data: team[slotNumber],
            tdata: $scope.tdata.team[slotNumber],
            scope: $scope,
            slot: slotNumber,
            turnCounter: $scope.tdata.turnCounter.value,
            chainPosition: chainPosition
        };
    };

    var arraysAreEqual = function(a,b) {
        return a.length == b.length && a.every(function(x,n) { return x == b[n]; });
    };

    var getTeamDetails = function() {
        return team.map(function(x,n) {
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
        if (shipBonus.bonus && shipBonus.bonus.heal) healAmount += shipBonus.bonus.heal({ boatLevel: shipBonus.level });
        if (zombies[ids[other]].type == 'zombie') { // zombie
            var works = 1 + healAmount >= Math.floor($scope.numbers.hp * zombies[ids[other]].threshold);
            if (works) return true;
            else return -Math.floor(healAmount / zombies[ids[other]].threshold);
        } else // reducer
            return Math.floor(healAmount / zombies[ids[other]].multiplier);
    };

    var totalMultiplier = function(data) {
        return data.reduce(function(prev,next) { return prev * next[0]; },1);
    };

    var shortName = function(name) {
        return name.length < 10 ? name : name.slice(0,10) + '...';
    };

    var getEffect = function(name) {
        var result = activeEffects.map[name] || activeEffects.specials[name];
        return (result ? result.func : null);
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
