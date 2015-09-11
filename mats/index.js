(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap' ]);

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
            params: { mats: false },
            views: {
                'popup@': {
                    templateUrl: 'views/picker.html',
                    controller: 'PickerCtrl',
                }
            },
        })

        .state('main.pickMat',{
            url: 'mats',
            params: { mats: true },
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

app.controller('MainCtrl',function($scope, $rootScope, $timeout) {

    var onPoolChange = function(pool) {
        var temp = JSON.parse(JSON.stringify(pool));
        temp = temp.map(function(x) { return { id: x.id }; });
        temp.sort(function(a,b) { return a.id - b.id; });
        localStorage.setItem('evoPool',JSON.stringify(temp));
        updateRequired();
    };

    var onMatsChange = function(mats) {
        var temp = JSON.parse(JSON.stringify(mats));
        temp = temp.map(function(x) { return { id: x.id, amount: x.amount }; });
        temp.sort(function(a,b) { return a.id - b.id; });
        localStorage.setItem('matPool',JSON.stringify(temp));
        updateRequired();
    };

    var onSortChange = function(value) {
        var getId = function(id) {
            return [ 'STR', 'DEX', 'QCK', 'PSY', 'INT' ].indexOf(window.units[id-1].type || 'INT') * 1000 + id;
        };
        localStorage.setItem('sortMatsByColor',JSON.stringify(value));
        if (value) {
            var temp = $rootScope.mats.map(function(x) { return [ getId(x.id), x ]; });
            temp.sort(function(a,b) { return a[0] - b[0]; });
            temp = temp.map(function(x) { return x[1]; });
            $rootScope.mats = temp;
        } else
            $rootScope.mats.sort(function(a,b) { return a.id - b.id; });
    };

    var updateRequired = function() {
        // get evolvers
        var temp = { };
        $rootScope.pool.forEach(function(unit) {
            var evolvers = findEvolvers(unit.id);
            if (evolvers === null) return;
            evolvers.forEach(function(x) {
                var key = ('000' + x).slice(-4);
                temp[key] = (temp[key] || [ ]).concat(unit.id);
            });
        });
        // material map
        $rootScope.available = { };
        $rootScope.mats.forEach(function(x) { $rootScope.available[x.id] = x.amount; });
        // split by type
        $rootScope.required = { };
        $rootScope.unused = JSON.parse(JSON.stringify($rootScope.mats));
        for (var key in temp) {
            var id = parseInt(key, 10);
            var clazz = getEvolverClass(id);
            if (!$rootScope.required.hasOwnProperty(clazz)) $rootScope.required[clazz] = { completed: { }, missing: { } };
            if ($rootScope.available[id] >= temp[key].length)
                $rootScope.required[clazz].completed[key] = temp[key];
            else
                $rootScope.required[clazz].missing[key] = temp[key];
            $rootScope.unused = $rootScope.unused.filter(function(x) { return x.id != id; });
        }
        if (!$rootScope.$$phase) $rootScope.$apply();
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

    if (!$rootScope.pool) {
        $rootScope.pool = JSON.parse(localStorage.getItem('evoPool')) || [ ];
        $rootScope.$watch('pool',onPoolChange,true);
    }

    if (!$rootScope.mats) {
        $rootScope.mats = JSON.parse(localStorage.getItem('matPool')) || [ ];
        $rootScope.$watch('mats',onMatsChange,true);
    }

    if (!$scope.sortMatsByColor) {
        $scope.sortMatsByColor = JSON.parse(localStorage.getItem('sortMatsByColor')) || false;
        $scope.$watch('sortMatsByColor',onSortChange);
    }

    $rootScope.matTypes = [ 'Robber Penguins', 'Pirate Penguins', 'Hermit Crabs', 'Armored Crabs',
        'Dragons', 'Sea Horses', 'Plated Lobsters', 'Others' ];

    if (!localStorage.hasOwnProperty('matsCollapsed'))
        localStorage.setItem('matsCollapsed',JSON.stringify([ false, false ]));
    $rootScope.collapsed = JSON.parse(localStorage.getItem('matsCollapsed')) || [ false, false ];



});

app.controller('PickerCtrl',function($scope, $rootScope, $state, $stateParams, $timeout) {

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = JSON.parse(localStorage.getItem('recentUnits')) || [ ];

    $scope.isMats = $stateParams.mats;

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        if (!$stateParams.mats)
            $rootScope.pool.push({ id: unitNumber + 1 });
        else {
            var i;
            for (i=0;i<$rootScope.mats.length && $rootScope.mats[i].id != unitNumber + 1;++i);
            if (i == $rootScope.mats.length) $rootScope.mats.push({ id: unitNumber + 1, amount: 1 });
            else $rootScope.mats[i].amount++;
        }
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
        scope: { uid: '=', amount: '=', gray: '@', units: '=', mats: '=', available: '=' },
        link: function(scope, element, attrs) {
            if (scope.uid && attrs.hasOwnProperty('addHref'))
                element.attr('href','../characters/#/view/' + parseInt(scope.uid, 10));
            var url = Utils.getThumbnailUrl(scope.uid);
            var div = $('<div class="amount"></div>');
            element[0].style.backgroundImage = 'url(' + url + ')';
            element.append(div);
            // updating
            var update = function() {
                if (scope.gray == 'true') element.addClass('gray');
                else element.removeClass('gray');
                if (!scope.units) div.html(scope.amount ? 'x' + scope.amount : '');
                else {
                    var available = scope.available[parseInt(scope.uid, 10)];
                    div.html((available || 0) + '/' + scope.amount);
                    var temp = scope.units.filter(function(x,n) { return scope.units.indexOf(x) == n; });
                    temp = temp.map(function(x) { return units[x-1].name; });
                    element.attr('title',temp.join('\n'));
                }
            };
            scope.$watch('amount',update);
            scope.$watch('gray',update);
            scope.$watch('units',update);
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
            var target = (attrs.removeOnClick == 'pool' ? scope.pool : scope.mats);
            element.longpress(
                function() {
                    target.splice(scope.$index,1);
                    if (!scope.$$phase) scope.$apply();
                },function(e) {
                    if (e.which != 2 && !e.ctrlKey && !e.metaKey) return;
                    target.splice(scope.$index,1);
                    if (!scope.$$phase) scope.$apply();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            );
        }
    };
});

app.directive('changeOnClick',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.longpress(function() { },function(e) {
                if (e.which != 1 || e.ctrlKey || e.metaKey) return;
                var n = parseInt(prompt('Enter amount:'), 10);
                if (isNaN(n) || n < 1) return;
                scope.mats[scope.$index].amount = n;
                if (!scope.$$phase) scope.$apply();
            });
        }
    };
});

