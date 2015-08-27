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

app.directive('expandable',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.find('> h3').click(function(e) {
                if (e.which != 1) return;
                element.toggleClass('expanded');
                if (!element.hasClass('expanded'))
                    element[0].style.maxHeight = null;
                else {
                    var height = element.find('> table').outerHeight();
                    element[0].style.maxHeight = (60 + height) + 'px';
                    addImages(element);
                }
            });
        }
    };
});

app.directive('collapsable',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var update = function() {
                element.toggleClass('collapsed');
                if (element.hasClass('collapsed'))
                    element[0].style.maxHeight = (10 + element.find('> h2').outerHeight()) + 'px';
                else {
                    element[0].style.maxHeight = null;
                    addImages(element);
                }
            };
            element.find('> h3, > h2').click(function(e) {
                if (e.which != 1) return;
                update();
            });
            update();
        }
    };
});

app.directive('linkButton',function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/links.html',
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                $(".menu").toggleClass("active"); 
            });
        }
    };
});

})();
