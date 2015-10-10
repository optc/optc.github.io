(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

var lastQuery = null;
var filters = { custom: [ ] };
var regexes = { };

var reverseDropMap = null;

Utils.parseUnits(false);

var fuse = new Fuse(window.units, { keys: [ 'name' ], id: 'number' });
var fuzzy = JSON.parse(localStorage.getItem('fuzzy')) || false;

var log = JSON.parse(localStorage.getItem('characterLog')) || [ ];
var characterLog = { };
for (var i=0;i<log.length;++i) characterLog[log[i]] = true;

/*********************
 * Utility functions *
 *********************/

var generateSearchParameters = function(query, filters) {
    var result = Utils.generateSearchParameters(query);
    if (result === null && Object.keys(filters).length === 0) return null;
    if (filters.class && filters.class.constructor != RegExp) filters.class = new RegExp(filters.class,'i');
    var temp = $.extend({ },filters);
    temp.custom = [ ];
    for (var i=0;i<filters.custom.length;++i) {
        if (filters.custom[i])
            temp.custom.push(window.matchers[i]);
    }
    if (Object.keys(temp).length > 0 || temp.custom.length > 0) {
        if (!result) result = { };
        result.filters = temp;
    }
    return result;
};

var searchBaseForms = function(id) {
    var temp = [ ], current = parseInt(id,10);
    for (var key in details) {
        if (!details[key].evolution) continue;
        if (details[key].evolution == current ||
                (details[key].evolution.indexOf && details[key].evolution.indexOf(current) != -1))
            temp.push(parseInt(key,10));
    }
    var result = [ ];
    for (var i=0;i<temp.length;++i) {
        var base = searchBaseForms(temp[i]);
        if (base.length === 0)
            result.push([ temp[i] ]);
        else for (var j=0;j<base.length;++j)
            result.push(base[j].concat(temp[i].constructor == Array ? temp[i] : [ temp[i] ]));
    }
    return result;
};

var searchEvolverEvolutions = function(id) {
    var result = { }, current = parseInt(id,10);
    for (var key in details) {
        var paddedId = ('000' + key).slice(-4);
        if (!details[key].evolution) continue;
        if (details[key].evolvers.indexOf(current) != -1)
            result[paddedId] = (result[paddedId] || [ ]).concat([ details[key].evolution ]);
        for (var i=0;i<details[key].evolution.length;++i) {
            if (details[key].evolvers[i].indexOf(current) != -1)
                result[paddedId] = (result[paddedId] || [ ]).concat([ details[key].evolution[i] ]);
        }
    }
    return result;
};

var getEvolversOfEvolution = function(from,to,withID) {
    if (!to) return [ ];
    from = parseInt(from,10);
    to = parseInt(to,10);
    if (details[from].evolution == to) return details[from].evolvers;
    if (!withID) return details[from].evolvers[details[from].evolution.indexOf(to)];
    for (var i=0;i<details[from].evolution.length;++i) {
        if (details[from].evolution[i] != to) continue;
        if (details[from].evolvers[i].indexOf(withID) == -1) continue;
        return details[from].evolvers[i];
    }
    return [ ];
};

var searchDropLocations = function(id) {
    var result = [ ];
    for (var type in drops) {
        for (var island=0;island<drops[type].length;++island) {
            var temp = [ ];
            for (var stage in drops[type][island]) {
                if (stage == 'thumb' || stage == 'name' || stage == 'day') continue;
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
                    data.bonuses = getIslandBonuses(island, drops[type][island].day);
                result.push(data);
            }
        }
    }
    return result;
};

var flagUnit = function(id) {
    reverseDropMap[id] = true;
    if (!details[id].evolution) return;
    if (details[id].evolution.constructor != Array) flagUnit(details[id].evolution);
    else for (var i=0;i<details[id].evolution.length;++i) flagUnit(details[id].evolution[i]);
};

var generateReverseDropMap = function() {
    reverseDropMap = { };
    for (var type in drops) {
        for (var island in drops[type]) {
            for (var stage in drops[type][island]) {
                var data = drops[type][island][stage];
                if (data.constructor != Array) continue;
                for (var i=0;i<data.length;++i) {
                    if (data[i] < 0 || reverseDropMap[data[i]]) continue;
                    flagUnit(data[i]);
                }
            }
        }
    }
};

var searchSameSpecials = function(id) {
    var result = [ ];
    for (var key in details) {
        if (key == id || !details[key].special) continue; 
        if (details[key].specialName == details[id].specialName && details[key].special == details[id].special)
            result.push(parseInt(key, 10));
    }
    return result;
};

var getDayOfWeek = function(japan, ignore) {
    var now = new Date(), utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000), today;
    if (!japan) today = new Date(utc.getTime() - 8 * 3600000);
    else today = new Date(utc.getTime() + 9 * 3600000);
    if (japan && today.getHours() < 12 && !ignore) return -1;
    return (today.getDay() === 0 ? 6 : today.getDay() - 1);
};

