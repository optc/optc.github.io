$(function() {

    var randomChoice = function(list) {
        return list[Math.floor(Math.random()*list.length)];
    };

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var startRain = function () {
        console.log("ARE YOU READY FOR A MIRACLE?");

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
            var maxSales = (pageWidth/70)*5
            var xPos = getRandomInt(0, pageWidth-112);
            var percentOff;
			if(cobyMode){
				percentOff = "coby";
			}else{
				percentOff = Math.floor(Math.random() * MAIN_RANGE);
			}
            // Just copy the hidden box we had at page load time to make a new box.
            var newSale = $saleBox.clone().show();

            newSale.css("background-image","url('static/img/people/" + percentOff + ".png')");

            newSale.css("left", xPos);
            $('body').append(newSale);

            //Only have maxSales sale boxes onscreen at once.
            if (numSales < maxSales) {
                // Add a new sale box later.
                window.setTimeout(addSale, interval * (0.5 + Math.random()));
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
    }


    var praiseBeToGaben = function () {
        $('div.prepare-gag').hide();
        startGabe();
        startRain();
        $audio.trigger('play');
        window.setTimeout(
                function() {
                    $('div.sunburst').fadeIn(4000);
                }
                , 8000)
    }

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
    }
	
	$(document).keypress(function(e)
{
    switch(e.which)
    {
        // user presses the "a"
        case 99:
			cobyMode = true;
			$('.sale-box').css("background-image","url('static/img/people/coby.png')");
			break;
    }
});

    prepareWallet();
});



