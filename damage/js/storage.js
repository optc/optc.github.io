(function() {

var doAlert = false;

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = JSON.parse(localStorage.getItem(key));
    if (value !== null) return value;
    return def;
};

var save = function(key,object) {
    localStorage.setItem(key,JSON.stringify(object));
};

/* * * * * Version control * * * * */

var version = JSON.parse(localStorage.getItem('version')) || 7;

if (version < 7) {
    var data = JSON.parse(localStorage.getItem('data')) || { };
    data.ship = [ 1, 5 ];
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('version', JSON.stringify(7));
    if (version < 6) doAlert = true;
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

    if (doAlert) {
        $scope.notify({
            text: 'Some stuff changed. Refreshing the page and/or clearing your browser\'s cache may be a smart idea.',
            timeout: 10000,
            type: 'error'
        });
    }

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
