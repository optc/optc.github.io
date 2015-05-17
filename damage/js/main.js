(function() {

var sliders = [ ];
var hpSlider = null;
var hpLast = 1;

/* * * * * Functions * * * * */

var parseUnit = function(element,n) {
    return {
        'name'    : element[0]  , 'type'     : element[1]  ,
        'class'   : element[2]  , 'stars'    : element[3]  ,
        'cost'    : element[4]  , 'maxLevel' : element[5]  ,
        'minHP'   : element[6]  , 'minATK'   : element[7]  ,
        'minRCV'  : element[8]  , 'maxHP'    : element[9]  ,
        'maxATK'  : element[10] , 'maxRCV'   : element[11] ,
        'number' : n
    };
};

//var getCoordinates = function(n) {
    //var source = ('000' + Math.ceil((n+1) / 100)).slice(-3);
    //var x = Math.floor((n % 100) / 10) * 112;
    //var y = ((n % 100) % 10) * 112;
    //return [source,-y-1,-x-1];
//};

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var updateSlot = function(slotNumber,unitNumber) {
    var slot = $('.unit')[slotNumber];
    var unit = units[unitNumber];
    // change background
    //var coordinates = getCoordinates(unitNumber);
    //slot.style.backgroundImage = 'url(images/' + coordinates[0] + '.jpg)';
    //slot.style.backgroundPosition = coordinates[1] + 'px ' + coordinates[2] + 'px';
    slot.classList.remove('empty');
    slot.style.backgroundImage = 'url(' + getThumbnailUrl(unitNumber) + ')';
    // update slider
    var index = $(slot).index();
    sliders[index].setRange(1,units[unitNumber].maxLevel);
    // reset level
    changeLevel(index,1);
};

var changeLevel = function(slotNumber,level) {
    var slot = $($('.unit')[slotNumber]);
    slot.find('.unitLevel').text('Lv.' + level);
};

var updateHP = function(currentHP,skipTrigger) {
    currentHP = Math.floor(currentHP);
    var percHP = Math.round(currentHP / hpLast * 10000) / 100;
    $('#hpLabel').text(currentHP + ' HP (' + percHP + '%)');
    if (!skipTrigger) $(document).trigger('hpChanged',[ currentHP, hpLast, percHP ]);
};

var changeHP = function(event,value) {
    updateHP(value,false);
};

var slideHP = function(event,value) {
    updateHP(value,true);
};

var onButtonClick = function() {
    if (this.classList.contains('selected')) return;
    var bonus = parseFloat(this.textContent,10);
    if (isNaN(bonus)) bonus = 1;
    $(document).trigger('merryBonusUpdated',bonus);
};

/* * * * * Body * * * * */

$(function() {

    // bootstrap
    
    units = units.map(parseUnit);

    // attach events

    $('.unit').mouseup(function(e) {
        if (e.which == 1 && !this.classList.contains('slide'))
            $(document).trigger('unitClick',$(this).index());
    });

    $('.unitLevel').mouseup(function(e) {
        if (e.which == 1 && !this.parentNode.classList.contains('empty'))
            $(this)[0].parentNode.classList.add('slide');
        e.preventDefault();
        e.stopPropagation();
    });

    $('.unitSlider').each(function(n,x) {
        sliders.push($(x).CircularSlider({
            radius: 44,
            onSlideEnd: function(ui,value) {
                $(ui).parent()[0].classList.remove('slide');
                $(document).trigger('unitLevelChanged',[n,value]);
            },
            slide: function() { }
        }));
    });

    $(document).on('unitPicked',function(event,slotNumber,unitNumber) {
        updateSlot(slotNumber,unitNumber);
    });

    $(document).on('unitLevelChanged',function(event,slotNumber,level) {
        changeLevel(slotNumber,level);
    });

    $(document).on('numbersCrunched',function(event,numbers) {
        // set damage
        Object.keys(numbers).forEach(function(type) {
            if (type == 'HP') return;
            var damage = ''+Math.floor(numbers[type]);
            damage = damage.split('').reverse().join('')
                           .replace(/(\d{3,3})/g,'$1,')
                           .split('').reverse().join('')
                           .replace(/^,|,$/g,'');
            $('#' + type.toLowerCase()).text(damage);
        });
        // set hp
        if (numbers.HP == hpLast) return;
        var currentPosition = hpSlider.val() / hpLast;
        hpLast = numbers.HP;
        $('#hpSlider').noUiSlider({
            range: { min: [ 1 ], max: [ numbers.HP ] }
        },true);
        var currentHP = Math.floor(currentPosition * numbers.HP);
        hpSlider.val(currentHP);
        updateHP(currentHP,true);
    });

    $(document).on('merryBonusUpdated',function(event,merry) {
        $('button.selected')[0].classList.remove('selected');
        $('button')[merry == 1.0 ? 0 : merry == 1.2 ? 1 : 2].classList.add('selected');
    });

    // set up ui elements

    hpSlider = $('#hpSlider').noUiSlider({
        start: [ 0 ],
        range: { min: [ 1 ], max: [ 1 ] },
        connect: 'lower'
    });

    hpSlider.on({
        change: changeHP,
        slide: slideHP
    });

    $('button').click(onButtonClick);

});

})();
