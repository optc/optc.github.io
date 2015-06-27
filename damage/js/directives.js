(function() {

var app = angular.module('optc');

var directives = { };

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

directives.decorateSlot = function() {
    return {
        restrict: 'A',
        scope: { uid: '=', udata: '=' },
        link: function(scope, element, attrs) {
            var update = function() { 
                var target = element[0];
                if (!scope.uid && !scope.udata) {
                    target.style.backgroundImage = null;
                    target.removeAttribute('title');
                } else {
                    target.style.backgroundImage = 'url(' + Utils.getThumbnailUrl(scope.uid) + ')';
                    if (attrs.decorateSlot.indexOf('notitle') == -1)
                        target.setAttribute('title', Utils.getThumbnailTitle(scope.udata || scope.uid));
                }
            };
            scope.$watch('uid',update);
            scope.$watch('udata',update);
        }
    };
};

directives.expandableDamage = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.detailsVisible = false;
            element.click(function(e) {
                if (e.which != 1 || e.ctrlKey) return;
                element.toggleClass('details');
                if (!scope.detailsVisible) {
                    element[0].style.zIndex = 5;
                    setTimeout(function() { scope.detailsVisible = true; scope.$apply();
                    },500);
                } else {
                    scope.detailsVisible = false;
                    scope.$apply();
                    setTimeout(function() { element[0].style.zIndex = 4; },500);
                }
            });
        },
    };
};

directives.detailPane = function() {
    return {
        restrict: 'A',
        templateUrl: 'views/details.html',
        scope: true,
        link: function(scope, element, attrs) {
            var modifiers = [ 'Miss', 'Good', 'Great', 'Perfect' ];
            scope.modifyDamage = function(e,n) {
                if (e.which != 2 && (e.which != 1 || !e.ctrlKey)) return;
                var custom = $.extend([ ],scope.numbers[scope.type].hitModifiers);
                custom[n] = modifiers[(modifiers.indexOf(custom[n])+1)%4];
                scope.tdata.customHitModifiers = custom;
                e.preventDefault();
                e.stopPropagation();
                return false;
            };
        }
    };
};

directives.attachPicker = function() {
    return {
        restrict: 'A',
        scope: true,
        controller: function($scope, $state) { $scope.$state = $state; },
        link: function(scope, element, attrs) {
            element.click(function(e) {
                if (e.which != 1 || e.ctrlKey) return;
                if ($(e.target).parent().hasClass('slide') || Utils.isClickOnOrb(e,e.target)) return;
                scope.$state.go('.pick',{ slot: scope.slot });
            });
        }
    };
};

directives.defenseOnClick = function() {
    return {
        restrict: 'A',
        controller: function($scope, $state) { $scope.go = $state.go; },
        link: function(scope, element, attrs) {
            element.click(function(e) {
                if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                    scope.go('.defense');
                else if (e.which == 1)
                    element.find('input').focus();
            });
        }
    };
};

directives.shipManager = function() {
    return {
        restrict: 'A',
        scope: true,
        controller: function($scope, $state) { $scope.go = $state.go; },
        link: function(scope, element, attrs) {
            var background = element.find('#ship-background')[0];
            background.style.width = Math.round(scope.data.ship.level * 10)  + '%';
            scope.level = scope.data.ship.level;
            element.click(function(e) {
                if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                    scope.go('.ship');
            });
            var updateBackground = function(perc) {
                perc = Math.min(1,perc);
                background.style.width = Math.min(Math.round(perc * 100),100)  + '%';
                background.style.background =
                    'rgb(' + [ Math.floor(240-148*perc), Math.floor(173+11*perc), Math.floor(78+14*perc) ].join(',') + ')';
            };
            var mouseup = function(e) {
                $(document).off('mouseup');
                $(document).off('mousemove');
                scope.data.ship.level = scope.level;
                scope.$apply();
                updateBackground(scope.level / 10);
            };
            var mousemove = function(e) {
                var level = Math.max(1,Math.min(Math.round(e.clientX / 230 * 10),10));
                if (level == scope.data.ship.level) return;
                e.preventDefault();
                e.stopPropagation();
                scope.level = level;
                scope.$apply();
                updateBackground(e.clientX / 230);
            };
            element.mousedown(function(e) {
                if (e.which != 1 || e.ctrlKey) return;
                var level = Math.round(e.clientX / 230 * 10);
                $(document).mouseup(mouseup);
                $(document).mousemove(mousemove);
                scope.level = level;
                scope.$apply();
                updateBackground(e.clientX / 230);
            });
            updateBackground(scope.level / 10);
        }
    };
};

/************************
 * Component directives *
 ************************/

directives.mainController = function() {
    return {
        restrict: 'A',
        controller: 'MainCtrl'
    };
};

directives.sidebar = function() {
    return {
        restrict: 'E',
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

directives.slot = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/fragments/slot.html',
        scope: true,
        link: function(scope, element, attrs) {
            scope.slot = element.index();
        }
    };
};

