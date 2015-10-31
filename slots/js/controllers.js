/* jshint loopfunc: true */

(function() {

var controllers = { };

/************
 * MainCtrl *
 ************/

controllers.MainCtrl = function($scope, $rootScope, $state, $stateParams, $controller) { 

    $scope.team = [ null, null, null, null, null, null ];

    $rootScope.changeUnit = function(unit, uid) {
        $scope.team[unit] = { uid: uid, slots: [ ] };
    };

    $scope.range = function(min, max) {
        var result = new Array(max - min);
        for (var i=0;i<result.length;++i) result[i] = min + i;
        return result;
    };

    $scope.slotCount = function(uid) {
        if (!uid) return 0;
        return units[uid - 1].slots;
    };

    $scope.$watch('team',function(team) {

    },true);

    $controller('StorageCtrl', { $scope: $scope });

};

/**************
 * PickerCtrl *
 **************/

controllers.PickerCtrl = function($scope, $state, $stateParams) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = JSON.parse(localStorage.getItem('recentUnits')) || [ ];

    $scope.isMats = $stateParams.mats;

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.changeUnit($stateParams.unit, unitNumber + 1);
        $state.go('^');
    };

    /* * * * * List generation * * * * */

    var populateList = function() {
        $scope.units = [ ];
        var result, parameters = Utils.generateSearchParameters($scope.query);
        if (parameters === null) return;
        result = window.units.filter(function(x) { return x !== null && x !== undefined && x.hasOwnProperty('number'); });
        // filter by query
        if (parameters.query) {
            result = result.filter(function(unit) {
                return parameters.query.test(unit.name);
            });
        }
        $scope.units = result;
    };

};

/***************
 * SummaryCtrl *
 ***************/

controllers.SummaryCtrl = function($scope, $state, $stateParams) {

    $scope.summary = [ ];

    $scope.$watch('team',function(team) {

        var points = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        team.forEach(function(unit) {
            if (!unit || !unit.slots) return;
            unit.slots.forEach(function(slot) {
                if (!slot) return;
                points[slot.id] += slot.level;
            });
        });

        $scope.summary = points.map(function(x,n) {
            if (x === 0) return null;
            var level = 0;
            for (;level<abilities[n].levels.length && x >= abilities[n].levels[level][0];++level);
            return {
                points: x,
                level: level,
                description: (level < 1 ? 'Inactive' : abilities[n].levels[level - 1][1]),
                missing: (level < abilities[n].levels.length ? abilities[n].levels[level][0] - x : -1),
                next: (level < abilities[n].levels.length ? abilities[n].levels[level][1] : null)
            };
        });

        $scope.summaryEnabled = $scope.summary.some(function(x) { return x !== null; });

    },true);

};

/***************
 * StorageCtrl *
 ***************/

controllers.StorageCtrl = function($scope) {

    var team = JSON.parse(localStorage.getItem('slotTeam')) || null;
    if (team === null) team = $scope.team;
    else $scope.team = team;

    $scope.$watch('team',function(team) {
        localStorage.setItem('slotTeam', JSON.stringify(team));
    },true);

};

/******************
 * Initialization *
 ******************/

for (var controller in controllers)
    angular.module('optc')
        .controller(controller, controllers[controller]);

})();
