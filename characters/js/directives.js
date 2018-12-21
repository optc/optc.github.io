(function() {

var directives = { };
var filters = { };

var app = angular.module('optc');

/**************
 * Directives *
 **************/

directives.characterTable = function($rootScope, $timeout, $compile, $storage) {
    return {
		restrict: 'E',
		replace: true,
		template: '<table id="mainTable" class="table table-striped-column panel panel-default"></table>',
		link: function(scope, element, attrs) {
			var table = element.dataTable({
				iDisplayLength: $storage.get('unitsPerPage', 10),
				stateSave: true,
				data: scope.table.data,
				columns: scope.table.columns,
				rowCallback: function(row, data, index) {
					if (!row || row.hasAttribute('loaded')) return;
					var $row = $(row);
					if (!$row) return;
					// lazy thumbnails
					$row.find('[data-original]').each(function(n,x) {
						x.setAttribute('src',x.getAttribute('data-original'));
						x.removeAttribute('data-original');
					});
					// character log checkbox
					var id = data[data.length - 1] + 1;
					var checkbox = $('<label><input type="checkbox" ng-change="checkLog(' + id + ')" ng-model="characterLog[' + id + ']"></input></label>');
					$(row.cells[10 + scope.table.additional]).append(checkbox);
					// cosmetic fixes
                    var typeBox = row.cells[2];
                    var type = typeBox.textContent;
                    if (type.indexOf(",") > -1) {
                        type = type.replace(",", "/");
                        var types = type.split('/');
                        var typeHtml = '<span class="cell-' + types[0] + '">' + types[0] + '</span>/<span class="cell-' + types[1] + '">' + types[1] + '</span>';
                        $(typeBox).html(typeHtml);
                    }
                    $(typeBox).addClass('cell-' + type);
					var n = row.cells.length - 2 - scope.table.additional;
					$(row.cells[n]).addClass('stars stars-' + row.cells[n].textContent);
					row.cells[n].textContent = '';
					// compile
					$compile($(row).contents())($rootScope);
					if (window.units[id - 1].preview) $(row).addClass('preview');
					else if (window.units[id - 1].incomplete) $(row).addClass('incomplete');
					row.setAttribute('loaded','true');
				},
				headerCallback : function(header) {
					if (header.hasAttribute('loaded')) return;
					header.cells[header.cells.length - 1].setAttribute('title', 'Character Log');
					header.setAttribute('loaded',true);
				}
			});
			scope.table.refresh = function() {
				$rootScope.$emit('table.refresh');
				$timeout(function() { element.fnDraw(); });
			};
            // report link
            var link = $('<span class="help-link">Want to report or request something? <a> Join our discord</a>.</span>');
            link.find('a').attr('href', 'https://discord.gg/MRhRrbF');
            link.insertAfter($('.dataTables_length'));
            // pick column link
            var pick = $('<a id="pick-link" popover-placement="bottom" popover-trigger="click" popover-title="Additional Columns" ' +
                'uib-popover-template="\'views/pick.html\'" popover-append-to-body="\'true\'">Additional columns</a>');
            $compile(pick)(scope);
            pick.insertAfter($('.dataTables_length'));
            // night toggle
            var nightToggle = $('<label class="night-toggle"><input type="checkbox">Night mode</input></label>');
            nightToggle.find('input').change(function(e) {
                $rootScope.nightMode = e.target.checked;
                if (!$rootScope.$$phase) $rootScope.$apply();
            });
            if ($rootScope.nightMode) nightToggle.find('input').attr('checked', 'checked');
            nightToggle.insertBefore($('.dataTables_length'));
            // fuzzy toggle
            var fuzzyToggle = $('<label class="fuzzy-toggle"><input type="checkbox">Enable fuzzy search</input></label>');
            fuzzyToggle.attr('title','When enabled, searches will also display units whose name is not an exact match to the search keywords.\nUseful if you don\'t know the correct spelling of a certain unit.');
            fuzzyToggle.find('input').prop('checked', scope.table.fuzzy);
            fuzzyToggle.find('input').change(function() {
                var checked = $(this).is(':checked');
                if (checked == scope.table.fuzzy) return;
                scope.table.fuzzy = checked;
                $storage.set('fuzzy', scope.table.fuzzy);
                scope.table.refresh();
            });
            fuzzyToggle.insertBefore($('.dataTables_length'));
        }
    };
};

directives.decorateSlot = function() {
    return {
        restrict: 'A',
        scope: { uid: '=', big: '@' },
        link: function(scope, element, attrs) {
            if (scope.big)
                element[0].style.backgroundImage = 'url(' + Utils.getBigThumbnailUrl(scope.uid) + ')';
            else
                element[0].style.backgroundImage = 'url(' + Utils.getThumbnailUrl(scope.uid) + ')';
                //element[0].style.backgroundImage = 'url(' + Utils.getGlobalThumbnailUrl(scope.uid) + '), url(' + Utils.getThumbnailUrl(scope.uid) + ')';
        }
    };
};

directives.autoFocus = function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$timeout(function(){ element[0].focus(); });
		}
	};
};

