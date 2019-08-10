(function() {

var app = angular.module('optc');

var BOX_COLORS = { STR: 'salmon', QCK: 'lightskyblue', DEX: 'lightgreen', PSY: 'gold', INT: 'orchid' };
var ORB_COLORS = { STR: 'orangered', QCK: 'dodgerblue', DEX: 'lightgreen', PSY: 'gold', INT: 'orchid', G: 'orange', S: 'orangered', Q: 'dodgerblue', D: 'lightgreen', P: 'gold', I: 'orchid', RAINBOW: 'pink', MEAT: 'darkgoldenrod'};

var lock = new Image(), silence = new Image();
lock.src = 'res/chain.png';
silence.src = 'res/silence.png';

/* * * * * Controller * * * * */

app.controller('ImageGeneratorCtrl', function($scope, $filter, $timeout) {

    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // damage numbers
    $scope.$watch('numbers',function(numbers) {
        //console.log(numbers); Numbers contains all info about each indiviual hit thing SOLARIS
        [ 'STR', 'QCK', 'DEX', 'PSY', 'INT' ].forEach(function(which, n) {
            if (!numbers[which]) return;
            // rectangles
            context.fillStyle = BOX_COLORS[which];
            context.fillRect(440, 10 + n * 70, 150, 60);
            // text
            var overall = $filter('number')(numbers[which].overall);
            type(context, { text: 'Damage against ' + which, style: '10.5px "Open Sans"', x: 515, y: 30 + n * 70, align: 'center' });
            type(context, { text: overall, style: 'bold 21px "Open Sans"', x: 515, y: 58 + n * 70, align: 'center' });
        });
        // indicators
        if ($scope.numbers.cost) {
            var baseX = 10, baseY = 30;
            fill(context, 'white', baseX, baseY - 15, 160, 66);
            var currentHP = $filter('number')(Math.round($scope.numbers.hp * $scope.data.percHP / 100));
            var percHP = $filter('number')(Math.round($scope.data.percHP * 100) / 100);
            var rcv = $filter('number')($scope.numbers.rcv);
            var cost = $filter('number')($scope.numbers.cost.cost);
			var healPerTurn = $filter('number')($scope.numbers.healPerTurn);
			//HP
            awesome(context, { text: 'f21e', x: baseX + 8, y: baseY, align: 'center' });
            type(context, { text: currentHP + ' HP (' + percHP + '%)', x: baseX + 25, y: baseY });
            //RCV
			awesome(context, { text: 'f0f5', x: baseX + 8, y: baseY + 25, align: 'center' });
            type(context, { text: rcv + ' RCV', x: baseX + 25, y: baseY + 25 });
            //Cost
			awesome(context, { text: 'f039', x: baseX + 8, y: baseY + 50, align: 'center' });
            type(context, { text: cost + ' cost', x: baseX + 25, y: baseY + 50 });
			//Heal per Turn
			if(healPerTurn){
			awesome(context, { text: 'f0fa', x: baseX + 8, y: baseY + 75, align: 'center' });
            type(context, { text: healPerTurn + ' Heal per turn', x: baseX + 25, y: baseY + 75 });
			}
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
                // lock, silence & removal
                if ($scope.tdata.team[n].lock) {
                    fill(context, 'rgba(255,255,255,0.7)', baseX + 1, baseY + 1, 110, 110);
                    context.drawImage(lock, baseX, baseY, 112, 112);
                }
                if ($scope.tdata.team[n].silence) {
                    context.drawImage(silence, baseX + 72, baseY + 25, 32, 20);
                }
                if ($scope.tdata.team[n].removed) {
                    fill(context, 'rgba(255,255,255,0.7)', baseX + 1, baseY + 1, 110, 110);
                    awesome(context, { text: 'f00d', x: baseX + 56, y: baseY + 88, align: 'center', style: '100px', color: 'darkred' });
                }
                // orbs
                var orb = $scope.tdata.team[n].orb;
                if (orb != 1.0) {
                    var gradient = context.createRadialGradient(baseX + 20, baseY + 21, 13, baseX + 22, baseY + 22, 35);
                    if (orb < 1) gradient.addColorStop(0.1, ORB_COLORS[Utils.getOppositeType(unit.type)]);
                    else gradient.addColorStop(0.1, ORB_COLORS[orb == 'g' ? 'G' : orb == 'str' ? 'STR' : orb == 'dex' ? 'DEX' : orb == 'qck' ? 'QCK' : orb == 'psy' ? 'PSY' : orb == 'int' ? 'INT' : orb == 'rainbow' ? 'RAINBOW' : orb == 'meat' ? 'MEAT' : unit.type]);
                    if (orb < 1) gradient.addColorStop(0.2, 'black');
                    else {
                        gradient.addColorStop(0.2, 'white');
                        gradient.addColorStop(0.3, ORB_COLORS[unit.type]);
                    }
                    gradient.addColorStop(0.7, 'transparent');
                    gradient.addColorStop(1.0, 'transparent');
                    context.fillStyle = gradient;
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    if (orb != 'g' && orb != 'str' && orb != 'dex' && orb != 'qck' && orb != 'psy' && orb != 'int' && orb != 'rainbow' && orb != 'meat') {
                        var temp = (orb < 1 ? [ 'f0d7', baseX + 13, baseY + 31 ] : [ 'f0d8', baseX + 13, baseY + 28 ]);
                        awesome(context, { text: temp[0], style: '28px', color: 'white',
                            x: temp[1], y: temp[2], stroke: 'gray' });
                    } else if (orb == 'g') {
                        type(context, { text: 'G', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'str'){
                        type(context, { text: 'S', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'dex'){
                        type(context, { text: 'D', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'qck'){
                        type(context, { text: 'Q', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'psy'){
                        type(context, { text: 'P', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'int'){
                        type(context, { text: 'I', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else if (orb == 'rainbow'){
                        type(context, { text: 'R', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    } else{
                        type(context, { text: 'M', style: 'bold 20px "Open Sans"',
                            x: baseX + 13, y: baseY + 28, color: 'white', stroke: 'black', strokeWidth: 2 });
                    }
                }
                // level label
                fill(context, 'black', baseX + 70, baseY + 95, 41, 16);
                fill(context, 'white', baseX + 71, baseY + 96, 40, 15);
                type(context, {
                        text: 'Lv.' + (data.level == data.unit.maxLevel ? 'MAX' : data.level),
                        style: 'bold 10px "Open Sans"',
                        align: 'center',
                        x: baseX + 91, y: baseY + 107
                });
                // candy labels
                var total = data.candies.hp + data.candies.atk + data.candies.rcv;
                if (total > 0) {
                    type(context, { text: '+' + total, style: 'bold 14px "Open Sans"',
                        x: baseX + 40, y: baseY + 18, color: 'gold', stroke: 'black', strokeWidth: 3 });
                }
                
                if (n >= 2 && window.sailors.hasOwnProperty(unit.number +1)) {
                    awesome(context, { text: 'f13d', 
                        x: baseX + 3, y: baseY + 105, color: 'gold', stroke: 'black', strokeWidth: 3 });
                }
            };
            image.src = Utils.getThumbnailUrl(unit.number + 1);
            //image.src = Utils.getGlobalThumbnailUrl(unit.number + 1);
            //image.onerror = function(){
            //    image.src = Utils.getThumbnailUrl(unit.number + 1);
            //}
        });
    },true);

    baseX = 10; baseY = 85;

	if($scope.numbers.healPerTurn) baseY +=25;
	
    if ($scope.data.effect) {
        awesome(context, { text: 'f02d', x: baseX + 8, y: baseY + 20, align: 'center', color: 'darkorchid' });
        type(context, { text: $scope.data.effect, x: baseX + 25, y: baseY + 20, maxWidth: 155, truncate: true, color: 'darkorchid' });
        baseY += 25;
    }

    // ship
    awesome(context, { text: 'f21a', x: baseX + 8, y: baseY + 20, align: 'center' });
    type(context, { text: window.ships[$scope.data.ship[0]].name, x: baseX + 25, y: baseY + 20 });
    type(context, { text: 'Level ' + $scope.data.ship[1], x: baseX + 25, y: baseY + 37 });
    baseY += 42;

    // defense
    awesome(context, { text: 'f132', x: baseX + 8, y: baseY + 20, align: 'center' });
    type(context, { text: $filter('number')($scope.data.defense) + ' DEF', x: baseX + 25, y: baseY + 20 });
    baseY += 25;

    // turn counter
    if ($scope.tdata.turnCounter.enabled) {
        awesome(context, { text: 'f162', x: baseX + 8, y: baseY + 20, align: 'center' });
        var turns = $scope.tdata.turnCounter.value;
        type(context, { text: turns + (turns == 1 ? ' turn' : ' turns') + ' elapsed', x: baseX + 25, y: baseY + 20 });
        baseY += 25;
    }

    // heal counter
    if ($scope.tdata.healCounter.enabled) {
        awesome(context, { text: 'f162', x: baseX + 8, y: baseY + 20, align: 'center' });
        var heals = $scope.tdata.healCounter.value;
        type(context, { text: heals + (heals == 1 ? ' Health Point' : ' Health Points') + ' recovered in the last turn', x: baseX + 25, y: baseY + 20 });
        baseY += 25;
    }

    // semla counter
    if ($scope.tdata.semlaCounter.enabled) {
        awesome(context, { text: 'f162', x: baseX + 8, y: baseY + 20, align: 'center' });
        var semlas = $scope.tdata.semlaCounter.value;
        type(context, { text: semlas + (semlas == 1 ? ' turn' : ' turns') + ' since last SEMLA orb consumed', x: baseX + 25, y: baseY + 20 });
        baseY += 25;
    }

    // damage counter
    if ($scope.tdata.damageCounter.enabled) {
        awesome(context, { text: 'f162', x: baseX + 8, y: baseY + 20, align: 'center' });
        var heals = $scope.tdata.damageCounter.value;
        type(context, { text: heals + (heals == 1 ? ' Health Point' : ' Health Points') + ' lost since special was activated', x: baseX + 25, y: baseY + 20 });
        baseY += 25;
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
    if (none) {
        type(context, { text: 'None', x: baseX + 35, y: baseY + 45, maxWidth: 145, truncate: true });
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
        type(context, jQuery.extend(data, { stroke: false }));
    }
};

var awesome = function(context, data) {
    type(context, jQuery.extend(data, {
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
    if (textWidth <= maxWidth + 5 || textWidth <= ellipsisWidth) return text;
    do {
        text = text.slice(0, -1);
        textWidth = context.measureText(text).width;
    } while (text.length > 0 && textWidth > maxWidth);
    return text + '...';
};

})();
