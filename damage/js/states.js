(function() {

angular.module('optc').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('main',{
            url: '/',
            templateUrl: 'views/content.html',
            controller: 'MainCtrl'
        })

        .state('main.pick',{
            url: 'pick',
            views: {
                popup: {
                    templateUrl: 'views/popup/picker.html',
                    controller: 'PickerCtrl'
                }
            },
            params: { slot: 0 }
        })

        .state('main.defense',{
            url: 'defense',
            views: {
                popup: {
                    templateUrl: 'views/popup/defense.html',
                    controller: 'DefenseCtrl'
                }
            }
        })

        .state('main.loadSlot',{
            url: 'load',
            views: {
                popup: {
                    templateUrl: 'views/popup/loadslot.html',
                    controller: 'SlotsCtrl'
                }
            }
        })

        .state('main.saveSlot',{
            url: 'save',
            views: {
                popup: {
                    templateUrl: 'views/popup/saveslot.html',
                    controller: 'SlotsCtrl'
                }
            }
        })

        .state('main.ship',{
            url: 'ship',
            views: {
                popup: {
                    templateUrl: 'views/popup/ships.html',
                    controller: 'ShipCtrl'
                }
            }
        })

        .state('main.reset',{
            views: {
                popup: {
                    templateUrl: 'views/popup/reset.html',
                    controller: 'ResetCtrl'
                }
            }
        });

});

})();