app.directive('collapse',function() {
    return {
        restrict: 'E',
        replace: true,
        scope: { collapsed: '=', n: '@' },
        template: '<i class="fa {{className}} toggleButton pull-right" ng-click="collapsed[n] = !collapsed[n]"></i>',
        link: function(scope, element, attrs) {
            var n = parseInt(scope.n, 10);
            scope.$watch('collapsed[' + n + ']',function(value) {
                if (value === undefined) return;
                scope.className = value ? 'fa-chevron-up' : 'fa-chevron-down';
                if (value) element.parent().next().addClass('collapsed');
                else element.parent().next().removeClass('collapsed');
                localStorage.setItem('matsCollapsed',JSON.stringify(scope.collapsed));
            });
        }
    };
});

app.directive('importButton',function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><button class="btn btn-success" ng-click="import()">Import</button><input type="file" accept="application/json"></div>',
        link: function(scope, element, attrs) {
            element.find('input').change(function(e) {
                var reader = new FileReader();
                reader.onerror = function(e) { alert('Couldn\'t load the file.'); };
                reader.onload = function(e) {
                    var data = JSON.parse(this.result);
                    if (!data.evoPool || !data.matPool) throw '';
                    scope.pool.splice(0, scope.pool.length);
                    scope.mats.splice(0, scope.mats.length);
                    scope.pool = $.extend(scope.pool, data.evoPool);
                    scope.mats = $.extend(scope.mats, data.matPool);
                    if (!scope.$$phase) scope.$apply();
                };
                reader.readAsText(this.files[0]);
            });
            scope.import = function() { element.find('input').click(); };
        }
    };
});

app.directive('exportButton',function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><button class="btn btn-primary" ng-click="export()">Export</button></div>',
        link: function(scope, element, attrs) {
            scope.export = function() {
                var result = {
                    evoPool: JSON.parse(localStorage.getItem('evoPool')) || [ ],
                    matPool: JSON.parse(localStorage.getItem('matPool')) || [ ]
                };
                var blob = new Blob([ JSON.stringify(result) ], { type: 'application/json' });
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'optc.mats.' + (new Date().valueOf()) + '.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
        }
    };
});

/*****************
 * Bootstrapping *
 *****************/

Utils.parseUnits(true);

Number.prototype.between = function(x,y) { return this >= x && this <= y; }; // yay laziness

})();
