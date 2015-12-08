(function() {

var app = angular.module('optc');

app.factory('$exceptionHandler', function($injector) {
    return function(exception, cause) {
        var temp = (exception.stack || exception);
        var $rootScope = $injector.get('$rootScope');
        var team = '';
        if ($rootScope.data && $rootScope.data.team) {
            team = $rootScope.data.team.map(function(x) { return (!x || !x.unit) ? null : x.unit.number + 1; });
            team = '\n\n' + JSON.stringify(team);
        }
        var agent = '';
        try { agent = '\n\n' + navigator.userAgent; }
        catch (e) { }
        $rootScope.caughtException = encodeURIComponent(temp + team + agent);
    };
});

app.directive('errorReport', function($rootScope, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/views/error-report.html',
        link: function(scope, element, attrs) {
            scope.baseURL = 'https://docs.google.com/forms/d/1w40Pp8uAQm-gekiFfc8VkydmM_PFtM8qZcZokf7IzeE/viewform?entry.1585706216=';
            scope.clearError = function() {
                $timeout(function() {
                    $rootScope.caughtException = null;
                });
            };
        }
    };
});

})();
