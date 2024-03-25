angular.module('app')
	.directive('eventDay', function (localStorageService) {
		return {
			restrict: 'AE',
			scope: {
				military: '=',
				index: '=',
				my_id: '=myId',
				my_time: '=myTime',
				locale: '='
			},
			template: '<div class="turtle-day"><p><span>{{date1}}</span>{{ttime1_format}}</p><p><span>{{date2}}</span>{{ttime2_format}}</p></div',
			link: function (scope, elem, attrs) {
				var my_time = scope.my_time;
				var day_num = scope.index;
				var now = moment();
				var end = my_time.clone().add(7,'days');

				scope.$watch('military', function(value) {
					update_times();
					if (scope.military !== null && scope.military !== undefined)
						localStorageService.set('military', scope.military);
				});

				scope.$watch('my_id', function(value) {
					update_times();
					if (scope.my_id !== null && scope.my_id !== undefined)
						localStorageService.set('id', scope.my_id);
				});

				scope.$watch('locale', function(value) {
					update_times();
				});

				function update_times() {
					var ttime1 = calc_time(scope.my_id, false);
					var ttime2 = calc_time(scope.my_id, true);

					var ttime2_end = ttime2.clone().add(8, 'hours');

					if (ttime2_end.isBefore(now))
						elem.remove();

					if (scope.locale !== null){
						ttime1.locale(scope.locale);
						ttime2.locale(scope.locale);
					}
					scope.date1 = ttime1.format('LL');
					scope.date2 = ttime2.format('LL');
					scope.ttime1_format = print_time(ttime1, scope.military);
					scope.ttime2_format = print_time(ttime2, scope.military);
				}

				function calc_time(id, second_time) {
					var weekly_order = [0,1,2,3,4];
					var ttime = my_time.clone();
					var offset = day_num + 4;
					offset = offset % 5;

					for (var i=0; i < offset; i++)
						weekly_order.unshift(weekly_order.pop());

					for (i=0; i < day_num; i++)
						ttime.add(2, 'days');
					

					if (id>4)
						id -=5;

					ttime.add(weekly_order[id]*2, 'hours');
					if (second_time)
						ttime.add(10,'hours');
					return ttime;
				}

				function print_time(date, military) {
					if (military)
						return date.format('HH:mm');
					return date.format('h:mm a');
				}
			}
		};
	})
	.directive('eventDayJpn', function (localStorageService) {
		return {
			restrict: 'AE',
			scope: {
				military: '=',
				index: '=',
				my_id: '=myId',
				my_time: '=myTime',
				locale: '='
			},
			template: '<div class="event-day-jpn"><p><span>{{date1}}</span>{{ttime1_format}}</p></div',
			link: function (scope, elem, attrs) {
				var my_time = scope.my_time;
				var day_num = scope.index;

				scope.$watch('military', function(value) {
					update_times();
					if (scope.military !== null)
						localStorageService.set('military', scope.military);
				});

				scope.$watch('my_id', function(value) {
					update_times();
					if (scope.my_id !== null && scope.my_id !== undefined)
						localStorageService.set('id', scope.my_id);
				});

				scope.$watch('locale', function(value) {
					update_times();
				});

				function update_times() {
					var ttime1 = calc_time(scope.my_id).local();
					
					if (scope.locale !== null){
						ttime1.locale(scope.locale);
					}
					scope.date1 = ttime1.format('LL');
					scope.ttime1_format = print_time(ttime1, scope.military);
				}

				function calc_time(id) {
					var weekly_order = [0,1,2,3,4];
					var ttime = my_time.clone();
					var offset = day_num + my_time.isoWeek()*2 + 2;

					offset = offset % 5;

					// console.log('offset = ', offset);

					for (var i=0; i < offset; i++)
						weekly_order.unshift(weekly_order.pop());

					for (i=0; i < day_num; i++)
						ttime.add(2, 'days');
					if (day_num === 2)
						ttime.add(1, 'days');

					id = id % 5;

					ttime.add(weekly_order[id]*3, 'hours');

					return ttime;
				}

				function print_time(date, military) {
					if (military)
						return date.format('HH:mm');
					return date.format('h:mm a');
				}
			}
		};
	})
	.directive('selectOnClick', [function () {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				var focused;
				elem.on('click', function() {
					if (focused != this) {
						this.select();
						focused = this;
					}
				});
				elem.on('blur', function() {
					focused = null;
				});
			}
		};
	}])
	.directive('isleTime', function () {
		return {
			restrict: 'E',
			template: function (elem, attrs) {
				var day = moment().utc().startOf('day');
				if (JSON.parse(attrs.global))
					day.add(8, 'hours');
				else
					day.add(15, 'hours');
				var now = moment();
				if (day.isBefore(now))
					day.add(1, 'days');
				html = '<timer end-time="' + day.format('x') + '" class ="timer">{{hhours}}:{{mminutes}}:{{sseconds}}</timer>';
				return html;
			}
		};
	});