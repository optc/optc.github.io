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
                    if(singleQuery) {
                        var temp1 = false;
                        var temp2 = false;
                        var temp3 = false;
                        if (unit.class[0].length != 2) { if(filters.classes[0] == unit.class[0]) temp1 = true;}
                        if (unit.class[1].length != 2) { if(filters.classes[0] == unit.class[1]) temp2 = true;}
                        if (unit.class[2].length != 2) { if(filters.classes[0] == unit.class[2]) temp3 = true;}
                        if (!(temp1 || temp2 || temp3)) return false;
                        
                    }
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
        if ((unit.cost < filters.cost[0] || unit.cost > filters.cost[1])) return false;
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
                    // trade port
                    if (filters.nonFarmable.tmshop && !flags.tmshop) return false;
                    if (filters.nonFarmable.tmshop === false && flags.tmshop) return false;
                    // TM RR
                    if (filters.nonFarmable.tmlrr && !flags.tmlrr) return false;
                    if (filters.nonFarmable.tmlrr === false && flags.tmlrr) return false;
                    // KC RR
                    if (filters.nonFarmable.kclrr && !flags.kclrr) return false;
                    if (filters.nonFarmable.kclrr === false && flags.kclrr) return false;
                    // PF RR
                    if (filters.nonFarmable.pflrr && !flags.pflrr) return false;
                    if (filters.nonFarmable.pflrr === false && flags.pflrr) return false;
                }
            }
        }
        // exclusion filters
        if (filters.noBase && (evolutions[id] && evolutions[id].evolution)) return false;
        if (filters.noEvos && Utils.isEvolverBooster(unit)) return false;
        //console.log(window.details[id] ? "limit" in window.details[id] ? id : "no" : "no details");
        if (filters.noLB && window.details[id]) if("limit" in window.details[id]) return false;
        if (filters.noSupport && window.details[id]) if("support" in window.details[id]) return false;
        if (filters.globalTM && [ 2876, 2878, 2877, 2860, 5217, 5218, 5219, 2862, 5224, 5225, 5226, 5227, 2868, 3027, 2864, 5232, 5233, 5234, 5235, 2866, 5240, 5241, 5242, 5243, 3029, 3031, 2870, 2871, 2872, 2873, 2874, 2867, 5244, 5245, 5246, 2869, 2850, 5210, 5211, 5212, 5213, 2879, 2875, 3382, 2099, 2201, 2330, 2672, 2681, 2835, 5206, 5207, 5208, 5209, 2837, 2205, 2334, 2653, 2655, 2657, 2674, 2676, 2678, 2881, 2882, 2847, 2848, 2849, 353, 418, 865, 1108, 1163, 1298, 1432, 2670, 2684, 2781, 862, 951, 1378, 1792, 1828, 1897, 1978, 2249, 2375, 2416, 2550, 5132, 5133, 5134, 5135, 2649, 2813, 2845, 1003, 1597, 1649, 1650, 1997, 2091, 2127, 2146, 2350, 2459, 2520, 1808, 1853, 1941, 2064, 2175, 2211, 2261, 2469, 5062, 5063, 5064, 5065, 2510, 2557, 5140, 5141, 5142, 5143, 2618, 5176, 5177, 5178, 5179, 2659, 2690, 2729, 1258, 1380, 1530, 1846, 2283, 2381, 2399, 5024, 5025, 5026, 5027, 2668, 1889, 1916, 1972, 2000, 5012, 5013, 5014, 5015, 2109, 2137, 2299, 2336, 2362, 2387, 2443, 2583, 2763, 2792, 2823, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551 ].indexOf(id) == -1) return false;
        if (filters.globalKC && [ 2832, 2833, 2829, 2827, 2825, 2823, 2815, 2814, 2810, 2808, 2806, 2804, 2802, 5195, 5196, 5197, 5198 ].indexOf(id) == -1) return false;
        if (filters.japanTM && [ 3019, 3020, 3021, 3007, 3009, 2995, 2980, 2982, 3018, 3011, 3013, 3015, 3017, 2999, 3016, 2499, 2767, 3004, 3005, 1941, 2109, 2175, 2261, 2443, 2659, 2729, 2792, 2823, 2879, 2977, 3022, 2025, 2034, 2338, 2804, 2909, 603, 836, 1518, 2097, 2281, 2473, 2885, 2886, 2893, 2922, 2923, 2956, 779, 862, 1222, 1251, 1553, 1733, 2123, 2193, 2290, 2471, 2649, 2845, 2990, 666, 810, 1918, 2094, 2377, 2521, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952 ].indexOf(id) == -1) return false;
        if (filters.japanKC && [ 2998, 2997, 2996, 2995, 2991, 2990, 2989, 2988, 2987, 2986, 2984, 2982, 2980, 2955, 2889, 2888, 2887, 2853, 2832, 2793, 2756, 2977, 2976, 2975, 2974, 2973, 2972, 2970, 2968, 2966, 2964, 2962, 2960, 2958, 2956, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2934, 2893, 2281, 2158, 2097, 2015, 1830, 1595, 1518, 1298, 2521, 2146, 2127, 2095, 2087, 2046, 1995, 1918, 1581, 899, 1879 ].indexOf(id) == -1) return false;
        if (filters.worldClash && [ 253, 1041, 255, 257, 259, 979, 980, 983, 453, 455, 457, 946, 947, 948, 1182, 1528, 1186, 1188, 1190, 1270, 1509, 1510, 1511, 1606, 451, 981, 1184, 1272, 1512, 1607, 1222, 1276, 1278, 1602, 1608, 1700, 1798, 1989, 2037, 1047, 1492, 1972, 447, 1268, 575, 2025, 978, 2034, 1298, 2023, 1380, 2007, 1846, 1416, 1847, 2066, 408, 1927, 1345, 1593, 649, 1251, 1991, 1387, 2401, 2403, 2405 ].indexOf(id) == -1) return false;
        if (filters.swordOrdeal && [ 77, 255, 308, 449, 455, 530, 639, 645, 677, 750, 914, 1033, 1081, 1125, 1129, 1173, 1182, 1186, 1188, 1175, 1230, 1234, 1236, 1238, 1276, 1278, 1322, 1324, 1410, 1436, 1481, 1534, 1536, 1573, 1575, 1577, 1654, 1614, 1796, 1753, 1800, 1759, 1881, 2505, 1873, 1875, 1877, 1921, 1989, 2001, 2242, 2306, 2031, 2034, 2080, 2082, 2332, 2185, 2189, 2117, 2119, 2107, 2336, 2338, 2346, 2372, 2338, 2371, 2418, 2465, 2475, 2477, 2479, 2481, 2483, 2485, 2496, 2498 ].indexOf(id) == -1) return false;
        if (filters.faceoffAA && [ 3359, 1126, 2771, 2769, 595, 1298, 1314, 1192, 1280, 1283, 1665, 1669, 1713, 1826, 1849, 1764, 2023, 2025, 2405, 2039, 2041, 32, 77, 232, 263, 306, 459, 530, 860, 804, 978, 1054, 1085, 1100, 1225, 1228, 1240, 1281, 1282, 1316, 1318, 1380, 1416, 1590, 1595, 1707, 1778, 1780, 1784, 1846, 1847, 1869, 1926, 1991, 1993, 2007, 2019, 2027, 2029, 2031, 2034, 2043, 2064, 2187, 2251, 2261, 2283, 2347, 2552, 5032, 5033, 5034, 5035, 3340, 2819, 5048, 5049, 5050, 5051, 34, 44, 59, 68, 228, 229, 230, 265, 268, 297, 298, 299, 353, 355, 724, 770, 771, 772, 773, 774, 775, 783, 804, 806, 840, 974, 976, 1051, 1072, 1102, 1104, 1106, 1135, 1223, 1224, 1230, 1232, 1234, 1236, 1238, 1264, 1279, 1320, 1322, 1324, 1382, 1392, 1397, 1399, 1417, 1418, 1423, 1469, 1696, 1715, 1729, 2053, 2068, 1983, 5000, 5001, 5002, 5003, 2189, 2330, 2332, 2334, 2389 ].indexOf(id) == -1) return false;
        if (filters.summerGirlsBlitz && [ 2626, 2624, 2622, 2620, 2631, 2603, 2601, 5164, 5165, 5166, 5167, 5172, 5173, 5174, 5175, 2588, 2561, 5148, 5149, 5150, 5151, 2628, 2434, 2076, 2338, 5076, 1951, 1747, 1473, 1445, 416, 3361, 2217, 2215, 2213, 2191, 2173, 1731, 1729, 1711, 1709, 1674, 1214, 1201, 1199, 1194, 1161, 686, 685, 683, 681, 662, 514 ].indexOf(id) == -1) return false;
        if (filters.beastBlitz && [ 2840, 2802, 5195, 5196, 5197, 5198, 2812, 2810, 2808, 2806, 2792, 2789, 2787, 2780, 2778, 2776, 2774, 2709, 2707, 2782, 2785, 2815, 2813, 2904, 2905, 2906, 2907 ].indexOf(id) == -1) return false;
        if (filters.yonkoBlitz && [ 2734, 2736, 2735, 2738, 2557, 5140, 5141, 5142, 5143, 2347, 2019, 2007, 1707, 1380, 2536, 5093, 5094, 5095, 2500, 2473, 2381, 2109, 2700, 2387, 2690, 2197, 1268, 2302, 2504, 1980, 1016, 365, 2477, 1921, 2097, 2525, 2707, 2534, 5086, 5087, 5088, 5089, 1922, 2001, 1751, 2709, 2336, 1581, 2672, 1985, 5008, 5009, 5010, 5011, 1916, 2087, 2519, 2245, 2148, 2919, 5180, 5181, 5182, 5183, 1961, 2459, 2523, 314, 781, 1865, 312, 1043, 2609, 1982, 359, 882, 361, 1091, 1857, 1855, 310, 2729, 1867, 831, 357, 2111, 1690, 2152, 1963, 2457 ].indexOf(id) == -1) return false;
        if (filters.typoClass){
            var allClass = [ "Fighter", "Slasher", "Striker", "Shooter", "Free Spirit", "Powerhouse", "Cerebral", "Driven", "Evolver", "Booster" ];
            if (unit.class.length == 3) if(allClass.indexOf(unit.class[0][0]) != -1 && allClass.indexOf(unit.class[0][1]) != -1 && allClass.indexOf(unit.class[1][0]) != -1 && allClass.indexOf(unit.class[1][1]) != -1 && allClass.indexOf(unit.class[2][0]) != -1 && allClass.indexOf(unit.class[2][1]) != -1) return false;
            if (unit.class.length == 2) if(allClass.indexOf(unit.class[0]) != -1 && allClass.indexOf(unit.class[1]) != -1) return false;
            if(allClass.indexOf(unit.class) != -1) return false;
        }
        if (filters.dualUnits){
            if (unit.type.length == 3 || unit.type == "Type") return false;
        }
        if (filters.nodualUnits){
            if (unit.type.length == 2) return false;
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
        if (filters.katakuriplus){
            var Katacount = 0; var Katacount1 = 0; var Katacount2 = 0; var Katacount3 = 0;
            var Kataclass = [ "Slasher", "Striker", "Driven", "Cerebral", "Powerhouse" ];
            if (!Array.isArray(unit.class[0])){ for(var i = 0; i < Kataclass.length; i++) if(unit.class.indexOf(Kataclass[i]) != -1) Katacount++; }
            else { 
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[0].indexOf(Kataclass[i]) != -1) { Katacount1++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[1].indexOf(Kataclass[i]) != -1) { Katacount2++; }
                for(var i = 0; i < Kataclass.length; i++) if(unit.class[2].indexOf(Kataclass[i]) != -1) { Katacount3++; }
            }
            if (Katacount !== 2 && Katacount1 !== 2 && Katacount2 !== 2 && Katacount3 !== 2) return false;
        }
        if (filters.katakuriv2){
            var Katacount = 0; var Katacount1 = 0; var Katacount2 = 0; var Katacount3 = 0;
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
            var Katacount = 0; var Katacount1 = 0; var Katacount2 = 0; var Katacount3 = 0;
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
            var Katacount = 0; var Katacount1 = 0; var Katacount2 = 0; var Katacount3 = 0;
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
            else if (c == 'Limit Break: Expansion HP') temp = x.limitexHP;
            else if (c == 'Limit Break: Expansion ATK') temp = x.limitexATK;
            else if (c == 'Limit Break: Expansion RCV') temp = x.limitexRCV;
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
            else if (c == 'Minimum Limit Break Expansion cooldown' || c == 'Initial Limit Break Expansion cooldown') { 
                var d = cooldowns[x.number];
                if (!d) temp = 'N/A';
                else if (c == 'Minimum Limit Break Expansion cooldown' && d.constructor == Array) temp = (d[1] - x.limitexCD);
                else if (c == 'Initial Limit Break Expansion cooldown') temp = (d.constructor == Array ? (d[0] - x.limitexCD) : (d - x.limitexCD));
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
        var types = { story: 'Story Island', fortnight: 'Fortnight', raid: 'Raid', Coliseum: 'Coliseum', Treasure: 'Treasure Map', Ambush: 'Ambush', Bond: 'Kizuna Clash', PirateFest: 'Pirate Festival' };
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
