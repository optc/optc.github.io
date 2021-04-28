angular.module('app')
	.controller('TurtleCtrl', function($scope, localStorageService){
		var self = this;
		self.timezone = jstz.determine().name();
		self.global = 'global';

		self.my_time = moment().utc().startOf('isoWeek').add(13, 'hours').local();
		self.jpn_time = moment().utc().startOf('isoWeek'); // every monday and friday
		self.jpn_monday = true;
		var now = moment();
		var end = self.my_time.clone().add(18,'hours');
		var end_jpn = end.clone();
		if (now.isAfter(end)){
			self.my_time.add(1, 'week');
			self.jpn_time.add(4, 'days'); // set to friday
			end_jpn.add(4, 'days');
			self.jpn_monday = false;
		}

		if (now.isAfter(end_jpn)){
			self.jpn_time.add(3, 'days'); // set to monday
			self.jpn_monday = true;
		}

		self.id = localStorageService.get('id');
		self.military = JSON.parse(localStorageService.get('military'));
		self.global = localStorageService.get('version');
		if (self.global === null)
			self.global = 'global';

		/*====================================
		=            EVENT HOTFIX            =
		====================================*/
		
		self.jpn_time = moment.utc("2015-07-24 00:00");
		
		/*-----  End of EVENT HOTFIX  ------*/
		
		

		$scope.$watch(function() {
			return self.global;
		}, function(newVal) {
			localStorageService.set('version', self.global);
		});

		self.version = function() {
			return (self.global === 'global');
		};

		self.range = function(num) {
			return new Array(num);
		};

	});