(function() {

var app = angular.module('optc', [ 'ui.router' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope) {

    $scope.data = {

        team: [
            { unit: null, level: -1, orb: 1 },
            { unit: null, level: -1, orb: 1 },
            { unit: null, level: -1, orb: 1 },
            { unit: null, level: -1, orb: 1 },
            { unit: null, level: -1, orb: 1 },
            { unit: null, level: -1, orb: 1 }
        ],

        specials: [
            { special: null, enabled: false },
            { special: null, enabled: false },
            { special: null, enabled: false },
            { special: null, enabled: false },
            { special: null, enabled: false },
            { special: null, enabled: false }
        ],

        captainEffects: [ null, null ],

        orbs: [ null, null, null, null, null, null ],

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
