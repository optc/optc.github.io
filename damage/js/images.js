(function() {

var app = angular.module('optc');

var BOX_COLORS = { STR: 'salmon', QCK: 'lightskyblue', DEX: 'lightgreen', PSY: 'gold', INT: 'orchid' };
var ORB_COLORS = { STR: 'orangered', QCK: 'dodgerblue', DEX: 'lightgreen', PSY: 'gold', INT: 'orchid' };

app.controller('ImageGeneratorCtrl', function($scope, $filter, $timeout) {

    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // damage numbers
    $scope.$watch('numbers',function(numbers) {
        [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(which, n) {
            if (!numbers[which]) return;
            // rectangles
            context.fillStyle = BOX_COLORS[which];
            context.fillRect(440, 10 + n * 70, 150, 60);
            // text
            var overall = $filter('number')(numbers[which].overall);
            type(context, { text: 'Damage against ' + which, style: '10.5px "Open Sans"', x: 465, y: 30 + n * 70 });
            type(context, { text: overall, style: 'bold 21px "Open Sans"', x: 515, y: 58 + n * 70, align: 'center' });
        });
        // indicators
        if ($scope.numbers.cost) {
            var baseX = 203, baseY = 360;
            fill(context, 'white', baseX, baseY + 20, 300, 300);
            var currentHP = $filter('number')(Math.round($scope.numbers.hp * $scope.data.percHP / 100));
            var percHP = $filter('number')(Math.round($scope.data.percHP * 100) / 100);
            var rcv = $filter('number')($scope.numbers.rcv);
            var cost = $filter('number')($scope.numbers.cost.cost);
            type(context, { text: currentHP + ' HP (' + percHP + '%)', x: baseX + 188, y: baseY + 35, align: 'center' });
            type(context, { text: rcv + ' RCV', x: baseX + 188, y: baseY + 55, align: 'center' });
            type(context, { text: cost + ' cost', x: baseX + 188, y: baseY + 75, align: 'center' });
        }
    },true);

    // team
    $scope.$watch('data.team',function(team) {
        team.forEach(function(data, n) {
            var unit = data.unit;
            if (!unit) return;
            var image = new Image();
            image.onload = function() {
                var baseX = 203 + (n%2 * 115), baseY = 9 + Math.floor(n/2) * 115;
                context.drawImage(image, baseX, baseY, 112, 112);
                // orbs
                var orb = $scope.tdata.team[n].orb;
                if (orb != 1.0) {
                    var gradient = context.createRadialGradient(baseX + 20, baseY + 21, 13, baseX + 22, baseY + 22, 35);
                    if (orb < 1) gradient.addColorStop(0.1, ORB_COLORS[Utils.getOppositeType(unit.type)]);
                    else gradient.addColorStop(0.1, ORB_COLORS[unit.type]);
                    if (orb < 1) gradient.addColorStop(0.2, 'black');
                    else {
                        gradient.addColorStop(0.2, 'white');
                        gradient.addColorStop(0.3, ORB_COLORS[unit.type]);
                    }
                    gradient.addColorStop(1.0, 'transparent');
                    context.fillStyle = gradient;
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    var temp = (orb < 1 ? [ 'f0d7', baseX + 13, baseY + 31 ] : [ 'f0d8', baseX + 13, baseY + 28 ]);
                    awesome(context, { text: temp[0], style: '28px', color: 'white',
                        x: temp[1], y: temp[2], stroke: 'gray' });
                }
                // level label
                fill(context, 'black', baseX + 80, baseY + 95, 31, 16);
                fill(context, 'white', baseX + 81, baseY + 96, 30, 15);
                type(context, { text: 'Lv.' + data.level, style: 'bold 10px "Open Sans"',
                    x: baseX + (data.level < 10 ? 87 : 84), y: baseY + 107 });
                // candy labels
                var total = data.candies.hp + data.candies.atk + data.candies.rcv;
                if (total > 0) {
                    type(context, { text: '+' + total, style: 'bold 14px "Open Sans"',
                        x: baseX + 7, y: baseY + 103, color: 'gold', stroke: 'black', strokeWidth: 3 });
                }
            };
            image.src = Utils.getThumbnailUrl(unit.number + 1);
        });
    },true);

    // hp bar
    var baseX = 203, baseY = 360;
    fill(context, 'black', baseX + 5, baseY, 378, 14);
    fill(context, 'white', baseX + 6, baseY + 1, 376, 12);
    fill(context, '#3FB8AF', baseX + 6, baseY + 1, Math.round(376 * $scope.data.percHP / 100), 12);

    baseX = 10; baseY = 10;

    if ($scope.data.effect) {
        awesome(context, { text: 'f02d', x: baseX + 8, y: baseY + 20, align: 'center' });
        type(context, { text: $scope.data.effect, x: baseX + 25, y: baseY + 20, maxWidth: 155, truncate: true });
        baseY += 35;
    }

    // ship
    awesome(context, { text: 'f21a', x: baseX + 8, y: baseY + 20, align: 'center' });
    type(context, { text: window.ships[$scope.data.ship[0]].name, x: baseX + 25, y: baseY + 20 });
    type(context, { text: 'Level ' + $scope.data.ship[1], x: baseX + 25, y: baseY + 37 });
    baseY += 52;

    // defense
    awesome(context, { text: 'f132', x: baseX + 8, y: baseY + 20, align: 'center' });
    type(context, { text: $filter('number')($scope.data.defense) + ' DEF', x: baseX + 25, y: baseY + 20 });
    baseY += 35;

    // turn counter
    if ($scope.tdata.turnCounter.enabled) {
        awesome(context, { text: 'f162', x: baseX + 8, y: baseY + 20, align: 'center' });
        var turns = $scope.tdata.turnCounter.value;
        type(context, { text: turns + (turns == 1 ? ' turn' : ' turns') + ' elapsed', x: baseX + 25, y: baseY + 20 });
        baseY += 35;
    }

    // specials
    awesome(context, { text: 'f0e7', x: baseX + 8, y: baseY + 20, align: 'center' });
    type(context, { text: 'Active specials:', x: baseX + 25, y: baseY + 20 });
    var none = true;
    for (var i=0;i<6;++i) {
        if (!$scope.tdata.team[i] || !$scope.tdata.team[i].special) continue;
        none = false;
        baseY += 25;
        type(context, { text: $scope.data.team[i].unit.name,
            x: baseX + 35, y: baseY + 20, maxWidth: 145, truncate: true });
    }


});

/* * * * * Utility methods * * * * */

var type = function(context, data) {
    context.fillStyle = (data.stroke || data.color || 'black');
    context.font = data.style || '14px "Open Sans"';
    context.textAlign = data.align || 'left';
    var text = (data.maxWidth && data.truncate ? truncate(context, data.text, data.maxWidth) : data.text);
    if (!data.stroke) {
        context.fillText(text, data.x, data.y, data.maxWidth || 600);
    } else {
        context.lineWidth = data.strokeWidth || 1;
        context.strokeText(text, data.x, data.y, data.maxWidth || 60);
        type(context, $.extend(data, { stroke: false }));
    }
};

var awesome = function(context, data) {
    type(context, $.extend(data, {
        text: String.fromCharCode('0x' + data.text),
        style: (data.style || '14px') + ' FontAwesome'
    }));
};

var fill = function(context, color, x, y, w, h) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
};

var truncate = function(context, text, maxWidth) {
    var textWidth = context.measureText(text).width;
    var ellipsisWidth = context.measureText('...').width;
    if (textWidth <= maxWidth || textWidth <= ellipsisWidth) return text;
    do {
        text = text.slice(0, -1);
        textWidth = context.measureText(text).width;
    } while (text.length > 0 && textWidth > maxWidth);
    return text + '...';
};

})();
