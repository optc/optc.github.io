/* jshint loopfunc: true */

(function() {

var controllers = { };

/************
 * MainCtrl *
 ************/

controllers.MainCtrl = function($scope, $rootScope, $state, $stateParams, $controller, $timeout) { 

    $rootScope.team = [ null, null, null, null, null, null ];
    $rootScope.options = { transient: false };

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

    $scope.onDrop = function(i,j) {
        var temp = $rootScope.team[i];
        $rootScope.team[i] = $rootScope.team[j];
        $rootScope.team[j] = temp;
        if (!$rootScope.$$phase) $rootScope.$apply();
    };

    $scope.onRemove = function(i) {
        $rootScope.team[i] = null;
        if (!$rootScope.$$phase) $rootScope.$apply();
    };

    $scope.generateURL = function() {

        var result, team = $rootScope.team;

        // team
        
        var tokens = [ ];
        for (var i=0;i<6;++i) {
            var unit = team[i];
            if (!unit || !unit.uid) tokens.push('!');
            else {
                var temp = unit.slots
                    .filter(function(x) { return x; })
                    .map(function(x) { return x.id + '' + x.level; })
                    .join('');
                tokens.push(unit.uid + ':' + temp);
            }
        }

        result = '#/transfer/S' + tokens.join(',') + 'P';
        $scope.url = window.location.href.match(/^(.+?)#/)[1] + result;

        $timeout(function() {
            $('#urlContainer > input').select();
        });

    };

    $scope.quickFill = function(slotNumber) {
        var slot = $rootScope.team[slotNumber];
        if (!slot || !slot.uid) return;
        var slotCount = units[slot.uid - 1].slots;
        slot.slots = [ ];
        for (var i=0;i<slotCount;++i)
            slot.slots.push({ id: [ 2, 3, 1, 6, 4][i], level: 5 });
    };

    $controller('StorageCtrl', { $scope: $scope });

};

/**************
 * PickerCtrl *
 **************/

controllers.PickerCtrl = function($scope, $state, $stateParams, $storage) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = $storage.get('slotRecentUnits', [ ]);

    $scope.isMats = $stateParams.mats;

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.changeUnit($stateParams.unit, unitNumber + 1);
        updateRecent(unitNumber);
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
                return parameters.query.test(Utils.getFullUnitName(unit.number + 1));
            });
        }
        $scope.units = result;
    };

    /* * * * * Recent list generation * * * * */

    var updateRecent = function(unitNumber) {
        var recentUnits = JSON.parse(JSON.stringify($scope.recents));
        var n = recentUnits.indexOf(unitNumber);
        if (n < 0) recentUnits.unshift(unitNumber);
        else recentUnits = recentUnits.splice(n,1).concat(recentUnits);
        recentUnits = recentUnits.slice(0,16);
        $storage.set('slotRecentUnits', recentUnits);
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
                level: (level == abilities[n].levels.length ? 'MAX' : level),
                description: (level < 1 ? 'Inactive' : abilities[n].levels[level - 1][1]),
                missing: (level < abilities[n].levels.length ? abilities[n].levels[level][0] - x : -1),
                next: (level < abilities[n].levels.length ? abilities[n].levels[level][1] : null),
                overflow: (level == abilities[n].levels.length ? x - abilities[n].levels.slice(-1)[0][0] : 0)
            };
        });

        $scope.summaryEnabled = $scope.summary.some(function(x) { return x !== null; });

    },true);

};

/**************
 * ImportCtrl *
 **************/

controllers.ImportCtrl = function($scope, $rootScope, $state, $stateParams) {

    var data = $stateParams.data;

    if (!/^S.+P$/.test(data)) {
        $state.go('^');
        return;
    }

    data = data.slice(1,-1).split(/,/);
    var valid = data.every(function(x) {
        return (x == '!' || (/^(\d+):([0-9][1-5]){0,6}$/.test(x) && units[parseInt(x.split(/:/)[0],10)]));
    });

    if (!valid) {
        $state.go('^');
        return;
    }

    var result = data.map(function(x) {
        if (x == '!') return null;
        var tokens = x.split(/:/);
        var uid = parseInt(tokens[0],10), slots = [ ];
        for (var i=0;i<tokens[1].length;i+=2)
            slots.push({ id: parseInt(tokens[1][i],10), level: parseInt(tokens[1][i+1],10) });
        return { uid: uid, slots: slots };
    });

    $rootScope.options.transient = true;
    $rootScope.team = result;
    $state.go('^');

};

/*************
 * SlotsCtrl *
 *************/

controllers.SlotsCtrl = function($scope, $rootScope, $state, $stateParams, $storage) {

    /* * * * * Local variables * * * * */

    var lastSavedName = $storage.get('slots.lastName', '');
    var data = $storage.get('slots.data', { });

    /* * * * * Local functions * * * * */

    var populate = function(query) {
        var regex = new RegExp(($scope.query || ''),'i'), result = { };
        for (var key in data) {
            if (regex.test(data[key].name))
                result[key] = data[key];
        }
        $scope.data = result;
    };

    /* * * * * Scope variables * * * * */

    $scope.lastSlot = lastSavedName;
    $scope.overwriting = false;

    $scope.$watch('lastSlot',function(value) {
        if (value)
            $scope.overwriting = data.hasOwnProperty(value.toLowerCase());
    });

    $scope.$watch('query',populate);

    /* * * * * Scope functions * * * * */

    $scope.teamClick = function(e,slot) {
        if (e.which == 1 && !e.ctrlKey && !e.metaKey) {
            $rootScope.team = slot.team;
            $storage.set('slots.lastName', slot.name);
            $state.go('^');
        } else if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey))) {
            var name = slot.name.toLowerCase();
            delete data[name];
            delete $scope.data[name];
            $storage.set('slots.data', data);
        }
    };

    $scope.doSave = function() {
        $scope.$broadcast('$validate');
        var result = { name: $scope.lastSlot, team: $scope.team };
        data[$scope.lastSlot.toLowerCase()] = result;
        $storage.set('slots.data', data);
        $storage.set('slots.lastName', $scope.lastSlot);
        $state.go('^');
    };

};

/***************
 * StorageCtrl *
 ***************/

controllers.StorageCtrl = function($scope, $rootScope, $storage) {

    var team = $storage.get('slotTeam', null);
    if (team === null) team = $rootScope.team;
    else $rootScope.team = team;

    var save = function() {
        $storage.set('slotTeam', $rootScope.team);
    };

    $rootScope.$watch('team',function(team) {
        if (!$rootScope.options.transient)
            save();
    },true);

    $rootScope.$watch('options.transient',function(transient) {
        if (!transient)
            save();
    });

};

/*************
 * ResetCtrl *
 *************/

controllers.ResetCtrl = function($scope, $rootScope, $state) {

    $scope.resetStorage = function() {
        $rootScope.team = [ ];
        $state.go('^');
    };

};

/******************
 * Initialization *
 ******************/

for (var controller in controllers)
    angular.module('optc')
        .controller(controller, controllers[controller]);

})();
