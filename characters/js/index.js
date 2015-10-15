(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize' ]);

Utils.parseUnits(false);

/********************
 * GA Configuration *
 ********************/

app
    .run(function($rootScope, $location, $window, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            $rootScope.currentState = $state.current.name;
            if (ga) ga('send', 'pageview', '/characters');
            var title = 'One Piece Treasure Cruise Character Table';
            if ($state.current.name == 'main.view')
                title = window.units[parseInt($stateParams.id,10) - 1].name + ' | ' + title;
            window.document.title = title;
        });
    });


/*****************
 * Notifications *
 *****************/

var version = JSON.parse(localStorage.getItem('charVersion')) || 1;

if (version < 2) {
    localStorage.setItem('charVersion', JSON.stringify(2));
    setTimeout(function() {
        noty({
            text: 'Some stuff changed. Refreshing the page and/or clearing your browser\'s cache may be a smart idea.',
            timeout: 10000,
            type: 'error',
            layout: 'topRight',
            theme: 'relax'
        });
    },500);
}

})();
