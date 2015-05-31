(function() {

var data = { };

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    var value = JSON.parse(localStorage.getItem(key));
    if (value != undefined) return value;
    return def;
};

var saveValue = function(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
};

var save = function(what) {
    saveValue(what,data[what]);
};

/* * * * * Event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    data.team[slotNumber] = { unit: units[unitNumber], level: 1 };
    save('team');
};

var onLevelChange = function(event,slotNumber,level) {
    data.team[slotNumber].level = level;
    save('team');
};

var onMerryChange = function(event,bonus) {
    data.merry = bonus;
    save('merry');
};

var onHpChange = function(event,current,max,perc) {
    data.hp.current = current;
    data.hp.max = max;
    data.hp.perc = perc;
    save('hp');
};

var onNumbersCrunched = function(event,numbers) {
    data.hp.current = Math.round(data.hp.perc * numbers.HP / 100);
    data.hp.max = numbers.HP;
    save('hp');
};

var onResetStorage = function() {
    Object.keys(data).forEach(function(x) {
        if (x != 'sliders') localStorage.removeItem(x);
    });
    window.location.reload();
}

var onUnitsSwitched = function(event,slotA,slotB) {
    var teamA = data.team[slotA];
    data.team[slotA] = data.team[slotB];
    data.team[slotB] = teamA;
    save('team');
};

var onUnitRemoved = function(event,slotNumber) {
    data.team[slotNumber] = null;
    save('team');
};

var onSliderToggled = function(event,value) {
    data.sliders = value;
    save('sliders');
};

var onDefenseChanged = function(event,value) {
    data.defense = value;
    save('defense');
};

/* * * * * (Re-)initialize * * * * */

$(function() {

    data.team  = loadValue('team',[ null, null, null, null, null, null ]);
    data.merry = loadValue('merry',1.0);
    data.hp = loadValue('hp',{ current: 1, max: 1, perc: 100 });
    data.sliders = loadValue('sliders',true)
    data.defense = loadValue('defense',0);

    $(document).trigger('crunchingToggled',false);

    data.team.forEach(function(x,n) {
        if (x == null) return;
        $(document).trigger('unitPicked',[ n, x.unit.number ]);
        $(document).trigger('unitLevelChanged',[ n, x.level ]);
    });

    if (data.merry != 1.0)
        $(document).trigger('merryBonusUpdated',data.merry);

    if (data.hp.current != 1 || data.hp.max != 1 || data.hp.perc != 1)
        $(document).trigger('hpChanged',[ data.hp.current, data.hp.max, data.hp.perc ]);

    if (!data.sliders)
        $(document).trigger('sliderToggle',false);

    if (data.defense != 0)
        $(document).trigger('defenseChanged',data.defense);

    $(document).trigger('crunchingToggled',true);

    /* * * * * Events * * * * */

    // core
    $(document).on('unitPicked',onUnitPick);
    $(document).on('unitLevelChanged',onLevelChange);
    $(document).on('merryBonusUpdated',onMerryChange);
    $(document).on('hpChanged',onHpChange);
    $(document).on('sliderToggle',onSliderToggled);
    $(document).on('resetStorage',onResetStorage);
    $(document).on('defenseChanged',onDefenseChanged);
    // cruncher
    $(document).on('numbersCrunched',onNumbersCrunched);
    // drag & drop
    $(document).on('unitsSwitched',onUnitsSwitched);
    $(document).on('unitRemoved',onUnitRemoved);

});

})();
