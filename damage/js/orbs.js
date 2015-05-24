(function() {

var team = [ null, null, null, null, null, null ];

var orbs = null; 
var edge = true;

var updateOrbs = function() {
    for (var i=0;i<team.length;++i) {
        if (team[i] == null || team[i].status == 0) continue;
        if (edge) orbs.eq(i).addClass('glowing');
        else orbs.eq(i).removeClass('glowing');
    };
    edge = !edge;
};

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
    if (status == 0) deactivateGlowing(target,slotNumber);
    else activateGlowing(target,slotNumber,color);
    var multiplier = (status == 0 ? 1 : status == 1 ? 2 : 0.5);
    $(document).trigger('orbMultiplierChanged',[ slotNumber, multiplier ]);
};

/* * * * * UI control * * * * */

var activateGlowing = function(target,slotNumber,type) {
    target.addClass('glowing');
    target.attr('glow',type);
};

var deactivateGlowing = function(target,slotNumber) {
    target.removeClass('glowing');
    target.attr('glow',null);
};

/* * * * * UI events * * * * */

var onUnitClick = function(e) {
    if (e.target.className == 'unitLevel') return;
    if (e.which == 2 && !this.classList.contains('empty'))
        changeOrb($(this).index());
};

var onUnitsSwitched = function(event,slotA,slotB) {
    // deactivate glowing
    deactivateGlowing($('.unit').eq(slotB),slotB);
    deactivateGlowing($('.unit').eq(slotA),slotA);
    // switch data
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    // reactivate glowing if necessary
    if (team[slotA] && team[slotA].status > 0)
        activateGlowing($('.unit').eq(slotA),slotA,getGlowColor(team[slotA].type,team[slotA].status));
    if (team[slotB] && team[slotB].status > 0)
        activateGlowing($('.unit').eq(slotB),slotB,getGlowColor(team[slotB].type,team[slotB].status));
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
    deactivateGlowing($('.unit').eq(slotNumber),slotNumber);
}

/* * * * * Events * * * * */

$(document).on('unitPicked',function(event,slotNumber,unitNumber) {
    team[slotNumber] = { type: units[unitNumber].type, status: 0 };
    deactivateGlowing($('.unit').eq(slotNumber),slotNumber);
});

$(document).on('unitsSwitched',onUnitsSwitched);
$(document).on('unitRemoved',onUnitRemoved);

$(function() {

    orbs = $('#units > .unit');

    $('.unit').mouseup(onUnitClick);

    setInterval(updateOrbs,1000);

});


})();
