(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

var lastQuery = null;
var filters = { custom: [ ] };

var reverseDropMap = null;

Utils.parseUnits(false);

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
                if (type == 'Story Island') data.bonus = getIslandBonus(island);
                else if (drops[type][island].day == getDayOfWeek()) data.bonus = 'today';
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

var getDayOfWeek = function() {
    var now = new Date(), utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000 - 8 * 3600000);
    return (utc.getDay() === 0 ? 6 : utc.getDay() - 1);
};

var getIslandBonus = function(y) {
    var x = getDayOfWeek(), bonus = bonuses.filter(function(data) {
        return y >= data.y && x <= data.x && x + y == data.x + data.y;
    })[0];
    return (bonus ? bonus.type : null);
};

/***********************
 * Table configuration *
 ***********************/

var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
var table = null;

var currentParameters = null;

var tableData = window.units.filter(function(x) { return x.name; }).map(function(x,n) {
    return [
        ('000' + (x.number+1)).slice(-padding),
        x.name,
        x.type,
        x.class.constructor == Array ? x.class.join(', ') : x.class,
        x.maxHP,
        x.maxATK,
        x.maxRCV,
        x.combo,
        x.cost,
        x.slots,
        x.stars,
        x.number
    ];
});

$.fn.dataTable.ext.search.push(function(settings, data, index) {
    if (!currentParameters) return true;
    var id = parseInt(data[0],10), unit = window.units[id - 1];
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
    if (currentParameters.query && !currentParameters.query.test(unit.name)) return false;
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
        var isFarmable = reverseDropMap.hasOwnProperty(unit.number + 1);
        if (filters.drop == 'Farmable' && (id == 1 || unit.stars >= 3 && !isFarmable)) return false; 
        else if (filters.drop != 'Farmable' && id != 1 && (unit.stars < 3 || isFarmable)) return false; 
    }
    // filter by base form
    if (filters.noBase && details[id].evolution) return false;
    // filter by mats
    if (filters.noEvos && /Evolver|Booster/i.test(unit.class)) return false;
    // filter by server
    if (filters.server) {
        if (filters.server == 'Global only' && !details[unit.number + 1].global) return false;
        if (filters.server !== 'Global only' && details[unit.number + 1].global) return false;
    }
    // filter by active matchers
    if (filters.custom.length > 0 && !window.details.hasOwnProperty(id)) return false;
    for (var i=0;i<filters.custom.length;++i) {
        var target = window.details[id][filters.custom[i].target];
        if (!target || !filters.custom[i].matcher.test(target)) return false;
    }
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

app.controller('MainCtrl',function($scope, $state, $stateParams, $timeout) {

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
        table.fnDraw();
    },true);

    $scope.clearFilters = function() {
        filters = { custom: [ ] };
        $scope.filters = filters;
    };

});