directives.addCaptainOptions = function($timeout, $compile, MATCHER_IDS) {
    var TARGET = MATCHER_IDS['captain.ClassBoostingCaptains'];
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (scope.n !== TARGET) return;
            var filter = $('<div id="class-filters" ng-class="{ enabled: filters.custom[' + TARGET + '] }"></div>');
            var classes = [ 'Fighter', 'Shooter', 'Slasher', 'Striker', 'Free Spirit', 'Cerebral', 'Powerhouse', 'Driven' ];
            classes.forEach(function(x,n) {
                var template = '<span class="filter subclass %c" ng-class="{ active: filters.classCaptain == \'%s\' }" ' +
                    'ng-click="onCaptainClick($event,\'%s\')">%s</span>';
                filter.append($(template.replace(/%s/g,x).replace(/%c/,'width-6')));
            });
            element.after(filter);
            $compile(filter)(scope);
            scope.onCaptainClick = function(e,type) {
                scope.filters.classCaptain = (scope.filters.classCaptain == type ? null : type);
            };
        }
    };
};
    
directives.addSailorOptions = function($timeout, $compile, MATCHER_IDS) {
    //TO DO ONCE WE FIND OUT WHAT SAILOR ABILITIES DO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    var TARGET = MATCHER_IDS['sailor.ClassBoostingSailors'];
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (scope.n !== TARGET) return;
            var filter = $('<div id="class-filters" ng-class="{ enabled: filters.custom[' + TARGET + '] }"></div>');
            var classes = [ 'Fighter', 'Shooter', 'Slasher', 'Striker', 'Free Spirit', 'Cerebral', 'Powerhouse', 'Driven' ];
            classes.forEach(function(x,n) {
                var template = '<span class="filter subclass %c" ng-class="{ active: filters.classSailor == \'%s\' }" ' +
                    'ng-click="onSailorClick($event,\'%s\')">%s</span>';
                filter.append($(template.replace(/%s/g,x).replace(/%c/,'width-6')));
            });
            element.after(filter);
            $compile(filter)(scope);
            scope.onSailorClick = function(e,type) {
                scope.filters.classSailor = (scope.filters.classSailor == type ? null : type);
            };
        }
    };
};

directives.addSpecialOptions = function($timeout, $compile, MATCHER_IDS) {
    var TARGET = MATCHER_IDS['special.ClassBoostingSpecials'];
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (scope.n !== TARGET) return;
            var filter = $('<div id="class-filters" ng-class="{ enabled: filters.custom[' + TARGET + '] }"></div>');
            var classes = [ 'Fighter', 'Shooter', 'Slasher', 'Striker', 'Free Spirit', 'Cerebral', 'Powerhouse', 'Driven' ];
            classes.forEach(function(x,n) {
                var template = '<span class="filter subclass %c" ng-class="{ active: filters.classSpecial == \'%s\' }" ' +
                    'ng-click="onSpecialClick($event,\'%s\')">%s</span>';
                filter.append($(template.replace(/%s/g,x).replace(/%c/,'width-6')));
            });
            element.after(filter);
            $compile(filter)(scope);
            scope.onSpecialClick = function(e,type) {
                scope.filters.classSpecial = (scope.filters.classSpecial == type ? null : type);
            };
        }
    };
};