var getIslandBonuses = function(y, day) {
    var result = [ ];
    if (day !== undefined) {
        if (day == getDayOfWeek(false)) result.push('GL:today'); 
        if (day == getDayOfWeek(true, true)) result.push('JP:today'); 
    } else {
        var getBonus = function(x) {
            if (x < 0) return null;
            return bonuses.filter(function(data) {
                return y >= data.y && x <= data.x && x + y == data.x + data.y &&
                    (!data.hasOwnProperty('stop') || x >= data.stop);
            })[0];
        };
        var global = getBonus(getDayOfWeek(false)), japan = getBonus(getDayOfWeek(true, false));
        if (global) result.push('GL:' + global.type);
        if (japan) result.push('JP:' + japan.type);
    }
    return result;
};

/***********************
 * Table configuration *
 ***********************/

var additionalColumns = JSON.parse(localStorage.getItem('charColumns')) || [ ];

var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
var table = null;

var currentParameters = null;

var addImage = function(data, type, row, meta) {
    return '<img class="slot small" data-original="' + Utils.getThumbnailUrl(row[0]) + '"> ' +
        '<a ui-sref="main.view({ id: ' + parseInt(row[0],10) + '})">' + data + '</a>';
};

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


var tableData = window.units.filter(function(x) { return x.name; }).map(function(x,n) {
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

$.fn.dataTable.ext.search.push(function(settings, data, index) {
    if (!currentParameters) return true;
    var id = parseInt(data[0],10), unit = window.units[id - 1];
    var flags = details[unit.number + 1].flags || { };
    /* * * * * Query filters * * * * */
    // filter by matchers
    for (var matcher in currentParameters.matchers) {
        if (!currentParameters.matchers[matcher].test(unit[matcher]))
            return false;
    }
    // filter by ranges
    for (var range in currentParameters.ranges) {
        var stat;
        if (range == 'id') stat = unit.number + 1;
        else stat = unit.hasOwnProperty(range.toLowerCase()) ? unit[range.toLowerCase()] : unit['max' + range.toUpperCase()];
        if (stat < currentParameters.ranges[range][0] || stat > currentParameters.ranges[range][1])
            return false;
    }
    // filter by query
    if (currentParameters.query) {
        if (!fuzzy && !currentParameters.query.test(unit.name)) return false;
        if (fuzzy && !(new Fuse([ unit ], { keys: [ 'name' ], threshold: 0.3 })).search(currentParameters.query.source).length) return false;
    }
    /* * * * * Sidebar filters * * * * */
    if (!currentParameters.filters) return true;
    var filters = currentParameters.filters;
    // filter by type
    if (filters.type && unit.type !== filters.type) return false;
    // filter by class
    if (filters.class && !filters.class.test(unit.class)) return false;
    // filter by drop
    if (filters.drop) {
        if (!reverseDropMap) generateReverseDropMap();
        var isFarmable = reverseDropMap.hasOwnProperty(id);
        if (filters.drop == 'Farmable') {
            if (id == 1 || unit.stars >= 3 && !isFarmable) return false;    
            if (filters.farmable) {
                // raid
                if (filters.farmable.raid && !flags.raid) return false;
                if (filters.farmable.raid === false && flags.raid) return false;
                // fortnight
                if (filters.farmable.fortnight && !flags.fnonly) return false;
                if (filters.farmable.fortnight === false && flags.fnonly) return false;
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
    if (regexes.ctrlFrom && !regexes.ctrlFrom.test(window.details[id].special)) return false;
    if (regexes.ctrlTo && !regexes.ctrlTo.test(window.details[id].special)) return false;
    // end
    return true;
});

/***********************
 * State configuration *
 ***********************/

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/search/');

    $stateProvider

        .state('main',{
            url: '^/search/:query',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        
        .state('main.view',{
            url: '^/view/:id',
            params: { previous: [ ] },
            views: {
                'popup@': {
                    templateUrl: 'views/details.html',
                    controller: 'DetailsCtrl',
                }
            },
        });

});

/***************
 * Controllers *
 ***************/

app.controller('MainCtrl',function($scope, $rootScope, $state, $stateParams, $timeout) {

    if (!$scope.filters) $scope.filters = filters;

    if ($stateParams.query != lastQuery) {
        lastQuery = $stateParams.query;
        $scope.query = lastQuery;
        currentParameters = generateSearchParameters($stateParams.query, $.extend({ }, $scope.filters));
        if (table) table.fnDraw();
    }

    $scope.$watch('query',function(query) {
        if (query === null || query === undefined) return;
        $state.go('.',{ query: $scope.query });
    });

    $scope.$watch('filters',function(filters) {
        if (!filters || Object.keys(filters).length === 0) return;
        currentParameters = generateSearchParameters($stateParams.query, $.extend({ }, $scope.filters));
        // build regexes if necessary
        regexes = { };
        if (filters.custom[25] && currentParameters.filters.ctrlFrom)
            regexes.ctrlFrom = new RegExp('Changes[^,]+\\[' + currentParameters.filters.ctrlFrom + '\\][^,]+into','i');
        if (filters.custom[25] && currentParameters.filters.ctrlTo)
            regexes.ctrlTo = new RegExp('Changes.+into[^,]+\\[' + currentParameters.filters.ctrlTo + '\\]','i');
        // redraw table
        table.fnDraw();
    },true);

    $scope.clearFilters = function() {
        filters = { custom: [ ] };
        $scope.filters = filters;
    };

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

    $rootScope.characterLog = characterLog;
    $rootScope.showLogFilters = log.length > 0;

});

app.controller('DetailsCtrl',function($scope, $rootScope, $state, $stateParams, $timeout) {
    // data
    var id = parseInt($stateParams.id, 10);
    $scope.id = id;
    $scope.unit = $.extend({},window.units[id - 1]);
    $scope.hybrid = $scope.unit.class.constructor == Array;
    $scope.details = window.details[id];
    // derived data
    $scope.evolvesFrom = searchBaseForms(id);
    $scope.usedBy = searchEvolverEvolutions(id);
    $scope.drops = searchDropLocations(id);
    $scope.manuals = searchDropLocations(-id);
    $scope.sameSpecials = searchSameSpecials(id);
    $scope.collapsed = { to: true, from: true, used: true, drops: true, manuals: true }; 
    // events/functions
    $scope.getEvos = getEvolversOfEvolution;
    $scope.sizeOf = function(target) { return Object.keys(target).length; };
    $scope.withButton = $stateParams.previous.length > 0;
    $scope.onBackClick = function() {
        var previous = $stateParams.previous.splice(-1)[0];
        $state.go('main.view',{ id: previous, previous: $stateParams.previous });
    };
    $scope.clearComparison = function() {
        $scope.compare = null;
        $('#compare').val('');
        $('#compare').prop('disabled', false);
    };
});

app.controller('ColumnsCtrl',function($scope, $rootScope, $state, $stateParams) {
    $scope.columns = { 'ATK/HP': false, 'RCV/HP': false, 'RCV/ATK': false, 'ATK/CMB': false,
        'CMB': false, 'Minimum cooldown': false, 'Initial cooldown': false };
    additionalColumns.forEach(function(x) {
        if ($scope.columns.hasOwnProperty(x))
            $scope.columns[x] = true;
    });
    $scope.save = function() {
        var result = Object.keys($scope.columns).filter(function(x) { return $scope.columns[x]; });
        localStorage.setItem('charColumns',JSON.stringify(result));
        window.location.reload();
    };
});

/**************
 * Directives *
 **************/

app.directive('characterTable',function($rootScope, $compile) {
    return {
        restrict: 'E',
        replace: true,
        template: '<table id="mainTable" class="table table-striped-column panel panel-default"></table>',
        link: function(scope, element, attrs) {
            table = element.dataTable({
                iDisplayLength: JSON.parse(localStorage.getItem('unitsPerPage')) || 10,
                stateSave: true,
                data: tableData,
                columns: getTableColumns(),
                rowCallback: function(row, data, index) {
                    if (row.hasAttribute('loaded')) return;
                    // lazy thumbnails
                    $(row).find('[data-original]').each(function(n,x) {
                        x.setAttribute('src',x.getAttribute('data-original'));
                        x.removeAttribute('data-original');
                    });
                    // character log checkbox
                    var id = data[data.length - 1] + 1;
                    var checkbox = $('<label><input type="checkbox" ng-change="checkLog(' + id + ')" ng-model="characterLog[' + id + ']"></input></label>');
                    $(row.cells[10 + additionalColumns.length]).append(checkbox);
                    // compile
                    $compile($(row).contents())($rootScope);
                    if (window.units[id - 1].incomplete) $(row).addClass('incomplete');
                    row.setAttribute('loaded','true');
                },
                headerCallback : function(header) {
                    if (header.hasAttribute('loaded')) return;
                    header.cells[header.cells.length - 1].setAttribute('title', 'Character Log');
                    header.setAttribute('loaded',true);
                }
            });
            // report link
            var link = $('<span class="help-link">Want to report or request something? Use <a>this form</a>.</span>');
            link.find('a').attr('href', 'https://docs.google.com/forms/d/1jSlwN0Ruyc5bFfxdXlwihqfLdCiELX7HQTabXoCV7hU/viewform?usp=send_form');
            link.insertAfter($('.dataTables_length'));
            // pick column link
            var pick = $('<a id="pick-link" popover-placement="bottom" popover-trigger="click" popover-title="Additional Columns" ' +
                'popover-template="\'views/pick.html\'" popover-append-to-body="\'true\'">Additional columns</a>');
            $compile(pick)(scope);
            pick.insertAfter($('.dataTables_length'));
            // fuzzy toggle
            var fuzzyToggle = $('<label class="fuzzy-toggle"><input type="checkbox">Enable fuzzy search</input></label>');
            fuzzyToggle.attr('title','When enabled, searches will also display units whose name is not an exact match to the search keywords.\nUseful if you don\'t know the correct spelling of a certain unit.');
            fuzzyToggle.find('input').prop('checked', fuzzy);
            fuzzyToggle.find('input').change(function() {
                fuzzy = $(this).is(':checked');
                localStorage.setItem('fuzzy', JSON.stringify(fuzzy));
                table.fnDraw();
            });
            fuzzyToggle.insertBefore($('.dataTables_length'));
        }
    };
});

app.directive('decorateSlot',function() {
    return {
        restrict: 'A',
        scope: { uid: '=', big: '@' },
        link: function(scope, element, attrs) {
            if (scope.big)
                element[0].style.backgroundImage = 'url(' + Utils.getBigThumbnailUrl(scope.uid) + ')';
            else
                element[0].style.backgroundImage = 'url(' + Utils.getThumbnailUrl(scope.uid) + ')';
        }
    };
});

app.directive('autoFocus',function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
		}
	};
});

app.directive('filters',function($compile) {
    return {
        restrict: 'A',
        link: function(scope,element,attrs) {

            var createContainer = function(name, parent, condition) {
                var template = '<div class="filter-container' + (condition ? ' conditional' : '') + '"' +
                    (condition ? ' ng-show="' + condition + '"' : '') +
                    '><span class="filter-header">' + name + '</span></div>';
                var result = $compile(template)(scope);
                parent.append(result);
                return result;
            };
            var createFilter = function(content,data) {
                var template = '<span ' +
                    'class="filter width-' + (data.width || 12) + (data.class ? ' ' + data.class : '') + '"' +
                    (data.model ? ' ng-model="' + data.model + '"' : '') +
                    (data.condition ? ' ng-class="{ active: ' + data.condition + ' }"' : '') +
                    (data.onClick ? ' ng-click="' + data.onClick + '"' : '') +
                    (data.if ? ' ng-if="' + data.if + '"' : '') +
                    '>' + content + '</span>';
                return $compile(template)(scope);
            };
            
            // type filters
            var types = createContainer('Type filters', element);
            [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(x,n) {
                types.append(createFilter(x, { class: 'type ' + x, model: 'filters.type', width: n < 3 ? 4 : 6,
                    condition: 'filters.type == \'' + x + '\'', onClick: 'onClick($event,\'' + x + '\')' }));
            });

            // class filters
            var classes = createContainer('Class filters', element);
            [ 'Fighter', 'Shooter', 'Slasher', 'Striker', 'Freedom', 'Knowledge', 'Tough' ].forEach(function(x,n) {
                classes.append(createFilter(x, { class: 'class', model: 'filters.class', width: n < 4 ? 6 : 4,
                    condition: 'filters.class == \'' + x + '\'', onClick: 'onClick($event,\'' + x + '\')' }));
            });

            // drop filters
            var drop = createContainer('Drop filters', element);
            [ 'Farmable', 'Non-farmable' ].forEach(function(x) {
                drop.append(createFilter(x, { class: 'drop', model: 'filters.drop', width: 6,
                    condition: 'filters.drop == \'' + x + '\'', onClick: 'onClick($event,\'' + x + '\')' }));
            });
            [ 'Global only', 'JP only' ].forEach(function(x) {
                drop.append(createFilter(x, { class: 'drop', model: 'filters.server', width: 6,
                    condition: 'filters.server == \'' + x + '\'', onClick: 'onClick($event,\'' + x + '\')'}));
            });

            // farmable filters
            var farmable = createContainer('Farmable filters', element, 'filters.drop == \'Farmable\'');
            farmable.append(createFilter('Raid-only',{ class: 'drop', model: 'filters.farmable.raid',
                width: 6, condition: 'filters.farmable.raid', onClick: 'onDropClick($event,true)' }));
            farmable.append(createFilter('Hide raid-only',{ class: 'exc', model: 'filters.farmable.raid',
                width: 6, condition: 'filters.farmable.raid === false', onClick: 'onDropClick($event,false)' }));
            farmable.append(createFilter('Fortnight-only',{ class: 'drop', model: 'filters.farmable.fortnight',
                width: 6, condition: 'filters.farmable.fortnight', onClick: 'onDropClick($event,true)' }));
            farmable.append(createFilter('Hide fortnight-only',{ class: 'exc', model: 'filters.farmable.fortnight',
                width: 6, condition: 'filters.farmable.fortnight === false', onClick: 'onDropClick($event,false)' }));

            // non-farmable filters
            var nonFarmable = createContainer('Non-farmable filters', element, 'filters.drop == \'Non-farmable\'');
            nonFarmable.append(createFilter('RR-only',{ class: 'drop', model: 'filters.nonFarmable.rr',
                width: 6, condition: 'filters.nonFarmable.rr', onClick: 'onDropClick($event,true)' }));
            nonFarmable.append(createFilter('Hide RR-only',{ class: 'drop', model: 'filters.nonFarmable.rr',
                width: 6, condition: 'filters.nonFarmable.rr === false', onClick: 'onDropClick($event,false)' }));
            nonFarmable.append(createFilter('Limited RR-only',{ class: 'drop', model: 'filters.nonFarmable.lrr',
                width: 6, condition: 'filters.nonFarmable.lrr', onClick: 'onDropClick($event,true)' }));
            nonFarmable.append(createFilter('Hide lim. RR-only',{ class: 'drop', model: 'filters.nonFarmable.lrr',
                width: 6, condition: 'filters.nonFarmable.lrr === false', onClick: 'onDropClick($event,false)' }));
            nonFarmable.append(createFilter('Promo-only',{ class: 'drop', model: 'filters.nonFarmable.promo',
                width: 6, condition: 'filters.nonFarmable.promo', onClick: 'onDropClick($event,true)' }));
            nonFarmable.append(createFilter('Hide promo-only',{ class: 'drop', model: 'filters.nonFarmable.promo',
                width: 6, condition: 'filters.nonFarmable.promo === false', onClick: 'onDropClick($event,false)' }));
            nonFarmable.append(createFilter('Special-only',{ class: 'drop', model: 'filters.nonFarmable.special',
                width: 6, condition: 'filters.nonFarmable.special', onClick: 'onDropClick($event,true)' }));
            nonFarmable.append(createFilter('Hide special-only',{ class: 'drop', model: 'filters.nonFarmable.special',
                width: 6, condition: 'filters.nonFarmable.special === false', onClick: 'onDropClick($event,false)' }));

            // exclusion filters
            var exclusion = createContainer('Exclusion filters', element);
            exclusion.append(createFilter('Hide base forms', { class: 'exc', model: 'filters.noBase', width: 6,
                condition: 'filters.noBase', onClick: 'filters.noBase = !filters.noBase' }));
            exclusion.append(createFilter('Hide fodder', { class: 'exc', model: 'filters.noFodder', width: 6,
                condition: 'filters.noFodder', onClick: 'filters.noFodder = !filters.noFodder' }));
            exclusion.append(createFilter('Hide Boosters and Evolvers',{ class: 'exc', model: 'filters.noEvos',
                width: 12, condition: 'filters.noEvos', onClick: 'filters.noEvos = !filters.noEvos' }));

            // captain ability filters
            var captains = createContainer('Captain ability filters', element);
            var specials = createContainer('Specials', element);
            matchers.forEach(function(x,n) {
                var model = 'filters.custom[' + n + ']';
                var result = createFilter(x.name, { class: 'custom', model: model, width: 12,
                    condition: model, onClick: model + ' = !' + model });
                if (x.target == 'captain') captains.append(result);
                else specials.append(result);
            });

            // character log filters
            var log = createContainer('Character Log filters', element);
            log.attr('ng-if','showLogFilters');
            log.append(createFilter('Hide units in Character Log', { class: 'custom', model: 'filters.noLog',
                width: 12, condition: 'filters.noLog', onClick: 'filters.noLog = !filters.noLog' }));
            log.append(createFilter('Hide units not in Character Log', { class: 'custom', model: 'filters.noMissing',
                width: 12, condition: 'filters.noMissing', onClick: 'filters.noMissing = !filters.noMissing' }));
            $compile(log)(scope);

            // orb controller filter
            var target = $('.custom:contains("Orb controllers")');
            var filter = $('<span class="custom filter" id="controllers" ng-show="filters.custom[25]">' +
                    '<span class="separator">&darr;</span></span>');
            var separator = filter.find('.separator');
            [ 'STR', 'DEX', 'QCK', 'PSY', 'INT', 'RCV', 'TND' ].forEach(function(type) {
                var template = '<span class="filter orb %s" ng-class="{ active: filters.%f == \'%s\' }" ' +
                    'ng-model="filters.%f" ng-click="onClick($event,\'%s\')">%S</span>';
                separator.before($(template.replace(/%s/g,type).replace(/%S/g,type[0]).replace(/%f/g,'ctrlFrom')));
                filter.append($(template.replace(/%s/g,type).replace(/%S/g,type[0]).replace(/%f/g,'ctrlTo')));
            });
            target.after(filter);
            $compile(filter)(scope);

            // advanced drop filters
            target = $('.drop.filter:contains("Non-farmable")');

            // events 
            scope.onClick = function(e, value) {
                var type = e.target.getAttribute('ng-model').split(/\./)[1];
                scope.filters[type] = (scope.filters[type] == value ? null : value);
            };
            scope.onDropClick = function(e,value) {
                var tokens = e.target.getAttribute('ng-model').split(/\./).slice(1);
                var type = tokens[0], key = tokens[1];
                if (!scope.filters.hasOwnProperty(type)) scope.filters[type] = { };
                scope.filters[type][key] = (scope.filters[type][key] == value ? null : value);
            };
        }
    };
});

app.directive('goBack',function($state) {
	return {
		restrict: 'A',
        link: function(scope, element, attrs) {
            element.click(function(e) {
                if (!e.target || e.target.className.indexOf('inner-container') == -1) return;
                $state.go('^');
            });
        }
    };
});

app.directive('evolution',function($state, $stateParams) {
    return {
        restrict: 'E',
        replace: true,
        scope: { unit: '=', base: '=', evolvers: '=', evolution: '=', size: '@' },
        templateUrl: 'views/evolution.html',
        link: function(scope, element, attrs) {
            scope.goToState = function(id) {
                if (id == parseInt($stateParams.id,10)) return;
                var previous = $stateParams.previous.concat([ $stateParams.id ]);
                $state.go('main.view',{ id: id, previous: previous });
            };
        }
    };
});

app.directive('unit',function($state, $stateParams) {
    return {
        restrict: 'E',
        scope: { uid: '=' },
        template: '<a class="slot medium" decorate-slot uid="uid" ng-click="goToState(uid)"></a>',
        link: function(scope, element, attrs) {
            scope.goToState = function(id) {
                if (id == parseInt($stateParams.id,10)) return;
                var previous = $stateParams.previous.concat([ $stateParams.id ]);
                $state.go('main.view',{ id: id, previous: previous });
            };
        }
    };

});

app.directive('compare',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var target = element.typeahead(
                { minLength: 3, highlight: true },
                {
                    source: function(query, callback) { callback(fuse.search(query)); },
                    templates: {
                        suggestion: function(id) {
                            var name = units[id].name, url = Utils.getThumbnailUrl(id+1);
                            if (name.length > 63) name = name.slice(0,60) + '...';
                            var thumb = '<div class="slot small" style="background-image: url(' + url + ')"></div>';
                            return '<div><div class="suggestion-container">' + thumb + '<span>' + name + '</span></div></div>';
                        }
                    },
                    display: function(id) {
                        return units[id].name;
                    }
                }
            );

            target.bind('typeahead:select',function(e,suggestion) {
                $(e.currentTarget).prop('disabled', true);
                scope.compare = window.units[suggestion];
                scope.compareDetails = window.details[suggestion + 1];
                if (!scope.$$phase) scope.$apply();
            });

            element[0].style.backgroundColor = null;

        }
    };
});

