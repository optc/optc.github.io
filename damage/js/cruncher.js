(function() {

var DEFAULT_HIT_MODIFIERS = [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]; 

var team = [ null, null, null, null, null, null ];
var captainAbilities = [ null, null ];

var merryBonus = 1;
var currentHP = 1;
var maxHP = 1;
var percHP = 100.0;

var crunchingEnabled = true;

/* * * * * Crunching * * * * */

var crunch = function() {
    if (!crunchingEnabled) return;
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
        damage.push([ x, atk * x.orb * getMultiplierOfUnit(x,type) , n ]);
    });
    // initialize ability array
    var abilities = [ ];
    if (captainAbilities[0] != null) abilities.push(captainAbilities[0]);
    if (captainAbilities[1] != null) abilities.push(captainAbilities[1]);
    // apply static multipliers and sort from weakest to stongest
    for (var i=0;i<abilities.length;++i) {
        if (!abilities[i].hasOwnProperty('atk'))  continue;
        damage = applyCaptainEffect(damage,abilities[i].atk);
    }
    damage.sort(function(x,y) { return x[1] - y[1]; });
    /** 1st scenario: no captains with hit modifiers
     * we can just apply the 1.90 perfect multipliers and call it a day
     ** 2nd scenario: 1 captain with hit modifiers
     * we need to check which hit modifiers (the captain's or the default ones) return the highest damage
     * the effect of the captain with the hit modifiers only applies if its modifiers are actually being used
     ** 3rd scenario: both captains with hit modifiers
     * we need to check which hit modifiers (the captains' or the default ones) return the highest damage
     * the effect of each captain only applies if their modifiers are actually being used
     */
    var captainsWithHitModifiers = abilities.filter(function(x) { return x.hasOwnProperty('hitModifiers'); });
    var captainsWithChainMultipliers = abilities.filter(function(x) { return x.hasOwnProperty('chain'); });
    // get data struct ready
    var data = [ damage ];
    for (var i=0;i<captainsWithHitModifiers.length;++i) data.push(damage);
    // compute damages
    for (var i=0;i<data.length;++i) {
        var modifiers = (i == 0 ? DEFAULT_HIT_MODIFIERS : captainsWithHitModifiers[i-1].hitModifiers);
        var damageWithMultipliers = applyChainMultipliers(data[i],modifiers,captainsWithChainMultipliers);
        // apply compatible captain effects
        for (var j=1;j<data.length;++j) {
            if (!arraysAreEqual(modifiers,captainsWithHitModifiers[j-1].hitModifiers)) continue;
            damageWithMultipliers.result = applyCaptainEffect(damageWithMultipliers.result,captainsWithHitModifiers[j-1].hitAtk);
        }
        var overallDamage = damageWithMultipliers.result.reduce(function(prev,x) { return prev + x[1]; },0);
        data[i] = { damage: damageWithMultipliers, overall: overallDamage, modifiers: modifiers };
    }
    // find index of maxiumum damage
    var index = 0, currentMax = data[0].overall;
    for (var i=1;i<data.length;++i) {
        if (data[i].overall < currentMax) continue;
        index = i;
        currentMax = data[i].overall;
    }
    // return results
    if (!withDetails) return merryBonus * currentMax;
    // compute details
    var result = {
        modifiers: data[index].modifiers,
        multipliers: data[index].damage.multipliers,
        order: data[index].damage.result
    };
    result.order = result.order.map(function(x) { x[1] *= merryBonus; return x; });
    return result;
}

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
            !captainAbilities[captainNumber].hasOwnProperty('hitModifiers'))
        return [ 0, 0.3, 0.6, 0.9, 1.2, 1.5 ];
    return captainAbilities[captainNumber].hitModifiers;
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

var arraysAreEqual = function(a,b) {
    return a.length == b.length && a.every(function(x,n) { return x == b[n]; });
};

/* * * * * Captain effects * * * * */

var applyChainMultipliers = function(damage,modifiers,captains) {
    var multipliersUsed = [ ];
    var currentMultiplier = 1.0;
    var result = damage.map(function(x,n) {
        multipliersUsed.push(currentMultiplier);
        var unit = x[0], damage = x[1], order = x[2];
        var result = damage * currentMultiplier;
        var captainMultiplier = captains.reduce(function(x,y) {
            return x * y.chain(unit.unit,n,currentHP,maxHP,percHP,modifiers[n]);
        },1);
        var bonusMultiplier = (modifiers[n] == 'Perfect' ? 1.9 : 1.0);
        if (modifiers[n] == 'Perfect') currentMultiplier += 0.3 * captainMultiplier;
        else if (modifiers[n] == 'Great') currentMultiplier += 0.1 * captainMultiplier;
        else if (modifiers[n] == 'Miss') currentMultiplier = 1.0;
        return [ unit, result * bonusMultiplier, order ];
    });
    return { result: result, multipliers: multipliersUsed };
};

var applyCaptainEffect = function(damage,effect) {
    return damage.map(function(x,n) {
        var unit = x[0], damage = x[1], order = x[2];
        damage *= effect(unit.unit,n,currentHP,maxHP,percHP);
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

var getMultiplier = function(hit,currentMultiplier) {
    if (hit == 'Perfect') return 0.3;
    if (hit == 'Great') return 0.1;
    if (hit == 'Perfect') return 0.0;
    return -currentMultiplier;
}

var createFunctions = function(data) {
    var result = { };
    for (key in data) {
        if (data[key] == undefined)
            $.notify("The captain you selected has a strange ass ability that can't be parsed correctly yet");
        else if (key != 'hitModifiers')
            result[key] = new Function('unit','chainPosition','currentHP','maxHP','percHP','modifier','return ' + data[key]);
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
    $(document).trigger('detailsReady',crunchForType(type.toUpperCase(),true));
};

var onCrunchToggled = function(event,enabled) {
    crunchingEnabled = enabled;
    if (enabled) crunch();
};

/* * * * * Events * * * * */

// core
$(document).on('unitPicked',onUnitPick);
$(document).on('unitLevelChanged',onLevelChange);
$(document).on('merryBonusUpdated',onMerryChange);
$(document).on('hpChanged',onHpChange);
// loader
$(document).on('crunchingToggled',onCrunchToggled);
// orb control
$(document).on('orbMultiplierChanged',onOrbMultiplierChanged);
// drag & drop
$(document).on('unitsSwitched',onUnitsSwitched);
// details
$(document).on('detailsRequested',onDetailsRequested);

})();
