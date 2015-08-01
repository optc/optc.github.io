(function() {

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $controller, $filter) {

    /* * * * * Bootstrapping * * * * */
    
    Utils.parseUnits(true);

    /* * * * * Theme * * * * */

    var edgyMode = JSON.parse(localStorage.getItem('edgy')) || false;
    $('#edgy')[0].disabled = !edgyMode;

    $(document.body).dblclick(function(e) {
        if (e.target.id != 'main' && e.target.nodeName != 'BODY') return;
        edgyMode = !edgyMode;
        localStorage.setItem('edgy',JSON.stringify(edgyMode));
        $('#edgy')[0].disabled = !edgyMode;
    });

    /* * * * * Alerts * * * * */

    $scope.conflictingSpecials = false;

    $scope.$watch('conflictingSpecials',function(value) {
        if (value) {
            $scope.notify({
                text: 'Two or more specials you selected are incompatible with each other, ' + 
                    'only the strongest combination will be used.',
                type: 'error'
            });
        }
    });

    $scope.$watch('numbers.zombie',function(zombie) {
        if (zombie === undefined || zombie === null) return;
        if (zombie === false) 
            $scope.notify({ text: 'Selected zombie team will not work (HP too high)', type: 'warning' });
        else if (zombie === true)
            $scope.notify({ text: 'Selected zombie team will work', type: 'success' });
        else
            $scope.notify({ text: 'Maximum tankable damage: ' + $filter('number')(zombie) + ' HP', type: 'information' });
    });

    $scope.showGatherButton = window.units.some(function(x) { return x.growth && x.growth.atk === 0; });

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });

    $scope.notify = function(data) {
        noty($.extend(data,{ timeout: 2500, layout: 'topRight', theme: 'relax' }));
    };

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
