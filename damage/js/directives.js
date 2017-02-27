/* jshint eqnull: true */

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

directives.decorateSlot = function($rootScope) {
    return {
        restrict: 'A',
        scope: { uid: '=', udata: '=', flag: '@' },
        link: function(scope, element, attrs) {
            var update = function() { 
                var target = element[0];
                if (scope.uid == null && scope.udata == null) {
                    target.style.backgroundImage = 'url(' + Utils.getThumbnailUrl(null) + ')';
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

directives.expandableDamage = function($sce) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.detailsVisible = false;
            var timeout = null;
            element.attr('type', scope.type);
            element.click(function(e) {
                if (e.which != 1 || e.ctrlKey || e.metaKey || e.shiftKey) return;
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
            scope.getApproxTimingBonus = function(data) {
                return { Perfect: '1.90', Great: '1.60', Good: '1.30' }[data];
            };
            scope.getSubtotal = function(type, n) {
                if (!scope.numbers || !scope.numbers[type] || !scope.numbers[type].damage) return 0;
                return scope.numbers[type].damage.slice(0, n+1).reduce(function(p,n) { return p + n.damage; },0);
            };
        },
    };
};

directives.detailPane = function($timeout) {
    return {
        restrict: 'A',
        templateUrl: 'views/details.html',
        scope: true,
        link: function(scope, element, attrs) {

            var modifiers = [ 'Below Good', 'Good', 'Great', 'Perfect', 'Miss' ];
            var types = [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ];

            var modifyDamage = function(e) {
                var container = $(e.target).closest('.turnContainer');
                if (!container.length) return;
                var custom = jQuery.extend([ ],scope.numbers[scope.type].hitModifiers), n = container.index();
                custom[n] = modifiers[(modifiers.indexOf(custom[n])+1)%5];
                scope.tdata.customHitModifiers = custom;
                if (!scope.$$phase) scope.$apply();
            };

            var modifyType = function(e) {
                var container = $(e.target).closest('.turnContainer');
                if (!container.length) return;
                var typeOverride = scope.tdata.typeOverride, n = container.index();
                var currentType = (typeOverride[scope.type] ? typeOverride[scope.type][n] || scope.type : scope.type);
                var nextType = types[(types.indexOf(currentType) + 1) % types.length];
                if (!scope.tdata.typeOverride[scope.type]) scope.tdata.typeOverride[scope.type] = [ ];
                scope.tdata.typeOverride[scope.type][n] = nextType;
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
                    if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey)))
                        modifyDamage(e);
                    else if (e.which == 1 && e.shiftKey)
                        modifyType(e);
                }
            );

            scope.onDrop = function(i,j) {
                var type = $('.details').attr('type');
                if (!scope.tdata.orderOverride.hasOwnProperty(type))
                    scope.tdata.orderOverride[type] = scope.numbers[type].damage.map(function(x) { return x.position; });
                var temp = scope.tdata.orderOverride[type][i];
                scope.tdata.orderOverride[type][i] = scope.tdata.orderOverride[type][j];
                scope.tdata.orderOverride[type][j] = temp;
                if (!scope.$$phase) scope.$apply();
            };

            scope.stopPropagation = function(dropped) {
                return !dropped;
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
            element.longpress(function() { },function(e) {
                if (e.which != 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
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
                    if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey)))
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
                    if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey)))
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
                if (e.which != 1 || e.ctrlKey || e.metaKey || $(e.target).hasClass('comodity')) return;
                var level = Math.max(1,Math.min(Math.round(e.clientX / 230 * 10),10));
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

directives.goBack = function($state) {
	return {
		restrict: 'A',
        link: function(scope, element, attrs) {
            element.click(function(e) {
                if (!e.target || e.target.className.indexOf('inner-container') == -1) return;
                $state.go('^');
            });
        }
    };
};

directives.quickPick = function() {
	return {
		restrict: 'A',
        link: function(scope, element, attrs) {
            var fuse = new Fuse(window.units, { keys: [ 'name' ], id: 'number', threshold: 0.3, distance: 200 });
            element.textcomplete([{
                match: /^(\w{2,})$/m,
                index: 1,
                search: function(term, callback) {
                    var result = [ ];
                    try { result = fuse.search(term); }
                    catch (e) { }
                    callback(result.slice(0,7).filter(function(x) { return x > 0; }));
                },
                template: function (value) {
                    var thumb = Utils.getThumbnailUrl(value + 1);
                    return '<span><img class="quickpick-icon" src="' + thumb + '"> ' + window.units[value].name + '</span>';
                },
                replace: function(value) {
                    return window.units[value].name;
                },
            }]);
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
            scope.effects = window.effects;
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
        template: '<div id="units"><slot></slot><slot></slot><slot></slot><slot></slot><slot></slot><slot></slot></div>',
        replace: true,
        scope: true,
        link: function(scope, element, attrs) {
            scope.stopPropagation = function(dropped) {
                return true;
            };
        }
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
            scope.onDrop = function(i, j) {
                var temp = scope.data.team[i];
                scope.data.team[i] = scope.data.team[j];
                scope.data.team[j] = temp;
                temp = scope.tdata.team[i];
                scope.tdata.team[i] = scope.tdata.team[j];
                scope.tdata.team[j] = temp;
            };
            scope.isDraggable = function(e) {
                return !Utils.isClickOnOrb(e, e.target.parentNode);
            };
        }
    };
};

directives.removeZone = function() {
    return {
        restrict: 'E',
        template: '<div class="unit empty fa fa-trash-o" id="removeZone" dropzone style="display: none"></div>',
        scope: true,
        replace: true,
        link: function(scope, element, attrs) {
            scope.onRemove = function(i) {
                scope.resetSlot(i);
            };
        }
    };
};

directives.hpBar = function() {
    return {
        retrict: 'E',
        replace: true,
        template: '<div id="hp"><div id="hpSlider"></div>' + 
            '<div id="hp-rcv"><table><tbody>' +
                '<tr><td id="hp-cell" ng-click="setHP()">{{ hp.current | number }}</td><td>HP ({{ hp.perc | number:2 }}%)</td></tr>' +
                '<tr><td>{{ numbers.rcv | number }}</td><td>RCV</td></tr>' +
                '<tr ng-show="numbers.healPerTurn"><td>{{ numbers.healPerTurn | number }}</td><td>heal/turn</td></tr>' +
                '<tr title="Minimum pirate level: {{ numbers.cost.level }}"><td>{{ numbers.cost.cost | number }}</td><td>cost</td></tr>' +
            '</tbody></table></div>',
        link: function(scope, element, attrs) {

            scope.hp = {
                current: Math.max(1, Math.round(scope.numbers.hp * scope.data.percHP / 100)),
                perc: scope.data.percHP
            };

            var slider = element.find('#hpSlider')[0];
            var sliderSettings = {
                animate: false,
                start: [ scope.hp.current ],
                range: { min: [ 1 ], max: [ scope.numbers.hp || 1 ] },
                connect: 'lower'
            };

            var update = function(event,value) {
                scope.hp.current = Math.max(1, Math.round(value));
                scope.hp.perc = (scope.hp.current / scope.numbers.hp * 100);
                currentHP = scope.hp.current;
                if (event === 'set' || event == 'manual')
                    slider.noUiSlider.set(value);
                if (event == 'change' || event == 'manual')
                    scope.data.percHP = scope.hp.perc;
                if (event !== 'set' && !scope.$$phase)
                    scope.$apply();
            };

            var createSlider = function() {
                if (slider.noUiSlider) slider.noUiSlider.destroy();
                noUiSlider.create(slider, sliderSettings);
                slider.noUiSlider.on('change', function(_,__,value) { update('change', value); });
                slider.noUiSlider.on('slide', function(_,__,value) { update('slide', value); });
            };

            createSlider();

            scope.$watch('numbers.hp',function(hp) {
                sliderSettings.range.min = [ 1 ];
                sliderSettings.range.max = [ hp || 1 ];
                createSlider();
                update('set', Math.round(scope.data.percHP * hp / 100));
            },true);

            scope.setHP = function() {
                var hp = prompt('Set HP to:', scope.hp.current), perc = false;
                if (!hp) return;
                hp = hp.trim();
                if (/%$/.test(hp)) perc = true;
                if(!perc) hp = eval(hp); //Enable User Input to be calculated
                hp = parseFloat(hp, 10);
                if (!perc) hp = Math.floor(hp);
                if (isNaN(hp)) return;
                if (!perc) 
                    update('manual', Math.min(scope.numbers.hp, Math.max(1, hp)));
                else
                    update('manual', Math.min(scope.numbers.hp, Math.max(1, Math.round(scope.numbers.hp * hp / 100))));
            };

        }
    };
};

directives.turnCounter = function() {
    return {
        retrict: 'E',
        replace: true,
        template: '<div id="turns"><div id="turnSlider"></div>' +
            '<div id="turnLabel">{{currentTurns}} {{currentTurns == 1 ? "turn" : "turns"}} elapsed</div></div>',
        link: function(scope, element, attrs) {

            scope.currentTurns = 0;

            var slider = element.find('#turnSlider')[0];
            var sliderSettings = {
                start: [ scope.currentTurns ],
                range: { min: [ 0 ], max: [ 25 ] },
                step: 1,
                connect: 'lower'
            };
            
            var createSlider = function() {
                if (slider.noUiSlider) slider.noUiSlider.destroy();
                noUiSlider.create(slider, sliderSettings);
                slider.noUiSlider.on('change', function(_,__,value) { update('change', value); });
                slider.noUiSlider.on('slide', function(_,__,value) { update('slide', value); });
            };

            var update = function(event,value) {
                scope.currentTurns = parseInt(value, 10);
                if (event == 'change') scope.tdata.turnCounter.value = scope.currentTurns;
                scope.$apply();
            };

            createSlider();

        }
    };
};

directives.levelLabel = function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitLevel">' + 
            '<span ng-show="data.team[slot].level != data.team[slot].unit.maxLevel">Lv. {{data.team[slot].level}}</span>' +
            '<img ng-show="data.team[slot].level == data.team[slot].unit.maxLevel" src="../res/max.png">' +
            '<input type="number" ng-show="editorVisible" ng-model="level"></input></div>',
        link: function(scope, element, attrs) {
            scope.level = scope.data.team[scope.slot].level;
            var input = element.find('input');
            element.longpress(function() { },function(e) {
                scope.level = '';
                if (e.which <= 1 && (!e.ctrlKey && !e.metaKey)) {
                    if (scope.options.slidersEnabled) $('.unit').eq(scope.slot).addClass('slide');
                    else scope.editorVisible = true;
                } else if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey)))
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

directives.unitOrb = function($rootScope) {
    var ORBS = [ 0.5, 1, 2, 'g', 'str' ];//add rainbow if needed
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'views/fragments/orb.html',
        link: function(scope, element, attrs) {
            scope.glow = function() {
                var unit = scope.tdata.team[scope.slot];
                if (unit.orb == 1) return 'none';
                if (unit.orb == 2) return scope.data.team[scope.slot].unit.type;
                if (unit.orb == 'g') return 'G';
                if (unit.orb == 'str') return 'S';
                if (unit.orb == 'rainbow') return 'R';
                return Utils.getOppositeType(scope.data.team[scope.slot].unit.type) + ' opposite';
            };
            var onShortPress = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || /unitLevel/.test(e.target.className) || e.altKey || e.shiftKey) return;
                if (e.which == 2 || (e.which == 1 && (e.ctrlKey || e.metaKey || Utils.isClickOnOrb(e,e.target.parentNode)))) {
			var n = ORBS.indexOf(tunit.orb);
			if(unit.unit.type == "STR" || unit.unit.type == "DEX")
				tunit.orb = ORBS[(n + 1) % ($rootScope.areGOrbsEnabled() ? ORBS.length - 1 : ORBS.length - 2)];
			else
				tunit.orb = ORBS[(n + ((!$rootScope.areGOrbsEnabled() && $rootScope.areSTROrbsEnabled() && n == ORBS.length - 3) ? 2 : 1)) % ($rootScope.areGOrbsEnabled() ? ($rootScope.areSTROrbsEnabled() ? ORBS.length : ORBS.length - 1) : ($rootScope.areSTROrbsEnabled() ? ORBS.length : ORBS.length - 2))];
                    scope.glow();
                    scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }//IF I need to add Rainbow orbs, I need to rethink that
            };
            var onLongPress = function(e) {
							var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
							var n = ORBS.indexOf(tunit.orb);
							if(unit.unit.type == "STR" || unit.unit.type == "DEX")
								tunit.orb = ORBS[(n + 1) % ($rootScope.areGOrbsEnabled() || $rootScope.areSTROrbsEnabled() ? ORBS.length - 1 : ORBS.length - 2)];
							else
								tunit.orb = ORBS[(n + ((!$rootScope.areGOrbsEnabled() && $rootScope.areSTROrbsEnabled() && n == ORBS.length - 3) ? 2 : 1)) % ($rootScope.areGOrbsEnabled() ? ($rootScope.areSTROrbsEnabled() ? ORBS.length : ORBS.length - 1) : ($rootScope.areSTROrbsEnabled() ? ORBS.length : ORBS.length - 2))];
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
                if (unit.unit === null || /unitLevel/.test(e.target.className)) return;
                if (e.which == 1 && (e.altKey || e.metaKey) && !e.shiftKey && !Utils.isClickOnOrb(e,e.target.parentNode)) {
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
                if (unit.unit === null || /unitLevel/.test(e.target.className)) return;
                if (e.which == 1 && e.shiftKey && !e.altKey && !e.metaKey && !Utils.isClickOnOrb(e,e.target.parentNode)) {
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

directives.unitRemoved = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="unitRemoved" ng-class="{ active: tdata.team[slot].removed > 0 }"><i class="fa fa-times"></i></div>',
        link: function(scope, element, attrs) {
            var parent = element.parent();
            scope.$watch('tdata.team[slot].removed',function(removed) {
                if (removed > 0) parent.addClass('gray');
                else parent.removeClass('gray');
            });
            var onMouseUp = function(e) {
                var unit = scope.data.team[scope.slot], tunit = scope.tdata.team[scope.slot];
                if (!$(e.target).hasClass('unitPortrait')) return;
                if (unit.unit === null || /unitLevel/.test(e.target.className)) return;
                if (e.which == 1 && (e.altKey || e.metaKey) && e.shiftKey && !Utils.isClickOnOrb(e,e.target.parentNode)) {
                    tunit.removed = (tunit.removed > 0 ? 0 : 2);
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

directives.special = function($rootScope) {
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
                if (enabled && window.specials[unit.number+1].warning) {
                    scope.notify({
                        text: window.specials[unit.number+1].warning.replace(/%name%/g, window.units[unit.number].name),
                        type: 'warning'
                    });
                }
            });
            scope.$watch('data.team[slot].unit',function(unit) {
                removeType();
                if (scope.tdata.team[scope.slot].special) element.addClass(unit.type);
                scope.hasSpecial = unit && window.specials.hasOwnProperty(unit.number+1);
            });
            element.click(function(e) {
                isSelected = !isSelected;
                $rootScope.$emit('specialToggled', scope.slot, isSelected);
                scope.tdata.team[scope.slot].special = isSelected;
                scope.$apply();
            });
        }
    };
};

directives.candySlider = function($compile, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="candyContainer"><input class="candySlider"></input>' +
            '<span class="candyCurrent">{{numbers.team[slot][type] | number}} {{type.toUpperCase()}}</span>',
        scope: { data: '=', numbers: '=', slot: '=', type: '@' },
        link: function(scope, element, attrs) {
            scope.actualBonus = 0;
            var currentValue = scope.data[scope.type];
            var input = element.find('input');
            var update = function(value) {
                if (value == currentValue) return;
                currentValue = value;
                scope.data[scope.type] = value;
                scope.actualBonus = value * { hp: 5, atk: 2, rcv: 1 }[scope.type];
                scope.$apply();
            };
            var updateMax = function(data) {
                var used = Object.keys(data).reduce(function(prev,next) { return prev + (next == scope.type ? 0 : data[next]); },0);
                input.trigger('configure',{ max: Math.min(100,200 - used) });
                currentValue = data[scope.type];
                input.val(currentValue).trigger('change');
                scope.actualBonus = currentValue * { hp: 5, atk: 2, rcv: 1 }[scope.type];
            };
            var slider = input.knob({
                width: 112,
                height: 112,
                min: 0,
                max: 100,
                angleOffset: 20,
                angleArc: 320,
                release: update,
                fgColor: { hp: '#fcac68', atk: '#fb6f64', rcv: '#7feb9f' }[scope.type]
            });
            input.val(currentValue).trigger('change');
            element.append($compile('<span class="candyLabel">+{{actualBonus}} ' + scope.type.toUpperCase() + '</span>')(scope));
            scope.$watch('data',updateMax,true);
            if (element.index() == 1) $timeout(function() { input.focus(); });
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

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

})();