app.directive('comparison',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var positive = (attrs.comparison == 'positive');
            var watch = scope.$watch(
                function() { return element.html(); },
                function() {
                    var isNegative = parseFloat(element.text(),10) < 0;
                    element.removeClass('positive negative withPlus');
                    if ((positive && !isNegative) || (!positive && isNegative)) element.addClass('positive');
                    else element.addClass('negative');
                    if (!isNegative) element.addClass('withPlus');
                }
            );
            scope.$on('$destroy',watch);
        }
    };
});

app.directive('addTags',function($stateParams) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="tag-container"></div>',
        link: function(scope, element, attrs) {
            var id = $stateParams.id, data = details[id];
            if (!reverseDropMap) generateReverseDropMap();
            // flags
            var flags = data.flags || { };
            element.append($('<span class="tag flag">' + (flags.global ? 'Global' : 'JP only') + '</div>'));
            element.append($('<span class="tag flag">' + (reverseDropMap.hasOwnProperty(id) ? 'Farmable' : 'Non-farmable') + '</div>'));
            if (flags.rr) element.append($('<span class="tag flag">Rare Recruit only</div>'));
            if (flags.lrr) element.append($('<span class="tag flag">Limited Rare Recruit only</div>'));
            if (flags.promo) element.append($('<span class="tag flag">Promo-code only</div>'));
            if (flags.special) element.append($('<span class="tag flag">One time only characters</div>'));
            if (flags.raid) element.append($('<span class="tag flag">Raid only</div>'));
            if (flags.fnonly) element.append($('<span class="tag flag">Fortnight only</div>'));
            // matchers
            matchers.forEach(function(matcher) {
                var name;
                // captain effects
                if (matcher.target == 'captain' && matcher.matcher.test(data.captain)) {
                    name = matcher.name;
                    if (!/captains$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' captains';
                    element.append($('<span class="tag captain">' + name + '</div>'));
                }
                // specials
                if (matcher.target == 'special' && matcher.matcher.test(data.special)) {
                    name = matcher.name;
                    if (!/specials$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' specials';
                    element.append($('<span class="tag special">' + name + '</div>'));
                }
            });
        }
    };
});

