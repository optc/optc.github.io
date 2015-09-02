(function() {

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

app.directive('type',function($compile) {
    return {
        restrict: 'E',
        scope: { type: '=', data: '=' },
        replace: true,
        templateUrl: 'type.html',
    };
});

app.directive('island',function($compile) {
    return {
        restrict: 'E',
        scope: { island: '=', data: '=', type: '=' },
        replace: true,
        templateUrl: 'island.html',
    };
});

app.directive('collapsable',function($compile) {
    return {
        restrict: 'A',
        scope: { target: '@', data: '=', type: '=', island: '=' },
        link: function(scope, element, attrs) {
            var update = function() {
                if (element.children().length > 1) {
                    while (element.children().length > 1)
                        element.children().last().remove();
                } else {
                    if (scope.target == 'type.html')
                        element.append($compile('<type type="type" data="data"></type>')(scope));
                    else
                        element.append($compile('<island type="type" island="island" data="data"></island>')(scope));
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
