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
        transientMode: false,
        crunchInhibitor: Infinity
    };

    $scope.resetSlot = function(n,onlyTransitional) {
        if (!onlyTransitional)
            $scope.data.team[n] = { unit: null, level: -1, candies: { hp: 0, atk: 0, rcv: 0 } };
        $scope.tdata.team[n] = { orb: 1, special: false, lock: 0, silence: 0 };
    };

    // TODO Split

    $scope.generateURL = function() {

        var result, data = $scope.data, team = $scope.tdata.team;

        // team
        
        var tokens = [ ];
        for (var i=0;i<6;++i) {
            var unit = data.team[i], candies = unit.candies;
            if (unit.unit === null) tokens.push('!');
            else {
                var temp = (unit.unit.number + 1) + ':' + unit.level;
                if (candies.atk + candies.hp + candies.rcv > 0)
                    temp += ':' + [ candies.atk, candies.hp, candies.rcv ].join(':');
                tokens.push(temp);
            }
        }

        result = '#/transfer/D' + tokens.join(',') + 'C';

        // others
        
        result += data.ship[0] + ',' + data.ship[1] + 'B';
        result += data.defense + 'D';
        result += parseInt(team.map(function(x) { return (x.orb == 2 ? 1 : (x.orb == 0.5 ? 2 : 0)); }).join(''),3) + 'O';
        result += parseInt(team.map(function(x) { return x.lock; }).join(''),3) + 'L';
        result += parseInt(team.map(function(x) { return x.silence; }).join(''),3) + 'G';
        result += parseInt(team.map(function(x) { return x.special ? 1 : 0; }).join(''),2) + 'S';
        result += (Math.floor(data.percHP * 100) / 100) + 'H';

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
