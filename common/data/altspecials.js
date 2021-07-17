window.altspecials = {
    1587: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1588: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1934: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1935: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2073: {
        multiplier: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.altspecials[p.team[p.sourceSlot].unit.number+1].multiplier[p.sourceSlot]) + 1) % levels.length;
            window.altspecials[p.team[p.sourceSlot].unit.number+1].multiplier[p.sourceSlot] = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2074: {
        multiplier: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.altspecials[p.team[p.sourceSlot].unit.number+1].multiplier[p.sourceSlot]) + 1) % levels.length;
            window.altspecials[p.team[p.sourceSlot].unit.number+1].multiplier[p.sourceSlot] = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2245: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            console.log(p);
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2300: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2958: {
        atk: function(p) { return 2; },
        type: "type",
    },
    2960: {
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 100; }
    },
    2962: {
        delay: function(p) { return 1; },
    },
    2964: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3009: {
        orb: function(p) { return p.unit.cost <= 40  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3037: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3038: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3071: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3100:{
        staticMult: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3118: {
        def: function(p) { return 0; },
    },
    3122: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3175: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3225:{
        affinity: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    3334: {
        chainAddition: function(p) { return 1; },
    },
    3364: {
        atkPlus: function(p) { return 0.3; },
        orbPlus: function(p) { return 0.3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3391: {
        affinity: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
};

var calcGhostStartIDAltSpecials = { "start": 5000 };

var ghostsAltSpecials = {
    12: {
        chainAddition: function(p) { return 0.5; },
    },
    13: {
        chainAddition: function(p) { return 0.5; },
    },
    14: {
        chainAddition: function(p) { return 0.5; },
    },
    15: {
        chainAddition: function(p) { return 0.5; },
    },
    28: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    29: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    30: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    31: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    32: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    33: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    34: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    35: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    36: {
        chainMultiplication: function(p) { return 1.25; },
    },
    37: {
        chainMultiplication: function(p) { return 1.25; },
    },
    38: {
        chainMultiplication: function(p) { return 1.25; },
    },
    39: {
        chainMultiplication: function(p) { return 1.25; },
    },
    40: {
        chainMultiplication: function(p) { return 1.25; },
    },
    41: {
        chainMultiplication: function(p) { return 1.25; },
    },
    66: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    67: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    68: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    69: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    70: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    71: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    72: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    73: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    74: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    75: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    76: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    77: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    78: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    79: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    80: {
        chainAddition: function(p) { return 0.3; },
    },
    81: {
        chainAddition: function(p) { return 0.3; },
    },
    82: {
        chainAddition: function(p) { return 0.3; },
    },
    83: {
        chainAddition: function(p) { return 0.3; },
    },
    84: {
        chainAddition: function(p) { return 0.3; },
    },
    85: {
        chainAddition: function(p) { return 0.3; },
    },
    86: {
        chainAddition: function(p) { return 0.3; },
    },
    87: {
        chainAddition: function(p) { return 0.3; },
    },
    120: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    121: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    122: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    123: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    124: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    125: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    126: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    127: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    136:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    137:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    138:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    139:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    140:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    141:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    142:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    143:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    152: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    153: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    154: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    155: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    156: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    157: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    158: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    159: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    168: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    169: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    170: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    171: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    207: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5214].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5214].multiplier = p.percHP; },
    },
    208: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5215].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5215].multiplier = p.percHP; },
    },
    209: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5216].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5216].multiplier = p.percHP; },
    },
    210: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5217].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5217].multiplier = p.percHP; },
    },
    211: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5218].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5218].multiplier = p.percHP; },
    },
    212: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5219].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5219].multiplier = p.percHP; },
    },
    213: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    214: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    215: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    216: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    217: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    218: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    219: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    220: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    237:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    238:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    239:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    276: {
        chainMultiplication: function(p) { return 1.25; },
    },
    277: {
        chainMultiplication: function(p) { return 1.25; },
    },
    278: {
        chainMultiplication: function(p) { return 1.25; },
    },
    279: {
        chainMultiplication: function(p) { return 1.25; },
    },
    280: {
        chainMultiplication: function(p) { return 1.25; },
    },
    281: {
        chainMultiplication: function(p) { return 1.25; },
    },
    282: {
        chainMultiplication: function(p) { return 1.25; },
    },
    283: {
        chainMultiplication: function(p) { return 1.25; },
    },
    300: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    301: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    302: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    303: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    322: {
        chainAddition: function(p) { return 0.3; },
    },
    323: {
        chainAddition: function(p) { return 0.3; },
    },
    324: {
        chainAddition: function(p) { return 0.3; },
    },
    325: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    326: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    327: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    328: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    329: {
        affinity: function(p) { return window.altspecials[5329].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5329].multiplier) + 1) % levels.length;
            window.altspecials[5329].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    330: {
        affinity: function(p) { return window.altspecials[5330].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5330].multiplier) + 1) % levels.length;
            window.altspecials[5330].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5330warning'
            });
        },
    },
    331: {
        affinity: function(p) { return window.altspecials[5331].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5331].multiplier) + 1) % levels.length;
            window.altspecials[5331].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5331warning'
            });
        },
    },
    332: {
        affinity: function(p) { return window.altspecials[5332].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5332].multiplier) + 1) % levels.length;
            window.altspecials[5332].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5332warning'
            });
        },
    },
    333: {
        affinity: function(p) { return window.altspecials[5333].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5333].multiplier) + 1) % levels.length;
            window.altspecials[5333].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5333warning'
            });
        },
    },
    334: {
        affinity: function(p) { return window.altspecials[5334].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5334].multiplier) + 1) % levels.length;
            window.altspecials[5334].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5334warning'
            });
        },
    },
    335: {
        affinity: function(p) { return window.altspecials[5335].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5335].multiplier) + 1) % levels.length;
            window.altspecials[5335].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5335warning'
            });
        },
    },
    336: {
        affinity: function(p) { return window.altspecials[5336].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5336].multiplier) + 1) % levels.length;
            window.altspecials[5336].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5336warning'
            });
        },
    },
    338: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
    340: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
}

Object.keys(ghostsAltSpecials).forEach(function (key) {
    window.altspecials[calcGhostStartIDAltSpecials["start"] + parseInt(key)] = ghostsAltSpecials[key];
});