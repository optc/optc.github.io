/* jshint eqnull: true */

(function() {

var app = angular.module('optc');

var directives = { }, filters = { };

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

directives.decorateSlot = function($rootScope) {
    return {
        restrict: 'A',
        scope: { uid: '=', udata: '=', flag: '@' },
        link: function(scope, element, attrs) {
            var update = function() { 
                var target = element[0];
                if (scope.uid == null && scope.udata == null) {
                    target.style.backgroundImage = null;
                    target.removeAttribute('title');
                } else {
                    if (scope.uid != 1 || scope.flag || (scope.udata && scope.udata.name == 'Monkey D. Luffy'))
                        target.style.backgroundImage = 'url(' + Utils.getThumbnailUrl(scope.uid) + ')';
                    else
                        target.style.backgroundImage = null;
                    if (attrs.decorateSlot.indexOf('notitle') == -1)
                        target.setAttribute('title', Utils.getThumbnailTitle(scope.udata || (scope.uid - 1)));
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
            var timeout = null;
            element.click(function(e) {
                if (e.which != 1 || e.ctrlKey) return;
                element.toggleClass('details');
                if (timeout) clearTimeout(timeout);
                if (element.hasClass('details')) {
                    element[0].style.zIndex = 5;
                    timeout = setTimeout(function() { scope.detailsVisible = true; scope.$apply(); },500);
                } else {
                    scope.detailsVisible = false;
                    scope.$apply();
                    timeout = setTimeout(function() { element[0].style.zIndex = 4; },500);
                }
            });
        },
    };
};

directives.detailPane = function($timeout) {
    return {
        restrict: 'A',
        templateUrl: 'views/details.html',
        scope: true,
        link: function(scope, element, attrs) {
            var modifiers = [ 'Miss', 'Good', 'Great', 'Perfect' ];
            var modifyDamage = function(e) {
                var container = $(e.target).parent();
                if (!container.hasClass('turnContainer')) return;
                var custom = $.extend([ ],scope.numbers[scope.type].hitModifiers), n = container.parent().index();
                custom[n] = modifiers[(modifiers.indexOf(custom[n])+1)%4];
                scope.tdata.customHitModifiers = custom;
                if (!scope.$$phase) scope.$apply();
            };
            element.longpress(
                function(e) {
                    modifyDamage(e);
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                },
                function(e) {
                    if (e.which != 2 && (e.which != 1 || !e.ctrlKey)) return;
                    modifyDamage(e);
                }
            );
        }
    };
};

directives.attachPicker = function() {
    return {
        restrict: 'A',
        scope: true,
        controller: function($scope, $state) { $scope.$state = $state; },
        link: function(scope, element, attrs) {
            element.longpress(function() { },function(e) {
                if (e.which != 1 || e.ctrlKey || e.altKey || e.shiftKey) return;
                if ($(this).hasClass('slide') || $(this).hasClass('dragging')) return;
                if (!$(this).hasClass('empty') && Utils.isClickOnOrb(e,$(this).find('.unitContainer')[0])) return;
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
            element.longpress(
                function(e) { scope.go('.defense'); },
                function(e) {
                    if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                        scope.go('.defense');
                    else if (e.which == 1)
                        element.find('input').focus();
                }
            );
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
            background.style.width = Math.round(scope.data.ship[1] * 10)  + '%';
            scope.level = scope.data.ship[1];
            element.longpress(
                function(e) { scope.go('.ship'); },
                function(e) {
                    if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                        scope.go('.ship');
                }
            );
            var updateBackground = function(perc) {
                if (perc === undefined || perc === null) return;
                if (perc.constructor == Array) perc = perc[1] / 10;
                perc = Math.min(1,perc);
                background.style.width = Math.min(Math.round(perc * 100),100)  + '%';
                background.style.background =
                    'rgb(' + [ Math.floor(240-148*perc), Math.floor(173+11*perc), Math.floor(78+14*perc) ].join(',') + ')';
            };
            var mouseup = function(e) {
                $(document).off('mouseup');
                $(document).off('mousemove');
                scope.data.ship[1] = scope.level;
                scope.$apply();
                updateBackground(scope.level / 10);
            };
            var mousemove = function(e) {
                var level = Math.max(1,Math.min(Math.round(e.clientX / 230 * 10),10));
                if (level == scope.data.ship[1]) return;
                e.preventDefault();
                e.stopPropagation();
                scope.level = level;
                scope.$apply();
                updateBackground(e.clientX / 230);
            };
            element.mousedown(function(e) {
                if (e.which != 1 || e.ctrlKey) return;
                var level = Math.max(1,Math.round(e.clientX / 230 * 10));
                $(document).mouseup(mouseup);
                $(document).mousemove(mousemove);
                scope.level = level;
                scope.$apply();
                updateBackground(e.clientX / 230);
            });
            updateBackground(scope.level / 10);
            scope.$watch('data.ship', updateBackground, false);
        }
    };
};

directives.animate = function() {
    return {
        restrict: 'A',
        scope: { animation: '@' },
        link: function(scope, element, attrs) {
            setTimeout(function() {
                element.addClass('animated');
                element.addClass(scope.animation);
            },1000);
        }
    };
};

directives.floatingHeader = function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $timeout(function() { 
                element.floatThead({
                    scrollContainer: function($table) {
                        return $table.closest('#picker + .modal-div');
                    }
                });
            });
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
        replace: true,
        link: function(scope, element, attrs) {
            scope.profiles = window.profiles;
            scope.ships = window.ships;
        }
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
            '<div id="hp-rcv"><table><tbody>' +
                '<tr><td>{{ hp.current | number }}</td><td>HP ({{ hp.perc || number }}%)</td></tr>' +
                '<tr><td>{{ numbers.rcv | number }}</td><td>RCV</td></tr>' +
                '<tr title="Minimum pirate level: {{ numbers.cost.level }}"><td>{{ numbers.cost.cost | number }}</td><td>cost</td></tr>' +
            '</tbody></table></div>',
        link: function(scope, element, attrs) {
            scope.hp = { current: Math.max(1,Math.floor(scope.numbers.hp * scope.data.percHP / 100)), perc: scope.data.percHP };
            var slider = element.find('#hpSlider').noUiSlider({
                start: [ scope.hp.current ],
                range: { min: [ 1 ], max: [ scope.numbers.hp || 1 ] },
                connect: 'lower'
            });
            var update = function(event,value) {
                scope.hp.current = Math.floor(value);
                scope.hp.perc = Math.round(scope.hp.current / scope.numbers.hp * 10000) / 100;
                currentHP = scope.hp.current;
                if (event === null) slider.val(value);
                else if (event.type == 'change') scope.data.percHP = scope.hp.perc;
                if (event && !scope.$$phase) scope.$apply();
            };
            slider.on({ change: update, slide: update });
            scope.$watch('numbers.hp',function(hp) {
                slider.noUiSlider({ range: { min: [ 1 ], max: [ hp || 1 ] } },true);
                var newHP = Math.floor(scope.data.percHP * hp / 100);
                update(null,newHP);
            },true);
        }
    };
};

directives.levelLabel = function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitLevel">Lv. {{ data.team[slot].level }}<input type="number" ng-show="editorVisible" ng-model="level"></input></div>',
        link: function(scope, element, attrs) {
            scope.level = scope.data.team[scope.slot].level;
            var input = element.find('input');
            element.longpress(function() { },function(e) {
                scope.level = '';
                if (e.which <= 1 && !e.ctrlKey) {
                    if (scope.options.slidersEnabled) $('.unit').eq(scope.slot).addClass('slide');
                    else scope.editorVisible = true;
                } else if (e.which == 2 || (e.which == 1 && e.ctrlKey))
                    scope.data.team[scope.slot].level = scope.data.team[scope.slot].unit.maxLevel;
                scope.$apply();
                if (scope.editorVisible)
                    $timeout(function() { input.focus(); });
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

directives.levelSlider = function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        template: '<input disabled class="unitSlider"></input>',
        link: function(scope, element, attrs) {
            var currentValue = 0, immediateValue = 0;
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
                change: function(value) { immediateValue = value; },
                min: 1,
                max: 99
            });
            scope.$watch('data.team[slot].unit.maxLevel',updateMax);
            scope.$watch('data.team[slot].level',update);
            element.parent().on('click touchend',function(e) {
                $('.unit').eq(scope.slot).removeClass('slide'); 
                if (e.type == 'touchend') onRelease(Math.round(immediateValue));
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
            var onShortPress = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || e.target.className == 'unitLevel' || e.altKey || e.shiftKey) return;
                if (e.which == 2 || (e.which == 1 && (e.ctrlKey || Utils.isClickOnOrb(e,e.target.parentNode)))) {
                    tunit.orb = (tunit.orb == 1 ? 2 : tunit.orb == 2 ? 0.5 : 1);
                    scope.glow();
                    scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            };
            var onLongPress = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                tunit.orb = (tunit.orb == 1 ? 2 : tunit.orb == 2 ? 0.5 : 1);
                scope.glow();
                scope.$apply();
                e.preventDefault();
                e.stopPropagation();
                return false;
            };
            element.parent().longpress(onLongPress,onShortPress);
        },
        controller: function($scope, $timeout) {
            $timeout(function() { 
                if ($scope.tdata.team[$scope.slot].orb != 1)
                    $scope.$apply();
            });
        }
    };
};

directives.unitChain = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitChain" ng-class="{ active: tdata.team[slot].lock > 0 }"></div>',
        link: function(scope, element, attrs) {
            var parent = element.parent();
            scope.$watch('tdata.team[slot].lock',function(lock) {
                if (lock > 0) parent.addClass('gray');
                else parent.removeClass('gray');
            });
            var onMouseUp = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || e.target.className == 'unitLevel') return;
                if (e.which == 1 && e.altKey && !Utils.isClickOnOrb(e,e.target.parentNode)) {
                    tunit.lock = (tunit.lock > 0 ? 0 : 2);
                    scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            };
            element.parent().mouseup(onMouseUp);
        }
    };
};

