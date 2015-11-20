(function() {

var CharUtils = { };

/* * * * * Reverse drop map * * * * */

var reverseDropMap = null, reverseEvoMap = null;
var marks = { 'Story Island': 1, 'Special': 2, 'Fortnight': 4, 'Raid': 8 };

var generateReverseDropMap = function() {
    reverseDropMap = { };
    for (var type in drops) {
        for (var island in drops[type]) {
            for (var stage in drops[type][island]) {
                var data = drops[type][island][stage];
                if (data.constructor != Array) continue;
                for (var i=0;i<data.length;++i) {
                    if (data[i] < 0 || CharUtils.isFarmable(data[i], type)) continue;
                    flagUnit(data[i], type);
                }
            }
        }
    }
};


var updateEvoMap = function(from, to, via) {
    if (!reverseEvoMap[to]) reverseEvoMap[to] = { };
    if (!reverseEvoMap[to][from]) reverseEvoMap[to][from] = [ ];
    reverseEvoMap[to][from].push(via);
};

var generateReverseEvoMap = function() {
    reverseEvoMap = { };
    for (var evo in evolutions) {
        var from = parseInt(evo, 10);
        if (evolutions[evo].evolution.constructor != Array)
            updateEvoMap(from, evolutions[evo].evolution, evolutions[evo].evolvers);
        else for (var i=0;i<evolutions[evo].evolution.length;++i)
            updateEvoMap(from, evolutions[evo].evolution[i], evolutions[evo].evolvers[i]);
    }
};

var addMark = function(value, type) {
    if (!value) value = 0;
    return (value | (marks[type] || 16));
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
    var temp = $.extend({ },filters);
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

CharUtils.searchBaseForms = function(id) {
    if (!reverseEvoMap) generateReverseEvoMap();
    if (!reverseEvoMap[id]) return null;
    return reverseEvoMap[id];

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
    for (var type in drops) {
        for (var island=0;island<drops[type].length;++island) {
            var temp = [ ];
            for (var stage in drops[type][island]) {
                if (stage == 'thumb' || stage == 'name' || stage == 'shortName' || stage == 'day' || stage == 'global') continue;
                if (drops[type][island][stage].indexOf(id) != -1)
                    temp.push(stage);
            }
            if (temp.length > 0) {
                temp.sort();
                var name = drops[type][island].name;
                if (type == 'Fortnight') name += ' Fortnight';
                else if (type == 'Raid') name += ' Raid';
                var data = { name: name, thumb: drops[type][island].thumb, data: temp };
                if (type == 'Story Island' || drops[type][island].hasOwnProperty('day'))
                    data.bonuses = CharUtils.getIslandBonuses(island, drops[type][island].day);
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
    return (!type ? true : (reverseDropMap[id] & (marks[type] || 16)) > 0);
};

CharUtils.isOnlyFarmable = function(id, types) {
    if (reverseDropMap === null) generateReverseDropMap();
    if (!reverseDropMap.hasOwnProperty(id)) return false;
    var n = 0;
    for (var i=1;i<arguments.length;++i) n |= marks[arguments[i]];
    return reverseDropMap[id] == n;
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
        if (global) result.push('GL:' + global.type);
        if (japan) result.push('JP:' + japan.type);
    }
    return result;
};

/******************
 * Initialization *
 ******************/

window.CharUtils = CharUtils;

})();
