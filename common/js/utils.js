(function() {

var FODDER_REGEX = new RegExp('(' + [
    'Group', 'Ensign Navy HQ', 'Armed \\w+ Unit', '[BM]illions Baroque', 'Eneru\'s Elect',
    'Skypiea (Guard|Enforcer)', 'Shandian',
    '(Seaman|Major|Corporal) Navy', 'Hoodlum.+Bounty Hunter', 'Black Cat Pirates',
    'Arlong crewmember', 'Gunner|Cannoneer|Assassin Master', 'Giant.*Pirates',
    '(Soldier|General) Zombie.*Shadow', 'Wild Zombie'
].join(')|(') + ')','i');

var utils = { };

var fullNames = null, reverseEvoMap = null;

/* * * * * Unit control * * * * */

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[15] && element[15].constructor != Array) element[15] = [ element[15], element[15], element[15] ];
    var result = {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , combo    : element[5]  ,
        slots   : element[6]  , maxLevel : element[7]  ,
        maxEXP  : element[8]  , minHP    : element[9]  ,
        minATK  : element[10] , minRCV   : element[11] ,
        maxHP   : element[12] , maxATK   : element[13] ,
        maxRCV  : element[14] , growth   : {
            hp  : element[15] ? element[15][0] : 0,
            atk : element[15] ? element[15][1] : 0,
            rcv : element[15] ? element[15][2] : 0
        },
        number: n
    };
    if (element.indexOf(null) != -1) result.incomplete = true;
    if (result.combo === null || result.combo === 0) result.preview = true;
    return result;
};

utils.parseUnits = function(skipIncomplete) {
    if (skipIncomplete) {
        window.units = window.units.map(function(x,n) {
            if (x.indexOf(null) == -1) return x;
            var viable = x[9] && x[10] && x[11] && x[12] && x[13] && x[14];
            return viable ? x : [ ];

        });
    }
    window.units = window.units.map(parseUnit);
};

utils.getFullUnitName = function(id) {
    if (fullNames === null) {
        fullNames = units.map(function(x,n) {
            if (!x.name) return null;
            return x.name + (window.aliases[n + 1] ? ' ' + window.aliases[n + 1].join(', ') : '');
        });
    }
    return fullNames[id - 1];
};

/* * * * * Thumbnail control * * * * */

utils.getThumbnailUrl = function(n) {
    if (n === null || n === undefined || (window.units && window.units[n-1].incomplete))
        return 'http://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
    var id = ('0000' + n).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    if(id=='0742')
        return 'http://onepiece-treasurecruise.com/wp-content/uploads/f0742-2.png';
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

utils.getBigThumbnailUrl = function(n) {
    if (window.units[n-1].incomplete)
        return 'http://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
    var id = ('0000' + n).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';
};

utils.getThumbnailTitle = function(arg) {
    if (arg === null || arg === undefined) return null;
    if (arg.constructor == Object) {
        return [ arg.name, 'HP: ' + arg.hp, 'ATK: ' + arg.atk, 'RCV: ' + arg.rcv, 'CMB: ' + arg.cmb ].join('\n');
    }
    var unit = (arg.constructor == Object ? arg : units[arg]);
    return [ unit.name, 'HP: ' + unit.maxHP, 'ATK: ' + unit.maxATK, 'RCV: ' + unit.maxRCV, 'CMB: ' + unit.combo, 'Cost: ' + unit.cost ].join('\n');
};

utils.isClickOnOrb = function(e,target) {
    var x = e.offsetX, y = e.offsetY;
    var distance = Math.sqrt(Math.pow(x-20,2)+Math.pow(y-21,2));
    return distance < 13;
};

/* * * * * Misc functions * * * * */

/* given an array of arrays, generates the cartesian product of
 * all the arrays contained within the root array
 * eg f([[1],[2,3],[4,5,6]]) -> [[1,2,4],[1,2,5],[1,2,6],[1,3,4],[1,3,5],[1,3,6]] */
utils.arrayProduct = function(data) {
    var result = data.reduce(function(prev,next) {
        if (next.length === 0) return prev;
        return next.map(function(n) {
            return prev.map(function(p) {
                return p.concat([ n ]);
            });
        }).reduce(function(prev,next) { return prev.concat(next); },[ ]);
    },[ [ ] ]);
    return result.filter(function(r) { return r.length > 0; });
};

utils.getOppositeType = function(type) {
    if (!type) return null;
    type = type.toUpperCase();
    if (type == 'STR') return 'QCK';
    if (type == 'QCK') return 'DEX';
    if (type == 'DEX') return 'STR';
    if (type == 'PSY') return 'INT';
    return 'PSY';
};

/* * * * * Searching/filtering * * * * */

utils.getRegex = function(query) {
    try { return new RegExp(query,'i'); }
    catch (e) { return new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'i'); }
};

utils.generateSearchParameters = function(query) {
    if (!query || query.trim().length < 2) return null;
    query = query.toLowerCase().trim();
    var result = { matchers: { }, ranges: { }, query: [ ] };
    var ranges = { }, params = [ 'hp', 'atk', 'stars', 'cost', 'growth', 'rcv', 'id', 'slots', 'combo', 'exp', 'minCD', 'maxCD' ];
    var regex = new RegExp('^((type|class):(\\w+)|(' + params.join('|') + ')(>|<|>=|<=|=)([\\d.]+))$', 'i');
    var tokens = query.replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0; });
    tokens.forEach(function(x) {
        var temp = x.match(regex);
        if (!temp) // if it couldn't be parsed, treat it as string
            result.query.push(x);
        else if (temp[4] !== undefined) { // numeric operator
            var left = temp[4], op = temp[5], right = parseFloat(temp[6],10);
            if (left == 'exp') left = 'maxEXP';
            if (!result.ranges.hasOwnProperty(left)) result.ranges[left] = [ 0, Infinity ];
            if (op == '=') {
                result.ranges[left][0] = right;
                result.ranges[left][1] = right;
            }
            else if (op == '<')  result.ranges[left][1] = Math.min(result.ranges[left][1],right-1);
            else if (op == '<=') result.ranges[left][1] = Math.min(result.ranges[left][1],right);
            else if (op == '>')  result.ranges[left][0] = Math.max(result.ranges[left][0],right+1);
            else if (op == '>=') result.ranges[left][0] = Math.max(result.ranges[left][0],right);
        } else // matcher
            result.matchers[temp[2]] = new RegExp(temp[3],'i');
    });
    if (result.query.length > 0) result.query = utils.getRegex(result.query.join(' '));
    else result.query = null;
    return result;
};

utils.isFodder = function(unit) {
    return (unit.stars < 2 && !utils.isEvolverBooster(unit)) || FODDER_REGEX.test(unit.name);
};

utils.isEvolverBooster = function(unit) {
    return /Evolver|Booster/i.test(unit.class);
};

utils.searchBaseForms = function(id) {
    if (!reverseEvoMap) generateReverseEvoMap();
    if (!reverseEvoMap[id]) return null;
    return reverseEvoMap[id];
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

/* * * * * Body * * * * */

window.Utils = utils;

})();
