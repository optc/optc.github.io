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

if (JSON.parse(localStorage.getItem('version')) < 3) {

    var data = JSON.parse(localStorage.getItem('data')) || { };
    for (var i=0;i<6;++i) {
        if (!data.team[i]) continue;
        data.team[i].candies = data.team[i].candies || { hp: 0, atk: 0, rcv: 0 };
    }
    localStorage.setItem('data',JSON.stringify(data));

    var slots = JSON.parse(localStorage.getItem('slots')) || { };
    for (var slot in slots) {
        for (var i=0;i<6;++i) {
            if (!slots[slot].team[i]) continue;
            slots[slot].team[i].candies = slots[slot].team[i].candies || { hp: 0, atk: 0, rcv: 0 };
        }
    }
    localStorage.setItem('slots',JSON.stringify(slots));

    localStorage.setItem('version',3);

}

/* * * * * Controller * * * * */

var StorageCtrl = function($scope) {

    /* * * * * Initialization * * * * */

    $scope.options.crunchingEnabled = false;

    var data = loadValue('data',{ });
    for (var d in data)
        $scope.data[d] = data[d];

    var options = loadValue('options',{ });
    for (var o in options) {
        if (o == 'crunchingEnabled' || o == 'sidebarVisible') continue;
        $scope.options[o] = options[o];
    }

    $scope.options.crunchingEnabled = true;

    /* * * * * Save on changes * * * * */

    $scope.$watch('data',function() { save('data',$scope.data); },true);
    $scope.$watch('options',function() { save('options',$scope.options); },true);

};

angular.module('optc')
    .controller('StorageCtrl', StorageCtrl);

})();
