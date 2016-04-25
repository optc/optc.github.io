(function() {

/***************
 * Common data *
 ***************/

var filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };

/***************
 * Controllers *
 ***************/

var app = angular.module('optc');

app.controller('MainCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage, $controller) {

    var colors = Chart.defaults.global.colours;
    //Change Default Chart Colors
    Chart.defaults.global.colours = ["#0e91d3", "#F7464A", "#4D5360", "#97BBCD", "#F7464A", "#4D5360", "#4D5360"];
    colors = colors.splice(2,0,colors.splice(1,1)[0]);
    

    if (!$rootScope.hasOwnProperty('nightMode')) {
        $rootScope.nightMode = $storage.get('chars.night', false);
        $rootScope.$watch('nightMode',function(night) { $storage.set('chars.night', night); });
    }

    $scope.query = $state.params.query;

    $scope.$watch('query',function(query) {
        if (query === null || query === undefined || $scope.query == $stateParams.query) return;
        $state.go('.',{ query: $scope.query });
        $scope.table.parameters = CharUtils.generateSearchParameters($scope.query, jQuery.extend({ }, $rootScope.filters));
    });

    $controller('DismissalCtrl');

});

app.controller('SidebarCtrl',function($scope, $rootScope, $stateParams, $timeout, MATCHER_IDS) {

    if (!$rootScope.filters) $rootScope.filters = filters;

    $timeout(function() {
        $scope.$watch('filters',function(filters) {
            if (!filters || Object.keys(filters).length === 0) return;
            var data = jQuery.extend({ }, $rootScope.filters);
            $scope.table.parameters = CharUtils.generateSearchParameters($stateParams.query, data);
            if (!$scope.$$phase) $scope.$apply();
        },true);
    });

    $scope.clearFilters = function() {
        filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };
        $rootScope.filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };
    };

    $scope.onFilterClick = function(e, value) {
        var type = null;
        if (e.target.hasAttribute('ng-model')) type = e.target.getAttribute('ng-model');
        else {
            var target = $(e.target);
            var child = target.find('.filter[ng-model]').first();
            if (child.length > 0) type = child.attr('ng-model');
            else {
                var parent = target.closest('.filter[ng-model]').first();
                if (parent.length > 0) type = parent.attr('ng-model');
            }
        }
        if (type === null) return;
        type = type.split(/\./)[1];
        $rootScope.filters[type] = ($rootScope.filters[type] == value ? null : value);
    };

    $scope.onClassClick = function(e, clazz) {
        if ($rootScope.filters.classes.indexOf(clazz) == -1) {
            $rootScope.filters.classes = $rootScope.filters.classes.slice(0,1);
            $rootScope.filters.classes.push(clazz);
        }
        else $rootScope.filters.classes.splice($rootScope.filters.classes.indexOf(clazz), 1);
    };

    $scope.onStarsClick = function(e, stars) {
        if ($rootScope.filters.stars.indexOf(stars) == -1) $rootScope.filters.stars.push(stars);
        else $rootScope.filters.stars.splice($rootScope.filters.stars.indexOf(stars), 1);
    };

    $scope.onDropFilterClick = function(e,value) {
        var tokens = e.target.getAttribute('ng-model').split(/\./).slice(1);
        var type = tokens[0], key = tokens[1];
        if (!$rootScope.filters.hasOwnProperty(type)) $rootScope.filters[type] = { };
        $rootScope.filters[type][key] = ($rootScope.filters[type][key] == value ? null : value);
    };

    $scope.filterData = window.matchers;

    $scope.repeat = function(n) {
        return (n < 1 ? [ ] : new Array(n));
    };

});

