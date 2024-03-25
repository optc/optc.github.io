(function() {

var doAlert = false;
var storage = null;

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = storage.get(key, null);
    if (key == 'data' && value && value.team) {
        value.team = value.team.map(function(x,n) {
            if (!x || !x.hasOwnProperty('unit') || x.unit === undefined) x.unit = null;
            if (x && x.unit !== null && x.unit !== undefined && x.unit.constructor == Number) {
                x.unit = window.units[x.unit];
                // captain warnings
                if (n < 2 && x.unit && x.unit.number && captains[x.unit.number + 1] && captains[x.unit.number + 1].warning) {
                    noty({
                        text: captains[x.unit.number + 1].warning.replace(/%name%/g, window.units[x.unit.number].name),
                        type: 'warning',
                        layout: 'topRight',
                        theme: 'relax',
                        timeout: 5000
                    });
                }
            }
            let defaultTeamUnit = {
                unit: null,
                level: -1,
                candies: { hp: 0, atk: 0, rcv: 0 },
                limit: 0,
                sugarToy: false,
                tokiState: false,
            };
            return {...defaultTeamUnit, ...x}; // override defaults instead of returning only x, so no properties go missing in case of updates to the structure of `team`
        }).slice(0,6);
        if (isNaN(value.defense)) value.defense = 0;
    }
    if (value !== null) return value;
    return def;
};

var save = function(key,object) {
    if (key == 'data' && object.team) {
        object = JSON.parse(JSON.stringify(object));
        object.team = object.team.map(function(x) {
            if (x && x.unit && x.unit.constructor == Object)
                x.unit = x.unit.number; // whole unit object is too large, so save only the unit number
            return x;
        }).slice(0,6);
    }
    storage.set(key, object);
};

/* * * * * Controller * * * * */

var StorageCtrl = function($scope, $storage) {

    storage = $storage;

    /* * * * * Initialization * * * * */

    $scope.options.crunchInhibitor = Infinity;

    var data = loadValue('data',{ });
    for (var d in data)
        $scope.data[d] = data[d];
    
    //Load saved orbs (not specials because it breaks stuff)
    var team = loadValue('team',{ });
    for (var d in team)
        $scope.tdata.team[d].orb = team[d].orb;

    var options = loadValue('options',{ });
    for (var o in options) {
        if (o != 'slidersEnabled') continue;
        $scope.options[o] = options[o];
    }

    if ($scope.data.effect && !window.effects.hasOwnProperty($scope.data.effect))
        $scope.data.effect = null;

    if ($scope.data.ship && $scope.data.ship.constructor == Object)
        $scope.data.ship = [ 1, 5 ];

    $scope.options.crunchInhibitor = 0;

    if ($scope.data.team) {
        for (var i=0;i<6;++i)
            $scope.slotChanged(i);
    }

    /* * * * * Version control * * * * */

    var version = $storage.get('version', 12);
    if (version < 12) {
        doAlert = true;
        $storage.set('version', 12);
    }

    /* * * * * Save on changes * * * * */

    $scope.$watch('data',function() {
        if (!$scope.options.transientMode)
            save('data',$scope.data);
    },true);

    $scope.$watch('tdata.team',function() {
        if (!$scope.options.transientMode)
            save('team',$scope.tdata.team);
    },true);

    $scope.$watch('options',function() {
        if (!$scope.options.transientMode)
            save('options',$scope.options);
    },true);

    $scope.$watch('options.transientMode',function(mode) {
        if (mode === undefined || mode === null) return;
        if (!mode) save('data',$scope.data);
    });

    if (doAlert) {
        $scope.notify({
            text: 'Some stuff changed. Refreshing the page and/or clearing your browser\'s cache may be a smart idea.',
            timeout: 10000,
            type: 'error'
        });
    }

};

angular.module('optc')
    .controller('StorageCtrl', StorageCtrl);

})();
