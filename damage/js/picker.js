(function() {

var lastSlotNumber = null;
var debouncer = null;

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
            content.find('input').keyup(debounceFilter);
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
    $.notify([
        'You can now use operators to refine searches.',
        'Supported string operators:',
        '- type:X - shows only units of type X (STR, DEX, ...)',
        '- class:X - shows only units of class X (fighter, slasher, ...)',
        'Supported mathematical operators:',
        '- hp>X - shows only units with max HP > X',
        '- atk>X - shows only units with max ATK > X',
        '- cost>X - shows only units with a cost higher than X',
        '- stars>X - shows only units with more than X stars',
        'Mathematical operators also work with <, >=, <= and =',
        'Example query:',
        'type:str class:fighter hp>1200 atk>1300 cost>20'
    ].join('\n'),{
        className: 'info',
        autoHide: false
    });
    localStorage.setItem('instructionsShown','true');
    instructionsShown = true;
};

/* * * * * List generation * * * * */

var debounceFilter = function() {
    if (debouncer != null) clearTimeout(debouncer);
    var value = this.value;
    debouncer = setTimeout(function() {
        debouncer = null;
        populateList(generateSearchParameters(value),$('#pickerUnits'));
    },500);
};

var generateSearchParameters = function(query) {
    var result = { name: [ ] };
    tokens = query.trim().replace(/\s+/g,' ').split(' ').filter(function(x) { return x.length > 0 });
    tokens.forEach(function(x) {
        var temp = x.match(/^((type|class):(\w+)|(hp|atk|stars|cost)(>|<|>=|<=|=)(\d+))$/);
        if (!temp) {
            result.name.push(x);
        } else if (temp[4] != null) {
            var func = new Function('x','return x ' + temp[5].replace(/^=$/,'==') + ' ' + temp[6] + ';');
            result[temp[4]] = func;
        } else {
            var func = new Function('x','return /' + temp[3] + '/i.test(x);');
            result[temp[2]] = func; 
        }
    });
    if (result.name.length == 0) delete result.name;
    else result.name = new Function('x','return /' + result.name.join(' ') + '/i.test(x);');
    return result;
};

var populateList = function(parameters,target) {
    var result = units;
    $(target).empty();
    Object.keys(parameters).forEach(function(key) {
        var unitKey = key.replace(/^(hp|atk)$/,function(x) { return 'max' + x.toUpperCase() });
        result = result.filter(function(x) {
            return parameters[key](x[unitKey]);
        });
    });
    result.forEach(function(unit) {
        $(target).append(createThumbnail(unit.number));
    });
};

var createThumbnail = function(n) {
    var result = document.createElement('div');
    result.className = 'pickerThumbnail';
    result.style.backgroundImage = 'url(' + getThumbnailUrl(n) + ')';
    result.setAttribute('unitID',n);
    result.setAttribute('title',getTitle(units[n]));
    $(result).click(onThumbnailClick);
    return result;
};

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var getTitle = function(unit) {
    return [ unit.name,
        'ATK: ' + unit.maxATK,
        'HP: ' + unit.maxHP,
        'Cost: ' + unit.cost
    ].join('\n');
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
        var thumbnail = createThumbnail(x);
        thumbnail.classList.add('small');
        target.append(thumbnail);
    });
};

/* * * * * Events * * * * */

$(function() {

    $('.unit').click(onUnitClick);

});

})();
