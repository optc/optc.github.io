(function() {

var utils = { };

/* * * * * Unit control * * * * */

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[14] && element[14].constructor != Array) element[14] = [ element[14], element[14], element[14] ];
    var result = {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        maxEXP  : element[13] , growth   : {
            hp  : element[14] ? element[14][0] : 0,
            atk : element[14] ? element[14][1] : 0,
            rcv : element[14] ? element[14][2] : 0
        }
    };
    if (element.indexOf(null) != -1) result.incomplete = true;
    return result;
};

utils.parseUnits = function(skipIncomplete) {
    if (skipIncomplete)
        window.units = window.units.map(function(x) { return x.indexOf(null) != -1 ? [ ] : x; });
    window.units = window.units.map(parseUnit);
};

/* * * * * Thumbnail control * * * * */

utils.getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

utils.getBigThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
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
    var x = e.pageX - target.offsetParent.offsetLeft, y = e.pageY - target.offsetParent.offsetTop;
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

/* * * * * Searching * * * * */

utils.generateSearchParameters = function(query) {
    if (!query || query.trim().length < 3) return null;
    query = query.toLowerCase();
    var result = { matchers: { }, ranges: { }, query: [ ] };
    var ranges = { }, params = [ 'hp', 'atk', 'stars', 'cost', 'growth', 'rcv', 'id' ];
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
    result.query = new RegExp(result.query.join(' '),'i');
    return result;
};

/* * * * * Body * * * * */

window.Utils = utils;

})();
