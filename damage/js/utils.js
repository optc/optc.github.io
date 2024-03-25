/* jshint loopfunc: true */

(function() {

var MODIFIERS = [ 'Miss', 'Good', 'Great', 'Perfect' ];

window.CrunchUtils = { };

window.CrunchUtils.okamaCheck = function(array, modifiers, data) {
    for (var i=0;i<array.length;++i) {
        for (var j=0;j<data.length && i+j<array.length;++j) {
            var different = (data[j].type && array[i+j].unit.unit.type != data[j].type) ||
                (data[j].minModifier && MODIFIERS.indexOf(modifiers[i+j]) < MODIFIERS.indexOf(data[j].minModifier));
            if (different) break;
        }
        if (j == data.length) return true;
    }
    return false;
};

//Sorts the hit order to proc a Raid-Ivan style captain boost
window.CrunchUtils.okamaSort = function(array, data) {
    var that = jQuery.extend([], array), temp = [ ];
    for (var i=0;i<data.length;++i) {
        for (var j=0;j<that.length;++j) {
            if (that[j].unit.unit.type != data[i]) continue;
            temp.push(that.splice(j,1)[0]);
            break;
        }
        if (i == data.length) break;
    }
    if (temp.length != data.length) return null;
    else return [ temp.concat(that) ];
};
    
/* Sorts by class (units not belonging to the specified class(es) at the
 * beginning), then by ATK. classMultiplier is the multiplier units belonging
 * to the specified class(es) receive. */
window.CrunchUtils.classSort = function(array, classMultiplier, classes) {
    var result = [ ];
    function isUnitAMatch(unit) {
        for (var n = 0;n<classes.length;n++) {
            if (unit.class.has(classes[n])) {
                return true;
            }
        }
        return false;
    }
    // atk-based
    var temp = array.map(function(x) {
        var multiplier = x.multipliers.reduce(function(prev,next) { return prev * next[0]; },1);
        return [ x.base * multiplier * (isUnitAMatch(x.unit.unit) ? classMultiplier : 1), x ];
    });
    temp.sort(function(x,y) { return x[0] - y[0]; });
    result.push(temp.map(function(x) { return x[1]; }));
    // class-based
    var beginning = [ ], end = [ ];
    array.forEach(function(x) {
        if (isUnitAMatch(x.unit.unit)) {
            end.push(x);
        } else {
            beginning.push(x);
        }
    });
    result.push(beginning.concat(end));
    // return result
    return result;
};
    
/* Sorts by class (units not belonging to the specified class(es) at the
 * beginning), then by ATK. classMultiplier is the multiplier units belonging
 * to the specified class(es) receive. */
window.CrunchUtils.typeclassSort = function(array, classMultiplier, classes) {
    var result = [ ];
    function isUnitAMatch(unit) {
        for (var n = 0;n<classes.length;n++) {
            if (unit.class.has(classes[n])) {
                return true;
            }
        }
        if (classes.includes(unit.type)) {
            return true;
        }
        return false;
    }
    // atk-based
    var temp = array.map(function(x) {
        var multiplier = x.multipliers.reduce(function(prev,next) { return prev * next[0]; },1);
        return [ x.base * multiplier * (isUnitAMatch(x.unit.unit) ? classMultiplier : 1), x ];
    });
    temp.sort(function(x,y) { return x[0] - y[0]; });
    result.push(temp.map(function(x) { return x[1]; }));
    // class-based
    var beginning = [ ], end = [ ];
    array.forEach(function(x) {
        if (isUnitAMatch(x.unit.unit)) {
            end.push(x);
        } else {
            beginning.push(x);
        }
    });
    result.push(beginning.concat(end));
    // return result
    return result;
};
    
window.CrunchUtils.lowCostSort = function(array, costMultiplier, cost) {
    var result = [ ];
    function isUnitAMatch(unit) {
        if (unit.cost <= cost) {
            return true;
        }
        return false;
    }
    // atk-based
    var temp = array.map(function(x) {
        var multiplier = x.multipliers.reduce(function(prev,next) { return prev * next[0]; },1);
        return [ x.base * multiplier * (isUnitAMatch(x.unit.unit) ? costMultiplier : 1), x ];
    });
    temp.sort(function(x,y) { return x[0] - y[0]; });
    result.push(temp.map(function(x) { return x[1]; }));
    // class-based
    var beginning = [ ], end = [ ];
    array.forEach(function(x) {
        if (isUnitAMatch(x.unit.unit)) {
            end.push(x);
        } else {
            beginning.push(x);
        }
    });
    result.push(beginning.concat(end));
    // return result
    return result;
};
    
window.CrunchUtils.typeSort = function(array, typeMultiplier, types) {
    var result = [ ];
    function isUnitAMatch(unit) {
        if (types.includes(unit.type)) {
            return true;
        }
        else {
            return false;
        }
    }
    var temp = array.map(function(x) {
        var multiplier = x.multipliers.reduce(function(prev,next) { return prev * next[0]; },1);
        return [ x.base * multiplier * (isUnitAMatch(x.unit.unit) ? typeMultiplier : 1), x ];
    });
    temp.sort(function(x,y) { return x[0] - y[0]; });
    result.push(temp.map(function(x) { return x[1]; }));
    // class-based
    var beginning = [ ], end = [ ];
    array.forEach(function(x) {
        if (isUnitAMatch(x.unit.unit)) {
            end.push(x);
        } else {
            beginning.push(x);
        }
    });
    result.push(beginning.concat(end));
    return result;
};
    
window.CrunchUtils.gearSort = function(array, typeMultiplier) {
    var result = [ ];
    var gears = array.gear;
    delete array.gear;
    function isUnitAMatch(unit, slot) {
        if (slot < 2) {
            if (gears[slot] == 3){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
    }
    var temp = array.map(function(x) {
        var multiplier = x.multipliers.reduce(function(prev,next) { return prev * next[0]; },1);
        return [ x.base * multiplier * (isUnitAMatch(x.unit.unit, x.position) ? typeMultiplier : 1), x ];
    });
    temp.sort(function(x,y) { return x[0] - y[0]; });
    result.push(temp.map(function(x) { return x[1]; }));
    // class-based
    var beginning = [ ], end = [ ];
    array.forEach(function(x) {
        if (isUnitAMatch(x.unit.unit)) {
            end.push(x);
        } else {
            beginning.push(x);
        }
    });
    result.push(beginning.concat(end));
    return result;
};
    
window.CrunchUtils.kataCount = function(checkClasses, unitClasses) {
    return checkClasses.reduce((a, c) => a + unitClasses.includes(c), 0);
};

window.CrunchUtils.getOrbMultiplier = function(orb, type, uclass, baseMultiplier, boostedMultiplier, captains, effectName, params) {
    /* Object.keys(window.altspecials).forEach(function(x) {
        if (window.altspecials[x].hasOwnProperty('orbPlus')){
            if(window.altspecials[x].turnedOn)
                if (window.altspecials[x].orbPlus(params) > orbPlusBonus)
                    orbPlusBonus = window.altspecials[x].orbPlus(params)
        }
    }); */

    boostedMultiplier = parseFloat(params.customBuffs.orb) != 1 ? parseFloat(params.customBuffs.orb) : boostedMultiplier;
    
    if(effectName == 'STR Orbs Beneficial'){
        if (orb == 'str') return boostedMultiplier;
        if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
    }
    if(window.specials[1221].turnedOn || window.specials[1222].turnedOn || window.specials[2235].turnedOn || window.specials[2236].turnedOn || window.specials[2363].turnedOn || window.specials[2370].turnedOn || window.specials[2371].turnedOn){
        if (orb == 'str') return boostedMultiplier;
        if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
    }
    if(window.specials[3957].turnedOn){
        if (orb == 'meat') return boostedMultiplier;
    }
    if(window.specials[1940].turnedOn || window.specials[1941].turnedOn){
        if(type == 'STR' || type == 'PSY' || type == 'QCK'){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1323].turnedOn || window.specials[1324].turnedOn){
        if(uclass.has("Driven") || uclass.has("Slasher")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
            if (orb == 'dex') return boostedMultiplier;
            if (orb == 0.5 && type == 'QCK') return boostedMultiplier;
        }
    }
    if(window.specials[1593].turnedOn.has(true)){
        if(uclass.has("Fighter") || uclass.has("Free Spirit")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1259].turnedOn || window.specials[1260].turnedOn || window.specials[2425].turnedOn || window.specials[2426].turnedOn){
        if(uclass.has("Driven")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1640].turnedOn || window.specials[1746].turnedOn || window.specials[1747].turnedOn || window.specials[2309].turnedOn || window.specials[2310].turnedOn || window.specials[2324].turnedOn || window.specials[2325].turnedOn){
        if(uclass.has("Shooter")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1651].turnedOn || window.specials[1652].turnedOn || window.specials[2373].turnedOn || window.specials[2470].turnedOn || window.specials[2471].turnedOn){
        if(uclass.has("Striker")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1528].turnedOn || window.specials[2318].turnedOn || window.specials[2470].turnedOn || window.specials[2471].turnedOn){
        if(uclass.has("Powerhouse")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
            if (orb == 'dex') return boostedMultiplier;
            if (orb == 0.5 && type == 'QCK') return boostedMultiplier;
        }
    }
    if(window.specials[2236].turnedOn || window.specials[2235].turnedOn){
        if (orb == 'dex' || orb == 'int') return boostedMultiplier;
        if ((orb == 0.5 && type == 'PSY') || (orb == 0.5 && type == 'QCK')) return boostedMultiplier;
    }
    if(window.specials[2249].turnedOn){
        if (orb == 'int') return boostedMultiplier;
        if (orb == 0.5 && type == 'PSY') return boostedMultiplier;
    }
    if(window.specials[2374].turnedOn || window.specials[2375].turnedOn){
        if(uclass.has("Slasher") || uclass.has("Powerhouse")){
            if (orb == 'dex' || orb == 'int') return boostedMultiplier;
            if ((orb == 0.5 && type == 'PSY') || (orb == 0.5 && type == 'QCK')) return boostedMultiplier;
        }
    }
    if(window.specials[1977].turnedOn || window.specials[1978].turnedOn){
        if(uclass.has("Free Spirit")){
            if (orb == 'dex' || orb == 'int') return boostedMultiplier;
            if ((orb == 0.5 && type == 'PSY') || (orb == 0.5 && type == 'QCK')) return boostedMultiplier;
        }
    }
    if(window.specials[1515].turnedOn || window.specials[1516].turnedOn){
        if (orb == 'meat') return boostedMultiplier;
    }
    if(window.specials[1593].turnedOn.has(true)){
        if(uclass.has("Fighter")){
            if (orb == 'meat') return boostedMultiplier;
        }
    }
    if(window.specials[1181].turnedOn || window.specials[1182].turnedOn){
        if(uclass.has("Slasher")){
            if (orb == 'meat') return boostedMultiplier;
        }
    }
    if(window.specials[1379].turnedOn || window.specials[1380].turnedOn){
        if(uclass.has("Cerebral") || uclass.has("Free Spirit")){
            if (orb == 'meat') return boostedMultiplier;
        }
    }
    if(window.specials[2128].turnedOn){
        if(uclass.has("Slasher") || uclass.has("Striker")){
            if (orb == 'meat') return boostedMultiplier;
            if (orb == 'dex') return boostedMultiplier;
            if (orb == 0.5 && type == 'QCK') return boostedMultiplier;
        }
    }
    if(window.specials[3740].turnedOn || window.specials[3741].turnedOn){
        if (orb == 'empty') return boostedMultiplier;
    }
    if(window.specials[5430].turnedOn || window.specials[5432].turnedOn || window.altspecials[5432].turnedOn || window.altspecials[5432].turnedOn){
        if (orb == 'tnd') return boostedMultiplier;
    }
    if(window.specials[1269].turnedOn || window.specials[1270].turnedOn || window.specials[1330].turnedOn || window.specials[1546].turnedOn || window.specials[1547].turnedOn || window.specials[1557].turnedOn || window.specials[1890].turnedOn || window.specials[1891].turnedOn || window.specials[2227].turnedOn || window.specials[2478].turnedOn || window.specials[2479].turnedOn){
        if (orb == 0.5) return baseMultiplier;
    }
    for(temp = 0; temp < 2; temp++){
        if(captains[temp] != null){
            if([1610, 1609, 1532, 1531, 2232, 2233, 2234, 2500, 2300, 2803, 2804, 5052, 5054, 5055, 5057, 2957, 2957, 3306, 3307, 3814, 3888, 3889, 3904, 3905, 3947, 3948, 5453, 5454, 5455, 5456, 5457, 5548, 5459, 5460, 3955, 3956, 3957, 3966, 3967, 5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 4028, 4029].includes(captains[temp].number + 1)){
                if (orb == 'meat'){
                    return boostedMultiplier;
                }
            }
            if([5453, 5454, 5455, 5456, 5457, 5548, 5459, 5460, 5539, 5540, 5541, 5542, 5543, 5544, 5545, 5546, 4028, 4029, 4050].includes(captains[temp].number + 1)){
                if (orb == 'tnd'){
                    return boostedMultiplier;
                }
            }
            if([2012, 2013].includes(captains[temp].number + 1) && uclass.has("Free Spirit")){
                if (orb == 'meat'){
                    return boostedMultiplier;
                }
            }
            /*if([2374, 2375].includes(captains[temp].number + 1) && (uclass.has("Driven") || uclass.has("Powerhouse"))){
                if (orb == 'meat'){
                    return boostedMultiplier;
                }
            }*/
            if([2022, 2023].includes(captains[temp].number + 1) && type == 'INT'){
                if (orb == 'str'){
                    return boostedMultiplier;
                }
            }
            if([2306].includes(captains[temp].number + 1) && (uclass.has("Slasher") || uclass.has("Cerebral"))){
                if (orb == 'str' || (type == 'DEX' && orb == 0.5)){
                    return boostedMultiplier;
                }
            }
            if([5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043].includes(captains[temp].number + 1) && (uclass.has("Driven"))){
                if (orb == 'str' || (type == 'DEX' && orb == 0.5)){
                    return boostedMultiplier;
                }
            }
            if([2137].includes(captains[temp].number + 1)){
                if (orb == 'str' || (type == 'DEX' && orb == 0.5)){
                    return boostedMultiplier;
                }
            }
            if([5026, 5027].includes(captains[temp].number + 1) && type == 'DEX'){
                if (orb == 0.5){
                    return boostedMultiplier;
                }
            }
            if([2476, 2477].includes(captains[temp].number + 1) && (uclass.has("Slasher"))){
                if ((orb == 'dex' || orb == 'int') || (orb == 0.5  && (type == 'QCK' || type == 'PSY'))){
                    return boostedMultiplier;
                }
            }
            if([4050].includes(captains[temp].number + 1)){
                if ((orb == 'dex') || (orb == 2  && type == 'DEX')){
                    return boostedMultiplier;
                }
            }
        }
    }
    if (orb == 1.0 || orb == 'str' || orb == 'dex' || orb == 'qck' || orb == 'psy' || orb == 'int' || orb == 'meat' || orb == 'empty') return baseMultiplier;
    if (orb == 2.0 || orb == 'g' || orb == 'superbomb' || orb == 'rainbow' || orb == 'wano') return boostedMultiplier;
    if (orb == 0.5) return 1 / boostedMultiplier;
    return 1;
};

window.CrunchUtils.limitUnlock = function(p, ability) {
    return p.team[p.sourceSlot].unit.limitStats[ability][Math.min(p.team[p.sourceSlot].limit,p.team[p.sourceSlot].unit.limitStats[ability].length-1)];
};

window.CrunchUtils.llimitUnlock = function(p, ability) {
    return p.team[p.sourceSlot].unit.llimitStats[ability][Math.min(p.team[p.sourceSlot].llimit,p.team[p.sourceSlot].unit.llimitStats[ability].length-1)];
};

})();
