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

    var zombieNoty = null;
    $scope.$watch('numbers.zombie',function(zombie) {
        if (zombieNoty !== null) zombieNoty.close();
        if (zombie === undefined || zombie === null) return;
        if (zombie < 0) 
            zombieNoty = $scope.notify({ timeout: 0, type: 'warning',
                text: 'Selected zombie team will not work (HP is too high, maximum HP allowed: ' + $filter('number')(-zombie) + ')' });
        else if (zombie === true)
            zombieNoty = $scope.notify({ timeout: 0, type: 'success',
                text: 'Selected zombie team will work' });
        else if (zombie > 0)
            zombieNoty = $scope.notify({ timeout: 0, type: 'information',
                text: 'Maximum tankable damage: ' + $filter('number')(zombie) + ' HP',});
    });

    $scope.showGatherButton = window.units.some(function(x) { return x.growth && x.growth.atk === 0; });

    /* * * * * Notifications * * * * */

    var notifications = { };

    $scope.notify = function(data) {
        data = $.extend({ type: 'information' },data);
        if (data.name && notifications[data[name]]) notifications[data[name]].close(); 
        var notification = noty($.extend({ timeout: 2500, layout: 'topRight', theme: 'relax' }, data));
        if (data.name) notifications[data[name]] = notification;
        return notification;

    };

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
