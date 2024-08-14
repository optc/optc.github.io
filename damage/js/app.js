(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngSanitize', 'ngDialog' ]);

/******************
 * SharedRootCtrl *
 ******************/

var SharedRootCtrl = function($scope, $rootScope, $timeout) {

    $rootScope.data = {
        //setting default values
        team: Array.from({length: 6}, () => ({
            // you may add properties, but may NOT change the order,
            // due to the way the export link is implemented
            unit: null,
            level: -1,
            candies: { hp: 0, atk: 0, rcv: 0 },
            limit: 0, // LB level, max 50
            sugarToy: false,
            tokiState: false,
            clone: false,
        })),

        percHP: 100.0,
        
        ship: [ 1, 10 ],

        defense: 0,

        effect: null,

        rainbowDamage: Array(6).fill(false),

        // if the keys are renamed, make sure to replace those in `ignoreImmunities` in cruncher.js, specials.js, captain.js, etc
        enemyImmunities: {
            all: false,
            burn: false,
            def: false,
            delay: false,
            increaseDamageTaken: false,
            negative: false,
            poison: false,
        },

        enemyBuffs: {
            barrier: false, // add a toggle for the barrier rather than use the comboShield, because orb barriers aren't implemented yet
        }
    };

    $rootScope.tdata = { // transitional data

        team: Array.from({length: 6}, () => ({
            orb: 1,
            special: false,
            altspecial: false,
            capspecial: false,
            lock: 0,
            silence: 0,
            removed: 0,
        })),

        sugarToysSpecialEnabled: 0, // increment for each sugar special activated

        customHitModifiers: null,
        
        orderOverride: { },
        typeOverride: { },

        url: null,

        turnCounter: {
            enabled: false,
            value: 0
        },
        
        healCounter: {
            enabled: false,
            value: 0
        },

        basehpCounter: {
            enabled: false,
            value: 0
        },

        rcvCounter: {
            enabled: false,
            value: 0
        },

        semlaCounter: {
            enabled: false,
            value: 0
        },

        damageCounter: {
            enabled: false,
            value: 0
        },

        dmgreductionCounter: {
            enabled: false,
            value: 0
        },

        carrychainCounter: {
            enabled: false,
            value: 0
        },

        debuffCounter: {
            enabled: false,
            value: 0
        },

    };

    // should be switched around when units are switched, just like `tdata` and `data`
    // this separated from `tdata` to prevent circular references when caching.
    $rootScope.cachedParams = Array.from({length: 6}, () => ({
        special: null,
        altspecial: null,
        capspecial: null,
    })),

    $rootScope.numbers = {
        hp: 1,
        rcv: 0
    };

    $rootScope.options = {
        gOrbsEnabled: 0,
        strOrbsEnabled: 0,
        dexOrbsEnabled: 0,
        qckOrbsEnabled: 0,
        psyOrbsEnabled: 0,
        intOrbsEnabled: 0,
        rainbowOrbsEnabled: 0,
        meatOrbsEnabled: 0,
        tndOrbsEnabled: 0,
        wanoOrbsEnabled: 0,
        emptyOrbsEnabled: 0,
        superBombOrbsEnabled: 0,
        sugarToysEnabled: 0,
        vegapunkOptionsEnabled: 0,
        tokiStateEnabled: 0,
        cloneEnabled: 0,
        classOverrideEnabled: 0,
        slidersEnabled: true,
        sidebarVisible: true,
        transientMode: false,
        crunchInhibitor: Infinity
    };

    $scope.resetSlot = function(n,onlyTransitional) {
        // toggle special if active so deactivation methods run
        if ($scope.tdata.team[n].special)
            $rootScope.$emit('specialToggled', n, false);
        if ($scope.tdata.team[n].altspecial)
            $rootScope.$emit('altspecialToggled', n, false);
        if ($scope.tdata.team[n].capspecial)
            $rootScope.$emit('capspecialToggled', n, false);
        // toggle events if any
        if ($scope.data.team[n].unit) {
            var uid = $scope.data.team[n].unit.number + 1;
            if (window.events.hasOwnProperty(uid) && window.events[uid].hasOwnProperty('onRemoval'))
                window.events[uid].onRemoval($rootScope);
        }
        // reset slot
        if (!onlyTransitional)
            $scope.data.team[n] = {
                unit: null,
                level: -1,
                candies: { hp: 0, atk: 0, rcv: 0 },
                limit: 0,
                sugarToy: false,
                tokiState: false,
                clone: false,
            };
        $scope.tdata.team[n] = {
            orb: 1,
            g: false,
            str: false,
            dex: false,
            qck: false,
            psy: false,
            int: false,
            rainbow: false,
            special: false,
            lock: 0,
            silence: 0,
            removed: 0,
        };
        for (const key in $scope.cachedParams[n]) {
            $scope.cachedParams[n][key] = null;
        }
    };

    $scope.toggleEnemyImmunity = function(isAllImmunityToggled) {
        if (isAllImmunityToggled) {
            for (const key in $scope.data.enemyImmunities) {
                $scope.data.enemyImmunities[key] = $scope.data.enemyImmunities.all;
            }
        } else {
            var isAllEnabled = true;
            for (const key in enemyImmunities) {
                if (!$scope.data.enemyImmunities[key]) {
                    isAllEnabled = false;
                    break;
                }
            }
            $scope.data.enemyImmunities.all = isAllEnabled;
        }
    }

    /**
     * If all sugarToys are true, then sets all to false.
     * Sets all to true when at least one is false.
     */
    $scope.toggleSugarToys = function() {
        let newValue = !$scope.data.team.every(x => x.sugarToy);
        $scope.data.team.forEach(x => x.sugarToy = newValue);
    };

    /**
     * Sets all tokiStates to false. Unlike sugarToys, tokiState should only be
     * applied to 2 units max, so it does not make sense to enable it for all units.
     */
    $scope.resetTokiStates = function() {
        $scope.data.team.forEach(x => x.tokiState = false);
    };

    /**
     * Sets all Limit Break Levels to 0 if they have values, to character MAX if they are all 0.
     */
    $scope.toggleLimitBreakLevels = function() {
        $scope.data.team.some(x => x.limit > 0) ? $scope.data.team.forEach(x => x.limit = 0) : $scope.data.team.forEach(x => x.limit = x.unit ? x.unit.limitStats.atk.length : 0);
    };

    /**
     * Sets all Level Limit Break Levels to 0 if they have values, to character MAX if they are all 0.
     */
    $scope.toggleLLimitBreakLevels = function() {
        $scope.data.team.some(x => x.llimit > 0) ? $scope.data.team.forEach(x => x.llimit = 0) : $scope.data.team.forEach(x => x.llimit = x.unit ? x.unit.maxLevel == 99 ? 5 : 0 : 0);
    };

    // to be invoked every time a new unit is set in a slot so the insertion events can be triggered
    $scope.slotChanged = function(n) {
        if (!$scope.data.team[n].unit) return;
        var uid = $scope.data.team[n].unit.number + 1;
        if (window.events.hasOwnProperty(uid) && window.events[uid].hasOwnProperty('onInsertion'))
            window.events[uid].onInsertion($rootScope);
    };

    /* * * * * [G] orb control * * * * */

    var resetGOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'g')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset g slots automatically
    $scope.$watch('options.gOrbsEnabled',function() {
        if (!$rootScope.areGOrbsEnabled())
            resetGOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areGOrbsEnabled())
            resetGOrbs();
    });

    $rootScope.areGOrbsEnabled = function() {
        if ($rootScope.options.gOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.gOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [STR] orb control * * * * */

    var resetSTROrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'str')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset STR slots automatically
    $scope.$watch('options.strOrbsEnabled',function() {
        if (!$rootScope.areSTROrbsEnabled())
            resetSTROrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areSTROrbsEnabled())
            resetSTROrbs();
    });

    $rootScope.areSTROrbsEnabled = function() {
        if ($rootScope.options.strOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.strOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [DEX] orb control * * * * */

    var resetDEXOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'dex')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset DEX slots automatically
    $scope.$watch('options.dexOrbsEnabled',function() {
        if (!$rootScope.areDEXOrbsEnabled())
            resetDEXOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areDEXOrbsEnabled())
            resetDEXOrbs();
    });

    $rootScope.areDEXOrbsEnabled = function() {
        if ($rootScope.options.dexOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.dexOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [QCK] orb control * * * * */

    var resetQCKOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'qck')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset QCK slots automatically
    $scope.$watch('options.qckOrbsEnabled',function() {
        if (!$rootScope.areQCKOrbsEnabled())
            resetQCKOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areQCKOrbsEnabled())
            resetQCKOrbs();
    });

    $rootScope.areQCKOrbsEnabled = function() {
        if ($rootScope.options.qckOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.qckOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [PSY] orb control * * * * */

    var resetPSYOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'psy')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset PSY slots automatically
    $scope.$watch('options.psyOrbsEnabled',function() {
        if (!$rootScope.arePSYOrbsEnabled())
            resetPSYOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.arePSYOrbsEnabled())
            resetPSYOrbs();
    });

    $rootScope.arePSYOrbsEnabled = function() {
        if ($rootScope.options.psyOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.psyOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [INT] orb control * * * * */

    var resetINTOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'int')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset INT slots automatically
    $scope.$watch('options.intOrbsEnabled',function() {
        if (!$rootScope.areINTOrbsEnabled())
            resetINTOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areINTOrbsEnabled())
            resetINTOrbs();
    });

    $rootScope.areINTOrbsEnabled = function() {
        if ($rootScope.options.intOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.intOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [RAINBOW] orb control * * * * */

    var resetRainbowOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'rainbow')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset rainbow slots automatically
    $scope.$watch('options.rainbowOrbsEnabled',function() {
        if (!$rootScope.areRainbowOrbsEnabled())
            resetRainbowOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areRainbowOrbsEnabled())
            resetRainbowOrbs();
    });

    $rootScope.areRainbowOrbsEnabled = function() {
        if ($rootScope.options.rainbowOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.rainbowOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [MEAT] orb control * * * * */

    var resetMeatOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'meat')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset meat slots automatically
    $scope.$watch('options.meatOrbsEnabled',function() {
        if (!$rootScope.areMeatOrbsEnabled())
            resetMeatOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areMeatOrbsEnabled())
            resetMeatOrbs();
    });

    $rootScope.areMeatOrbsEnabled = function() {
        if ($rootScope.options.meatOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.meatOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [TND] orb control * * * * */

    var resetTndOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'tnd')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset tnd slots automatically
    $scope.$watch('options.tndOrbsEnabled',function() {
        if (!$rootScope.areTndOrbsEnabled())
            resetTndOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areTndOrbsEnabled())
            resetTndOrbs();
    });

    $rootScope.areTndOrbsEnabled = function() {
        if ($rootScope.options.tndOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.tndOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [WANO] orb control * * * * */

    var resetWanoOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'wano')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset wano slots automatically
    $scope.$watch('options.wanoOrbsEnabled',function() {
        if (!$rootScope.areWanoOrbsEnabled())
            resetWanoOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areWanoOrbsEnabled())
            resetWanoOrbs();
    });

    $rootScope.areWanoOrbsEnabled = function() {
        if ($rootScope.options.wanoOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.wanoOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [EMPTY] orb control * * * * */

    var resetEmptyOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'empty')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset empty slots automatically
    $scope.$watch('options.emptyOrbsEnabled',function() {
        if (!$rootScope.areEmptyOrbsEnabled())
            resetEmptyOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areEmptyOrbsEnabled())
            resetEmptyOrbs();
    });

    $rootScope.areEmptyOrbsEnabled = function() {
        if ($rootScope.options.emptyOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.emptyOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * [SUPERBOMB] orb control * * * * */

    var resetSuperBombOrbs = function() {
        for (var i=0;i<6;++i) {
            if ($scope.tdata.team[i].orb == 'superbomb')
                $scope.tdata.team[i].orb = 1;
        }
    };

    // reset empty slots automatically
    $scope.$watch('options.superBombOrbsEnabled',function() {
        if (!$rootScope.areSuperBombOrbsEnabled())
            resetSuperBombOrbs();
    });

    $scope.$watch('data.effect',function() {
        if (!$rootScope.areSuperBombOrbsEnabled())
            resetSuperBombOrbs();
    });

    $rootScope.areSuperBombOrbsEnabled = function() {
        if ($rootScope.options.superBombOrbsEnabled > 0) return true;
        if ($rootScope.data.effect) {
            var effect = window.effects[$rootScope.data.effect];
            if (effect && effect.superBombOrbsEnabled) return true;
        }
        return false;
    };

    /* * * * * Custom hit modifiers resetting * * * * */

    var resetTransitional = function() {
        $scope.tdata.customHitModifiers = null;
        $scope.tdata.orderOverride = { };
        $scope.tdata.typeOverride = { };
    };

    $scope.$watch('data.team', resetTransitional, true);
    $scope.$watch('tdata.team', resetTransitional, true);

};

/****************************
 * AngularJS initialization *
 ****************************/

app
    .controller('SharedRootCtrl', SharedRootCtrl)
    .run(function($rootScope, $state, $location, $window) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            var state = $state.current.name;
            $rootScope.isPopupVisible = (state != 'main');
            $rootScope.picking = (state == 'main.candy');
            if (ga) ga('send', 'pageview', '/damage');
        });
    });

})();
