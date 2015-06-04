//TODO (maybe) (thanks peter ward) : 20% opacity sunshine thing behind gabe.
//TODO each click loads more images

$(function() {

    var units = [ 1, 2, 5, 9, 17, 18, 17, 18, 17, 18, 17, 18, 27, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31, 31, 36, 37, 44, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
        61, 61, 225, 225, 225, 225, 225, 225, 225, 225, 233, 315, 327, 329, 332, 26, 26, 25, 25, 24, 24,
        41, 42, 54, 54, 54, 54, 56, 56, 56, 56, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64, 64, 64, 64 ];

    // We poll these variables while the wallet is being prepared
    var gabeReady = false;
    var audioReady = false;

    // The carefully, lovingly determined percentages which his holiness removes from the prices of his products.
    var MAIN_RANGE = 8;
    var TROLL_RANGE = 0;

    // lolsorandom
    var randomChoice = function(list) {
        return list[Math.floor(Math.random()*list.length)];
    };

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var startRain = function () {

        // When the image of his holiness loads, show it and animate it.
        var $saleBox = $('.sale-box');
        // How long in ms to wait until adding another sale box.
        var interval = 200;
        var numSales = 0;

        // Adds a sale box at a random x position.
        var addSale = function() {
            // Get the width every time we add a sale to account for dynamic widths.
            // Thanks ocbaker on github for finding this bug.
            var pageWidth = $('body').width();
            var maxSales = (pageWidth/70)*3;
            var xPos = getRandomInt(0, pageWidth - 112);
            var percentOff = Math.floor(Math.random() * MAIN_RANGE);
            // Just copy the hidden box we had at page load time to make a new box.
            var newSale = $saleBox.clone().show();

            newSale.css("background-image","url('http://onepiece-treasurecruise.com/wp-content/uploads/f" + ('0000' + randomChoice(units)).slice(-4) + ".png')");

            newSale.css("left", xPos);
            $('body').append(newSale);

            //Only have maxSales sale boxes onscreen at once.
            if (numSales < maxSales) {
                // Add a new sale box later.
                window.setTimeout(addSale, interval * (1 + Math.random()));
                numSales++;
            }

        };

        // Set an interval to decrease the interval #inception
        window.setInterval(function() {
            interval = Math.max(10, interval - 10);
        }, 500);

        window.setTimeout(addSale, 2*1000);

    };

    var startGabe = function() {
        $('div.gag').show();
        $('div.gag').addClass('gag-animation');
    };

    var praiseBeToGaben = function () {
        $('div.prepare-gag').hide();
        startGabe();
        startRain();
        $audio.trigger('play');
        window.setTimeout(function() {
            $('div.sunburst').fadeIn(4000);
        } , 8000);
    };

    $gabe = $('div.gag > img');
    //Even if we loaded from cache, praise be. Nothing can cache his holiness forever.
    if ($gabe[0].complete) {
        gabeReady = true;
    }
    else {
        $gabe.load(function () {
            gabeReady = true;
        });
    }

    $audio = $('audio');
    $audio.on('loadedmetadata', function() {
        audioReady = true;
    });
    $audio.on('ended', function() {
        this.currentTime = 0;
        this.play();
    });

    var prepareWallet = function() {
        if (gabeReady && audioReady) {
            $('.prepare-loader').css('max-height', $('.prepare-loader > img').height() / 3 + 'px');
            window.setTimeout(praiseBeToGaben, 1000);
        } else {
            window.setTimeout(prepareWallet, 100);
        }
    };

    prepareWallet();

});



