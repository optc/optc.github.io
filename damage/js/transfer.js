/* jshint loopfunc: true */

(function() {

/**************
 * ImportCtrl *
 **************/

var ImportCtrl = function($scope, $rootScope, $state, $stateParams) {
    history.replaceState(null, null, '#/');

    var checkInt = function(n, min, max) {
        var temp = parseInt(n, 10);
        return !isNaN(n) && n >= min && n < max;
    };

    var tokens = $stateParams.data.split(/([A-Z])/);

    var emitQueue = [ ];

    // Data validation (team)

    if (tokens.length < 4 || tokens.length%2 === 0 || tokens[0] !== '' ||
            tokens[tokens.length-1] !== '' || tokens[1] != 'D' || tokens[3] != 'C') {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
        return;
    }

    let team = parseDataTeam(tokens[2]);

    // if some units have invalid values
    if (team.length != 6) {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
        return;
    }

    // Data validation (other data)
    var temp, data, type, effectName;

    tokens = tokens.slice(4);
    
    for (i=0;i<tokens.length-1;i+=2) {
        data = tokens[i]; type = tokens[i+1];
        if (type == 'B') {
            temp = data.split(/,/);
            if (!checkInt(temp[0], 0, window.ships.length) || !checkInt(temp[1], 1, 11)) break;
        } else if (type == 'D' && isNaN(parseInt(data,10))) break;
        else if ((type == 'O' || type == 'L' || type == 'G') && !checkInt(data, 0, 729)) break;
        else if ((type == 'S' || type == 'A') && !checkInt(data, 0, 64)) break;
        else if (type == 'H') {
            temp = parseFloat(data, 10);
            if (isNaN(temp) || temp < 0 || temp > 100) break;
        } else if (type == 'E') {
            var effectID = parseInt(data, 10);
            if (effectID === 0) {
                effectName = null;
                continue;
            }
            for (var effect in effects) {
                if (effects[effect].id != effectID) continue;
                effectName = effect;
                break;
            }
            if (!effectName) break;
        }
    }

    if (i < tokens.length - 1) {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
        return;
    }

    // Data transfer (team)

    $scope.options.transientMode = true;
    $scope.options.crunchInhibitor = Infinity;

    for (i=0;i<6;++i) {
        $scope.resetSlot(i,false);
        if (team[i] === null) continue;
        // override properties, not replace the object, so new props will remain
        Object.assign($scope.data.team[i], team[i]);
        $scope.slotChanged(i);
    }

    // Data transfer (other data)

    for (i=0;i<tokens.length-1;i+=2) {
        data = tokens[i]; type = tokens[i+1];
        if (type == 'B') {
            temp = data.split(/,/);
            $scope.data.ship = [ parseInt(temp[0], 10), parseInt(temp[1], 10) ];
        } else if (type == 'D') $scope.data.defense = parseInt(data, 10);
        if (type == 'O' || type == 'L' || type == 'G' || type == 'R') {
            temp = ('000000' + parseInt(data, 10).toString(3))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                var unit = $scope.tdata.team[n];
                if (type == 'O') unit.orb = (x == 1 ? 2 : (x == 2 ? 0.5 : (x == 3 ? 'g' : (x == 4 ? 'str' : (x == 5 ? 'dex' : (x == 6 ? 'qck' : (x == 7 ? 'psy' : (x == 8 ? 'int' : (x == 9 ? 'rainbow' : 1)))))))));
                else if (type == 'L') unit.lock = x;
                else if (type == 'G') unit.silence = x;
                else if (type == 'R') unit.removed = x;
            });
        } else if (type == 'Q') {
            temp = ('000000' + parseInt(data, 10).toString(4))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                var unit = $scope.tdata.team[n];
                unit.orb = (x == 1 ? 2 : (x == 2 ? 0.5 : (x == 3 ? 'g' : (x == 4 ? 'str' : (x == 5 ? 'dex' : (x == 6 ? 'qck' : (x == 7 ? 'psy' : (x == 8 ? 'int' : (x == 9 ? 'rainbow' : 1)))))))));
                if (unit.orb == 'g' && !$rootScope.areGOrbsEnabled()) unit.orb = 1;
            });
        } else if (type == 'S') {
            temp = ('000000' + parseInt(data, 10).toString(2))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                if (x == 1) {
                    $scope.options.sidebarVisible = true;
                    emitQueue.push([ 'specialToggled', n, true]);
                }
            });
        } else if (type == 'A') {
            temp = ('000000' + parseInt(data, 10).toString(2))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                if (x == 1) {
                    $scope.options.sidebarVisible = true;
                    emitQueue.push([ 'altspecialToggled', n, true]);
                }
            });
        } else if (type == 'C') {
            temp = ('000000' + parseInt(data, 10).toString(2))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                if (x == 1) {
                    $scope.options.sidebarVisible = true;
                    emitQueue.push([ 'capspecialToggled', n, true]);
                }
            });
        } else if (type == 'H') {
            $scope.data.percHP = parseFloat(data, 10);
        } else if (type == 'E') {
            $scope.data.effect = effectName;
        }

    }

    function processEmitQueue() {
        emitQueue.forEach(function(x) {
            $scope.tdata.team[x[1]][x[0].replace('Toggled', '')] = x[2];
            $rootScope.$emit(x[0], x[1], x[2]);
        });
    }
    
    // Wait for rcruncher if necessary
    if (!$rootScope.cruncherReady) {
        $rootScope.$watch('cruncherReady',function(ready) {
            if (!ready) return;
            processEmitQueue();
        });
    } else {
        processEmitQueue();
    }

    $scope.options.crunchInhibitor = 0;
    $state.go('^');

    /**
     * Parses the section for $scope.data.team in the link.
     * @param {String} tokenString The substring for the values for $scope.data.team
     */
    function parseDataTeam(tokenString){
        let team = [];
        let units = tokenString.split(',');

        for (const unitValues of units) {
            if (unitValues == '!') {
                team.push(null);
                continue;
            }

            // the values are in order, according to how they are stored in $scope.data.team (damage/js/app.js)
            let values = unitValues.split(':');
            // if index is out of range, you will get NaN (falsy)
            let id = Number(values[0]) || 0;
            let level = Number(values[1]) || 0;
            let atk = Number(values[2]) || 0;
            let hp = Number(values[3]) || 0;
            let rcv = Number(values[4]) || 0;
            let limit = Number(values[5]) || 0;

            // unnecessary boolean conversion, but makes for more readable information
            // can't cast to boolean directly from strings, as they are truthy unless empty
            let sugarToy = Boolean(Number(values[6]));
            let tokiState = Boolean(Number(values[7]));

            // validate values
            if (id < 1 || id > window.units.length || window.units[id - 1].length === 0) break;
            if (level < 1 || level > window.units[id - 1].maxLevel) break;
            if (atk > 500 || hp > 500 || rcv > 500) break;
            if (limit < 0 || limit > 50) break;

            team.push({
                // you may add properties, but may NOT change the order,
                // due to the way the export link is implemented
                unit: window.units[id-1],
                level: level,
                candies: { hp: hp, atk: atk, rcv: rcv },
                limit: limit,
                sugarToy: sugarToy,
                tokiState: tokiState,
            })

        }
        return team;
    }
};

