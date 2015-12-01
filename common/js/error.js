(function() {

var app = angular.module('optc');

app.factory('$exceptionHandler', function($injector) {
    return function(exception, cause) {
        var temp = (exception.stack || exception);
        $injector.get('$rootScope').caughtException = encodeURIComponent(temp);
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
