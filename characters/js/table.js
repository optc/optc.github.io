(function() {

angular.module('optc') .run(function($rootScope, $timeout, $storage, MATCHER_IDS) {

    /**************
     * Table data *
     **************/

    var additionalColumns = $storage.get('charColumns', [ ]);

    var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
    var table = null;

    var addImage = function(data, type, row, meta) {
        return '<img class="slot small" data-original="' + Utils.getThumbnailUrl(row[0]) + '"> ' +
            //return '<img class="slot small" data-original="' + Utils.getGlobalThumbnailUrl(row[0]) + '" onerror="this.onerror=null;this.src=\'' + Utils.getThumbnailUrl(row[0]) + '\';"> ' +
            '<a ui-sref="main.search.view({ id: ' + parseInt(row[0],10) + '})">' + data + '</a>';
    };

    var fuse = new Fuse(window.units, {
        keys: [ 'name' ],
        id: 'number',
        threshold: 0.3,
        distance: 200
    });

    var fused = null;

    var tableData = null;
    var farmableLocations = null;

    var log = $storage.get('characterLog', [ ]);
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
                .replace(/Minimum Limit Break cooldown/,'Min LB CD')
                .replace(/Initial cooldown/,'Init. CD')
                .replace(/Initial Limit Break cooldown/,'Init. LB CD')
                .replace(/MAX EXP/,'MAX EXP');
            result.splice(result.length-1, 0, { title: title, type: 'num-string' });
        });
        return result;
    };

    /*******************
     * Table filtering *
     *******************/

    var tableFilter = function(settings, data, index) {
        if (!tableData.parameters) return true;
        var id = parseInt(data[0],10), unit = window.units[id - 1];
        var flags = window.flags[unit.number + 1] || { };
        var farmableSocket = CharUtils.hasFarmableSocket(unit.number);
        
        /* * * * * Query filters * * * * */
        // filter by matchers
        for (var matcher in tableData.parameters.matchers) {
            if (!tableData.parameters.matchers[matcher].test(unit[matcher]))
                return false;
        }
        // filter by ranges
        for (var range in tableData.parameters.ranges) {
            var stat, range_ = range.toLowerCase();
            if (range == 'id')
                stat = unit.number + 1;
            else if (range_ == 'mincd' || range_ == 'maxcd') {
                stat = window.cooldowns[unit.number];
                if (stat) stat = stat[range_ == 'mincd' ? 0 : 1];
            } else
                stat = unit[range] || unit[range.toLowerCase()] || unit['max' + range.toUpperCase()];
            if (stat === null || stat === undefined ||
                    stat < tableData.parameters.ranges[range][0] || stat > tableData.parameters.ranges[range][1])
                return false;
        }
        // filter by query
        if (tableData.parameters.query) {
            var name = Utils.getFullUnitName(id);
            if (!tableData.fuzzy && !tableData.parameters.query.test(name)) return false;
            if (tableData.fuzzy) {
                if (fused === null) fused = fuse.search(tableData.parameters.query.source || 'xyz');
                if (fused.indexOf(id - 1) == -1) return false;
            }
        }
        /* * * * * Sidebar filters * * * * */
        if (!tableData.parameters.filters) return true;
        var filters = tableData.parameters.filters;
        // filter by type
        //if (filters.type && unit.type !== filters.type) return false;
        if (filters.type){
            if (!Array.isArray(unit.type)) if (unit.type !== filters.type) return false;
            if (Array.isArray(unit.type)) if ((unit.type[0] !== filters.type) && (unit.type[1] !== filters.type)) return false;
        }
        // filter by class
        if (filters.classes && filters.classes.length) {
            var singleQuery = filters.classes.length == 1, singleClass = unit.class.length > 2;
            if (!singleQuery && singleClass) return false;
            else if (singleQuery && singleClass && filters.classes[0] != unit.class) return false;
            else if (singleQuery && !singleClass && filters.classes.indexOf(unit.class[0]) == -1 &&
                    filters.classes.indexOf(unit.class[1]) == -1) return false;
            else if (!singleQuery && !singleClass && (filters.classes.indexOf(unit.class[0]) == -1 ||
                        filters.classes.indexOf(unit.class[1]) == -1)) return false;
        }
        // filter by stars
        if (filters.stars && filters.stars.length && filters.stars.indexOf(unit.stars) == -1) return false;
        // filter by cost
        if (filters.costEnabled && (unit.cost < filters.cost[0] || unit.cost > filters.cost[1])) return false;
        // filter by drop
        if (filters.drop) {
            var isFarmable = CharUtils.isFarmable(id);
            if (filters.drop == 'Farmable') {
                if (id == 1 || !isFarmable) return false;
                if (farmableLocations !== null) {
                    var farmable = CharUtils.checkFarmable(id, farmableLocations);
                    if (!farmable) return false;
                }
            } else if (filters.drop != 'Farmable') {
                if (id != 1 && isFarmable) return false; 
                if (filters.nonFarmable) {
                    // RR
                    if (filters.nonFarmable.rro && !flags.rro) return false;
                    if (filters.nonFarmable.rro === false && flags.rro) return false;
                    // limited RR
                    if (filters.nonFarmable.lrr && !flags.lrr) return false;
                    if (filters.nonFarmable.lrr === false && flags.lrr) return false;
                    // promo
                    if (filters.nonFarmable.promo && !flags.promo) return false;
                    if (filters.nonFarmable.promo === false && flags.promo) return false;
                    // special
                    if (filters.nonFarmable.special && !flags.special) return false;
                    if (filters.nonFarmable.special === false && flags.special) return false;
                    // rayleigh shop
                    if (filters.nonFarmable.shop && !flags.shop) return false;
                    if (filters.nonFarmable.shop === false && flags.shop) return false;
                    // TM RR
                    if (filters.nonFarmable.tmlrr && !flags.tmlrr) return false;
                    if (filters.nonFarmable.tmlrr === false && flags.tmlrr) return false;
                }
            }
        }
        // exclusion filters
        if (filters.noBase && (evolutions[id] && evolutions[id].evolution)) return false;
        if (filters.noEvos && Utils.isEvolverBooster(unit)) return false;
        if (filters.globalTM && [ 1968, 2010, 2011, 2008, 2009, 918, 1387, 1388, 1389, 1446, 1447, 1448, 1549 ,1550, 1551, 1624, 1970, 1972, 1985, 2000, 2007, 2503, 943, 991, 1175, 1536, 1540, 1577, 1579, 1654, 1665, 1873, 1877, 1906, 1908, 1953, 1955, 1957, 1974, 1987, 1989, 1991, 1993, 1804, 1806, 1849, 1851, 1885, 1887, 1937, 1939, 1222, 1628, 1863, 1976, 1978, 654, 1432, 2015, 1469, 1774, 1918, 1920, 1965, 1966, 1980, 1982, 1808, 1853, 1889, 1916, 1941, 1023, 1245, 1247, 1709, 1711, 1983, 2504 ].indexOf(id) == -1) return false;
        if (filters.japanTM && [ 2207, 2209, 2181, 2201, 2191, 2203, 2205, 2213, 2148, 2175, 2177, 2183, 2185, 2187, 2189, 2193, 2197, 1593, 1985, 2074, 2099, 2113, 1682, 1684, 1686, 1688, 1753, 1755, 1757, 1759, 1761, 575, 603, 1108, 1696, 1879, 2070, 2097, 1141, 1143, 1899, 2163, 713, 797, 946, 1072, 1095, 1097, 1138, 1215, 1254, 1384, 1397, 1469, 1995, 2046, 2087, 2091, 2144, 1504, 2126, 2137, 2215, 2217 ].indexOf(id) == -1) return false;
        if (filters.noFodder && Utils.isFodder(unit)) return false;
        if (filters.noFortnights && flags.fnonly) return false;
        if (filters.noRaids && flags.raid) return false;
        if (filters.noSpecials && (flags.lrr || flags.promo || flags.special || flags.shop )) return false;
        // filter by server
        if (filters.server) {
            if (filters.server == 'Global units' && !flags.global) return false;
            if (filters.server !== 'Global units' && flags.global) return false;
        }
        // filter by rr pool
        if ((filters.rr === 'Not in RR pool' && flags.rr) || (filters.rr === 'In RR pool' && !flags.rr)) return false;
        //filter by farmable Sockets
        if ((filters.socket === 'No Farmable Sockets' && farmableSocket) || (filters.socket === 'Farmable Sockets' && !farmableSocket)) return false;
        // filter by active matchers
        if (filters.custom.length > 0 && !window.details.hasOwnProperty(id)) return false;
        for (var i=0;i<filters.custom.length;++i) {
            if (!CharUtils.checkMatcher(filters.custom[i], id))
                return false;
        }
        // filter by character log
        if (filters.noLog && characterLog.hasOwnProperty(id)) return false;
        if (filters.noMissing && !characterLog.hasOwnProperty(id)) return false;
        // filter by orb controllers
        if ($rootScope.filters.custom[MATCHER_IDS['special.OrbControllers']] &&
                (tableData.parameters.filters.ctrlFrom || tableData.parameters.filters.ctrlTo)) {
            var orbData = CharUtils.getOrbControllerData(id);
            if (!orbData) return false;
            var from = tableData.parameters.filters.ctrlFrom || [ ], to = tableData.parameters.filters.ctrlTo || [ ];
            var mismatch = true;
            if (from.length && !to.length)
                mismatch = from.some(function(x) { return !orbData.from.hasOwnProperty(x); });
            else if (!from.length && to.length)
                mismatch = to.some(function(x) { return !orbData.to.hasOwnProperty(x); });
            else {
                mismatch = from.some(function(f) {
                    return to.some(function(t) { return !orbData.map[f] || !orbData.map[f].hasOwnProperty(t); });
                });
            }
            if (mismatch) return false;
        }
        // filter by class-filters  
        if ($rootScope.filters.custom[MATCHER_IDS['captain.ClassBoostingCaptains']] && filters.classCaptain &&
                !CharUtils.isClassBooster('captain', id, filters.classCaptain)) return false;
        if ($rootScope.filters.custom[MATCHER_IDS['special.ClassBoostingSpecials']] && filters.classSpecial &&
                !CharUtils.isClassBooster('special', id, filters.classSpecial)) return false;
        if ($rootScope.filters.custom[MATCHER_IDS['sailor.ClassBoostingSailors']] && filters.classSailor &&
                !CharUtils.isClassBooster('sailor', id, filters.classSailor)) return false;
        return true;
    };

    /*****************
     * Table sorting *
     *****************/

    jQuery.fn.dataTable.ext.type.order['num-string-asc'] = function(x,y) {
        if (x && x.constructor == String) x = (x == 'Unknown' ? 100 : 101);
        if (y && y.constructor == String) y = (y == 'Unknown' ? 100 : 101);
        return x - y;
    };

    jQuery.fn.dataTable.ext.type.order['num-string-desc'] = function(x,y) {
        if (x && x.constructor == String) x = (x == 'Unknown' ? -100 : -101);
        if (y && y.constructor == String) y = (y == 'Unknown' ? -100 : -101);
        return y - x;
    };

    /***********************
     * Table configuration *
     ***********************/

    var data = window.units.filter(function(x) { return x.name && !x.name.includes("Limit Break") && !x.name.includes("Dual Unit"); }).map(function(x,n) {
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
            if (c == 'HP/ATK') temp = Math.round(x.maxHP / x.maxATK * 100) / 100;
            else if (c == 'HP/RCV') temp = Math.round(x.maxHP / x.maxRCV * 100) / 100;
            else if (c == 'ATK/RCV') temp = Math.round(x.maxATK / x.maxRCV * 100) / 100;
            else if (c == 'ATK/CMB') temp = Math.round(x.maxATK / x.combo * 100) / 100;
            else if (c == 'ATK/cost') temp = Math.round(x.maxATK / x.cost * 100) / 100;
            else if (c == 'HP/cost') temp = Math.round(x.maxHP / x.cost * 100) / 100;
            else if (c == 'CMB') temp = x.combo;
            else if (c == 'MAX EXP') temp = x.maxEXP;
            else if (c == 'Limit Break HP') temp = x.limitHP;
            else if (c == 'Limit Break ATK') temp = x.limitATK;
            else if (c == 'Limit Break RCV') temp = x.limitRCV;
            else if (c == 'Limit Break Slots') temp = x.limitSlot;
            else if (c == 'Minimum cooldown' || c == 'Initial cooldown') { 
                var d = cooldowns[x.number];
                if (!d) temp = 'N/A';
                else if (c == 'Minimum cooldown' && d.constructor == Array) temp = d[1];
                else if (c == 'Initial cooldown') temp = (d.constructor == Array ? d[0] : d);
                else temp = 'Unknown';
            }
            else if (c == 'Minimum Limit Break cooldown' || c == 'Initial Limit Break cooldown') { 
                var d = cooldowns[x.number];
                if (!d) temp = 'N/A';
                else if (c == 'Minimum Limit Break cooldown' && d.constructor == Array) temp = (d[1] - x.limitCD);
                else if (c == 'Initial Limit Break cooldown') temp = (d.constructor == Array ? (d[0] - x.limitCD) : (d - x.limitCD));
                else temp = 'Unknown';
            }
            if (temp && temp.constructor != String && !isNaN(temp) && !isFinite(temp)) temp = '&#8734;';
            if (temp && temp.constructor != String && isNaN(temp)) temp = 0;
            result.splice(result.length-2, 0, temp);
        });
        return result;
    });

    tableData = {
        columns: getTableColumns(),
        additional: additionalColumns.length,
        data: data,
        parameters: null,
        fuzzy: $storage.get('fuzzy', false),
        regexes: { },
    };

    $rootScope.table = tableData;

    $rootScope.characterLog = characterLog;
    $rootScope.showLogFilters = log.length > 0;

    $timeout(function() {
        jQuery.fn.dataTable.ext.search.push(tableFilter);
        var types = { story: 'Story Island', fortnight: 'Fortnight', raid: 'Raid', Coliseum: 'Coliseum', Treasure: 'Treasure Map' };
        $rootScope.$watch('table',function(table) {
            tableData = table;
            if (table.parameters && table.parameters.filters && table.parameters.filters.farmable) {
                var filters = table.parameters.filters.farmable;
                farmableLocations = { };
                for (var key in types) {
                    if (filters.hasOwnProperty(key) && filters[key] !== null)
                        farmableLocations[types[key]] = filters[key];
                }
                if (Object.keys(farmableLocations).length === 0)
                    farmableLocations = null;
            } else farmableLocations = null;
            if (table.refresh) table.refresh();
        },true);
    });

    $rootScope.$on('table.refresh',function() { 
        fused = null;
        /*var types = {
        'STR' : '<span class="cell-STR">STR</span>',
        'DEX' : '<span class="cell-DEX">DEX</span>',
        'QCK' : '<span class="cell-QCK">QCK</span>',
        'PSY' : '<span class="cell-PSY">PSY</span>',
        'INT' : '<span class="cell-INT">INT</span>'};
        $.each(types,function(i,type1){
            $.each(types,function(j,type2){
            if(i == j) return;
            $('.cell-'+i+'\\/'+j).html(type1 +'/'+type2);
          });
        });*/
    });

    $rootScope.checkLog = function() {
        var temp = [ ];
        for (var key in $rootScope.characterLog) {
            if ($rootScope.characterLog[key])
                temp.push(parseInt(key,10));
        }
        temp.sort(function(a,b) { return a-b; });
        $storage.set('characterLog', temp);
        $rootScope.showLogFilters = temp.length > 0;
    };

});

})();