/**************
 * ExportCtrl *
 **************/

var ExportCtrl = function($scope) {

    $scope.generateURL = function() {

        var result, data = $scope.data, team = $scope.tdata.team;

        // team
        
        var tokens = [ ];
        for (var i=0;i<6;++i) {
            var unit = data.team[i], candies = unit.candies;
            if (unit.unit === null) tokens.push('!');
            else {
                var temp = (unit.unit.number + 1) + ':' + unit.level;
                temp += ':' + [ candies.atk, candies.hp, candies.rcv ].join(':');
                temp += ':' + unit.limit;
                temp += ':' + Number(unit.sugarToy);
                temp += ':' + Number(unit.tokiState);
                tokens.push(temp);
            }
        }

        result = '#/transfer/D' + tokens.join(',') + 'C';

        // others
        result += data.ship[0] + ',' + data.ship[1] + 'B';
        result += (data.defense && data.defense.constructor == Number ? data.defense : parseInt(data.defense)) + 'D';
        //result += (data.defense != 0 ) + 'D';
        result += ($scope.data.effect ? window.effects[$scope.data.effect].id : 0) + 'E';
        result += parseInt(team.map(function(x) { return ({ '2': 1, '0.5': 2, 'g': 3, 'str': 4, 'dex': 5, 'qck': 6, 'psy': 7, 'int': 8, 'rainbow': 9, '1': 0 }['' + x.orb] || 0); }).join(''),4) + 'Q';
        result += parseInt(team.map(function(x) { return x.lock; }).join(''),3) + 'L';
        result += parseInt(team.map(function(x) { return x.silence; }).join(''),3) + 'G';
        result += parseInt(team.map(function(x) { return x.removed; }).join(''),3) + 'R';
        result += parseInt(team.map(function(x) { return x.special ? 1 : 0; }).join(''),2) + 'S';
        result += parseInt(team.map(function(x) { return x.altspecial ? 1 : 0; }).join(''),2) + 'A';
        result += parseInt(team.map(function(x) { return x.capspecial ? 1 : 0; }).join(''),2) + 'C';
        result += (Math.floor(data.percHP * 100) / 100) + 'H';

        $scope.tdata.url = window.location.href.match(/^(.+?)#/)[1] + result;

    };

};

angular.module('optc')
    .controller('ExportCtrl', ExportCtrl)
    .controller('ImportCtrl', ImportCtrl);

})();