app.controller('DetailsCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage) {

    // data
    var id = parseInt($stateParams.id, 10);
    $scope.id = id;
    $scope.unit = jQuery.extend({},window.units[id - 1]);
    $scope.hybrid = $scope.unit.class && $scope.unit.class.constructor == Array;
    $scope.details = window.details[id];
    $scope.cooldown = window.cooldowns[id - 1];
    $scope.evolution = window.evolutions[id];
    $scope.family = window.families[id - 1];
    $scope.customLevel = { };

    // derived data
    var evolvesFrom = Utils.searchBaseForms(id);
    $scope.evolvesFrom = [ ];
    for (var from in evolvesFrom) {
        for (var i=0;i<evolvesFrom[from].length;++i)
            $scope.evolvesFrom.push({ from: parseInt(from, 10), to: $scope.id, via: evolvesFrom[from][i] });
    }
    $scope.usedBy = CharUtils.searchEvolverEvolutions(id);
    $scope.drops = CharUtils.searchDropLocations(id);
    $scope.tandems = CharUtils.searchTandems(id);
    $scope.manuals = CharUtils.searchDropLocations(-id);
    $scope.sameSpecials = CharUtils.searchSameSpecials(id);
    $scope.collapsed = { to: true, from: true, used: true, drops: true, manuals: true, families: true }; 

    $scope.families = [ ];
    if ($scope.family) {
        window.families.forEach(function(family,n) {
            if (family != $scope.family || n+1 == $scope.id) return;
            var id = n +1;
            if (!CharUtils.isFarmable(id) || Utils.searchBaseForms(id)) return;
            var name = units[id - 1].name;
            if (name.length  > 25) name = name.slice(0,22) + '...';
            CharUtils.searchDropLocations(id).forEach(function(location) {
                $scope.families.push({
                    uid: n + 1,
                    name: name,
                    location: location
                });
            });
            
            //Super Hack Job to show Karoo as a socket for Vivi
            if (family == "Nefertari Vivi"){
                if (!$scope.families.filter(function(e) { return e.uid == 445; }).length>0){
                    $scope.families.push({
                        uid: 445,
                        name: units[444].name,
                        location:  {data: ["All Difficulties"], name: "Supersonic Duck Squadron! Fortnight", thumb:445}
                    });
                }
            }
        });
    }

    // hidden elements
    var isPreview = $scope.unit.preview;
    var hasStats = [ 'minHP', 'minATK', 'minRCV', 'maxHP', 'maxATK', 'maxRCV' ].some(function(x) { return $scope.unit[x]; });
    $scope.hidden = {
        stats: isPreview && !hasStats,
        abilities: isPreview && !window.details.hasOwnProperty($scope.id)
    };

    // events/functions
    $scope.getEvos = CharUtils.getEvolversOfEvolution;
    $scope.sizeOf = function(target) { return Object.keys(target).length; };
    $scope.withButton = $stateParams.previous.length > 0;
    $scope.onBackClick = function() {
        var previous = $stateParams.previous.splice(-1)[0];
        $state.go('main.search.view',{ id: previous, previous: $stateParams.previous });
    };
    $scope.clearComparison = function() {
        $scope.compare = null;
        $('#compare').val('');
        $('#compare').prop('disabled', false);
    };
    $scope.getPrevious = function() { return $stateParams.previous.concat($scope.id); };
    $scope.isCaptainHybrid = ($scope.details && $scope.details.captain && $scope.details.captain.global);
    $scope.isSpecialHybrid = ($scope.details && $scope.details.special && $scope.details.special.global);
    $scope.isSpecialStaged = ($scope.details && $scope.details.special && $scope.details.special.constructor == Array);

    $scope.$watch('customLevel.level',function(level) {
        if (isNaN(level) || level < 1 || level > $scope.unit.maxLevel) {
            $scope.customLevel.enabled = false;
            return;
        }
        jQuery.extend($scope.customLevel, {
            enabled: true,
            atk: CharUtils.getStatOfUnit($scope.unit, 'atk', level),
            hp: CharUtils.getStatOfUnit($scope.unit, 'hp', level),
            rcv: CharUtils.getStatOfUnit($scope.unit, 'rcv', level),
        });
    });

    // radar
    if ($scope.unit.incomplete) return;
    $scope.radar = {
        labels: [ 'HP', 'ATK', 'RCV' ],
        data: [ [
            $scope.unit.maxHP / 4000 * 100,
            $scope.unit.maxATK / 1500 * 100,
            Math.max(0, $scope.unit.maxRCV / 550 * 100)
        ] ],
        options: {
            scaleOverride: true,
            scaleSteps: 10,
            scaleStepWidth: 10,
            sclaeStartValue: 0,
            tooltipTemplate: '<%= Math.round(value * { HP: 4000, ATK: 1500, RCV: 550 }[label] / 100) + " " + label %>',
            multiTooltipTemplate: '<%= Math.round(value * { HP: 4000, ATK: 1500, RCV: 550 }[label] / 100) %>'
        }
    };
    
    if($scope.unit.maxLevel<6)
        $scope.showLine = false;
    
    // radars for Line Graph
    if ($scope.unit.incomplete) return;
    if ($scope.unit.maxLevel>6){
        $scope.radarHP = {
            labels: [1,Math.ceil($scope.unit.maxLevel*0.1) , Math.ceil($scope.unit.maxLevel*0.2), Math.ceil($scope.unit.maxLevel*0.3), Math.ceil($scope.unit.maxLevel*0.4), Math.ceil($scope.unit.maxLevel*0.5), Math.ceil($scope.unit.maxLevel*0.6),Math.ceil($scope.unit.maxLevel*0.7), Math.ceil($scope.unit.maxLevel*0.8), Math.ceil($scope.unit.maxLevel*0.9), $scope.unit.maxLevel],
            series: [$scope.unit.name+' HP'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'hp', 1),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.unit, 'hp', Math.ceil($scope.unit.maxLevel*0.9)),
                 $scope.unit.maxHP]
            ]};
    $scope.radarATK = {
            labels: [1,Math.ceil($scope.unit.maxLevel*0.1) , Math.ceil($scope.unit.maxLevel*0.2), Math.ceil($scope.unit.maxLevel*0.3), Math.ceil($scope.unit.maxLevel*0.4), Math.ceil($scope.unit.maxLevel*0.5), Math.ceil($scope.unit.maxLevel*0.6),Math.ceil($scope.unit.maxLevel*0.7), Math.ceil($scope.unit.maxLevel*0.8), Math.ceil($scope.unit.maxLevel*0.9), $scope.unit.maxLevel],
            series: [$scope.unit.name+' ATK'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'atk', 1),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.unit, 'atk', Math.ceil($scope.unit.maxLevel*0.9)),
                 $scope.unit.maxATK]
            ]};
        $scope.radarRCV = {
            labels: [1,Math.ceil($scope.unit.maxLevel*0.1) , Math.ceil($scope.unit.maxLevel*0.2), Math.ceil($scope.unit.maxLevel*0.3), Math.ceil($scope.unit.maxLevel*0.4), Math.ceil($scope.unit.maxLevel*0.5), Math.ceil($scope.unit.maxLevel*0.6),Math.ceil($scope.unit.maxLevel*0.7), Math.ceil($scope.unit.maxLevel*0.8), Math.ceil($scope.unit.maxLevel*0.9), $scope.unit.maxLevel],
            series: [$scope.unit.name+' RCV'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'rcv', 1),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.unit, 'rcv', Math.ceil($scope.unit.maxLevel*0.9)),
                 $scope.unit.maxRCV]
            ]};
    }else{
        $scope.radarHP = {
            labels: ['1',$scope.unit.maxLevel],
            series: ['HP'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'hp', 1) , $scope.unit.maxHP]
            ]
        };
        $scope.radarATK = {
            labels: ['1',$scope.unit.maxLevel],
            series: ['ATK'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'atk', 1) , $scope.unit.maxATK]
            ]
        };
        $scope.radarRCV = {
            labels: ['1',$scope.unit.maxLevel],
            series: ['RCV'],
            data: [
                [CharUtils.getStatOfUnit($scope.unit, 'rcv', 1) , $scope.unit.maxRCV]
            ]
        };
    }
    
    $scope.$watch('compare',function(compare) {
        //Delete old Comparison data
        $scope.radar.data = $scope.radar.data.slice(0,1);
        $scope.radarHP.data = $scope.radarHP.data.slice(0,1);
        $scope.radarHP.series = $scope.radarHP.series.slice(0,1);
        $scope.radarATK.data = $scope.radarATK.data.slice(0,1);
        $scope.radarATK.series = $scope.radarATK.series.slice(0,1);
        $scope.radarRCV.data = $scope.radarRCV.data.slice(0,1);
        $scope.radarRCV.series = $scope.radarRCV.series.slice(0,1);
        if (compare) {
            $scope.radar.data.push([
                $scope.compare.maxHP / 4000 * 100,
                $scope.compare.maxATK / 1500 * 100,
                Math.max(0, $scope.compare.maxRCV / 550 * 100)
            ]);
            
            $scope.radarHP.series.push($scope.compare.name+' HP');
            $scope.radarHP.data.push(
                [CharUtils.getStatOfUnit($scope.compare, 'hp', 1),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.compare, 'hp', Math.ceil($scope.compare.maxLevel*0.9)),
                 $scope.compare.maxHP]
            );
            $scope.radarATK.series.push($scope.compare.name+' ATK');
            $scope.radarATK.data.push(
                [CharUtils.getStatOfUnit($scope.compare, 'atk', 1),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.compare, 'atk', Math.ceil($scope.compare.maxLevel*0.9)),
                 $scope.compare.maxATK]
            );
            $scope.radarRCV.series.push($scope.compare.name+' RCV');
            $scope.radarRCV.data.push(
                [CharUtils.getStatOfUnit($scope.compare, 'rcv', 1),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.1)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.2)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.3)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.4)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.5)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.6)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.7)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.8)),
                 CharUtils.getStatOfUnit($scope.compare, 'rcv', Math.ceil($scope.compare.maxLevel*0.9)),
                 $scope.compare.maxRCV]
            );
        }
        if (!$scope.$$phase) $scope.$apply();
    });

});

app.controller('ColumnsCtrl',function($scope, $rootScope, $state, $stateParams, $storage) {

    $scope.columns = { 'HP/ATK': false, 'HP/RCV': false, 'ATK/RCV': false, 'ATK/CMB': false,
        'CMB': false, 'ATK/cost': false, 'HP/cost': false, 'Minimum cooldown': false,
        'Initial cooldown': false,'MAX EXP': false };

    var additionalColumns = $storage.get('charColumns', [ ]);

    additionalColumns.forEach(function(x) {
        if ($scope.columns.hasOwnProperty(x))
            $scope.columns[x] = true;
    });

    $scope.save = function() {
        var result = Object.keys($scope.columns).filter(function(x) { return $scope.columns[x]; });
        $storage.set('charColumns', result);
        window.location.reload();
    };

});

})();
