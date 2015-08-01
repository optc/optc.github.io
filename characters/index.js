(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

var lastQuery = null;
var filters = { custom: [ ] };

/********************
 * Common functions *
 ********************/

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[14].constructor != Array) element[14] = [ element[14], element[14], element[14] ];
    return {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        maxEXP  : element[13] , growth   : {
            hp  : element[14][0],
            atk : element[14][1],
            rcv : element[14][2]
        }
    };
};

var generateSearchParameters = function(query, filters) {
    var result = Utils.generateSearchParameters(query);
    if (result == null && Object.keys(filters).length === 0) return null;
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

var searchBaseEvolutions = function(id) {
    var temp = [ ], current = parseInt(id,10);
    for (var key in details) {
        if (!details[key].evolution) continue;
        if (details[key].evolution == current ||
                (details[key].evolution.indexOf && details[key].evolution.indexOf(current) != -1))
            temp.push(parseInt(key,10));
    }
    var result = [ ];
    for (var i=0;i<temp.length;++i) {
        var base = searchBaseEvolutions(temp[i]);
        if (base.length == 0)
            result.push([ temp[i] ]);
        else for (var j=0;j<base.length;++j)
            result.push(base[j].concat(temp[i].constructor == Array ? temp[i] : [ temp[i] ]));
    }
    return result;
};

var searchEvolverEvolutions = function(id) {
    var result = { }, current = parseInt(id,10);
    for (var key in details) {
        var id = ('000' + key).slice(-4);
        if (!details[key].evolution) continue;
        if (details[key].evolvers.indexOf(current) != -1)
            result[id] = (result[id] || [ ]).concat([ details[key].evolution ]);
        for (var i=0;i<details[key].evolution.length;++i) {
            if (details[key].evolvers[i].indexOf(current) != -1)
                result[id] = (result[id] || [ ]).concat([ details[key].evolution[i] ]);
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

window.units = window.units.map(parseUnit);

/***********************
 * Table configuration *
 ***********************/

var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
var table = null;

var tableData = window.units.filter(function(x) { return x.name; }).map(function(x) {
    return [
        ('000' + (x.number+1)).slice(-padding),
        x.name,
        x.type,
        x.class,
        x.maxHP,
        x.maxATK,
        x.maxRCV,
        x.combo,
        x.stars
    ];
});

var currentParameters = null;

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
        var stat = unit['max' + range.toUpperCase()];
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
    if (filters.class && unit.class !== filters.class) return false;
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
        currentParameters = generateSearchParameters($stateParams.query, $scope.filters);
        if (table) table.fnDraw();
    }

    $scope.$watch('query',function(query) {
        if (query === null || query === undefined) return;
        $state.go('.',{ query: $scope.query });
    });

    $scope.$watch('filters',function(filters) {
        if (!filters || Object.keys(filters).length === 0) return;
        currentParameters = generateSearchParameters($stateParams.query, $scope.filters);
        table.fnDraw();
    },true);

});

app.controller('DetailsCtrl',function($scope, $state, $stateParams) {
    // data
    $scope.unit = window.units[$stateParams.id - 1];
    $scope.details = window.details[$stateParams.id];
    $scope.evolvesFrom = searchBaseEvolutions($stateParams.id);
    $scope.usedBy = searchEvolverEvolutions($stateParams.id);
    $scope.isUsedBy = Object.keys($scope.usedBy).length > 0;
    // events/functions
    $scope.withButton = $stateParams.previous.length > 0;
    $scope.onBackClick = function() {
        var previous = $stateParams.previous.splice(-1)[0];
        $state.go('main.view',{ id: previous, previous: $stateParams.previous });
    };
    $scope.getEvos = getEvolversOfEvolution;
});

/**************
 * Directives *
 **************/

app.directive('characterTable',function($rootScope, $compile) {
    var addImage = function(data, type, row, meta) {
        return '<img class="slot small" data-original="' + Utils.getThumbnailUrl(row[0]-1) + '"> ' +
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
                    { title: 'Stars' }
                ],
                rowCallback: function(row, data, index) {
                    if (row.hasAttribute('loaded')) return;
                    $(row).find('[data-original]').each(function(n,x) {
                        x.setAttribute('src',x.getAttribute('data-original'));
                        x.removeAttribute('data-original');
                    });
                    $compile($(row).contents())($rootScope);
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
            // type filters
            element.append($('<span class="filter-header">Type filters:</span>'));
            var div = $('<div id="type-container"></div>');
            [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(x) {
                var template = '<span class="type-filter ' + x + '" ng-model="filters.type" ' +
                    'ng-class="{ active: filters.type == \'' + x + '\' }" ng-click="onTypeClick(\'' + x + '\')">' + x + '</span>';
                div.append($compile(template)(scope));
            });
            element.append(div);
            // class filters
            element.append($('<span class="filter-header">Class filters:</span>'));
            [ 'Fighter', 'Shooter', 'Slasher', 'Striker' ].forEach(function(x) {
                var template = '<span class="class-filter" ng-model="filters.class" ' +
                    'ng-class="{ active: filters.class == \'' + x + '\' }" ng-click="onClassClick(\'' + x + '\')">' + x + '</span>';
                element.append($compile(template)(scope));
            });
            // captain ability filters
            element.append($('<span class="filter-header">Captain abilities filters:</span>'));
            matchers.forEach(function(x,n) {
                if (x.target == 'special') return;
                var model = 'filters.custom[' + n + ']';
                var template = '<span class="custom-filter" ng-model="' + model + '" ' +
                    'ng-class="{ active: ' + model + ' }" ng-click="' + model + ' = !' + model + '">' + x.name + '</span>';
                element.append($compile(template)(scope));
            });
            // special filters
            element.append($('<span class="filter-header">Specials filters:</span>'));
            matchers.forEach(function(x,n) {
                if (x.target == 'captain') return;
                var model = 'filters.custom[' + n + ']';
                var template = '<span class="custom-filter" ng-model="' + model + '" ' +
                    'ng-class="{ active: ' + model + ' }" ng-click="' + model + ' = !' + model + '">' + x.name + '</span>';
                element.append($compile(template)(scope));
            });
            // events 
            scope.onTypeClick = function(type) { scope.filters.type = (scope.filters.type == type ? null : type); };
            scope.onClassClick = function(clazz) { scope.filters.class = (scope.filters.class == clazz ? null : clazz); };
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
    .run(function($rootScope, $location, $window) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            if (ga) ga('send', 'pageview', '/characters');
        });
    });

})();
