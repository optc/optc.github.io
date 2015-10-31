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
        });


});

})();
