(function() {

var CharUtils = { };

/* * * * * Reverse drop map * * * * */

var reverseDropMap = null;
var alternateDropMap = null;
var marks = { 'Story Island': 1, 'Booster and Evolver Island': 2, 'Rookie Mission': 4, 'Fortnight': 8, 'Raid': 16, 'Coliseum': 32, 'Treasure Map': 64, 'Ambush': 128, 'Kizuna Clash': 256, 'Arena': 512, 'Pirate Rumble': 1024, 'Special': 2048 };

var comparators = {
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "=": (a, b) => a == b,
}

var generateReverseDropMap = function() {
    reverseDropMap = { };
    for (var type in drops) {
        for (var island in drops[type]) {
            for (var stage in drops[type][island]) {
                var data = drops[type][island][stage];
                if (!data || data.constructor != Array) continue;
                for (var i=0;i<data.length;++i) {
                    if (data[i] < 0 || CharUtils.isFarmable(data[i], type)) continue;
                   /* if (drops[type][island].name == 'Coliseum')
                        flagUnit(data[i], 'Coliseum');
                    else if (drops[type][island].name == 'Arena')
                        flagUnit(data[i], 'Arena');*/
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
    var result = Utils.generateSearchParameters(query);
    if (result === null && Object.keys(filters).length === 0) return null;
    if (filters.class && filters.class.constructor != RegExp) filters.class = new RegExp(filters.class,'i');
    var temp = jQuery.extend({ },filters);
    temp.custom = [ ];
    for (const target in filters.custom) {
        for (const group in filters.custom[target]) {
            for (const name in filters.custom[target][group].matchers) {
                if (filters.custom[target][group].matchers[name].enabled) {
                    var matcherTemp = {...window.matchers[target][group][name]}; // clone to avoid affecting window.matchers
                    if (matcherTemp.submatchers) {
                        for (const [j, submatcher] of matcherTemp.submatchers.entries()) {
                            // avoid affecting submatchers in window.matchers
                            matcherTemp.submatchers[j] = {...submatcher, ...{param: filters.custom[target][group].matchers[name].submatchers[j].param}};
                        }
                    }
                    temp.custom.push(matcherTemp);
                }
            }
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
        var evolutionObj = Object.assign({}, evolutions[key]);
        var paddedId = ('000' + key).slice(-4);
        if (!evolutionObj.evolution) continue;
        if (evolutionObj.evolvers.indexOf(current) != -1) {
            if (!result[paddedId])
                result[paddedId] = [];
            result[paddedId].push(evolutionObj);
        }
        for (var i=0;i<evolutionObj.evolution.length;++i) { // Multiple evos
            if (evolutionObj.evolvers[i].indexOf(current) != -1) {
                if (!result[paddedId])
                    result[paddedId] = [];
                result[paddedId].push({
                    evolution: evolutionObj.evolution[i],
                    evolvers: evolutionObj.evolvers[i]
                });
            }
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
                if (stage == 'thumb' || stage == 'name' || stage == 'shortName' || stage == 'day' || stage == 'global' || stage == 'condition' || stage == 'completion' || stage == 'challenge' || stage == 'challengeData' || stage == 'showManual' || stage == 'gamewith'|| stage == 'slefty' || stage == 'nakama' || stage == 'dropID') continue;
                if (window.drops[type][island][stage].indexOf(id) != -1)
                    temp.push(stage);
            }
            if (temp.length > 0) {
                temp.sort();
                var name = window.drops[type][island].name;
                /*if (type == 'Fortnight') name += ' Fortnight';
                else if (type == 'Raid') name += ' Raid';
                else if (type == 'Coliseum') name += ' Coliseum';
                else if (type == 'Arena') name += ' Arena';
                else if (type == 'Treasure Map') name += ' Treasure Map';
                else if (type == 'Kizuna Clash') name += ' Kizuna';*/
                var data = { name: name, thumb: window.drops[type][island].thumb, data: temp };
                if (type == 'Story Island' || window.drops[type][island].hasOwnProperty('day'))
                    data.bonuses = CharUtils.getIslandBonuses(island, window.drops[type][island].day);
                result.push(data);
            }
        }
    }
    return result;
};

/**
 * @param {number|string} id Unit ID (1-based)
 * @returns {Object[]|null} Array of objects of farmable versions of the unit
 * with the structure {id: number, name: string, location: object}
 */
CharUtils.getFarmableVersions = function (id) {
    id = Number(id);
    let families = window.families[id];
    if (!families)
        return null;

    let farmableVersions = [];
    let farmableVersionsIds = new Set(); // prevent dupes

    for (let family of families) {
        let unitIds = Utils.getUnitsInFamily(family);
        if (unitIds) {
            unitIds.forEach(id => farmableVersionsIds.add(id));
        }
    };
    farmableVersionsIds.delete(id); // don't include given unit

    for (let id of farmableVersionsIds) {
        if (!CharUtils.isFarmable(id) || Utils.searchBaseForms(id))
            continue;
        let name = units[id - 1].name;
        if (name.length > 25)
            name = name.slice(0,22) + '...';
        CharUtils.searchDropLocations(id).forEach(function(location) {
            farmableVersions.push({
                uid: id,
                name: name,
                location: location
            });
        });
    }

    return farmableVersions;
}

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
        if (Array.isArray(details[id].special) && Array.isArray(details[key].special))
            if (details[key].specialName == details[id].specialName && details[key].special[0].description == details[id].special[0].description)
                result.push(parseInt(key, 10));
        if (details[id].special){
            if (details[id].special.character1 && details[key].special.character1)
                if (details[key].specialName == details[id].specialName && details[id].special.character1 == details[key].special.character1)
                    result.push(parseInt(key, 10));
            if ((details[id].special.character1 && !details[key].special.character1) || (!details[id].special.character1 && details[key].special.character1)){
                    if(details[id].special.character1) if (details[key].specialName == details[id].specialName && (details[id].special.character1 == details[key].special || details[id].special.character2 == details[key].special))
                        result.push(parseInt(key, 10));
                    if(details[key].special.character1) if (details[key].specialName == details[id].specialName && (details[key].special.character1 == details[id].special || details[key].special.character2 == details[id].special))
                        result.push(parseInt(key, 10));
            }
        }
    }
    return [...new Set(result)];
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

var orbControllerCache = { }, regexCache = { }, jsonCache = { }, classCache = { captain: { }, special: { }, sailor: { } };

CharUtils.getFromRegexCache = function(cacheKey, unitId) {
    if (regexCache[cacheKey] && regexCache[cacheKey].hasOwnProperty(unitId))
        return regexCache[cacheKey][unitId];
    return undefined;
}

CharUtils.saveToRegexCache = function(cacheKey, unitId, value) {
    if (!regexCache.hasOwnProperty(cacheKey))
        regexCache[cacheKey] = { };
    regexCache[cacheKey][unitId] = value;
}

CharUtils.checkMatcher = function(matcher, id) {
    var target = matcher.target;
    var targetString = window.details[id][matcher.target];
    // It is unlikely for VS units to get a super special, so combine them when matching
    if (matcher.target == "superSpecial" && window.details[id].VSSpecial) {
        target = "VSSpecial";
        targetString = window.details[id]["VSSpecial"];
    }
    if (matcher.name == "Has Level Limit Break" && window.details[id].lLimit) {//Override for Seach by Level Limit Break (To keep it with other Limit Break filters)
        console.log("test");
        return true;
    }

    var name = target + '.' + matcher.group + '.' + matcher.name;
    var result = false;

    if (!targetString)
        return false;
    else if (matcher.include && matcher.include.indexOf(id) != -1) // specified units
        result = true;

    if (targetString.constructor != String)
        targetString = JSON.stringify(targetString);
    if (matcher.submatchers) {
        // only exit if false, because even if it's true, the submatcher params
        // can be different (may become false when submatchers are evaluated)
        if (CharUtils.getFromRegexCache(name, id) === false) {
            return false;
        }
        // RegExp.exec() because some ability descriptions have more than 1 value, like captain abilities.
        // in such cases, if at least one matches, return true ("OR" behavior)
        // regex objects should have the 'global' flag to match multiple times
        // DON'T use the global flag in `window.matchers` as that will break
        // `CharUtils.addTags` and potentially in other areas due to `RegExp:lastIndex`.
        // so we recompile here instead.

        // If you need the extra performance improvement from not recompiling,
        // make sure that all code that use the regex with the global flag
        // set the `lastIndex` of the regex object to 0 after all operations.
        var regex = new RegExp(matcher.regex, 'ig');
        var matchIndex = -1;
        while ((match = regex.exec(targetString)) !== null) {
            matchIndex += 1;

            // for matchers with multiple submatchers, execute an "AND" operation.
            // this makes it possible to search for a specific multiplier and turns.
            var allSubmatchersSuccess = true;
            for (var [i, submatcher] of matcher.submatchers.entries()){
                // must include matchIndex as there can be many matches for a unit,
                // and the first ones may be false for the submatchers, but the
                // last one returns true
                var cacheKey = name + '.match' + matchIndex + '.sub' + i;
                if (!CharUtils.checkSubmatcher(target, submatcher, match, cacheKey, id)) {
                    allSubmatchersSuccess = false;
                    break;
                }
            }

            if (allSubmatchersSuccess) {
                result = true;
                break;
            }
        }
        CharUtils.saveToRegexCache(name, id, matchIndex > -1);
    } else {
        if ((result = CharUtils.getFromRegexCache(name, id)) !== undefined) {
            return result;
        }

        result = matcher.regex.test(targetString);
        CharUtils.saveToRegexCache(name, id);
    }
    return result;
};

/**
 * Evaluates a submatcher against the match object returned by evaluating the main
 * regex. This performs an "OR" operation among the `groups` specified in the
 * submatcher, as the different groups will likely yield different values, and some
 * are optional groups.
 *
 * Submatcher operations will not be executed if the user has not yet entered
 * any value in a number-type submatcher, or if an option-type submatcher is turned off.
 * @param {string} target The property in window.details that will be checked against, e.g. "captain", "special"
 * @param {object} submatcher One of `window.matchers[n].submatchers`
 * @param {object} matchObj The match object returned by matching the main matcher's regex
 * @param {string} cacheKey A prefix for the key to be used for storing/reading from the
 * `regexCache` for submatchers. Only the value of `param` will be appended inside
 * the function, so the prefix must already have the matchIndex and submatcherIndex
 * appended to it
 * @param {number} id 1-based unit ID number
 * @returns {boolean}
 */
CharUtils.checkSubmatcher = function(target, submatcher, matchObj, cacheKey, id) {
    var param = submatcher.param;
    if (typeof param === 'string')
        param = param.trim();
    else if (param) // non-null non-string
        param = JSON.stringify(param);
    if (!param) { // "separator"-type submatchers also won't have `param`.
        return true;
    }

    // Use result for cache if the submatcher with the same `param` was already evaluated for the unit
    cacheKey += '.param=' + param;
    if (regexCache[cacheKey] && regexCache[cacheKey].hasOwnProperty(id))
        return regexCache[cacheKey][id];

    var result = false;

    if (submatcher.type == 'number') {
        // operators are optional
        var rangeRegex = /^((?:<|>)?=?)?(.*)$/; // for input values

        var rangeMatch = param.match(rangeRegex);
        if (!rangeMatch) {
            CharUtils.saveToRegexCache(cacheKey, id, false);
            return false;
        }

        var op = rangeMatch[1] || '>=';
        // parseFloat instead of coercion to Number, in case user inputs symbols
        // at the end, like "99+" will be 99, "50%" will be 50, "3.5x" will be "3.5"
        // remove commas from "1,000,000"
        var inputValue = parseFloat(rangeMatch[2].replace(/,/g, '')); // value entered by user
        if (isNaN(inputValue)){
            CharUtils.saveToRegexCache(cacheKey, id, false);
            return false;
        }

        // matchers like "bind reducers" have two groups, one for
        // fixed turns, the other for "completely", which will be
        // interpreted as Infinity. For those, only one of those groups
        // will be present, so we execute an "OR" operation for
        // these (at least one match in all the captured groups)
        // variable multipliers also use more than 1 group
        for (var groupIndex of submatcher.groups) {
            var capturedValue = matchObj[groupIndex]; // value in the ability being checked
            if (!capturedValue) // skip empty groups (they can be optional groups)
                continue;
            capturedValue = capturedValue.replace(/\?/g, "0"); // "?x", "0.?x"
            capturedValue = capturedValue.replace(/,/g, ""); // for "1,500"
            if (capturedValue == "completely" || capturedValue == "99+" || capturedValue == "MAX")
                capturedValue = Infinity;

            capturedValue = Number(capturedValue);
            if (isNaN(capturedValue)) { // if the regex group catches a non-numerical string
                console.error(`${matchObj[groupIndex]} is not a number. \nMatcher Name: ${cacheKey}\nGroup Index: ${groupIndex}`)
                continue;
            }

            if (comparators[op](capturedValue, inputValue)){
                result = true;
                break;
            }
        }
    } else if (submatcher.type == 'text') {
        // "OR" operation
        for (var groupIndex of submatcher.groups) {
            // optional groups that did not match (will evaluate to undefined)
            // should be changed to empty strings, so /^$/ can match the empty string
            var capturedValue = matchObj[groupIndex] || '';
            var regex = new RegExp(submatcher.param, 'i');
            if (regex.test(capturedValue)){
                result = true;
                break;
            }
        }
    } else if (submatcher.type == 'option') {
        // "OR" operation
        for (var groupIndex of submatcher.groups) {
            // optional groups that did not match (will evaluate to undefined)
            // should be changed to empty strings, so /^$/ can match the empty string
            var capturedValue = matchObj[groupIndex] || '';
            if (submatcher.regex.test(capturedValue)){
                result = true;
                break;
            }
        }
    }
    CharUtils.saveToRegexCache(cacheKey, id, result);
    return result;
}

CharUtils.hasFarmableSocket = function(id) {
    //return false if unit has no Sockets
    var unit = window.units[id];
    if (unit.slots<1 || !unit.families)
        return false;

    for (let family of unit.families) {
        let unitIds = Utils.getUnitsInFamily(family);
        if (unitIds && unitIds.some(id => CharUtils.isFarmable(id))) {
            return true;
        }
    };

    return false;
}

CharUtils.getFilteredUnitIds = function () {
    // don't rely on internal row index, as some units are not in the table,
    // messing up the id numbers of later units
    var result = window.charTable.DataTable().rows({"filter":"applied"}).data().map(x => Number(x[0]));
    return result;
}

/******************
 * Initialization *
 ******************/

window.CharUtils = CharUtils;

})();
