/* jshint evil: true */

(function() {

var controllers = { };

/***************
 * DefenseCtrl *
 ***************/

controllers.DefenseCtrl = function($scope, $state, $stateParams) { 

    $scope.$watch('query',function() {
        var regex = new RegExp($scope.query || '','i');
        $scope.list = defenses.filter(function(x) { return regex.test(x[0]); });
    });

    $scope.pickDefense = function(defense) {
        $scope.data.defense = defense[3];
        $state.go('^');
    };

    $scope.list = [ ];
    $scope.query = '';

};

/**************
 * PickerCtrl *
 **************/

controllers.PickerCtrl = function($scope, $state, $stateParams) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = JSON.parse(localStorage.getItem('recentUnits')) || [ ];

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.resetSlot($stateParams.slot);
        $scope.data.team[$stateParams.slot].unit = units[unitNumber];
        $scope.data.team[$stateParams.slot].level = 1;
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
            var temp = x.match(/^((type|class):(\w+)|(hp|atk|stars|cost|growth|rcv)(>|<|>=|<=|=)([\d.]+))$/), func;
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
        var result, parameters = generateSearchParameters();
        if (parameters === null) return;
        result = units.filter(function(x) { return x !== null && x !== undefined; });
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

/*************
 * SlotsCtrl *
 *************/

controllers.SlotsCtrl = function($scope, $state, $stateParams) {

    /* * * * * Functions * * * * */

    var populateSlots = function(query) {
        var regex = new RegExp(($scope.query || ''),'i'), result = { };
        for (var key in slots) {
            if (regex.test(slots[key].name))
                result[key] = slots[key];
        }
        $scope.slots = result;
    };

    /* * * * * Local variables * * * * */

    var lastSlotName = JSON.parse(localStorage.getItem('lastSlotName')) || '';
    var slots = JSON.parse(localStorage.getItem('slots')) || { };

    /* * * * * Scope variables * * * * */

    $scope.query = '';
    $scope.slots = slots;
    $scope.lastSlot = lastSlotName;
    $scope.overwriting = false;

    $scope.$watch('query',populateSlots);

    $scope.$watch('lastSlot',function(value) {
        if (value)
            $scope.overwriting = slots.hasOwnProperty(value.toLowerCase());
    });

    /* * * * * Scope functions * * * * */

    $scope.teamClick = function(e,slot) {
        if (e.which == 1 && !e.ctrlKey) {
            slot.team.map(function(x,n) {
                $scope.resetSlot(n);
                if (x !== null) $scope.data.team[n] = { unit: units[slot.team[n].unit], level: slot.team[n].level, candies: x.candies };
            });
            localStorage.setItem('lastSlotName',JSON.stringify(slot.name));
            $state.go('^');
        } else if (e.which == 2 || (e.which == 1 && e.ctrlKey)) {
            delete slots[slot.name];
            delete $scope.slots[slot.name];
            localStorage.setItem('slots',JSON.stringify(slots));
        }
    };

    $scope.saveTeam = function() {
        $scope.$broadcast('$validate');
        var team = $scope.data.team.map(function(x) {
            return !x.unit ? null : { unit : x.unit.number, level: x.level, candies: x.candies };
        });
        slots[$scope.lastSlot.toLowerCase()] = { name: $scope.lastSlot, team: team };
        localStorage.setItem('slots',JSON.stringify(slots));
        localStorage.setItem('lastSlotName',JSON.stringify($scope.lastSlot));
        $state.go('^');
    };

};

/************
 * ShipCtrl *
 ************/

controllers.ShipCtrl = function($scope, $state) {

    $scope.query = '';
    $scope.list = ships;

    $scope.$watch('query',function() {
        var regex = new RegExp(($scope.query || ''),'i'), result = { };
        for (var key in ships) {
            if (regex.test(key))
                result[key] = ships[key];
        }
        $scope.list = result;
    });

    $scope.getThumbnail = function(ship) {
        if (!ship.thumb) return '';
        return 'background-image: url(http://onepiece-treasurecruise.com/wp-content/uploads/' + ship.thumb + ')';
    };

    $scope.pickShip = function(name) {
        $scope.data.ship.name = name;
        $state.go('^');
    };

};

/*************
 * ResetCtrl *
 *************/

controllers.ResetCtrl = function($scope, $state) {
    $scope.resetStorage = function() {
        localStorage.removeItem('team');
        for (var i=0;i<6;++i) $scope.resetSlot(i);
        $state.go('^');
    };
};

/*************
 * CandyCtrl *
 *************/

controllers.CandyCtrl = function($scope, $state, $stateParams) {
    $scope.slot = $stateParams.slot;
    $scope.resetCandies = function() {
        $scope.data.team[$scope.slot].candies = { hp: 0, atk: 0, rcv: 0 };
    };
};

/*****************************
 * Controller initialization *
 *****************************/

for (var key in controllers)
    angular.module('optc')
        .controller(key, controllers[key]);

})();
