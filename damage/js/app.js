(function() {

var app = angular.module('optc', [ 'ui.router' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope) {

    $scope.data = {

        team: [
            { unit: null, level: -1, orb: 1, special: false },
            { unit: null, level: -1, orb: 1, special: false },
            { unit: null, level: -1, orb: 1, special: false },
            { unit: null, level: -1, orb: 1, special: false },
            { unit: null, level: -1, orb: 1, special: false },
            { unit: null, level: -1, orb: 1, special: false }
        ],

        customHitModifiers: null,
        
        hp: { current: 1, max: 1, perc: 100 },

        merry: 2,
        defense: 0,

    };

    $scope.numbers = { };

};

/****************************
 * AngularJS initialization *
 ****************************/

app
    .controller('SharedRootCtrl', SharedRootCtrl)

})();
