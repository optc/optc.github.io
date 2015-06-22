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
        replace: true,
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
        scope: { slot: '=', unit: '=', options: '=' },
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

directives.levelLabel = function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="unitLevel">Lv. {{ unit.level }}<input ng-show="editorVisible" ng-model="level"></input></div>',
        link: function(scope, element, attrs) {
            scope.level = scope.unit.level;
            var input = element.find('input');
            element.click(function(e) {
                scope.level = '';
                if (e.which == 1 && !e.ctrlKey) {
                    if (scope.options.slidersEnabled) $('.unit').eq(scope.slot).addClass('slide');
                    else scope.editorVisible = true;
                } else if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                    scope.unit.level = scope.unit.unit.maxLevel;
                scope.$apply();
                if (scope.editorVisible) input.focus();
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            var update = function(e) {
                if (e.type == 'keyup' && e.which != 13) return;
                var level = parseInt(scope.level,10); 
                scope.editorVisible = false;
                scope.$apply();
                if (isNaN(level)) return;
                scope.unit.level = Math.min(Math.max(1,level),scope.unit.unit.maxLevel);
            };
            input.focusout(update);
            input.keyup(update);
        }
    };
};

/****************************
 * Directive initialization *
 ****************************/

for (var key in directives)
    app.directive(key, directives[key]);

})();
