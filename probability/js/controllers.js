/* jshint loopfunc: true */

(function() {

var controllers = { };

/************
 * MainCtrl *
 ************/

controllers.MainCtrl = ['$scope', '$rootScope', '$state', '$stateParams', '$controller', '$timeout', '$window', 'SpecialProbability', 'SocketProbability', function($scope, $rootScope, $state, $stateParams, $controller, $timeout, $window, SpecialProbability, SocketProbability) { 

    $rootScope.character = null;
    $rootScope.options = { transient: false };
	
    $scope.skillups = null;
    $scope.copies = null;
	$scope.slots = null;
	$scope.specialEvent = false;
    $scope.special3Event = false;
    $scope.special4Event = false;
    //$scope.jpnVersion = false;
	
	$scope.specialProbabilityProgress = 0;
	$scope.specialProbabilityProgressBar = null;
	$scope.specialProbabilityResult = 0;
	$scope.specialProbabilityColor = null;
	$scope.isSpecialReady = true;
	// calculate Special Up
	$scope.calculateSpecialUp = function() {
		if ($scope.copies == null || $scope.skillups == null) {
			window.alert("Please enter your amount of copies and the amount of skillups needed");
			return;
		}
		$scope.isSpecialReady = false;
		var data = {copies: $scope.copies, skillups: $scope.skillups, special_event: $scope.specialEvent, special_3event: $scope.special3Event, special_4event: $scope.special4Event};
		SpecialProbability.compute(data).then(
			function(data) {
				if (data.finished == true) {
					if (data.result >= 0.6) {
						$scope.specialProbabilityColor = "green";
					} else if (data.result >= 0.3) {
						$scope.specialProbabilityColor = "orange";
					} else {
						$scope.specialProbabilityColor = "red";
					}
					$scope.specialProbabilityResult = Math.min((data.result * 100),99.9).toFixed(1);
					$scope.specialProbabilityProgressBar = "Complete";
					$scope.isSpecialReady = true;
				} 
			}, 
			null, 
			function(data) {
				$scope.specialProbabilityProgress = data.progress;
				$scope.specialProbabilityProgressBar = data.progress + "%";
			}
		);
	};
	
	$scope.socketProbabilityProgress = 0;
	$scope.socketProbabilityProgressBar = null;
	$scope.socketProbabilityResult = 0;
	$scope.socketProbabilityColor = null;
	$scope.isSocketReady = true;
	// calculate Socket Up
	$scope.calculateSocketUp = function() {
		if ($scope.copies == null || $scope.character == null) {
			window.alert("Please enter your amount of copies and pick the character you want to socket");
			return;
		}
		$scope.isSocketReady = false;
		// create slot array
		var slots = Array.apply(null, Array($scope.slots)).map(function (x) { return 0; });;
		for (i = 0; i < $scope.character.slots.length; ++i) {
			//console.log($scope.character.slots[i]);
			var obj = $scope.character.slots[i];
			if (obj != null) {
				slots[i] = obj.level;
			} else {
				slots[i] = 0;
			}
		}
		var data = {copies: $scope.copies, slots: slots};
		SocketProbability.compute(data).then(
			function(data) {
				if (data.finished == true) {
					if (data.result >= 0.6) {
						$scope.socketProbabilityColor = "green";
					} else if (data.result >= 0.3) {
						$scope.socketProbabilityColor = "orange";
					} else {
						$scope.socketProbabilityColor = "red";
					}
					$scope.socketProbabilityResult = Math.min((data.result * 100),99.9).toFixed(1);
                    //console.log($scope.socketProbabilityResult);
					$scope.socketProbabilityProgressBar = "Complete";
					$scope.isSocketReady = true;
				} 
			}, 
			null, 
			function(data) {
				$scope.socketProbabilityProgress = data.progress;
				$scope.socketProbabilityProgressBar = data.progress + "%";
			}
		);
	};
	
    $rootScope.changeUnit = function(unit, uid) {
        $scope.character = { uid: uid, slots: [ ], name: $scope.returnName(uid) };
		$scope.slots = $scope.slotCount(uid);
    };

    $scope.range = function(min, max) {
        var result = new Array(max - min);
        for (var i=0;i<result.length;++i) result[i] = min + i;
        return result;
    };

    $scope.slotCount = function(uid) {
        if (!uid) return 0;
        return units[uid - 1].slots;
    };
    
    $scope.returnName = function(uid) {
    	if (!uid) return;
    	return units[uid - 1].name;
    };
    
    $scope.quickFillSlots = function() {
        $scope.character.slots = [ ];
        for (var i=0;i<$scope.slots;++i)
        	$scope.character.slots.push({ id: [ 2, 3, 1, 6, 4][i], level: 0 });
    };
    
    $scope.quickFillSkillups = function(uid) {
    	if (!uid) return;
    	var cooldown = window.cooldowns[uid - 1];
    	var maxSkillups = cooldown[0] - cooldown[1];
    	if (!maxSkillups) return;
    	$scope.skillups = maxSkillups;
    };

    $scope.onRemove = function(i) {
        $rootScope.character = null;
        if (!$rootScope.$$phase) $rootScope.$apply();
    };

    $scope.generateURL = function() {

        var result, character = $rootScope.character;

        // team
        var tokens = [ ];
		var unit = character;
		if (!unit || !unit.uid) tokens.push('!');
		else {
			var temp = unit.slots
				.filter(function(x) { return x; })
				.map(function(x) { return x.id + '' + x.level; })
				.join('');
			tokens.push(unit.uid + ':' + temp);
		}
        

        result = '#/transfer/S' + tokens.join(',') + 'P';
        $scope.url = window.location.href.match(/^(.+?)#/)[1] + result;

        $timeout(function() {
            $('#urlContainer > input').select();
        });

    };

    var notifications = { };

    $rootScope.notify = function(data) {
        data = jQuery.extend({ type: 'information' },data);
        if (data.name && notifications[data[name]]) notifications[data[name]].close(); 
        var notification = noty(jQuery.extend({ timeout: 2500, layout: 'topRight', theme: 'relax' }, data));
        if (data.name) notifications[data[name]] = notification;
        return notification;

    };
    
	$controller('StorageCtrl', { $scope: $scope });
    $controller('DismissalCtrl');

}];

/**************
 * PickerCtrl *
 **************/

controllers.PickerCtrl = function($scope, $state, $stateParams, $storage) { 

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
	$scope.recents = $storage.get('slotRecentUnits', [ ]);

    $scope.isMats = $stateParams.mats;

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.changeUnit($stateParams.unit, unitNumber + 1);
		updateRecent(unitNumber);
        $state.go('^');
    };

    /* * * * * List generation * * * * */

    var populateList = function() {
        $scope.units = [ ];
        var result, parameters = Utils.generateSearchParameters($scope.query);
        if (parameters === null) return;
        result = window.units.filter(function(x) { return x !== null && x !== undefined && x.hasOwnProperty('number'); });
        // filter by query
        if (parameters.query) {
            result = result.filter(function(unit) {
                return parameters.query.test(Utils.getFullUnitName(unit.number + 1));
            });
        }
        $scope.units = result;
    };

	var updateRecent = function(unitNumber) {
        var recentUnits = JSON.parse(JSON.stringify($scope.recents));
        var n = recentUnits.indexOf(unitNumber);
        if (n < 0) recentUnits.unshift(unitNumber);
        else recentUnits = recentUnits.splice(n,1).concat(recentUnits);
        recentUnits = recentUnits.slice(0,16);
		$storage.set('slotRecentUnits', recentUnits);
    };

};

/***************
 * StorageCtrl *
 ***************/

controllers.StorageCtrl = function($scope, $rootScope, $storage) {
    var character = $storage.get('slotCharacter', null);
    if (character === null) {
		character = $rootScope.character;
	} else {
		$rootScope.character = character;
	}
};


/*************
 * ResetCtrl *
 *************/

controllers.ResetCtrl = function($scope, $rootScope, $state) {
    $scope.resetStorage = function() {
        $rootScope.character = null;
        $state.go('^');
    };
};
    
/*******************
 * InstructionCtrl *
 ******************/

controllers.InstructionCtrl = function() {
    //Do nothing
};

/***************
 * PopoverCtrl *
 ***************/

controllers.PopoverCtrl = function($scope) {
    if (!$scope.character) return;
    var id = $scope.character.uid;
    $scope.details = window.details[id] ? JSON.parse(JSON.stringify(window.details[id])) : null;
    $scope.cooldown = window.cooldowns[id - 1];
    if (!$scope.details || !$scope.details.special) return;
    if ($scope.details.special.japan)
        $scope.details.special = $scope.details.special.japan;
    if ($scope.details.special.constructor == Array) {
        var lastStage = $scope.details.special.slice(-1)[0];
        $scope.cooldown = lastStage.cooldown;
        $scope.details.special = lastStage.description;
    }
};

/******************
 * Initialization *
 ******************/

for (var controller in controllers)
    angular.module('optc')
        .controller(controller, controllers[controller]);

})();
