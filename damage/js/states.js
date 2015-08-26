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
            url: 'reset',
            views: {
                popup: {
                    templateUrl: 'views/popup/reset.html',
                    controller: 'ResetCtrl'
                }
            }
        })

        .state('main.profile',{
            url: 'profiles',
            views: {
                popup: {
                    templateUrl: 'views/popup/profiles.html',
                    controller: 'ProfileCtrl'
                }
            }
        })
        
        .state('main.gather',{
            url: 'gather',
            views: {
                popup: {
                    templateUrl: 'views/popup/gather.html',
                    controller: function($scope) {
                        $scope.units = window.units.filter(function(x) { return x.growth && x.growth.atk === 0; });
                    }
                }
            }
        })

        .state('main.candy',{
            url: 'candies',
            views: {
                popup: {
                    template: '<div class="backdrop middle-backdrop" ui-sref="main"></div>'
                }
            }
        })

        .state('main.candy.pick',{
            views: {
                'popup@main': {
                    templateUrl: 'views/popup/candies.html',
                    controller: 'CandyCtrl'
                }
            },
            params: { slot: 0 }
        })
        
        .state('main.transfer',{
            url: 'transfer/:data',
            views: {
                'popup@main': {
                    template: '<div></div>',
                    controller: 'TransferCtrl'
                }
            },
        });

});

})();
