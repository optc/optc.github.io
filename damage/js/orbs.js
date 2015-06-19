(function() {

var team = [ null, null, null, null, null, null ];

var orbs = null; 
var edge = true;

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
    if (status === 0) deactivateOrb(target,slotNumber);
    else activateOrb(target,slotNumber,color);
    var multiplier = (status === 0 ? 1 : status == 1 ? 2 : 0.5);
    $(document).trigger('orbMultiplierChanged',[ slotNumber, multiplier ]);
};

/* * * * * UI control * * * * */

var activateOrb = function(target,slotNumber,type) {
    target.attr('glow',type);
    var orb = target.find('.unitOrb');
    var className = team[slotNumber].status == 1 ? 'upArrow fa fa-caret-up' : 'downArrow fa fa-caret-down';
    if (orb.children().length === 0) orb.append($('<div class="' + className + '"></div>'));
    else orb.children()[0].className = className;
    if (team[slotNumber].status == 1) orb.parent().parent().removeClass('opposite');
    else orb.parent().parent().addClass('opposite');
};

var deactivateOrb = function(target,slotNumber) {
    target.attr('glow',null);
    target.find('.unitOrb').children().eq(0).remove();
    target.removeClass('opposite');
};

/* * * * * UI events * * * * */

var onUnitMouseUp = function(e) {
    if (e.target.className == 'unitLevel' || this.classList.contains('empty')) return;
    if (e.which == 2 || (e.which == 1 && (e.ctrlKey || Utils.isClickOnOrb(e,e.target))))
        changeOrb($(this).index());
};

var onUnitsSwitched = function(event,slotA,slotB) {
    // deactivate orb
    deactivateOrb($('.unit').eq(slotB),slotB);
    deactivateOrb($('.unit').eq(slotA),slotA);
    // switch data
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    // reactivate orb if necessary
    if (team[slotA] && team[slotA].status > 0)
        activateOrb($('.unit').eq(slotA),slotA,getGlowColor(team[slotA].type,team[slotA].status));
    if (team[slotB] && team[slotB].status > 0)
        activateOrb($('.unit').eq(slotB),slotB,getGlowColor(team[slotB].type,team[slotB].status));
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
    deactivateOrb($('.unit').eq(slotNumber),slotNumber);
};

/* * * * * Events * * * * */

$(document).on('unitPicked',function(event,slotNumber,unitNumber) {
    team[slotNumber] = { type: units[unitNumber].type, status: 0 };
    deactivateOrb($('.unit').eq(slotNumber),slotNumber);
});

$(document).on('unitsSwitched',onUnitsSwitched);
$(document).on('unitRemoved',onUnitRemoved);

$(function() {

    orbs = $('#units > .unit');

    $('.unit').mouseup(onUnitMouseUp);

});


})();
