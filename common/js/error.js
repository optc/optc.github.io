(function() {

var app = angular.module('optc');

app.factory('$exceptionHandler', function($injector) {
    return function(exception, cause) {
        var temp = (exception.stack || exception);
        var $rootScope = $injector.get('$rootScope');
        if ($rootScope.data) {
            var team = $rootScope.data.team.map(function(x) {
                return jQuery.extend({ }, x, { unit: x.unit.number + 1 });
            });
            var data = jQuery.extend({ }, $rootScope.data, { team: team });
            temp += '\n\n' + JSON.stringify(data);
        }
        if ($rootScope.tdata)
            temp += '\n\n' + JSON.stringify($rootScope.tdata);
        try {
            temp += '\n\n' + navigator.userAgent;
        } catch (e) { }
        try {
            temp += '\n\n' + window.location.pathname + window.location.hash;
        } catch (e) { }
        $rootScope.caughtException = encodeURIComponent(temp);
    };
});

app.directive('errorReport', function($rootScope, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/views/error-report.html',
        link: function(scope, element, attrs) {
            scope.baseURL = 'https://discord.gg/MRhRrbF';
            scope.clearError = function() {
                $timeout(function() {
                    $rootScope.caughtException = null;
                });
            };
        }
    };
});

})();
