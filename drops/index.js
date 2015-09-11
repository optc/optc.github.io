(function() {

Utils.parseUnits(false);

var addImages = function(target) {
    target.find('> table [data], h3 [data]').each(function(n,x) {
        x.style.backgroundImage = 'url(' + x.getAttribute('data') + ')';
        x.removeAttribute('data');
    });
};

var app = angular.module('optc', [ ]);

app.controller('MainCtrl',function($scope, $timeout) {
    $scope.data = drops;
    $scope.identity = angular.identity;
    $scope.reverse = function(x) { return -x; };
    $scope.hiddenUnits = [ ];
    $scope.changeFilters = function() {
        $scope.hiddenUnits = [ ];
        for (var i=0;i<units.length;++i) {
            $scope.hiddenUnits[i+1] = ($scope.noFodder && Utils.isFodder(window.units[i])) ||
                ($scope.noEvolverBooster && Utils.isEvolverBooster(window.units[i]));
        }
        if (!$scope.$$phase) $scope.$apply();
    };
});

app.directive('decorateSlot',function() {
    return {
        restrict: 'A',
        scope: { uid: '=', big: '@', delay: '@' },
        link: function(scope, element, attrs) {
            var url = scope.big ? Utils.getBigThumbnailUrl(scope.uid) : Utils.getThumbnailUrl(scope.uid);
            if (scope.delay) element[0].setAttribute('data',url);
            else element[0].style.backgroundImage = 'url(' + url + ')';
        }
    };
});

app.directive('type',function() {
    return {
        restrict: 'E',
        scope: { type: '=', data: '=', hiddenUnits: '=' },
        replace: true,
        templateUrl: 'type.html'
    };
});

app.directive('island',function() {
    return {
        restrict: 'E',
        scope: { island: '=', data: '=', type: '=', hiddenUnits: '=' },
        replace: true,
        templateUrl: 'island.html'
    };
});

app.directive('collapsable',function($compile) {
    return {
        restrict: 'A',
        scope: { target: '@', data: '=', type: '=', island: '=', hiddenUnits: '=' },
        link: function(scope, element, attrs) {
            var update = function() {
                if (element.children().length > 1) {
                    while (element.children().length > 1)
                        element.children().last().remove();
                } else {
                    if (scope.target == 'type.html')
                        element.append($compile('<type type="type" data="data" hidden-units="hiddenUnits"></type>')(scope));
                    else
                        element.append($compile('<island type="type" island="island" data="data" hidden-units="hiddenUnits"></island>')(scope));
                }
                element.toggleClass('collapsed');
            };
            element.find('> h3, > h2').click(function(e) {
                if (e.which != 1) return;
                update();
            });
        }
    };
});

app.directive('hideWhenEmpty',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var observer = new MutationObserver(function(e) {
               if (element.children().length === 0) element.parent().hide();
               else element.parent().show();
            });
            observer.observe(element[0],{ childList: true });
        }
    };
});

app.directive('linkButton',function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/links.html',
        scope: { exclude: '@' },
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                $(".menu").toggleClass("active"); 
            });
        }
    };
});

})();
