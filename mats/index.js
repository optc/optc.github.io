(function() {

var app = angular.module('optc', [ 'ui.router' ]);

var findEvolvers = function(id) {
    for (var key in details) {
        if (!details[key] || !details[key].evolvers) continue;
        if (details[key].evolution == id) return details[key].evolvers;
        if (details[key].evolution.constructor == Array) {
            var n = details[key].evolution.indexOf(id);
            if (n != -1) return details[key].evolvers[n];
        }
    }
    return null;
};

/***********************
 * State configuration *
 ***********************/

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('main',{
            url: '^/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })

        .state('main.pick',{
            url: 'pick',
            views: {
                'popup@': {
                    templateUrl: 'views/picker.html',
                    controller: 'PickerCtrl',
                }
            },
        });

});

/***************
 * Controllers *
 ***************/

app.controller('MainCtrl',function($scope, $timeout) {

    var onPoolChange = function(pool) {
        var temp = JSON.parse(JSON.stringify(pool));
        temp = temp.map(function(x) { return { id: x.id }; });
        temp.sort(function(a,b) { return a.id - b.id; });
        localStorage.setItem('evoPool',JSON.stringify(temp));
        updateMats();
    };

    var updateMats = function() {
        // get evolvers
        var temp = { };
        $scope.pool.forEach(function(unit) {
            var evolvers = findEvolvers(unit.id);
            if (evolvers === null) return;
            evolvers.forEach(function(x) {
                var key = ('000' + x).slice(-4);
                temp[key] = (temp[key] || 0) + 1;
            });
        });
        // split by type
        $scope.mats = { };
        for (var key in temp) {
            var clazz = getEvolverClass(parseInt(key,10));
            if (!$scope.mats.hasOwnProperty(clazz)) $scope.mats[clazz] = { };
            $scope.mats[clazz][key] = temp[key];
        }
        if (!$scope.$$phase) $scope.$apply();
    };

    var getEvolverClass = function(id) {
        if (id.between(78,83)) return 'Robber Penguins';
        if (id.between(84,88) || id == 266) return 'Pirate Penguins';
        if (id.between(89,94)) return 'Hermit Crabs';
        if (id.between(95,99)) return 'Armored Crabs';
        if (id.between(100,104) || id == 267) return 'Dragons';
        if (id.between(115,118)) return 'Sea Horses';
        if (id.between(300,304)) return 'Plated Lobsters';
        return 'Others';
    };

    if (!$scope.pool) {
        $scope.pool = JSON.parse(localStorage.getItem('evoPool')) || [ ];
        $scope.$watch('pool',onPoolChange,true);
    }

    $scope.matTypes = [ 'Robber Penguins', 'Pirate Penguins', 'Hermit Crabs', 'Armored Crabs',
        'Dragons', 'Sea Horses', 'Plated Lobsters', 'Others' ];

    $scope.getSubtotal = function(type) {
        if (!$scope.mats[type]) return 0;
        var result = 0;
        for (var key in $scope.mats[type]) result += $scope.mats[type][key];
        return result;
    };

    $scope.getTotal = function() {
        var result = 0;
        $scope.matTypes.forEach(function(x) { result += $scope.getSubtotal(x); });
        return result;
    };

});

app.controller('PickerCtrl',function($scope, $state, $stateParams, $timeout) {

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = JSON.parse(localStorage.getItem('recentUnits')) || [ ];

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        $scope.pool.push({ id: unitNumber + 1 });
        $state.go('^');
    };

    /* * * * * List generation * * * * */

    var populateList = function() {
        $scope.units = [ ];
        var result, parameters = Utils.generateSearchParameters($scope.query);
        if (parameters === null) return;
        result = window.units.filter(function(x) { return x !== null && x !== undefined && x.hasOwnProperty('number'); });
        // filter by query
        if (parameters.query) {
            result = result.filter(function(unit) {
                return parameters.query.test(unit.name);
            });
        }
        $scope.units = result;
    };

});

/**************
 * Directives *
 **************/

app.directive('autoFocus',function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
		}
	};
});

app.directive('addButton',function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="slot small" id="add"><i class="fa fa-plus"></i></div>',
        link: function(scope, element, attrs) {

        }
    };
});

app.directive('decorateSlot',function() {
    return {
        restrict: 'A',
        scope: { uid: '=', amount: '=' },
        link: function(scope, element, attrs) {
            if (scope.uid) element.attr('href','../characters/#/view/' + scope.uid);
            var url = Utils.getThumbnailUrl(scope.uid);
            element[0].style.backgroundImage = 'url(' + url + ')';
            var div = $('<div class="amount"></div>');
            element.append(div);
            scope.$watch('amount',function(n) { div.html(n ? 'x' + n : ''); });
        }
    };
});

app.directive('linkButton',function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/links.html',
        scope: { exclude: '@' },
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                $(".menu").toggleClass("active"); 
            });
        }
    };
});

app.directive('removeOnClick',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.mousedown(function(e) {
                if (e.which != 2 && !e.ctrlKey && !e.metaKey) return;
                scope.pool.splice(scope.$index,1);
                if (!scope.$$phase) scope.$apply();
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
    };
});

/*****************
 * Bootstrapping *
 *****************/

Utils.parseUnits(true);

Number.prototype.between = function(x,y) { return this >= x && this <= y; }; // yay laziness

})();
