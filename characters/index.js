(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

var lastQuery = null;
var filters = { custom: [ ] };

/********************
 * Common functions *
 ********************/

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[13].constructor != Array) element[13] = [ element[13], element[13], element[13] ];
    return {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        growth  : {
            hp  : element[13][0],
            atk : element[13][1],
            rcv : element[13][2]
        }
    };
};

var generateSearchParameters = function(query, filters) {
    if ((!query || query.trim().length < 3) && Object.keys(filters).length === 0) return null;
    var result = { };
    if (query && query.length > 2) {
        result = { matchers: { }, ranges: { }, query: [ ] };
        var ranges = { }, params = [ 'hp', 'atk', 'stars', 'cost', 'growth', 'rcv' ];
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
    }
    var temp = $.extend({ },filters);
    temp.custom = [ ];
    for (var i=0;i<filters.custom.length;++i) {
        if (filters.custom[i])
            temp.custom.push(window.matchers[i]);
    }
    result.filters = temp;
    return result;
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

    $timeout(function() {
        if ((JSON.parse(localStorage.getItem('warning')) || 0) < 4) {
            noty({ text: 'Captain abilities filters and specials filters are only supported up to Bellmere (#500) right now',
                layout: 'topRight', type: 'warning', timeout: 10000 });
            localStorage.warning = 4;
        }
    });

});

app.controller('DetailsCtrl',function($scope, $state, $stateParams) {
    $scope.unit = window.units[$stateParams.id - 1];
    $scope.details = window.details[$stateParams.id];
    $scope.withButton = $stateParams.previous.length > 0;
    $scope.onBackClick = function() {
        var previous = $stateParams.previous.splice(-1)[0];
        $state.go('main.view',{ id: previous, previous: $stateParams.previous });
    };
    $scope.getPrevious = function() {
        return $stateParams.previous.concat([ $stateParams.id ]);
    };
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
            [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(x) {
                var template = '<span class="type-filter ' + x + '" ng-model="filters.type" ' +
                    'ng-class="{ active: filters.type == \'' + x + '\' }" ng-click="onTypeClick(\'' + x + '\')">' + x + '</span>';
                element.append($compile(template)(scope));
            });
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

/***********
 * Filters *
 ***********/

app.filter('decorate',function() {
    return function(input) {
        if (!input) return 'None';
        return input.replace(/\[(STR|DEX|QCK|PSY|INT|RCV|TND)\]/g,'<span class="mini-type $1">$1</span>');

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
