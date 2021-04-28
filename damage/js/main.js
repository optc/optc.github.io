(function() {

/* * * * * Bootstrapping * * * * */

if (window.hasOwnProperty('units')) Utils.parseUnits(true);
else window.addEventListener('load',function() { Utils.parseUnits(true); },false);

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $rootScope, $controller, $filter, $storage) {

    /* * * * * Theme * * * * */

    var edgyMode = $storage.get('edgy', false);
    $('#edgy')[0].disabled = !edgyMode;

    $(document.body).dblclick(function(e) {
        if (e.target.id != 'main' && e.target.nodeName != 'BODY') return;
        edgyMode = !edgyMode;
        $storage.set('edgy', edgyMode);
        $('#edgy')[0].disabled = !edgyMode;
    });

    /* * * * * Alerts * * * * */

    $scope.conflictingSpecials = false;

    $scope.$watch('conflictingSpecials',function(value) {
        if (value) {
            $scope.notify({
                text: 'Two or more specials you selected are incompatible with each other, ' + 
                    'trying to compute the strongest combination.',
                type: 'error'
            });
        }
    });
    
    $scope.$watch('conflictingMultipliers',function(value) {
        if (value) {
            $scope.notify({
                text: 'Only one Static Attack Multiplier may be active at a time,'+
                        'please check yourself which combination is better.',
                type: 'error'
            });
        }
    });

    var zombieNoty = null;
    $scope.$watch('numbers.zombie',function(zombie) {
        if (zombieNoty !== null) zombieNoty.close();
        if (zombie === undefined || zombie === null) return;
        if (zombie[0] == 'zombie' && !zombie[1]) 
            zombieNoty = $scope.notify({ timeout: 0, type: 'warning',
                text: 'Selected zombie team will not work (HP is too high, maximum HP allowed: ' + $filter('number')(zombie[2]) + ')' });
        else if (zombie[0] === 'zombie' && zombie[1])
            zombieNoty = $scope.notify({ timeout: 0, type: 'success',
                text: 'Selected zombie team will work (maximum HP allowed: ' + $filter('number')(zombie[2]) + ')' });
        else if (zombie[0] == 'reducer')
            zombieNoty = $scope.notify({ timeout: 0, type: 'information',
                text: 'Maximum tankable damage: ' + $filter('number')(zombie[1]) + ' HP per turn',});
    });

    $scope.showGatherButton = window.units.some(function(x) { return !x.incomplete && x.growth && x.growth.atk === 0; });

    /* * * * * Notifications * * * * */

    var notifications = { };

    $rootScope.notify = function(data) {
        data = jQuery.extend({ type: 'information' },data);
        if (data.name && notifications[data[name]]) notifications[data[name]].close(); 
        var notification = noty(jQuery.extend({ timeout: 2500, layout: 'topRight', theme: 'relax' }, data));
        if (data.name) notifications[data[name]] = notification;
        return notification;

    };

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });
    $controller('DismissalCtrl');

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
