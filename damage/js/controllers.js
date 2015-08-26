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
                return parameters.query.test(unit.name);
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
            var name = slot.name.toLowerCase();
            delete slots[name];
            delete $scope.slots[name];
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

/***************
 * ProfileCtrl *
 ***************/

controllers.ProfileCtrl = function($scope, $state) {
    $scope.list = profiles;
    $scope.pickProfile = function(profile) {
        $scope.data.profile = profile;
        $state.go('^');
    };
};

/***************
 * PopoverCtrl *
 ***************/

controllers.PopoverCtrl = function($scope) {
    if (!$scope.data.team[$scope.slot].unit) return;
    $scope.details = window.details[$scope.data.team[$scope.slot].unit.number + 1];
};

/****************
 * TransferCtrl *
 ****************/

controllers.TransferCtrl = function($scope, $state, $stateParams) {

    if (!/^D.+C$/.test($stateParams.data)) {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
    }

    var team = [ ];
    var regex = /(?:(\d+):(\d+)(?::(\d+):(\d+):(\d+))?|!)/;
    var tokens = $stateParams.data.slice(1,-1).split(/,/);

    for (var i=0;i<tokens.length;++i) {
        var matches = tokens[i].match(regex);
        if (!matches) break;
        if (matches[0] == '!') team.push(null);
        else {
            var id = parseInt(matches[1],10), level = parseInt(matches[2],10),
                atk = parseInt(matches[3],10) || 0, hp = parseInt(matches[4],10) || 0,
                rcv = parseInt(matches[5],10) || 0;
            if (id < 1 || id > units.length || units[id - 1].length === 0) break;
            if (level < 1 || level > units[id - 1].maxLevel) break;
            if (atk > 100 || hp > 100 || rcv > 100 || (atk + hp + rcv) > 200) break;
            team.push({ id: id, level: level, candies: { atk: atk, hp: hp, rcv: rcv }});
        }
    }

    if (team.length != 6) {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
    }

    $scope.options.crunchInhibitor = Infinity;

    for (i=0;i<6;++i) {
        $scope.resetSlot(i,false);
        if (team[i] === null) continue;
        $scope.data.team[i].unit = units[team[i].id - 1];
        $scope.data.team[i].level = team[i].level;
        $scope.data.team[i].candies = $.extend($scope.data.team[i].candies, team[i].candies);
    }

    $scope.options.crunchInhibitor = 0;

    $scope.notify({ text: 'Data transfer completed successfully.', type: 'success' });
    $state.go('^');

};

/*****************************
 * Controller initialization *
 *****************************/

for (var key in controllers)
    angular.module('optc')
        .controller(key, controllers[key]);

})();
