(function() {

var sliders = [ ];
var hpSlider = null;
var currentMaxHP = 1;
var lastDefenseValue = 0;

var unitSlidersEnabled = true;
var unitLevelEditor = $('<input type="text" id="levelEditor"></input>');

var defenseDebouncer = null;
var bootstrapped = false, inhibitKnob = false;

/* * * * * Functions * * * * */

var parseUnit = function(element,n) {
    return {
        'name'    : element[0]  , 'type'     : element[1]  ,
        'class'   : element[2]  , 'stars'    : element[3]  ,
        'cost'    : element[4]  , 'maxLevel' : element[5]  ,
        'minHP'   : element[6]  , 'minATK'   : element[7]  ,
        'minRCV'  : element[8]  , 'maxHP'    : element[9]  ,
        'maxATK'  : element[10] , 'maxRCV'   : element[11] ,
        'combo'   : element[12] , 'growth'   : element[13] ,
        'number'  : n
    };
};

var getSlideColor = function(type) {
    if (type == 'STR') return 'orangered';
    if (type == 'QCK') return 'dodgerblue';
    if (type == 'DEX') return 'limegreen';
    if (type == 'PSY') return 'gold';
    if (type == 'INT') return 'mediumorchid';
};

var updateSlot = function(slotNumber,unitNumber) {
    var slot = $('.unit').eq(slotNumber);
    var index = slot.index();
    if (unitNumber !== null) { // add/change unit
        var unit = units[unitNumber];
        // change portrait
        slot.removeClass('empty');
        slot.find('.unitPortrait')[0].style.backgroundImage = 'url(' + Utils.getThumbnailUrl(unitNumber) + ')';
        // update slider
        var color = getSlideColor(units[unitNumber-1].type);
        var config = { min: 1, max: units[unitNumber].maxLevel, fgColor: color, inputColor: color };
        sliders[index][0].trigger('configure',config);
        sliders[index][1] = units[unitNumber].maxLevel;
    } else { // remove unit
        slot.addClass('empty');
        slot.find('.unitPortrait')[0].style.backgroundImage = null;
        sliders[index][0].trigger('configure',{ min: 1, max: 1 });
        sliders[index][1] = 1;
    }
    // reset level
    changeLevelLabel(index,1,false);
};

var changeCurrentHP = function(currentHP,skipTrigger,skipSlider) {
    currentHP = Math.floor(currentHP);
    var percHP = currentHP / currentMaxHP * 100;
    $('#hpLabel').text($.number(currentHP,0) + ' HP (' + $.number(percHP,2) + '%)');
    if (!skipSlider) hpSlider.val(currentHP);
    if (!skipTrigger) {
        percHP = Math.floor(percHP * 100) / 100;
        $(document).trigger('hpChanged',[ currentHP, currentMaxHP, percHP , true ]);
    }
};

var changeMaxHP = function(newValue,skipTrigger) {
    var currentPerc = hpSlider.val() / currentMaxHP;
    currentMaxHP = newValue;
    $('#hpSlider').noUiSlider({
        range: { min: [ 1 ], max: [ newValue ] }
    },true);
    var currentHP = Math.round(currentPerc * newValue);
    changeCurrentHP(currentHP,skipTrigger,false);
};

var changeUnitLevel = function(slotNumber,level,userTriggered) {
    $('.unit').eq(slotNumber).removeClass('slide');
    if (bootstrapped && !inhibitKnob) $(document).trigger('unitLevelChanged',[ slotNumber, level, userTriggered ]);
    else inhibitKnob = false;
};

var changeLevelLabel = function(slotNumber,level,userTriggered) {
    var slot = $('.unit').eq(slotNumber);
    slot.find('.unitLevel').text('Lv.' + level);
    if (!userTriggered) {
        inhibitKnob = true;
        slot.find('.unitSlider').val(level).trigger('change');
    }
};

var getUnitNumberFromSlot = function(slotNumber) {
    var image = $('.unit').eq(slotNumber).find('.unitPortrait').css('backgroundImage');
    if (image === null || image == 'none') return -1;
    return parseInt(image.match(/f(\d+)/)[1],10);
};

var editUnitLevel = function(target) {
    target.append(unitLevelEditor);
    unitLevelEditor.focusout(onUnitEditorClose);
    unitLevelEditor.keyup(onUnitEditorClose);
    unitLevelEditor.focus();
};

var updateTitles = function(team) {
    var targets = $('.unit');
    team.forEach(function(x,n) {
        if (x === null) targets.eq(n).attr('title',null);
        else targets.eq(n).attr('title',
            [ x.name, x.hp + ' HP', + x.atk + ' ATK', x.rcv + ' RCV',x.cmb + ' CMB' ].join('\n'));
    });
};

/* * * * * UI event callbacks * * * * */

var onMerryButtonClick = function(e) {
    if (e.which != 1) return;
    var newBonus = (parseInt($(this).attr('status'),10)+1) % 3;
    $(document).trigger('merryBonusUpdated',[ 1.0, 1.2, 1.5 ][newBonus]);
};

var onSliderToggleClick = function(e) {
    if (e.which != 1);
    var newValue = (parseInt($(this).attr('status'),10)+1) % 2;
    $(document).trigger('sliderToggle',newValue === 0);
};

var onDefenseKeyUp = function(e) {
    if (defenseDebouncer !== null) clearTimeout(defenseDebouncer);
    var value = parseInt(this.value,10);
    if (isNaN(value) || value == lastDefenseValue) return false;
    defenseDebouncer = setTimeout(function() {
        $(document).trigger('defenseChanged',[ value, true ]);
    },350);
};

var onUnitEditorClose = function(e) {
    if (e.type == 'keyup' && e.which != 13) return;
    var level = parseInt(unitLevelEditor.val(),10);
    var slotNumber = $(e.target).parent().parent().index();
    unitLevelEditor.remove();
    unitLevelEditor.val('');
    if (isNaN(level)) return;
    level = Math.min(Math.max(1,level),sliders[slotNumber][1]);
    inhibitKnob = false;
    changeUnitLevel(slotNumber,level,true);
    changeLevelLabel(slotNumber,level,true);
};

var onSlideRelease = function(value) {
    var slotNumber = $(this.$div).parent().index();
    changeUnitLevel(slotNumber,value,true);
};

var onUnitLevelClick = function(e) {
    if (e.which == 1 && !this.parentNode.classList.contains('empty') && !e.ctrlKey) {
        if (unitSlidersEnabled) $(this).parent().addClass('slide');
        else editUnitLevel($(this));
    } else if (e.which == 2 || (e.which == 1 && e.ctrlKey)) {
        var slotNumber = $(this).parent().index();
        var unitNumber = getUnitNumberFromSlot(slotNumber);
        changeUnitLevel(slotNumber,units[unitNumber-1].maxLevel,true);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
};

var onUnitMouseUp = function(e) {
    var target = $(this);
    if (target.hasClass('slide'))
        target.removeClass('slide');
};

var onChangeHP = function(event,value) {
    changeCurrentHP(value,false,true);
};

var onSlideHP = function(event,value) {
    changeCurrentHP(value,true,true);
};

var onResetButtonClick = function() {
    BootstrapDialog.show({
        title: 'Reset',
        message: 'Are you sure? It won\'t be pretty.',
        buttons: [
            {
                label: 'Yep',
                action: function(dialog) {
                    $(document).trigger('resetStorage');
                    dialog.close();
                }
            }, {
                label: 'Nope',
                cssClass: 'btn-primary',
                action: function(dialog) { dialog.close(); }
            }
        ]
    });
};

/* * * * * Custom event callbacks * * * * */

var onUnitPicked = function(event,slotNumber,unitNumber) {
    updateSlot(slotNumber,unitNumber);
};

var onUnitLevelChanged = function(event,slotNumber,level,userTriggered) {
    changeLevelLabel(slotNumber,level,userTriggered);
};

var onNumbersCrunched = function(event,numbers) {
    // set damage
    Object.keys(numbers).forEach(function(type) {
        if (type == 'HP') return;
        var damage = ''+Math.floor(numbers[type]);
        damage = $.number(damage);
        $('.damageAmount#' + type.toLowerCase()).text(damage);
    });
    // set hp
    if (numbers.HP != currentMaxHP)
        changeMaxHP(numbers.HP,true);
    // update titles
    updateTitles(numbers.team);
    // surprise
    if (numbers.PSY >= 750000) $('#surprise').addClass('active');
    else $('#surprise').removeClass('active');
};

var onMerryBonusUpdated = function(event,merry) {
    var target = $('#merry'), n = (merry == 1.0 ? 0 : (merry == 1.2 ? 1 : 2));
    target.attr('status',n);
    target.attr('class',[ 'btn-error', 'btn-warning', 'btn-success' ][n]);
};

var onDefenseChanged = function(event,value,skipUiUpdate) {
    if (!skipUiUpdate) $('#defense').val(value);
    lastDefenseValue = value;
};

var onHpChanged = function(event,current,max,perc,skip) {
    if (skip) return;
    if (max != currentMaxHP)
        changeMaxHP(max,true);
    changeCurrentHP(current,true);
};

var onUnitsSwitched = function(event,a,b) {
    var units = $('.unit');
    slotA = units.eq(a);
    slotB = units.eq(b);
    // switch level labels
    var labelA = slotA.find('.unitLevel'), labelB = slotB.find('.unitLevel'), textA = labelA.text();
    labelA.text(labelB.text());
    labelB.text(textA);
    // switch level sliders
    var sliderA = slotA.find('.unitSlider'), sliderB = slotB.find('.unitSlider');
    slotA.append(sliderB.parent());
    slotB.append(sliderA.parent());
    // switch sliders
    sliderA = sliders[a];
    sliders[a] = sliders[b];
    sliders[b] = sliderA;
};

var onSliderToggle = function(event,value) {
    unitSlidersEnabled = value;
    $('#sliderToggle').attr('status',value ? 0 : 1);
};

var onUnitRemoved = function(event,slotNumber) {
    updateSlot(slotNumber,null);
};

var onCrunchingToggled = function(event,enabled) {
    bootstrapped = bootstrapped || enabled;
};

/* * * * * Body * * * * */

$(function() {

    // bootstrap
    
    units = units.map(parseUnit);

    // attach ui events

    $('.unitLevel').click(onUnitLevelClick);
    $('.unit').mouseup(onUnitMouseUp);
    $('#defense').keyup(onDefenseKeyUp);

    // attach custom events

    $(document).on('unitPicked',onUnitPicked);
    $(document).on('unitLevelChanged',onUnitLevelChanged);
    $(document).on('numbersCrunched',onNumbersCrunched);
    $(document).on('merryBonusUpdated',onMerryBonusUpdated);
    $(document).on('defenseChanged',onDefenseChanged);
    $(document).on('hpChanged',onHpChanged);
    $(document).on('sliderToggle',onSliderToggle);
    $(document).on('unitsSwitched',onUnitsSwitched);
    $(document).on('unitRemoved',onUnitRemoved);
    $(document).on('crunchingToggled',onCrunchingToggled);

    // set up ui elements
    
    $('#defenseContainer').click(function() { $('#defense').focus(); });
    
    $('.unitSlider').each(function(n,x) {
        var target = $(x);
        sliders.push([ target, 1 ]);
        target.knob({
            width: 88,
            height: 88,
            angleOffset: -120,
            angleArc: 240,
            release: onSlideRelease
        });
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

    $('#merry').click(onMerryButtonClick);
    $('#reset').click(onResetButtonClick);
    $('#sliderToggle').click(onSliderToggleClick);

    $('.menu-link').bigSlide({ side: 'left', menuWidth: '16.625em' });

    if (localStorage.hasOwnProperty('team') && !localStorage.hasOwnProperty('newClickAlert2')) {
        Utils.alrt('If the page looks broken, please clear your cache.');
        localStorage.setItem('newClickAlert2',true);
    }

});

})();
