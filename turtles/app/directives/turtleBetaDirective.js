(function() {
	'use strict';

	angular.module('app')
	.directive('turtleBeta', 
	turtle_beta);

	function turtle_beta(turtleFact) {
		return {
			restrict: 'E',
			scope: {
				military: '=',
				locale: '=',
				index: '=',
				numid: '=',
				version: '='
			},
			template: '<p><span>{{date}}</span><span>{{ttime_format}}</span></p>',
			link: linker
		}

		function linker(scope, elem, attrs) {
			function update_times() {
				var ttime = turtleFact.get_ttimes()[scope.index].local();
				if (scope.locale !== null)
					ttime.locale(scope.locale);
				else 
					ttime.locale('en');

				scope.date = ttime.format('LL');
				scope.ttime_format = print_time(ttime);
			}

			function print_time (date) {
				if (scope.military)
					return date.format('HH:mm');
				return date.format('h:mm a');
			}


			scope.$watch('numid', function(newVal, oldVal) {
				update_times();
			});

			scope.$watch('military', function(newVal, oldVal) {
				update_times();
			});

			scope.$watch('ttime', function(newVal, oldVal) {
				update_times();
			});

			scope.$watch('locale', function(newVal, oldVal) {
				update_times();
			});

			scope.$watch('version', function(newVal, oldVal) {
				update_times();
			});
		}
	}
})()