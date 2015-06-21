(function() {

var app = angular.module('optc');

var directives = { };

/*************************
 * Controller directives *
 *************************/

directives.mainController = function() {
    return {
        restrict: 'A',
        controller: 'MainCtrl'
    };
};

directives.sidebar = function() {
    return {
        restrict: 'E',
        controller: 'SidebarCtrl',
        templateUrl: 'views/sidebar.html',
        replace: true
    };
};

directives.cruncher = function() {
    return {
        restrict: 'E',
        controller: 'CruncherCtrl',
        templateUrl: 'views/results.html',
        replace: true
    };
};

directives.units = function() {
    return {
        restrict: 'E',
        templateUrl: 'views/units.html',
        replace: true
    };
};

/*****************
 * UI directives *
 *****************/

directives.slot = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: { index: '=', team: '=' },
        templateUrl: function(element, attrs) {
            return 'views/fragments/slot.html';
        },
        link: function(scope, element, attrs) {
            element.find('.unitSlider').knob({
                width: 88,
                height: 88,
                angleOffset: -120,
                angleArc: 240,
                //release: onSlideRelease
            });
        }
    };
};

directives.slotBackground = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element[0].style.backgroundImage =
                'url(' + Utils.getThumbnailUrl(parseInt(attrs.slotBackground,10)) + ')';
        }
    };
};

directives.slotTitle = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.attr('title', Utils.getThumbnailTitle(parseInt(attrs.slotBackground,10)));
        }
    };
};

/****************************
 * Directive initialization *
 ****************************/

for (var key in directives)
    app.directive(key, directives[key]);

})();
