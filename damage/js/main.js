(function() {

var parseUnit = function(element,n) {
    return {
        'name'    : element[0]  , 'type'     : element[1]  ,
        'class'   : element[2]  , 'stars'    : element[3]  ,
        'cost'    : element[4]  , 'maxLevel' : element[5]  ,
        'minHP'   : element[6]  , 'minATK'   : element[7]  ,
        'minRCV'  : element[8]  , 'maxHP'    : element[9]  ,
        'maxATK'  : element[10] , 'maxRCV'   : element[11] ,
        'combo'   : element[12] , 'growth'   : element[13] ,
        'number'  : n
    };
};

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $controller) {

    /* * * * * Bootstrapping * * * * */
    
    window.units = window.units.map(parseUnit);

    $scope.options = {
        slidersEnabled: true,
        sidebarVisible: false,
        crunchingEnabled: false
    };

    $scope.conflictingSpecials = false;

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
