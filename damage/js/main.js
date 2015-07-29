(function() {

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[14].constructor != Array) element[14] = [ element[14], element[14], element[14] ];
    return {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        maxEXP  : element[13] , growth   : {
            hp  : element[14][0],
            atk : element[14][1],
            rcv : element[14][2]
        }
    };
};

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $controller, $filter) {

    /* * * * * Bootstrapping * * * * */
    
    window.units = window.units.map(parseUnit);

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
