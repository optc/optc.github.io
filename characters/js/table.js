(function() {

/**************
 * Table data *
 **************/

var additionalColumns = JSON.parse(localStorage.getItem('charColumns')) || [ ];

var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
var table = null;

var addImage = function(data, type, row, meta) {
    return '<img class="slot small" data-original="' + Utils.getThumbnailUrl(row[0]) + '"> ' +
        '<a ui-sref="main.view({ id: ' + parseInt(row[0],10) + '})">' + data + '</a>';
};

var fuse = new Fuse(window.units, { keys: [ 'name' ], id: 'number' });
var fuzzy = JSON.parse(localStorage.getItem('fuzzy')) || false;

var tableData = null;

var log = JSON.parse(localStorage.getItem('characterLog')) || [ ];
var characterLog = { };
for (var i=0;i<log.length;++i) characterLog[log[i]] = true;

/*******************
 * Table functions *
 *******************/

var getTableColumns = function() {
    var result = [
        { title: 'ID' },
        { title: 'Name', render: addImage },
        { title: 'Type' },
        { title: 'Class' },
        { title: 'HP' },
        { title: 'ATK' },
        { title: 'RCV' },
        { title: 'Cost' },
        { title: 'Slots' },
        { title: 'Stars' },
        { title: 'CL', orderable: false }
    ];
    additionalColumns.forEach(function(x) {
        var title = x
            .replace(/Minimum cooldown/,'Min CD')
            .replace(/Initial cooldown/,'Max CD');
        result.splice(result.length-1, 0, { title: title, type: 'numeric' });
    });
    return result;
};

/*******************
 * Table filtering *
 *******************/

$.fn.dataTable.ext.search.push(function(settings, data, index) {
    if (!tableData.parameters) return true;
    var id = parseInt(data[0],10), unit = window.units[id - 1];
    var flags = details[unit.number + 1].flags || { };
    /* * * * * Query filters * * * * */
    // filter by matchers
    for (var matcher in tableData.parameters.matchers) {
        if (!tableData.parameters.matchers[matcher].test(unit[matcher]))
            return false;
    }
    // filter by ranges
    for (var range in tableData.parameters.ranges) {
        var stat;
        if (range == 'id') stat = unit.number + 1;
        else stat = unit.hasOwnProperty(range.toLowerCase()) ? unit[range.toLowerCase()] : unit['max' + range.toUpperCase()];
        if (stat < tableData.parameters.ranges[range][0] || stat > tableData.parameters.ranges[range][1])
            return false;
    }
    // filter by query
    if (tableData.parameters.query) {
        if (!fuzzy && !tableData.parameters.query.test(unit.name)) return false;
        if (fuzzy && !(new Fuse([ unit ], { keys: [ 'name' ], threshold: 0.3 })).search(tableData.parameters.query.source).length)
            return false;
    }
    /* * * * * Sidebar filters * * * * */
    if (!tableData.parameters.filters) return true;
    var filters = tableData.parameters.filters;
    // filter by type
    if (filters.type && unit.type !== filters.type) return false;
    // filter by class
    if (filters.class && !filters.class.test(unit.class)) return false;
    // filter by drop
    if (filters.drop) {
        var isFarmable = CharUtils.isFarmable(id);
        if (filters.drop == 'Farmable') {
            if (id == 1 || unit.stars >= 3 && !isFarmable) return false;    
            if (filters.farmable) {
                // both & neither
                if (filters.farmable.raid && filters.farmable.fortnight) {
                    if (!CharUtils.isOnlyFarmable(id, 'Fortnight', 'Raid'))
                        return false;
                } else if (filters.farmable.raid === false && filters.farmable.fortnight === false) {
                    if (CharUtils.isOnlyFarmable(id, 'Fortnight') || CharUtils.isOnlyFarmable(id, 'Raid') ||
                            CharUtils.isOnlyFarmable(id, 'Raid', 'Fortnight'))
                        return false;
                } else {
                    // raid
                    if (filters.farmable.raid && !CharUtils.isOnlyFarmable(id, 'Raid')) return false;
                    if (filters.farmable.raid === false && CharUtils.isOnlyFarmable(id, 'Raid')) return false;
                    // fortnight
                    if (filters.farmable.fortnight && !CharUtils.isOnlyFarmable(id, 'Fortnight')) return false;
                    if (filters.farmable.fortnight === false && CharUtils.isOnlyFarmable(id, 'Fortnight')) return false;
                }
            }
        } else if (filters.drop != 'Farmable') {
            if (id != 1 && (unit.stars < 3 || isFarmable)) return false; 
            if (filters.nonFarmable) {
                // RR
                if (filters.nonFarmable.rr && !flags.rr) return false;
                if (filters.nonFarmable.rr === false && flags.rr) return false;
                // limited RR
                if (filters.nonFarmable.lrr && !flags.lrr) return false;
                if (filters.nonFarmable.lrr === false && flags.lrr) return false;
                // promo
                if (filters.nonFarmable.promo && !flags.promo) return false;
                if (filters.nonFarmable.promo === false && flags.promo) return false;
                // special
                if (filters.nonFarmable.special && !flags.special) return false;
                if (filters.nonFarmable.special === false && flags.special) return false;
            }
        }
    }
    // exclusion filters
    if (filters.noBase && details[id].evolution) return false;
    if (filters.noEvos && Utils.isEvolverBooster(unit)) return false;
    if (filters.noFodder && Utils.isFodder(unit)) return false;
    if (filters.noFortnights && flags.fnonly) return false;
    if (filters.noRaids && flags.raid) return false;
    if (filters.noSpecials && (flags.lrr || flags.promo || flags.special)) return false;
    // filter by server
    if (filters.server) {
        if (filters.server == 'Global only' && !flags.global) return false;
        if (filters.server !== 'Global only' && flags.global) return false;
    }
    // filter by active matchers
    if (filters.custom.length > 0 && !window.details.hasOwnProperty(id)) return false;
    for (var i=0;i<filters.custom.length;++i) {
        var target = window.details[id][filters.custom[i].target], m = filters.custom[i];
        if (!target) return false;
        if (!(m.include && m.include.indexOf(id) != -1) && !m.matcher.test(target)) return false;
    }
    // filter by character log
    if (filters.noLog && characterLog.hasOwnProperty(id)) return false;
    if (filters.noMissing && !characterLog.hasOwnProperty(id)) return false;
    // filter by orb controllers
    if (tableData.regexes.ctrlFrom || tableData.regexes.ctrlTo) {
        if (id == 515 || id == 516) return false; // exclude Heracles
        var temp = window.details[id].special.replace(/\],/g,']');
        if (tableData.regexes.ctrlFrom && tableData.regexes.ctrlFrom.some(function(x) { return !x.test(temp); }))
            return false;
        if (tableData.regexes.ctrlTo && tableData.regexes.ctrlTo.some(function(x) { return !x.test(temp); }))
            return false;
    }
    // end
    return true;
});

/***********************
 * Table configuration *
 ***********************/

angular.module('optc') .run(function($rootScope) {

    var data = window.units.filter(function(x) { return x.name; }).map(function(x,n) {
        var result = [
            ('000' + (x.number+1)).slice(-padding),
            x.name,
            x.type,
            x.class.constructor == Array ? x.class.join(', ') : x.class,
            x.maxHP,
            x.maxATK,
            x.maxRCV,
            x.cost,
            x.slots,
            x.stars,
            '',
            x.number
        ];
        additionalColumns.forEach(function(c,n) {
            var temp = 0;
            if (c == 'ATK/HP') temp = Math.round(x.maxATK / x.maxHP * 100) / 100;
            else if (c == 'RCV/HP') temp = Math.round(x.maxRCV / x.maxHP * 100) / 100;
            else if (c == 'RCV/ATK') temp = Math.round(x.maxRCV / x.maxATK * 100) / 100;
            else if (c == 'ATK/CMB') temp = Math.round(x.maxATK / x.combo * 100) / 100;
            else if (c == 'ATK/cost') temp = Math.round(x.maxATK / x.cost * 100) / 100;
            else if (c == 'CMB') temp = x.combo;
            else if (c == 'Minimum cooldown' || c == 'Initial cooldown') { 
                var d = details[x.number + 1];
                if (!d.hasOwnProperty('special')) temp = 'N/A';
                else if (!d.hasOwnProperty('cooldown')) temp = 'Unknown';
                else if (c == 'Minimum cooldown' && d.cooldown.constructor == Array) temp = d.cooldown[1];
                else if (c == 'Initial cooldown') temp = (d.cooldown.constructor == Array ? d.cooldown[0] : d.cooldown);
                else temp = 'Unknown';
            }
            if (temp.constructor != String && isNaN(temp)) temp = 0;
            result.splice(result.length-2, 0, temp);
        });
        return result;
    });

    tableData = {
        columns: getTableColumns(),
        additional: additionalColumns.length,
        data: data,
        parameters: null,
        fuzzy: fuzzy,
        regexes: { }
    };

    $rootScope.table = tableData;

    $rootScope.characterLog = characterLog;
    $rootScope.showLogFilters = log.length > 0;

    $rootScope.$watch('table',function(table) {
        tableData = table;
        if (table.refresh) table.refresh();
    },true);

    $rootScope.checkLog = function() {
        var temp = [ ];
        for (var key in $scope.characterLog) {
            if ($scope.characterLog[key])
                temp.push(parseInt(key,10));
        }
        temp.sort(function(a,b) { return a-b; });
        localStorage.setItem('characterLog',JSON.stringify(temp));
        $rootScope.showLogFilters = temp.length > 0;
    };

});

})();