directives.addOrbOptions = function($timeout, $compile, MATCHER_IDS) {
    var TARGET = MATCHER_IDS['special.OrbControllers'];
    return {
        restrict: 'A',
        link: function(scope,element,attrs) {
            if (scope.n !== TARGET) return;
            var orbs = { ctrlFrom: [ ], ctrlTo: [ ] };
            var filter = $('<div id="controllers" ng-class="{ enabled: filters.custom[' + TARGET + '] }">' +
                    '<span class="separator">&darr;</span></div>');
            var separator = filter.find('.separator');
            [ 'STR', 'DEX', 'QCK', 'PSY', 'INT', 'RCV', 'TND', 'BLOCK', 'EMPTY', 'BOMB', 'G' ].forEach(function(type) {
                var template = '<span class="filter orb %s" ng-class="{ active: filters.%f.indexOf(\'%s\') > -1 }" ' +
                    'ng-model="filters.%f" ng-click="onOrbClick($event,\'%s\')">%S</span>';
                separator.before($(template.replace(/%s/g,type).replace(/%S/g,type[0]).replace(/%f/g,'ctrlFrom')));
                filter.append($(template.replace(/%s/g,type).replace(/%S/g,type[0]).replace(/%f/g,'ctrlTo')));
            });
            element.after(filter);
            $compile(filter)(scope);
            scope.onOrbClick = function(e,type) {
                var target = e.target.getAttribute('ng-model');
                if (!target) return;
                target = target.match(/filters\.(.+)$/)[1];
                if (orbs[target].indexOf(type) == -1) orbs[target].push(type);
                else orbs[target].splice(orbs[target].indexOf(type), 1);
                orbs[target] = orbs[target].slice(-2);
                scope.filters[target] = orbs[target];
            };
        }
    };
};
    
directives.addDebuffOptions = function($timeout, $compile, MATCHER_IDS) {
    var TARGET = MATCHER_IDS['special.DebuffReducingSpecials'];
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (scope.n !== TARGET) return;
            var filter = $('<div id="debuff" ng-class="{ enabled: filters.custom[' + TARGET + '] }"></div>');
            var debuffs = [ 'Bind', 'Despair', 'Silence', 'Paralysis', 'Blindness', 'Poison', 'Anti-Healing', 'Chain Limit' ];
            debuffs.forEach(function(x,n) {
                var template = '<span class="filter debuff %c" ng-class="{ active: filters.debuffs == \'%s\' }" ' +
                    'ng-click="onDebuffClick($event,\'%s\')">%s</span>';
                filter.append($(template.replace(/%s/g,x).replace(/%c/,'width-6')));
            });
            element.after(filter);
            $compile(filter)(scope);
            scope.onDebuffClick = function(e,type) {
                //console.log(scope.filters.debuffs);
                scope.filters.debuffs = (scope.filters.debuffs == type ? null : type);
            };
        }
    };
};

directives.goBack = function($state) {
	return {
		restrict: 'A',
        link: function(scope, element, attrs) {
            element.click(function(e) {
                if (!e.target || e.target.className.indexOf('inner-container') == -1) return;
                element.find('.modal-content').addClass('rollOut');
                $('.backdrop').addClass('closing');
                setTimeout(function() { $state.go('^'); },300);
            });
        }
    };
};

directives.evolution = function($state, $stateParams) {
    return {
        restrict: 'E',
        replace: true,
        scope: { unit: '=', base: '=', evolvers: '=', evolution: '=', size: '@' },
        templateUrl: 'views/evolution.html',
        link: function(scope, element, attrs) {
            scope.goToState = function(id) {
                if (!Number.isInteger(id)) return;
                if (id == parseInt($stateParams.id,10)) return;
                var previous = $stateParams.previous.concat([ $stateParams.id ]);
                $state.go('main.search.view',{ id: id, previous: previous });
            };
        }
    };
};

