window.capspecials = {
    1764: {
        atk: function(p) { return [1.75, 2][CrunchUtils.limitUnlock(p, "captains")]; },
        type: "type",
        orb: function(p) { return [1.75, 2][CrunchUtils.limitUnlock(p, "captains")]; },
    },
    1941: {
        status: function(p) { return [[1, 1, 1, 1, 1, 1, 1],[1, 1, 1, 1, 1, 1, 1.5]][CrunchUtils.llimitUnlock(p, "captains")][CrunchUtils.limitUnlock(p, "captains")]; },
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    2035: {
        orb: function(p) { return p.unit.cost <= 40 ? 2 : 1; }
    },
    2109: {
        atkCeil: function(p) { return [[1, 1, 1, 1, 1, 1, 1],[1, 1, 1, 1, 1, 1, 2.25]][CrunchUtils.llimitUnlock(p, "captains")][CrunchUtils.limitUnlock(p, "captains")]; },
    },
    2112: {
        delay: function(p) { return 1; },
    },
    2113: {
        delay: function(p) { return 1; },
    },
    2739: {
        delay: function(p) { return 1; },
    },
    3154: {
        affinity: function(p) { return 1.75; },
    },
    3640: {
        atkbase: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? [0, 1250, 1250][p.cached.multiplier] : 0; },
        chainAddition: function(p) { return [1.4, 0, 1.4][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Chain Addition", "Base ATK buffs", "Both Buffs"][n] + '. To switch to ' + ["Chain Addition", "Base ATK buffs", "Both Buffs"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3641: {
        atkbase: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? [0, 1250, 1250][p.cached.multiplier] : 0; },
        chainAddition: function(p) { return [1.4, 0, 1.4][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Chain Addition", "Base ATK buffs", "Both Buffs"][n] + '. To switch to ' + ["Chain Addition", "Base ATK buffs", "Both Buffs"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3663: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3734: {
        delay: function(p) { return 1; },
    },
    3735: {
        delay: function(p) { return 1; },
    },
    3890: {
        staticMult: function(p) { return p.slot == p.sourceSlot ? 500 : 0; }
    },
    3891: {
        staticMult: function(p) { return p.slot == p.sourceSlot ? 500 : 0; }
    },
    3895: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    3896: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    3983: {
        burn: function(p) { return [3, 0, 3][p.cached.multiplier]; },
        increaseDamageTaken: function(p) { return [1, 2, 2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken', 'burn']; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Burn", "Increase Damage Taken", "Both Debuffs"][n] + '. To switch to ' + ["Burn", "Increase Damage Taken", "Both Debuffs"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3984: {
        burn: function(p) { return [3, 0, 3][p.cached.multiplier]; },
        increaseDamageTaken: function(p) { return [1, 2, 2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken', 'burn']; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Burn", "Increase Damage Taken", "Both Debuffs"][n] + '. To switch to ' + ["Burn", "Increase Damage Taken", "Both Debuffs"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    4019: {
        burn: function(p) { return 1; },
        def: function(p) { return 0; },
    },
    4020: {
        burn: function(p) { return 1; },
        def: function(p) { return 0; },
    },
    4084: {
        weaken: function(p) { return [1.5, 1.25]; },
        ignoresImmunities: function(p) { return ['weaken']; },
    },
    4085: {
        affinityPlus: function(p) { return 0.25; },
    },
    4099: {
        status: function(p) { return p.enemyEffects.increaseDamageTaken ? 2.25 : 1; },
    },
    4100: {
        status: function(p) { return p.enemyEffects.increaseDamageTaken ? 2.25 : 1; },
    },
    4133: {
        orbPlus: function(p) { return 0.25; },
    },
    4134: {
        chainAdditionPlus: function(p) { return 0.3; },
    },
    4133: {
        atkbasePlus: function(p) { return 250; },
    },
};

var calcGhostStartIDCapSpecials = { "start": 5000 };

var ghostsCapSpecials = {
    304: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    305: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    306: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    307: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    308: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    309: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "type",
    },
    349: {
        delay: function(p) { return 1; },
    },
    350: {
        delay: function(p) { return 1; },
    },
    351: {
        delay: function(p) { return 1; },
    },
    352: {
        delay: function(p) { return 1; },
    },
    353: {
        delay: function(p) { return 1; },
    },
    354: {
        delay: function(p) { return 1; },
    },
    355: {
        delay: function(p) { return 1; },
    },
    356: {
        delay: function(p) { return 1; },
    },
    421: {
        delay: function(p) { return 1; },
    },
    422: {
        delay: function(p) { return 1; },
    },
    423: {
        delay: function(p) { return 1; },
    },
    424: {
        delay: function(p) { return 1; },
    },
    425: {
        delay: function(p) { return 1; },
    },
    426: {
        delay: function(p) { return 1; },
    },
    427: {
        delay: function(p) { return 1; },
    },
    428: {
        delay: function(p) { return 1; },
    },
    449: {
        dmgredatk: function(p) { return Math.min(1.5, 1+(p.dmgreductionCounter/100)); },
    },
    450: {
        dmgredatk: function(p) { return Math.min(1.5, 1+(p.dmgreductionCounter/100)); },
    },
    451: {
        dmgredatk: function(p) { return Math.min(1.5, 1+(p.dmgreductionCounter/100)); },
    },
    452: {
        dmgredatk: function(p) { return Math.min(1.5, 1+(p.dmgreductionCounter/100)); },
    },
    473: {
        chainAddition: function(p) { return 1.2; },
    },
    475: {
        chainAddition: function(p) { return 1.2; },
    },
    590: {
        atkbasePlus: function(p) { return 300; },
    },
    591: {
        atkbasePlus: function(p) { return 300; },
    },
    592: {
        atkbasePlus: function(p) { return 300; },
    },
    593: {
        atkbasePlus: function(p) { return 300; },
    },
    595: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    596: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    597: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    599: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    600: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    601: {
        turnedOn: false,
        onActivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
}

Object.keys(ghostsCapSpecials).forEach(function (key) {
    window.capspecials[calcGhostStartIDCapSpecials["start"] + parseInt(key)] = ghostsCapSpecials[key];
});
