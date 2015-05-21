(function() {

var team = [ null, null, null, null, null, null ];
//var onFirefox = /firefox/i.test(navigator.userAgent);

var getGlowColor = function(type,status) {
    if (status == 1) return type.toLowerCase();
    if (type == 'STR') return 'qck';
    if (type == 'QCK') return 'dex';
    if (type == 'DEX') return 'str';
    if (type == 'PSY') return 'int';
     return 'psy';
};

var changeOrb = function(slotNumber) {
    var status = (team[slotNumber].status + 1) % 3;
    var target = $($('.unit')[slotNumber]);
    var color = getGlowColor(team[slotNumber].type,status);
    team[slotNumber].status = status;
    if (status == 0) deactivateGlowing(target);
    else activateGlowing(target,color);
    var multiplier = (status == 0 ? 1 : status == 1 ? 2 : 0.5);
    $(document).trigger('orbMultiplierChanged',[ slotNumber, multiplier ]);
};

/* * * * * UI control * * * * */

var activateGlowing = function(target,type) {
    deactivateGlowing(target);
    target.addClass('glower');
    var glower = setInterval(function() { target.toggleClass(type); },1500);
    target.attr('glower',glower);
    target.toggleClass(type);
    
};

var deactivateGlowing = function(target) {
    if (!target.attr('glower')) return;
    clearInterval(parseInt(target.attr('glower'),10));
    target.removeAttr('glower');
    ['str','qck','dex','psy','int'].map(function(x) { target.removeClass(x); });
};

/* * * * * UI events * * * * */

var onUnitClick = function(e) {
    if (e.target.className == 'unitLevel') return;
    if (e.which == 2 && !this.classList.contains('empty')) {
        changeOrb($(this).index());
        //e.preventDefault();
        //e.stopPropagation();
    }
};

var onUnitsSwitched = function(event,slotA,slotB) {
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    // move glow
    var moveSlotA = (team[slotA] && team[slotA].status > 0);
    var moveSlotB = (team[slotB] && team[slotB].status > 0);
    if (moveSlotB) deactivateGlowing($('.unit').eq(slotA));
    if (moveSlotA) deactivateGlowing($('.unit').eq(slotB));
    if (moveSlotB) activateGlowing($('.unit').eq(slotB),getGlowColor(team[slotB].type,team[slotB].status));
    if (moveSlotA) activateGlowing($('.unit').eq(slotA),getGlowColor(team[slotA].type,team[slotA].status));
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
    deactivateGlowing($('.unit').eq(slotNumber));
}

/* * * * * Events * * * * */

$(document).on('unitPicked',function(event,slotNumber,unitNumber) {
    team[slotNumber] = { type: units[unitNumber].type, status: 0 };
    deactivateGlowing($('.unit').eq(slotNumber));
});

$(document).on('unitsSwitched',onUnitsSwitched);
$(document).on('unitRemoved',onUnitRemoved);

$(function() {

    $('.unit').mouseup(onUnitClick);

});


})();