directives.unit = function($state, $stateParams) {
    return {
        restrict: 'E',
        scope: { uid: '=' },
        template: '<a class="slot medium" decorate-slot uid="uid" ng-click="goToState(uid)"></a>',
        link: function(scope, element, attrs) {
            scope.goToState = function(id) {
                if (id == parseInt($stateParams.id,10)) return;
                var previous = $stateParams.previous.concat([ $stateParams.id ]);
                $state.go('main.search.view',{ id: id, previous: previous });
            };
        }
    };

};

directives.compare = function() {
    var fuse = new Fuse(window.units, { keys: [ 'name' ], id: 'number' });
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var target = element.typeahead(
                { minLength: 3, highlight: true },
                {
                    source: function(query, callback) { callback(fuse.search(query)); },
                    templates: {
                        suggestion: function(id) {
                            if (Number.isInteger(id)){
                                
                                var name = units[id].name, url = Utils.getThumbnailUrl(id+1);
                                //var name = units[id].name, url = Utils.getThumbnailUrl(id+1), url2 = Utils.getGlobalThumbnailUrl(id+1);
                                if (name.length > 63) name = name.slice(0,60) + '...';
                                var thumb = '<div class="slot small" style="background-image: url(' + url + ')"></div>';
                                //var thumb = '<div class="slot small" style="background-image: url(' + url2 + '), url(' + url + ')"></div>';
                                
                                return '<div><div class="suggestion-container">' + thumb + '<span>' + name + '</span></div></div>';
                            }
                            else{
                                var name = 'material', url = Utils.getThumbnailUrl(id);
                                var thumb = '<div class="slot small" style="background-image: url(' + url + ')"></div>';
                                return '<div><div class="suggestion-container">' + thumb + '<span>' + name + '</span></div></div>';
                            }
                        }
                    },
                    display: function(id) {
                        return units[id].name;
                    }
                }
            );
            
            target.bind('typeahead:select',function(e,suggestion) {
                $(e.currentTarget).prop('disabled', true);
                scope.compare = window.units[suggestion];
                scope.compareDetails = window.details[suggestion + 1];
                scope.compareCooldown = window.cooldowns[suggestion];
                scope.isCompareCaptainHybrid = (scope.compareDetails && scope.compareDetails.captain &&
                    scope.compareDetails.captain.global);
                scope.isCompareSailorHybrid = (scope.compareDetails && scope.compareDetails.sailor &&
                    scope.compareDetails.sailor.global);
                scope.isCompareSpecialHybrid = (scope.compareDetails && scope.compareDetails.special &&
                    scope.compareDetails.special.global);
                scope.isCompareSpecialStaged = (scope.compareDetails && scope.compareDetails.special &&
                    scope.compareDetails.special.constructor == Array);
                if (!scope.$$phase) scope.$apply();
            });

            element[0].style.backgroundColor = null;

        }
    };
};

directives.comparison = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var positive = (attrs.comparison == 'positive');
            var watch = scope.$watch(
                function() { return element.html(); },
                function() {
                    var isNegative = parseFloat(element.text(),10) < 0;
                    element.removeClass('positive negative withPlus');
                    if ((positive && !isNegative) || (!positive && isNegative)) element.addClass('positive');
                    else element.addClass('negative');
                    if (!isNegative) element.addClass('withPlus');
                }
            );
            scope.$on('$destroy',watch);
        }
    };
};

