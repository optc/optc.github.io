(function() {

/***************
 * Common data *
 ***************/

var filters = { custom: [ ], classes: [ ], types: [ ], stars: [ ], cost: [ 1, 99 ], toggle: true, typeEnabled: false, characterEnabled: false, classEnabled: false, dropEnabled: false, supportEnabled: false, limitEnabled: false, sailorEnabled: false, swapEnabled: false, specialEnabled: false, captainEnabled: false, temporaryEnabled: false, specCaptEnabled: false, tmkcEnabled: false, exclusionEnabled: false, costEnabled: false, rarityEnabled: false, farmEnabled: false, nonfarmEnabled: false };

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

    $scope.getRandChar = function(){
        var range = parseInt($rootScope.table.data.length) + 1;
        return $rootScope.table.data[Math.floor(Math.random() * range)][0];
    };

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
        filters = { custom: [ ], classes: [ ], types: [ ], stars: [ ], cost: [ 1, 99 ], toggle: true, typeEnabled: false, characterEnabled: false, classEnabled: false, dropEnabled: false, supportEnabled: false, limitEnabled: false, sailorEnabled: false, swapEnabled: false, specialEnabled: false, captainEnabled: false, temporaryEnabled: false, specCaptEnabled: false, tmkcEnabled: false, exclusionEnabled: false, costEnabled: false, rarityEnabled: false, farmEnabled: false, nonfarmEnabled: false };
        $rootScope.filters = { custom: [ ], classes: [ ], types: [ ], stars: [ ], cost: [ 1, 99 ], toggle: true, typeEnabled: false, characterEnabled: false, classEnabled: false, dropEnabled: false, supportEnabled: false, limitEnabled: false, sailorEnabled: false, swapEnabled: false, specialEnabled: false, captainEnabled: false, temporaryEnabled: false, specCaptEnabled: false, tmkcEnabled: false, exclusionEnabled: false, costEnabled: false, rarityEnabled: false, farmEnabled: false, nonfarmEnabled: false };
    };

    $scope.toggleFilters = function() {
        for (x in filters){
            if (x.includes("Enabled")){
                if (x == "typeEnabled" || x == "characterEnabled" || x == "classEnabled") { filters[x] = !filters["toggle"]; $rootScope.filters[x] = !filters["toggle"]; }
                else { filters[x] = filters["toggle"]; $rootScope.filters[x] = filters["toggle"]; }
            }
        }
        filters["toggle"] = !filters["toggle"];
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

    $scope.onTypeClick = function(e, value) {
        if ($rootScope.filters.types.indexOf(value) == -1) {
            //$rootScope.filters.classes = $rootScope.filters.classes.slice(0,1);
            $rootScope.filters.types.push(value);
        }
        else $rootScope.filters.types.splice($rootScope.filters.types.indexOf(value), 1);
    };

    $scope.onClassClick = function(e, clazz) {
        if ($rootScope.filters.classes.indexOf(clazz) == -1) {
            //$rootScope.filters.classes = $rootScope.filters.classes.slice(0,1);
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

app.controller('DetailsCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage, $http) {

    var rumbleRequest = {
      method: 'get',
      url: '../common/data/rumble.json',
      dataType: 'json',
      contentType: "application/json"
    };

    $scope.rumble = {};

    // data
    var id = parseInt($stateParams.id, 10);
    $scope.id = id;
    $scope.unit = jQuery.extend({},window.units[id - 1]);
    $scope.hybrid = $scope.unit.class && $scope.unit.class.constructor == Array;
    $scope.dualunit = $scope.unit.type && $scope.unit.type.constructor == Array;
    $scope.details = window.details[id];
    $scope.cooldown = window.cooldowns[id - 1];
    $scope.evolution = window.evolutions[id];
    $scope.family = window.families[id - 1];
    $http(rumbleRequest)
        .success(function (jsonData) {
            $scope.rumble = jsonData.units.filter(unit => unit.id == id)[0];
            if ( $scope.rumble.basedOn ) {
              $scope.rumble = jsonData.units.filter(unit => unit.id == $scope.rumble.basedOn)[0];
            }
        })
        .error(function () {

        });
    $scope.customLevel = { };
    $scope.isArray = Array.isArray;

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

    if (Array.isArray($scope.family)){
        var tempName = "";
        $scope.family.forEach(function(name){
            tempName += name + " & ";
        });
        tempName = tempName.substring(0, tempName.length - 3);
        $scope.displayfamily = tempName;
    }
    else{
        $scope.displayfamily = window.families[id - 1];
    }

    $scope.families = [ ];
    if ($scope.family) {
        if (Array.isArray($scope.family)){
            $scope.family.forEach(function(scopefam){
                window.families.forEach(function(family,n) {
                if (Array.isArray(family)){
                    family.forEach(function(duo){
                        if (duo != scopefam || n+1 == $scope.id) return;
                        var id = n+1;
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
                    });
                }
                if (family != scopefam || n+1 == $scope.id) return;
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
                if (family == "Demalo Black"){
                    if (!$scope.families.filter(function(e) { return e.uid == 985; }).length>0){
                        $scope.families.push({
                            uid: 985,
                            name: units[985].name,
                            location:  {data: ["Ultimate"], name: "Clash!? Impostor Straw Hat Pirates", thumb:989}
                        });
                    }
                }
            });
            });
        }
        else{
            window.families.forEach(function(family,n) {
                if (Array.isArray(family)){
                    family.forEach(function(duo){
                        if (duo != $scope.family || n+1 == $scope.id) return;
                        var id = n+1;
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
                    });
                }
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
                if (family == "Demalo Black"){
                    if (!$scope.families.filter(function(e) { return e.uid == 985; }).length>0){
                        $scope.families.push({
                            uid: 985,
                            name: units[985].name,
                            location:  {data: ["Ultimate"], name: "Clash!? Impostor Straw Hat Pirates", thumb:989}
                        });
                    }
                }
            });
        }
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
    $scope.isCaptainHybrid = ($scope.details && $scope.details.captain && ($scope.details.captain.global || $scope.details.captain.base || $scope.details.captain.combined || $scope.details.captain.character1));
    $scope.isSailorHybrid = ($scope.details && $scope.details.sailor && ($scope.details.sailor.global || $scope.details.sailor.base || $scope.details.sailor.combined || $scope.details.sailor.character1));
    $scope.isSpecialHybrid = ($scope.details && $scope.details.special && ($scope.details.special.global || $scope.details.special.character1));
    $scope.isCooldownHybrid = ($scope.cooldown && (Array.isArray($scope.cooldown[0])));
    $scope.isSpecialStaged = ($scope.details && $scope.details.special && $scope.details.special.constructor == Array);
    $scope.isLimitStaged = ($scope.details && $scope.details.limit && $scope.details.limit.constructor == Array);
    $scope.isPotentialStaged = ($scope.details && $scope.details.potential && $scope.details.potential.constructor == Array);
    $scope.isSupportStaged = ($scope.details && $scope.details.support && $scope.details.support.constructor == Array);
    $scope.isSwapHybrid = ($scope.details && $scope.details.swap && $scope.details.swap.global);
    $scope.isfestAbilityHybrid = ($scope.details && $scope.details.festAbility && ($scope.details.festAbility.character1));
    $scope.isfestSpecialHybrid = ($scope.details && $scope.details.festSpecial && ($scope.details.festSpecial.character1));
    $scope.isfestAttackPatternHybrid = ($scope.details && $scope.details.festAttackPattern && ($scope.details.festAttackPattern.character1));
    $scope.isfestAttackTargetHybrid = ($scope.details && $scope.details.festAttackTarget && ($scope.details.festAttackTarget.character1));
    $scope.isfestResistanceHybrid = ($scope.details && $scope.details.festResistance && ($scope.details.festResistance.character1));
    $scope.isVSConditionHybrid = ($scope.details && $scope.details.VSCondition && ($scope.details.VSCondition.character1));
    $scope.isVSSpecialHybrid = ($scope.details && $scope.details.VSSpecial && ($scope.details.VSSpecial.character1));

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

    $scope.columns = { 'Limit Break HP' : false, 'Limit Break ATK': false, 'Limit Break RCV': false, 'Limit Break: Expansion HP' : false, 'Limit Break: Expansion ATK': false, 'Limit Break: Expansion RCV': false,
        'HP/ATK': false, 'HP/RCV': false, 'ATK/RCV': false, 'ATK/CMB': false,
        'CMB': false, 'ATK/cost': false, 'HP/cost': false, 'Minimum cooldown': false,
        'Initial cooldown': false, 'Minimum Limit Break cooldown': false,
        'Initial Limit Break cooldown': false, 'Minimum Limit Break Expansion cooldown': false,
        'Initial Limit Break Expansion cooldown': false, 'MAX EXP': false, 'Limit Break Slots': false };

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
