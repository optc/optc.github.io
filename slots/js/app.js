(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngDialog' ]);

Utils.parseUnits(false);

/******************
 * STATE HANDLING *
 ******************/

app
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            var state = $state.current.name;
            $rootScope.isPopupVisible = (state != 'main');
        });
    });

})();
