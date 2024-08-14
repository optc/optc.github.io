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

// specialType for getParameters and cacheParameters
const SPECIAL = 'special';
const ALTSPECIAL = 'altspecial';
const CAPSPECIAL = 'capspecial';

/****************
 * CruncherCtrl *
 ****************/

var CruncherCtrl = function($scope, $rootScope, $timeout) {

    /* * * * * Local variables * * * * */

    var cptsWith = { };
    var specialsWith = { };
    var currentDefense = 0;

    var enemyEffects = {
        barrier: false, // this will use the enemyBuffs.barrier for now, because orb barriers aren't implemented yet
        burn: false,
        paralysis: false,
        def: false,
        delay: false,
        increaseDamageTaken: false,
        increaseDamageTakenPlus: false,
        increaseDamageTakenCeil: false,
        mark: false,
        negative: false,
        poison: false,
    };

    // the enemy effects from specials will be incremented/decremented here
    // this will be separate from the actual `enemyEffects` object
    // because enemy effects from captain and map effects can't be deducted (no event handlers for disabling)
    var enemyEffectsFromSpecials = {
        ...enemyEffects,
        def: [], // replace the booleans with arrays for these effects with multiplier
        increaseDamageTaken: [],
        increaseDamageTakenPlus: [],
        increaseDamageTakenCeil: [],
    };

    var katakuri = false;

    $scope.data.customATK = 1;
    $scope.data.customOrb = 1;
    $scope.data.customAffinity = 1;
    $scope.data.customATKBase = 0;
    $scope.data.customChainAddition = 0;

    $scope.data.classOverride = [ null, null ];

    var specialsCombinations = [ ], chainSpecials = [ ];
    var hitModifiers = [ ];
    var shipBonus = { };
    var enabledSpecials = [ ];
    var enabledEffects = [ ];

    var crunchSelfInhibit = false;
    var mapEffect = { };
    var team = [ ];
    $rootScope.cruncherReady = false;
    
    var gearLevel = [ 0, 0 ];

    /* * * * * Events * * * * */

    $rootScope.$on('specialToggled', function(e, slot, enabled) {

        var unit = $scope.data.team[slot].unit;
        if (!unit) return;
        var id = unit.number + 1;

        // provide specialType to get the cached parameters on deactivation
        var params = getParameters(slot, undefined, slot, SPECIAL);

        if (!specials.hasOwnProperty(id)) return;
        if (enabled) {
            cacheParameters(params, slot, SPECIAL);
            if (specials[id].hasOwnProperty('onActivation')) {
                specials[id].onActivation(params);
            }
            applyEnemyEffectsFromSpecial(specials[id], params, true);
        } else {
            applyEnemyEffectsFromSpecial(specials[id], params, false);
            if (specials[id].hasOwnProperty('onDeactivation')) {
                specials[id].onDeactivation(params);
            }
        }
    });
    
    $rootScope.$on('altspecialToggled', function(e, slot, enabled) {
        var unit = $scope.data.team[slot].unit;
        if (!unit) return;
        var id = unit.number + 1;

        // provide specialType to get the cached parameters on deactivation
        var params = getParameters(slot, undefined, slot, ALTSPECIAL);
        if (!altspecials.hasOwnProperty(id)) return;
        if (enabled) {
            cacheParameters(params, slot, ALTSPECIAL);
            if (altspecials[id].hasOwnProperty('onActivation')) {
                altspecials[id].onActivation(params);
            }
            applyEnemyEffectsFromSpecial(altspecials[id], params, true);
        } else {
            applyEnemyEffectsFromSpecial(altspecials[id], params, false);
            if (altspecials[id].hasOwnProperty('onDeactivation')) {
                altspecials[id].onDeactivation(params);
            }
        }
    });
    
    $rootScope.$on('capspecialToggled', function(e, slot, enabled) {
        var unit = $scope.data.team[slot].unit;
        if (!unit) return;
        var id = unit.number + 1;

        // provide specialType to get the cached parameters on deactivation
        var params = getParameters(slot, undefined, slot, CAPSPECIAL);
        if (!capspecials.hasOwnProperty(id)) return;
        if (enabled) {
            cacheParameters(params, slot, CAPSPECIAL);
            if (capspecials[id].hasOwnProperty('onActivation')) {
                capspecials[id].onActivation(params);
            }
            applyEnemyEffectsFromSpecial(capspecials[id], params, true);
        } else {
            applyEnemyEffectsFromSpecial(capspecials[id], params, false);
            if (capspecials[id].hasOwnProperty('onDeactivation')) {
                capspecials[id].onDeactivation(params);
            }
        }
    });

    $scope.$watch('data',crunch,true);
    $scope.$watch('tdata',crunch,true);

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
        var hpMax = 0, rcvTotal = 0, bonusrcv = 0;
        team.forEach(function(x,n) {
            if (n > 5 || x.unit === null) return;
            var shipParam = getParameters(n);
            // hp
            var hp = getStatOfUnit(x,'hp',n);
            hp = applyStaticEffectsToHP(n,hp);
            //hp += getShipBonus('hp',true,x.unit,n,team[1].unit,n,shipParam);
            hp *= getEffectBonus('hp',x.unit);
            hp *= getShipBonus('hp',false,x.unit,n,team[1].unit,n,shipParam);
            hpMax += Math.floor(applyCaptainEffectsToHP(n,hp)) + getShipBonus('hp',true,x.unit,n,team[1].unit,n,shipParam);
            // rcv
            var rcv = getStatOfUnit(x,'rcv',n);
            rcv += getShipBonus('rcv',true,x.unit,n,team[1].unit,n,shipParam);
            rcv *= getShipBonus('rcv',false,x.unit,n,team[1].unit,n,shipParam);
            rcv *= getEffectBonus('rcv',x.unit);
            rcvTotal += Math.floor(applyCaptainEffectsAndSpecialsToRCV(n,rcv));
            
            bonusrcv = applyAddRCVSpecialsToRCV(n,0);
            
        });
        var params = getParameters(0);
        hpMax += $scope.tdata.basehpCounter.value;
        result.rcv = Math.max(0,rcvTotal);
        result.rcv += bonusrcv
        var cost = team.slice(1,6).reduce(function(prev,next) { return prev + (!next.unit ? 0 : next.unit.cost); },0);
        result.cost = { cost: cost, level: Math.max(1,Math.floor(cost / 2) * 2 - 18) };
        $scope.numbers = jQuery.extend($scope.numbers, result);
        $scope.numbers.hp = Math.max(1,hpMax);
        checkHealAndZombie(result, $scope.numbers, [$scope.data.actionleft, $scope.data.actionright], $scope.data.team.map(unit => unit.limit), params);
        $timeout(function() {
            crunchSelfInhibit = false;
            $rootScope.cruncherReady = true; // let it turn off `crunchSelfInhibit` before allowing `transfer.js` to turn on specials
        });
    }

    var crunchForType = function(type) {
        // compute base damage
        var damage = getBaseDamageForType(type,false);
        // compute best overall damage
        var noSorting = $scope.tdata.orderOverride.hasOwnProperty(type);
        var overallDamage = optimizeDamage(damage,noSorting,type);
        // apply damage sorters to base damage, recalculate the new damage and update overallDamage if necessary
        // only done if the user hasn't already specified a custom order of their own
        if (!noSorting) {
            for (var i=0;i<cptsWith.damageSorters.length;++i) {
                var baseDamage = JSON.parse(JSON.stringify(damage));
                for (var j=0;j<baseDamage.length;++j) {
                    baseDamage[j].multipliers = baseDamage[j].multipliers
                        .filter(function(x) { return x[1] != 'chain' && x[1] != 'captain effect'; });
                }
                baseDamage.gear = [ $scope.data.gearLevelLeft, $scope.data.gearLevelRight ]
                var newDamages = cptsWith.damageSorters[i].damageSorter(baseDamage);
                if (newDamages === null) continue;
                for (var k=0;k<newDamages.length;++k) {
                    var newOverallDamage = optimizeDamage(newDamages[k],true,type);
                    if (newOverallDamage.overall > overallDamage.overall) overallDamage = newOverallDamage;
                }
            }
        }
        //console.log(overallDamage);
        // return results
        for (var l=0;l<overallDamage.damage.length;++l) {
            overallDamage.damage[l].multipliers = overallDamage.damage[l].multipliers.filter(function(x) { return x[0] != 1; });
            overallDamage.damage[l].multipliers.sort(function(x,y) { return x[1].localeCompare(y[1]); });
        }
        /*console.log(overallDamage);
        for(var key in overallDamage.damage){
            if(parseInt(key)){
                console.log(overallDamage.damage[key].position);
                if((overallDamage.damage[key].unit.unit.number == 2232 || overallDamage.damage[key].unit.unit.number == 2233) && overallDamage.damage[key].position < 2 && $scope.tdata.semlaCounter.value >= 3 && parseInt(key) != 5){
                    var temp = overallDamage.damage[key];
                    var m = parseInt(key);
                    while(m < 5){
                        overallDamage.damage[toString(m)] = overallDamage.damage[toString(m + 1)];
                        m++;
                    }
                    overallDamage.damage['5'] = temp;
                }
            }
        }*/
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
            var shipParam = getParameters(n);
            var friendCaptain = team[0].unit;
            var captain = team[1].unit;
            var unitTemp = Object.assign({},x.unit);
            if(n == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number+1)) cloneReplace(unitTemp, 0);
            else if(n != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number+1)) cloneReplace(unitTemp, n);
            if(friendCaptain && $scope.data.cloneCheck1 && [3522, 3523].includes(friendCaptain.number+1)) cloneReplace(friendCaptain, 0);
            if(captain && $scope.data.cloneCheck2 && [3522, 3523].includes(captain.number+1)) cloneReplace(captain, 1);
            
            if($scope.data.classOverrideEnabled) {
                classOverrideReplace(unitTemp, n);
                classOverrideReplace(friendCaptain, 0);
                classOverrideReplace(captain, 1);

            }
            
            x.unit = unitTemp; //Override for custom unit Type/Classes

            var orb = $scope.tdata.team[n].orb;
            var atk = getStatOfUnit(x,'atk',n); // basic attack (scales with level);
            var ship = getShipBonus('atk',false,x.unit,n,team[1].unit,n,shipParam), againstType = type;//Same problem as above, so yeah
            var multipliers = [ ];
            if (orb == 0.5 && x.unit.type == 'DEX') orb = (window.specials[1221].turnedOn || window.specials[1222].turnedOn || window.specials[2235].turnedOn || window.specials[2236].turnedOn || window.specials[2363].turnedOn || window.specials[2370].turnedOn || window.specials[2371].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Driven")) orb = (window.specials[1259].turnedOn || window.specials[1260].turnedOn || window.specials[1323].turnedOn || window.specials[1324].turnedOn || window.specials[2425].turnedOn || window.specials[2426].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Slasher")) orb = (window.specials[1323].turnedOn || window.specials[1324].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Fighter")) orb = (window.specials[1593].turnedOn.has(true) || window.specials[1463]. turnedOn || window.specials[1462]. turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Powerhouse")) orb = (window.specials[1528].turnedOn || window.specials[2318].turnedOn || window.specials[2470].turnedOn || window.specials[2471].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Free Spirit")) orb = (window.specials[1593].turnedOn.has(true)) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Shooter")) orb = (window.specials[1640].turnedOn || window.specials[1746].turnedOn || window.specials[1747].turnedOn || window.specials[2309].turnedOn || window.specials[2310].turnedOn || window.specials[2324].turnedOn || window.specials[2325].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Striker")) orb = (window.specials[1651].turnedOn || window.specials[1652].turnedOn || window.specials[2373].turnedOn || window.specials[2470].turnedOn || window.specials[2471].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'PSY') orb = (window.specials[2235].turnedOn || window.specials[2236].turnedOn || window.specials[2249].turnedOn 
                                     || ((window.specials[2374].turnedOn || window.specials[2375].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Powerhouse")))
                                     || ((window.specials[1977].turnedOn || window.specials[1978].turnedOn) && (x.unit.class.has("Free Spirit")))) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'QCK') orb = (window.specials[2235].turnedOn || window.specials[2236].turnedOn 
                                     || ((window.specials[2374].turnedOn || window.specials[2375].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Powerhouse")))
                                     || ((window.specials[1323].turnedOn || window.specials[1324].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Driven")))
                                     || ((window.specials[1977].turnedOn || window.specials[1978].turnedOn) && (x.unit.class.has("Free Spirit")))
                                     || ((window.specials[1528].turnedOn) && (x.unit.class.has("Powerhouse")))
                                     || (window.specials[2128].turnedOn && (x.unit.class.has("Striker") || x.unit.class.has("Slasher")))) ? 2 : 0.5;
            if (orb == 'str') orb = (window.specials[1221].turnedOn || window.specials[1222].turnedOn || window.specials[2235].turnedOn || window.specials[2236].turnedOn  || window.specials[2553].turnedOn 
                                     || ((window.specials[1259].turnedOn || window.specials[1260].turnedOn || window.specials[2425].turnedOn || window.specials[2426].turnedOn) && x.unit.class.has("Driven"))
                                     || ((window.specials[1323].turnedOn || window.specials[1324].turnedOn) && (x.unit.class.has("Driven") || x.unit.class.has("Slasher")))
                                     || ((window.specials[1528].turnedOn || window.specials[2318].turnedOn) && x.unit.class.has("Powerhouse"))
                                     || ((window.specials[2470].turnedOn || window.specials[2471].turnedOn) && (x.unit.class.has("Striker") || x.unit.class.has("Powerhouse")))
                                     || (window.specials[1593].turnedOn.has(true) && (x.unit.class.has("Fighter") || x.unit.class.has("Free Spirit")))
                                     || ((window.specials[1651].turnedOn || window.specials[1652].turnedOn) && x.unit.class.has("Striker"))
                                     || ((window.specials[1640].turnedOn || window.specials[1746].turnedOn|| window.specials[1747].turnedOn || window.specials[2309].turnedOn || window.specials[2310].turnedOn || window.specials[2324].turnedOn || window.specials[2325].turnedOn) && x.unit.class.has("Shooter"))
                                     || ((window.specials[1940].turnedOn|| window.specials[1941].turnedOn) && (x.unit.type == "STR" || x.unit.type == "QCK" || x.unit.type == "PSY"))
                                     || ((window.specials[2264].turnedOn|| window.specials[2265].turnedOn) && (x.unit.type == "STR" || x.unit.type == "DEX" || x.unit.type == "PSY"))) ? 2 : 'str';
            if (orb == 'dex') orb = (window.specials[2235].turnedOn || window.specials[2236].turnedOn 
                                     || ((window.specials[2374].turnedOn || window.specials[2375].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Powerhouse")))
                                     || ((window.specials[1323].turnedOn || window.specials[1324].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Driven")))
                                     || ((window.specials[1977].turnedOn || window.specials[1978].turnedOn) && (x.unit.class.has("Free Spirit")))
                                     || ((window.specials[1528].turnedOn) && (x.unit.class.has("Powerhouse")))
                                     || (window.specials[2128].turnedOn && (x.unit.class.has("Striker") || x.unit.class.has("Slasher")))) ? 2 : 'dex';
            if (orb == 'int') orb = (window.specials[2235].turnedOn || window.specials[2236].turnedOn || window.specials[2249].turnedOn || window.specials[2527].turnedOn
                                     || ((window.specials[2374].turnedOn || window.specials[2375].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Powerhouse")))
                                     || ((window.specials[1977].turnedOn || window.specials[1978].turnedOn) && (x.unit.class.has("Free Spirit")))) ? 2 : 'int';
            if (orb == 'empty') orb = (window.specials[3740].turnedOn || window.specials[3741].turnedOn || window.specials[4099].turnedOn.has(true) || window.specials[4100].turnedOn.has(true)) ? 2.25 : 'empty';
            if (orb == 'rainbow') orb = (window.specials[3943].turnedOn || window.specials[3944].turnedOn) ? 2.75 : (window.specials[2631].turnedOn) ? 2.25 : 'rainbow';
            
            if (orb == 0.5) orb = (window.specials[1269].turnedOn || window.specials[1270].turnedOn || window.specials[1330].turnedOn || window.specials[1546].turnedOn || window.specials[1547].turnedOn || window.specials[1557].turnedOn || window.specials[1890].turnedOn || window.specials[1891].turnedOn || window.specials[2227].turnedOn || window.specials[2478].turnedOn || window.specials[2479].turnedOn) ? 1 : .5;
            
            //Captain Meat orbs because Nekomamushi/also counts as TND because lazy
            if (orb =='meat'){
                for (temp = 0; temp < 2; temp++){
                    if (team[temp].unit != null){
                        if ([ 1610, 1609, 1532, 1531, 2232, 2233, 2234, 2500, 2300, 2803, 2804, 5052, 5054, 5055, 5057, 2957, 2957, 3306, 3307, 3814, 3888, 3889, 3904, 3905, 3947, 3948, 5453, 5454, 5455, 5456, 5457, 5548, 5459, 5460, 3955, 3956, 3957, 3966, 3967, 5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 4028, 4029, 4139 ].includes(team[temp].unit.number + 1)){
                            orb = 2;
                        }
                        if ([ 2012, 2013 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Free Spirit")){
                            orb = 2;
                        }
                        if ([ 3890, 3891 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Driven") || x.unit.class.has("Cerebral"))){
                            orb = 2;
                        }
                        if ([ 2462, 2463 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Powerhouse")){
                            orb = 2;
                        }
                    }
                }
                if (window.specials[3957].turnedOn || window.altspecials[4084].turnedOn) orb = 2.75
                if (window.altspecials[3956].turnedOn) orb = 3
            }
            if (orb =='tnd'){
                orb = (window.specials[4028].turnedOn == 2 || window.specials[4029].turnedOn == 2 || window.specials[4114].turnedOn || window.specials[4115].turnedOn) ? 2.75 : 
                    (window.altspecials[3895].turnedOn.includes(true) || window.altspecials[3896].turnedOn.includes(true)) ? 2.5 : 
                    (window.altspecials[5430].turnedOn || window.altspecials[5432].turnedOn || window.specials[4028].turnedOn == 1 || window.specials[4029].turnedOn == 1) ? 2.25 :
                    (window.specials[5430].turnedOn || window.specials[5432].turnedOn) ? 2 : orb;
                for (temp = 0; temp < 2; temp++){
                    if (team[temp].unit != null){
                        if ([ 3904, 3905, 3947, 3948, 3966, 3967, 5430, 5432, 5453, 5454, 5455, 5456, 5457, 5548, 5459, 5460, 5539, 5540, 5541, 5542, 5543, 5544, 5545, 5546, 5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 4028, 4029, 4050 ].includes(team[temp].unit.number + 1)){
                            orb = orb == 'tnd' ? 2 : Math.max(orb,2);
                        }
                    }
                }
            }
            for (temp = 0; temp < 2; temp++){
                if (team[temp].unit != null){
                    if (orb == 'str'){
                        if ([ 2137 ].includes(team[temp].unit.number + 1)){
                            orb = 2;
                        }
                        if ([ 2022, 2023 ].includes(team[temp].unit.number + 1) && x.unit.type == 'INT'){
                            orb = 2;
                        }
                        if ([ 2306 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Slasher") || x.unit.class.has("Cerebral"))){
                            orb = 2;
                        }
                        if ([ 5152, 5154, 5155, 5156, 5158, 5159 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Striker") || x.unit.class.has("Cerebral"))){
                            orb = 2;
                        }
                        if ([ 5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Driven")){
                            orb = 2;
                        }
                    }
                    if (orb == 'superbomb'){
                        if ([ 2979, 2980, 5594, 5595, 5596, 5597, 5598, 5599, 5600, 5601 ].includes(team[temp].unit.number + 1)){
                            //orb = 2;
                            orb = (window.specials[5596].turnedOn || window.capspecials[5597].turnedOn || window.capspecials[5600].turnedOn || window.capspecials[5601].turnedOn) ? 2.5 : 
                                (window.specials[3762].turnedOn || window.capspecials[5595].turnedOn || window.capspecials[5599].turnedOn) ? 2.25 : 2;
                        }
                    }
                    if (orb == 'dex'){
                        if ([ 2476, 2477 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Slasher"))){
                            orb = 2;
                        }
                    }
                    if (orb == 'int'){
                        if ([ 2476, 2477 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Slasher"))){
                            orb = 2;
                        }
                    }
                    if (orb == 0.5){
                        if ([ 2137 ].includes(team[temp].unit.number + 1) && x.unit.type == 'DEX'){
                            orb = 2;
                        }
                        if ([ 5026, 5027 ].includes(team[temp].unit.number + 1) && x.unit.type == 'DEX'){
                            orb = 2;
                        }
                        if ([ 2306 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Slasher") || x.unit.class.has("Cerebral")) && x.unit.type == 'DEX'){
                            orb = 2;
                        }
                        if ([ 5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Driven") && x.unit.type == 'DEX'){
                            orb = 2;
                        }
                        if ([ 2476, 2477 ].includes(team[temp].unit.number + 1) && (x.unit.class.has("Slasher")) && (x.unit.type == 'PSY' || x.unit.type == 'QCK')){
                            orb = 2;
                        }
                    }
                }
            }
            if (orb =='dex' || (orb == 2 && x.unit.type == "DEX")){
                for (temp = 0; temp < 2; temp++){
                    if (team[temp].unit != null){
                        if ([ 4050 ].includes(team[temp].unit.number + 1)){
                            orb = 2;
                        }
                    }
                }
                if (window.specials[4050].turnedOn) orb = 2.5;
            }
            if (orb == 0.5 && x.unit.type == 'DEX' && $scope.data.effect == 'STR Orbs Beneficial') orb = 2;
            if (orb == 'str' && $scope.data.effect == 'STR Orbs Beneficial') orb = 2;
            if (orb == 'meat') orb = 
                (window.specials[4114].turnedOn || window.specials[4115].turnedOn) ? 2.75 : 
                ((window.specials[1515].turnedOn || window.specials[1516].turnedOn || (window.specials[1593].turnedOn.has(true)) && x.unit.class.has("Fighter")) || 
                ((window.specials[1181].turnedOn || window.specials[1182].turnedOn) && x.unit.class.has("Slasher")) || 
                ((window.specials[1380].turnedOn || window.specials[1379].turnedOn) && (x.unit.class.has("Cerebral") || x.unit.class.has("Free Spirit")))) || 
                ((window.specials[2128].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Striker"))) ? 2 : 1;
            if (orb == 'rainbow') orb = 2;
            if (orb == 'empty') orb = 1;
            if (orb == 'tnd') orb = 1;
            if (orb == 'wano') orb = window.specials[4114].turnedOn || window.specials[4115].turnedOn ? 2.75 : 2.5;
            if (orb == 'g'){
                orb = 1.5;
                if (Math.max(window.altspecials[5547].turnedOn, window.altspecials[5548].turnedOn, window.altspecials[5549].turnedOn, window.altspecials[5550].turnedOn, window.altspecials[5551].turnedOn, window.altspecials[5552].turnedOn, window.altspecials[5553].turnedOn, window.altspecials[5554].turnedOn) > -1) orb = [2, 2.25][Math.max(window.altspecials[5547].turnedOn, window.altspecials[5548].turnedOn, window.altspecials[5549].turnedOn, window.altspecials[5550].turnedOn, window.altspecials[5551].turnedOn, window.altspecials[5552].turnedOn, window.altspecials[5553].turnedOn, window.altspecials[5554].turnedOn)];
            }
            if (orb == 'superbomb'){
                orb = 1.5;
                orb = window.altspecials[4038].turnedOn || window.altspecials[4039].turnedOn ? 2.5 : 
                window.specials[3762].turnedOn ? 2.25 : orb;
            }
            if (orb == 'str' && x.type == 'DEX') orb = 0.5;
            if (orb == 'dex' && x.type == 'QCK') orb = 0.5;
            if (orb == 'qck' && x.type == 'STR') orb = 0.5;
            if (orb == 'psy' && x.type == 'INT') orb = 0.5;
            if (orb == 'int' && x.type == 'PSY') orb = 0.5;
            if (orb == 'str' || orb == 'dex' || orb == 'qck' || orb == 'psy' || orb == 'int') orb = 1;
            atk += getShipBonus('atk',true,x.unit,n,team[1].unit,n,shipParam);//This needs to be changed so that the second n is the position, but the position doesn't exist yet
            multipliers.push([ orb, 'orb' ]); // orb multiplier (fixed)
            
            multipliers.push([ getTypeMultiplierOfUnit(x.unit.type,type, x, n), 'type' ]); // type multiplier
            multipliers.push([ getEffectBonus('atk',x.unit), 'map effect' ]); // effect bonus (fixed)
            multipliers.push([ ship, 'ship' ]); // ship bonus (fixed)
            result.push({ unit: x, orb: orb, base: Math.floor(atk), multipliers: multipliers, position: n });
        });
        // apply static multipliers and static bonuses
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('atkStatic'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atkStatic,null,true,enabledEffects[i].sourceSlot);
            if (enabledEffects[i].hasOwnProperty('atk'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].atk,null,false,enabledEffects[i].sourceSlot);
            if (enabledEffects[i].hasOwnProperty('status'))
                result = applyCaptainEffectsToDamage(result,enabledEffects[i].status,null,false,enabledEffects[i].sourceSlot);
        }
        for (var i=0;i<enabledSpecials.length;++i) {
            if (enabledSpecials[i].hasOwnProperty('atkStatic'))
                result = applyCaptainEffectsToDamage(result,enabledSpecials[i].atkStatic,null,true,enabledSpecials[i].sourceSlot);
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
            for (var k=0;k<result.length;++k) {
                if (!override[k]) continue;
                var currentMultiplier = getTypeMultiplierOfUnit(result[k].unit.unit.type, type, result[k].unit, result[k].position);
                var newMultiplier = getTypeMultiplierOfUnit(result[k].unit.unit.type, override[k], result[k].unit, result[k].position);
                result[k].multipliers.push([ newMultiplier / currentMultiplier, 'type override' ]);
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
    var getOverallDamage = function(damage,hitModifiers,noSorting,type) {
        if (mapEffect.comboShield) mapEffect.shieldLeft = mapEffect.comboShield;
        else mapEffect.shieldLeft = 0;
        var result = applySpecialMultipliersAndCaptainEffects(damage,hitModifiers,noSorting);
        // apply chain and bonus multipliers
        result = applyChainAndBonusMultipliers(result,hitModifiers,type);
        if (mapEffect.damage) result.result = applyEffectDamage(result.result, mapEffect.damage);  
        //console.log(result);
        
        var overallDamage = result.result.reduce(function(prev,x) { return prev + x.damage; },0);
        
        return { damage: result.result, overall: overallDamage,
            hitModifiers: hitModifiers, chainMultipliers: result.chainMultipliers };
    };

    /* Calculates the highest overall damage for an array of hit modifiers. */
    var optimizeDamage = function(damage,noSorting,type) {
        // check damage from default order (or custom order) first, we'll use it as a base for comparison
        var temp = JSON.parse(JSON.stringify(damage));
        var currentResult = getOverallDamage(temp,hitModifiers[0],noSorting,type);
        
        for (var i=1;i<hitModifiers.length;++i) {
            var newDamage = JSON.parse(JSON.stringify(damage));
            var newResult = getOverallDamage(newDamage,hitModifiers[i],noSorting,type);
            if (newResult.overall > currentResult.overall) currentResult = newResult;
        }
        
        return currentResult;
    };

    /* * * * * * Basic operations * * * * */

    var getStatOfUnit = function(data,stat,slot) {
        var params = getParameters(slot);
        var atkbaseDamage = 0;
        var LBaddition = 0;
        var superClassBoost = 1;
        var birdBoost = 1;
        var maxLevel = (data.unit.maxLevel == 1 ? 1 : data.unit.maxLevel -1);
        var growth = data.unit.growth[stat] || 1;
        var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();

        data.level = Math.min(data.level, data.unit.maxLevel + [0, 6, 11, 21, 31, 51][data.llimit ? data.llimit : 0]); //fix for an error when changing a 150/150 unit's LLB to a lower level
        var result = data.level < 100 ? (data.unit[minStat] + (data.unit[maxStat] - data.unit[minStat]) * Math.pow((data.level-1) / maxLevel, growth)) : data.unit[maxStat]*(1+ 0.5*((1-(150-data.level)/51)));
        var candyBonus = (data.candies && data.candies[stat] ? data.candies[stat] * { hp: 5, atk: 2, rcv: 1 }[stat] : 0);

        var sugarSuperEnabled = 0;
        enabledSpecials.forEach(function(special){ if(params.team[special.sourceSlot].unit.number + 1 == 3805 && special.specialType == "special") {
            sugarSuperEnabled = $scope.data.team[special.sourceSlot].llimit == 5 ? 2 : 1;
        }});
        
        if(params.limit != null && params.limit != 0){
            LBaddition = data.unit.limitStats[stat][Math.min(params.limit-1,data.unit.limitStats[stat].length-1)];
            if(!LBaddition) LBaddition = 0;
        }
        if (stat == "atk" && params.sugarToy){
            result = [2500, 2750, 3250][sugarSuperEnabled];
            candyBonus = 0;
            LBaddition = 0;
        }
        var atkbaseTemp = 0;
        var atkbasePlusTemp = 0;
        enabledSpecials.forEach(function(data) {
            if (data.hasOwnProperty('atkbase') && stat == "atk"){
                params.cached = getCachedParameters(data.sourceSlot, data.specialType);
                params["sourceSlot"] = data.sourceSlot;
                atkbaseTemp = Math.max(data.atkbase(params),atkbaseTemp);
            }
            if (data.hasOwnProperty('atkbasePlus') && stat == "atk"){
                params.cached = getCachedParameters(data.sourceSlot, data.specialType);
                params["sourceSlot"] = data.sourceSlot;
                atkbasePlusTemp = Math.max(data.atkbasePlus(params),atkbasePlusTemp);
            }
        });
        
        atkbaseDamage += atkbaseTemp+(atkbaseTemp > 0 ? atkbasePlusTemp : 0);
        atkbaseDamage = parseFloat($scope.data.customATKBase) != 0 && stat == "atk" ? parseFloat($scope.data.customATKBase) : atkbaseDamage;

        var superClassBuffs = { "Fighter": 1.2, "Striker": 1.2, "Slasher": 1.2, "Shooter": 1.2, "Free Spirit": 1.2, "Cerebral": 1.2, "Driven": 1.2, "Powerhouse": 1.2 };
        enabledSpecials.forEach(function(data) {
            if (data.hasOwnProperty('superClass')){
                superParams = getParameters(slot);
                params["sourceSlot"] = data.sourceSlot;
                var temp = data.superClass(params);
                for([key, value] of Object.entries(temp)){
                    if(stat == "atk") superClassBuffs[key] = Math.max(superClassBuffs[key], value);
                }
            }
        });
        if (Array.isArray(data.unit.class)) { superClassBoost *= ($scope.data["superClass" + data.unit.class[0].replace(" ","")]) ? superClassBuffs[data.unit.class[0]] : 1; superClassBoost *= ($scope.data["superClass" + data.unit.class[1].replace(" ","")]) ? superClassBuffs[data.unit.class[1]] : 1; }
        else superClassBoost = ($scope.data["superClass" + data.unit.class.replace(" ","")]) ? superClassBuffs[data.unit.class] : 1;
        
        birdBoost = $scope.data.birdBuff ? 1.5 : 1;

        return (Math.floor(result) + candyBonus + LBaddition + atkbaseDamage)*superClassBoost*birdBoost;
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
     * The Increase Damage Taken is applied after defense reduction per hit, then rounded down.
     * - if unit's hit deals 1, stays 1 with 1.5x increased damage taken, becomes 2 if 2x.
     */
    var computeDamageOfUnit = function(position, unit, unitAtk, hitModifier, currentHitCount, type, increaseDamageTakenMultiplier) {
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
            lastAtk = unitAtk;
            // apply hit-based captain effects if any
            cptsWith.hitMultipliers.forEach(function(x) { lastAtk *= x.hit(result.hits, getParameters(position)); });
            specialsWith.hitMultipliers.forEach(function(x) { lastAtk *= x.hit(result.hits, getParameters(position, undefined, x.sourceSlot, x.specialType)); });
            // apply defense
            lastHit = lastAtk / unit.combo;
            lastHit = Math.ceil(Math.max(1, lastHit - currentDefense));
            lastHit = Math.floor(lastHit * increaseDamageTakenMultiplier);
            // apply combo shield if active
            if (mapEffect.shieldLeft > 0) {
                if (!mapEffect.comboType) {
                    --mapEffect.shieldLeft;
                }
                continue;
            }
            // add hit to current total
            result.result += lastHit;
        }
        if (mapEffect.comboType == hitModifier && mapEffect.shieldLeft > 0) {
            --mapEffect.shieldLeft;
        }
        // apply hit bonus
        if (bonusDamageBase > 0 && mapEffect.shieldLeft == 0) {
            if (lastHit > Math.floor(1 * increaseDamageTakenMultiplier)) result.result += Math.floor(Math.ceil(lastAtk * 0.9 * bonusDamageBase) * increaseDamageTakenMultiplier);
            else result.result += Math.floor(Math.max(0,Math.ceil(lastAtk * (0.9 * bonusDamageBase + 1 / unit.combo)) - currentDefense - 1) * increaseDamageTakenMultiplier);
        }
        
        //Apply Static Bonus Damage From Specials
        var staticBonusDamage = computeFlatBonusDamage(hitModifier, unit, type, position);
        if ((staticBonusDamage > 0) && ((staticBonusDamage - currentDefense)>0) && (result.result > 0)) {
            result.result += Math.floor((staticBonusDamage - currentDefense) * increaseDamageTakenMultiplier);
        }
        
        // apply fixed threshold barrier if active
        if (mapEffect.barrierThreshold && result.result > mapEffect.barrierThreshold) {
            result.result = Math.floor(mapEffect.barrierThreshold +
                Math.floor((result.result - mapEffect.barrierThreshold) * (1 - mapEffect.barrierReduction)) * increaseDamageTakenMultiplier);
        }
        return result;
    };

    /* Computes the actual defense threshold of the enemy after the specials are factored in.
     * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
     */
    var computeActualDefense = function(shipName) {
        var baseDefense = parseInt($scope.data.defense, 10) || 0;
        currentDefense = baseDefense;
        if (enemyEffectsFromSpecials.def.length > 0) {
            var defDownMultiplier = Math.min(...enemyEffectsFromSpecials.def);
            currentDefense = baseDefense * defDownMultiplier;
        }
        if($scope.data.effect == "80% DEF reduction"){
            currentDefense = Math.min(currentDefense,baseDefense * .20);
            enemyEffects.def = true;
        }
        if(shipName=="Flying Dutchman - Special ACTIVATED"){
            currentDefense = Math.min(currentDefense,baseDefense * .75);
            enemyEffects.def = true;
        }
        if(enemyEffects.negative){
            currentDefense = Math.ceil(currentDefense*0.8)
        }
    };

    var getShipBonus = function(type,static,unit,slot,captain,chainPosition,parameters) {
        var result = (static ? 0 : 1);
        for (var key in shipBonus.bonus) {
            if (key.indexOf(type) !== 0) continue;
            var isStatic = (key.indexOf('Static') !== -1);
            if (isStatic != static) continue;
            if (static) result += shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot, classCount: classCounter(), colorCount: colorCounter(), captain : captain, hitModifiers: hitModifiers, chainPosition: chainPosition, p: parameters });
            else result *= shipBonus.bonus[key]({ boatLevel: shipBonus.level, unit: unit, slot: slot, classCount: classCounter(), colorCount: colorCounter(), captain : captain, hitModifiers: hitModifiers, chainPosition: chainPosition, p: parameters });
        }
        return result;
    };

    var getEffectBonus = function(type,unit) {
        if (!$scope.data.effect || !effects[$scope.data.effect].hasOwnProperty(type)) return 1;
        return effects[$scope.data.effect][type](unit.unit || unit);
    };

    var getAffinity = function(strength, attackerType, teamSlot){
        var superAffinity = [ 2.5, 0.75 ];
        enabledSpecials.forEach(function(data) {
            if (data.hasOwnProperty('superAffinity')){
                superParams = getParameters(teamSlot);
                params["sourceSlot"] = data.sourceSlot;
                superAffinity[0] = data.superAffinity(params) > 1 ? data.superAffinity(params) : superAffinity[0];
            }
        });
        if(strength == 'strong') return $scope.data["superType" + attackerType] ? $scope.data.enemySuperType ? 2 : superAffinity[0] : $scope.data.enemySuperType ? 1.5 : 2;
        else return $scope.data["superType" + attackerType] ? $scope.data.enemySuperType ? 0.5 : superAffinity[1] : $scope.data.enemySuperType ? 0.25 : 0.5;
    };

    var getTypeMultiplierOfUnit = function(attackerType, attackedType, unit, teamSlot) {
        var typeMult = 1, affinityMult = 1, captAffinityMult = 1;
        
        if (attackerType == 'STR' && attackedType == 'DEX') typeMult = getAffinity('strong', attackerType, unit, teamSlot);
        if (attackerType == 'QCK' && attackedType == 'STR') typeMult = getAffinity('strong', attackerType, unit, teamSlot);
        if (attackerType == 'DEX' && attackedType == 'QCK') typeMult = getAffinity('strong', attackerType, unit, teamSlot);
        if (attackerType == 'INT' && attackedType == 'PSY') typeMult = getAffinity('strong', attackerType, unit, teamSlot);
        if (attackerType == 'PSY' && attackedType == 'INT') typeMult = getAffinity('strong', attackerType, unit, teamSlot);
        if (attackerType == 'STR' && attackedType == 'QCK') typeMult = getAffinity('weak', attackerType, unit, teamSlot);
        if (attackerType == 'QCK' && attackedType == 'DEX') typeMult = getAffinity('weak', attackerType, unit, teamSlot);
        if (attackerType == 'DEX' && attackedType == 'STR') typeMult = getAffinity('weak', attackerType, unit, teamSlot);
        
        if ([2650, 2651, 2681].indexOf(unit.unit.number + 1) != -1 && teamSlot < 2) typeMult = getAffinity('strong', attackerType);
        if ([3070, 3071, 3369, 3847, 3848].indexOf(unit.unit.number + 1) != -1 && teamSlot == 1 && $scope.data.actionright) typeMult = getAffinity('strong', attackerType);
        if ([3398].indexOf(unit.unit.number + 1) != -1 && teamSlot < 2 && $scope.hp.perc > 99) typeMult = getAffinity('strong', attackerType);
        
        if (effects[$scope.data.effect] && effects[$scope.data.effect].hasOwnProperty('rainbow')){
            var params = getParameters(teamSlot)
            if (effects[$scope.data.effect].rainbow(params)) {
                typeMult = getAffinity('strong', attackerType);
            }
        }

        if ($scope.data.rainbowDamage[teamSlot])
            typeMult = getAffinity('strong', attackerType);

        //Get the strongest Color affinity Mult if it exists and apply it
        var affinitySpecialType = null;
        if (!$scope.data.effect || !effects[$scope.data.effect].hasOwnProperty('affinity')) {
            affinityMultiplier.forEach(function(special){
                team.forEach(function(space){
                    var params = getParameters(teamSlot, undefined, special.sourceSlot, special.specialType);
                    if (space.unit != null) if(affinityMult<special.affinityMultiplier(params)) {
                        affinityMult = special.affinityMultiplier(params);
                        affinitySpecialType = special.specialType;
                    }
                })
                });
        }
        else{
            affinityMult = effects[$scope.data.effect]['affinity'](unit.unit);
        }
        
        var affinityPlusTemp = 0; //conditional goes here
        plusSpecials.forEach(function(plusSpecial) {
            if(plusSpecial.hasOwnProperty('affinityPlus')){
                let params = getParameters(teamSlot, undefined, plusSpecial.sourceSlot, plusSpecial.specialType);
                affinityPlusTemp = Math.max(affinityPlusTemp, plusSpecial.affinityPlus(params));
            }
        });
        enabledEffects.forEach(function(plusEffect) {
            if(plusEffect.hasOwnProperty('affinityPlus')){
                let params = getParameters(teamSlot, undefined, plusEffect.sourceSlot, plusEffect.specialType);
                affinityPlusTemp += affinitySpecialType == "special" ? plusEffect.affinityPlus(params) : 0;
            }
        });
        if (affinityMult != 1)
            affinityMult += affinityPlusTemp;

        if (parseFloat($scope.data.customAffinity) != 1)
            affinityMult = parseFloat($scope.data.customAffinity);
        
        //Get the strongest Color affinity Mult captains
        captAffinityMultiplier.forEach(function(captain){
                    //captAffinityMult *= captain.captAffinityMultiplier(unit);
                    var params = getParameters(teamSlot, undefined, captain.sourceSlot);
                    captAffinityMult *= captain.captAffinityMultiplier(params);
                });
        
        //Calculate the new Affinity mult
        if(affinityMult != 1 || captAffinityMult != 1){
            if(typeMult > 1) typeMult *= (affinityMult * captAffinityMult);
            if(typeMult < 1) typeMult /= (affinityMult * captAffinityMult);
        }
        
        return typeMult;
    };

    var getChainMultiplier = function(chainBase, hitModifiers, chainModifier, params, damage) {
        var chainSpecialMult = 1;
        var chainSpecialMultPlus = 0;
        var chainUpgrade = 0;

        chainSpecMultiplication.forEach(function(special){
            var params2 = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
            chainSpecialMult = Math.max(chainSpecialMult, special.chainMultiplication(params2));
        });
        plusSpecials.forEach(function(special){
            var params2 = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
            if(special.hasOwnProperty("chainMultiplicationPlus")) chainSpecialMultPlus = Math.max(chainSpecialMultPlus, special.chainMultiplicationPlus(params2));
        });
        var result = chainBase;
        
        var tapTimingTemp = 0;
        var tapTimingSpecial = null;
        tapTiming.forEach(function(special){
            var tapTimingCheck = 0;
            for (var i=0;i<params.team.length;++i){
                var params2 = getParameters(i, undefined, special.sourceSlot, special.specialType);
                tapTimingCheck += params.team[i].unit ? special.tapTiming(params2)["Perfect"] : 0;
            }
            if (tapTimingCheck > tapTimingTemp){
                tapTimingTemp = tapTimingCheck.toFixed(2);
                tapTimingSpecial = special
            }
        });

        for (var i=0;i<hitModifiers.length;++i) {
            // only params.sugarToy (specified unit) becomes false when sugarToysSpecialEnabled is false
            // sugarToy in team does not get affected
            //console.log(params.team[damage[i].position].unit);
            var params2 = getParameters(damage[i].position, undefined, tapTimingSpecial && tapTimingSpecial.sourceSlot, tapTimingSpecial && tapTimingSpecial.specialType);
            //console.log(enabledSpecials[0] ? enabledSpecials[0].sourceSlot : 1);

            var sugarSuperEnabled = false;
            enabledSpecials.forEach(function(special){ if(params.team[special.sourceSlot].unit.number + 1 == 3805 && special.specialType == "special") sugarSuperEnabled = true; });
            
            var hobbyBuff = (params.scope.tdata.sugarToysSpecialEnabled && hitModifiers[i] == 'Perfect' && params.team[damage[i].position].sugarToy) ? sugarSuperEnabled ? 0.5 : 0.4 : 0; //0.7 For each HOBBY-HOBBY Hit (0.8 with Super Evolution), but trying to consolidate it with tapTiming buffs, so subtract the 0.3x already inherited from Perfects
            var tapTimingBuff = tapTimingSpecial && !(params.scope.tdata.sugarToysSpecialEnabled && params.team[damage[i].position].sugarToy) ? tapTimingSpecial.tapTiming(params2)[hitModifiers[i]] : 0;

            if (hitModifiers[i] == 'Perfect') result += chainModifier * (0.3 + hobbyBuff + tapTimingBuff);
            else if (hitModifiers[i] == 'Great') result += chainModifier * (0.1 + tapTimingBuff);
            else if (hitModifiers[i] == 'Good') result += chainModifier * (0 + tapTimingBuff);
            else result = chainBase;
        }
        result = result != 1 ? result * (chainSpecialMult + chainSpecialMultPlus) : result;
        
        return result;
    };

    /* * * * * Captain effects/specials * * * * */

    var applyCaptainEffectsToDamage = function(damage,func,modifiers,isStatic,sourceSlot) {
        return damage.map(function(x,n) {
            var params = jQuery.extend({ damage: damage, modifiers: modifiers, sourceSlot: sourceSlot },getParameters(x.position, n));
            if (isStatic) x.base += func(params);
            else x.multipliers.push([ func(params), 'captain effect' ]);
            return { unit: x.unit, orb: x.orb, base: x.base, multipliers: x.multipliers, position: x.position, sourceSlot: sourceSlot };
        });
    };

    var applyCaptainEffectsToHP = function(slotNumber,hp) {
        var params = getParameters(slotNumber);
        /*for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('hpStatic')){
                params["sourceSlot"] = enabledEffects[i].sourceSlot;
                hp += enabledEffects[i].hpStatic(params);
            }
        }*/
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('hp')){
                params["sourceSlot"] = enabledEffects[i].sourceSlot; 
                hp *= enabledEffects[i].hp(params);
            }
        }
        return hp;
    };

    var applyStaticEffectsToHP = function(slotNumber,hp) {
        var params = getParameters(slotNumber);
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('hpStatic')){
                params["sourceSlot"] = enabledEffects[i].sourceSlot;
                hp += enabledEffects[i].hpStatic(params);
            }
        }
        return hp;
    };

    var applyCaptainEffectsAndSpecialsToRCV = function(slotNumber,rcv) {
        var params = getParameters(slotNumber);
        // static rcv
        for (var h=0;h<enabledSpecials.length;++h) {
            if (enabledSpecials[h].hasOwnProperty('rcvStatic')){
                params["sourceSlot"] = enabledSpecials[h].sourceSlot;
                params.cached = getCachedParameters(enabledSpecials[h].sourceSlot, enabledSpecials[h].specialType);
                rcv += enabledSpecials[h].rcvStatic(params);
            }
        }
        for (var j=0;j<enabledEffects.length;++j) {
            if (enabledEffects[j].hasOwnProperty('rcvStatic')){
                params["sourceSlot"] = enabledEffects[j].sourceSlot;
                rcv += enabledEffects[j].rcvStatic(params);
            }
        }
        // non-static rcv
        for (var i=0;i<enabledEffects.length;++i) {
            if (enabledEffects[i].hasOwnProperty('rcv')){
                params["sourceSlot"] = enabledEffects[i].sourceSlot;
                rcv *= enabledEffects[i].rcv(params);
            }
        }
        // maximum non-static rcv
        var maximum = rcv;
        for (var k=0;k<enabledSpecials.length;++k) {
            if (enabledSpecials[k].hasOwnProperty('rcv'))
                maximum = Math.max(maximum,rcv * enabledSpecials[k].rcv(params));
        }
        return maximum;
    };
    var applyAddRCVSpecialsToRCV = function(slotNumber, bonusrcv) {
        var params = getParameters(slotNumber);
        // sailor ability rcv
        for (var l=0;l<enabledEffects.length;++l) {
            if (enabledEffects[l].hasOwnProperty('rcvAdded'))
                bonusrcv += enabledEffects[l].rcvAdded(params);
        }
        var final = bonusrcv;
        return final;
    };

    var applyChainAndBonusMultipliers = function(damage,modifiers,type) {
        
        var currentMax = -1, currentResult = null, addition = 0.0, carryChain = 0.0, additionPlus = 0.0, captainAddition = 0.0, captainBaseChain = 0.0;
        if(shipBonus.bonus.name=="Donquixote Pirates Ship - Special ACTIVATED"){
            addition = 0.2
        }

        //get the highest Chain Addition if it exists
        chainAddition.forEach(function(special){
            var params = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
            if(addition<special.chainAddition(params)){
                addition = special.chainAddition(params);
            }
        });
        chainCarry.forEach(function(special){
            var params = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
            if(carryChain<special.chainCarry(params)){
                carryChain = special.chainCarry(params);
            }
        });
        plusSpecials.forEach(function(special){
            if(special.hasOwnProperty('chainAdditionPlus')){
                var params = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
                if(additionPlus<special.chainAdditionPlus(params) && addition != 0){
                    additionPlus = special.chainAdditionPlus(params);
                }
            }
        });
        captChain.forEach(function(chainCaptain){
            var params = getParameters(chainCaptain.sourceSlot, undefined, chainCaptain.sourceSlot);
            if (chainCaptain.hasOwnProperty('chainAddition')){
                captainAddition += chainCaptain.chainAddition(params);
            }
            if (chainCaptain.hasOwnProperty('chain')){
                captainBaseChain += chainCaptain.chain(params);
            }
        });
        addition += additionPlus + captainAddition + carryChain;
        
        addition = parseFloat($scope.data.customChainAddition) != 0 ? parseFloat($scope.data.customChainAddition) + captainAddition : addition;

        // Increase Damage Taken (IDT) is applied after calculating the damage with enemy defense factored in for every hit
        // Hence, 1 damage (with high def enemies) with 2x Increase Damage Taken becomes 2 damage.
        // This is rounded down in-game, so 1.5x will still give 1 damage.
        // Get the highest IDT multiplier before chain calculation loop for performance
        var increaseDamageTakenMultiplier = 1;
        if (enemyEffectsFromSpecials.increaseDamageTaken.length > 0){
            increaseDamageTakenMultiplier = Math.max(...enemyEffectsFromSpecials.increaseDamageTaken.filter(value => !isNaN(value)), 1);
        }
        if (enemyEffectsFromSpecials.increaseDamageTakenPlus.length > 0){
            increaseDamageTakenMultiplier += increaseDamageTakenMultiplier > 1 ? Math.max(...enemyEffectsFromSpecials.increaseDamageTakenPlus) : 0;
        }
        if (enemyEffectsFromSpecials.increaseDamageTakenCeil.length > 0){
            increaseDamageTakenMultiplier = increaseDamageTakenMultiplier > 1 ? Math.max(...enemyEffectsFromSpecials.increaseDamageTakenCeil) : increaseDamageTakenMultiplier;
        }

        chainSpecials.forEach(function(special) {
            var multipliersUsed = [ ], currentHits = 0, overall = 0;
            var i, params = [ ];
            for (var j=0;j<damage.length;++j){ 
                params.push(getParameters(damage[j].position, j, special.sourceSlot, special.specialType));
            }
            var result = damage.map(function(x,n) {
                // calculate chain multiplier
                var chainModifier = cptsWith.chainModifiers.reduce(function(prev,next) {
                    //var params = getParameters(x.position, n);
                    //params["sourceSlot"] = enabledEffects[x].sourceSlot;
                    //console.log(cptsWith.chainModifiers);
                    return prev * next.chainModifier(getParameters(x.position, n));
                },1);
                //Computing Chain Modifier from map effects
                if (mapEffect.hasOwnProperty('chainModifier'))
                    //chain modifier WITH chain boosting captain
                    if(cptsWith.chainModifiers.length>0){
                    chainModifier = Math.min(mapEffect.chainModifier(params[n])*chainModifier, chainModifier);
                    }else{
                    //chain modifier without chain boosting captain
                    chainModifier = Math.min(mapEffect.chainModifier(params[n]), chainModifier);
                    }
                //console.log(x,n);

                //console.log(params[n].hitcombo);
                var chainUpgrade = 0;
                var chainOverride = 0;
                plusSpecials.forEach(function(plusSpecial){
                    var params2 = getParameters(plusSpecial.sourceSlot, params[n].chainPosition, plusSpecial.sourceSlot, plusSpecial.specialType);
                    if (plusSpecial.hasOwnProperty('chainPlus')){
                        var chainTemp = plusSpecial.chainPlus(params2);
                        if (chainTemp > chainUpgrade) chainUpgrade = chainTemp;
                    }
                    if (plusSpecial.hasOwnProperty('chainCeil')){
                        var chainTemp = plusSpecial.chainCeil(params2);
                        if (chainTemp > chainOverride) chainOverride = chainTemp;
                    }
                });
                
                if(special.chain(params[n]) == 1) chainUpgrade = 0;
                var chainMultiplier = getChainMultiplier(chainOverride == 0 || special.chainLimiter(params[n]) == Infinity ? special.chain(params[n]) + chainUpgrade + captainBaseChain : chainOverride, modifiers.slice(0,n), chainModifier, params[n], damage);
                //Add flat Multiplier Bonuses if they exist
                if(addition>0.0 && chainMultiplier != 1.0)
                    chainMultiplier = chainMultiplier + addition;
                if (mapEffect.hasOwnProperty('chainLimiter'))
                    chainMultiplier = Math.min(chainOverride == 0 ? mapEffect.chainLimiter(params[n]) + chainUpgrade : chainOverride, chainMultiplier);
                else if (special.hasOwnProperty('chainLimiter')){
                    if(special.chainLimiter(params[n]) == Infinity) chainOverride = 0;
                    chainMultiplier = Math.min(chainOverride == 0 ? special.chainLimiter(params[n]) + chainUpgrade : chainOverride, chainMultiplier);
                }
                if($scope.tdata.semlaCounter.value >= 3 && (x.unit.unit.number == 2232 || x.unit.unit.number == 2233 || x.unit.unit.number == 2499) && x.position < 2){
                    chainMultiplier = 1.0;
                }
                // add or update chain multiplier to multiplier list
                for (i=0;i<x.multipliers.length;++i) {
                    if (x.multipliers[i][1] != 'chain') continue;
                    x.multipliers[i][0] = chainMultiplier;
                    break;
                }
                if (i == x.multipliers.length) x.multipliers.push([ chainMultiplier, 'chain' ]);
                // compute damage
                var unitAtk = Math.floor(x.base * totalMultiplier(x.multipliers));
                var temp = computeDamageOfUnit(x.position, x.unit.unit, unitAtk, modifiers[n], currentHits, type, increaseDamageTakenMultiplier);
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

        // Add increaseDamageTakenMultiplier to multiplier list ONLY after computing damage
        // Otherwise, it would be multiplied to the unitAtk and would lead to being applied twice.
        for (var result of currentResult.result)
            result.multipliers.push([increaseDamageTakenMultiplier, 'increased damage taken'])

        return currentResult;
    };

    var applySpecialMultipliersAndCaptainEffects = function(damage,hitModifiers,noSorting) {
        var result = damage, current = -1;
        // if there are no specials available, just apply the non-static captain effects and return the result
        if (specialsCombinations.length === 0) {
            for (var i=0;i<cptsWith.hitModifiers.length;++i)
                result = applyCaptainEffectsToDamage(result,cptsWith.hitModifiers[i].hitAtk,hitModifiers,false,cptsWith.hitModifiers[i].sourceSlot);
            return result;
        }
        // for each special combination
        specialsCombinations.forEach(function(specials,n) {
            // apply all the specials of the combination to every unit
            var temp = damage.map(function(x,n) {
                var multipliers = jQuery.extend([ ], x.multipliers), base = x.base;
                specials.forEach(function(data) {
                    let params = getParameters(x.position, undefined, data.sourceSlot, data.specialType);
                    var atkPlusTemp = 0;
                    var atkCeilTemp = 1;
                    var statusPlusTemp = 0;
                    var orbPlusTemp = 0;
                    var orbCeilTemp = 1;

                    // get highest buff increase
                    plusSpecials.forEach(function(plusSpecial) {
                        plusParams = getParameters(plusSpecial.sourceSlot, undefined, plusSpecial.sourceSlot, plusSpecial.specialType);
                        //console.log(plusSpecial);
                        if(plusSpecial.hasOwnProperty('atkPlus')){
                            if(plusSpecial.atkPlus(plusParams) > atkPlusTemp)
                                atkPlusTemp = plusSpecial.atkPlus(plusParams);
                        }
                        if(plusSpecial.hasOwnProperty('atkCeil')){
                            if(plusSpecial.atkCeil(plusParams) > atkCeilTemp)
                                atkCeilTemp = plusSpecial.atkCeil(plusParams);
                        }
                        if(plusSpecial.hasOwnProperty('statusPlus')){
                            if(plusSpecial.statusPlus(plusParams) > statusPlusTemp)
                                statusPlusTemp = plusSpecial.statusPlus(plusParams);
                        }
                        if (plusSpecial.hasOwnProperty('orbPlus')) {
                            orbPlusTemp = Math.max(plusSpecial.orbPlus(plusParams), orbPlusTemp);
                        }
                        if (plusSpecial.hasOwnProperty('orbCeil')) {
                            orbCeilTemp = Math.max(plusSpecial.orbCeil(plusParams), orbCeilTemp);
                        }
                    });
                    
                    enabledEffects.forEach(function(plusEffect) {
                        plusParams = getParameters(plusEffect.sourceSlot, undefined, plusEffect.sourceSlot, plusEffect.specialType);
                        //console.log(plusSpecial);
                        if(plusEffect.hasOwnProperty('atkPlus')){
                            atkPlusTemp += data.specialType == "special" ? plusEffect.atkPlus(plusParams) : 0;
                        }
                        /* if(plusEffect.hasOwnProperty('atkCeil')){
                            if(plusEffect.atkCeil(plusParams) > atkCeilTemp)
                                atkCeilTemp = plusEffect.atkCeil(plusParams);
                        } */
                        if(plusEffect.hasOwnProperty('statusPlus')){
                            if(plusEffect.statusPlus(plusParams) > statusPlusTemp)
                                statusPlusTemp = plusEffect.statusPlus(plusParams);
                        }
                        if (plusEffect.hasOwnProperty('orbPlus')) {
                            orbPlusTemp += data.specialType == "special" ? plusEffect.orbPlus(plusParams) : 0;
                        }
                        /* if (plusEffect.hasOwnProperty('orbCeil')) {
                            orbCeilTemp = Math.max(plusEffect.orbCeil(plusParams), orbCeilTemp);
                        } */
                    });

                    if (!data.s) { // non-static
                        var text = data.sourceSlot > -1 ? (team[data.sourceSlot].unit ? 'special (' + shortName(team[data.sourceSlot].unit.name) + ')' : 'special') : 'special override';
                        let multiplier = data.f(params);
                        if (data.type == "atk") {
                            if (parseFloat($scope.data.customATK) != 1) {
                                multiplier = parseFloat($scope.data.customATK);
                                text = 'special override';
                            } else if (multiplier != 1) { // only apply atkPlus or atkCeil when there's an atk boost
                                if (atkCeilTemp != 1)
                                    multiplier = atkCeilTemp;
                                else
                                    multiplier += atkPlusTemp;
                            }
                        } else if (data.type == "status") {
                            if (multiplier != 1)
                                multiplier += statusPlusTemp;
                        } else if (data.type == "orb") {
                            if (parseFloat($scope.data.customOrb) != 1)
                                text = 'special override';
                            if (multiplier != 1) { // only apply if there's an orb boost
                                if (orbCeilTemp != 1)
                                    multiplier = orbCeilTemp;
                                else
                                    multiplier += orbPlusTemp;
                            }
                            multiplier = CrunchUtils.getOrbMultiplier(params.orb, params.unit.type, params.unit.class, 1, multiplier, [params.friendCaptain, params.captain], params.effectName, params);
                        }
                        multipliers.push([ multiplier, text ]);
                    } else { // static
                        base += data.f(params);
                    }
                });
                return { unit: x.unit, orb: x.orb, base: base, multipliers: multipliers, position: x.position };
            });
            // sort by damage again
            if (!noSorting) temp = temp.sort(function(x,y) {
                return x.base * totalMultiplier(x.multipliers) - y.base * totalMultiplier(y.multipliers);
            });
            // apply non-static captain effects
            for (var i=0;i<cptsWith.hitModifiers.length;++i)
                temp = applyCaptainEffectsToDamage(temp,cptsWith.hitModifiers[i].hitAtk,hitModifiers,false,cptsWith.hitModifiers[i].sourceSlot);
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
        // Auto sorting for Hit Barriers
        if (mapEffect.comboType){
            var mapComboArray = []
            for(var cmb=0;cmb<mapEffect.comboShield;cmb++){
                mapComboArray.push(mapEffect.comboType);
            }
            var cmbLeft = 6-mapEffect.comboShield;
            for(var cmb=0;cmb<cmbLeft;cmb++){
                mapComboArray.push("Perfect");
            }
            result.push(mapComboArray);
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
        var result = { type: [ ], class: [ ], base: [ ], orb: [ ], affinity: [ ], condition: [ ], dmgredatk: [ ], atkbase: [ ]};
        chainSpecials = [ ];
        orbMatching = [ ];
        plusSpecials = [ ];
        chainAddition = [ ];
        chainCarry = [ ];
        tapTiming = [ ];
        chainSpecMultiplication = [ ];
        affinityMultiplier = [ ];
        atkbase = [ ];
        captAffinityMultiplier = [ ];
        captChain = [ ];
        staticMultiplier = [ ];
        
        var dummy = 0;
        for (let i = 5; i >= 0; i--) {
            if (team[i].unit) dummy = i;
        }
        
        if($scope.data.customOrb != 1) result.orb.push({ sourceSlot: dummy, type: 'orb', f: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, $scope.data.customOrb, [p.friendCaptain, p.captain], p.effectName, p); }})
        if($scope.data.customATK != 1) result.type.push({ sourceSlot: dummy, type: 'atk', f: function(p) { return $scope.data.customATK; }})
        
        enabledSpecials.forEach(function(data) {
            if (data === null) return;

            // pass the special `data` itself, or extend it if necessary, because some properties are needed
            // by the specials, like `ignoresImmunities` and `specialType` (which is only inserted in `initializeDataStructs`)

            // notice specials with both atk and atkStatic defined are not supported right now
            if (data.hasOwnProperty('atk') || data.hasOwnProperty('atkStatic'))
                result[data.type].push({ ...data, type: data.type != 'condition' ? 'atk' : 'status', f: (data.atk || data.atkStatic), s: data.hasOwnProperty('atkStatic') });
            if (data.hasOwnProperty('status'))
                result['condition'].push({ ...data, type: 'status', f: (data.status) });
            if (data.hasOwnProperty('orb'))
                result.orb.push({ ...data, type: 'orb', f: data.orb });
            if (data.hasOwnProperty('affinity'))
                result.affinity.push({ ...data, type: 'affinity', f: data.affinity });
            if (data.hasOwnProperty('dmgredatk'))
                result.dmgredatk.push({ ...data, type: 'dmgredatk', f: data.dmgredatk });
            if (data.hasOwnProperty('atkbase'))
            atkbase.push({ ...data, f: data.atkbase });
                //result.atkbase.push({ ...data, f: data.atkbase, s: true }); To do
            if (data.hasOwnProperty('chain'))
                chainSpecials.push({ ...data, chainLimiter: data.chainLimiter || function() { return Infinity; } });
            if (data.hasOwnProperty('chainPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('chainCeil'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('chainAdditionPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('chainMultiplicationPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('atkPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('atkCeil'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('orbPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('orbCeil'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('affinityPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('statusPlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('atkbasePlus'))
                plusSpecials.push(data);
            if (data.hasOwnProperty('chainAddition'))
                chainAddition.push({ ...data, chainAddition: data.chainAddition || function(){ return 0.0; } });
            if (data.hasOwnProperty('chainCarry'))
                chainCarry.push({ ...data, chainCarry: data.chainCarry || function(){ return 0.0; } });
            if (data.hasOwnProperty('tapTiming'))
                tapTiming.push(data);
            if (data.hasOwnProperty('chainMultiplication'))
                chainSpecMultiplication.push({ ...data, chainMultiplication: data.chainMultiplication || function(){ return 1.0; } });
            if (data.hasOwnProperty('staticMult'))
                staticMultiplier.push({...data, staticMultiplier: data.staticMult});
            if (data.hasOwnProperty('affinity'))
                affinityMultiplier.push({...data, affinityMultiplier: data.affinity || function(){ return 1.0; }});
        });
        enabledEffects.forEach(function(data) {
            if (data.hasOwnProperty('affinity'))
                captAffinityMultiplier.push({ sourceSlot: data.sourceSlot, captAffinityMultiplier: data.affinity || function(){ return 1.0; }});
            if (data.hasOwnProperty('chainAddition'))
                captChain.push({ sourceSlot: data.sourceSlot, chainAddition: data.chainAddition || function(){ return 0; }});
            if (data.hasOwnProperty('chain'))
                captChain.push({ sourceSlot: data.sourceSlot, chain: data.chain || function(){ return 0; }});
            if (data.hasOwnProperty('beneficialOrb'))
                orbMatching.push({ sourceSlot: data.sourceSlot, beneficialOrb: data.beneficialOrb || function(){ return 0; }});
        });
        specialsCombinations = Utils.arrayProduct([ result.type.concat(result.class), result.condition, result.orb, result.dmgredatk, result.atkbase ]);
        if (chainSpecials.length === 0) chainSpecials.push({
            chain: function() { return 1.0; },
            chainLimiter: function() { return Infinity; }
        });
        if (chainSpecials.length >= 2){
            for(i = 0; i<chainSpecials.length; i++){
                if(chainSpecials[i].chain(getParameters(chainSpecials[i].sourceSlot, undefined, chainSpecials[i].sourceSlot, chainSpecials[i].specialType)) == 1){
                    chainSpecials.splice(i, 1);
                }
            }
        }
    };
    
    var computeFlatBonusDamage = function(hitModifier, unit, type, teamSlot) {
        for (var y=0;y<enabledEffects.length;++y) {
            if (enabledEffects[y].hasOwnProperty('staticMult')){
                var sailor = true;
            }
        }
        var resultDamage = 0;
        //Specials that add multiplier damage
        //Very Specific for Raid Sabo for now
        var conditionalMultiplier = 1.0;
        var affinityMultiplier = 1.0;
        if(staticMultiplier.length >= 1 || sailor){
            //Since we need this for defense down, and defense down gets saved for all slots we just go with slot 0
            var params = getParameters(teamSlot);
            params['unit'] = unit;
            params['slot'] = teamSlot;
            var unitParams = params;
            //Check if conditional Boosts are activated since they raise 
            for (var x=0;x<enabledSpecials.length;++x) {
                params.sourceSlot = enabledSpecials[x].sourceSlot;
                params.cached = getCachedParameters(enabledSpecials[x].sourceSlot, enabledSpecials[x].specialType);
                if  (enabledSpecials[x].type=='condition'){
                    var thisMult = enabledSpecials[x].atk(params);
                    if(thisMult>conditionalMultiplier){
                        conditionalMultiplier = thisMult;
                    }
                }
                if  (enabledSpecials[x].hasOwnProperty('affinity')){
                    var thisMult = enabledSpecials[x]['affinity'](params);
                    if(thisMult>affinityMultiplier){
                        affinityMultiplier = thisMult;
                    }
                }
            }
            if (([2650, 2651, 2681].indexOf(unit.number + 1) != -1 && teamSlot < 2) || 
                ([3070, 3071, 3369, 3847, 3848].indexOf(unit.number + 1) != -1 && teamSlot == 1 && $scope.data.actionright) ||
                ([3398].indexOf(unit.number + 1) != -1 && teamSlot < 2 && $scope.hp.perc > 99) ||
                (effects[$scope.data.effect] && effects[$scope.data.effect].hasOwnProperty('rainbow') && effects[$scope.data.effect].rainbow(unitParams))){
                    //pass so that the affinityMultiplier is whatever it should be instead of 1
            }
            else if(unit.type != type){
                if ((unit.type == "STR" && type == "QCK") ||
                    (unit.type == "DEX" && type == "STR") ||
                    (unit.type == "QCK" && type == "DEX")) affinityMultiplier = Math.pow(affinityMultiplier, -1);
                else if ((unit.type == "QCK" && type == "STR") ||
                         (unit.type == "STR" && type == "DEX") ||
                         (unit.type == "DEX" && type == "QCK")){
                        //pass so that the affinityMultiplier is whatever it should be instead of 1
                }
                else affinityMultiplier = 1;
            }
            else affinityMultiplier = 1;

            affinityMultiplier = parseFloat($scope.data.customAffinity) != 1 && affinityMultiplier != 1 ? parseFloat($scope.data.customAffinity) : affinityMultiplier;

            //Add the static extra Damage to each attacking member
            var multSpecial = 0;
            var baseDamage = 0;
            var specialid;
            for (var y=0;y<enabledSpecials.length;++y) {
                if (enabledSpecials[y].hasOwnProperty('staticMult')){
                    var slot = enabledSpecials[y].sourceSlot;
                    params.sourceSlot = slot;
                    params.cached = getCachedParameters(slot, enabledSpecials[y].specialType);
                    //console.log(params);
                    if (enabledSpecials[y].staticMult(params) >= multSpecial){
                        specialid = team[slot].unit.number + 1;
                        multSpecial = enabledSpecials[y].staticMult(params);
                        baseDamage = getStatOfUnit(team[slot],'atk', slot);
                        enabledEffects.forEach(function(x) {
                            if (x.hasOwnProperty('atkStatic')){
                                var params2 = getParameters(slot, undefined, x.sourceSlot);
                                baseDamage += x.atkStatic(params2);
                            }
                        });
                        enabledSpecials.forEach(function(x) {
                            var baseATKSpecialTemp = 0;
                            var baseATKPlusSpecialTemp = 0;
                            if (x.hasOwnProperty('atkbase')){
                                var params2 = getParameters(slot, undefined, x.sourceSlot, x.specialType);
                                baseATKSpecialTemp = Math.max(x.atkbase(params2), baseATKSpecialTemp);
                            }
                            if (x.hasOwnProperty('atkbasePlus')){
                                var params2 = getParameters(slot, undefined, x.sourceSlot, x.specialType);
                                baseATKPlusSpecialTemp = Math.max(x.atkbase(params2), baseATKPlusSpecialTemp);
                            }
                            baseDamage += baseATKSpecialTemp + baseATKPlusSpecialTemp;
                        });
                    }
                }
            }
            if (specialid == 2364 || specialid == 2365 || specialid == 2981 || specialid == 2982 || specialid == 3666) var staticDamage = Math.ceil(multSpecial*conditionalMultiplier);
            else var staticDamage = Math.ceil((baseDamage)*multSpecial*conditionalMultiplier);
            if((hitModifier == 'Great')||(hitModifier == 'Good')||(hitModifier == 'Perfect')){
                resultDamage += staticDamage;
            }
            for (var y=0;y<enabledEffects.length;++y) {
                if (enabledEffects[y].hasOwnProperty('staticMult')){
                    var params = getParameters(enabledEffects[y].sourceSlot, undefined, enabledEffects[y].sourceSlot);
                    unitParams['sourceSlot'] = enabledEffects[y].sourceSlot;
                    var slot = enabledEffects[y].sourceSlot;
                    var baseDamage2 = getStatOfUnit(team[slot],'atk',slot);
                    var mult = enabledEffects[y].staticMult(unitParams);
                    enabledEffects.forEach(function(x) {
                        var params2 = getParameters(x.sourceSlot, undefined, x.sourceSlot);
                        if (x.hasOwnProperty('atkStatic'))
                            baseDamage2 += x.atkStatic(params2);
                    });
                    enabledSpecials.forEach(function(x) {
                        var params2 = getParameters(x.sourceSlot, undefined, x.sourceSlot, x.specialType);
                        if (x.hasOwnProperty('atkbase'))
                            baseDamage2 += x.atkbase(params2);
                    });
                    var staticDamage = Math.ceil((baseDamage2)*mult*conditionalMultiplier*affinityMultiplier);
                    if((hitModifier == 'Great')||(hitModifier == 'Good')||(hitModifier == 'Perfect')){
                        resultDamage += staticDamage;
                    } 
                }
            }
        }  
        return resultDamage;
    };

    /* * * * * * Utility functions * * * * */

    var initializeDataStructs = function() {
        // get enabled specials
        var conflictWarning = false;
        enabledSpecials = [ ];
        // deactivate turn counter (will be reactivated if necessary)
        $scope.tdata.turnCounter.enabled = false;
        $scope.tdata.healCounter.enabled = false;
        $scope.tdata.basehpCounter.enabled = false;
        $scope.tdata.rcvCounter.enabled = false;
        $scope.tdata.semlaCounter.enabled = false;
        $scope.tdata.damageCounter.enabled = false;
        $scope.tdata.dmgreductionCounter.enabled = false;
        $scope.tdata.carrychainCounter.enabled = false;
        $scope.tdata.debuffCounter.enabled = false;
        // get ship bonus
        shipBonus = jQuery.extend({ bonus: window.ships[$scope.data.ship[0]] },{ level: $scope.data.ship[1] });
        // orb map effects
        mapEffect = { };
        if ($scope.data.effect) {
            var data = effects[$scope.data.effect];
            if (data.orb) enabledSpecials.push({ orb: data.orb, permanent: true, sourceSlot: -1 });
            if (data.chainModifier) mapEffect.chainModifier = data.chainModifier;
            if (data.chainLimiter) mapEffect.chainLimiter = data.chainLimiter;
            if ($scope.data.comboShield) mapEffect.comboShield = $scope.data.comboShield;
            if ($scope.data.comboType) mapEffect.comboType = $scope.data.comboType;
            if (data.damage) mapEffect.damage = data.damage;
            if (data.barrierThreshold) {
                mapEffect.barrierThreshold = data.barrierThreshold;
                mapEffect.barrierReduction = data.barrierReduction;
            }
        }
        if ($scope.data.comboShield) mapEffect.comboShield = $scope.data.comboShield;
        if ($scope.data.comboType) mapEffect.comboType = $scope.data.comboType;
        // team
        team = $scope.data.team.map(function(x,n) {
            if (!$scope.tdata.team[n] || $scope.tdata.team[n].removed)
                return {
                    unit: null,
                    level: -1,
                    candies: { hp: 0, atk: 0, rcv: 0 },
                    limit: 0,
                    sugarToy: false,
                    tokiState: false,
                    clone: false,
                };
            else
                return x;
        }).slice(0,6);
        // team specials
        // "sourceSlot": slot of the unit the special belongs to
        $scope.tdata.team.forEach(function(x,n) {
            if (!team[n].unit || n > 5) return;
            var id = team[n].unit.number + 1;
            if (x.special && specials.hasOwnProperty(id)) {
                if (specials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent){
                    conflictWarning = true;
                    var disabledSpecial = {}
                    for (var i in specials[id]){
                        if(i != 'orb')
                            disabledSpecial[i] = specials[id][i];
                    }
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: SPECIAL },disabledSpecial));
                }
                else
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: SPECIAL },specials[id]));
            }
            if (x.altspecial && altspecials.hasOwnProperty(id)) {
                if (altspecials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent){
                    conflictWarning = true;
                    var disabledSpecial = {}
                    for (var i in altspecials[id]){
                        if(i != 'orb')
                            disabledSpecial[i] = altspecials[id][i];
                    }
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: ALTSPECIAL },disabledSpecial));
                }
                else
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: ALTSPECIAL },altspecials[id]));
            }
            if (x.capspecial && capspecials.hasOwnProperty(id)) {
                if (capspecials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent){
                    conflictWarning = true;
                    var disabledSpecial = {}
                    for (var i in capspecials[id]){
                        if(i != 'orb')
                            disabledSpecial[i] = capspecials[id][i];
                    }
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: CAPSPECIAL },disabledSpecial));
                }
                else
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n, specialType: CAPSPECIAL },capspecials[id]));
            }
            // activate counters if necessary
            if (n < 2 && [794, 795, 1124, 1125, 1191, 1192, 1219, 1220, 1288, 1289, 1361, 1362, 1525, 1557, 1558, 1559, 1560, 1561, 1562, 1712, 1713, 1716, 1764, 1907, 1908, 1921, 2015, 2049, 2050, 2198,2199, 2214, 2215, 2299, 2337, 2338, 2421, 2422, 2423, 2424, 2440, 2441, 3552, 3553, 5074, 5534, 5535, 2669, 2670, 2683, 2684, 3047, 3072, 3073, 3108, 3393, 3770, 3831, 3832 ].has(id))
                $scope.tdata.turnCounter.enabled = true;
            if ([3789, 3790, 5469, 5470, 5471 ].has(id))
                $scope.tdata.turnCounter.enabled = true;
            if(shipBonus.bonus.name=="Shark Superb")
                $scope.tdata.turnCounter.enabled = true;
            if (n < 2 && [1609, 1610, 2232, 3037, 3038].has(id))
                $scope.tdata.healCounter.enabled = true;
            if ([5512, 5513, 5514, 5515, 5516, 5517, 5518, 5519, 3935].has(id))
                $scope.tdata.healCounter.enabled = true;
            if ([2364, 2365, 2981, 2982, 3224, 3225, 3473, 3474, 3751, 3752, 3851, 3852, 5449, 5450, 5451, 5452, 3962, 3963, 3964].has(id))
                $scope.tdata.damageCounter.enabled = true;
            if (n < 2 && [2233, 2234, 2500].has(id))
                $scope.tdata.semlaCounter.enabled = true;
            if ([3333, 3334].has(id))
                $scope.tdata.rcvCounter.enabled = true;
            if ([3461, 3462].has(id))
                $scope.tdata.basehpCounter.enabled = true;
            if ([5430, 5432, 5449, 5450, 5451, 5452, 3990, 3991, 4116].has(id))
                $scope.tdata.dmgreductionCounter.enabled = true;
            if ([3829, 3830].has(id))
                $scope.tdata.carrychainCounter.enabled = true;
            if ([5574, 5575, 5576, 5577, 5578, 5579, 5580, 5581, 5582, 5583, 5584, 5585, 5586, 5587, 5588, 5589, 5590, 5591, 5592, 5593].has(id))
                $scope.tdata.debuffCounter.enabled = true;
        });
        if (conflictWarning) 
            $scope.notify({ type: 'error', text: 'One or more specials you selected cannot be activated due to an active map effect.' });

        updateEnemyEffects();
        computeActualDefense(shipBonus.bonus.name);

        enabledEffects = [ ];
        
        for (var i=2;i<6;i++) {
            if (team[i].unit === null) continue;
            var id = team[i].unit.number + 1;
            if (!window.sailors.hasOwnProperty(id)) continue;
            var effect = jQuery.extend({ },window.sailors[id]);
            effect.sourceSlot = i;
            enabledEffects.push(effect);
        }
        
        // captain effect array
        
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
            effect.sourceSlot = i;
            enabledEffects.push(effect);
        }
        // find non-static captain effects
        cptsWith = {
            hitModifiers:   enabledEffects.filter(function(x) { return x.hasOwnProperty('hitModifiers');  }),
            hitMultipliers: enabledEffects.filter(function(x) { return x.hasOwnProperty('hit');  }),
            chainModifiers: enabledEffects.filter(function(x) { return x.hasOwnProperty('chainModifier'); }),
            damageSorters:  enabledEffects.filter(function(x) { return x.hasOwnProperty('damageSorter');  })
        };
        specialsWith = {
            hitMultipliers: enabledSpecials.filter(function(x) { return x.hasOwnProperty('hit');  }),
        };
        // get all non-default hit modifiers
        hitModifiers = getPossibleHitModifiers(cptsWith.hitModifiers);
        // compute special combinations
        computeSpecialsCombinations();
        $scope.conflictingSpecials = (specialsCombinations.length > 1 || chainSpecials.length > 1 || chainAddition.length > 1 || affinityMultiplier.length > 1 || atkbase.length > 1);
        $scope.conflictingMultipliers = ( staticMultiplier.length > 1 )
        //console.log(enabledSpecials);
    };

    /**
     * Increments or decrements the enemy effects counter depending on if the special is being enabled or not.
     * To decrement with the correct value, the cached params object is used for the special.
     * @param {object} special The special being activated, taken from window.specials
     * @param {object} params The object created by `getParameters()` that will be used by the special
     * @param {boolean} isEnablingSpecial If true, the enemy effect will be incremented. Otherwise, it will be decremented
     */
    var applyEnemyEffectsFromSpecial = function(special, params, isEnablingSpecial) {
        if (!special) {
            return;
        }

        if (!params) {
            params = getParameters(special.sourceSlot, undefined, special.sourceSlot, special.specialType);
        }

        // if the special is being disabled, use the params that were used on `specialToggled`,
        // making it seem like we reactivated the special, just to get the same return value we got (which we'll deduct later)
        if (!isEnablingSpecial) {
            params = params.cached;
            // in case the enemy effect function happens to access `p.cached`
            params.cached = params;
        }

        for (const enemyEffect in enemyEffects) {
            // no special gives the enemy a barrier
            if (enemyEffect == 'barrier') {
                continue;
            }
            if (special.hasOwnProperty(enemyEffect)) {
                // if no immunity, evaluate special
                // else if ignores corresponding immunity, evaluate special
                // else no effect
                if (!params.enemyImmunities[enemyEffect] || (special.ignoresImmunities && special.ignoresImmunities(params).includes(enemyEffect))) {
                    var returnValue = special[enemyEffect](params);
                    // for these effects, the function returns the multiplier, so 1 means no effect
                    if ([ 'def', 'increaseDamageTaken', 'increaseDamageTakenPlus', 'increaseDamageTakenCeil' ].includes(enemyEffect)){
                        if (returnValue == 1){
                            continue;
                        }
                        if (isEnablingSpecial) {
                            enemyEffectsFromSpecials[enemyEffect].push(returnValue);
                        } else {
                            var index = enemyEffectsFromSpecials[enemyEffect].indexOf(returnValue);
                            if (index > -1)
                                enemyEffectsFromSpecials[enemyEffect].splice(index, 1);
                        }
                    } else {
                        // the others (burn, delay, poison, etc) return the number of turns, so 0 means no effect
                        if (isEnablingSpecial) {
                            enemyEffectsFromSpecials[enemyEffect] += returnValue;
                        } else {
                            enemyEffectsFromSpecials[enemyEffect] -= returnValue;
                        }
                    }
                }
            }
        }

        if (!isEnablingSpecial) {
            // clean up to prevent circular reference
            delete params.cached;
        }
    }

    /**
     * Modifies the `enemyEffects` variable according to the current status
     * effects of the enemy by merging with `enemyEffectsFromSpecials` and calling all functions of ship/captain effects
     * Note that due to this, the enemy effects will be the same for all units,
     * so those that apply an enemy effect upon hitting is not accounted for.
     * `enemyEffectsFromSpecials` isn't modified because there is no way of
     * deducting the correct number when the captain is changed, unlike specials
     * where we have an event handler for it being disabled.
     */
    var updateEnemyEffects = function() {

        // shallow copy so `enemyEffectsFromSpecials` is not modified
        for (const enemyEffect in enemyEffectsFromSpecials) {
            if (Array.isArray(enemyEffectsFromSpecials[enemyEffect])) {
                enemyEffects[enemyEffect] = enemyEffectsFromSpecials[enemyEffect].length > 0;
            } else {
                enemyEffects[enemyEffect] = enemyEffectsFromSpecials[enemyEffect];
            }
        }
        enemyEffects.delay += shipBonus.bonus.name == "Karasumaru Ship - Special ACTIVATED" && !$scope.data.enemyImmunities.delay;
        enemyEffects.barrier = $scope.data.enemyBuffs.barrier;

        // Check if the captain/friend captain applies delay
        // (will be replaced with cptSpecials, which would allow toggling)
        // Make it bypass immunity for now
        for(var i = 0; i < 2; i++){
            if(team[i].unit !== null){
                var id = team[i].unit.number + 1;
                if (id == 2112 || id == 2113 || id == 2739 || id == 3492 || id == 3734 || id == 3735)
                    enemyEffects.delay += 1;
            }
        }
    }
    
    //Returns an Object with a counter of classes in the current Team
    var classCounter = function() {
        var classes = {};
        var classArray = ['Fighter', 'Slasher', 'FreeSpirit', 'Powerhouse', 'Shooter', 'Striker', 'Cerebral', 'Driven'];
        for (var i = 0, j = classArray.length; i < j; i++) {
            classes[classArray[i]] = 0;
        }
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                var unitTemp = Object.assign({},team[z].unit);
                if(z == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, 0);
                else if(z != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, z);
                if(unitTemp.class.length==2){
                    classes[unitTemp.class[0].split(" ").join("")]++;
                    classes[unitTemp.class[1].split(" ").join("")]++;
                }
                else
                    classes[unitTemp.class.split(" ").join("")]++;
            }
        }
        return classes;
    };
    
    //Returns an Object with a counter of classes in the current Team
    var teamCounter = function() {
        var numunits = 0;
        for(var z=0;z<team.length;z++){
            if(team[z].unit) numunits++;
        }
        return numunits;
    };
    
    var frankyCheck = function() {
        var classes = {};
        var classTypes = ['Primary', 'Secondary'];
        //var classArray = ['Fighter', 'Slasher', 'FreeSpirit', 'Powerhouse', 'Shooter', 'Striker', 'Cerebral', 'Driven'];
        for (var i = 0, j = classTypes.length; i < j; i++) {
            classes[classTypes[i]] = 0;
        }
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                var unitTemp = Object.assign({},team[z].unit);
                if(z == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, 0);
                else if(z != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, z);
                if(unitTemp.class.length == 2){
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class[0]) || ['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class[1])){
                        classes['Primary']++;
                    }
                    if(['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(unitTemp.class[0]) || ['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(unitTemp.class[1])){
                        classes['Secondary']++;
                    }
                }
                else{
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class)){
                        classes['Primary']++;
                    }
                    if(['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(unitTemp.class)){
                        classes['Secondary']++;
                    }
                }
            }
        }
        return classes;
    };
    
    var frankyClass = function() {
        var classes = {};
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                var unitTemp = Object.assign({},team[z].unit);
                if(z == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, 0);
                else if(z != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, z);
                if(unitTemp.class.length==2){
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class[0])){
                        classes[z] = unitTemp.class[0];
                    }
                    else if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class[1])){
                        classes[z] = unitTemp.class[1];
                    }
                }
                else{
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(unitTemp.class)){
                        classes[z] = unitTemp.class;
                    }
                }
            }
        }
        return classes;
    };
    
    var colorCounter = function() {
        var colors = {};
        var colorArray = ['STR', 'DEX', 'QCK', 'INT', 'PSY'];
        for (var i = 0, j = colorArray.length; i < j; i++) {
            colors[colorArray[i]] = 0;
        }
        
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                var unitTemp = Object.assign({},team[z].unit);
                if(z == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, 0);
                else if(z != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number)) cloneReplace(unitTemp, z);
                if(z == 0 && $scope.data.cloneCheck1 && [3522, 3523].includes(unitTemp.number)){
                    colors[unitTemp.type]++;
                }
                else if(z != 0 && $scope.data.cloneCheck2 && [3522, 3523].includes(unitTemp.number)){
                    colors[unitTemp.type]++;
                }
                else colors[unitTemp.type]++;
            }
        }
        return colors;
    };

    var cloneReplace = function(cloneUnit, slotNumber){
        if(slotNumber == 0){
            cloneUnit.type = $scope.data.cloneFCType ? $scope.data.cloneFCType : cloneUnit.type;
            if($scope.data.cloneFCClass1 == $scope.data.cloneFCClass2 || !$scope.data.cloneFCClass2 && $scope.data.cloneFCClass1)
                cloneUnit.class = $scope.data.cloneFCClass1 ? $scope.data.cloneFCClass1 : cloneUnit.class;
            else
                cloneUnit.class = $scope.data.cloneFCClass1 ? [ $scope.data.cloneFCClass1, $scope.data.cloneFCClass2 ] : cloneUnit.class;
        }
        else{
            cloneUnit.type = $scope.data.cloneCrewType ? $scope.data.cloneCrewType : cloneUnit.type;
            if($scope.data.cloneCrewClass1 == $scope.data.cloneCrewClass2 || !$scope.data.cloneCrewClass2 && $scope.data.cloneCrewClass1)
                cloneUnit.class = $scope.data.cloneCrewClass1 ? $scope.data.cloneCrewClass1 : cloneUnit.class;
            else
            cloneUnit.class = $scope.data.cloneCrewClass1 ? [ $scope.data.cloneCrewClass1, $scope.data.cloneCrewClass2 ] : cloneUnit.class;
        }
    };

    var classOverrideReplace = function(cloneUnit){
        //cloneUnit.type = $scope.data.cloneFCType ? $scope.data.cloneFCType : cloneUnit.type;
        //if($scope.data.cloneFCClass1 == $scope.data.cloneFCClass2 || !$scope.data.cloneFCClass2 && $scope.data.cloneFCClass1)
        //    cloneUnit.class = $scope.data.cloneFCClass1 ? $scope.data.cloneFCClass1 : cloneUnit.class;
        //else
        //    cloneUnit.class = $scope.data.cloneFCClass1 ? [ $scope.data.cloneFCClass1, $scope.data.cloneFCClass2 ] : cloneUnit.class;
        console.log("Not Yet Implemented")
    };

    /**
     * Caches the parameters. This is should be called whenever a special or altspecial is toggled.
     * The cached parameters can be used for specials that check for something (like the Captain's type or crew HP) at the time of activation.
     * This is due to the fact that you could have full hp as you activate one special,
     * but have half hp when you activate the second one (similar conditions exist, especially captain being swapped out).
     * The same applies for specials and altspecials, so there must be separate params
     * for the special and altspecial.
     *
     * This will also change the `cached` property in the passed `params` object,
     * so there is NO need to manually update it after calling this function.
     *
     * Stores the cached params in $scope.cachedParams[i].special (or .altspecial)
     * and NOT in tdata or data because it could cause circular references or
     * duplicate cached params, which would exponentially slow down the caching.
     *
     * Note that the parameters are cached per special, so `p.cached.slot` will
     * be the same as `p.cached.sourceSlot` (although there is no use for
     * `p.cached.slot` at the time of writing).
     *
     * Because the $scope object has circular references ($parent and $$ChildScope
     * having a reference back to the $scope object) and being large, the cached
     * parameters will not have it. It is however possible in the future to include
     * the scope object if necessary, but it should have its special properties
     * (angularJS properties of the scope) removed, and as much as possible, only
     * necessary properties of the scope object should be copied.
     *
     * @param {object} params The parameters generated by `getParameters` to be cached.
     * @param {number} sourceSlotNumber The 0-based index of the unit in the team.
     * (left column units are 0, 2, 4, and right column units are 1, 3, 5).
     * @param {string} specialType A string denoting the type of special that was launched:
     * Could be "special" or "altspecial".
     */
    var cacheParameters = function(params, sourceSlotNumber, specialType) {
        // temporarily remove the scope object, because the scope object can not be deep-copied due to circular references
        var scopeCopy = params.scope;
        delete params.scope;

        /* uncomment if you need some properties from the scope object, and pick only ones you need
        // create a shallow copy of scope, without its special properties, so that the params object
        // will be deep-copied, except the scope properties we won't need (otherwise, it can't be deep-copied)
        var scopeShallowCopy = {};
        for (const key in scopeCopy) {
            if (key.startsWith('$') || ['notify', 'go', 'constructor']) {
                continue; // skip special scope properties, such as $parent, $$ChildScope, $$nextSibling, etc.
            }
            scopeShallowCopy[key] = scopeCopy[key];
        }
        // temporarily use the shallow copy. should be replaced with the original later.
        // params.scope = scopeShallowCopy;
        */

        // remove the old cached params so that there is no circular reference.
        var oldCachedParams = params.cached;
        delete params.cached;

        // deep copy params to be sure that the params won't be updated until the special is re-activated
        var paramsCopy = angular.copy(params);
        if (oldCachedParams) {
            // if there already were cached params before,
            // merge it by letting the new cached params overwrite the properties from the old one
            // this lets us preserve properties that `onActivation` functions insert,
            // since the new cached params would not have those properties (like `multiplier`)
            params.cached = {...oldCachedParams, ...paramsCopy};
        } else {
            params.cached = paramsCopy;
        }
        $scope.cachedParams[sourceSlotNumber][specialType] = params.cached;

        params.scope = scopeCopy;
    }

    /**
     * Gets the cached parameters for the specified unit given by the `sourceSlotNumber`.
     * This is just a convenience function, so that there would be no need to remember where they are placed.
     * This can be used to change the `cached` property to the correct one on an
     * already generated params object, without having to generate another object.
     *
     * @param {number} sourceSlotNumber The 0-based index of the unit in the team.
     * (left column units are 0, 2, 4, and right column units are 1, 3, 5).
     * @param {string} specialType A string denoting the type of special that was launched:
     * Could be "special" or "altspecial".
     * @returns cached parameters object or `undefined`
     */
    var getCachedParameters = function(sourceSlotNumber, specialType) {
        if (sourceSlotNumber === undefined || sourceSlotNumber === null)
            return undefined;
        return $scope.cachedParams[sourceSlotNumber][specialType];
    }
    
    /**
     * Generates a parameters object. These parameters are used in ability functions
     * (specials.js, captains.js, etc.) as `p`. This lets the functions know the class/type
     * of team members, current crew HP, orb type, etc.
     * @param {number} slotNumber The 0-based index of the unit in the team being evaluated.
     * (left column units are 0, 2, 4, and right column units are 1, 3, 5).
     * @param {number?} chainPosition The 0-based index of the unit in the chain. This is only passed in
     * for specials that have to do with chain bonuses, so this could be left `undefined` for other cases
     * @param {number} sourceSlotNumber The 0-based index of the unit (in the team) who launched the special/altspecial, or captain/sailor ability.
     * @param {string?} specialType A string denoting the type of special that was launched:
     * Could be "special" or "altspecial". This is just used to get the cached params object (`sourceSlotNumber` is also required to get the cached object.)
     * so this can be skipped for cases where there is no cached params, such as map effects, captain and sailor abilities
     * @returns object containing the parameters
     */
    var getParameters = function(slotNumber, chainPosition, sourceSlotNumber, specialType) {
        if ($scope.data.team[slotNumber].limit === undefined)
            $scope.data.team[slotNumber].limit = 0;
        if ($scope.data.team[slotNumber].llimit === undefined)
            $scope.data.team[slotNumber].llimit = 0;
        var unitTemp = Object.assign({},team[slotNumber].unit);
        if(team[0].unit) var friendCaptainTemp = Object.assign({},team[0].unit);
        if(team[1].unit) var captainTemp = Object.assign({},team[1].unit);

        if($scope.data.team[slotNumber].llimit){
            unitTemp.maxLevel += [ 0, 6, 11, 21, 31, 51 ][$scope.data.team[slotNumber].llimit]
        }
        if ($scope.tdata.sugarToysSpecialEnabled){
            if (team[slotNumber].unit) unitTemp.cost = $scope.data.team[slotNumber].sugarToy ? 40 : window.units[team[slotNumber].unit.number].cost;
        }
        if($scope.data.cloneCheck1 && team[0].unit){
            if(slotNumber == 0 && [3522, 3523].includes(team[slotNumber].unit.number)){
                cloneReplace(unitTemp, slotNumber)
            }
            if(team[0].unit && [3522, 3523].includes(team[0].unit.number)){
                cloneReplace(friendCaptainTemp, 0)
            }
        }
        else if($scope.data.cloneCheck2 && slotNumber != 0){
            if(team[slotNumber].unit && [3522, 3523].includes(team[slotNumber].unit.number)){
                cloneReplace(unitTemp, slotNumber)
            }
            if(team[1].unit && [3522, 3523].includes(team[1].unit.number)){
                cloneReplace(captainTemp, 1)
            }
        }

        unitTemp.class1 = Array.isArray(unitTemp.class) ? unitTemp.class[0] : unitTemp.class;
        unitTemp.class2 = Array.isArray(unitTemp.class) ? unitTemp.class[1] : null;

        if($scope.data.classOverrideEnabled) classOverrideReplace(unitTemp);

        return {
            cached: getCachedParameters(sourceSlotNumber, specialType),
            unit: unitTemp,
            orb: $scope.tdata.team[slotNumber].orb,
            maxHP: $scope.numbers.hp,
            currentHP: $scope.hp.current,
            percHP: $scope.data.percHP,
            defenseDown: enemyEffects.def,
            delayed: enemyEffects.delay,
            poisoned: enemyEffects.poison,
            marked: enemyEffects.mark,
            negative: enemyEffects.negative,
            burn: enemyEffects.burn,
            paralysis: enemyEffects.paralysis,
            increaseDamageTaken: enemyEffects.increaseDamageTaken,
            data: team[slotNumber],
            tdata: $scope.tdata.team[slotNumber],
            scope: $scope,
            team: team,
            slot: slotNumber,
            sourceSlot: sourceSlotNumber,
            turnCounter: $scope.tdata.turnCounter.value,
            healCounter: $scope.tdata.healCounter.value,
            basehpCounter: $scope.tdata.basehpCounter.value,
            rcvCounter: $scope.tdata.rcvCounter.value,
            semlaCounter: $scope.tdata.semlaCounter.value,
            damageCounter: $scope.tdata.damageCounter.value,
            dmgreductionCounter: $scope.tdata.dmgreductionCounter.value,
            carrychainCounter: $scope.tdata.carrychainCounter.value,
            debuffCounter: $scope.tdata.debuffCounter.value,
            chainPosition: chainPosition,
            classCount: classCounter(),
            colorCount: colorCounter(),
            teamCount: teamCounter(),
            frankyCheck: frankyCheck(),
            frankyClass: frankyClass(),
            captain: captainTemp || { // use a dummy captain unit, to eliminate the need to do `p.captain && p.captain.type...`
                class: [],
                type: '' ,
            },
            friendCaptain: friendCaptainTemp || { // use a dummy captain
                class: [],
                type: '' ,
            },
            actions: [ $scope.data.actionleft, $scope.data.actionright ],
            limit: $scope.data.team[slotNumber].limit,
            llimit: $scope.data.team[slotNumber].llimit,
            // sugarToy will be false when sugar special is off, but sugarToy in team and scope.data.team will stay
            sugarToy: $scope.tdata.sugarToysSpecialEnabled && $scope.data.team[slotNumber].sugarToy,
            tokiState: $scope.data.team[slotNumber].tokiState,
            vegapunkOptions: $scope.data.vegapunkOptions,
            gear: [ $scope.data.gearLevelLeft, $scope.data.gearLevelRight ],
            hitcombo: hitModifiers,
            effectName: $scope.data.effect,
            enabledAbilities: {
                specials: enabledSpecials,
                effects: enabledEffects
            },
            customBuffs: {
                atk: $scope.data.customATK,
                orb: $scope.data.customOrb,
                affinity: $scope.data.customAffinity,
                atkBase: $scope.data.customATKBase,
                chainAddition: $scope.data.customChainAddition,
            },
            enemyImmunities: $scope.data.enemyImmunities,
            enemyEffects: enemyEffects,
            orbMatching: orbMatching,
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
                hp   : Math.floor(getStatOfUnit(x,'hp',n) * getEffectBonus('hp', x)),
                atk  : Math.floor(getStatOfUnit(x,'atk',n) * getEffectBonus('atk', x)),
                rcv  : Math.floor(getStatOfUnit(x,'rcv',n) * getEffectBonus('rcv', x)),
                cmb  :  x.unit.combo
            };
        });
    };

    var checkHealAndZombie = function(data, numbers, capActions, limits, params) {
        delete numbers.zombie;
        delete numbers.healPerTurn;
        // compute data
        var healAmount = 0, zombieThreshold = 0, tankReducer = null;
        for (var i=0;i<2;++i) {
            rcvtemp = 0;
            rcvmulttemp = 1;
            if (!team[i].unit) continue;
            var id = team[i].unit.number + 1, zombie = window.zombies[id];
            if (!zombie) continue;
            if (zombie.type == 'healer') {
                if (zombie.hasOwnProperty('amount')) 
                    healAmount += zombie.amount;
                else{
                    enabledEffects.forEach(function(x) {
                        var params = getParameters(i, undefined, x.sourceSlot);
                        if (x.hasOwnProperty('rcvStatic'))
                            rcvtemp += x.rcvStatic(params);
                        if (x.hasOwnProperty('rcv') && x.sourceSlot > 1)
                            rcvmulttemp *= x.rcv(params);
                    });
                    //if ([ 1000, 1001, 1250, 1251, 1319, 1320, 1750, 1751, 1889, 1922, 2195, 2211, 2301, 2302, 2443, 2775, 2776, 2792, 5083, 5084, 5085, 5087, 5088, 5089, 353, 1747, 2109, 2763 ].has(id)){
                    if (!zombie.multiplier){
                        var hitsCount = { 'Perfect': 0, 'Great': 0, 'Good': 0, 'Below Good': 0, 'Miss': 0 };
                        var teamlength = 0;
                        
                        for(var teamIter = 0; teamIter < 6; teamIter++){ teamlength = data.team[teamIter] != null ? teamlength + 1 : teamlength; }
                        for(var hitsIter = 0; hitsIter < teamlength; hitsIter++){ hitsCount[hitModifiers[0][hitsIter]]++; }
                        
                        healAmount += id == 1250 ? Math.floor(([0, .5, .75, 1, 1.5, 2, 3.5][classCounter().Powerhouse]) * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += id == 1251 ? Math.floor(([0, .5, .75, 1, 1.5, 2, 3.5][classCounter().Powerhouse]) * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += (id == 1000) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) : 0;
                        healAmount += (id == 1319) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 1320) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + ([.1, .3][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 1750 || id == 1751 || id == 1922  || id == 2775  || id == 2776 || id == 5083 || id == 5087 || id == 2959 || id == 2960 || id == 3220 || id == 3221 || id == 3117 || id == 3118 || id == 3275 || id == 3281 || id == 3282 || id == 3421 || id == 3422 || id == 5338 || id == 5340 || id == 3675 || id == 3676) ? (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5255 || id == 5257 || id == 5258) ? (.3 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5084 || id == 5085 || id == 5088 || id == 5089 || id == 3390 || id == 3391) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += ((id == 2301 || id == 2302) && classCounter().Shooter == 6) ? (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 3079) ? (.75 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 3863) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5291 || id == 5292 || id == 5295 || id == 5296) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.75 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) + (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5293 || id == 5294 || id == 5297 || id == 5298) ? (2 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) + (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        
                        healAmount += (id == 2195) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + ([0, 0.3][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) + ([0.5, 0.8][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) : 0;
                        healAmount += (id == 1001) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + ([0, 0.3][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) + ([0.5, 0.8][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) : 0;
                        healAmount += id == 1889 ? [1.5, 1.6, 1.7, 1.8, 1.9, 2, 2][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2109 ? [1, 1, 1, 1.5, 1.5, 1.5, 2][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2211 ? [51, 151, 251, 351, 451, 510, 510][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] : 0;
                        healAmount += id == 3467 ? [0, 0, 0, 0, 0, 0, 1000][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] : 0;
                        healAmount += id == 2261 ? [1.5, 1.5, 1.5, 1.5, 1.75, 1.75, 1.75][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2763 ? [1, 1, 1, 1, 1, 1, 1.5][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2792 ? Math.floor([1, 1, 1.1, 1.2, 1.3, 1.4, 1.5][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += id == 2443 ? capActions[i] ? 500 : 50 : 0;
                        healAmount += id == 2913 ? capActions[i] ? 2 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0 : 0;
                        healAmount += (id == 3082 || id == 1619) ? [0,2][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += (id == 3251) ? ([0, 0.5][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 3482 || id == 3483) ? params.percHP >= 50 ? 2000 : 0 : 0;
                        healAmount += id == 3568 ? capActions[i] ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        
                        healAmount += id == 1747 ? [1000,1200][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] : 0;
                        healAmount += id == 353 ? [0,300][$scope.data.team[i].unit.limitStats.captains[Math.min($scope.data.team[i].unit.limitStats.captains.length-1,limits[i])]] : 0;
                        healAmount += (id == 3751 || id == 3752) ? $scope.tdata.damageCounter.value >= 50000 ? 2000 : 0 : 0;
                        
                        healAmount = Math.floor(healAmount);
                    }
                    else
                        healAmount += Math.floor((data.team[i].rcv + rcvtemp) * rcvmulttemp * zombie.multiplier);
                }
        }
        else if (zombie.type == 'reducer')
            tankReducer = [ zombie.multiplier, zombie.threshold ];
        else if (zombie.type == 'zombie')
            zombieThreshold = zombie.threshold;
        if ([ 5170, 5171, 5174, 5175 ].has(id))  
            zombieThreshold = zombie.threshold;
        }
        if (shipBonus.bonus && shipBonus.bonus.heal)
            healAmount += shipBonus.bonus.heal({ boatLevel: shipBonus.level, classCount: classCounter() });
        if ($scope.data.healLevel) healAmount += [ 0, 100, 200, 300, 500, 1000 ][$scope.data.healLevel];
        // get heal per turn
        if (healAmount > 0) numbers.healPerTurn = healAmount;
        else return; // nothing to do if there's no healer
        // get zombie/reducer
        if (zombieThreshold > 0) { // healer + zombie
            var works = 1 + healAmount >= Math.floor(numbers.hp * zombieThreshold);
            numbers.zombie = [ 'zombie', works, Math.floor(healAmount / zombieThreshold) ];
        } else if (tankReducer !== null) // healer + reducer
            numbers.zombie = ['reducer', Math.floor(healAmount / tankReducer[0]) ];
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