directives.unitSilence = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitSilence" ng-class="{ active: tdata.team[slot].silence > 0 }"></div>',
        link: function(scope, element, attrs) {
            var parent = element.parent();
            var onMouseUp = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || e.target.className == 'unitLevel') return;
                if (e.which == 1 && e.shiftKey && !Utils.isClickOnOrb(e,e.target.parentNode)) {
                    tunit.silence = (tunit.silence > 0 ? 0 : 2);
                    scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            };
            element.parent().mouseup(onMouseUp);
        }
    };
};

directives.unitCandies = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitCandies">{{text}}</div>',
        link: function(scope, element, attrs) {
            var update = function(data) {
                var total = !data ? 0 : data.hp + data.atk + data.rcv;
                scope.text = (total > 0 ? '+' + total : '');
            };
            scope.$watch('data.team[slot].candies',update,true);
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
                var unit = scope.data.team[scope.slot].unit;
                if (enabled) element.addClass(unit.type);
                type = (unit ? unit.type : null);
                isSelected = enabled;
                if (enabled && window.specials[unit.number+1].warning)
                    scope.notify({ text: window.specials[unit.number+1].warning, type: 'warning' });
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
                scope.$emit('specialToggled', scope.slot, isSelected);
            });
        }
    };
};

directives.candySlider = function($compile) {
    return {
        restrict: 'E',
        replace: true,
        template: '<input disabled class="candySlider"></input>',
        scope: { data: '=', type: '@' },
        link: function(scope, element, attrs) {
            scope.actualBonus = 0;
            var currentValue = scope.data[scope.type];
            var update = function(value) {
                if (value == currentValue) return;
                currentValue = value;
                scope.data[scope.type] = value;
                scope.actualBonus = value * { hp: 5, atk: 2, rcv: 1 }[scope.type];
                scope.$apply();
            };
            var updateMax = function(data) {
                var used = Object.keys(data).reduce(function(prev,next) { return prev + (next == scope.type ? 0 : data[next]); },0);
                element.trigger('configure',{ max: Math.min(100,200 - used) });
                currentValue = data[scope.type];
                element.val(currentValue).trigger('change');
                scope.actualBonus = currentValue * { hp: 5, atk: 2, rcv: 1 }[scope.type];
            };
            var slider = element.knob({
                width: 112,
                height: 112,
                min: 0,
                max: 100,
                angleOffset: 20,
                angleArc: 320,
                release: update,
                fgColor: { hp: '#fcac68', atk: '#fb6f64', rcv: '#7feb9f' }[scope.type]
            });
            element.val(currentValue).trigger('change');
            element.parent().append($compile('<span class="candyLabel">+{{actualBonus}} ' + scope.type.toUpperCase() + '</span>')(scope));
            scope.$watch('data',updateMax,true);
        }
    };
};

directives.urlContainer = function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="urlContainer" ng-class="{ visible: tdata.url }"><input type="text" ng-value="tdata.url"></input></div>',
        link: function(scope, element, attrs) {
            var input = element.find('input');
            scope.$watch('tdata.url',function(url) {
                if (!url) return;
                input.select();
            });
        }
    };
};

directives.linkButton = function() {
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
};

/***********
 * Filters *
 ***********/

filters.range = function() {
    return function(input, total) {
        total = parseInt(total,10);
        for (var i=0;i<total;++i) input.push(i);
        return input;
    };
};

filters.decorate = function() {
    return function(input) {
        if (!input) return 'None';
        return input
            .replace(/\[?(STR|DEX|QCK|PSY|INT|TND)\]?/g,'<span class="mini-type $1">$1</span>')
            .replace(/\[RCV\]/g,'<span class="mini-type RCV">RCV</span>');

    };
};

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

for (var filter in filters)
    app.filter(filter, filters[filter]);

})();
