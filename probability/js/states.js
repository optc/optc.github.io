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
         
         
        .state('main.reset',{
            views: {
                'popup@': {
                    templateUrl: 'views/popup/reset.html',
                    controller: 'ResetCtrl'
                }
            }
        })
         


});

})();
