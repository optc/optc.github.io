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

directives.autoFocus = function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
		}
	};
};

directives.slot = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: { slot: '=', unit: '=' },
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

directives.decorateSlot = function() {
    return {
        restrict: 'A',
        scope: { uid: '=' },
        link: function(scope, element, attrs) {
            var update = function(uid) { 
                if (!uid) return;
                var target = element[0];
                target.style.backgroundImage = 'url(' + Utils.getThumbnailUrl(uid) + ')';
                target.setAttribute('title', Utils.getThumbnailTitle(uid));
            };
            scope.$watch('uid',update);
            update();
        }
    };
};

directives.hpBar = function() {
    return {
        rstrict: 'A',
        replace: true,
        template: '<div id="hp"><div id="hpSlider"></div>' + 
            '<div id="hpLabel">{{ data.hp.current | number }} HP ({{ data.hp.perc || number }}%)</div></div>',
        link: function(scope, element, attrs) {
            var slider = element.find('#hpSlider').noUiSlider({
                start: [ scope.data.hp.current ],
                range: { min: [ 1 ], max: [ scope.data.hp.max ] },
                connect: 'lower'
            });
            var update = function(event,value) {
                scope.data.hp.current = Math.floor(value);
                scope.data.hp.perc = Math.round(scope.data.hp.current / scope.data.hp.max * 10000) / 100;
                scope.$apply();
            };
            slider.on({ change: update, slide: update });
            scope.$watch('data.hp.max',function() {
                slider.noUiSlider({ range: { min: [ 1 ], max: [ scope.data.hp.max ] } },true);
            });
        }
    };
};

/****************************
 * Directive initialization *
 ****************************/

for (var key in directives)
    app.directive(key, directives[key]);

})();
