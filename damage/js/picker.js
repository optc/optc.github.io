(function() {

var lastSlotNumber = null;
var debouncer = null;

/* * * * * Dialog generation * * * * */

var createDialog = function() {
    BootstrapDialog.show({
        title: 'Pick a Unit',
        message: function(dialog) {
            var content = $('<div><input type="text" id="picker" placeholder="type to filter">' +
                    '<div id="pickerUnits"></div></div>');
            var target = content.find('#pickerUnits');
            content.find('input').keyup(function() {
                $(document).trigger('unitFilter',[this.value,target]);
            });
            setTimeout(function() { content.find('input').focus(); },500);
            return content;
        },
        buttons: [{
            label: 'Cancel',
            action: function(dialog) { dialog.close(); }
        }]
    });
};

var closeDialog = function() {
    $.each(BootstrapDialog.dialogs,function(id,dialog) {
        dialog.close();
    });
};

var pick = function(event,slotNumber) {
    createDialog(slotNumber);
};

/* * * * * List generation * * * * */

var debounce = function(event,filter,target) {
    if (debouncer != null) clearTimeout(debouncer);
    debouncer = setTimeout(function() {
        debouncer = null;
        populateList(filter,target);
    },250);
};

var populateList = function(filter,target) {
    var result = [ ];
    $(target).empty();
    if (filter.trim().length > 1) {
        try { var regex = new RegExp(filter,'i'); }
        catch (e) { return; }
        result = units.filter(function(x) { return regex.test(x.name); });
    }
    if (result.length == 0) return;
    result.forEach(function(unit) {
        $(target).append(createThumbnail(unit.number));
    });
};

var createThumbnail = function(n) {
    var result = document.createElement('div');
    result.className = 'pickerThumbnail';
    result.style.backgroundImage = 'url(' + getThumbnailUrl(n) + ')';
    result.setAttribute('unitID',n);
    $(result).click(onThumbnailClick);
    return result;
};

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var onThumbnailClick = function() {
    $(document).trigger('unitPicked',[ lastSlotNumber, parseInt(this.getAttribute('unitID'),10) ]);
    closeDialog();
};

var onUnitClick = function(e) {
    if (e.which != 1) return;
    lastSlotNumber = $(this).index();
    createDialog();
};

/* * * * * Events * * * * */

$(document).on('unitFilter',debounce);

/* * * * * UI events * * * * */

$(function() {

    $('.unit').click(onUnitClick);

});

})();
