(function() {

var app = angular.module('optc', [ 'ui.bootstrap' ]);

Utils.parseUnits(false);

var addImages = function(target) {
    target.find('> table [data], h3 [data]').each(function(n,x) {
        x.style.backgroundImage = 'url(' + x.getAttribute('data') + ')';
        x.removeAttribute('data');
    });
};

app.controller('MainCtrl',function($scope, $rootScope, $timeout) {
    $rootScope.onlyGlobal = false;
    $scope.data = drops;
    $scope.reverse = function(x) { return -x; };
    $scope.hiddenUnits = [ ];
    $scope.changeFilters = function() {
        $scope.hiddenUnits = [ ];
        for (var i=0;i<units.length;++i) {
            $scope.hiddenUnits[i+1] = ($scope.noFodder && Utils.isFodder(window.units[i])) ||
                ($scope.noEvolverBooster && Utils.isEvolverBooster(window.units[i]));
        }
        if (!$scope.$$phase) $scope.$apply();
    };
    $scope.changeSorting = function() { $rootScope.sortByType = $scope.sortByType; };
});

app.directive('decorateSlot',function() {
    return {
        restrict: 'A',
        scope: { uid: '=', big: '@', delay: '@' },
        link: function(scope, element, attrs) {
            var url = scope.big ? Utils.getBigThumbnailUrl(scope.uid) : Utils.getThumbnailUrl(scope.uid);
            if (scope.delay) element[0].setAttribute('data',url);
            else element[0].style.backgroundImage = 'url(' + url + ')';
        }
    };
});

app.directive('type',function() {
    return {
        restrict: 'E',
        scope: { type: '=', data: '=', hiddenUnits: '=', onlyGlobal: '=' },
        replace: true,
        templateUrl: 'type.html'
    };
});

app.directive('island',function() {
    return {
        restrict: 'E',
        scope: { island: '=', data: '=', type: '=', hiddenUnits: '=' },
        replace: true,
        templateUrl: 'island.html',
        link: function(scope, element, attrs) {
            scope.isTooltipEnabled = function(id) { return !!cooldowns[id - 1]; };
            scope.getTooltipText = function(id) { 
                var cooldown = cooldowns[id - 1], unit = units[id - 1];
                if (!cooldown && (!unit || !unit.name || !unit.incomplete)) return;
                if (cooldown) {
                    if (cooldown.constructor == Array) cooldown = cooldown[0] + ' \u2192 ' + cooldown[1] + ' turns';
                    else cooldown = cooldown + ' \u2192 ? turns';
                }
                var result = 'CD: ' + cooldown;
                if (unit.incomplete && unit.name) result = unit.name + '\n' + result;
                return result;
            };
        }
    };
});

app.directive('collapsable',function($compile) {
    return {
        restrict: 'A',
        scope: { target: '@', data: '=', type: '=', island: '=', hiddenUnits: '=', onlyGlobal: '=' },
        link: function(scope, element, attrs) {
            var update = function() {
                if (element.children().length > 1) {
                    while (element.children().length > 1)
                        element.children().last().remove();
                } else {
                    if (scope.target == 'type.html')
                        element.append($compile('<type type="type" data="data" hidden-units="hiddenUnits" only-global="onlyGlobal"></type>')(scope));
                    else
                        element.append($compile('<island type="type" island="island" data="data" hidden-units="hiddenUnits"></island>')(scope));
                }
                element.toggleClass('collapsed');
            };
            element.find('> h3, > h2').click(function(e) {
                if (e.which != 1) return;
                update();
            });
        }
    };
});

app.directive('hideWhenEmpty',function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var observer = new MutationObserver(function(e) {
               if (element.children().length === 0) element.parent().hide();
               else element.parent().show();
            });
            observer.observe(element[0],{ childList: true });
        }
    };
});

app.directive('addBonuses',function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var bonusNames = { 'stamina': '0.5x stamina', 'drop': '2x drop', 'beli': '2x beli', 'exp': '2x EXP', };
            $timeout(function() {
                var rows = element[0].rows;
                window.bonuses.forEach(function(bonus) {
                    var min = (bonus.stop || 0);
                    for (var i=0;i<=bonus.x-min && bonus.y+i+1 < rows.length;++i) {
                        var cell = rows[bonus.y + i + 1].cells[bonus.x - i + 1];
                        cell.innerHTML = bonusNames[bonus.type];
                        cell.className = bonus.type;
                    }
                });
            });
        }
    };
});

app.directive('bonusList',function() {
    return {
        restrict: 'E',
        template: '<span ng-repeat="bonus in bonuses" class="bonus {{bonus.slice(0,2)}} {{bonus.slice(3)}}"></span>',
        scope: { y: '=' },
        link: function(scope, element, attrs) {
            scope.bonuses = CharUtils.getIslandBonuses(scope.y);
        }
    };
});

app.filter('smartSort',function($rootScope) {
    var getId = function(id) {
        id = Math.abs(id);
        return [ 'STR', 'DEX', 'QCK', 'PSY', 'INT' ].indexOf(window.units[id-1].type || 'INT') * 1000 + id;
    };
    return function(array) {
        if (!$rootScope.sortByType) {
            array.sort(function(a,b) { return Math.abs(a) - Math.abs(b); });
            return array;
        }
        var temp = array.map(function(x) { return [ getId(x), x ]; });
        temp.sort(function(a,b) { return a[0] - b[0]; });
        return temp.map(function(x) { return x[1]; });
    };
});

})();
