(function() {

var team = [ null, null, null, null, null, null ];

var lastSlotName = JSON.parse(localStorage.getItem('lastSlotName'));
var slots = JSON.parse(localStorage.getItem('slots')) || { };
if (slots == null) slots = { };

var currentLoadDialog = null, currentSaveDialog = null;

/* * * * * Functions * * * * */

var populateSlots = function(target,query) {
    var target = $('#slots');
    target.empty();
    Object.keys(slots).forEach(function(key) {
        var slot = slots[key], name = slot.name, team = slot.team;
        var thumbnails = team
            .filter(function(x) { return x != null; })
            .map(function(x) { return Utils.createThumbnail(x.unit,true); });
        target.append(createThumbnailRow(name,thumbnails));
    });
};

var createThumbnailRow = function(name,thumbnails) {
    var result = $('<div class="slotRow"><div>' + name + '</div></div>');
    thumbnails.forEach(function(x) { result.append(x); });
    result.attr('ref',name);
    result.click(onRowClick);
    return result;
};

var setOverwriteWarning = function(slotName) {
    var visible = slots.hasOwnProperty(slotName.toLowerCase());
    $('#overwriteWarning').css('display',visible ? 'block' : 'none');
};

/* * * * * Custom event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    team[slotNumber] = { unit: unitNumber, level: 1 };
};

var onLevelChange = function(event,slotNumber,level) {
    team[slotNumber].level = level;
};

var onUnitsSwitched = function(event,slotA,slotB) {
    var unitA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = unitA;
};

var onUnitRemoved = function(event,slotNumber) {
    team[slotNumber] = null;
};

/* * * * * UI eventcallbacks * * * * */

var onSaveSlot = function() {
    var name = $('#saveContainer > input').val().trim();
    if (name.length == 0) return;
    slots[name.toLowerCase()] = { name: name, team: JSON.parse(JSON.stringify(team)) };
    localStorage.setItem('slots',JSON.stringify(slots));
    lastSlotName = name;
    localStorage.setItem('lastSlotName',JSON.stringify(name));
    currentSaveDialog.close();
};

var onInputKeyUp = function(e) {
    setOverwriteWarning(this.value);
    if (e.which == 13) onSaveSlot();
};

var onRowClick = function(e) {
    var name = this.getAttribute('ref').toLowerCase();
    if (e.which == 1 && !e.ctrlKey) {
        // inhibit cruncher
        $(document).trigger('crunchingToggled',false);
        // load data
        slots[name].team.forEach(function(x,n) {
            if (x == null && team[n] != null) $(document).trigger('unitRemoved',n);
            else if (x != null) {
                $(document).trigger('unitPicked',[ n, x.unit ]);
                $(document).trigger('unitLevelChanged',[ n, x.level ]);
            }
        });
        // reactivate cruncher
        $(document).trigger('crunchingToggled',true);
        // close dialog & update last slot name
        currentLoadDialog.close();
        lastSlotName = slots[name].name;
        localStorage.setItem('lastSlotName',JSON.stringify(lastSlotName));
    } else if (e.which == 2 || (e.which == 1 && e.ctrlKey)) {
        delete slots[name];
        localStorage.setItem('slots',JSON.stringify(slots));
        this.parentNode.removeChild(this);
    }
};

var onSaveClick = function(e) {
    BootstrapDialog.show({
        title: 'Reset',
        animate: false,
        message: function(dialog) {
            var content = $(
                '<div id="saveContainer"><span>Slot name:</span><input type="text"></input></div>' +
                '<div id="overwriteWarning">Saving will overwrite an existing slot.</div>'
            );
            return content;
        },
        buttons: [
            {
                label: 'Cancel',
                action: function(dialog) { dialog.close(); }
            }, {
                label: 'Save',
                cssClass: 'btn-primary',
                action: onSaveSlot
            } 
        ],
        onshown: function(dialog) {
            var target = $('#saveContainer > input');
            if (lastSlotName) target.val(lastSlotName);
            setOverwriteWarning(lastSlotName || '');
            target.keyup(onInputKeyUp);
            target.focus();
            currentSaveDialog = dialog;
        }
    });
};

var onLoadClick = function(e) {
    BootstrapDialog.show({
        title: 'Choose a Slot',
        animate: false,
        message: function(dialog) {
            var content = $(
                    '<div>' +
                        '<input type="text" id="slotFilter" placeholder="type to filter (middle/ctrl click to remove slot)">' +
                        '<div id="slots"></div>' +
                    '</div>');
            content.find('input').keyup(Utils.debounce('slots',function() {
                populateSlots($('#slots'));
            }));
            return content;
        },
        buttons: [{
            label: 'Cancel',
            action: function(dialog) { dialog.close(); }
        }],
        onshown: function(dialog) {
            $('#slotFilter').focus();
            populateSlots($('#slots'));
            currentLoadDialog = dialog;
        }
    });
};

/* * * * * Events * * * * */

$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('unitsSwitched',onUnitsSwitched);
$(document).on('unitRemoved',onUnitRemoved);

/* * * * * Body * * * * */

$(function() {

    $('#save').click(onSaveClick);
    $('#load').click(onLoadClick);

});

})();
