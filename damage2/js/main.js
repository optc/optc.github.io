(function() {

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[13].constructor != Array) element[13] = [ element[13], element[13], element[13] ];
    return {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        growth  : {
            hp  : element[13][0],
            atk : element[13][1],
            rcv : element[13][2]
        }
    };
};

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $controller) {

    /* * * * * Bootstrapping * * * * */
    
    window.units = window.units.map(parseUnit);

    $scope.conflictingSpecials = false;

    $scope.showGatherButton = window.units.some(function(x) { return x.growth.atk === 0; });

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
