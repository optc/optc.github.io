(function() {

var team = [ null, null, null, null, null, null ];

var initialized = false;

/* * * * * Functions * * * * */

var initialize = function() {
    var targets = $('[id^="special"]');
    targets.dotdotdot();
    targets.click(onSpecialClick);
    initialized = true;
};

var addButton = function(slotNumber,unitNumber) {
    var target = $('#special' + slotNumber);
    var unit = units[unitNumber];
    target.parent().removeClass('disabled');
    target.text(unit.name);
};

var removeButton = function(slotNumber) {
    var target = $('#special' + slotNumber);
    target.parent().addClass('disabled');
    if (team[slotNumber] != null)
        target.removeClass(team[slotNumber].type.toLowerCase());
};

/* * * * * Custom event callbacks * * * * */

var onUnitPicked = function(event,slotNumber,unitNumber) {
    if (!initialized) initialize();
    if (team[slotNumber] != null) removeButton(slotNumber);
    if (!specials.hasOwnProperty(unitNumber+1)) return;
    team[slotNumber] = units[unitNumber];
    addButton(slotNumber,unitNumber);
};

var onUnitRemoved = function(event,slotNumber) {
    removeButton(slotNumber);
    team[slotNumber] = null;
};

var onUnitsSwitched = function(event,slotA,slotB) {
    // switch data
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    // switch class and text
    var targetA = $('#special' + slotA), targetB = $('#special' + slotB);
    var classA = targetA.attr('class'), textA = targetA.text();
    targetA[0].className = targetB.attr('class');
    targetA.text(targetB.text());
    targetB[0].className = classA;
    targetB.text(textA);
    // switch parent's class
    var classA = targetA.parent().attr('class');
    targetA.parent().attr('class',targetB.parent().attr('class'));
    targetB.parent().attr('class',classA);
};

/* * * * * UI event callbacks * * * * */

var onSpecialClick = function(e) {
    var target = $(this);
    var slot = parseInt(this.id.slice(-1),10);
    var type = team[slot].type.toLowerCase();
    var target = $('#special' + slot);
    target.toggleClass(type);
    var specialEnabled = target.hasClass(type);
    $(document).trigger('specialToggled',[ slot, specialEnabled ]);
};

/* * * * * Body * * * * */

$(document).on('unitPicked',onUnitPicked);
$(document).on('unitRemoved',onUnitRemoved);
$(document).on('unitsSwitched',onUnitsSwitched);

})();
