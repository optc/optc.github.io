(function() {

/* * * * * Dialog generation * * * * */

var createDialog = function() {
    BootstrapDialog.show({
        title: 'Known defense values',
        animate: false,
        message: function(dialog) {
            var content = $(
                    '<div>' +
                        '<input type="text" id="filter" placeholder="type to filter">' +
                        '<div id="defenseValues"></div>' +
                    '</div>');
            content.find('input').keyup(Utils.debounce('filter',function() {
                populateList(this.value,$('#defenseValues'));
            }));
            return content;
        },
        buttons: [{
            label: 'Cancel',
            action: function(dialog) { dialog.close(); }
        }],
        onshown: function(dialog) {
            $('#filter').focus();
            populateList(null,$('#defenseValues'));
        }
    });
};

var closeDialog = function() {
    $.each(BootstrapDialog.dialogs,function(id,dialog) {
        dialog.close();
    });
};

/* * * * * List generation * * * * */

var populateList = function(query,target) {
    var regex = new RegExp(query || '','i');
    var result = defenses.filter(function(x) { return regex.test(x[0]); });
    $(target).empty();
    var table = $('<table><tr><th></th><th>Enemy</th><th>Difficulty</th><th>Defense</th></tr></table>');
    if (result.length === 0) return;
    result.forEach(function(data) {
        var tr = $('<tr><td></td><td></td><td></td><td></td></tr>');
        var thumbnail = Utils.createThumbnail(data[2],true,null);
        thumbnail.removeAttribute('title');
        tr.children().eq(0).append(thumbnail);
        tr.children().eq(1).append(data[0]);
        tr.children().eq(2).append(data[1]);
        tr.children().eq(3).append(data[3]);
        tr.click(onRowClick);
        table.append(tr);
    });
    $(target).append(table);
};

/* * * * * Events * * * * */

var onRowClick = function() {
    var defense = parseInt(this.cells[3].textContent,10);
    $('#defense').val(defense);
    $(document).trigger('defenseChanged',defense);
    closeDialog();
};

/* * * * * Events * * * * */

$(function() {

    $('#defenseContainer').click(function(e) {
        if (e.which != 2 && !(e.which == 1 && e.ctrlKey)) return;
        createDialog();
    });

});

})();
