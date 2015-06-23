(function() {

var app = angular.module('optc', [ 'ui.router' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope) {

    $scope.data = {

        team: [
            { unit: null, level: -1 },
            { unit: null, level: -1 },
            { unit: null, level: -1 },
            { unit: null, level: -1 },
            { unit: null, level: -1 },
            { unit: null, level: -1 }
        ],
        
        hp: { current: 1, max: 1, perc: 100 },

        ship: {
            name: 'Merry Go',
            level: 5
        },

        defense: 0,

    };

    $scope.tdata = { // transitional data

        team: [
            { orb: 1, special: false },
            { orb: 1, special: false },
            { orb: 1, special: false },
            { orb: 1, special: false },
            { orb: 1, special: false },
            { orb: 1, special: false }
        ],

        customHitModifiers: null,

    };

    $scope.numbers = { };

    $scope.resetSlot = function(n,onlyTransitional) {
        if (!onlyTransitional) $scope.data.team[n] = { unit: null, level: -1 };
        $scope.tdata.team[n] = { orb: 1, special: false };
    };

};

/****************************
 * AngularJS initialization *
 ****************************/

app
    .controller('SharedRootCtrl', SharedRootCtrl);

})();