directives.hpBar = function() {
    return {
        rstrict: 'A',
        replace: true,
        template: '<div id="hp"><div id="hpSlider"></div>' + 
            '<div id="hpLabel">{{ hp.current | number }} HP ({{ hp.perc || number }}%)</div></div>',
        link: function(scope, element, attrs) {
            scope.hp = { current: scope.data.hp.current, perc: scope.data.hp.perc };
            var slider = element.find('#hpSlider').noUiSlider({
                start: [ scope.data.hp.current ],
                range: { min: [ 1 ], max: [ scope.data.hp.max || 1 ] },
                connect: 'lower'
            });
            var update = function(event,value) {
                scope.hp.current = Math.floor(value);
                scope.hp.perc = Math.round(scope.hp.current / scope.data.hp.max * 10000) / 100;
                currentHP =scope.data.hp.current;
                if (event === null) slider.val(value);
                else if (event.type == 'change') {
                    scope.data.hp.current = scope.hp.current;
                    scope.data.hp.perc = scope.hp.perc;
                }
                if (!scope.$$phase) scope.$apply();
            };
            slider.on({ change: update, slide: update });
            scope.$watch('data.hp',function(hp) {
                slider.noUiSlider({ range: { min: [ 1 ], max: [ scope.data.hp.max || 1 ] } },true);
                var newHP = Math.floor(hp.perc * hp.max / 100);
                update(null,newHP);
            },true);
        }
    };
};

directives.levelLabel = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitLevel">Lv. {{ data.team[slot].level }}<input ng-show="editorVisible" ng-model="level"></input></div>',
        link: function(scope, element, attrs) {
            scope.level = scope.data.team[scope.slot].level;
            var input = element.find('input');
            element.click(function(e) {
                scope.level = '';
                if (e.which == 1 && !e.ctrlKey) {
                    if (scope.options.slidersEnabled) $('.unit').eq(scope.slot).addClass('slide');
                    else scope.editorVisible = true;
                } else if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                    scope.data.team[scope.slot].level = scope.data.team[scope.slot].unit.maxLevel;
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
                if (isNaN(level)) return;
                scope.data.team[scope.slot].level = Math.min(Math.max(1,level),scope.data.team[scope.slot].unit.maxLevel);
                scope.$apply();
            };
            input.focusout(update);
            input.keyup(update);
        }
    };
};

directives.levelSlider = function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<input disabled class="unitSlider"></input>',
        link: function(scope, element, attrs) {
            var currentValue = 0;
            var onRelease = function(value) {
                if (!value || value <= 0 || currentValue == value) return;
                currentValue = value;
                scope.data.team[scope.slot].level = value;
                scope.$apply();
            };
            var update = function(value) {
                if (!value || value <= 0 || currentValue == value) return;
                currentValue = Math.min(value,scope.data.team[scope.slot].unit ? scope.data.team[scope.slot].unit.maxLevel : 1);
                element.val(currentValue).trigger('change');
            };
            var updateMax = function(value) {
                if (!value) value = 1;
                element.trigger('configure',{ max: value });
                if (value < currentValue) update(value);
            };
            var slider = element.knob({
                width: 88,
                height: 88,
                angleOffset: -120,
                angleArc: 240,
                release: onRelease,
                min: 1,
                max: 99
            });
            scope.$watch('data.team[slot].unit.maxLevel',updateMax);
            scope.$watch('data.team[slot].level',update);
            element.parent().on('click touchend',function(e) {
                $('.unit').eq(scope.slot).removeClass('slide'); 
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
    };
};

directives.unitOrb = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitOrb {{glow()}}"><i class="fa" ng-class="{ \'fa-caret-up\': ' +
            'tdata.team[slot].orb == 2, \'fa-caret-down\': tdata.team[slot].orb == 0.5 }"></i></div>',
        link: function(scope, element, attrs) {
            scope.glow = function() {
                var unit = scope.tdata.team[scope.slot];
                if (unit.orb == 1) return 'none';
                if (unit.orb == 2) return scope.data.team[scope.slot].unit.type;
                return Utils.getOppositeType(scope.data.team[scope.slot].unit.type) + ' opposite';
            };
            var onMouseUp = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || e.target.className == 'unitLevel') return;
                if (e.which == 2 || (e.which == 1 && (e.ctrlKey || Utils.isClickOnOrb(e,e.target)))) {
                    tunit.orb = (tunit.orb == 1 ? 2 : tunit.orb == 2 ? 0.5 : 1);
                    scope.glow();
                    scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            };
            element.parent().parent().mouseup(onMouseUp);
        },
        controller: function($scope, $timeout) {
            $timeout(function() { 
                if ($scope.tdata.team[$scope.slot].orb != 1)
                    $scope.$apply();
            });
        }
    };
};

directives.special = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<li class="special" ng-show="hasSpecial"><div>{{data.team[slot].unit.name}}</div></li>',
        link: function(scope, element, attrs) {
            scope.slot = element.prevAll('.special').length;
            var isSelected = scope.tdata.team[scope.slot].special;
            var removeType = function() { ['STR','DEX','QCK','PSY','INT'].forEach(function(x) { element.removeClass(x); }); };
            scope.hasSpecial = false;
            scope.$watch('tdata.team[slot].special',function(enabled) {
                removeType();
                if (enabled) element.addClass(scope.data.team[scope.slot].unit.type);
                type = (scope.data.team[scope.slot].unit !== null ? scope.data.team[scope.slot].unit.type : null);
                isSelected = enabled;
            });
            scope.$watch('data.team[slot].unit',function(unit) {
                removeType();
                if (scope.tdata.team[scope.slot].special) element.addClass(unit.type);
                scope.hasSpecial = unit && specials.hasOwnProperty(unit.number+1);
            });
            element.click(function(e) {
                isSelected = !isSelected;
                scope.tdata.team[scope.slot].special = isSelected;
                scope.$apply();
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
