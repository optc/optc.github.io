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

    var specialsCombinations = [ ], chainSpecials = [ ];
    var hitModifiers = [ ];
    var shipBonus = { };
    var enabledSpecials = [ ];

    var crunchSelfInhibit = false;
    var mapEffect = { };
    var team = [ ];
    var initDone = false;

    /* * * * * Events * * * * */

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
        team.forEach(function(x,n) {
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
        var cost = team.slice(1,6).reduce(function(prev,next) { return prev + (!next.unit ? 0 : next.unit.cost); },0);
        result.cost = { cost: cost, level: Math.max(1,Math.floor(cost / 2) * 2 - 18) };
        $scope.numbers = jQuery.extend($scope.numbers, result);
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
                var baseDamage = JSON.parse(JSON.stringify(damage));
                for (var j=0;j<baseDamage.length;++j) {
                    baseDamage[j].multipliers = baseDamage[j].multipliers
                        .filter(function(x) { return x[1] != 'chain' && x[1] != 'captain effect'; });
                }
                var newDamages = cptsWith.damageSorters[i].damageSorter(baseDamage);
                if (newDamages === null) continue;
                for (var k=0;k<newDamages.length;++k) {
                    var newOverallDamage = optimizeDamage(newDamages[k],true);
                    if (newOverallDamage.overall > overallDamage.overall) overallDamage = newOverallDamage;
                }
            }
        }
        // return results
        for (var l=0;l<overallDamage.damage.length;++l) {
            overallDamage.damage[l].multipliers = overallDamage.damage[l].multipliers.filter(function(x) { return x[0] != 1; });
            overallDamage.damage[l].multipliers.sort(function(x,y) { return x[1].localeCompare(y[1]); });
        }
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
            var orb = $scope.tdata.team[n].orb;
            var atk = getStatOfUnit(x,'atk'); // basic attack (scales with level);
            var ship = getShipBonus('atk',false,x.unit,n), againstType = type;
            var multipliers = [ ];
            if (orb == 'g') orb = 1.5;
            atk += getShipBonus('atk',true,x.unit,n);
            multipliers.push([ orb, 'orb' ]); // orb multiplier (fixed)
            multipliers.push([ getTypeMultiplierOfUnit(x.unit.type,type), 'type' ]); // type multiplier
            multipliers.push([ getEffectBonus('atk',x.unit), 'map effect' ]); // effect bonus (fixed)
            multipliers.push([ ship, 'ship' ]); // ship bonus (fixed)
            result.push({ unit: x, orb: orb, base: Math.floor(atk), multipliers: multipliers, position: n });
        });
        // apply static multipliers and static bonuses
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('atkStatic'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atkStatic,null,true);
            if (enabledEffects[i].hasOwnProperty('atk'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atk,null,false);
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
            result.sort(function(x,y) { return x.base * totalMultiplier(x.multipliers) - y.base * totalMultiplier(y.multipliers); });
        // apply type overrides
        if ($scope.tdata.typeOverride[type]) {
            var override = $scope.tdata.typeOverride[type];
            for (var i=0;i<result.length;++i) {
                if (!override[i]) continue;
                var currentMultiplier = getTypeMultiplierOfUnit(result[i].unit.unit.type, type);
                var newMultiplier = getTypeMultiplierOfUnit(result[i].unit.unit.type, override[i]);
                result[i].multipliers.push([ newMultiplier / currentMultiplier, 'type override' ]);
            }
        }
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
        else mapEffect.shieldLeft = 0;
        var result = applySpecialMultipliersAndCaptainEffects(damage,hitModifiers,noSorting);
        // apply chain and bonus multipliers
        result = applyChainAndBonusMultipliers(result,hitModifiers);
        if (mapEffect.damage) result.result = applyEffectDamage(result.result, mapEffect.damage);
        var overallDamage = result.result.reduce(function(prev,x) { return prev + x.damage; },0);
        return { damage: result.result, overall: overallDamage,
            hitModifiers: hitModifiers, chainMultipliers: result.chainMultipliers };
    };

    /* Calculates the highest overall damage for an array of hit modifiers. */
    var optimizeDamage = function(damage,noSorting) {
        // check damage from default order (or custom order) first, we'll use it as a base for comparison
        var temp = JSON.parse(JSON.stringify(damage));
        var currentResult = getOverallDamage(temp,hitModifiers[0],noSorting);
        for (var i=1;i<hitModifiers.length;++i) {
            var newDamage = JSON.parse(JSON.stringify(damage));
            var newResult = getOverallDamage(newDamage,hitModifiers[i],noSorting);
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
    var computeDamageOfUnit = function(unit, unitAtk, hitModifier, currentHitCount) {
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
            if (mapEffect.shieldLeft > 0) {
                --mapEffect.shieldLeft;
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

    /* Computes the actual defense threshold of the enemy after the specials are factored in.
     * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
     */
    var computeActualDefense = function() {
        currentDefense = parseInt($scope.data.defense, 10) || 0;
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

    /* * * * * Captain effects/specials * * * * */

    var applyCaptainEffectsToDamage = function(damage,func,modifiers,isStatic) {
        return damage.map(function(x,n) {
            var params = jQuery.extend({ damage: damage, modifiers: modifiers },getParameters(x.position, n));
            if (isStatic) x.base += func(params);
            else x.multipliers.push([ func(params), 'captain effect' ]);
            return { unit: x.unit, orb: x.orb, base: x.base, multipliers: x.multipliers, position: x.position };
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
        // static rcv
        for (var j=0;j<enabledSpecials.length;++j) {
            if (enabledSpecials[j].hasOwnProperty('rcvStatic'))
                rcv += enabledSpecials[j].rcvStatic(params);
        }
        // non-static rcv
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('rcv'))
                rcv *= enabledEffects[i].rcv(params);
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
        var currentMax = -1, currentResult = null;
        chainSpecials.forEach(function(special) {
            var multipliersUsed = [ ], currentHits = 0, overall = 0;
            var i, params = [ ];
            for (var j=0;j<damage.length;++j) params.push(getParameters(damage[j].position, j));
            var result = damage.map(function(x,n) {
                // calculate chain multiplier
                var chainModifier = cptsWith.chainModifiers.reduce(function(prev,next) {
                    return prev * next.chainModifier(getParameters(x.position, n));
                },1);
                var chainMultiplier = getChainMultiplier(special.chain(params[n]), modifiers.slice(0,n), chainModifier);
                if (mapEffect.hasOwnProperty('chainLimiter'))
                    chainMultiplier = Math.min(mapEffect.chainLimiter(params[n]), chainMultiplier);
                else if (special.hasOwnProperty('chainLimiter'))
                    chainMultiplier = Math.min(special.chainLimiter(params[n]), chainMultiplier);
                // add or update chain multiplier to multiplier list
                for (i=0;i<x.multipliers.length;++i) {
                    if (x.multipliers[i][1] != 'chain') continue;
                    x.multipliers[i][0] = chainMultiplier;
                    break;
                }
                if (i == x.multipliers.length) x.multipliers.push([ chainMultiplier, 'chain' ]);
                // compute damage
                var unitAtk = Math.floor(x.base * totalMultiplier(x.multipliers));
                var temp = computeDamageOfUnit(x.unit.unit, unitAtk, modifiers[n], currentHits);
                currentHits = temp.hits;
                overall += temp.result;
                multipliersUsed.push(chainMultiplier);
                // return value
                return { unit: x.unit, orb: x.orb, damage: temp.result, base: x.base, multipliers: x.multipliers, position: x.position };
            });
            if (currentMax < overall) {
                currentMax = overall;
                currentResult = { result: result, chainMultipliers: multipliersUsed };
            }
        });
        return currentResult;
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
                var multipliers = jQuery.extend([ ], x.multipliers), base = x.base;
                specials.forEach(function(data) {
                    if (!data.s) { // non-static
                        var text = (team[data.sourceSlot] ?  'special (' + shortName(team[data.sourceSlot].unit.name) + ')' : 'special');
                        multipliers.push([ data.f(jQuery.extend({ sourceSlot: data.sourceSlot },getParameters(x.position))), text ]);
                    } else { // static
                        base += data.f(jQuery.extend({ sourceSlot: data.sourceSlot },getParameters(x.position)));
                    }
                });
                return { unit: x.unit, orb: x.orb, base: base, multipliers: multipliers, position: x.position };
            });
            // sort by damage again
            if (!noSorting) temp = temp.sort(function(x,y) { return x.base * totalMultiplier(x.multipliers) - y.base * totalMultiplier(y.multipliers); });
            // apply non-static captain effects
            for (var i=0;i<cptsWith.hitModifiers.length;++i)
                temp = applyCaptainEffectsToDamage(temp,cptsWith.hitModifiers[i].hitAtk,hitModifiers);
            // calculate the new overall damage
            var total = temp.reduce(function(prev,next) { return prev + next.base * totalMultiplier(next.multipliers); },0);
            if (total < current) return;
            result = temp;
            current = total;
        });
        return current > -1 ? result : JSON.parse(JSON.stringify(damage));
    };

    var applyEffectDamage = function(damage,func) {
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
        chainSpecials = [ ];
        enabledSpecials.forEach(function(data) {
            if (data === null) return;
            // notice specials with both atk and atkStatic defined are not supported right now
            if (data.hasOwnProperty('atk') || data.hasOwnProperty('atkStatic'))
                result[data.type].push({ sourceSlot: data.sourceSlot, f: (data.atk || data.atkStatic), s: data.hasOwnProperty('atkStatic') });
            if (data.hasOwnProperty('orb'))
                result.orb.push({ sourceSlot: data.sourceSlot, f: data.orb });
            if (data.hasOwnProperty('chain'))
                chainSpecials.push({ sourceSlot: data.sourceSlot, chain: data.chain, chainLimiter: data.chainLimiter || function() { return Infinity; } });
        });
        specialsCombinations = Utils.arrayProduct([ result.type.concat(result.class), result.condition, result.orb ]);
        if (chainSpecials.length === 0) chainSpecials.push({
            chain: function() { return 1.0; },
            chainLimiter: function() { return Infinity; }
        });
    };

    /* * * * * * Utility functions * * * * */

    var initializeDataStructs = function() {
        initDone = true;
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
            if (data.damage) mapEffect.damage = data.damage;
        }
        // team
        team = $scope.data.team.map(function(x,n) {
            if (!$scope.tdata.team[n] || $scope.tdata.team[n].removed)
                return { unit: null, level: -1, candies: { atk: 0, hp: 0, rcv: 0 } };
            else
                return x;
        }).slice(0,6);
        // team specials
        // "sourceSlot": slot of the unit the special belongs to
        $scope.tdata.team.forEach(function(x,n) {
            if (!team[n].unit || n > 5) return;
            var id = team[n].unit.number + 1;
            if (x.special && specials.hasOwnProperty(id)) {
                if (specials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent)
                    conflictWarning = true;
                else
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n },specials[id]));
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
            if (team[i].unit === null) continue;
            var id = team[i].unit.number + 1;
            if (!window.captains.hasOwnProperty(id)) continue;
            var effect = jQuery.extend({ },window.captains[id]),
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
            hitMultipliers: enabledEffects.filter(function(x) { return x.hasOwnProperty('hit');  }),
            chainModifiers: enabledEffects.filter(function(x) { return x.hasOwnProperty('chainModifier'); }),
            damageSorters:  enabledEffects.filter(function(x) { return x.hasOwnProperty('damageSorter');  })
        };
        // get all non-default hit modifiers
        hitModifiers = getPossibleHitModifiers(cptsWith.hitModifiers);
        // compute special combinations
        computeSpecialsCombinations();
        $scope.conflictingSpecials = (specialsCombinations.length > 1 || chainSpecials.length > 1);
        // get ship bonus
        shipBonus = jQuery.extend({ bonus: ships[$scope.data.ship[0]] },{ level: $scope.data.ship[1] });
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
        if (!window.zombies.hasOwnProperty(ids[0]) || !window.zombies.hasOwnProperty(ids[1])) return;
        var healer = -1, other = -1;
        for (var i=0;i<2;++i) {
           if (window.zombies[ids[i]].type == 'healer') healer = i;
           else other = i;
        }
        if (healer == -1 || other == -1) return null;
        var healAmount = window.zombies[ids[healer]].amount || Math.floor(data.team[healer].rcv * window.zombies[ids[healer]].multiplier);
        if (shipBonus.bonus && shipBonus.bonus.heal) healAmount += shipBonus.bonus.heal({ boatLevel: shipBonus.level });
        if (window.zombies[ids[other]].type == 'zombie') { // zombie
            var works = 1 + healAmount >= Math.floor($scope.numbers.hp * window.zombies[ids[other]].threshold);
            if (works) return true;
            else return -Math.floor(healAmount / window.zombies[ids[other]].threshold);
        } else // reducer
            return Math.floor(healAmount / window.zombies[ids[other]].multiplier);
    };

    var totalMultiplier = function(data) {
        return data.reduce(function(prev,next) { return prev * next[0]; },1);
    };

    var shortName = function(name) {
        return name.length < 10 ? name : name.slice(0,10) + '...';
    };

    // TODO Stop modifying prototypes because you're lazy

    Array.prototype.subcontains = function(data) {
        return this.join('!').indexOf(data.join('!')) != -1;
    };

    Array.prototype.has = function(what) {
        return this.indexOf(what) != -1;
    };

    Array.prototype.count = function(data) {
        var total = 0;
        for (var i=0;i<this.length;++i) {
            if (this[i] == data) ++total;
        }
        return total;
    };

    String.prototype.has = function(what) {
        return this == what;
    };

};

angular.module('optc')
    .controller('CruncherCtrl', CruncherCtrl);

})();