app.controller('DetailsCtrl',function($scope, $state, $stateParams) {
    // data
    $scope.unit = $.extend({},window.units[$stateParams.id - 1]);
    $scope.hybrid = $scope.unit.class.constructor == Array;
    $scope.details = window.details[$stateParams.id];
    // derived data
    $scope.evolvesFrom = searchBaseForms($stateParams.id);
    $scope.usedBy = searchEvolverEvolutions($stateParams.id);
    $scope.drops = searchDropLocations(parseInt($stateParams.id,10));
    $scope.manuals = searchDropLocations(-parseInt($stateParams.id,10));
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

/**************
 * Directives *
 **************/

app.directive('characterTable',function($rootScope, $compile) {
    var addImage = function(data, type, row, meta) {
        var thumb = window.units[row[10]].incomplete ? '../common/res/missing.png' : Utils.getThumbnailUrl(row[0]);
        return '<img class="slot small" data-original="' + thumb + '"> ' +
            '<a ui-sref="main.view({ id: ' + parseInt(row[0],10) + '})">' + data + '</a>';
    };
    return {
        restrict: 'E',
        replace: true,
        template: '<table id="mainTable" class="table table-striped-column panel panel-default"></table>',
        link: function(scope, element, attrs) {
            table = element.dataTable({
                iDisplayLength: JSON.parse(localStorage.getItem('unitsPerPage')) || 10,
                stateSave: true,
                data: tableData,
                columns: [
                    { title: 'ID' },
                    { title: 'Name', render: addImage },
                    { title: 'Type' },
                    { title: 'Class' },
                    { title: 'HP' },
                    { title: 'ATK' },
                    { title: 'RCV' },
                    { title: 'CMB' },
                    { title: 'Cost' },
                    { title: 'Slots' },
                    { title: 'Stars' }
                ],
                rowCallback: function(row, data, index) {
                    if (row.hasAttribute('loaded')) return;
                    // lazy thumbnails
                    $(row).find('[data-original]').each(function(n,x) {
                        x.setAttribute('src',x.getAttribute('data-original'));
                        x.removeAttribute('data-original');
                    });
                    $compile($(row).contents())($rootScope);
                    if (window.units[data[10]].incomplete) $(row).addClass('incomplete');
                    row.setAttribute('loaded','true');
                }
            });
            var link = $('<span class="help-link">If you notice any error or missing information, please report it <a>here</a>.</span>');
            link.find('a').attr('href', 'https://docs.google.com/forms/d/1jSlwN0Ruyc5bFfxdXlwihqfLdCiELX7HQTabXoCV7hU/viewform?usp=send_form');
            link.insertBefore($('.dataTables_length'));
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
            var createContainer = function(name, parent) {
                var result = $('<div class="filter-container"><span class="filter-header">' + name + '</span></div>');
                parent.append(result);
                return result;
            };
            var createFilter = function(content,clazz,model,condition,onClick) {
                var template = '<span class="' + clazz + '" ng-model="' + model + '" ' +
                    'ng-class="{ active: ' + condition + ' }" ng-click="' + onClick + '">' + content + '</span>';
                return $compile(template)(scope);
            };
            // type filters
            var types = createContainer('Type filters', element);
            [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(x) {
                types.append(createFilter(x,'type-filter ' + x,'filters.type',
                    'filters.type == \'' + x + '\'','onClick($event,\'' + x + '\')'));
            });
            // class filters
            var classes = createContainer('Class filters', element);
            [ 'Fighter', 'Shooter', 'Slasher', 'Striker', 'Freedom' ].forEach(function(x) {
                classes.append(createFilter(x,'class-filter','filters.class',
                    'filters.class == \'' + x + '\'','onClick($event,\'' + x + '\')'));
            });
            // farmable filters
            var others = createContainer('Other filters', element);
            [ 'Farmable', 'Non-farmable' ].forEach(function(x) {
                others.append(createFilter(x,'drop-filter','filters.drop',
                    'filters.drop == \'' + x + '\'','onClick($event,\'' + x + '\')'));
            });
            [ 'Global only', 'JP only' ].forEach(function(x) {
                others.append(createFilter(x,'drop-filter','filters.server',
                    'filters.server == \'' + x + '\'','onClick($event,\'' + x + '\')'));
            });
            others.append(createFilter('Hide base forms','drop-filter','filters.noBase',
                'filters.noBase','filters.noBase = !filters.noBase'));
            others.append(createFilter('Hide materials','drop-filter','filters.noEvos',
                'filters.noEvos','filters.noEvos = !filters.noEvos'));
            // captain ability filters
            var captains = createContainer('Captain ability filters', element);
            var specials = createContainer('Specials', element);
            matchers.forEach(function(x,n) {
                var model = 'filters.custom[' + n + ']';
                var result = createFilter(x.name,'custom-filter',model,model,model + ' = !' + model);
                if (x.target == 'captain') captains.append(result);
                else specials.append(result);
            });
            // events 
            scope.onClick = function(e, value) {
                var type = e.target.getAttribute('ng-model').split(/\./)[1];
                scope.filters[type] = (scope.filters[type] == value ? null : value);
            };
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

app.directive('compare',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var target = element.typeahead(
                { minLength: 3, highlight: true },
                {
                    source: function(query, callback) {
                        try {
                            query = new RegExp(query, 'i');
                            var result = window.units
                                .filter(function(x) { return query.test(x.name); })
                                .map(function(x) { return x.number; });
                            callback(result);
                        } catch (e) { }
                    },
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
            if (ga) ga('send', 'pageview', '/characters');
            var title = 'One Piece Treasure Cruise Character Table';
            if ($state.current.name == 'main.view')
                title = window.units[parseInt($stateParams.id,10) - 1].name + ' | ' + title;
            window.document.title = title;
        });
    });


})();
