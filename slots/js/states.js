(function() {

angular.module('optc').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('main',{
            url: '^/',
            views: {
                '': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                },
                'summary@main': {
                    templateUrl: 'views/summary.html',
                    controller: 'SummaryCtrl'
                }
            }
        })

        .state('main.pick',{
            views: {
                'popup@': {
                    templateUrl: 'views/picker.html',
                    controller: 'PickerCtrl'
                }
            },
            params: { unit: 0 }
        })
         
        .state('main.transfer',{
            url: 'transfer/:data',
            views: {
                'popup@': {
                    template: '<div></div>',
                    controller: 'ImportCtrl'
                }
            }
        })
         
        .state('main.save',{
            url: 'save',
            views: {
                'popup@': {
                    templateUrl: 'views/popup/save.html',
                    controller: 'SlotsCtrl'
                }
            }
        })
         
        .state('main.load',{
            url: 'load',
            views: {
                'popup@': {
                    templateUrl: 'views/popup/load.html',
                    controller: 'SlotsCtrl'
                }
            }
        })
         
        .state('main.reset',{
            views: {
                'popup@': {
                    templateUrl: 'views/popup/reset.html',
                    controller: 'ResetCtrl'
                }
            }
        });
         
        //.state('main.image',{
            //views: {
                //'popup@': {
                    //templateUrl: 'views/popup/image.html',
                    //controller: 'ImageCtrl'
                //}
            //}
        //});

});

})();
