angular.module('app')
	.directive('chestType', function () {
		return {
			restrict: 'AE',
			scope: {
				index: '@',
				dayNum: '='
			},
			template: '<div><h2>{{date}}</h2><p>Wooden {{chest_wooden}}</p><p>Silver {{chest_silver}}</p><p>Gold {{chest_gold}}</p>',
			link: function (scope, elem, attrs) {
				var wooden = [0,5,4,9,3,8,4,9,2,7,3,8,1,6,2,7,0,5,1,6];
				var silver = [1,6,2,7,0,5,1,6,0,5,4,9,3,8,4,9,2,7,3,8];
				var gold   = [3,8,2,7,1,6,0,5,4,9];

				var offset = parseInt(scope.index) + scope.dayNum;
				offset += 4;

				var start1 = (offset*4) % 20;
				var start2 = (offset*2) % 10;

				scope.chest_wooden = wooden.slice(start1, start1+4);
				scope.chest_silver = silver.slice(start1, start1+4);
				scope.chest_gold   = gold  .slice(start2, start2+2);

				var date = moment();
				for (var i=0; i<scope.index; i++)
					date.add(1,'day');
				scope.date = date.format('MMMM Do, YYYY');
			}
		};
	})
	.directive('barrelTime', function () {
		return {
			restrict: 'AE',
			scope: {
				day: '='
			},
			template: function (scope, elem, attrs) {
				var day = moment().utc().startOf('day').add(12,'hours');
				var now = moment();
				if (day.isBefore(now))
					day.add(1, 'days');
				html = '<timer end-time="' + day + '" class="timer">{{hhours}}:{{mminutes}}:{{sseconds}}</timer>';
				return html;
			},
			compile: function(elem, attrs) {
			}
		};
	});