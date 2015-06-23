(function() {

    var DefenseCtrl = function($scope, $state, $stateParams) { 

        $scope.$watch('query',function() {
            var regex = new RegExp($scope.query || '','i');
            $scope.list = defenses.filter(function(x) { return regex.test(x[0]); });
        });

        $scope.pickDefense = function(defense) {
            $scope.data.defense = defense[3];
            $state.go('^');
        };

        $scope.list = [ ];
        $scope.query = '';

    };

    var defenseOnClick = function() {
        return {
            restrict: 'A',
            controller: function($scope, $state) { $scope.go = $state.go; },
            link: function(scope, element, attrs) {
                element.click(function(e) {
                    if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                        scope.go('.defense');
                    else if (e.which == 1)
                        element.find('input').focus();
                });
            }
        };
    };

    angular.module('optc')
        .controller('DefenseCtrl', DefenseCtrl)
        .directive('defenseOnClick', defenseOnClick);

})();