directives.addNames = function($stateParams, $rootScope) {
    var name = window.aliases;
    return {
        restrict: 'E',
        replace: true,
        template: '<table class="table table-striped-column abilities"><tbody></tbody></table>',
        link: function(scope, element, attrs) {
            var id = $stateParams.id, data = details[id];

                var currentAliases = name[id];
                if(currentAliases[0]!=''){
                element.append($('<tr><td>Japanese</td><td><div>'+ currentAliases[0] +'</div></td></tr>'));
                }
                if(currentAliases[1]!=''){
                    element.append($('<tr><td>French</td><td><div>'+ currentAliases[1] +'</div></td></tr>'));
                }
                if(currentAliases[2]){
                    var otherAliases = currentAliases.toString().replace(/(.*?),(.*?),/,"");
                    element.append($('<tr><td>Others</td><td><div>'+ otherAliases +'</div></td></tr>'));
                }
                }
    }
};    
    
    
directives.addTags = function($stateParams, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="tag-container"></div>',
        link: function(scope, element, attrs) {
            var id = $stateParams.id, data = details[id];
            // flags
            var flags = window.flags[id] || { };
            element.append($('<span class="tag flag">' + (flags.global ? 'Global unit' : 'Japan unit') + '</div>'));
            element.append($('<span class="tag flag">' +
                        (CharUtils.isFarmable(id) ? 'Farmable' : 'Non-farmable') + '</div>'));
            if (flags.rr) element.append($('<span class="tag flag">Rare Recruit only</div>'));
            if (flags.lrr) element.append($('<span class="tag flag">Limited Rare Recruit only</div>'));
            if (flags.promo) element.append($('<span class="tag flag">Promo-code only</div>'));
            if (flags.shop) element.append($('<span class="tag flag">Rayleigh Shop Unit</div>'));
            if (flags.special) element.append($('<span class="tag flag">One time only characters</div>'));
            if (CharUtils.checkFarmable(id, { 'Story Island': true }))
                element.append($('<span class="tag flag">Story mode only</div>'));
            if (CharUtils.checkFarmable(id, { Fortnight: true }))
                element.append($('<span class="tag flag">Fortnight only</div>'));
            if (CharUtils.checkFarmable(id, { Raid: true }))
                element.append($('<span class="tag flag">Raid only</div>'));
            if (CharUtils.checkFarmable(id, { Treasure: true }))
                element.append($('<span class="tag flag">Treasure Map only</div>'));
            if (CharUtils.checkFarmable(id, { 'Story Island': true, Fortnight: true }))
                element.append($('<span class="tag flag">Story mode & fortnight only</div>'));
            if (CharUtils.checkFarmable(id, { 'Story Island': true, Raid: true }))
                element.append($('<span class="tag flag">Story mode & raid only</div>'));
            if (CharUtils.checkFarmable(id, { Raid: true, Fortnight: true }))
                element.append($('<span class="tag flag">Raid & fortnight only</div>'));
            // matchers
            if (!data) return;
            matchers.forEach(function(matcher) {
                var name;
                // captain effects
                if (matcher.target == 'captain' && matcher.matcher.test(data.captain)) {
                    name = matcher.name;
                    if (!/captains$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' captain';
                    else name = name.replace(/s$/,'');
                    name = name.replace(/iing/,'ying');
                    element.append($('<span class="tag captain">' + name + '</div>'));
                }
                // sailor effects
                if (matcher.target.indexOf('sailor') === 0 && !(data[matcher.target] === undefined)) {
                    if (data[matcher.target].base){
                        for (var sailor in data[matcher.target]){
                            if (matcher.matcher.test(data[matcher.target][sailor])){
                                name = matcher.name;
                                if (!/sailor$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' sailor';
                                else name = name.replace(/s$/,'');
                                name = name.replace(/iing/,'ying');
                                element.append($('<span class="tag sailor">' + name + '</div>'));
                            }
                        }
                    }
                    else{
                        if (matcher.matcher.test(data[matcher.target])){
                            name = matcher.name;
                            if (!/sailor$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' sailor';
                            else name = name.replace(/s$/,'');
                            name = name.replace(/iing/,'ying');
                            element.append($('<span class="tag sailor">' + name + '</div>'));
                        }
                    }
                }
                // specials
                if (matcher.target.indexOf('special') === 0 && matcher.matcher.test(data[matcher.target])) {
                    name = matcher.name;
                    if (!/specials$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' special';
                    else name = name.replace(/s$/,'');
                    name = name.replace(/iing/,'ying');
                    element.append($('<span class="tag special">' + name + '</div>'));
                }
                // limit
                if (matcher.target.indexOf('limit') === 0 && matcher.matcher.test(data[matcher.target])) {
                    name = matcher.name;
                    if (!/limit$/.test(name)) name = name.replace(/ers$/,'ing').replace(/s$/,'') + ' limit';
                    else name = name.replace(/s$/,'');
                    name = name.replace(/iing/,'ying');
                    if (name != "Has Limit Break limit"){
                        element.append($('<span class="tag limit">' + name + '</div>'));
                    }
                }
            });
        }
    };
};

directives.addLinks = function($stateParams) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="link-container"></div>',
        link: function(scope, element, attrs) {
            var id = parseInt($stateParams.id,10), data = details[id];
            if (!units[id - 1]) return;
            var incomplete = units[id - 1].incomplete;
            var ul = $('<ul></ul>');
            if (!incomplete && window.flags[id] && window.flags[id].global) {
                var link = 'http://onepiece-treasurecruise.com/en/' + (id == '5' ? 'roronoa-zoro' : id == 1254 ? 'maelstrom-spider-squard-whitebeard-pirates-family' : id == '1923' ? 'c-5009' : id == '1924' ? 'c-5010' : id == '2200' ? 'c-5011' : id == '2201' ? 'c-5012' : 'c-' + id);//CHANGE THIS FOR DOFFY V2 IDS
                ul.append($('<li><a href="' + link + '" target="_blank">Official Guide (English)</a></li>'));
            }
            if (!incomplete) {
                if (id == 1478){
                    ul.append($('<li><a href="http://onepiece-treasurecruise.com/カリブー-カリブー海賊団船長/" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
                }
                else if (id == 1892){
                    ul.append($('<li><a href="http://onepiece-treasurecruise.com/ジュラキュール・ミホーク-シッケアール王国　跡/" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
                }
                else if ([ 2049, 2050, 2072, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2097, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2114, 2116, 2119, 2120, 2121, 2146, 2162, 2163, 2168, 2169, 2170, 2171, 2172, 2173, 2175, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2212, 2213, 2214, 2215, 2216, 2216, 2217, 2218, 2219, 2240, 2241, 2242, 2243, 2244, 2248, 2249, 2255 ].indexOf(id) != -1){
                    ul.append($('<li><a href="http://onepiece-treasurecruise.com/c%E2%80%90' + id + '/" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
                }
                else if ([ 2176, 2177, 2178, 2179 ].indexOf(id) != -1){
                    ul.append($('<li><a href="http://onepiece-treasurecruise.com/%EF%BD%83%E2%80%90' + id + '/" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
                }
                else{
                    ul.append($('<li><a href="http://onepiece-treasurecruise.com/c-' + id + '" target="_blank">' +
                        'Official Guide (Japanese)</a></li>'));
                }
            }
            if (gw[id-1] != null) {
                ul.append($('<li><a href="http://xn--pck6bvfc.gamewith.jp/article/show/' + gw[id-1] + '" target="_blank">' +
                        'GameWith Page (Japanese)</a> | <a href="http://translate.google.com/translate?sl=ja&tl=en&u=http://xn--pck6bvfc.gamewith.jp/article/show/' + gw[id-1] + '" target="_blank">' +'Google Translate</a></li>'));
            }
            if (ul.children().length > 0)
                element.append(ul);
        }
    };
};

directives.costSlider = function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.ionRangeSlider({
                grid: true,
                type: 'double',
                min: scope.filters.cost[0],
                max: scope.filters.cost[1],
                from: scope.filters.cost[0],
                to: scope.filters.cost[1],
                postfix: ' cost',
                onFinish: function(data) {
                    scope.filters.cost[0] = data.from;
                    scope.filters.cost[1] = data.to;
                    if (!scope.$$phase) scope.$apply();
                }
            });
        }
    };
};

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

for (var filter in filters)
    app.filter(filter, filters[filter]);

})();
