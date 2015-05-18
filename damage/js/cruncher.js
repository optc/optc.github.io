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
        result[type] = crunchForType(type,false);
    });
    result.HP = 0;
    team.forEach(function(x,n) {
        if (x == null) return;
        var hp = getHpOfUnit(x);
        result.HP += applyCaptainEffectsToHP(x,hp);
    });
    result.HP = Math.max(1,result.HP);
    $(document).trigger('numbersCrunched',result);
};

var crunchForType = function(type,withDetails) {
    var damage = [ ];
    // apply type & orb multipliers
    team.forEach(function(x,n) {
        if (x == null) return;
        var atk = getAttackOfUnit(x);
        damage.push([ x, atk * x.orb * getMultiplierOfUnit(x,type) * 1.90, n ]);
    });
    // sort from weakest to strongest
    damage.sort(function(x,y) { return x[1] - y[1]; });
    // apply chain multipliers
    var CM0 = getChainMultipliersOfCaptain(0); // necessary in case we have two captains with
    var CM1 = getChainMultipliersOfCaptain(1); // two different chain multiplier requisites
    var areChainsEqual = CM0.every(function(x,y) { return x == CM1[y]; });
    var damageWithCM0 = applyChainMultipliers(damage,CM0); // may do the same operation twice,
    var damageWithCM1 = applyChainMultipliers(damage,CM1); // but it's easier to handle this way
    // apply captain effects
    var damage0 = applyCaptainEffectsToDamage(damageWithCM0,false,!areChainsEqual);
    var damage1 = applyCaptainEffectsToDamage(damageWithCM1,!areChainsEqual,false);
    // compute overall damage, add Merry's bonus
    var overallDamage0 = damage0.reduce(function(prev,x) { return prev + x[1]; },0);
    var overallDamage1 = damage1.reduce(function(prev,x) { return prev + x[1]; },0);
    if (!withDetails) return merryBonus * Math.max(overallDamage0,overallDamage1);
    // compute details
    var isCM0Better = overallDamage0 > overallDamage1;
    var result = {
        chain: (isCM0Better ? CM0 : CM1),
        order: (isCM0Better ? damage0 : damage1)
    };
    result.order = result.order.map(function(x) { x[1] *= merryBonus; return x; });
    return result;
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

var getChainMultipliersOfCaptain = function(captainNumber) {
    if (captainAbilities[captainNumber] == null ||
            !captainAbilities[captainNumber].hasOwnProperty('chainMultipliers'))
        return [ 0, 0.3, 0.6, 0.9, 1.2, 1.5 ];
    return captainAbilities[captainNumber].chainMultipliers;
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

var applyChainMultipliers = function(damage,multipliers) {
    // calculate captain's chain multipliers (if they have one)
    var multiplier = 1;
    for (var i=0;i<2;++i) {
        if (captainAbilities[i] != null && captainAbilities[i].hasOwnProperty('chain'))
            multiplier *= captainAbilities[i].chain();
    }
    // apply captain's chain multipliers to the base multipliers provided via parameter
    return damage.map(function(x,n) {
        var unit = x[0], damage = x[1], order = x[2];
        return [ unit, damage * (1 + multipliers[n] * multiplier), order ];
    });
};

var applyCaptainEffectsToDamage = function(damage,skipEffect0,skipEffect1) {
    return damage.map(function(x,n) {
        var unit = x[0], damage = x[1], order = x[2];
        if (!skipEffect0 && captainAbilities[0] != null && captainAbilities[0].hasOwnProperty('atk'))
            damage *= captainAbilities[0].atk(unit.unit,n,currentHP,maxHP,percHP);
        if (!skipEffect1 && captainAbilities[1] != null && captainAbilities[1].hasOwnProperty('atk'))
            damage *= captainAbilities[1].atk(unit.unit,n,currentHP,maxHP,percHP);
        return [ unit, damage, order ];
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
        else if (key != 'chainMultipliers')
            result[key] = new Function('unit','chainPosition','currentHP','maxHP','percHP','return ' + data[key]);
        else
            result[key] = data[key];
    }
    return result;
};

var setCaptain = function(slotNumber) {
    if (team[slotNumber] == null)
        captainAbilities[slotNumber] = null;
    else if (captains.hasOwnProperty(team[slotNumber].unit.number+1))
        captainAbilities[slotNumber] = createFunctions(captains[team[slotNumber].unit.number+1]);
    else
        captainAbilities[slotNumber] = null;
}

/* * * * * Event callbacks * * * * */

var onUnitPick = function(event,slotNumber,unitNumber) {
    team[slotNumber] = { unit: units[unitNumber], level: 1, orb: 1 };
    if (slotNumber < 2) setCaptain(slotNumber);
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

var onOrbMultiplierChanged = function(event,slotNumber,multiplier) {
    team[slotNumber].orb = multiplier;
    crunch();
};

var onUnitsSwitched = function(event,slotA,slotB) {
    var teamA = team[slotA];
    team[slotA] = team[slotB];
    team[slotB] = teamA;
    if (slotA == 0 || slotB == 0) setCaptain(0);
    if (slotA == 1 || slotB == 1) setCaptain(1);
    crunch();
};

var onDetailsRequested = function(event,type) {
    $(document).trigger('detailsReady',crunchForType(type,true));
};

/* * * * * Events * * * * */

// core
$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('merryBonusUpdated',onMerryChange);
$(document).on('hpChanged',onHpChange);
// orb control
$(document).on('orbMultiplierChanged',onOrbMultiplierChanged);
// drag & drop
$(document).on('unitsSwitched',onUnitsSwitched);
// details
$(document).on('detailsRequested',onDetailsRequested);

})();
