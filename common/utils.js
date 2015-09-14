(function() {

var FODDER_REGEX = new RegExp('(' + [
    'Group', 'Ensign Navy HQ', 'Armed \\w+ Unit', '[BM]illions Baroque', 'Assault Squad',
    '(Seaman|Major|Corporal) Navy', 'Hoodlum.+Bounty Hunter', 'Black Cat Pirates',
    'Arlong crewmember', 'Gunner|Cannoneer|Assassin Master', 'Giant.*Pirates'
].join(')|(') + ')','i');

var utils = { };

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

/* * * * * Thumbnail control * * * * */

utils.getThumbnailUrl = function(n) {
    if (n === null || (window.units && window.units[n-1].incomplete))
        return 'http://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
    var id = ('0000' + n).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
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

utils.generateSearchParameters = function(query) {
    if (!query || query.trim().length < 3) return null;
    query = query.toLowerCase();
    var result = { matchers: { }, ranges: { }, query: [ ] };
    var ranges = { }, params = [ 'hp', 'atk', 'stars', 'cost', 'growth', 'rcv', 'id', 'slots' ];
    var regex = new RegExp('^((type|class):(\\w+)|(' + params.join('|') + ')(>|<|>=|<=|=)([\\d.]+))$');
    var tokens = query.trim().replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0; });
    tokens.forEach(function(x) {
        var temp = x.match(regex);
        if (!temp) // if it couldn't be parsed, treat it as string
            result.query.push(x);
        else if (temp[4] !== undefined) { // numeric operator
            var left = temp[4], op = temp[5], right = parseFloat(temp[6],10);
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
    result.query = result.query.length === 0 ? null : new RegExp(result.query.join(' '),'i');
    return result;
};

utils.isFodder = function(unit) {
    return (unit.stars < 2 && !utils.isEvolverBooster(unit)) || FODDER_REGEX.test(unit.name);
};

utils.isEvolverBooster = function(unit) {
    return /Evolver|Booster/i.test(unit.class);
};

/* * * * * Body * * * * */

window.Utils = utils;

})();
