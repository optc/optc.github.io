angular.module('ui.bootstrap.collapse', [])
 
	.directive('collapse', ['$animate', '$animateCss', '$timeout', function ($animate, $animateCss, $timeout) {
 
		return {
			link: function (scope, element, attrs) {
				function expand() {
					element.removeClass('collapse').addClass('collapsing');

					var animation = $animateCss(element, {
						addClass: 'in',
						to: { height: element[0].scrollHeight + 'px' }
					});
 
					animation.start().done(expandDone);
				}
 
				function expandDone() {
					element.removeClass('in collapsing');
					element.css({height: 'auto'});
				}
 
				function collapse() {
					// if(! element.hasClass('collapse') && ! element.hasClass('in')) {
					//   return collapseDone();
					// }
					if (element.hasClass('init')){
						element.removeClass('init');
						return collapseDone();
					}
					element
						// IMPORTANT: The height must be set before adding "collapsing" class.
						// Otherwise, the browser attempts to animate from height 0 (in
						// collapsing class) to the given height here.
						.css({height: element[0].scrollHeight + 'px'})
						// initially all panel collapse have the collapse class, this removal
						// prevents the animation from jumping to collapsed state
						.removeClass('collapse')
						.addClass('collapsing');


					var animation = $animateCss(element, {
						addClass: 'in',
						to: { height: '0' }
					});
 
					animation.start().done(collapseDone);
				}
 
				function collapseDone() {
					element.css({height: '0'}); // Required so that collapse works when animation is disabled
					element.removeClass('in collapsing');
					element.addClass('collapse');
				}
 
				scope.$watch(attrs.collapse, function (shouldCollapse) {
					if (shouldCollapse) {
						collapse();
					} else {
						expand();
					}
				});
			}
		};
	}]);