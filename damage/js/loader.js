(function() {

var team, merry, hp;

/* * * * * Storage methods * * * * */

var loadValue = function(key,def) {
    return JSON.parse(localStorage.getItem(key)) || def;
};

var saveValue = function(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
};

var save = function() {
    saveValue('team',team);
    saveValue('merry',merry);
    saveValue('hp',hp);
};

/* * * * * Event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    team[slotNumber] = { unit: units[unitNumber], level: 1 };
    save();
};

var onLevelChange = function(event,slotNumber,level) {
    team[slotNumber].level = level;
    save();
};

var onMerryChange = function(event,bonus) {
    merry = bonus;
    save();
};

var onHpChange = function(event,current,max,perc) {
    hp.current = current;
    hp.max = max;
    hp.perc = perc;
    save();
};

var onNumbersCrunched = function(event,numbers) {
    hp.max = numbers.HP;
    save();
};

$(function() {

/* * * * * (Re-)initialize * * * * */

team  = loadValue('team',[ null, null, null, null, null, null ]);
merry = loadValue('merry',1.0);
hp    = loadValue('hp',{ current: 1, max: 1, perc: 100 });

team.forEach(function(x,n) {
    if (x == null) return;
    $(document).trigger('unitPicked',[ n, x.unit.number ]);
    $(document).trigger('unitLevelChanged',[ n, x.level ]);
});

if (merry != 1.0)
    $(document).trigger('merryBonusUpdated',merry);

if (hp.current != 1 || hp.max != 1 || hp.perc != 1)
    $(document).trigger('hpChanged',[ hp.current, hp.max, hp.perc ]);

/* * * * * Events * * * * */

$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('merryBonusUpdated',onMerryChange);
$(document).on('hpChanged',onHpChange);
$(document).on('numbersCrunched',onNumbersCrunched);

});

})();
