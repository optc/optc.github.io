/* jshint eqnull: true */

(function() {

var app = angular.module('optc');

var directives = { };

/**********************
 * Element directives *
 **********************/

directives.slotWheel = function() {
    return {
        restrict: 'E',
        templateUrl: 'views/wheel.html',
        link: function(scope, element, attrs) {

            element.find('.trigger').click(function() {
                var isActive = element.hasClass('active');
                if (isActive) {
					scope.character.slots[scope.slotNumber] = null;
				}
                element.find('.ability-button').toggleClass('active');
                element.toggleClass('active'); 
                if (!scope.$$phase) {
					scope.$apply();
				}
            });

            scope.isUsed = function(id) {
                return scope.character.slots.some(function(x,p) {
                    return x && p != scope.slotNumber && x.id == id;
                });
            };

            scope.pickAbility = function(e,id) {
                var slots = scope.character.slots;
                if (!slots[scope.slotNumber] || slots[scope.slotNumber].id != id) {
                    slots[scope.slotNumber] = { id: id, level: 1 };
				}
                element.find('.ability-button').toggleClass('active');
                element.toggleClass('active'); 
                if (!scope.$$phase) scope.$apply();
            };

            scope.pickLevel = function(e) {
                var n;
                if (e.which == 2 || e.ctrlKey || e.metaKey) {
					n = 5;
				} else {
					n = parseInt(prompt('Ability level:'), 10);
				} 
                if (isNaN(n) || n < 0 || n > 5) {
					return;
				}
                scope.character.slots[scope.slotNumber].level = n;
            };

        }
    };
};

/************************
 * Attribute directives *
 ************************/

directives.decorateSlot = function() {
    return {
        restrict: 'A',
        scope: { uid: '=' },
        link: function(scope, element, attrs) {
            var update = function(uid) {
                if (!uid) element[0].style.backgroundImage = null;
                else {
                    var url = Utils.getThumbnailUrl(scope.uid);
                    var url2 = Utils.getGlobalThumbnailUrl(scope.uid);
                    element[0].style.backgroundImage = 'url(' + url2 + '), url(' + url + ')';
                }
            };
            scope.$watch('uid', update);
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
                if (!$(e.target).hasClass('unit')) return;
                if ($(this).hasClass('slide') || $(this).hasClass('dragging')) return;
                scope.$state.go('.pick',{ unit: scope.unitNumber });
            });
        }
    };
};

directives.autoFocus = function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
		}
	};
};

directives.addAbility = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            scope.$watch('character.slots[slotNumber]',function(slot) {
                element.removeClass('slotsBackground');
                element.parent().parent().removeClass('color0 color1 color2 color3 color4 color5 color6 color7 color8 color9');
                if (!slot || slot.id === undefined) return;
                element.addClass('slotsBackground');
                element.css('background-position', (-32*slot.id-1) + 'px -7px');
                element.css('background-size', '363px 43px');
                element.parent().parent().addClass('color' + slot.id);
            },true);

        }
    };
};

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

})();
