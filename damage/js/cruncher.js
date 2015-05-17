(function() {

var team = [ null, null, null, null, null, null ];
var captainAbilities = [ null, null ];

var merryBonus = 1;
var currentHP = 1;
var maxHP = 1;
var percHP = 100.0;

/* * * * * Crunching * * * * */

var crunch = function() {
    var result = { };
    ['STR','QCK','DEX','PSY','INT'].forEach(function(type) {
        result[type] = crunchForType(type);
    });
    result.HP = 0;
    team.forEach(function(x,n) {
        if (x == null) return;
        var hp = getHpOfUnit(x);
        result.HP += applyCaptainEffectsToHP(x,hp);
    });
    $(document).trigger('numbersCrunched',result);
};

var crunchForType = function(type) {
    var damage = [ ]
    team.forEach(function(x,n) {
        if (x == null) return;
        var atk = getAttackOfUnit(x);
        damage.push([ x, atk * getMultiplierOfUnit(x,type) * 1.90 ]);
    });
    damage.sort(function(x,y) { return x[1] - y[1]; });
    damage = applyChainMultipliers(damage);
    damage = applyCaptainEffectsToDamage(damage);
    return merryBonus * damage.reduce(function(prev,x) { return prev + x[1]; },0);
};

var getAttackOfUnit = function(data) {
    var unit = data.unit;
    var level = data.level;
    return Math.floor(unit.minATK + (unit.maxATK - unit.minATK) / (unit.maxLevel == 1 ? 1 : (unit.maxLevel-1)) * (level-1));
};

var getHpOfUnit = function(data) {
    var unit = data.unit;
    var level = data.level;
    return Math.floor(unit.minHP + (unit.maxHP - unit.minHP) / (unit.maxLevel == 1 ? 1 : (unit.maxLevel-1)) * (level-1));
};

var getMultiplierOfUnit = function(data,against) {
    var type = data.unit.type;
    if (type == 'STR' && against == 'DEX') return 2;
    if (type == 'STR' && against == 'QCK') return 0.5;
    if (type == 'QCK' && against == 'STR') return 2;
    if (type == 'QCK' && against == 'DEX') return 0.5;
    if (type == 'DEX' && against == 'QCK') return 2;
    if (type == 'DEX' && against == 'STR') return 0.5;
    if (type == 'INT' && against == 'PSY') return 2;
    if (type == 'PSY' && against == 'INT') return 2;
    return 1;
};

/* * * * * Captain effects * * * * */

var applyChainMultipliers = function(damage) {
    var multiplier = 1;
    for (var i=0;i<2;++i) {
        if (captainAbilities[i] != null && captainAbilities[i].hasOwnProperty('chain'))
            multiplier *= captainAbilities[i].chain(unit.unit);
    }
    return damage.map(function(x,n) {
        var unit = x[0], damage = x[1];
        return [ unit, damage * (1 + 0.3 * multiplier * n) ];
    });
};

var applyCaptainEffectsToDamage = function(damage) {
    return damage.map(function(x,n) {
        var unit = x[0], damage = x[1];
        for (var i=0;i<2;++i) {
            if (captainAbilities[i] != null && captainAbilities[i].hasOwnProperty('atk'))
                damage *= captainAbilities[i].atk(unit.unit,n,currentHP,maxHP,percHP);
        }
        return [ unit, damage ];
    });
};

var applyCaptainEffectsToHP = function(unit,hp) {
    for (var i=0;i<2;++i) {
        if (captainAbilities[i] != null && captainAbilities[i].hasOwnProperty('hp'))
            hp *= captainAbilities[i].hp(unit.unit);
    }
    return hp;
};

var createFunctions = function(data) {
    var result = { };
    for (key in data) {
        if (data[key] == undefined)
            $.notify("The captain you selected has a strange ass ability that can't be parsed correctly yet");
        else
            result[key] = new Function('unit','chainPosition','currentHP','maxHP','percHP','return ' + data[key]);
    }
    return result;
};

/* * * * * Event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    team[slotNumber] = { unit: units[unitNumber], level: 1 };
    if (slotNumber < 2) {
        if (captains.hasOwnProperty(unitNumber+1))
            captainAbilities[slotNumber] = createFunctions(captains[unitNumber+1]);
        else
            captainAbilities[slotNumber] = null;
    }
    crunch();
};

var onLevelChange = function(event,slotNumber,level) {
    team[slotNumber].level = level;
    crunch();
};

var onMerryChange = function(event,bonus) {
    merryBonus = bonus;
    crunch();
};

var onHpChange = function(event,current,max,perc) {
    currentHP = current;
    maxHP = max;
    percHP = perc;
    crunch();
};

/* * * * * Events * * * * */

$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('merryBonusUpdated',onMerryChange);
$(document).on('hpChanged',onHpChange);

})();
