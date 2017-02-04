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

    var team = [ ];
    var regex = /(?:(\d+):(\d+)(?::(\d+):(\d+):(\d+))?|!)/;
    var units = tokens[2].split(/,/);
    var temp, data, type, effectName;

    for (var i=0;i<units.length;++i) {
        var matches = units[i].match(regex);
        if (!matches) break;
        if (matches[0] == '!') team.push(null);
        else {
            var id = parseInt(matches[1],10), level = parseInt(matches[2],10),
                atk = parseInt(matches[3],10) || 0, hp = parseInt(matches[4],10) || 0,
                rcv = parseInt(matches[5],10) || 0;
            if (id < 1 || id > window.units.length || window.units[id - 1].length === 0) break;
            if (level < 1 || level > window.units[id - 1].maxLevel) break;
            if (atk > 100 || hp > 100 || rcv > 100 || (atk + hp + rcv) > 200) break;
            team.push({ id: id, level: level, candies: { atk: atk, hp: hp, rcv: rcv }});
        }
    }

    if (team.length != 6) {
        $scope.notify({ text: 'Invalid data, aborting transfer.', type: 'error' });
        $state.go('^');
        return;
    }

    // Data validation (other data)

    tokens = tokens.slice(4);
    
    for (i=0;i<tokens.length-1;i+=2) {
        data = tokens[i]; type = tokens[i+1];
        if (type == 'B') {
            temp = data.split(/,/);
            if (!checkInt(temp[0], 0, window.ships.length) || !checkInt(temp[1], 1, 11)) break;
        } else if (type == 'D' && isNaN(parseInt(data,10))) break;
        else if ((type == 'O' || type == 'L' || type == 'G') && !checkInt(data, 0, 729)) break;
        else if (type == 'S' && !checkInt(data, 0, 64)) break;
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
        $scope.data.team[i].unit = window.units[team[i].id - 1];
        $scope.data.team[i].level = team[i].level;
        $scope.data.team[i].candies = jQuery.extend($scope.data.team[i].candies, team[i].candies);
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
                if (type == 'O') unit.orb = (x == 1 ? 2 : (x == 2 ? 0.5 : (x == 3 ? 'g' : 1)));
                else if (type == 'L') unit.lock = x;
                else if (type == 'G') unit.silence = x;
                else if (type == 'R') unit.removed = x;
            });
        } else if (type == 'Q') {
            temp = ('000000' + parseInt(data, 10).toString(4))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                var unit = $scope.tdata.team[n];
                unit.orb = (x == 1 ? 2 : (x == 2 ? 0.5 : (x == 3 ? 'g' : (x == 4 ? 'str' : 1))));
                if (unit.orb == 'g' && !$rootScope.areGOrbsEnabled()) unit.orb = 1;
            });
        } else if (type == 'S') {
            temp = ('000000' + parseInt(data, 10).toString(2))
                .slice(-6).split('').map(function(x) { return parseInt(x, 10); });
            temp.forEach(function(x,n) {
                if (x == 1) $scope.options.sidebarVisible = true;
                $scope.tdata.team[n].special = (x == 1);
                if ($rootScope.cruncherReady) $rootScope.$emit('specialToggled', n, x == 1);
                else emitQueue.push([ n, x == 1 ]);
            });
        } else if (type == 'H') {
            $scope.data.percHP = parseFloat(data, 10);
        } else if (type == 'E') {
            $scope.data.effect = effectName;
        }

    }

    // Wait for rcruncher if necessary
    
    if (!$rootScope.cruncherReady) {
        $rootScope.$watch('cruncherReady',function(ready) {
            if (!ready) return;
            emitQueue.forEach(function(x) { $rootScope.$emit('specialToggled', x[0], x[1]); });
        });
    }

    $scope.options.crunchInhibitor = 0;
    $state.go('^');

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
                if (candies && candies.atk + candies.hp + candies.rcv > 0)
                    temp += ':' + [ candies.atk, candies.hp, candies.rcv ].join(':');
                tokens.push(temp);
            }
        }

        result = '#/transfer/D' + tokens.join(',') + 'C';

        // others
        result += data.ship[0] + ',' + data.ship[1] + 'B';
        result += (data.defense && data.defense.constructor == Number ? data.defense : parseInt(data.defense)) + 'D';
        //result += (data.defense != 0 ) + 'D';
        result += ($scope.data.effect ? window.effects[$scope.data.effect].id : 0) + 'E';
        result += parseInt(team.map(function(x) { return ({ '2': 1, '0.5': 2, 'g': 3, '1': 0 }['' + x.orb] || 0); }).join(''),4) + 'Q';
        result += parseInt(team.map(function(x) { return x.lock; }).join(''),3) + 'L';
        result += parseInt(team.map(function(x) { return x.silence; }).join(''),3) + 'G';
        result += parseInt(team.map(function(x) { return x.removed; }).join(''),3) + 'R';
        result += parseInt(team.map(function(x) { return x.special ? 1 : 0; }).join(''),2) + 'S';
        result += (Math.floor(data.percHP * 100) / 100) + 'H';

        $scope.tdata.url = window.location.href.match(/^(.+?)#/)[1] + result;

    };

};

angular.module('optc')
    .controller('ExportCtrl', ExportCtrl)
    .controller('ImportCtrl', ImportCtrl);

})();