app.directive('addLinks',function($stateParams) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="link-container"></div>',
        link: function(scope, element, attrs) {
            var id = parseInt($stateParams.id,10), data = details[id], incomplete = units[id - 1].incomplete;
            var ul = $('<ul></ul>');
            if (!incomplete && data.flags && data.flags.global) {
                var link = 'http://onepiece-treasurecruise.com/en/' + (id == '5' ? 'roronoa-zoro' : 'c-' + id);
                ul.append($('<li><a href="' + link + '" target="_blank">Official Guide (English)</a></li>'));
            }
            if (!incomplete) {
                ul.append($('<li><a href="http://onepiece-treasurecruise.com/c-' + id + '" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
            }
            if (!isNaN(gw[id-1])) {
                ul.append($('<li><a href="http://xn--pck6bvfc.gamewith.jp/article/show/' + gw[id-1] + '" target="_blank">' +
                        'GameWith Page (Japanese)</a></li>'));
            }
            if (ul.children().length > 0)
                element.append(ul);
        }
    };
});

app.directive('linkButton',function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/links.html',
        scope: { exclude: '@' },
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                $(".menu").toggleClass("active"); 
            });
        }
    };
});

/***********
 * Filters *
 ***********/

app.filter('decorate',function() {
    return function(input) {
        if (!input) return 'None';
        return input
            .replace(/\[?(STR|DEX|QCK|PSY|INT|TND)\]?/g,'<span class="mini-type $1">$1</span>')
            .replace(/\[RCV\]/g,'<span class="mini-type RCV">RCV</span>');

    };
});


/********************
 * GA Configuration *
 ********************/

app
    .run(function($rootScope, $location, $window, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            $rootScope.currentState = $state.current.name;
            if (ga) ga('send', 'pageview', '/characters');
            var title = 'One Piece Treasure Cruise Character Table';
            if ($state.current.name == 'main.view')
                title = window.units[parseInt($stateParams.id,10) - 1].name + ' | ' + title;
            window.document.title = title;
        });
    });


/*****************
 * Notifications *
 *****************/

var version = JSON.parse(localStorage.getItem('charVersion')) || 1;

if (version < 2) {
    localStorage.setItem('charVersion', JSON.stringify(2));
    setTimeout(function() {
        noty({
            text: 'Some stuff changed. Refreshing the page and/or clearing your browser\'s cache may be a smart idea.',
            timeout: 10000,
            type: 'error',
            layout: 'topRight',
            theme: 'relax'
        });
    },500);
}

})();
