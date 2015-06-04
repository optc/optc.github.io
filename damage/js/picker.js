/* jshint evil: true */

(function() {

var lastSlotNumber = null;

var recentUnits = JSON.parse(localStorage.getItem('recentUnits')) || [ ];
var instructionsShown = JSON.parse(localStorage.getItem('instructionsShown'));

/* * * * * Dialog generation * * * * */

var createDialog = function() {
    BootstrapDialog.show({
        title: 'Pick a Unit',
        animate: false,
        message: function(dialog) {
            var content = $(
                    '<div>' +
                        '<input type="text" id="picker" placeholder="type to filter">' +
                        '<div id="pickerUnits"></div>' +
                        '<div id="recent">' +
                            '<span>Recently picked</span>' +
                            '<divd id="recentUnits"></div>' +
                        '</div>' +
                    '</div>');
            content.find('input').keyup(Utils.debounce('picker',function() {
                populateList(generateSearchParameters(this.value),$('#pickerUnits'));
            }));
            populateRecent(content.find('#recentUnits'));
            return content;
        },
        buttons: [{
            label: 'Cancel',
            action: function(dialog) { dialog.close(); }
        }],
        onshown: function(dialog) {
            $('#picker').focus();
        }
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

var showInstructions = function() {
    Utils.info([
        'You can use operators to refine searches.',
        'Supported string operators:',
        '- "type:X": shows only units of type X (STR, DEX, QCK, INT or PSY)',
        '- "class:X": shows only units of class X (fighter, slasher, striker, shooter, ...)',
        'Supported mathematical operators:',
        '- "hp>X": shows only units with max HP > X',
        '- "atk>X": shows only units with max ATK > X',
        '- "cost>X": shows only units with a cost higher than X',
        '- "stars>X": shows only units with more than X stars',
        'Mathematical operators also work with "<", ">=", "<=" and "=".',
        'Example query:',
        'type:str class:fighter hp>1200 atk>1300 cost>20'
    ].join('<br>'));
    localStorage.setItem('instructionsShown','true');
    instructionsShown = true;
};

/* * * * * List generation * * * * */

var generateSearchParameters = function(query) {
    if (!query || query.trim().length < 3) return null;
    var result = { name: [ ] };
    tokens = query.trim().replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0; });
    tokens.forEach(function(x) {
        var temp = x.match(/^((type|class):(\w+)|(hp|atk|stars|cost)(>|<|>=|<=|=)(\d+))$/), func;
        if (!temp) {
            result.name.push(x);
        } else if (temp[4] !== undefined) {
            func = new Function('x','return x ' + temp[5].replace(/^=$/,'==') + ' ' + temp[6] + ';');
            result[temp[4]] = func;
        } else {
            func = new Function('x','return /' + temp[3] + '/i.test(x);');
            result[temp[2]] = func; 
        }
    });
    if (result.name.length === 0) delete result.name;
    else result.name = new Function('x','return /' + result.name.join(' ') + '/i.test(x);');
    return result;
};

var populateList = function(parameters,target) {
    var result = units;
    $(target).empty();
    if (parameters === null) return;
    Object.keys(parameters).forEach(function(key) {
        var unitKey = key.replace(/^(hp|atk)$/,function(x) { return 'max' + x.toUpperCase(); });
        result = result.filter(function(x) {
            return parameters[key](x[unitKey]);
        });
    });
    result.forEach(function(unit) {
        $(target).append(Utils.createThumbnail(unit.number,false,onThumbnailClick));
    });
};

/* * * * * Events * * * * */

var onThumbnailClick = function() {
    var unitNumber = parseInt(this.getAttribute('unitID'),10);
    updateRecent(unitNumber);
    $(document).trigger('unitPicked',[ lastSlotNumber, unitNumber ]);
    closeDialog();
};

var onUnitClick = function(e) {
    if (e.which != 1 || e.ctrlKey) return;
    if (Utils.isClickOnOrb(e,e.target)) return;
    lastSlotNumber = $(this).index();
    createDialog();
    if (!instructionsShown) showInstructions();
};

/* * * * * Recent list generation * * * * */

var updateRecent = function(unitNumber) {
    var n = recentUnits.indexOf(unitNumber);
    if (n < 0) recentUnits.unshift(unitNumber);
    else recentUnits = recentUnits.splice(n,1).concat(recentUnits);
    recentUnits = recentUnits.slice(0,14);
    localStorage.setItem('recentUnits',JSON.stringify(recentUnits));
};

var populateRecent = function(target) {
    recentUnits.forEach(function(x) {
        var thumbnail = Utils.createThumbnail(x,true,onThumbnailClick);
        target.append(thumbnail);
    });
};

/* * * * * Events * * * * */

$(function() {

    $('.unit').click(onUnitClick);

});

})();
