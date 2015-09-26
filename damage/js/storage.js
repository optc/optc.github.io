(function() {

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = JSON.parse(localStorage.getItem(key));
    if (key == 'data' && value && value.team) {
        value.team = value.team.map(function(x) {
            if (x && x.unit !== null && x.unit !== undefined && x.unit.constructor == Number)
                x.unit = window.units[x.unit];
            return x;
        });
    }
    if (value !== null) return value;
    return def;
};

var save = function(key,object) {
    if (key == 'data' && object.team) {
        object = JSON.parse(JSON.stringify(object));
        object.team = object.team.map(function(x) {
            if (x && x.unit && x.unit.constructor == Object)
                x.unit = x.unit.number;
            return x;
        });
    }
    localStorage.setItem(key,JSON.stringify(object));
};

/* * * * * Version control * * * * */

var version = JSON.parse(localStorage.getItem('version')) || 9;

if (version < 9) {
    var data = JSON.parse(localStorage.getItem('data')) || { };
    data.team.forEach(function(x) {
        if (x && x.unit && x.unit.constructor == Object)
            x.unit = x.unit.number;
    });
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('version', JSON.stringify(9));
}

/* * * * * Controller * * * * */

var StorageCtrl = function($scope) {

    /* * * * * Initialization * * * * */

    $scope.options.crunchInhibitor = Infinity;

    var data = loadValue('data',{ });
    for (var d in data)
        $scope.data[d] = data[d];

    var options = loadValue('options',{ });
    for (var o in options) {
        if (o == 'crunchInhibitor' || o == 'sidebarVisible' || o == 'transientMode') continue;
        $scope.options[o] = options[o];
    }

    if ($scope.data.profile && !window.profiles.hasOwnProperty($scope.data.profile))
        $scope.data.profile = null;

    if ($scope.data.ship && $scope.data.ship.constructor == Object)
        $scope.data.ship = [ 1, 5 ];

    $scope.options.crunchInhibitor = 0;

    /* * * * * Save on changes * * * * */

    $scope.$watch('data',function() {
        if (!$scope.options.transientMode)
            save('data',$scope.data);
    },true);

    $scope.$watch('options',function() {
        if (!$scope.options.transientMode)
            save('options',$scope.options);
    },true);

    $scope.$watch('options.transientMode',function(mode) {
        if (mode === undefined || mode === null) return;
        if (!mode) save('data',$scope.data);
    });

};

angular.module('optc')
    .controller('StorageCtrl', StorageCtrl);

})();
