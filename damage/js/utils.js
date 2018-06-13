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

window.CrunchUtils.getOrbMultiplier = function(orb, type, uclass, baseMultiplier, boostedMultiplier, captains, effectName) {
    if(effectName == 'STR Orbs Beneficial'){
        if (orb == 'str') return boostedMultiplier;
        if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
    }
    if(window.specials[1221].turnedOn || window.specials[1222].turnedOn){
        if (orb == 'str') return boostedMultiplier;
        if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
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
        }
    }
    if(window.specials[1593].turnedOn){
        if(uclass.has("Fighter") || uclass.has("Free Spirit")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1259].turnedOn || window.specials[1260].turnedOn){
        if(uclass.has("Driven")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1640].turnedOn){
        if(uclass.has("Shooter")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1746].turnedOn || window.specials[1747].turnedOn){
        if(uclass.has("Shooter")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1651].turnedOn || window.specials[1652].turnedOn){
        if(uclass.has("Striker")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1528].turnedOn){
        if(uclass.has("Powerhouse")){
            if (orb == 'str') return boostedMultiplier;
            if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
        }
    }
    if(window.specials[1515].turnedOn || window.specials[1516].turnedOn){
        if (orb == 'meat') return boostedMultiplier;
    }
    if(window.specials[1593].turnedOn){
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
        }
    }
    if(window.specials[1269].turnedOn || window.specials[1270].turnedOn || window.specials[1330].turnedOn || window.specials[1546].turnedOn || window.specials[1547].turnedOn || window.specials[1557].turnedOn){
        if (orb == 0.5) return baseMultiplier;
    }
    for(temp = 0; temp < 2; temp++){
        if(captains[temp] != null){
            if([1610, 1609, 1531, 1532].includes(captains[temp].number)){
                if (orb == 'meat'){
                    return boostedMultiplier;
                }
            }
            if([2012, 2013].includes(captains[temp].number) && uclass.has("Free Spirit")){
                if (orb == 'meat'){
                    return boostedMultiplier;
                }
            }
            if([2022, 2023, 2137].includes(captains[temp].number)){
                if (orb == 'str'){
                    return boostedMultiplier;
                }
            }
        }
    }
    if (orb == 1.0 || orb == 'str' || orb == 'meat') return baseMultiplier;
    if (orb == 2.0 || orb == 'g' || orb == 'rainbow') return boostedMultiplier;
    if (orb == 0.5) return 1 / boostedMultiplier;
    return 1;
};

})();
