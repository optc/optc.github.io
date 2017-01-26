(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize', 'ngDialog' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope, $rootScope, $timeout) {

    $rootScope.data = {
        //setting default values
        team: [
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } }
        ],

        percHP: 100.0,
        
        ship: [ 1, 10 ],

        defense: 0,

        effect: null

    };
    
    $rootScope.tdata = { // transitional data

        team: [
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 },
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 },
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 },
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 },
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 },
            { orb: 1, special: false, lock: 0, silence: 0, removed: 0 }
        ],

        customHitModifiers: null,
        
        orderOverride: { },
        typeOverride: { },

        url: null,

        turnCounter: {
            enabled: false,
            value: 0
        }

    };

    $rootScope.numbers = {
        hp: 1,
        rcv: 0
    };

    $rootScope.options = {
        gOrbsEnabled: 0,
        slidersEnabled: true,
        sidebarVisible: false,
        transientMode: false,
        crunchInhibitor: Infinity
    };

    $scope.resetSlot = function(n,onlyTransitional) {
        // toggle special if active so deactivation methods run
        if ($scope.tdata.team[n].special)
            $rootScope.$emit('specialToggled', n, false);
        // toggle events if any
        if ($scope.data.team[n].unit) {
            var uid = $scope.data.team[n].unit.number + 1;
            if (window.events.hasOwnProperty(uid) && window.events[uid].hasOwnProperty('onRemoval'))
                window.events[uid].onRemoval($rootScope);
        }
        // reset slot
        if (!onlyTransitional)
            $scope.data.team[n] = { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } };
        $scope.tdata.team[n] = { orb: 1, g: false, special: false, lock: 0, silence: 0, removed: 0 };
    };

    // to be invoked every time a new unit is set in a slot so the insertion events can be triggered
    $scope.slotChanged = function(n) {
        if (!$scope.data.team[n].unit) return;
        var uid = $scope.data.team[n].unit.number + 1;
        if (window.events.hasOwnProperty(uid) && window.events[uid].hasOwnProperty('onInsertion'))
            window.events[uid].onInsertion($rootScope);
    };

    /* * * * * [G] orb control * * * * */

    var resetGOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'g')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset g slots automatically
    $scope.$watch('options.gOrbsEnabled',function() {
        if (!$rootScope.areGOrbsEnabled())
            resetGOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areGOrbsEnabled())
            resetGOrbs();
    });

    $rootScope.areGOrbsEnabled = function() {
        if ($rootScope.options.gOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.gOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * Custom hit modifiers resetting * * * * */

    var resetTransitional = function() {
        $scope.tdata.customHitModifiers = null;
        $scope.tdata.orderOverride = { };
        $scope.tdata.typeOverride = { };
    };

    $scope.$watch('data.team', resetTransitional, true);
    $scope.$watch('tdata.team', resetTransitional, true);

};

/****************************
 * AngularJS initialization *
 ****************************/

app
    .controller('SharedRootCtrl', SharedRootCtrl)
    .run(function($rootScope, $state, $location, $window) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            var state = $state.current.name;
            $rootScope.isPopupVisible = (state != 'main');
            $rootScope.picking = (state == 'main.candy');
            if (ga) ga('send', 'pageview', '/damage');
        });
    });

})();
