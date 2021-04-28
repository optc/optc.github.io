angular.module('app')
	.controller('BarrelCtrl', function($scope, localStorageService){
		var self = this;
		self.see_more = false;

		var day = moment().utc().startOf('day').add(12,'hours');
		var local = day.clone().local();
		var hour_start = local.format('HH:mm');
		var hour_end = local.clone().add(23,'hours').add(59, 'minutes').format('HH:mm');
		var hour_string = ' ' + hour_start + '-' + hour_end;
		var now = moment();
		if (day.isAfter(now))
			day.subtract(1, 'days');

		self.day_num = day.dayOfYear();
		self.day = day.clone().add(1, 'days').format('x');
		self.times = [];
		self.show_hours = JSON.parse(localStorageService.get('show_hours'));
		if (self.show_hours === null)
			self.show_hours = false;

		set_time();


		$scope.$watch(function() {
			return self.show_hours;
		}, function(newVal) {
			localStorageService.set('show_hours', self.show_hours);
			set_time();
		});

		function set_time() {
			self.times = [];
			for (var i=0; i<5; i++)
				self.times.push(calc_day(i));
		}

		function calc_day(day_offset) {
			var wooden = [0,5,4,9,3,8,4,9,2,7,3,8,1,6,2,7,0,5,1,6];
			var silver = [1,6,2,7,0,5,1,6,0,5,4,9,3,8,4,9,2,7,3,8];
			var gold   = [3,8,2,7,1,6,0,5,4,9];

			var offset = self.day_num + day_offset + 4;
			offset = offset % 5;

			var start1 = (offset*4) % 20;
			var start2 = (offset*2) % 10;

			var chest_wooden = wooden.slice(start1, start1+4);
			var chest_silver = silver.slice(start1, start1+4);
			var chest_gold   = gold  .slice(start2, start2+2);

			var now = moment();
			now.add(day_offset,'day');

			var date = now.format('YYYY/MM/DD');

			// Show Hours display
			var day_end = day.clone().local().add(day_offset, 'day')
				.add(23, 'hours').add(59, 'minutes');
			var current_day = moment(date, "YYYY/MM/DD").endOf('day');
			if (self.show_hours){
				if (current_day.isAfter(day_end))
					date = current_day.subtract(1,'day').format('YYYY/MM/DD');
				date += hour_string;
			}


			var chest_day = {};
			chest_day.date = date;
			chest_day.wooden = chest_wooden;
			chest_day.silver = chest_silver;
			chest_day.gold = chest_gold;

			return chest_day;
		}

		self.range = function(num) {
			return new Array(num);
		};

	});