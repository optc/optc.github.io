(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap' ]);

var findEvolvers = function(id) {
    var result = [ ];
    for (var key in evolutions) {
        if (!evolutions[key] || !evolutions[key].evolvers) continue;
        if (evolutions[key].evolution == id) 
            result.push({ from: parseInt(key,10), to: id, evolvers: evolutions[key].evolvers });
        if (evolutions[key].evolution.constructor == Array) {
            for (var i=0;i<evolutions[key].evolution.length;++i) {
                if (evolutions[key].evolution[i] != id) continue;
                result.push({ from: parseInt(key,10), to: id, evolvers: evolutions[key].evolvers[i]});
            }
        }
    }
    return result;
};

var updateStorageFormat = function(data) {
    if (data && data.length > 0 && data[0].id) {
        data = data.map(function(x) {
            var temp = findEvolvers(x.id);
            return (temp.length === 0 ? null : temp[0]);
        });
        data = data.filter(function(x) { return x !== null; });
    }
    return data;
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

        .state('main.pickEvolution',{
            params: { data: null },
            views: {
                'popup@': {
                    templateUrl: 'views/pick-evolution.html',
                    controller: 'EvolutionPickerCtrl',
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

app.controller('MainCtrl',function($scope, $rootScope, $timeout, $storage, $sce) {

    var onPoolChange = function(pool) {
        var temp = JSON.parse(JSON.stringify(pool));
        temp = temp.map(function(x) {
            for (var key in x) {
                if (key[0] == '$')
                    delete x[key];
            }
            return x;
        });
        temp.sort(function(a,b) { return a.to - b.to; });
        $storage.set('evoPool', temp);
        updateRequired();
    };

    var onMatsChange = function(mats) {
        var temp = JSON.parse(JSON.stringify(mats));
        temp = temp.map(function(x) { return { id: x.id, amount: x.amount }; });
        temp.sort(function(a,b) { return a.id - b.id; });
        $storage.set('matPool', temp);
        updateRequired();
    };

    var onSortChange = function(value) {
        var getTypeId = function(type) { return [ 'STR', 'DEX', 'QCK', 'PSY', 'INT' ].indexOf(type); };
        $storage.set('sortMatsByColor', value);
        if (value) {
            var temp = $rootScope.mats.map(function(x,n) {
                var unit = window.units[x.id - 1];
                return { type: getTypeId(unit.type || 'INT'), stars: unit.stars, cost: unit.cost, data: x };
            });
            temp.sort(firstBy('type').thenBy('stars', -1).thenBy(function(x,y) { return (x.cost - y.cost) * (x.stars < 3 ? -1 : 1); }));
            temp = temp.map(function(x) { return x.data; });
            $rootScope.mats = temp;
        } else
            $rootScope.mats.sort(function(a,b) { return a.id - b.id; });
    };

    var updateRequired = function() {
        // get evolvers
        var temp = { };
        $rootScope.pool.forEach(function(unit) {
            unit.evolvers.forEach(function(x) {
                var key = ('000' + x).slice(-4);
                temp[key] = (temp[key] || [ ]).concat(unit.to);
            });
        });
        // material map
        $rootScope.available = { };
        $rootScope.mats.forEach(function(x) { $rootScope.available[x.id] = x.amount; });
        // split by type
        $rootScope.required = { };
        $rootScope.unused = JSON.parse(JSON.stringify($rootScope.mats));
        $rootScope.extra = [ ];
        for (var key in temp) {
            var id = parseInt(key, 10);
            var clazz = getEvolverClass(id);
            if (!$rootScope.required.hasOwnProperty(clazz))
                $rootScope.required[clazz] = { completed: { }, missing: { } };
            if ($rootScope.available[id] >= temp[key].length) {
                $rootScope.required[clazz].completed[key] = temp[key];
                if ($rootScope.available[id] > temp[key].length)
                    $rootScope.extra.push({ id: id, amount: $rootScope.available[id] - temp[key].length });
            } else
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
        var temp = $storage.get('evoPool', [ ]);
        $rootScope.pool = updateStorageFormat(temp);
        $rootScope.$watch('pool',onPoolChange,true);
    }

    if (!$rootScope.mats) {
        $rootScope.mats = $storage.get('matPool', [ ]);
        $rootScope.$watch('mats',onMatsChange,true);
    }

    if (!$scope.sortMatsByColor) {
        $scope.sortMatsByColor = $storage.get('sortMatsByColor', false);
        $scope.$watch('sortMatsByColor',onSortChange);
    }

    $rootScope.matTypes = [ 'Robber Penguins', 'Pirate Penguins', 'Hermit Crabs', 'Armored Crabs',
        'Dragons', 'Sea Horses', 'Plated Lobsters', 'Others' ];

    if (!$storage.has('matsCollapsed'))
        $storage.set('matsCollapsed', [ false, false ]);
    $rootScope.collapsed = $storage.get('matsCollapsed', [ false, false ]);

    $scope.getEvolutionTooltip = function(data) {
        return $sce.trustAsHtml('<div>eh</div>');
    };

});

app.controller('PickerCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage) {

    /* * * * * Scope variables * * * * */

    $scope.units = [ ];
    $scope.query = '';
    $scope.recents = $storage.get('recentUnits', [ ]);

    $scope.isMats = $stateParams.mats;

    $scope.$watch('query',function() { populateList(); },true);

    /* * * * * Scope functions * * * * */

    $scope.pickUnit = function(unitNumber) {
        if (!$stateParams.mats) {
            var evolvers = findEvolvers(unitNumber + 1);
            if (evolvers.length == 1)
                $rootScope.pool.push(evolvers[0]);
            else {
                $state.go('main.pickEvolution', { data: evolvers });
                return;
            }
        } else {
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
                return parameters.query.test(Utils.getFullUnitName(unit.number + 1));
            });
        }
        $scope.units = result
            .filter(function(x) { return Utils.searchBaseForms(x.number + 1); });
    };

});

app.controller('EvolutionPickerCtrl',function($scope, $rootScope, $state, $stateParams) {
    $scope.data = $stateParams.data;
    $scope.pick = function(data) {
        $rootScope.pool.push(data);
        $state.go('^');
    };
});

app.controller('QuickPickCtrl',function($scope, $rootScope, $state, $stateParams) {
    $scope.quickPick = function(uid) {
        if (!uid) return;
        var i;
        for (i=0;i<$rootScope.mats.length && $rootScope.mats[i].id != uid;++i);
        if (i == $rootScope.mats.length) $rootScope.mats.push({ id: uid, amount: 1 });
        else $rootScope.mats[i].amount++;
    };
    $scope.range = function(min, max) {
        var result = new Array(max - min);
        for (var i=0;i<result.length;++i) result[i] = min + i;
        return result;
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

app.directive('removeOnClick',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.longpress(
                function() {
                    var target = (attrs.removeOnClick == 'pool' ? scope.pool : scope.mats);
                    target.splice(scope.$index,1);
                    if (!scope.$$phase) scope.$apply();
                },function(e) {
                    if (e.which != 2 && !e.ctrlKey && !e.metaKey) return;
                    var isEvoPool = (attrs.removeOnClick == 'pool');
                    var target = (isEvoPool ? scope.pool : scope.mats);
                    target.splice(scope.$index,1);
                    if (isEvoPool && e.shiftKey) {
                        scope.unit.evolvers.forEach(function(id) {
                            for (var i=0;i<scope.mats.length;++i) {
                                if (scope.mats[i].id != id) continue;
                                if (--scope.mats[i].amount === 0)
                                    scope.mats.splice(i,1);
                                break;
                            }
                        });
                    }
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

app.directive('collapse',function($storage) {
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
                $storage.set('matsCollapsed', scope.collapsed);
            });
        }
    };
});

app.directive('evolution',function($state, $stateParams) {
    return {
        restrict: 'E',
        replace: true,
        scope: { from: '=', to: '=', evolvers: '=' },
        templateUrl: 'views/evolution.html',
        link: function(scope, element, attrs) { }
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
                    data.evoPool = updateStorageFormat(data.evoPool);
                    scope.pool.splice(0, scope.pool.length);
                    scope.mats.splice(0, scope.mats.length);
                    scope.pool = jQuery.extend(scope.pool, data.evoPool);
                    scope.mats = jQuery.extend(scope.mats, data.matPool);
                    if (!scope.$$phase) scope.$apply();
                };
                reader.readAsText(this.files[0]);
            });
            scope.import = function() { element.find('input').click(); };
        }
    };
});

app.directive('exportButton',function($storage) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><button class="btn btn-primary" ng-click="export()">Export</button></div>',
        link: function(scope, element, attrs) {
            scope.export = function() {
                var result = {
                    evoPool: $storage.get('evoPool', [ ]),
                    matPool: $storage.get('matPool', [ ])
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

Utils.parseUnits(false);

Number.prototype.between = function(x,y) { return this >= x && this <= y; }; // yay laziness

})();
