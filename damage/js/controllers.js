/* jshint loopfunc: true */

(function() {

var controllers = { };

/***************
 * DefenseCtrl *
 ***************/

controllers.DefenseCtrl = function($scope, $state, $stateParams) { 

    $scope.$watch('query',function() {
        var regex = Utils.getRegex($scope.query || '');
        $scope.list = defenses.filter(function(x) { return regex.test(x); });
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
        $scope.data.team[$stateParams.slot].level = units[unitNumber].maxLevel;
        $scope.slotChanged($stateParams.slot);
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

        result = window.units.filter(function(x) {
            // some units don't exist or have no functions for their abilities, like turtles.
            if (x === null || x === undefined || !x.hasOwnProperty('number'))
                return false;
            // do not allow dual/vs units. Their "ghost" forms (which only have one type) can be added though
            if (Array.isArray(x.type))
                return false;
            if (!Utils.checkUnitMatchSearchParameters(x, parameters))
                return false;
            return true
        });

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
        var regex = Utils.getRegex($scope.query || ''), result = { };
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
            slot.team.forEach(function(x,n) {
                if (n > 5) return;
                $scope.resetSlot(n);
                if (x !== null) {
                    // override default properties so old teams will always have complete properties
                    // override unit property with the whole unit data (was stored as number)
                    Object.assign($scope.data.team[n], x, {unit: units[x.unit]});
                };
                $scope.slotChanged(n);
            });
            if (slot.hasOwnProperty('defense')) $scope.data.defense = parseInt(slot.defense, 10) || 0;
            if (slot.hasOwnProperty('ship')) $scope.data.ship = slot.ship;
            $storage.set('lastSlotName', slot.name);
            $state.go('^');
        } else if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey))) {
            var name = slot.name.toLowerCase();
            delete slots[name];
            delete $scope.slots[name];
            $storage.set('slots', slots);
        }
    };

    $scope.saveTeam = function() {
        $scope.$broadcast('$validate');
        var team = $scope.data.team.map(function(x) {
            return !x.unit ? null : {...x, ...{unit: x.unit.number}}; // save only the unit number to save space
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
        var regex = Utils.getRegex($scope.query || ''), result = [ ];
        for (var i=0;i<ships.length;++i) {
            if (regex.test(ships[i].name))
                result.push(ships[i]);
        }
        $scope.list = result;
    });

    $scope.getThumbnail = function(ship) {
        if (!ship.thumb) return 'background-image: url(' + Utils.getThumbnailUrl(null, '..') + ')';
        return 'background-image: url(https://onepiece-treasurecruise.com/wp-content/uploads/' + ship.thumb + ')';
    };

    $scope.getThumbnailLocal = function(ship, relPathToRoot = '') {
        if (!ship.thumb) return relPathToRoot + '/api/images/thumbnail/ship/ship_blank_t1.png';
        return relPathToRoot + '/api/images/thumbnail/ship/' + ship.thumb;
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

controllers.ResetCtrl = function($scope, $state, $storage) {
    $scope.resetStorage = function() {
        $storage.remove('team');
        for (var i=0;i<6;++i) $scope.resetSlot(i);
        $state.go('^');
    };
};
    
/*******************
 * InstructionCtrl *
 ******************/

controllers.InstructionCtrl = function() {
    //Do nothing
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
    $scope.details = window.details[id] ? JSON.parse(JSON.stringify(window.details[id])) : null;
    $scope.cooldown = window.cooldowns[id - 1];
    if (!$scope.details || !$scope.details.special) return;
    if ($scope.details.special){
        if ($scope.details.special.japan)
            $scope.details.special = $scope.details.special.japan;
        if ($scope.details.special.llbbase)
            $scope.details.special = $scope.details.special.llbbase;
    }
    if ($scope.details.captain){
        if ($scope.details.captain.combined){
            $scope.details.captain = $scope.details.captain.combined;
        }
        else if ($scope.details.captain.level6){
            $scope.details.captain = $scope.details.captain.level6;
        }
        else if ($scope.details.captain.level5){
            $scope.details.captain = $scope.details.captain.level5;
        }
        else if ($scope.details.captain.level4){
            $scope.details.captain = $scope.details.captain.level4;
        }
        else if ($scope.details.captain.level3){
            $scope.details.captain = $scope.details.captain.level3;
        }
        else if ($scope.details.captain.level2){
            $scope.details.captain = $scope.details.captain.level2;
        }
        else if ($scope.details.captain.llblevel1){
            $scope.details.captain = $scope.details.captain.llblevel1;
        }
        else if ($scope.details.captain.level1){
            $scope.details.captain = $scope.details.captain.level1;
        }
        else if ($scope.details.captain.llbbase){
            $scope.details.captain = $scope.details.captain.llbbase;
        }
        else if ($scope.details.captain.base){
            $scope.details.captain = $scope.details.captain.base;
        }
    }
    if ($scope.details.special.constructor == Array) {
        var lastStage = $scope.details.special.slice(-1)[0];
        $scope.cooldown = lastStage.cooldown;
        $scope.details.special = lastStage.description;
    }
};

/*****************
 * QuickPickCtrl *
 *****************/

controllers.QuickPickCtrl = function($scope, $state) {

    var pickUnit = function(slotNumber, unitNumber) {
        $scope.resetSlot(slotNumber);
        if (unitNumber) {
            $scope.data.team[slotNumber].unit = units[unitNumber - 1];
            $scope.data.team[slotNumber].level = units[unitNumber - 1].maxLevel;
            $scope.slotChanged(slotNumber);
        }
        if (slotNumber < 2 && captains[unitNumber] && captains[unitNumber].warning) {
            noty({
                text: captains[unitNumber].warning.replace(/\%name\%/g, window.units[unitNumber].name),
                type: 'warning',
                layout: 'topRight',
                theme: 'relax',
                timeout: 5000
            });
        }
    };

    $scope.quickPick = function() {

        var data = $scope.quickPickContent.split(/[\r\n]/)
            .filter(function(x) { return x && x.trim().length > 0; })
            .map(function(x) { return x.trim(); });

        window.units.forEach(function(unit) {
            while (data.indexOf(unit.name) >= 0)
                data.splice(data.indexOf(unit.name), 1, unit.number);
        });

        data = data.map(function(x) {
            if (x && !isNaN(x) && x >= 0 && x < units.length) return x + 1;
            return null;
        });

        data = data.slice(0,6);
        for (var i=0;i<6;++i)
            pickUnit(i, data[i]);

        $state.go('^');

    };

};

/*****************************
 * Controller initialization *
 *****************************/

for (var key in controllers)
    angular.module('optc')
        .controller(key, controllers[key]);

})();
