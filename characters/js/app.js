(function() {

var app = angular.module('optc', [ ]);

var parseUnit = function(element,n) {
    if (element.length === 0) return [ ];
    if (element[13].constructor != Array) element[13] = [ element[13], element[13], element[13] ];
    return {
        name    : element[0]  , type     : element[1]  ,
        class   : element[2]  , stars    : element[3]  ,
        cost    : element[4]  , maxLevel : element[5]  ,
        minHP   : element[6]  , minATK   : element[7]  ,
        minRCV  : element[8]  , maxHP    : element[9]  ,
        maxATK  : element[10] , maxRCV   : element[11] ,
        combo   : element[12] , number   : n           ,
        growth  : {
            hp  : element[13][0],
            atk : element[13][1],
            rcv : element[13][2]
        }
    };
};

var generateSearchParameters = function(query) {
    if (!query || query.trim().length < 3) return null;
    var result = { matchers: { }, ranges: { }, query: [ ] };
    var ranges = { }, params = [ 'hp', 'atk', 'stars', 'cost', 'growth', 'rcv' ];
    var regex = new RegExp('^((type|class):(\\w+)|(' + params.join('|') + ')(>|<|>=|<=|=)([\\d.]+))$');
    var tokens = query.trim().replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0; });
    tokens.forEach(function(x) {
        var temp = x.match(regex);
        if (!temp) // if it couldn't be parsed, treat it as string
            result.query.push(x);
        else if (temp[4] !== undefined) { // numeric operator
            var left = temp[4], op = temp[5], right = parseFloat(temp[6],10);
            if (!result.ranges.hasOwnProperty(left)) result.ranges[left] = [ 0, Infinity ];
            if (op == '=') {
                result.ranges[left][0] = right;
                result.ranges[left][1] = right;
            }
            else if (op == '<')  result.ranges[left][1] = Math.min(result.ranges[left][1],right-1);
            else if (op == '<=') result.ranges[left][1] = Math.min(result.ranges[left][1],right);
            else if (op == '>')  result.ranges[left][0] = Math.max(result.ranges[left][0],right+1);
            else if (op == '>=') result.ranges[left][0] = Math.max(result.ranges[left][0],right);
        } else // matcher
            result.matchers[temp[2]] = new RegExp(temp[3],'i');
    });
    result.query = new RegExp(result.query.join(' '),'i');
    return result;
};

window.units = window.units.map(parseUnit);

/***********************
 * Table configuration *
 ***********************/

var padding = Math.floor(Math.log(window.units.length+2) / Math.log(10)) + 1;
var table = null;

var tableData = window.units.filter(function(x) { return x.name; }).map(function(x) {
    return [
        ('000' + (x.number+1)).slice(-padding),
        x.name,
        x.type,
        x.class,
        x.maxHP,
        x.maxATK,
        x.maxRCV,
        x.combo,
        x.stars
    ];
});

var currentParameters = null;

$.fn.dataTable.ext.search.push(function(settings, data, index) {
    if (!currentParameters) return true;
    var unit = window.units[parseInt(data[0],10) - 1];
    // filter by matchers
    for (var matcher in currentParameters.matchers) {
        if (!currentParameters.matchers[matcher].test(unit[matcher]))
            return false;
    }
    // filter by ranges
    for (var range in currentParameters.ranges) {
        var stat = unit['max' + range.toUpperCase()];
        if (stat < currentParameters.ranges[range][0] || stat > currentParameters.ranges[range][1])
            return false;
    }
    // filter by query
    return currentParameters.query.test(unit.name);
});

/************
 * MainCtrl *
 ************/

app.controller('MainCtrl',function($scope, $timeout) {

    var temp = window.location.href.match(/#(.+)$/);
    $scope.query = (temp ? decodeURIComponent(temp[1]) : null);

    $scope.$watch('query',function(query) {
        currentParameters = generateSearchParameters(query);
        table.fnDraw();
        if (query) window.location.href = '#' + query;
    },true);

});

/**************
 * Directives *
 **************/

app.directive('characterTable',function() {
    var addImage = function(data, type, row, meta) {
        return '<img class="slot small" data-original="' + Utils.getThumbnailUrl(row[0]-1) + '"> ' + data;
    };
    return {
        restrict: 'E',
        replace: true,
        template: '<table class="table table-striped-column"></table>',
        link: function(scope, element, attrs) {
            table = element.dataTable({
                iDisplayLength: JSON.parse(localStorage.getItem('unitsPerPage')) || 10,
                stateSave: true,
                data: tableData,
                columns: [
                    { title: 'ID' },
                    { title: 'Name', render: addImage },
                    { title: 'Type' },
                    { title: 'Class' },
                    { title: 'HP' },
                    { title: 'ATK' },
                    { title: 'RCV' },
                    { title: 'CMB' },
                    { title: 'Stars' }
                ],
                rowCallback: function(row, data, index) {
                    var target = $(row);
                    if (target.attr('loaded')) return;
                    target.find('img').lazyload();
                    target.attr('loaded',true);
                    if (articles.hasOwnProperty(parseInt(data[0],10))) {
                        var article = articles[parseInt(data[0],10)], cell = $(row.cells[1]);
                        var text = cell.text().trim();
                        cell[0].removeChild(cell[0].lastChild);
                        cell.append(document.createTextNode(' '));
                        cell.append($('<a href="http://xn--pck6bvfc.gamewith.jp/article/show/' + article + '">' + text + '</a>'));
                    }
                }
            });
            element.on('draw.dt',function() { $(window).trigger('scroll'); });
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

setTimeout(function() { $('table').DataTable(); },1000);

})();
