(function() {

/***************
 * Common data *
 ***************/

var lastQuery = null;
var filters = { custom: [ ], classes: [ ], stars: [ ] };

/***************
 * Controllers *
 ***************/

var app = angular.module('optc');

app.controller('MainCtrl',function($scope, $rootScope, $state, $stateParams, $timeout) {

    // query

    if ($stateParams.query != lastQuery) {
        lastQuery = $stateParams.query;
        $scope.query = lastQuery;
        $scope.table.parameters = CharUtils.generateSearchParameters($stateParams.query, $.extend({ }, $scope.filters));
        if ($scope.table.refresh) $scope.table.refresh();
    }

    $scope.$watch('query',function(query) {
        if (query === null || query === undefined) return;
        $state.go('.',{ query: $scope.query });
    });

});

app.controller('SidebarCtrl',function($scope, $rootScope, $stateParams) {

    if (!$scope.filters) $scope.filters = filters;

    $scope.$watch('filters',function(filters) {
        if (!filters || Object.keys(filters).length === 0) return;
        $scope.table.parameters = CharUtils.generateSearchParameters($stateParams.query, $.extend({ }, $scope.filters));
        // build regexes if necessary
        $scope.table.regexes = { };
        if (filters.custom[25] && $scope.table.parameters.filters.ctrlFrom) {
            $scope.table.regexes.ctrlFrom = $scope.table.parameters.filters.ctrlFrom.split(',').map(function(x) {
                return new RegExp('Changes[^,]+\\[' + x + '\\][^,]+into','i');
            });
        } if (filters.custom[25] && $scope.table.parameters.filters.ctrlTo) {
            $scope.table.regexes.ctrlTo = $scope.table.parameters.filters.ctrlTo.split(',').map(function(x) {
                return new RegExp('Changes.+into[^,]+\\[' + x + '\\]','i');
            });
        }
        // redraw table
        if (!$scope.$$phase) $scope.$apply();
    },true);

    $scope.clearFilters = function() {
        $scope.filters = { custom: [ ], classes: [ ], stars: [ ] };
    };

    $scope.onFilterClick = function(e, value) {
        var type = e.target.getAttribute('ng-model').split(/\./)[1];
        $scope.filters[type] = ($scope.filters[type] == value ? null : value);
    };

    $scope.onClassClick = function(e, clazz) {
        if ($scope.filters.classes.indexOf(clazz) == -1) {
            $scope.filters.classes = $scope.filters.classes.slice(0,1);
            $scope.filters.classes.push(clazz);
        }
        else $scope.filters.classes.splice($scope.filters.classes.indexOf(clazz), 1);
    };

    $scope.onStarsClick = function(e, stars) {
        if ($scope.filters.stars.indexOf(stars) == -1) $scope.filters.stars.push(stars);
        else $scope.filters.stars.splice($scope.filters.stars.indexOf(stars), 1);
    };

    $scope.onDropFilterClick = function(e,value) {
        var tokens = e.target.getAttribute('ng-model').split(/\./).slice(1);
        var type = tokens[0], key = tokens[1];
        if (!$scope.filters.hasOwnProperty(type)) $scope.filters[type] = { };
        $scope.filters[type][key] = ($scope.filters[type][key] == value ? null : value);
    };

    $scope.filterData = window.matchers;

});

app.controller('DetailsCtrl',function($scope, $rootScope, $state, $stateParams, $timeout) {
    // data
    var id = parseInt($stateParams.id, 10);
    $scope.id = id;
    $scope.unit = $.extend({},window.units[id - 1]);
    $scope.hybrid = $scope.unit.class.constructor == Array;
    $scope.details = window.details[id];
    // derived data
    $scope.evolvesFrom = CharUtils.searchBaseForms(id);
    $scope.usedBy = CharUtils.searchEvolverEvolutions(id);
    $scope.drops = CharUtils.searchDropLocations(id);
    $scope.manuals = CharUtils.searchDropLocations(-id);
    $scope.sameSpecials = CharUtils.searchSameSpecials(id);
    $scope.collapsed = { to: true, from: true, used: true, drops: true, manuals: true }; 
    // events/functions
    $scope.getEvos = CharUtils.getEvolversOfEvolution;
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
        'CMB': false, 'ATK/cost': false, 'Minimum cooldown': false, 'Initial cooldown': false };

    var additionalColumns = JSON.parse(localStorage.getItem('charColumns')) || [ ];

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

})();
