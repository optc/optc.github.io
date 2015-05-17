(function() {

var sliders = [ ];
var hpSlider = null;
var currentMaxHP = 1;

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

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var updateSlot = function(slotNumber,unitNumber) {
    var slot = $('.unit')[slotNumber];
    var unit = units[unitNumber];
    // change background
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

var changeCurrentHP = function(currentHP,skipTrigger,skipSlider) {
    currentHP = Math.floor(currentHP);
    var percHP = Math.round(currentHP / currentMaxHP * 10000) / 100;
    $('#hpLabel').text(currentHP + ' HP (' + percHP + '%)');
    if (!skipSlider) hpSlider.val(currentHP);
    if (!skipTrigger)
        $(document).trigger('hpChanged',[ currentHP, currentMaxHP, currentHP / currentMaxHP, true ]);
};

var changeMaxHP = function(newValue,skipTrigger) {
    var currentPerc = hpSlider.val() / currentMaxHP;
    currentMaxHP = newValue;
    $('#hpSlider').noUiSlider({
        range: { min: [ 1 ], max: [ newValue ] }
    },true);
    var currentHP = Math.floor(currentPerc * newValue);
    changeCurrentHP(currentHP,skipTrigger,false);
}

/* * * * * Event callbacks * * * * */

var onUnitMouseUp = function(e) {
    if (e.which == 1 && !this.classList.contains('slide'))
        $(document).trigger('unitClick',$(this).index());
};

var onUnitLevelMouseUp = function(e) {
    if (e.which == 1 && !this.parentNode.classList.contains('empty'))
        $(this)[0].parentNode.classList.add('slide');
    e.preventDefault();
    e.stopPropagation();
};

var onUnitLevelSlideEnd = function(n) {
    return function(ui,value) {
        $(ui).parent()[0].classList.remove('slide');
        $(document).trigger('unitLevelChanged',[n,value]);
    };
};

var onChangeHP = function(event,value) {
    changeCurrentHP(value,false,true);
};

var onSlideHP = function(event,value) {
    changeCurrentHP(value,true,true);
};

var onButtonClick = function() {
    if (this.classList.contains('selected')) return;
    var bonus = parseFloat(this.textContent,10);
    if (isNaN(bonus)) bonus = 1;
    $(document).trigger('merryBonusUpdated',bonus);
};

/* * * * * Custom event callbacks * * * * */

var onUnitPicked = function(event,slotNumber,unitNumber) {
    updateSlot(slotNumber,unitNumber);
};

var onUnitLevelChanged = function(event,slotNumber,level) {
    changeLevel(slotNumber,level);
}

var onNumbersCrunched = function(event,numbers) {
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
    if (numbers.HP != currentMaxHP)
        changeMaxHP(numbers.HP,false);
};

var onMerryBonusUpdated = function(event,merry) {
    $('button.selected')[0].classList.remove('selected');
    $('button')[merry == 1.0 ? 0 : merry == 1.2 ? 1 : 2].classList.add('selected');
};

var onHpChanged = function(event,current,max,perc,skip) {
    if (skip) return;
    if (max != currentMaxHP)
        changeMaxHP(max,true);
    changeCurrentHP(current,true);
};

/* * * * * Body * * * * */

$(function() {

    // bootstrap
    
    units = units.map(parseUnit);

    // attach ui events

    $('.unit').mouseup(onUnitMouseUp);
    $('.unitLevel').mouseup(onUnitLevelMouseUp);

    // attach custom events

    $(document).on('unitPicked',onUnitPicked);
    $(document).on('unitLevelChanged',onUnitLevelChanged);
    $(document).on('numbersCrunched',onNumbersCrunched);
    $(document).on('merryBonusUpdated',onMerryBonusUpdated);
    $(document).on('hpChanged',onHpChanged);

    // set up ui elements
    
    $('.unitSlider').each(function(n,x) {
        sliders.push($(x).CircularSlider({
            radius: 44,
            onSlideEnd: onUnitLevelSlideEnd(n)
        }));
    });

    hpSlider = $('#hpSlider').noUiSlider({
        start: [ 0 ],
        range: { min: [ 1 ], max: [ 1 ] },
        connect: 'lower'
    });

    hpSlider.on({
        change: onChangeHP,
        slide: onSlideHP
    });

    $('button').click(onButtonClick);

});

})();
