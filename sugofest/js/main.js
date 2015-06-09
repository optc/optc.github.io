$(function() {

    var units = [ 1, 2, 5, 9, 17, 18, 17, 18, 17, 18, 17, 18, 27, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31, 31, 36, 37, 44, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
        61, 61, 225, 225, 225, 225, 225, 225, 225, 225, 233, 315, 327, 329, 332, 26, 26, 25, 25, 24, 24,
        41, 42, 54, 54, 54, 54, 56, 56, 56, 56, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64, 64, 64, 64 ];

    var boss = 367;
    var bossChance = 1/500;
    var bossDuration = 18750;

    var audioStopped = false;
    var started = false, stopped = false;

    var rainBox = $('.rain-box');
    var pageWidth = $('body').width(), maxDrops = (pageWidth/70)*5;

    var bossInterval = null;

    /* * * * * */

    var randomChoice = function(list) {
        return list[Math.floor(Math.random()*list.length)];
    };

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    /* * * * * */

    var startRain = function () {

        var interval = 200;
        var dropCount = 0;

        var addDrop = function() {

            var drop = rainBox.clone().show();

            drop.css("background-image","url('http://onepiece-treasurecruise.com/wp-content/uploads/f" +
                ('0000' + randomChoice(units)).slice(-4) + ".png')");
            drop.css('left',getRandomInt(0,pageWidth-112));

            $('body').append(drop);

            if (dropCount < maxDrops) {
                window.setTimeout(addDrop, interval * (1 + Math.random()));
                dropCount++;
            }

            window.setInterval(function() {
                drop.css("background-image","url('http://onepiece-treasurecruise.com/wp-content/uploads/f" +
                    ('0000' + randomChoice(units)).slice(-4) + ".png')");
                drop.css('left',getRandomInt(0,pageWidth-112));
            },3000);

        };

        // Set an interval to decrease the interval #inception
        window.setInterval(function() {
            interval = Math.max(10, interval - 10);
        }, 500);

        window.setTimeout(addDrop, !started ? 1500 : 2*1000);

    };

    var startBossCheck = function() {
        bossInterval = setInterval(function() {
            var n = getRandomInt(0,1/bossChance);
            if (n != 1) return;
            bossAppears();
        },1000);
    };

    var startForeground = function() {
        $('div.gag').show();
        $('div.gag').addClass('gag-animation');
    };

    var startAudio = function() {
        audioStopped = false;
        $('audio')[0].play();
    };

    var startBossAudio = function() {
        $('#bossAudio')[0].currentTime = 0;
        $('#bossAudio')[0].play();
    };

    /* * * * * */

    var stopBossCheck = function() {
        clearInterval(bossInterval);
    };

    var stopAudio = function() {
        audioStopped = true;
        $('audio')[0].pause();
    };

    var stopBossAudio = function() {
        $('#bossAudio')[0].pause();
    };

    /* * * * * */

    var bossAppears = function() {
        stop();
        // add boss
        var drop = rainBox.clone().show();
        drop.addClass('boss');
        var div = $('<div></div>');
        div.css("background-image","url('http://onepiece-treasurecruise.com/wp-content/uploads/f" +
                    ('0000' + boss).slice(-4) + ".png')");
        drop.append(div);
        drop.css("left",(Math.floor((pageWidth-112)/2) - 56) + 'px');
        drop.append($('.sunburst').clone());
        $('body').append(drop);
        // add boss audio
        startBossAudio();
        // add sunburst
        $('.sunburst.boss').show();
        // set timeout for removal
        setTimeout(function() {
            drop.remove();
            start();
            $('.sunburst.boss').hide();
        },bossDuration);
    };

    /* * * * * */

    window.start = function () {
        if (!started) startForeground();
        if (!started) startRain();
        if (stopped) stopBossAudio();
        startBossCheck();
        startAudio();
        if (!started) window.setTimeout(function() {
            $('div.sunburst').fadeIn(4000);
        }, 8000);
        started = true;
        stopped = false;
    };

    window.stop = function () {
        stopBossCheck();
        stopAudio();
        stopBossAudio();
        stopped = true;
    };

    /* * * * * */

    $('audio').on('ended', function() {
        this.currentTime = 0;
        if (!audioStopped) this.play();
    });

    start();

});
