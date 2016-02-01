(function() {

var CharUtils = { };

/* * * * * Reverse drop map * * * * */

var reverseDropMap = null;
var marks = { 'Story Island': 1, 'Weekly Island': 2, 'Fortnight': 4, 'Raid': 8, 'Colosseum': 16 };

var generateReverseDropMap = function() {
    reverseDropMap = { };
    for (var type in drops) {
        for (var island in drops[type]) {
            for (var stage in drops[type][island]) {
                var data = drops[type][island][stage];
                if (!data || data.constructor != Array) continue;
                for (var i=0;i<data.length;++i) {
                    if (data[i] < 0 || CharUtils.isFarmable(data[i], type)) continue;
                    if (drops[type][island].name == 'Colosseum')
                        flagUnit(data[i], 'Colosseum');
                    else
                        flagUnit(data[i], type);
                }
            }
        }
    }
};


var addMark = function(value, type) {
    if (!value) value = 0;
    return (value | (marks[type] || 32));
};

var flagUnit = function(id, type) {
    reverseDropMap[id] = addMark(reverseDropMap[id], type);
    if (!evolutions[id]) return;
    if (evolutions[id].evolution.constructor != Array)
        flagUnit(evolutions[id].evolution, type);
    else for (var i=0;i<evolutions[id].evolution.length;++i)
        flagUnit(evolutions[id].evolution[i], type);
};


/* * * * * Public methods * * * * */

CharUtils.generateSearchParameters = function(query, filters) {
    if (/^\d+$/.test(query)) {
        var n = parseInt(query,10);
        if (n > 0 && n < units.length) query = 'id=' + query;
    }
    var result = Utils.generateSearchParameters(query);
    if (result === null && Object.keys(filters).length === 0) return null;
    if (filters.class && filters.class.constructor != RegExp) filters.class = new RegExp(filters.class,'i');
    var temp = jQuery.extend({ },filters);
    temp.custom = [ ];
    if (filters.custom) {
        for (var i=0;i<filters.custom.length;++i) {
            if (filters.custom[i])
                temp.custom.push(window.matchers[i]);
        }
    }
    if (Object.keys(temp).length > 0 || temp.custom.length > 0) {
        if (!result) result = { };
        result.filters = temp;
    }
    return result;
};

CharUtils.searchEvolverEvolutions = function(id) {
    var result = { }, current = parseInt(id,10);
    for (var key in evolutions) {
        var paddedId = ('000' + key).slice(-4);
        if (!evolutions[key].evolution) continue;
        if (evolutions[key].evolvers.indexOf(current) != -1)
            result[paddedId] = (result[paddedId] || [ ]).concat([ evolutions[key].evolution ]);
        for (var i=0;i<evolutions[key].evolution.length;++i) {
            if (evolutions[key].evolvers[i].indexOf(current) != -1)
                result[paddedId] = (result[paddedId] || [ ]).concat([ evolutions[key].evolution[i] ]);
        }
    }
    return result;
};

CharUtils.getEvolversOfEvolution = function(from,to,withID) {
    if (!to) return [ ];
    from = parseInt(from,10);
    to = parseInt(to,10);
    if (evolutions[from].evolution == to) return evolutions[from].evolvers;
    if (!withID) return evolutions[from].evolvers[evolutions[from].evolution.indexOf(to)];
    for (var i=0;i<evolutions[from].evolution.length;++i) {
        if (evolutions[from].evolution[i] != to) continue;
        if (evolutions[from].evolvers[i].indexOf(withID) == -1) continue;
        return evolutions[from].evolvers[i];
    }
    return [ ];
};

CharUtils.searchDropLocations = function(id) {
    var result = [ ];
    for (var type in window.drops) {
        for (var island=0;island<window.drops[type].length;++island) {
            var temp = [ ];
            for (var stage in window.drops[type][island]) {
                if (stage == 'thumb' || stage == 'name' || stage == 'shortName' || stage == 'day' || stage == 'global') continue;
                if (window.drops[type][island][stage].indexOf(id) != -1)
                    temp.push(stage);
            }
            if (temp.length > 0) {
                temp.sort();
                var name = window.drops[type][island].name;
                if (type == 'Fortnight') name += ' Fortnight';
                else if (type == 'Raid') name += ' Raid';
                var data = { name: name, thumb: window.drops[type][island].thumb, data: temp };
                if (type == 'Story Island' || window.drops[type][island].hasOwnProperty('day'))
                    data.bonuses = CharUtils.getIslandBonuses(island, window.drops[type][island].day);
                result.push(data);
            }
        }
    }
    return result;
};

CharUtils.searchTandems = function(id) {
    var result = [ ];
    for (var i=0;i<tandems.length;++i) {
        if (tandems[i].units.indexOf(id) > -1)
            result.push(tandems[i]);
    }
    return result;
};

CharUtils.isFarmable = function(id, type) {
    if (reverseDropMap === null) generateReverseDropMap();
    if (!reverseDropMap.hasOwnProperty(id)) return false;
    return (!type ? true : (reverseDropMap[id] & (marks[type] || 32)) > 0);
};

CharUtils.checkFarmable = function(id, locations) {
    if (reverseDropMap === null) generateReverseDropMap();
    if (!reverseDropMap.hasOwnProperty(id)) return false;
    var data = reverseDropMap[id], include = data, exclude = data, included = false;
    for (var loc in locations) {
        var mark = marks[loc];
        if (locations[loc]) {
            if ((include & mark) === 0) return false;
            include = include & ~mark;
            included = true;
        } else if ((exclude & mark) == exclude) return false;
    }
    return (!included || include === 0);
};

CharUtils.searchSameSpecials = function(id) {
    if (!details[id]) return [ ];
    var result = [ ];
    for (var key in details) {
        if (key == id || !details[key].special) continue; 
        if (details[key].specialName == details[id].specialName && details[key].special == details[id].special)
            result.push(parseInt(key, 10));
    }
    return result;
};

CharUtils.getDayOfWeek = function(japan, ignore) {
    var now = new Date(), utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000), today;
    if (!japan) today = new Date(utc.getTime() - 8 * 3600000);
    else today = new Date(utc.getTime() + 9 * 3600000);
    if (japan && today.getHours() < 12 && !ignore) return -1;
    return (today.getDay() === 0 ? 6 : today.getDay() - 1);
};

CharUtils.getIslandBonuses = function(y, day) {
    var result = [ ];
    if (day !== undefined) {
        if (day == CharUtils.getDayOfWeek(false)) result.push('GL:today'); 
        if (day == CharUtils.getDayOfWeek(true, true)) result.push('JP:today'); 
    } else {
        var getBonus = function(x) {
            if (x < 0) return null;
            return bonuses.filter(function(data) {
                return y >= data.y && x <= data.x && x + y == data.x + data.y &&
                    (!data.hasOwnProperty('stop') || x >= data.stop);
            })[0];
        };
        var global = getBonus(CharUtils.getDayOfWeek(false)), japan = getBonus(CharUtils.getDayOfWeek(true, false));
        if (global && drops['Story Island'][y] && drops['Story Island'][y].global) result.push('GL:' + global.type);
        if (japan) result.push('JP:' + japan.type);
    }
    return result;
};

CharUtils.getStatOfUnit = function(unit, stat, level) {
    var maxLevel = (unit.maxLevel == 1 ? 1 : unit.maxLevel -1);
    var growth = unit.growth[stat] || 1;
    var minStat = 'min' + stat.toUpperCase(), maxStat = 'max' + stat.toUpperCase();
    var result = unit[minStat] + (unit[maxStat] - unit[minStat]) * Math.pow((level-1) / maxLevel, growth);
    return Math.floor(result);
};

/***********
 * Caching *
 ***********/

var orbControllerCache = { }, regexCache = { }, classCache = { captain: { }, special: { } };

CharUtils.getOrbControllerData = function(id) {
    if (orbControllerCache.hasOwnProperty(id) || !window.details[id] || !window.details[id].special)
        return (orbControllerCache[id] || null);
    var special = window.details[id].special;
    var data = (special.constructor != String ? JSON.stringify(special) : special);
    var match = data.match(/(changes.+?orbs into.+?orbs)/gi);
    if (!match) {
        orbControllerCache[id] = null;
        return null;
    }
    var result = { from: { }, to: { }, map: { } };
    match.forEach(function(match) {
        var n = match.indexOf(' into ');
        var from = match.slice(0,n).match(/\[(.+?)\]/gi);
        var to = match.slice(n + 6).match(/\[(.+?)\]/gi);
        if (from) {
            from = from.map(function(x) { return x.slice(1,-1); });
            from.forEach(function(x) { result.from[x] = true; });
        }
        if (to) {
            to = to.map(function(x) { return x.slice(1,-1); });
            to.forEach(function(x) { result.to[x] = true; });
        }
        if (from && to) {
            from.forEach(function(f) {
                if (!result.map[f]) result.map[f] = { };
                to.forEach(function(x) { result.map[f][x] = true; });
            });
        }
    });
    orbControllerCache[id] = result;
    return result;
};

CharUtils.checkMatcher = function(matcher, id) {
    var target = window.details[id][matcher.target], name = matcher.target + '.' + matcher.name, result;
    if (regexCache[name] && regexCache[name].hasOwnProperty(id)) return regexCache[name][id];
    else if (!target) result = false;
    else if (matcher.include && matcher.include.indexOf(id) != -1) result = true;
    else {
        if (target.constructor != String) target = JSON.stringify(target);
        result = matcher.matcher.test(target);
    }
    if (!regexCache.hasOwnProperty(name)) regexCache[name] = { };
    regexCache[name][id] = result;
    return result;
};

CharUtils.isClassBooster = function(target, id, clazz) {
    var data = window.details[id][target], result;
    if (!classCache[target].hasOwnProperty(clazz)) classCache[target][clazz] = { };
    if (classCache[target][clazz].hasOwnProperty(id)) return classCache[target][clazz][id];
    if (!data) result = false;
    else {
        if (data.constructor != String) data = JSON.stringify(data);
        result = (new RegExp('of.+' + clazz + '.+characters')).test(data);
    }
    classCache[target][clazz][id] = result;
    return result;
};

/******************
 * Initialization *
 ******************/

window.CharUtils = CharUtils;

})();
