(function() {

var app = angular.module('optc');

var COLORS = [ '#ff6666', '#ff9966', '#ffcc33', '#ffff99', '#ccff99', '#99cc66', '#99cccc', '#0099ff', '#cc99ff', '#cc55cc' ];

var abilities = new Image();
abilities.src = '../res/abilities.png';

/* * * * * Controller * * * * */

app.controller('ImageGeneratorCtrl', function($scope, $filter, $timeout) {

    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');

    // summary
    var currentY = 0;
    $scope.team.forEach(function(data) {
        if (!data) return;
        currentY = Math.max(currentY, 145 + (data.slots.length - 1) * 45);
    });

    var lines = 0;
    $scope.summary.forEach(function(data) {
        if (data && data.description != 'Inactive') ++lines;
    });

    canvas.setAttribute('height', currentY + lines * 14 - 4);
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    $scope.summary.forEach(function(data) {
        if (!data || data.description == 'Inactive') return;
        type(context, { text: data.description, style: 'bold 11px "Open Sans"', x: 10, y: currentY, color: 'black' });
        currentY += 14;
    });

    // team
    $scope.team.forEach(function(data, n) {

        if (!data) return;

        var image = new Image();
        image.onload = function() {

            var baseX = 10 + (n * 67), baseY = 9;
            context.drawImage(image, baseX, baseY, 64, 64);

            for (var i=0;i<data.slots.length;++i) {

                // background
                if (data.slots[i]) {
                    context.fillStyle = COLORS[data.slots[i].id];
                    context.fillRect(baseX, baseY + 69 + (i * 45), 64, 43);
                    currentY = Math.max(currentY, baseY + 112 + (i * 45));
                }

                // frame 
                context.drawImage(abilities, 450, 0, 80, 80, baseX + 10, baseY + 70 + (i * 45), 53, 53);

                // icon + level
                if (data.slots[i]) {
                    context.drawImage(abilities, data.slots[i].id * 45, 8, 45, 45,
                        baseX + 15, baseY + 75 + (i * 45), 30, 30);
                    type(context, { text: data.slots[i].level, style: 'bold 11px "Open Sans"', 
                        x: baseX + 55, y: baseY + 108 + (i * 45), color: 'white', stroke: 'black', strokeWidth: 2 });
                }

            }
        };

        image.src = Utils.getThumbnailUrl(data.uid);
        //image.src = Utils.getGlobalThumbnailUrl(data.uid);
        //image.onerror = function(){
        //    image.src = Utils.getThumbnailUrl(data.uid);
        //}

    });

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
