(function() {

var app = angular.module('optc', [ 'ui.bootstrap', 'ngDialog' ]);

Utils.parseUnits(false);

var addImages = function(target) {
    target.find('> table [data], h3 [data]').each(function(n,x) {
        x.style.backgroundImage = 'url(' + x.getAttribute('data') + ')';
        x.removeAttribute('data');
    });
};

app.controller('MainCtrl',function($scope, $rootScope, $timeout, $controller) {

    // variables
    $rootScope.onlyGlobal = false;
    $rootScope.query = '';
    $scope.data = drops;
    $scope.hiddenUnits = [ ];
    var searchQuery = location.search.replace('?','');
    

    // units
    $scope.reverse = function(x) { return -x; };
    $scope.changeSorting = function() { $rootScope.sortByType = $scope.sortByType; };
    $scope.changeQueryFilter = function() { $scope.query = Utils.getRegex($scope.queryFilter); };

    $scope.changeFilters = function() {
        $scope.hiddenUnits = [ ];
        for (var i=0;i<units.length;++i) {
            $scope.hiddenUnits[i+1] = ($scope.noFodder && Utils.isFodder(window.units[i])) ||
                ($scope.noEvolverBooster && Utils.isEvolverBooster(window.units[i]));
        }
        if (!$scope.$$phase) $scope.$apply();
    };

    //Use URI for one time search
    if(searchQuery!=""){
        $scope.query = Utils.getRegex(decodeURI(searchQuery.replace(/%20Fortnight|%20Raid/g,"").replace(/\?/,"\\?")));
    }
    
    $controller('DismissalCtrl');

});

app.directive('decorateSlot',function() {
    return {
        restrict: 'A',
        scope: { uid: '=', big: '@', delay: '@' },
        link: function(scope, element, attrs) {
            var url = scope.big ? Utils.getBigThumbnailUrl(scope.uid) : Utils.getThumbnailUrl(scope.uid);
            var url2 = scope.big ? Utils.getBigThumbnailUrl(scope.uid) : Utils.getGlobalThumbnailUrl(scope.uid);
            if (scope.delay) element[0].setAttribute('data',url);
            else element[0].style.backgroundImage = 'url(' + url2 + '), url(' + url + ')';
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
        scope: { island: '=', data: '=', type: '=', hiddenUnits: '=', condition: '=', challenge: '=', completion: '=', showManual: '=' },
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

app.directive('collapsable',function($compile, $timeout) {
    return {
        restrict: 'A',
        scope: { target: '@', data: '=', type: '=', island: '=', hiddenUnits: '=', onlyGlobal: '=', query: '=' },
        link: function(scope, element, attrs) {

            var collapse = function() {
                if (element.children().length == 1) return;
                while (element.children().length > 1)
                    element.children().last().remove();
                element.addClass('collapsed');
            };

            var expand = function() {
                if (element.children().length > 1) return;
                if (scope.target == 'type.html')
                    element.append($compile('<type type="type" data="data" hidden-units="hiddenUnits" only-global="onlyGlobal"></type>')(scope));
                else
                    element.append($compile('<island type="type" island="island" data="data" hidden-units="hiddenUnits"></island>')(scope));
                element.removeClass('collapsed');
            };

            var update = function() {
                if (element.children().length > 1) collapse();
                else expand();
            };

            element.find('> h3, > h2').click(function(e) {
                if (e.which != 1) return;
                update();
            });

            scope.$watch('query',function() {
                if (scope.target != 'type.html' || scope.query.constructor == String) return;
                var validQuery = (scope.query.source.length && scope.query.source != '(?:)');
                if (!validQuery) collapse();
                else {
                    expand();
                    $timeout(function() {
                        var visible = element.find('> div:not(.ng-hide)').length;
                        if (visible === 0) collapse();
                    });
                }
            });

        }
    };
});

app.directive('autoFocus',function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
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

                element.find('td, th').hover(
                    function(e) {
                        var index = $(this).index() + 1;
                        if (index == 1) return;
                        element.find('tr > :nth-child(' + index + ')').each(function(n,x) { $(x).addClass('active'); });
                    },
                    function() {
                        element.find('.active').each(function(n,x) { $(x).removeClass('active'); });
                    }
                );

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

app.directive('dayLabel',function() {
    return {
        restrict: 'E',
        template: '<span class="day-label" ng-if="island.day >= 0" ng-class="{ active: isActive }">{{day}}</span>',
        link: function(scope, element, attrs) {
            scope.day = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][scope.island.day];
            scope.isActive = CharUtils.getDayOfWeek(false) == scope.island.day || CharUtils.getDayOfWeek(true, true) == scope.island.day;
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

function refreshTimer(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('updateTimes()',refresh)
}

function updateTimes(){
    //Japan can also be Etc/GMT-9
    document.getElementById("times").innerHTML = "Global: <b>"+moment().tz('Etc/GMT+8').format('H:mm:ss')+"</b> | Japan: <b>"+moment().tz('Asia/Tokyo').format('H:mm:ss')+"</b>";
    
    if(moment().tz('Asia/Tokyo').format('H')>12 && moment().tz('Asia/Tokyo').format('H')<23){
        document.getElementById("timesNote").innerHTML = "The Bonuses in the Japanese Version only last from 12:00 till 23:00<br><b>Japan Bonuses are currently active<b>";
    }else{
         document.getElementById("timesNote").innerHTML = "The Bonuses in the Japanese Version only last from 12:00 till 23:00<br><b>Japan Bonuses are currently not active<b>";
    }
    tt=refreshTimer();
}
window.onload = function() {
    //Also add the URI Search into the Search Bar
    document.getElementById("search").value = decodeURI(location.search.replace('?','').replace(/%20Fortnight|%20Raid/g,"").replace(/\?/,"\\?"));
}
