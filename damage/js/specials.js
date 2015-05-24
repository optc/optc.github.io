(function() {

var team = [ null, null, null, null, null, null ];
var teamUI = [ null, null, null, null, null, null ];

/* * * * * Functions * * * * */

var addButton = function(slotNumber,unitNumber) {
    var unit = units[unitNumber];
    var button = $('<li></li>');
    var specialDiv = $('<div class="special">&nbsp;</div>');
    button.append(specialDiv);
    $('ul').append(button);
    specialDiv.dotdotdot();
    specialDiv.text(unit.name);
    button.attr('slot',slotNumber);
    button.click(onSpecialClick);
    teamUI[slotNumber] = button;
};

var removeButton = function(slotNumber) {
    if (teamUI[slotNumber] == null) return;
    teamUI[slotNumber].remove();
    teamUI[slotNumber] = null;
};

/* * * * * Custom event callbacks * * * * */

var onUnitPicked = function(event,slotNumber,unitNumber) {
    removeButton(slotNumber);
    if (!specials.hasOwnProperty(unitNumber+1)) return;
    addButton(slotNumber,unitNumber);
    team[slotNumber] = units[unitNumber];
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
    removeButton(slotNumber);
};

/* * * * * UI event callbacks * * * * */

var onSpecialClick = function(e) {
    var target = $(this);
    var slot = parseInt(target.attr('slot'),10), type = team[slot].type.toLowerCase();
    teamUI[slot].toggleClass(type);
    var specialEnabled = teamUI[slot].hasClass(type);
    $(document).trigger('specialToggled',[ slot, specialEnabled ]);
};

/* * * * * Body * * * * */

$(document).on('unitPicked',onUnitPicked);
$(document).on('unitRemoved',onUnitRemoved);

})();
