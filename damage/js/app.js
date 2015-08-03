(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope) {

    $scope.data = {

        team: [
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } },
            { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } }
        ],

        ship: {
            name: 'Merry Go',
            level: 5
        },

        defense: 0,

        profile: null,

        compatibilityMode: false

    };
    
    $scope.tdata = { // transitional data

        team: [
            { orb: 1, special: false, lock: 0, silence: 0 },
            { orb: 1, special: false, lock: 0, silence: 0 },
            { orb: 1, special: false, lock: 0, silence: 0 },
            { orb: 1, special: false, lock: 0, silence: 0 },
            { orb: 1, special: false, lock: 0, silence: 0 },
            { orb: 1, special: false, lock: 0, silence: 0 }
        ],

        customHitModifiers: null,

    };

    $scope.numbers = {
        hp: { current: 1, max: 1, perc: 100 },
        rcv: 0
    };

    $scope.options = {
        slidersEnabled: true,
        sidebarVisible: false,
        crunchInhibitor: Infinity
    };

    $scope.resetSlot = function(n,onlyTransitional) {
        if (!onlyTransitional)
            $scope.data.team[n] = { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } };
        $scope.tdata.team[n] = { orb: 1, special: false, lock: 0, silence: 0 };
    };

    /* * * * * Custom hit modifiers resetting * * * * */

    var resetHits = function() { $scope.tdata.customHitModifiers = null; };

    $scope.$watch('data.team', resetHits, true);
    $scope.$watch('tdata.team', resetHits, true);

};

/****************************
 * AngularJS initialization *
 ****************************/

app
    .controller('SharedRootCtrl', SharedRootCtrl)
    .run(function($rootScope, $location, $window) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            if (ga) ga('send', 'pageview', { page: $location.path() });
        });
    });

})();
