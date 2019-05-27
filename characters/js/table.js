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
        if (filters.types && filters.types.length){
            if (!Array.isArray(unit.type)) if (!filters.types.includes(unit.type)) return false;
            if (Array.isArray(unit.type)) if ((!filters.types.includes(unit.type[0])) && (!filters.types.includes(unit.type[1]))) return false;
        }
        // filter by class
        if(!Array.isArray(unit.class) && filters.noSingleClass) return false;
        if (filters.classes && filters.classes.length) {
            var inclusive = !filters.classInclusive;
            var singleQuery = filters.classes.length == 1, singleClass = !Array.isArray(unit.class), doubleClass = Array.isArray(unit.class) && unit.class.length == 2, dualCharacter = Array.isArray(unit.class) && unit.class.length == 3;
            if(!inclusive){
                if (singleClass){
                    if(singleQuery) if(filters.classes[0] != unit.class) return false;
                    if(!singleQuery) if(!filters.classes.includes(unit.class)) return false;
                }
                else if(doubleClass){
                    if(singleQuery) return false;
                    if(!singleQuery) if(!filters.classes.includes(unit.class[0]) || !filters.classes.includes(unit.class[1])) return false;
                }
                else{
                    if(singleQuery) return false;
                    if(!singleQuery){
                        if((!filters.classes.includes(unit.class[0][0]) || !filters.classes.includes(unit.class[0][1]))
                          && (!filters.classes.includes(unit.class[1][0]) || !filters.classes.includes(unit.class[1][1]))
                          && (!filters.classes.includes(unit.class[2][0]) || !filters.classes.includes(unit.class[2][1]))) return false;
                    }
                }
            }
            else{
                if (singleClass) if(!filters.classes.includes(unit.class)) return false;
                if (doubleClass) if(!filters.classes.includes(unit.class[0]) && !filters.classes.includes(unit.class[1])) return false;
                if (dualCharacter) {
                    var uclasses = [];
                    for(i = 0; i < unit.class.length; i++) { uclasses.push(unit.class[i][0]); uclasses.push(unit.class[i][1]); }
                    var temp = false;
                    for(i = 0; i < uclasses.length; i++) if(temp || filters.classes.includes(uclasses[i])) temp = true;
                    if(!temp) return false;
                }
            }
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
        //console.log(window.details[id] ? "limit" in window.details[id] ? id : "no" : "no details");
        if (filters.noLB && window.details[id]) if("limit" in window.details[id]) return false;
        if (filters.noSupport && window.details[id]) if("support" in window.details[id]) return false;
        if (filters.globalTM && [ 2330, 1514, 1467, 2296, 2332, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551, 2302, 2329, 2287, 2304, 2306, 2308, 2310, 2334, 2295, 2297, 2299, 2336, 2099, 2113, 2201, 2236, 2245, 2251, 2265, 2300, 2500, 1466, 1513, 2325, 2331, 2333, 2169, 2207, 2256, 2257, 2259, 516, 518, 865, 1432, 1696, 1830, 2015, 2097, 2158, 2281, 3340, 3352, 777, 901, 924, 1143, 1220, 1222, 1376, 1401, 1489, 1491, 1555, 1861, 1897, 2111, 2193, 2290, 2323, 722, 724, 761, 762, 763, 764, 765, 766, 767, 768, 769, 852, 1003, 1037, 1039, 1302, 1304, 1607, 1624, 1649, 1650, 1690, 1735, 1737, 1891, 1893, 1947, 1980, 1995, 2044, 2045, 2046, 2294, 2327, 1808, 1853, 1889, 1916, 1941, 1972, 2000, 5012, 5013, 5014, 5015, 2064, 2109, 2137, 2175, 2211, 2261, 2283, 3354, 2321 ].indexOf(id) == -1) return false;
        if (filters.japanTM && [ 2555, 2554, 2553, 2510, 2534, 2536, 2546, 2548, 2475, 2477, 2538, 2540, 2542, 2544, 1924, 2263, 2517, 5070, 5071, 5072, 5073, 2552, 5032, 5033, 5034, 5035, 2529, 2550, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2532, 5078, 5079, 5080, 5081, 1808, 1889, 1972, 2064, 2137, 2299, 2387, 2443, 2469, 5062, 5063, 5064, 5065, 1747, 1985, 5006, 5007, 5010, 5011, 2023, 2025, 2035, 2181, 5018, 5019, 5022, 5023, 2195, 2236, 2251, 2265, 2365, 2418, 5040, 5041, 5042, 5043, 2441, 2446, 5055, 5056, 5057, 2465, 2506, 2507, 2508, 227, 353, 418, 575, 933, 978, 1298, 1518, 2097, 2158, 2197, 2281, 2356, 2398, 2504, 1338, 1553, 1602, 1792, 1828, 1897, 1945, 1978, 2111, 2193, 2290, 2323, 2375, 2416, 2471, 2489, 1581, 1865, 1867, 2019, 2021, 2045, 2046, 2165, 2167, 2177, 2428, 2457, 2557 ].indexOf(id) == -1) return false;
        if (filters.worldClash && [ 253, 1041, 255, 257, 259, 979, 980, 983, 453, 455, 457, 946, 947, 948, 1182, 1528, 1186, 1188, 1190, 1270, 1509, 1510, 1511, 1606, 451, 981, 1184, 1272, 1512, 1607, 1222, 1276, 1278, 1602, 1608, 1700, 1798, 1989, 2037, 1047, 1492, 1972, 447, 1268, 575, 2025, 978, 2034, 1298, 2023, 1380, 2007, 1846, 1416, 1847, 2066, 408, 1927, 1345, 1593, 649, 1251, 1991, 1387, 2401, 2403, 2405 ].indexOf(id) == -1) return false;
        if (filters.swordOrdeal && [ 77, 255, 308, 449, 455, 530, 639, 645, 677, 750, 914, 1033, 1081, 1125, 1129, 1173, 1182, 1186, 1188, 1175, 1230, 1234, 1236, 1238, 1276, 1278, 1322, 1324, 1410, 1436, 1481, 1534, 1536, 1573, 1575, 1577, 1654, 1614, 1796, 1753, 1800, 1759, 1881, 2505, 1873, 1875, 1877, 1921, 1989, 2001, 2242, 2306, 2031, 2034, 2080, 2082, 2332, 2185, 2189, 2117, 2119, 2107, 2336, 2338, 2346, 2372, 2338, 2371, 2418, 2465, 2475, 2477, 2479, 2481, 2483, 2485, 2496, 2498 ].indexOf(id) == -1) return false;
        if (filters.typoClass){
            var allClass = [ "Fighter", "Slasher", "Striker", "Shooter", "Free Spirit", "Powerhouse", "Cerebral", "Driven", "Evolver", "Booster" ];
            if (unit.class.length == 3) if(allClass.indexOf(unit.class[0][0]) != -1 && allClass.indexOf(unit.class[0][1]) != -1 && allClass.indexOf(unit.class[1][0]) != -1 && allClass.indexOf(unit.class[1][1]) != -1 && allClass.indexOf(unit.class[2][0]) != -1 && allClass.indexOf(unit.class[2][1]) != -1) return false;
            if (unit.class.length == 2) if(allClass.indexOf(unit.class[0]) != -1 && allClass.indexOf(unit.class[1]) != -1) return false;
            if(allClass.indexOf(unit.class) != -1) return false;
        }
        if (filters.dualUnits){
            if (unit.type.length == 3) return false;
        }
        if (filters.luffyvkatakuri){
            var evolved = !(id in window.evolutions);
            var character = window.families[unit.number];
            if(character) if(character.length == 2) var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[0]) != -1 || [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[1]) != -1;
            else var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character) != -1;
            if(character) if(character.length == 2) var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[0]) != -1 || [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[1]) != -1;
            else var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character) != -1;
            var criteria = unit.stars >= 4 && unit.maxLevel == 99;
            var specific = [ 2245, 2148, 1815, 2236, 2080, 2076, 2089, 2072, 2093, 2074, 2363, 2382 ].indexOf(id) != -1;
            if (!((matching2 && evolved) || (matching && criteria) || specific)) return false;
        }
        if (filters.doffyBlitz){
            var character = window.families[unit.number];
            var matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", "Sabo", "Dagama", "Jesus Burgess", "Diamante" ].indexOf(character) != -1;
            var Katacount = 0;
            var Kataclass = [ "Slasher", "Striker", "Shooter", "Powerhouse" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) Katacount++;
            if (Katacount !== 2) return false;
            else if (!matching) return false;
        }
        if (filters.katakuri){
            var Katacount = 0; var Katacount1 = 0; var Katacount2 = 0; var Katacount3 = 0;
            var Kataclass = [ "Fighter", "Striker", "Shooter", "Cerebral", "Powerhouse" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else { 
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[0].indexOf(Kataclass[i]) != -1) { Katacount1++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[1].indexOf(Kataclass[i]) != -1) { Katacount2++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) { Katacount3++; }
            }
            if (Katacount !== 2 && Katacount1 !== 2 && Katacount2 !== 2 && Katacount3 !== 2) return false;
        }
        if (filters.katakuriv2){
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Shooter", "Driven", "Powerhouse" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else { 
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[0].indexOf(Kataclass[i]) != -1) { Katacount1++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[1].indexOf(Kataclass[i]) != -1) { Katacount2++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) { Katacount3++; }
            }
            if (Katacount !== 2 && Katacount1 !== 2 && Katacount2 !== 2 && Katacount3 !== 2) return false;
        }
        if (filters.TMlaw){
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Cerebral", "Free Spirit" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else { 
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[0].indexOf(Kataclass[i]) != -1) { Katacount1++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[1].indexOf(Kataclass[i]) != -1) { Katacount2++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) { Katacount3++; }
            }
            if (Katacount !== 2 && Katacount1 !== 2 && Katacount2 !== 2 && Katacount3 !== 2) return false;
        }
        if (filters.sulongCarrot){
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Striker", "Shooter", "Cerebral" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else { 
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[0].indexOf(Kataclass[i]) != -1) { Katacount1++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[1].indexOf(Kataclass[i]) != -1) { Katacount2++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) { Katacount3++; }
            }
            if (Katacount !== 2 && Katacount1 !== 2 && Katacount2 !== 2 && Katacount3 !== 2) return false;
        }
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
        if ($rootScope.filters.custom[MATCHER_IDS['sailor.ClassBoostingSupports']] && filters.classSupport &&
                !CharUtils.isClassBooster('support', id, filters.classSupport)) return false;
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
        var types = { story: 'Story Island', fortnight: 'Fortnight', raid: 'Raid', Coliseum: 'Coliseum', Treasure: 'Treasure Map', Ambush: 'Ambush', Bond: 'Bond Battle' };
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
