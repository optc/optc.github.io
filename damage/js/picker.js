/* jshint evil: true */

(function() {

var PickerCtrl = function($scope, $state, $stateParams) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = JSON.parse(localStorage.getItem('recentUnits')) || [ ];

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.data.team[$stateParams.slot] = { unit: units[unitNumber], level: 1, orb: 1 };
        $scope.resetSlot($stateParams.slot,true);
        updateRecent(unitNumber);
        $state.go('^');
    };

    /* * * * * List generation * * * * */

    var generateSearchParameters = function() {
        if (!$scope.query || $scope.query.trim().length < 3) return null;
        var result = { name: [ ] };
        tokens = $scope.query.trim().replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0; });
        tokens.forEach(function(x) {
            var temp = x.match(/^((type|class):(\w+)|(hp|atk|stars|cost|growth|rcv)(>|<|>=|<=|=)(\d+))$/), func;
            if (!temp) {
                result.name.push(x);
            } else if (temp[4] !== undefined) {
                func = new Function('x','return x ' + temp[5].replace(/^=$/,'==') + ' ' + temp[6] + ';');
                result[temp[4]] = func;
            } else {
                func = new Function('x','return /' + temp[3] + '/i.test(x);');
                result[temp[2]] = func; 
            }
        });
        if (result.name.length === 0) delete result.name;
        else result.name = new Function('x','return /' + result.name.join(' ') + '/i.test(x);');
        return result;
    };

    var populateList = function() {
        var result = units, parameters = generateSearchParameters();
        if (parameters === null) return;
        Object.keys(parameters).forEach(function(key) {
            var unitKey = key.replace(/^(hp|atk|rcv)$/,function(x) { return 'max' + x.toUpperCase(); });
            result = result.filter(function(x) { return parameters[key](x[unitKey]); });
        });
        $scope.units = result;
    };

    /* * * * * Recent list generation * * * * */

    var updateRecent = function(unitNumber) {
        var recentUnits = JSON.parse(JSON.stringify($scope.recents));
        var n = recentUnits.indexOf(unitNumber);
        if (n < 0) recentUnits.unshift(unitNumber);
        else recentUnits = recentUnits.splice(n,1).concat(recentUnits);
        recentUnits = recentUnits.slice(0,14);
        localStorage.setItem('recentUnits',JSON.stringify(recentUnits));
    };

};

angular.module('optc')
    .controller('PickerCtrl', PickerCtrl);

})();
