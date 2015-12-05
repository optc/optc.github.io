/* jshint loopfunc: true */

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
        $scope.data.defense = defense[4];
        $state.go('^');
    };

    $scope.list = [ ];
    $scope.query = '';

};

/**************
 * PickerCtrl *
 **************/

controllers.PickerCtrl = function($scope, $state, $stateParams, $storage) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = $storage.get('recentUnits', [ ]);

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.resetSlot($stateParams.slot);
        $scope.data.team[$stateParams.slot].unit = units[unitNumber];
        $scope.data.team[$stateParams.slot].level = 1;
        $scope.resetSlot($stateParams.slot,true);
        updateRecent(unitNumber);
        // captain warning
        if ($stateParams.slot < 2 && captains[unitNumber+1] && captains[unitNumber+1].warning) {
            noty({
                text: captains[unitNumber+1].warning.replace(/\%name\%/g, window.units[unitNumber].name),
                type: 'warning',
                layout: 'topRight',
                theme: 'relax',
                timeout: 5000
            });
        }
        $state.go('^');
    };

    /* * * * * List generation * * * * */

    var populateList = function() {
        $scope.units = [ ];
        var result, parameters = Utils.generateSearchParameters($scope.query);
        if (parameters === null) return;
        result = window.units.filter(function(x) { return x !== null && x !== undefined && x.hasOwnProperty('number'); });
        // filter by matchers
        for (var matcher in parameters.matchers) {
            result = result.filter(function(unit) {
                return parameters.matchers[matcher].test(unit[matcher]);
            });
        }
        // filter by ranges
        for (var range in parameters.ranges) {
            result = result.filter(function(unit) {
                var stat;
                if (range == 'id') stat = unit.number + 1;
                else stat = unit.hasOwnProperty(range.toLowerCase()) ? unit[range.toLowerCase()] : unit['max' + range.toUpperCase()];
                if (stat < parameters.ranges[range][0] || stat > parameters.ranges[range][1]) return false;
                return true;
            });
        }
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
        $storage.set('recentUnits', recentUnits);
    };

};

/*************
 * SlotsCtrl *
 *************/

controllers.SlotsCtrl = function($scope, $state, $stateParams, $storage) {

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

    var lastSlotName = $storage.get('lastSlotName', '');
    var slots = $storage.get('slots', { });

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
        if (e.which == 1 && !e.ctrlKey && !e.metaKey) {
            slot.team.map(function(x,n) {
                $scope.resetSlot(n);
                if (x !== null) $scope.data.team[n] = { unit: units[x.unit], level: x.level, candies: x.candies };
            });
            if (slot.hasOwnProperty('defense')) $scope.data.defense = parseInt(slot.defense, 10) || 0;
            if (slot.hasOwnProperty('ship')) $scope.data.ship = slot.ship;
            $storage.set('lastSlotName', slot.name);
            $state.go('^');
        } else if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey))) {
            var name = slot.name.toLowerCase();
            delete slots[name];
            delete $scope.slots[name];
            $storage.setItem('slots',JSON.stringify(slots));
        }
    };

    $scope.saveTeam = function() {
        $scope.$broadcast('$validate');
        var team = $scope.data.team.map(function(x) {
            return !x.unit ? null : { unit : x.unit.number, level: x.level, candies: x.candies };
        });
        var result = { name: $scope.lastSlot, team: team };
        if ($scope.saveShip) result.ship = $scope.data.ship;
        if ($scope.saveDefense) result.defense = parseInt($scope.data.defense, 10) || 0;
        slots[$scope.lastSlot.toLowerCase()] = result;
        $storage.set('slots', slots);
        $storage.set('lastSlotName', $scope.lastSlot);
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
        var regex = new RegExp(($scope.query || ''),'i'), result = [ ];
        for (var i=0;i<ships.length;++i) {
            if (regex.test(ships[i].name))
                result.push(ships[i]);
        }
        $scope.list = result;
    });

    $scope.getThumbnail = function(ship) {
        if (!ship.thumb) return 'background-image: url(' + Utils.getThumbnailUrl(null) + ')';
        return 'background-image: url(http://onepiece-treasurecruise.com/wp-content/uploads/' + ship.thumb + ')';
    };

    $scope.pickShip = function(name) {
        for (var i=0;i<ships.length;++i) {
            if (ships[i].name != name) continue;
            $scope.data.ship[0] = i;
            break;
        }
        $state.go('^');
    };

};

/*************
 * ResetCtrl *
 *************/

controllers.ResetCtrl = function($scope, $state) {
    $scope.resetStorage = function() {
        $storage.remove('team');
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

/***************
 * EffectsCtrl *
 ***************/

controllers.EffectsCtrl = function($scope, $state) {
    $scope.list = effects;
    $scope.pickEffect = function(effect) {
        $scope.data.effect = effect;
        $state.go('^');
    };
};

/***************
 * PopoverCtrl *
 ***************/

controllers.PopoverCtrl = function($scope) {
    if (!$scope.data.team[$scope.slot].unit) return;
    var id = $scope.data.team[$scope.slot].unit.number + 1;
    $scope.details = window.details[id];
    $scope.cooldown = window.cooldowns[id - 1];
};

/*****************************
 * Controller initialization *
 *****************************/

for (var key in controllers)
    angular.module('optc')
        .controller(key, controllers[key]);

})();
