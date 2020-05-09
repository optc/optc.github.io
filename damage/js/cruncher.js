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
    var specialsWith = { };
    var currentDefense = 0;
    var isDefenseDown = false;
    var isDelayed = false;
    var katakuri = false;

    var specialsCombinations = [ ], chainSpecials = [ ];
    var hitModifiers = [ ];
    var shipBonus = { };
    var enabledSpecials = [ ];

    var crunchSelfInhibit = false;
    var mapEffect = { };
    var team = [ ];
    var initDone = false;
    
    var gearLevel = [ 0, 0 ];

    /* * * * * Events * * * * */

    $rootScope.$on('specialToggled', function(e, slot, enabled) {
        var unit = $scope.data.team[slot].unit;
        if (!unit) return;
        var id = unit.number + 1;
        if (!specials.hasOwnProperty(id)) return;
        if (enabled && specials[id].hasOwnProperty('onActivation')) {
            if (!initDone) initializeDataStructs();
            
            /*var kataActivate = false;
            for(var kata = 0; kata < 2; kata++){
            if(team[kata].unit !== null){
                if(team[kata].unit.number == 2112 || team[kata].unit.number == 2113)
                    kataActivate = true;
                else
                    kataActivate = false;
                }
            }
            if(team[0].unit == null && team[1].unit == null)
                kataActivate = false;
            isDelayed = kataActivate;
            var params = ;
            params["isDelayed"] = isDelayed;*/
            
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
        var hpMax = 0, rcvTotal = 0, bonusrcv = 0;
        team.forEach(function(x,n) {
            if (n > 5 || x.unit === null) return;
            var shipParam = getParameters(n);
            // hp
            var hp = getStatOfUnit(x,'hp',n);
            hp += getShipBonus('hp',true,x.unit,n,team[1].unit,n,shipParam);
            hp = applyStaticEffectsToHP(n,hp);
            hp *= getEffectBonus('hp',x.unit);
            hp *= getShipBonus('hp',false,x.unit,n,team[1].unit,n,shipParam);
            hpMax += Math.floor(applyCaptainEffectsToHP(n,hp));
            // rcv
            var rcv = getStatOfUnit(x,'rcv',n);
            rcv += getShipBonus('rcv',true,x.unit,n,team[1].unit,n,shipParam);
            rcv *= getShipBonus('rcv',false,x.unit,n,team[1].unit,n,shipParam);
            rcv *= getEffectBonus('rcv',x.unit);
            rcvTotal += Math.floor(applyCaptainEffectsAndSpecialsToRCV(n,rcv));
            
            bonusrcv = applyAddRCVSpecialsToRCV(n,0);
            
        });
        
        result.rcv = Math.max(0,rcvTotal);
        result.rcv += bonusrcv
        var cost = team.slice(1,6).reduce(function(prev,next) { return prev + (!next.unit ? 0 : next.unit.cost); },0);
        result.cost = { cost: cost, level: Math.max(1,Math.floor(cost / 2) * 2 - 18) };
        $scope.numbers = jQuery.extend($scope.numbers, result);
        $scope.numbers.hp = Math.max(1,hpMax);
        checkHealAndZombie(result, $scope.numbers, [$scope.data.actionleft, $scope.data.actionright]);
        $timeout(function() { crunchSelfInhibit = false; });
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
            var friendCaptain = $scope.tdata.team[0];
            var captain = $scope.tdata.team[1];
            var orb = $scope.tdata.team[n].orb;
            var atk = getStatOfUnit(x,'atk',n); // basic attack (scales with level);
            var ship = getShipBonus('atk',false,x.unit,n,team[1].unit,n,shipParam), againstType = type;//Same problem as above, so yeah
            var multipliers = [ ];
            if (orb == 'g') orb = 1.5;
            if (orb == 0.5 && x.unit.type == 'DEX') orb = (window.specials[1221].turnedOn || window.specials[1222].turnedOn || window.specials[2235].turnedOn || window.specials[2236].turnedOn || window.specials[2363].turnedOn || window.specials[2370].turnedOn || window.specials[2371].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Driven")) orb = (window.specials[1259].turnedOn || window.specials[1260].turnedOn || window.specials[1323].turnedOn || window.specials[1324].turnedOn || window.specials[2425].turnedOn || window.specials[2426].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Slasher")) orb = (window.specials[1323].turnedOn || window.specials[1324].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Fighter")) orb = (window.specials[1593].turnedOn || window.specials[1463]. turnedOn || window.specials[1462]. turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Powerhouse")) orb = (window.specials[1528].turnedOn || window.specials[2318].turnedOn || window.specials[2470].turnedOn || window.specials[2471].turnedOn) ? 2 : 0.5;
            if (orb == 0.5 && x.unit.type == 'DEX' && x.unit.class.has("Free Spirit")) orb = (window.specials[1593].turnedOn) ? 2 : 0.5;
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
                                     || (window.specials[1593].turnedOn && (x.unit.class.has("Fighter") || x.unit.class.has("Free Spirit")))
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
            
            if (orb == 0.5) orb = (window.specials[1269].turnedOn || window.specials[1270].turnedOn || window.specials[1330].turnedOn || window.specials[1546].turnedOn || window.specials[1547].turnedOn || window.specials[1557].turnedOn || window.specials[1890].turnedOn || window.specials[1891].turnedOn || window.specials[2227].turnedOn || window.specials[2478].turnedOn || window.specials[2479].turnedOn) ? 1 : .5;
            
            //Captain Meat orbs because Nekomamushi/also counts as TND because lazy
            if (orb =='meat'){
                for (temp = 0; temp < 2; temp++){
                    if (team[temp].unit != null){
                        if ([ 1610, 1609, 1532, 1531, 2232, 2233, 2234, 2500, 2300, 2803, 2804, 5052, 5054, 5055, 5057 ].includes(team[temp].unit.number + 1)){
                            orb = 2;
                        }
                        if ([ 2012, 2013 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Free Spirit")){
                            orb = 2;
                        }
                        if ([ 2462, 2463 ].includes(team[temp].unit.number + 1) && x.unit.class.has("Powerhouse")){
                            orb = 2;
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
            if (orb == 0.5 && x.unit.type == 'DEX' && $scope.data.effect == 'STR Orbs Beneficial') orb = 2;
            if (orb == 'str' && $scope.data.effect == 'STR Orbs Beneficial') orb = 2;
            if (orb == 'meat') orb = 
                ((window.specials[1515].turnedOn || window.specials[1516].turnedOn || (window.specials[1593].turnedOn) && x.unit.class.has("Fighter")) || 
                ((window.specials[1181].turnedOn || window.specials[1182].turnedOn) && x.unit.class.has("Slasher")) || 
                ((window.specials[1380].turnedOn || window.specials[1379].turnedOn) && (x.unit.class.has("Cerebral") || x.unit.class.has("Free Spirit")))) || 
                ((window.specials[2128].turnedOn) && (x.unit.class.has("Slasher") || x.unit.class.has("Striker"))) ? 2 : 1;
            if (orb == 'rainbow') orb = 2;
            if (orb == 'empty') orb = 1;
            if (orb == 'wano') orb = 2.5;
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
        var maxLevel = (data.unit.maxLevel == 1 ? 1 : data.unit.maxLevel -1);
        var growth = data.unit.growth[stat] || 1;
        var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();
        var result = data.unit[minStat] + (data.unit[maxStat] - data.unit[minStat]) * Math.pow((data.level-1) / maxLevel, growth);
        var candyBonus = (data.candies && data.candies[stat] ? data.candies[stat] * { hp: 5, atk: 2, rcv: 1 }[stat] : 0);
        if(params.limit[slot] != null && params.limit[slot] != 0){
            LBaddition = data.unit.limitStats[stat][Math.min(params.limit[slot]-1,data.unit.limitStats[stat].length-1)];
            if(!LBaddition) LBaddition = 0;
        }
        enabledSpecials.forEach(function(data) {
            if (data.hasOwnProperty('atkbase') && stat == "atk"){
                params["sourceSlot"] = data.sourceSlot;
                atkbaseDamage = data.atkbase(params);
            }
        });
        return Math.floor(result) + candyBonus + atkbaseDamage + LBaddition;
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
    var computeDamageOfUnit = function(position, unit, unitAtk, hitModifier, currentHitCount, type) {
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
            specialsWith.hitMultipliers.forEach(function(x) { lastAtk *= x.hit(result.hits, getParameters(position)); });
            // apply defense
            lastHit = lastAtk / unit.combo;
            lastHit = Math.ceil(Math.max(1, lastHit - currentDefense));
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
            if (lastHit > 1) result.result += Math.ceil(lastAtk * 0.9 * bonusDamageBase);
            else result.result += Math.max(0,Math.ceil(lastAtk * (0.9 * bonusDamageBase + 1 / unit.combo)) - currentDefense - 1);
        }
        
        //Apply Static Bonus Damage From Specials
        var staticBonusDamage = computeFlatBonusDamage(hitModifier, unit, type, position);
        if ((staticBonusDamage > 0) && ((staticBonusDamage - currentDefense)>0) && (result.result > 0)) {
            result.result += (staticBonusDamage - currentDefense);
        }
        
        // apply fixed threshold barrier if active
        if (mapEffect.barrierThreshold && result.result > mapEffect.barrierThreshold) {
            result.result = mapEffect.barrierThreshold +
                Math.floor((result.result - mapEffect.barrierThreshold) * (1 - mapEffect.barrierReduction));
        }
        return result;
    };

    /* Computes the actual defense threshold of the enemy after the specials are factored in.
     * Defense-reducing specials do not stack with each other, so we just use the one that grants the lowest defense.
     */
    var computeActualDefense = function(shipName) {
        var baseDefense = parseInt($scope.data.defense, 10) || 0;
        currentDefense = baseDefense;
        var defreduced = false;
        enabledSpecials.forEach(function(x) {
            if (x === null || !x.hasOwnProperty('def')) return;
            currentDefense = Math.min(currentDefense,baseDefense * x.def(getParameters(x.sourceSlot)));
            if (x.def(getParameters(x.sourceSlot)) < 1) defreduced = true;
        });
        if(shipName=="Flying Dutchman - Special ACTIVATED"){
            currentDefense = Math.min(currentDefense,baseDefense * .75);
            defreduced = true;
        }
        return defreduced;
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

    var getTypeMultiplierOfUnit = function(attackerType,attackedType, unit, teamSlot) {
        var typeMult = 1, affinityMult = 1, captAffinityMult = 1;
        
        if (attackerType == 'STR' && attackedType == 'DEX') typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        if (attackerType == 'QCK' && attackedType == 'STR') typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        if (attackerType == 'DEX' && attackedType == 'QCK') typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        if (attackerType == 'INT' && attackedType == 'PSY') typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        if (attackerType == 'PSY' && attackedType == 'INT') typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        if (attackerType == 'STR' && attackedType == 'QCK') typeMult = getParameters(teamSlot).superType[teamSlot] ? 0.75 : 0.5;
        if (attackerType == 'QCK' && attackedType == 'DEX') typeMult = getParameters(teamSlot).superType[teamSlot] ? 0.75 : 0.5;
        if (attackerType == 'DEX' && attackedType == 'STR') typeMult = getParameters(teamSlot).superType[teamSlot] ? 0.75 : 0.5;
        
        if ([2650, 2651, 2681].indexOf(unit.unit.number + 1) != -1 && teamSlot < 2) typeMult = getParameters(teamSlot).superType[teamSlot] ? 2.5 : 2;
        
        //Get the strongest Color affinity Mult if it exists and apply it
        if (!$scope.data.effect || !effects[$scope.data.effect].hasOwnProperty('affinity')) {
            affinityMultiplier.forEach(function(special){
                    if(affinityMult<special.affinityMultiplier(unit))
                        affinityMult = special.affinityMultiplier(unit);
                });
        }
        else{
            affinityMult = effects[$scope.data.effect]['affinity'](unit.unit);
        }
        
        //Get the strongest Color affinity Mult captains
        captAffinityMultiplier.forEach(function(captain){
                    //captAffinityMult *= captain.captAffinityMultiplier(unit);
                    var params = getParameters(teamSlot)
                    params["sourceSlot"] = captain.sourceSlot;
                    captAffinityMult *= captain.captAffinityMultiplier(params);
                });
        
        //Calculate the new Affinity mult
        if(affinityMult != 1 || captAffinityMult != 1){
            if(typeMult > 1) typeMult *= (affinityMult * captAffinityMult);
            if(typeMult < 1) typeMult /= (affinityMult * captAffinityMult);
        }
        
        return typeMult;
    };

    var getChainMultiplier = function(chainBase, hitModifiers, chainModifier) {
        var sanjijudge = 1;
        if ($scope.data.effect == '1.25x Chain Multiplier - Sanji Judge Change Action'){
            sanjijudge = 1.25;
        }
        var result = chainBase;
        for (var i=0;i<hitModifiers.length;++i) {
            if (hitModifiers[i] == 'Perfect') result += chainModifier * 0.3;
            else if (hitModifiers[i] == 'Great') result += chainModifier * 0.1;
            else if (hitModifiers[i] == 'Good') result += 0;
            else result = chainBase;
        }
        result = result != 1 ? result * sanjijudge : result;
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
                params["sourceSlot"] = enabledEffects[h].sourceSlot;
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
        
        var currentMax = -1, currentResult = null, addition = 0.0;
        if(shipBonus.bonus.name=="Donquixote Pirates Ship - Special ACTIVATED"){
            addition = 0.2
        }

        //get the highest Chain Addition if it exists
        chainAddition.forEach(function(special){
            var params = getParameters(special.sourceSlot);
            if(addition<special.chainAddition(params)){
                addition = special.chainAddition(params);
            }
        });
        
        if ($scope.data.effect == '0.5x Chain Boost - Sanji Zoro Change Action'){
            addition = 0.5;
        }
        if ($scope.data.effect == '0.3x Chain Boost - Lucci Kaku Change Action'){
            addition = 0.3;
        }
        if ($scope.data.effect == '2.5x Chain Lock - Vivi Rebecca Change Action'){
            addition = 2.5;
        }
        
        chainSpecials.forEach(function(special) {
            var multipliersUsed = [ ], currentHits = 0, overall = 0;
            var i, params = [ ];
            for (var j=0;j<damage.length;++j){ 
                params.push(getParameters(damage[j].position, j));
                params[j].sourceSlot = special.sourceSlot;
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
                var chainMultiplier = getChainMultiplier(special.chain(params[n]), modifiers.slice(0,n), chainModifier);
                //Add flat Multiplier Bonuses if they exist
                if(addition>0.0 && chainMultiplier != 1.0)
                    chainMultiplier = chainMultiplier + addition;
                if (mapEffect.hasOwnProperty('chainLimiter'))
                    chainMultiplier = Math.min(mapEffect.chainLimiter(params[n]), chainMultiplier);
                else if (special.hasOwnProperty('chainLimiter'))
                    chainMultiplier = Math.min(special.chainLimiter(params[n]), chainMultiplier);
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
                var temp = computeDamageOfUnit(x.position, x.unit.unit, unitAtk, modifiers[n], currentHits, type);
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
                result = applyCaptainEffectsToDamage(result,cptsWith.hitModifiers[i].hitAtk,hitModifiers,false,cptsWith.hitModifiers[i].sourceSlot);
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
        var result = { type: [ ], class: [ ], base: [ ], orb: [ ], affinity: [ ], condition: [ ]};
        chainSpecials = [ ];
        chainAddition = [ ];
        affinityMultiplier = [ ];
        atkbase = [ ];
        captAffinityMultiplier = [ ];
        staticMultiplier = [ ];
        enabledSpecials.forEach(function(data) {
            if (data === null) return;
            // notice specials with both atk and atkStatic defined are not supported right now
            if (data.hasOwnProperty('atk') || data.hasOwnProperty('atkStatic'))
                result[data.type].push({ sourceSlot: data.sourceSlot, f: (data.atk || data.atkStatic), s: data.hasOwnProperty('atkStatic') });
            if (data.hasOwnProperty('orb'))
                result.orb.push({ sourceSlot: data.sourceSlot, f: data.orb });
            if (data.hasOwnProperty('affinity'))
                result.affinity.push({ sourceSlot: data.sourceSlot, f: data.affinity });
            if (data.hasOwnProperty('atkbase'))
                atkbase.push({ sourceSlot: data.sourceSlot, f: data.atkbase });
            if (data.hasOwnProperty('chain'))
                chainSpecials.push({ sourceSlot: data.sourceSlot, chain: data.chain, chainLimiter: data.chainLimiter || function() { return Infinity; } });
            if (data.hasOwnProperty('chainAddition'))
                chainAddition.push({ sourceSlot: data.sourceSlot, chainAddition: data.chainAddition || function(){ return 0.0; } });
            if (data.hasOwnProperty('staticMult'))
                staticMultiplier.push({staticMultiplier: data.staticMult, sourceSlot: data.sourceSlot});
            if (data.hasOwnProperty('affinity'))
                affinityMultiplier.push({affinityMultiplier: data.affinity || function(){ return 1.0; }});
        });
        enabledEffects.forEach(function(data) {
            if (data.hasOwnProperty('affinity'))
                captAffinityMultiplier.push({ sourceSlot: data.sourceSlot, captAffinityMultiplier: data.affinity || function(){ return 1.0; }});
        });
        specialsCombinations = Utils.arrayProduct([ result.type.concat(result.class), result.condition, result.orb ]);
        if (chainSpecials.length === 0) chainSpecials.push({
            chain: function() { return 1.0; },
            chainLimiter: function() { return Infinity; }
        });
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
            var params = getParameters(0);
            params['unit'] = unit;
            params['slot'] = teamSlot;
            //Check if conditional Boosts are activated since they raise 
            for (var x=0;x<enabledSpecials.length;++x) {
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
            if ([2650, 2651, 2681].indexOf(unit.number + 1) != -1 && teamSlot < 2) affinityMultiplier = affinityMultiplier;
            else if(unit.type != type){
                if (unit.type == "STR" && type == "QCK") affinityMultiplier = Math.pow(affinityMultiplier, -1);
                else if (unit.type == "DEX" && type == "STR") affinityMultiplier = Math.pow(affinityMultiplier, -1);
                else if (unit.type == "QCK" && type == "DEX") affinityMultiplier = Math.pow(affinityMultiplier, -1);
                else affinityMultiplier = 1;
            }
            else affinityMultiplier = 1;
            //Add the static extra Damage to each attacking member
            var multSpecial = 0;
            var baseDamage = 0;
            var specialid;
            for (var y=0;y<enabledSpecials.length;++y) {
                if (enabledSpecials[y].hasOwnProperty('staticMult')){
                    var slot = enabledSpecials[y].sourceSlot;
                    params.sourceSlot = slot;
                    console.log(params);
                    if (enabledSpecials[y].staticMult(params) >= multSpecial){
                        specialid = team[slot].unit.number + 1;
                        multSpecial = enabledSpecials[y].staticMult(params);
                        baseDamage = getStatOfUnit(team[slot],'atk', slot);
                        enabledEffects.forEach(function(x) {
                            if (x.hasOwnProperty('atkStatic'))
                                baseDamage += x.atkStatic(getParameters(slot));
                        });
                        /*enabledSpecials.forEach(function(x) {
                            if (x.hasOwnProperty('atkbase'))
                                var params = getParameters(slot);
                                params["sourceSlot"] = x.sourceSlot;
                                baseDamage += x.atkbase(params);
                        });*/
                    }
                }
            }
            if (specialid == 2364 || specialid == 2365) var staticDamage = Math.ceil(multSpecial*conditionalMultiplier);
            else var staticDamage = Math.ceil((baseDamage)*multSpecial*conditionalMultiplier);
            if((hitModifier == 'Great')||(hitModifier == 'Good')||(hitModifier == 'Perfect')){
                resultDamage += staticDamage;
            }
            for (var y=0;y<enabledEffects.length;++y) {
                if (enabledEffects[y].hasOwnProperty('staticMult')){
                    var params = getParameters(enabledEffects[y].sourceSlot);
                    params['sourceSlot'] = enabledEffects[y].sourceSlot;
                    var slot = enabledEffects[y].sourceSlot;
                    var baseDamage2 = getStatOfUnit(team[slot],'atk',slot);
                    var mult = enabledEffects[y].staticMult(params);
                    enabledEffects.forEach(function(x) {
                        if (x.hasOwnProperty('atkStatic'))
                            baseDamage2 += x.atkStatic(getParameters(slot));
                    });
                    enabledSpecials.forEach(function(x) {
                        if (x.hasOwnProperty('atkbase'))
                            baseDamage += x.atkbase(getParameters(slot));
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
        initDone = true;
        // get enabled specials
        var conflictWarning = false;
        enabledSpecials = [ ];
        // deactivate turn counter (will be reactivated if necessary)
        $scope.tdata.turnCounter.enabled = false;
        $scope.tdata.healCounter.enabled = false;
        $scope.tdata.semlaCounter.enabled = false;
        $scope.tdata.damageCounter.enabled = false;
        // get ship bonus
        shipBonus = jQuery.extend({ bonus: window.ships[$scope.data.ship[0]] },{ level: $scope.data.ship[1] });
        // orb map effects
        mapEffect = { };
        if ($scope.data.effect) {
            var data = effects[$scope.data.effect];
            if (data.orb) enabledSpecials.push({ orb: data.orb, permanent: true, sourceSlot: -1 });
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
                if (specials[id].hasOwnProperty('orb') && enabledSpecials[0] && enabledSpecials[0].permanent){
                    conflictWarning = true;
                    var disabledSpecial = {}
                    for (var i in specials[id]){
                        if(i != 'orb')
                            disabledSpecial[i] = specials[id][i];
                    }
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n },disabledSpecial));
                }
                else
                    enabledSpecials.push(jQuery.extend({ sourceSlot: n },specials[id]));
            }
            // activate turn counter if necessary
            if (n < 2 && (id == 794 || id == 795 || id == 1124 || id == 1125 || id == 1191 || id == 1192 || id == 1219 || id == 1220 || id == 1288 || id == 1289 || id == 1361 || id == 1362 || id == 1525 || id == 1557 || id == 1558 || id == 1559 || id == 1560 || id == 1561 || id == 1562 || id == 1712 || id == 1713 || id == 1716 || id == 1764 || id == 1907 || id == 1908 || id == 2015 || id == 2049 || id == 2050 || id == 2198 || id ==2199 || id == 2214 || id == 2215 || id == 2299 || id == 2337 || id == 2338 || id == 2421 || id == 2422 || id == 2423 || id == 2424 || id == 2440 || id == 2441 || id == 5074 || id == 5534 || id == 5535 || id == 2669 || id == 2670 || id == 2683 || id == 2684))
                $scope.tdata.turnCounter.enabled = true;
            if(shipBonus.bonus.name=="Shark Superb")
                $scope.tdata.turnCounter.enabled = true;
            if (n < 2 && (id == 1609 || id == 1610 || id == 2232))
                $scope.tdata.healCounter.enabled = true;
            if (id == 2364 || id == 2365)
                $scope.tdata.damageCounter.enabled = true;
            if (n < 2 && (id == 2233 || id == 2234 || id == 2500))
                $scope.tdata.semlaCounter.enabled = true;
        });
        if (conflictWarning) 
            $scope.notify({ type: 'error', text: 'One or more specials you selected cannot be activated due to an active map effect.' });
        // check if defense is down (required by some captain effects)
        isDefenseDown = computeActualDefense(shipBonus.bonus.name);
        //isDefenseDown = enabledSpecials.some(function(x) { return (x !== null && x.hasOwnProperty('def')) || (shipBonus.bonus.name == "Flying Dutchman - Special ACTIVATED"); });
        for(var kata = 0; kata < 2; kata++){
            if(team[kata].unit !== null){
                var temp = team[kata].unit.number + 1;
                if(temp == 2112 || temp == 2113 || temp == 2739)
                    katakuri = true;
            }
        }
        if(team[0].unit == null && team[1].unit == null)
            katakuri = false;
        
        isDelayed = enabledSpecials.some(function(x) { return (x !== null && x.hasOwnProperty('delay')) ? x.delay(getParameters(x.sourceSlot)) > 0 : false || (shipBonus.bonus.name == "Karasumaru Ship - Special ACTIVATED"); }) || katakuri;
        
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
    };
    
    //Returns an Object with a counter of classes in the current Team
    var classCounter = function() {
        var classes = {};
        var classArray = ['Fighter', 'Slasher', 'FreeSpirit', 'Powerhouse', 'Shooter', 'Striker', 'Cerebral', 'Driven'];
        for (var i = 0, j = classArray.length; i < j; i++) {
            classes[classArray[i]] = 0;
        }
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                if(team[z].unit.class.length==2){
                    if(team[z].unit.class[0] == 'Free Spirit'){
                        classes['FreeSpirit']++;
                    }
                    else{
                        classes[team[z].unit.class[0]]++;
                    }
                    if(team[z].unit.class[1] == 'Free Spirit'){
                        classes['FreeSpirit']++;
                    }
                    else{
                        classes[team[z].unit.class[1]]++;
                    }
                }else{
                    if(team[z].unit.class == 'Free Spirit'){
                        classes['FreeSpirit']++;
                    }
                    else{
                        classes[team[z].unit.class]++;
                    }
                }
            }
        }
        return classes;
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
                if(team[z].unit.class.length == 2){
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class[0]) || ['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class[1])){
                        classes['Primary']++;
                    }
                    if(['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(team[z].unit.class[0]) || ['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(team[z].unit.class[1])){
                        classes['Secondary']++;
                    }
                }
                else{
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class)){
                        classes['Primary']++;
                    }
                    if(['Free Spirit', 'Powerhouse', 'Cerebral', 'Driven'].includes(team[z].unit.class)){
                        classes['Secondary']++;
                    }
                }
            }
        }
        return classes;
    };
    
    var frankyClass = function() {
        var classes = {};
        for (var i = 0, j = team.length; i < j; i++) {
            //classes[i] = '';
        }
        for(var z=0;z<team.length;z++){
            if(team[z].unit){
                if(team[z].unit.class.length==2){
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class[0])){
                        classes[z] = team[z].unit.class[0];
                    }
                    else if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class[1])){
                        classes[z] = team[z].unit.class[1];
                    }
                }
                else{
                    if(['Fighter', 'Slasher', 'Shooter', 'Striker'].includes(team[z].unit.class)){
                        classes[z] = team[z].unit.class;
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
                colors[team[z].unit.type]++;
                }
            }
        return colors;
    };
    
    var getParameters = function(slotNumber, chainPosition) {
        return {
            unit: team[slotNumber].unit,
            orb: $scope.tdata.team[slotNumber].orb,
            maxHP: $scope.numbers.hp,
            percHP: $scope.data.percHP,
            defenseDown: isDefenseDown,
            delayed: isDelayed,
            data: team[slotNumber],
            tdata: $scope.tdata.team[slotNumber],
            scope: $scope,
            team: team,
            slot: slotNumber,
            turnCounter: $scope.tdata.turnCounter.value,
            healCounter: $scope.tdata.healCounter.value,
            semlaCounter: $scope.tdata.semlaCounter.value,
            damageCounter: $scope.tdata.damageCounter.value,
            chainPosition: chainPosition,
            classCount: classCounter(),
            colorCount: colorCounter(),
            frankyCheck: frankyCheck(),
            frankyClass: frankyClass(),
            captain: team[1].unit,
            friendCaptain: team[0].unit,
            actions: [ $scope.data.actionleft, $scope.data.actionright ],
            limit: [ $scope.data.limit0, $scope.data.limit1, $scope.data.limit2, $scope.data.limit3, $scope.data.limit4, $scope.data.limit5 ],
            superType: [ $scope.data.superType0, $scope.data.superType1, $scope.data.superType2, $scope.data.superType3, $scope.data.superType4, $scope.data.superType5 ],
            gear: [ $scope.data.gearLevelLeft, $scope.data.gearLevelRight ],
            hitcombo: hitModifiers,
            effectName: $scope.data.effect,
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

    var checkHealAndZombie = function(data, numbers, capActions) {
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
                        if (x.hasOwnProperty('rcvStatic'))
                            rcvtemp += x.rcvStatic(getParameters(i));
                        if (x.hasOwnProperty('rcv') && x.sourceSlot > 1)
                            rcvmulttemp *= x.rcv(getParameters(i));
                    });
                    if ([ 1000, 1001, 1250, 1251, 1319, 1320, 1750, 1751, 1889, 1922, 2195, 2211, 2301, 2302, 2443, 2775, 2776, 2792, 5083, 5084, 5085, 5087, 5088, 5089 ].has(id)){
                        var hitsCount = { 'Perfect': 0, 'Great': 0, 'Good': 0, 'Below Good': 0, 'Miss': 0 };
                        var teamlength = 0;
                        
                        for(var teamIter = 0; teamIter < 6; teamIter++){ teamlength = data.team[teamIter] != null ? teamlength + 1 : teamlength; }
                        for(var hitsIter = 0; hitsIter < teamlength; hitsIter++){ hitsCount[hitModifiers[0][hitsIter]]++; }
                        
                        healAmount += id == 1250 ? Math.floor(([0, .5, .75, 1, 1.5, 2, 3.5][classCounter().Powerhouse]) * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += id == 1251 ? Math.floor(([0, .5, .75, 1, 1.5, 2, 3.5][classCounter().Powerhouse]) * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += id == 1889 ? capActions[i] ? 2 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2211 ? capActions[i] ? 510 : 51 : 0;
                        healAmount += id == 2443 ? capActions[i] ? 500 : 50 : 0;
                        healAmount += id == 2792 ? Math.floor(1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp) : 0;
                        healAmount += (id == 1000 || id == 1001 || id == 2195) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Great']) : 0;
                        healAmount += (id == 1319) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 1320) ? (1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Good']) + (.1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 1750 || id == 1751 || id == 1922  || id == 2775  || id == 2776 || id == 5083 || id == 5087) ? (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5255 || id == 5257 || id == 5258) ? (.3 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += (id == 5084 || id == 5085 || id == 5088 || id == 5089) ? (1 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += ((id == 2301 || id == 2302) && classCounter().Shooter == 6) ? (.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp * hitsCount['Perfect']) : 0;
                        healAmount += id == 2261 ? capActions[i] ? 1.75 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 1.5 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0;
                        healAmount += id == 2913 ? capActions[i] ? 2 * (data.team[i].rcv + rcvtemp) * rcvmulttemp : 0 : 0;
                        
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
