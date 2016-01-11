(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope, $rootScope, $timeout) {

    $rootScope.data = {

        team: [
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } }
        ],

        percHP: 100.0,

        ship: [ 1, 5 ],

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

    // reset g slots automatically
    $scope.$watch('options.gOrbsEnabled',function(count) {
        if (count > 0) return;
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'g')
                $scope.tdata.team[i].orb = 1;
        }
    });

    /* * * * * Custom hit modifiers resetting * * * * */

    var resetTransitional = function() {
        $scope.tdata.customHitModifiers = null;
        $scope.tdata.orderOverride = { };
        $scope.tdata.typeOverride = { };
    };

    $scope.$watch('data.team', resetTransitional, true);
    $scope.$watch('tdata.team', resetTransitional, true);

    /* * * * * Surprise * * * * */

    $scope.$watch('data.team', function(team) {
        if (!team) return;
        $timeout(function() {
            var temp = team.map(function(x) { return x.unit ? x.unit.number + 1 : null; });
            var units = [ 15, 227, 251, 261, 308, 358, 400, 408, 418, 511, 590 ];
            var total = temp
                .map(function(x) { return units.indexOf(x) > -1 ? 1 : 0; })
                .reduce(function(p,n) { return p + n; },0);
            $rootScope.surpriseActive = (total >= 5);
        },100);
    },true);

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
