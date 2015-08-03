(function() {

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = JSON.parse(localStorage.getItem(key));
    if (value !== null) return value;
    return def;
};

var save = function(key,object) {
    localStorage.setItem(key,JSON.stringify(object));
};

/* * * * * Version control methods * * * * */

if (!localStorage.hasOwnProperty('version') || JSON.parse(localStorage.getItem('version')) < 2) {

    var data = { };

    var convert = function(storageName,dataName) {
        if (!localStorage.hasOwnProperty(storageName)) return;
        data[dataName] = loadValue(storageName);
        //localStorage.removeItem(storageName); // let's be conservative
    };

    convert('defense','defense');
    convert('hp','hp');
    convert('merry','app');
    convert('team','team');

    localStorage.setItem('data',JSON.stringify(data));
    localStorage.setItem('version','3');

}

if (JSON.parse(localStorage.getItem('version')) < 4) {
    localStorage.removeItem('data');
    localStorage.setItem('version',4);
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
        if (o == 'crunchInhibitor' || o == 'sidebarVisible') continue;
        $scope.options[o] = options[o];
    }

    $scope.options.crunchInhibitor = 0;

    /* * * * * Save on changes * * * * */

    $scope.$watch('data',function() { save('data',$scope.data); },true);
    $scope.$watch('options',function() { save('options',$scope.options); },true);

};

angular.module('optc')
    .controller('StorageCtrl', StorageCtrl);

})();
