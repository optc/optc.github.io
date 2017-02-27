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
    
window.CrunchUtils.typeSort = function(array, typeMultiplier, types) {
    var result = [ ];
    function isUnitAMatch(unit) {
        if (unit.type == types) {
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

window.CrunchUtils.getOrbMultiplier = function(orb, type, baseMultiplier, boostedMultiplier) {
    if(window.specials[1221].turnedOn || window.specials[1222].turnedOn){
        if (orb == 'str') return boostedMultiplier;
        if (orb == 0.5 && type == 'DEX') return boostedMultiplier;
    }
    if (orb == 1.0 || orb == 'str') return baseMultiplier;
    if (orb == 2.0 || orb == 'g' || orb == 'rainbow') return boostedMultiplier;
    if (orb == 0.5) return 1 / boostedMultiplier;
    return 1;
};

})();
