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

        percHP: 100.0,

        ship: {
            name: 'Merry Go',
            level: 5
        },

        defense: 0,

        profile: null

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

        url: null

    };

    $scope.numbers = {
        hp: 1,
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

    $scope.generateURL = function() {
        
        var tokens = [ ];
        for (var i=0;i<6;++i) {
            var data = $scope.data.team[i], candies = data.candies;
            if (data.unit === null) tokens.push('!');
            else {
                var temp = (data.unit.number + 1) + ':' + data.level;
                if (candies.atk + candies.hp + candies.rcv > 0)
                    temp += ':' + [ candies.atk, candies.hp, candies.rcv ].join(':');
                tokens.push(temp);
            }
        }

        var result = '#/transfer/D' + tokens.join(',') + 'C';
        $scope.tdata.url = window.location.href.match(/^(.+?)#/)[1] + result;

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
            var location = $location.path().replace(/\/transfer\/.+$/,'/transfer');
            if (ga) ga('send', 'pageview', { page: location });
        });
    });

})();
