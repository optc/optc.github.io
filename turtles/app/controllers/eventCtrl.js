angular.module('app')
	.controller('EventCtrl', function($scope, localStorageService){
		var self = this;

		/*======================================
		=            One-time event            =
		======================================*/
		
		// self.timezone = jstz.determine().name();

		// self.my_time = moment.utc("2015-07-08 13:00").local();
		// self.id = localStorageService.get('id');
		// self.military = JSON.parse(localStorageService.get('military'));
		
		/*-----  End of One-time event  ------*/

		/*==================================
		=            COUNTDOWNS            =
		==================================*/
		
		// var sugofest = moment.utc("2015-07-15 03:00");
		// console.log(sugofest.format("x"));
		
		/*-----  End of COUNTDOWNS  ------*/
		
		
		
		var day = moment().utc().startOf('day').add(8,'hours');
		var day_jpn = moment().utc().startOf('day').add(2, 'hours');
		
		var now = moment();
		if (day.isAfter(now))
			day.subtract(1, 'days');
		if (day_jpn.isAfter(now))
			day_jpn.subtract(1, 'days');

		var day_num = day.dayOfYear();
		var day_num_jpn = day_jpn.dayOfYear();
		self.next_day = day.clone().add(1, 'days').format('x');
		self.next_day_jpn = day_jpn.clone().add(1, 'days').format('x');
		self.times = [];

		self.global = localStorageService.get('version');
		if (self.global === null)
			self.global = 'global';
		self.show_hours = JSON.parse(localStorageService.get('show_hours'));
		if (self.show_hours === null)
			self.show_hours = false;

		calc_hour_string();
		
		var drop = ['Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase', 'Syrup Village, Drum Island', 'Orange Town, Little Garden', 'Shell Town, Whiskey Peak, Ark Maxim', "Alvida's Hideout, Twin Cape"];
		var stamina = ['Orange Town, Drum Island', 'Shell Town, Little Garden', "Alvida's Hideout, Whiskey Peak", 'Fuschia Village, Twin Cape, Skypia', 'Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase'];
		var beli = ['Baratie, Whiskey Peak, Ark Maxim', 'Syrup Village, Twin Cape, Skypia', 'Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase', 'Syrup Village, Drum Island', 'Little Garden'];
		var drop_jpn = ['Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase', 'Syrup Village, Drum Island', 'Orange Town, Little Garden', 'Shell Town, Whiskey Peak, Ark Maxim', "Alvida's Hideout, Twin Cape"];
		var stamina_jpn = ['Orange Town, Drum Island', 'Shell Town, Little Garden', "Alvida's Hideout, Whiskey Peak", 'Fuschia Village, Twin Cape, Skypia', 'Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase'];
		var beli_jpn = ['Baratie, Whiskey Peak, Ark Maxim', 'Syrup Village, Twin Cape, Skypia', 'Loguetown, Jaya', 'Arlong Park, Alubarna', 'Baratie, Nanohana Rainbase', 'Syrup Village, Drum Island', 'Little Garden'];
		
		self.version = function() {
			return (self.global === 'global');
		};

		set_time();

		$scope.$watch(function() {
			return self.show_hours;
		}, function(newVal) {
			localStorageService.set('bb_alt');
			set_time();
		});

		$scope.$watch(function() {
			return self.global;
		}, function(newVal) {
			set_time();
			localStorageService.set('version');
		});


		function set_time() {
			self.times = [];
			for (var i=0; i<7; i++)
				self.times.push(calc_day(i));
		}

		function calc_day(day_offset) {
			var offset, day_drop, day_stamina, day_beli;
			if (self.version()) {
				offset = (day_num + day_offset + 2) % 7;
				day_drop = drop[offset];
				day_stamina = stamina[offset];
				day_beli = beli[offset];
			} else {
				offset = (day_num_jpn + day_offset + 2) % 7;
				day_drop = drop_jpn[offset];
				day_stamina = stamina_jpn[offset];
				day_beli = beli_jpn[offset];
			}

			offset = offset % 7;

			var now = moment();
			for (var i=0; i<day_offset; i++)
				now.add(1,'day');

			var date = now.format('YYYY/MM/DD');

			// Show Hours display
			if (self.show_hours) {
				var day_end = day.clone().local().add(day_offset, 'day')
					.add(23, 'hours').add(59, 'minutes');
				var day_end_jpn = day_jpn.clone().local().add(day_offset, 'day')
					.add(23, 'hours').add(59, 'minutes');
				var current_day = moment(date, "YYYY/MM/DD").endOf('day');

				if (self.version()) {
					if (current_day.isAfter(day_end))
						date = current_day.subtract(1,'day').format('YYYY/MM/DD');
					date += self.hour_string;
				} else {
					if (current_day.isAfter(day_end_jpn))
						date = current_day.subtract(1,'day').format('YYYY/MM/DD');
					date += self.hour_string_jpn;
				}
			}

			var day_bonus = {};
			day_bonus.date = date;
			day_bonus.drop = day_drop;
			day_bonus.stamina = day_stamina;
			day_bonus.beli = day_beli;

			return day_bonus;
		}

		function calc_hour_string() {
			var local = day.clone().local();
			var local_jpn = day_jpn.clone().local();
			var local_end = local.clone().add(23, 'hours').add(59, 'minutes');
			var local_end_jpn = local_jpn.clone().add(12, 'hours');
			var hour_start = local.format('HH:mm');
			var hour_start_jpn = local_jpn.format('HH:mm');
			var hour_end = local_end.format('HH:mm');
			var hour_end_jpn = local_end_jpn.format('HH:mm');
			self.hour_string = ' ' + hour_start + '-' + hour_end;
			self.hour_string_jpn = ' ' + hour_start_jpn + '-' + hour_end_jpn;
		}

		self.get_next_day = function(global) {
			console.log('getting next day');
			if (global)
				return self.next_day;
			return self.next_day_jpn;
		};

		self.range = function(num) {
			return new Array(num);
		};

	});