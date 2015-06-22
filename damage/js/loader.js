(function() {

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = JSON.parse(localStorage.getItem(key));
    if (value !== null) return value;
    return def;
};

var save = function(data) {
    for (var key in data)
        localStorage.setItem(key,JSON.stringify(data[key]));
};

var StorageCtrl = function($scope) {

    /* * * * * Initialization * * * * */

    $scope.options.crunchingEnabled = false;

    var team = loadValue('team',[ null, null, null, null, null, null ]);
    team.forEach(function(x,n) {
        if (x === null) return;
        $scope.data.team[n].unit = x.unit;
        $scope.data.team[n].level = x.level;
    });

    $scope.data.merry = loadValue('merry',1.0);
    $scope.data.hp = loadValue('hp',{ current: 1, max: 1, perc: 100 });
    $scope.data.sliders = loadValue('sliders',true);
    $scope.data.defense = loadValue('defense',0);

    $scope.options.crunchingEnabled = true;

    /* * * * * Save on changes * * * * */

    $scope.$watch('data',function() { save($scope.data); },true);

};

angular.module('optc')
    .controller('StorageCtrl', StorageCtrl);

})();
