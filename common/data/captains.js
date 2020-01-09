window.captains = {
    2: {
        atk: function(p) { return 1.5; }
    },
    3: {
        atk: function(p) { return 1.5; }
    },
    4: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1.5; }
    },
    5: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    6: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    7: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    8: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    10: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    11: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    12: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    13: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    14: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    15: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    16: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    17: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    18: {
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    19: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    20: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    21: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    22: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    23: {
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    24: {
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    25: {
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    26: {
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    27: {
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    28: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    35: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    36: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    37: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    38: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    39: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    41: {
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    42: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    45: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    46: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    49: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    52: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    59: {
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    60: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    61: {
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    62: {
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    65: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    66: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    67: {
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    68: {
        rcv: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    74: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    75: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1; }
    },
    76: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    77: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    194: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    195: {
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    196: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    198: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    199: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    200: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    201: {
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    202: {
        hp: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    205: {
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    206: {
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    209: {
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    210: {
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    211: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    212: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    215: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    217: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    220: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    221: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    222: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    223: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    224: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    225: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    226: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    227: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
    },
    228: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    230: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    231: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    232: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    233: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    234: {
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    235: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    236: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    248: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
    },
    249: {
        atk: function(p) { return p.unit.type == "STR" ? 3 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? p.actions[p.sourceSlot] ? 0.4 : 0.4 : 1; }//Change this
    },
    250: {
        atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 99.0 ? 3 : 1; }
    },
    251: {
        atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 99.0 ? 3 : 1; }
    },
    252: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    253: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    254: {
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    255: {
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    256: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    257: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    258: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    259: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    260: {
        atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    261: {
        atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    263: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    265: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    267: {
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    290: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    293: {
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    294: {
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    295: {
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    296: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    297: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    298: {
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    299: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    305: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    306: {
        atk: function(p) { return p.unit.type == "PSY" ? p.actions[p.sourceSlot] ? 2.5 : 2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    307: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    308: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    311: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Below Good", "Below Good", "Below Good"]) ? 3.5 : 1;
        },
        hitModifiers: ["Below Good", "Below Good", "Below Good", "Perfect", "Perfect", "Perfect"]
    },
    312: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Below Good", "Below Good", "Below Good"]) ? 3.5 : 1;
        },
        hitModifiers: ["Below Good", "Below Good", "Below Good", "Perfect", "Perfect", "Perfect"]
    },
    313: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    314: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    315: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    316: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    319: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    320: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    321: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    322: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    323: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    324: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    328: {
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
    },
    329: {
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
    },
    332: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    333: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    336: {
        atk: function(p) { return p.percHP <= 50.0 ? 1 : (p.unit.type == "PSY" ? 2 : 0.8); }
    },
    337: {
        atk: function(p) { return p.percHP <= 50.0 ? 1 : (p.unit.type == "PSY" ? 2.5 : 0.8); }
    },
    340: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    341: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    352: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    353: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
    },
    356: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    357: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
    },
    358: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    359: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP >= 99.0 ? 3 : 1; }
    },
    360: {
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    361: {
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    362: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    363: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    364: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    365: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    366: {
        chainModifier: function(p) { return 4; }
    },
    367: {
        chainModifier: function(p) { return 4; }
    },
    373: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    374: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    375: {
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    376: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    377: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    378: {
        rcv: function(p) { return 1.5; }
    },
    380: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    383: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    384: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    385: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    386: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    387: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    388: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    389: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    390: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? p.actions[p.sourceSlot] ? 3 : 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    391: {
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    392: {
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    395: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    396: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    397: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    398: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    399: {
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    400: {
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    401: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    402: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    403: {
        rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    404: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    405: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    408: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    409: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    410: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    411: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    412: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    413: {
        atk: function(p) { return p.unit.type == "INT" && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    414: {
        atk: function(p) { return p.unit.type == "INT" && p.percHP >= 99.0 ? 3 : 1; }
    },
    415: {
        atk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1;
        },
        rcv: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1;
        }
    },
    416: {
        atk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1;
        },
        rcv: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1;
        }
    },
    417: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    418: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    419: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    420: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    421: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    422: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    424: {
        atk: function(p) { return p.percHP >= 70.0 ? 1.5 : 1; }
    },
    425: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    426: {
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    427: {
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    428: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    430: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    431: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    433: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['QCK', 'STR', 'DEX']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    434: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'INT', 'INT']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    435: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'PSY', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    437: {
        rcv: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
    },
    438: {
        rcv: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 5 : 1; }
    },
    444: {
        atk: function(p) {
            return p.percHP >= 50.0 && (p.unit.class.has("Booster") || p.unit.class.has("Evolver")) ? 2 : 1;
        }
    },
    445: {
        atk: function(p) {
            return p.percHP >= 50.0 && (p.unit.class.has("Booster") || p.unit.class.has("Evolver")) ? 2.5 : 1;
        }
    },
    446: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    447: {
        atk: function(p) { return p.unit.type == "STR" ? p.actions[p.sourceSlot] ? 2.75 : 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? p.actions[p.sourceSlot] ? 2.5 : 2.25 : 1; }
    },
    448: {
        atk: function(p) { return p.unit.type == "QCK" && p.percHP >= 99.0 ? 3 : 1; }
    },
    449: {
        atk: function(p) { return p.unit.type == "QCK" && p.percHP >= 99.0 ? 3 : 1; }
    },
    450: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    451: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    452: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    453: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    454: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    455: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    456: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    457: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    458: {
        atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
    },
    459: {
        atk: function(p) { return p.unit.number == 458 || p.unit.cost <= 20 ? 3 : 1; }
    },
    461: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    462: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    463: {
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    464: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    465: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Below Good", "Below Good", "Below Good", "Below Good"]) ? 3 : 1;
        },
        hitModifiers: ["Below Good", "Below Good", "Below Good", "Below Good", "Perfect", "Perfect"]
    },
    466: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    467: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    470: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    471: {
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    482: {
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    483: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    485: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    486: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    490: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    491: {
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    492: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    496: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    497: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    498: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    499: {
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    500: {
        rcv: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    501: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    502: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    503: {
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    504: {
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    507: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    508: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    509: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    510: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    511: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    513: {
        atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 50.0 ? 1.5 : 1; }
    },
    514: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    515: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    516: {
        atk: function(p) { return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? 2.5 : 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    517: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    518: {
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    519: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    520: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; }
    },
    523: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    524: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    525: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    526: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    527: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    528: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    529: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
    },
    530: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
    },
    533: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    534: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    535: {
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    536: {
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    537: {
        chainModifier: function(p) { return 2; }
    },
    538: {
        chainModifier: function(p) { return 2; }
    },
    541: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 50.0 ? 2.5 : 1; }
    },
    542: {
        hp: function(p) { return 1.5; }
    },
    543: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 0 : 1; }
    },
    544: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 0 : 1; }
    },
    545: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    546: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    548: {
        atk: function(p) { return 1.2; }
    },
    549: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    550: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    553: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    554: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
    },
    555: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    556: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    557: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    558: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    559: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    560: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
    },
    561: {
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    562: {
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? p.actions[p.sourceSlot] ? 3.5 : 3 : p.actions[p.sourceSlot] ? 3 : 2); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    568: {
        atk: function(p) { return 1.25; },
        hp: function(p) { return 1.25; },
        rcv: function(p) { return 1.25; }
    },
    569: {
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    570: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
                p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5 :
                1;
        }
    },
    571: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
                p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5 :
                1;
        }
    },
    572: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    573: {
        rcv: function(p) { return 1.2; }
    },
    574: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    575: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    576: {
        atk: function(p) { return 1.5; },
        rcv: function(p) { return 1.2; }
    },
    577: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    578: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    579: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 1.5 : 1; }
    },
    580: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 2 : 1; }
    },
    581: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    582: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    583: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    584: {
        atk: function(p) { return 0.1; },
        hp: function(p) { return 0.1; },
        rcv: function(p) { return 0.1; }
    },
    585: {
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    586: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    589: {
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    590: {
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    596: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    597: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    598: {
        atk: function(p) { return p.unit.stars < 3 ? 2.5 : 1; }
    },
    599: {
        atk: function(p) { return p.unit.stars < 3 ? 3 : 1; }
    },
    600: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    601: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    602: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    603: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
    },
    604: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    605: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    606: {
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2 : 1; }
    },
    607: {
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    612: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    613: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    614: {
        atk: function(p) { return p.unit.cost <= 20 && p.percHP <= 30.0 ? 2.25 : 1; }
    },
    629: {
        atk: function(p) { return p.unit.stars <= 3 ? 2 : 1; }
    },
    630: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    631: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    632: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    633: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    634: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; }
    },
    635: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    636: {
        atk: function(p) { return p.unit.cost <= 2 ? 3 : 1; }
    },
    637: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    638: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    639: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    640: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    641: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; }
    },
    642: {
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    643: {
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 3 : 1; }
    },
    644: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    645: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    646: {
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    647: {
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    648: {
        atk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1;
        }
    },
    649: {
        atk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1;
        }
    },
    650: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    651: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    652: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2 : 1); }
    },
    653: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.25 : 1); }
    },
    654: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 1); }
    },
    655: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    656: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    657: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    658: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    659: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    660: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    661: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    662: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    665: {
        atk: function(p) { return 1.2; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    666: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    667: {
        atk: function(p) { return 1.75; }
    },
    668: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 + 0.75 * p.percHP / 100 : 1; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; }
    },
    669: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 + 0.75 * p.percHP / 100 : 1; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; }
    },
    670: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    671: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    672: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    673: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    674: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    675: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; }
    },
    676: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    677: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    678: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    679: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    681: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    683: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    684: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    686: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    687: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    688: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    689: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    690: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    696: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
    },
    697: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    698: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
    },
    699: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 500 : 0; }
    },
    700: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; }
    },
    701: {
        hp: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; }
    },
    702: {
        hp: function(p) { return p.unit.type == "INT" ? 2.25 : 1; }
    },
    705: {
        atk: function(p) {
            return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1;
        },
        hp: function(p) {
            return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1;
        }
    },
    706: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    707: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    708: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    709: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    710: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    711: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    712: {
        atk: function(p) { return p.unit.class.has("Striker") && p.percHP >= 50 ? 2 : 1; }
    },
    713: {
        atk: function(p) { return p.unit.class.has("Striker") && p.percHP >= 50 ? 2.5 : 1; }
    },
    715: {
        rcv: function(p) { return p.percHP <= 30 ? 3 : 1; }
    },
    716: {
        rcv: function(p) { return p.percHP <= 30 ? 5 : 1; }
    },
    717: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Slasher')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    718: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Slasher')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    719: {
        atk: function(p) {
            return p.unit.class.has("Cerebral") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1;
        }
    },
    720: {
        atk: function(p) {
            return p.unit.class.has("Cerebral") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1;
        }
    },
    721: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 1.5 : 1; }
    },
    722: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 2 : 1; }
    },
    723: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    724: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
    },
    727: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter") ? 1.75 : 1;
        }
    },
    728: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    730: {
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    731: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    732: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    733: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    734: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    735: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    736: {
        atk: function(p) { return p.unit.class.has("Slasher") && p.percHP >= 50.0 ? 2.5 : 1; }
    },
    737: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    738: {
        atk: function(p) { return p.unit.cost >= 21 ? 2 : 1; }
    },
    739: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    742: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    743: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    744: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    745: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; }
    },
    747: {
        atk: function(p) { return !p.unit.class.has("Powerhouse") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5); },
        rcv: function(p) { return 0; }
    },
    748: {
        atk: function(p) { return !p.unit.class.has("Powerhouse") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5); },
        rcv: function(p) { return 0; }
    },
    749: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    750: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    751: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    752: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    753: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    754: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; }
    },
    755: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    756: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    757: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    758: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    759: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    760: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 30.0 ? 3 : 1; }
    },
    761: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    762: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    763: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    764: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    766: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    767: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    768: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    769: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    770: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    771: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? p.actions[p.sourceSlot] ? 2.75 : 2.5 : 1; }
    },
    772: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    774: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    775: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    776: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; }
    },
    777: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
    },
    780: {
        atk: function(p) { return p.percHP <= 30.0 ? 2 : 1; }
    },
    781: {
        atk: function(p) { return p.percHP <= 30.0 ? 2.5 : 1; }
    },
    782: {
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    783: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    789: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    791: {
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; },
        hp: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; },
        rcv: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; }
    },
    793: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    794: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1; }
    },
    795: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? Math.max(1.0, 3.5 - 0.1 * p.turnCounter) : 1; }
    },
    796: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    797: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    798: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    801: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    802: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    803: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    804: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    805: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    806: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    807: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    808: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    809: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    810: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    815: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'INT', 'DEX']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    816: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'INT', 'DEX']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    825: {
        atk: function(p) { return p.unit.type == 'STR' ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == 'STR' ? 1.5 : 1; }
    },
    826: {
        atk: function(p) { return p.unit.type == 'DEX' ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == 'DEX' ? 1.5 : 1; }
    },
    827: {
        atk: function(p) { return p.unit.type == 'QCK' ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == 'QCK' ? 1.5 : 1; }
    },
    830: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.75 : 1;
        }
    },
    831: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1;
        }
    },
    832: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") ? 1 + 1.5 * ((100 - p.percHP) / 100) : 1;
        }
    },
    833: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") ? 1 + 1.75 * ((100 - p.percHP) / 100) : 1;
        }
    },
    834: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    835: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    836: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    837: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    838: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; }
    },
    839: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    840: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
    },
    843: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1;
        }
    },
    844: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 2 : 1;
        }
    },
    845: {
        hit: function(n) {
            return n > 22 ? 2.5 :
                n > 11 ? 1.5 : 1;
        }
    },
    846: {
        hit: function(n) {
            return n > 40 ? 3.5 :
                n > 30 ? 2.75 :
                n > 22 ? 2.5 :
                n > 11 ? 1.5 : 1;
        }
    },
    847: {
        atk: function(p) { return p.percHP <= 30.0 ? 1.5 : 1; }
    },
    848: {
        atk: function(p) { return p.percHP <= 30.0 ? 1.5 : 1; }
    },
    849: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    850: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.5 : 1;
        }
    },
    851: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    852: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    854: {
        atk: function(p) { return p.unit.type == 'DEX' ? 1.5 : 1; }
    },
    855: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    856: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
    },
    857: {
        atk: function(p) { return p.unit.type == 'PSY' ? 2 : 1; }
    },
    858: {
        atk: function(p) { return p.unit.type == 'PSY' ? 2 : 1; },
        rcv: function(p) { return p.unit.type == 'PSY' ? 2 : 1; }
    },
    859: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    860: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    862: {
        atk: function(p) { return p.unit.type == 'QCK' ? 2 : 1; }
    },
    863: {
        atk: function(p) { return p.unit.type == 'QCK' ? 1.75 : 1; }
    },
    864: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    865: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? p.actions[p.sourceSlot] ? 2.5 : 2 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    866: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    867: {
        hit: function(n) { return n > 11 ? 1.5 : 1; }
    },
    868: {
        atk: function(p) { return 1.2; }
    },
    869: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    870: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    871: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    872: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    873: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    874: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 3 : 1; }
    },
    875: {
        atk: function(p) {
            return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2 : 1;
        }
    },
    876: {
        atk: function(p) {
            return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2.25 : 1;
        }
    },
    878: {
        atk: function(p) { return 1.5; }
    },
    879: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; }
    },
    880: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    881: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2, [ "Shooter", "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    882: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Shooter", "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    883: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; }
    },
    884: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    885: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    886: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    887: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    889: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    890: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    891: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; }
    },
    892: {
        chainModifier: function(p) { return 2; }
    },
    893: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    894: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Good", "Great", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    895: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    896: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    897: {
        atk: function(p) {
            return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2 : 1;
        }
    },
    898: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.5 : 1;
        },
        hp: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.5 : 1;
        }
    },
    899: {
        atk: function(p) {
            return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        hp: function(p) {
            return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.25 : 1;
        }
    },
    900: {
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP >= 99.0 ? 2 : 1; }
    },
    901: {
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP >= 99.0 ? 2.75 : 1; }
    },
    902: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; }
    },
    903: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; }
    },
    905: {
        atk: function(p) { return p.unit.class.has("Slasher") && p.percHP <= 30 ? 2.5 : 1; }
    },
    906: {
        atk: function(p) { return p.unit.class.has("Slasher") && p.percHP <= 30 ? 2.75 : 1; }
    },
    907: {
        atk: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30 ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30 ? 1.5 : 1; }
    },
    908: {
        atk: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30 ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30 ? 1.75 : 1; }
    },
    909: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    910: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    911: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    912: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    913: {
        atk: function(p) { return p.unit.type != "QCK" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1); }
    },
    914: {
        atk: function(p) { return p.unit.type != "QCK" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.2); }
    },
    915: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    916: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    917: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    918: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    921: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    922: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    923: {
        atk: function(p) {
            if(p.percHP<30) {
                return p.unit.class.has("Driven") ? 2.5 : 1;
            } else {
                return p.unit.class.has("Driven") ? 2 : 1;
            }
        }
    },
    924: {
        atk: function(p) {
            if(p.percHP<30) {
                return p.unit.class.has("Driven") ? 2.75 : 1;
            } else {
                return p.unit.class.has("Driven") ? 2 : 1;
            }
        }
    },
    925: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    926: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; }
    },
    927: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    928: {
        atk: function(p) {
            if(p.percHP<30) {
                return p.unit.class.has("Driven") ? 1.75 : 1;
            } else {
                return p.unit.class.has("Striker") ? 1.75 : 1;
            }
        }
    },
    929: {
        atk: function(p) {
            if(p.percHP<30) {
                return p.unit.class.has("Driven") ? 2.25 : 1;
            } else {
                return p.unit.class.has("Striker") ? 2.25 : 1;
            }
        }
    },
    930: {
        chainModifier: function(p) { return 2; }
    },
    932: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    933: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    934: {
        atk: function(p) {
            if(p.percHP<30 || p.percHP>70) {
                return p.unit.class.has("Fighter") ? 2.75 : 1;
            } else {
                return p.unit.class.has("Fighter") ? 2 : 1;
            }
        },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    935: {
        atk: function(p) {
            if(p.percHP<30 || p.percHP>70) {
                return p.unit.class.has("Fighter") ? 2.75 : 1;
            } else {
                return p.unit.class.has("Fighter") ? 2 : 1;
            }
        },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    936: {
        chainModifier: function(p) { return 3; }
    },
    937: {
        chainModifier: function(p) { return 3.5; },
        hp: function(p) { return 1.25; }
    },
    938: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    939: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    940: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    941: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; }
    },
    942: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    943: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    944: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; }
    },
    945: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; }
    },
    946: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
    },
    947: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    948: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    949: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    950: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Free Spirit", "Fighter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    951: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Free Spirit", "Fighter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    952: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 1.2 : 1;
        },
        hp: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 1.2 : 1;
        }
    },
    953: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 1.5 : 1;
        },
        hp: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 1.5 : 1;
        }
    },
    954: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    955: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    956: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    963: {
        atk: function(p) {
            if(p.unit.cost >= 50 && p.unit.cost <= 55) return 2;
            return 1;
        }
    },
    964: {
        atk: function(p) {
            if(p.unit.cost >= 50 && p.unit.cost <= 55) return 1.5;
            return 1;
        },
        hp: function(p) {
            if(p.unit.cost >= 50 && p.unit.cost <= 55) return 1.5;
            return 1;
        },
        rcv: function(p) {
            if(p.unit.cost >= 50 && p.unit.cost <= 55) return 1.5;
            return 1;
        }
    },
    965: {
        atk: function(p) {
            if(p.unit.cost >= 50 && p.unit.cost <= 55) return 1.5;
            return 1;
        }
    },
    966: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; }
    },
    967: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; }
    },
    973: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 99.0 ? 2 : 1; }
    },
    974: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    976: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 2 : 1;
        }
    },
    977: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    978: {
        atk: function(p) { return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? 2.5 : 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    979: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 1.2 : 1; }
    },
    980: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.2 : 1; }
    },
    981: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 0.1 : 1; }
    },
    982: {
        atk: function(p) {return p.unit.class.has("Slasher") ? 2  : 1}
    },
    983: {
        atk: function(p) {return p.unit.class.has("Slasher") ? 2.25  : 1}
    },
    984: {
        atk: function(p) {return p.unit.class.has("Striker") ? 2.25  : 1}
    },
    989: {
        atk: function(p) { return p.unit.cost < 30 && p.unit.cost >20 ? 2.5 : 1; },
        hp: function(p) { return 0.1 ; }
    },
    990: {
        atk: function(p) { return p.unit.class.has("Free Spirit") && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    991: {
        atk: function(p) { return p.unit.class.has("Free Spirit") && p.percHP >= 99.0 ? 2.75 : 1; }
    },
    992: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1 ; }
    },
    993: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1 ; }
    },
    996: {
         atk: function(p) {return p.unit.class.has("Powerhouse") ? 2  : 1; }
    },
    997: {
         atk: function(p) {return p.unit.class.has("Powerhouse") ? 2.25  : 1; }
    },
    998: {
         atk: function(p) {return p.unit.class.has("Driven") ? 2  : 1; }
    },
    999: {
         atk: function(p) {return p.unit.class.has("Driven") ? 2.25  : 1; }
    },
    1000: {
        atk: function(p) { return  1 + p.percHP / 100; }
    },
    1001: {
        atk: function(p) { return  1 + p.percHP / 100; }
    },
    1002: {
        atk: function(p) {return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    1003: {
        atk: function(p) {return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    1004: {
        rcv: function(p) { return 1.5; }
    },
    1005: {
        atk: function(p) {return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1006: {
        atk: function(p) {return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) {return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1007: {
        atk: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1008: {
        atk: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    1009: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
                p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5 :
                1;
        }
    },
    1010:{
        atk: function(p) {return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1011:{
        atk: function(p) {
            if (p.unit.class.has("Driven") && p.unit.class.has("Powerhouse")) {
                return 2.625;
            } else if (p.unit.class.has("Driven")) {
                    return 1.75;
                } else if (p.unit.class.has("Powerhouse")) {
                    return 1.5;
                } return 1;
        }
    },
    1014:{
        atk: function(p) {return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1015: {
        atk: function(p) { return p.unit.type == "INT" ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 1) : 1; },
    },
    1016: {
        atk: function(p) { return p.unit.type == "INT" ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5) : 1; },
    },
    1017: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1018: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1020: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1021: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1022: {
        atk: function(p) { return 2; }
    },
    1023: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; }
    },
    1024: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1025: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1026: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    1027: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    1028: {
        hit: function(n) { return n > 21 ? 2.5 : 1; }
    },
    1029: {
        hit: function(n) {
            return n > 36 ? 3.5 :
                n > 21 ? 2.5 : 1;
        }
    },
    1030: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 99.0 ? 2.5 : 1; }
    },
    1031: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 99.0 ? 2.75 : 1; }
    },
    1032: {
         atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1033: {
         atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    1034: {
        atk: function(p) {
            return p.unit.class.has("Striker") ? p.classCount.Striker==6 ? 2.75 : p.classCount.Striker==5 ? 2.5 : p.classCount.Striker==4 ? 2 : p.classCount.Striker==3 ? 1.75 : p.classCount.Striker==2 ? 1.5 : p.classCount.Striker==1 ? 1.25 : 1 : 1; }
    },
    1035: {
        atk: function(p) { return p.unit.class.has("Striker") ? p.classCount.Striker==6 ? 2.75 : p.classCount.Striker==5 ? 2.5 : p.classCount.Striker==4 ? 2 : p.classCount.Striker==3 ? 1.75 : p.classCount.Striker==2 ? 1.5 : p.classCount.Striker==1 ? 1.25 : 1 : 1; }
    },
    1036: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit")? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1037: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit")? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1038: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1039: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1040: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    1041: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    1042: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2 : 1;},
        rcv: function(p) { return 0; }
    },
    1043: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2) : 1;},
        rcv: function(p) { return 0; }
    },
    1044: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Slasher", "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1045: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Slasher", "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1046: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.75 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1047: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.5, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1048: {
        atk: function(p) { return p.unit.type == 'PSY' ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.2 : 1; }
    },
    1049: {
        atk: function(p) { return p.unit.type == 'PSY' ? (p.percHP >= 30.0 ? 1.5 : 2.25) : 1; },
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; }
    },
    1050: {
        atk: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; }
    },
    1051: {
        atk: function(p) { return p.unit.type == 'PSY' ? 2 : 1; }
    },
    1056:{
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1;},
        rcv: function(p) { return 1.25; }
    },
    1058:{
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1;},
        hp: function(p) { return 1.25; }
    },
    1059:{
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1;},
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1;}
    },
    1060:{
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1;},
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1;}
    },
    1061:{
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1;}
    },
    1062:{
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1;}
    },
    1063:{
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1;},
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1;}
    },
    1064: {
        atk: function(p) { return p.unit.type == 'INT' ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == 'INT' ? 1.2 : 1; }
    },
    1065:{
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1;}
    },
    1066: {
        atk: function(p) { return p.unit.type == 'PSY' ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == 'PSY' ? 1.2 : 1; }
    },
    1067:{
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1;}
    },
    1068: {
        chainModifier: function(p) { return 1.5; }
    },
    1069:{
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1;}
    },
    1070:{
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1;}
    },
    1071: {
        atk: function(p) { return p.unit.cost <= 20 ? 1.5 : 1; }
    },
    1072: {
        atk: function(p) { return p.unit.cost <= 30 ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1;}
    },
    1073:{
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1;}
    },
    1074: {
        atk: function(p) { return p.unit.type == 'INT' ? 2 : 1; }
    },
    1075: {
        atk: function(p) { return p.unit.type == 'INT' ? 2 : 1; },
        hp: function(p) { return p.unit.type == 'INT' ? 2 : 1; }
    },
    1076: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    1077: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1080: {
        atk: function(p) { return p.unit.cost <= 20 ? 2.5 : 1; }
    },
    1081: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.5 : 1; }
    },
    1082: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    1083: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Striker", "Fighter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Striker") && !p.unit.class.has("Fighter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 1.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1084: {
        atk: function(p) { return !p.unit.class.has("Driven") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5); },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1085: {
        atk: function(p) { return !p.unit.class.has("Driven") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5); },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1086:{
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1;},
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1;}
    },
    1087:{
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1;},
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1;}
    },
    1088:{
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1;}
    },
    1089:{
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1;},
        hp: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1;}
    },
    1090: {
        atk: function(p) { return p.percHP <= 30.0 ? 2 : 1; }
    },
    1091: {
        atk: function(p) { return p.percHP <= 30.0 ? 2.5 : 1; }
    },
    1092: {
        rcv: function(p) { return 1 + .5 * ((100 - p.percHP) / 100); }
    },
    1093: {
        rcv: function(p) { return 1 + 1 * ((100 - p.percHP) / 100);	}
    },
    1094: {
        atk: function(p) { return p.unit.class.has('Cerebral') ? 2.0 : 1.0; }
    },
    1095: {
        atk: function(p) { return p.unit.class.has('Cerebral') ? 2.0 : 1.0; }
    },
    1096: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            return !(p.unit.class.has('Powerhouse')) ? 1.0 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1097: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.5, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            return !(p.unit.class.has('Powerhouse')) ? 1.0 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1098: {
        chainModifier: function(p) { return 2; }
    },
    1099: {
        atk: function(p) { return p.unit.class.has('Fighter') ? 2.0 : 1.0; }
    },
    1100: {
        atk: function(p) { return p.unit.class.has('Fighter') ? 2.25 : 1.0; },
        rcv: function(p) { return p.unit.class.has('Fighter') ? 1.2 : 1.0; }
    },
    1101: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1102: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1103: {
        atk: function(p) { return p.unit.class.has('Cerebral') ? 1.5 : 1.0; },
        rcv: function(p) { return p.unit.class.has('Cerebral') ? 1.5 : 1.0; }
    },
    1104: {
        atk: function(p) { return p.unit.class.has('Cerebral') ? 1.75 : 1.0; },
        rcv: function(p) { return p.unit.class.has('Cerebral') ? 1.75 : 1.0; }
    },
    1105: {
         atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1106: {
         atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1107: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1108: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    1110: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; }
    },
    1111: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.25 : 1; }
    },
    1112: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1113: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    1114: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    1115: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; }
    },
    1118: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1119: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1120: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1121: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1122: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "DEX" ? 2.5 : 1; }
    },
    1123: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "DEX" ? 2.5 : 1; }
    },
    1124: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1125: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? Math.max(1.0, 3.5 - 0.1 * p.turnCounter) : 1;
        }
    },
    1126: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    1127: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    1128: {
        atk: function(p) { return 1.75; }
    },
    1129: {
        atk: function(p) { return 2; }
    },
    1130: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1131: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1132: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    1133: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    1134: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    1135: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1136: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1137: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; }
    },
    1139: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1140: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    1141: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; }
    },
    1142: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1143: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1144: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
    },
    1145: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    1154: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.3 : 1; }
    },
    1156: {
        atk: function(p) { return ( p.unit.class.has("Driven") || p.unit.class.has("Striker") ) && p.percHP >= 50.0 ? 1.2 : 1; }
    },
    1157: {
        atk: function(p) { return ( p.unit.class.has("Driven") || p.unit.class.has("Striker") )  && p.percHP >= 50.0 ? 1.75 : 1; }
    },
    1158: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1; }
    },
    1159: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2.25 : 1; }
    },
    1160: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1161: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1162: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
    },
    1163: {
        atk: function(p) { return (p.unit.type == "PSY" && (p.unit.class.has("Driven") || p.unit.class.has("Cerebral"))) ? 2.625 : (p.unit.type == "PSY" && !(p.unit.class.has("Driven") || p.unit.class.has("Cerebral"))) ? 1.75 : (!(p.unit.type == "PSY") && (p.unit.class.has("Driven") || p.unit.class.has("Cerebral"))) ? 1.5 : 1; }
    },
    1164: {
        rcv: function(p) { return 1.2; }
    },
    1165: {
        rcv: function(p) { return 1.5; }
    },
    1167: {
        atk: function(p) { return 1.2; }
    },
    1168: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 30.0 ? 2 : 1; }
    },
    1169: {
        atk: function(p) {
            return p.unit.type == "STR" ? 1 + 1.5 * ((100 - p.percHP) / 100) : 1;
        }
    },
    1170: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1171: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    1172: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    1173: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    1174: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    1175: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
    },
    1176: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    1177: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    1178: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP >= 99.0 ? 2 : 1; }
    },
    1179: {
        atk: function(p) { return p.unit.type == "STR" && p.percHP >= 99.0 ? 2.75 : 1; }
    },
    1181: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    1182: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    1183: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    1184: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    1185: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1186: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1187: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; }
    },
    1188: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; }
    },
    1189: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
    },
    1190: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
    },
    1191: {
        atk: function(p) {
            return Math.min(3.5, 2.0 + 0.1875 * p.turnCounter);
        },
        hp: function(p) { return 1.2; }
    },
    1192: {
        atk: function(p) {
            return Math.min(3.5, 2.0 + 0.1875 * p.turnCounter);
        },
        hp: function(p) { return 1.2; }
    },
    1193: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1194: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; }
    },
    1195: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
    },
    1196: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1197: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Cerebral") ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 1) : 1; }
    },
    1198: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1199: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1202: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1203: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; }
    },
    1204: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    1205: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1206: {
        hp: function(p) { return 1.3; }
    },
    1207: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    1208: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    1209: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    1210: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    1211: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    1212: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
    },
    1213: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    1214: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; },
    },
    1215: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['QCK', 'PSY', 'DEX']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1216: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1217: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1218: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1219: {
        atk: function(p) {
            return p.unit.class.has("Shooter") ? Math.min(3, 1 + 0.125 * p.turnCounter) : 1;
        }
    },
    1220: {
        atk: function(p) {
            return p.unit.class.has("Shooter") ? Math.min(3.25, 1 + 0.225 * p.turnCounter) : 1;
        }
    },
    1221: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1222: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
    },
    1223: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    1224: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1225: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1226: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; }
    },
    1227: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    1228: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
    },
    1229: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1230: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.75 : p.unit.class.has("Powerhouse") ? 2.5 : 1; }
    },
    1231: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? ((window.specials[1231].turnedOn || window.specials[1232].turnedOn) && p.sourceSlot == 1 ? 2.1875 : 1.75) : 1; },
        rcv: function(p) { return .5 }
    },
    1232: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? ((window.specials[1231].turnedOn || window.specials[1232].turnedOn) && p.sourceSlot == 1 ? 2.925 : 2.25) : 1; },
        rcv: function(p) { return .5 }
    },
    1233: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.class.has("Cerebral") ? 2.25 :
                p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 :
                1;
        },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1234: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.class.has("Cerebral") ? 2.56 :
                p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.6 :
                1;
        },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.3 : 1; }
    },
    1235: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    1236: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    1237: {
        hit: function(n) {
            return n > 15 ? 2 : 1;
        }
    },
    1238: {
        hit: function(n) {
            return n > 30 ? 3 :
                n > 15 ? 2 : 1;
        }
    },
    1239: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1239].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1240].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 3 : 2; },
        rcv: function(p) { return 1.3 }
    },
    1240: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1239].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1240].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 3 : 2; },
        rcv: function(p) { return 1.3 }
    },
    1241: {
        chainModifier: function(p) { return 1.5; }
    },
    1242: {
        chainModifier: function(p) { return 2; }
    },
    1243: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.69 :
                p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.3 :
                1;
        },
    },
    1244: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 2.276 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse") ? 1.75 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.3 :
                1;
        },
    },
    1245: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : p.percHP <= 10.0 && p.unit.class.has("Fighter") ? 3 : 1.75; }
    },
    1246: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    1247: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2); },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    1248: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.69 :
                p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.3 :
                1;
        },
    },
    1249: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 2.56 :
                p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.6 :
                1;
        },
    },
    1250: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1251: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1252: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    1253: {
        atk: function(p) { return p.unit.type == "DEX" && p.percHP >= 99.0 ? 2.25 : 1; }
    },
    1254: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? p.unit.class.has("Striker") ? 2.75 : 1 : 1; },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1256: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 0.1 : 1; },
    },
    1257: {
        atk: function(p) { return p.percHP <= 50.0 ? 2 : 1; }
    },
    1258: {
        atk: function(p) { return p.percHP <= 50.0 ? 2.5 : 1; }
    },
    1259: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1260: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1261: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
    },
    1262: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    1263: {
        atk: function(p) { return p.unit.cost <= 20 ? 2.5 : 1; }
    },
    1264: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.5 : 1; }
    },
    1265: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1266: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    1267: {
        atk: function(p) { if(p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1)
                return 2.75;
            else
                return 1;
               },
        hp: function(p) { if(p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1)
                return 1.5;
            else
                return 1;
               },
    },
    1268: {
        atk: function(p) { if(p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1)
                return p.actions[p.sourceSlot] ? 3.25 : 2.75;
            else
                return 1;
               },
        hp: function(p) { if(p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1)
                return 1.5;
            else
                return 1;
               },
    },
    1271: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1272: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    1273: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 2.25 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse") ? 1.5 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.5 :
                1;
        },
        hp: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.44 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse") ? 1.2 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.2 :
                1;
        },
    },
    1274: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 2.56 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse") ? 1.6 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.6 :
                1;
        },
        hp: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.44 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse") ? 1.2 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.2 :
                1;
        },
    },
    1275: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1276: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    1277: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Striker") && p.percHP >= 99.0 ? 2.25 : 1; },
        rcv: function(p) { return .01; },
    },
    1278: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Striker") && p.percHP >= 99.0 ? 2.75 : 1; },
        rcv: function(p) { return .01; },
    },
    1279: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1280: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
    },
    1281: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    1282: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1283: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1284: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    1285: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.375, [ "Striker" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Striker")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.375 : 1.5;
        },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1286: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
    },
    1287: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
    },
    1288: {
        atk: function(p) {
            return p.unit.class.has("Driven") ? Math.max(1.0, 2.5 - 0.1 * p.turnCounter) : 1;
        }
    },
    1289: {
        atk: function(p) {
            return p.unit.class.has("Driven") ? Math.max(1.0, 2.75 - 0.1 * p.turnCounter) : 1;
        }
    },
    1291: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    1292: {
        atk: function(p) { return !p.unit.class.has("Driven") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2); },
    },
    1293: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1294: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },

    1297: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'STR', 'STR']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1298: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'STR', 'STR']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1299: {
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
    },
    1300: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1301: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
    },
    1302: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.class.has("Driven") ? 2.625 :
                p.unit.class.has("Slasher") && !p.unit.class.has("Driven") ? 1.75 :
                !p.unit.class.has("Slasher") && p.unit.class.has("Driven") ? 1.5 :
                1;
        },
    },
    1303: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1304: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    1305: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.3 : 1; },
    },
    1306: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    1307: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    1308: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1309: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    1310: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1311: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1312: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
    },
    1313: {
        atk: function(p) {
            return p.unit.type == "STR" ? ((p.orb == 2) ? 3.9375 : 2.25) : (p.unit.type == "DEX" ? (p.orb == 0.5 ? 3.9375 : 2.25) : (p.orb == 'str' ? 3.9375 : 2.25));
            $scope.notify({ text: p.orb });
        },
    },
    1314: {
        atk: function(p) {
            return p.unit.type == "STR" ? ((p.orb == 2) ? 3.9375 : 2.25) : (p.unit.type == "DEX" ? (p.orb == 0.5 ? 3.9375 : 2.25) : (p.orb == 'str' ? 3.9375 : 2.25));
        },
    },
    1315: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 :
            //p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 :
            //p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 :
            p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1316: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.5 :
            //p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 :
            //p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 :
            p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1317: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "STR" ? 2 : 1; },
    },
    1318: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "STR" ? 2.5 : 1; },
    },
    1321: {
        atk: function(p) { if((p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) && (p.unit.class.has("Cerebral") || p.unit.class.has("Slasher")))
                return 2.25;
            else
                return 1;
               },
    },
    1322: {
        atk: function(p) { if((p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) && (p.unit.class.has("Cerebral") || p.unit.class.has("Slasher")))
                return 2.5;
            else
                return 1;
               },
    },
    1323: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.class.has("Driven") ? 1.69 :
                p.unit.class.has("Driven") || p.unit.class.has("Slasher") ? 1.3 :
                1;
        }
    },
    1324: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.class.has("Driven") ? 2.56 :
                p.unit.class.has("Driven") || p.unit.class.has("Slasher") ? 1.6 :
                1;
        }
    },
    1326: {
        atk: function(p) { return 1.3; },
    },
    1327: {
        atk: function(p) { return p.unit.cost <= 20 ? 2 : 1; },
    },
    1328: {
        atk: function(p) { return p.unit.cost <= 20 ? 2.5 : 1; },
    },
    1330: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1333: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 1.96 :
                p.unit.class.has("Powerhouse") || p.unit.type == "STR" ? 1.4 :
                1;
        }
    },
    1334: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") && p.unit.type == "DEX" ? 1.96 :
                p.unit.class.has("Free Spirit") || p.unit.type == "DEX" ? 1.4 :
                1;
        }
    },
    1335: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1336: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1337: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1338: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2.25 : 1; }
    },
    1339: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; }
    },
    1340: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1341: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.625, ["QCK"]); },
        hitAtk: function(p) {
            if (!(p.unit.type == "QCK")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Below Good", "Below Good", "Below Good"]) ? 2.625 : 1.75;
        },
        hitModifiers: ["Below Good", "Below Good", "Below Good", "Perfect", "Perfect", "Perfect"]
    },
    1342: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
    },
    1343: {
        hp: function(p) { return 0.5; },
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1344: {
        hp: function(p) { return 0.5; },
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
    },
    1345: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
    },
    1346: {
        hp: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1349: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    1352: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.5, ["Fighter"]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.5 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1353: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1354: {
        chainModifier: function(p) { return 2; }
    },
    1355: {
        chainModifier: function(p) { return 3; }
    },
    1356:{
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1357:{
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1358: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1359: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
    },
    1360: {
        atk: function(p) { return p.unit.cost <= 30 ? 2 : 1; },
        hp: function(p) { return p.unit.cost <= 30 ? 1.2 : 1; }
    },
    1361: {
        atk: function(p) { return p.unit.class.has("Slasher") ? p.classCount.Slasher>=5 ? Math.max(2.5, 2.5 + .5 * Math.min(p.turnCounter,1)) : 1 : Math.max(1, 1 + .2 * Math.min(p.turnCounter,1)); },
        hp: function(p) { return p.unit.class.has("Slasher") ?
            p.classCount.Slasher>=5 ? 1.5 : 1 : 1; },
    },
    1362: {
        atk: function(p) { return p.unit.class.has("Slasher") ? p.classCount.Slasher>=5 ? Math.max(2.5, 2.5 + .5 * Math.min(p.turnCounter,1)) : 1 : Math.max(1, 1 + .2 * Math.min(p.turnCounter,1)); },
        hp: function(p) { return p.unit.class.has("Slasher") ?
            p.classCount.Slasher>=5 ? 1.5 : 1 : 1; },
    },
    1363: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    1364: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    1365: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1366: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 1.5); },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1367: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    1368: {
        atk: function(p) { return !(p.unit.type == "STR") ? 1 : p.percHP <= 30.0 ? 3 : 2.5; }
    },
    1369: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1370: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1371: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Slasher", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.5 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.25 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1372: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Slasher", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1373: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
    },
    1374: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1375: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    1376: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; },
    },
    1377: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.3 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.3 : 1; }
    },
    1378: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    1379: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    1380: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1381: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1382: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1383: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
    },
    1384: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; },
    },
    1387: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.8125 : 2.25;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.25; },
    },
    1388: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; },
    },
    1389: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1390: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.5 : 0.5; },
        hp: function(p) { return p.unit.cost <= 40 ? 1 : 0.5; }
    },
    1391: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.5 : 0.5; },
        hp: function(p) { return p.unit.cost <= 40 ? 1 : 0.5; }
    },
    1392: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; },
    },
    1393: {
        atk: function(p) { return p.unit.cost <= 30 ? 2 : 1; },
    },
    1394: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "STR" ? 1.1 : 1; },
    },
    1395: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "STR" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "STR" ? 1.2 : 1; },
    },
    1396: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; },
    },
    1397: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    1398: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1399: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1400: {
        atk: function(p) {
            return p.unit.class.has("Shooter") && p.unit.class.has("Driven") ? 2.275 :
                p.unit.class.has("Shooter") && !p.unit.class.has("Driven") ? 1.75 :
                !p.unit.class.has("Shooter") && p.unit.class.has("Driven") ? 1.3 :
                1;
        },
    },
    1401: {
        atk: function(p) {
            return p.unit.class.has("Shooter") && p.unit.class.has("Driven") ? 2.625 :
                p.unit.class.has("Shooter") && !p.unit.class.has("Driven") ? 1.75 :
                !p.unit.class.has("Shooter") && p.unit.class.has("Driven") ? 1.5 :
                1;
        },
    },
    1402: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 2 : 1; },
    },
    1403: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? p.actions[p.sourceSlot] ? 4 : 2.5 : 1; },
    },
    1404: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? p.actions[p.sourceSlot] ? 4 : 2.5 : 1; },
    },
    1405: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
    },
    1406: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    1407: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? 1.25 : 1; },
    },
    1408: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? 1.5 : 1; },
    },
    1410: {
        chainModifier: function(p) { return 2.5; }
    },
    1411: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        rcv: function(p) { return 0; }
    },
    1412: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; },
        rcv: function(p) { return 0; }
    },
    1413: {
        atk: function(p) { return p.percHP <= 30.0 ? 3 : 1.75; },
        hp: function(p) { return 1.2; }
    },
    1414: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    1415: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
    },
    1416: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.25 : 1; },
        hp: function(p) { return p.unit.cost <= 30 ? 1.2 : 1; },
    },
    1417: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
    },
    1418: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1419: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1420: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    1422: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1422: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    1423: {
        atk: function(p) { return 1.75; },
    },
    1424: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1 + 1.25 * p.percHP / 100 : 1; }
    },
    1425: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1426: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 1.25 : 1; },
    },
    1427: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    1429: {
        rcv: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    1430: {
        rcv: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Striker") ? 2 : 1; },
    },
    1431: {
        atk: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 2;
            else
                return 1;
               },
        hp: function(p) { if(p.classCount.FreeSpirit>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1)
                return 1.2;
            else
                return 1;
               },
    },
    1432: {
        atk: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 2.5;
            else
                return 1;
               },
        hp: function(p) { if(p.classCount.FreeSpirit>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1)
                return 1.5;
            else
                return 1;
               },
    },
    1433: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 3 : 1 : 1; },
        hp: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 2 : p.classCount.Powerhouse==5 ? 1.5 : p.classCount.Powerhouse==4 ? 1.4 : p.classCount.Powerhouse==3 ? 1.3 : p.classCount.Powerhouse==2 ? 1.2 : p.classCount.Powerhouse==1 ? 1.1 : 1 : 1; },
    },
    1434: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 3 : 1 : 1; },
        hp: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 2 : p.classCount.Powerhouse==5 ? 1.5 : p.classCount.Powerhouse==4 ? 1.4 : p.classCount.Powerhouse==3 ? 1.3 : p.classCount.Powerhouse==2 ? 1.2 : p.classCount.Powerhouse==1 ? 1.1 : 1 : 1; },
    },
    1435: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? 2 : 1; },
        hp: function(p) {
            return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1436: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) {
            return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    1437: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.class.has("Striker") ? 1.69 :
                p.unit.class.has("Powerhouse") || p.unit.class.has("Striker") ? 1.3 :
                1;
        }
    },
    1438: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.class.has("Striker") ? 2.56 :
                p.unit.class.has("Powerhouse") || p.unit.class.has("Striker") ? 1.6 :
                1;
        }
    },
    1439: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.2 : 1;
        }
    },
    1440: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.5 : 1;
        }
    },
    1441: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1442: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
    },
    1443: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Good", "Great", "Perfect"]) ? 2.75 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1444: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Good", "Great", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1445: {
        atk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 2.25 + 0.5 * p.percHP / 100 : 1;
        },
        rcv: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP <= 50.0 ? 1.5 : 1;
        }
    },
    1446: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    1447: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    1448: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
    },
    1449: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1450: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    1451: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.25 : 1.5); }
    },
    1452: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2); }
    },
    1453: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.5 : 1; },
    },
    1454: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.5 : 1; },
    },
    1455: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1456: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1457: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 1.75 : 1; },
    },
    1458: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 2 : 1; },
    },
    1459: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Good", "Great", "Perfect"]) ? 1.75 : 1;
        },
        hitModifiers: ["Good", "Good", "Great", "Perfect", "Perfect", "Perfect"]
    },
    1460: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Good", "Great", "Perfect"]) ? 2.14 : 1;
        },
        hitModifiers: ["Good", "Good", "Great", "Perfect", "Perfect", "Perfect"]
    },
    1461: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.6, ["QCK"]); },
        hitAtk: function(p) {
            if (!(p.unit.type == "QCK")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.6 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1462: {
        chainModifier: function(p) { return 2; }
    },
    1463: {
        chainModifier: function(p) { return 2.5; }
    },
    1465: {
        atk: function(p) { return 1.25; },
        rcv: function(p) { return 1.25; }
    },
    1466: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2 : 1; },
    },
    1467: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 1.3 : 1; },
    },
    1468: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1469: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    1470: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3 : p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1471: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? 1 + 1 * ((100 - p.percHP) / 100) : 1;
        }
    },
    1472: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.125 : 2.25; }
    },
    1473: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.125 : 2.25; }
    },
    1474: {
        atk: function(p) { return 1.5; }
    },
    1475: {
        atk: function(p) { return 2.25; }
    },
    1476: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
    },
    1477: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    1478: {
        hit: function(n) {
            return n > 44 ? 3 :
                n > 33 ? 2 :
                n > 22 ? 1.75 :
                n > 11 ? 1.5 : 1;
        }
    },
    1479: {
        hit: function(n) {
            return n > 44 ? 3.5 :
                n > 33 ? 2.75 :
                n > 22 ? 2.5 :
                n > 11 ? 1.75 : 1;
        }
    },
    1480: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1481: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.5 :
            p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1482: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    1483: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    1484: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1485: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; },
    },
    1486: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 1); },
    },
    1487: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1); },
    },
    1488: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1489: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1490: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Good", "Great"]) ? 1.75 : 1;
        },
        hitModifiers: ["Good", "Good", "Great", "Perfect", "Perfect", "Perfect"]
    },
    1491: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Good", "Great"]) ? 2 : 1;
        },
        hitModifiers: ["Good", "Good", "Great", "Perfect", "Perfect", "Perfect"]
    },
    1492: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.75 : 1; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; }
    },
    1493: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
    },
    1494: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
    },
    1495: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    1496: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1497: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    1498: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    1499: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1500: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    1501: {
        atk: function(p) { return p.unit.cost <= 15 ? 2 : 1; }
    },
    1504: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.4, [ "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.4 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1505: {
        atk: function(p) { return !(p.unit.class.has("Powerhouse")) ? 1 : p.percHP <= 30.0 ? 2.25 : 1; }
    },
    1506: {
        atk: function(p) { return !(p.unit.class.has("Powerhouse")) ? 1 : p.percHP <= 30.0 ? 2.5 : 2.25; }
    },
    1507: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 1.69 :
                p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.3 :
                1;
        }
    },
    1508: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Powerhouse") ? 2.25 :
                p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.5 :
                1;
        }
    },
    1509: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    1510: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 2 : 1; },
    },
    1511: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    1512: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1513: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1514: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1515: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 1.5 : 1; },
    },
    1516: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 2 : 1; },
    },
    1517: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1518: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1519: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1520: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    1521: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.type == "QCK" ? 1.44 :
                p.unit.class.has("Slasher") || p.unit.type == "QCK" ? 1.2 :
                1;
        }
    },
    1522: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    1523: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    1524: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    1525: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? Math.max(2.0, 3.25 - 0.0625 * p.turnCounter) : 1;
        }
    },
    1526: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    1527: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    1528: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    1529: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3 : 1.5; }
    },
    1530: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3.5 : 1.75; }
    },
    1531: {
        atk: function(p) { return p.percHP <= 30.0 ? 1.75 : p.percHP <= 50.0 ? 1.5 : 1; }
    },
    1532: {
        atk: function(p) { return p.percHP <= 30.0 ? 1.75 : p.percHP <= 50.0 ? 1.5 : 1; }
    },
    1533: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.5, ["QCK"]); },
        hitAtk: function(p) {
            return !p.unit.type == "QCK" ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.5 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1534: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.5, ["QCK"]); },
        hitAtk: function(p) {
            return !p.unit.type == "QCK" ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    1535: {
        atk: function(p) { return !p.unit.type == "PSY" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 1); }
    },
    1536: {
        atk: function(p) { return !p.unit.type == "PSY" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1); }
    },
    1537: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    1538: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") ? 1.25 : 1; }
    },
    1539: {
        atk: function(p) { return p.unit.cost <= 20 ? 1.5 : 1; },
        rcv: function(p) { return p.unit.cost <= 20 ? 1.5 : 1; }
    },
    1540: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.25 : 1; },
        rcv: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; }
    },
    1541: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'DEX', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1542: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'DEX', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 2.5 : 1;
        },
        rcv: function(p) { return 1.2; },
        hp: function(p) { return 1.2; },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1543: {
        atk: function(p) { return !(p.unit.class.has("Shooter")) ? 1 : p.percHP <= 30.0 ? 1.75 : p.percHP <= 50.0 ? 1.5 : 1; }
    },
    1544: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; }
    },
    1545: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; }
    },
    1546: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    1547: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.3 : 1; }
    },
    1548: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1549: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    1550: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
    },
    1551: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; }
    },
    1552: {
        atk: function(p) { return p.unit.cost == 40 ? 2.5 : 1; },
    },
    1553: {
        atk: function(p) { return p.unit.cost == 40 ? 2.75 : 1; },
    },
    1554: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    1555: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; },
    },
    1556: {
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    1557: {
        atk: function(p) {
            return p.unit.class.has("Striker") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1558: {
        atk: function(p) {
            return p.unit.class.has("Shooter") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1559: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1560: {
        atk: function(p) {
            return p.unit.class.has("Fighter") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1561: {
        atk: function(p) {
            return p.unit.type == "INT" ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1;
        }
    },
    1562: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") ? Math.max(1.5, 3.5 - 0.1 * p.turnCounter) : 1;
        }
    },
    1563: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Fighter", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.1875 : 1.75;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1564: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Fighter", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter") && !p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1565: {
        atk: function(p) { return 1.75; }
    },
    1566: {
        atk: function(p) { return 2; }
    },
    1567: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1568: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    1569: {
        atk: function(p) { return 2.25; }
    },
    1570: {
        atk: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : p.percHP <= 30.0 ? 2.75 : 2.5; },
        chainModifier: function(p) { return  p.percHP <= 30.0 ? 1.5 : 1; }
    },
    1571: {
        atk: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : p.percHP <= 30.0 ? 2.75 : 2.5; },
        chainModifier: function(p) { return  p.percHP <= 30.0 ? 1.5 : 1; }
    },
    1572: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1573: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1574: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
    },
    1575: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.25 : 1; }
    },
    1576: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1577: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1579: {
        atk: function(p) { return 1.3; },
        rcv: function(p) { return 1.3; },
        hp: function(p) { return 1.3; },
    },
    1580: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    1581: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    1582: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    1583: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1584: {
        atk: function(p) { return !(p.unit.class.has("Striker")) ? 1 : p.percHP <= 30.0 ? 3 : 2.5; }
    },
    1585: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1586: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1587: {
        atk: function(p) { return (p.slot == p.sourceSlot && p.actions[p.sourceSlot]) ? 6.25 : 2.5; },
        hp: function(p) { return 1.3 },
    },
    1588: {
        atk: function(p) { return (p.slot == p.sourceSlot && p.actions[p.sourceSlot]) ? 6.25 : 2.5; },
        hp: function(p) { return 1.3 },
    },
    1589: {
        chainModifier: function(p) { return 3; },
    },
    1590: {
        chainModifier: function(p) { return 3.5; },
        rcv: function(p) { return 1.2 },
        hp: function(p) { return 1.2 },
    },
    1591: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; },
    },
    1592: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    1593: {
        atk: function(p) { return p.unit.class.has("Fighter") ? p.actions[p.sourceSlot] ? 4 : 2.5 : 1; },
    },
    1595: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; }
    },
    1596: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    1597: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.75 : 1; }
    },
    1598: {
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1599: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; }
    },
    1600: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 2.5 : 1; },
    },
    1601: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1602: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1603: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.25 : 1; }
    },
    1604: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
    },
    1605: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    1606: {//BB Pirates FN Lafitte
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    1607: {//BB Pirates FN Van Augur
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1608: {//BB Pirates FN Doc Q
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1609: {//Enel
        hp: function(p) { return 0.8 },
        atk: function(p) { return Math.max(2.0, 2.0 + 0.000125 * p.healCounter); },
    },
    1610: {//Enel
        hp: function(p) { return 0.8 },
        atk: function(p) { return Math.max(2.0, 2.0 + 0.000125 * p.healCounter); },
    },
    1611: {
        atk: function(p) {return p.unit.class.has("Shooter") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    1612: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    1613: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    1614: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
    },
    1615: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
    },
    1616: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; },
    },
    1617: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 2 : 1; },
    },
    1618: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    1619: {
        chainModifier: function(p) { return 4; },
        hp: function(p) { return 1.2 },
        rcv: function(p) { return 1.2 },
    },
    1620: {
        atk: function(p) { return p.unit.class.has("Striker") && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    1621: {
        atk: function(p) { return !(p.unit.class.has("Striker")) ? 1 : p.percHP <= 30.0 ? 3 : 2.5; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    1622: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1623: {
        hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1624: {
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1625: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
    },
    1626: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Powerhouse") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1627: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1628: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 1.5 : 1; },
    },
    1629: {
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    1630: {
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1631: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; }
    },
    1632: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; }
    },
    1633: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; }
    },
    1634: {
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    1635: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    1636: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    1637: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25: 1; }
    },
    1644: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    1645: {
        atk: function(p) {
            return p.unit.class.has("Slasher") && p.unit.type == "DEX" ? 1.96 :
                p.unit.class.has("Slasher") && !p.unit.type == "DEX" ? 1.3 :
                !p.unit.class.has("Slasher") && p.unit.type == "DEX" ? 1.5 :
                1;
        }
    },
    1646: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1647: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1648: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.4 : 1.2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1649: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : 1.2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1650: {
        atk: function(p) { return p.unit.type == "DEX" ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5) : 1; },
    },
    1651: {
        atk: function(p) { return p.unit.class.has("Striker") ? (p.orb == 'meat' || p.orb == 'g') ? 1 : 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; }
    },
    1652: {
        atk: function(p) { return p.unit.class.has("Striker") ? (p.orb == 'meat' || p.orb == 'g') ? 1 : 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; }
    },
    1653: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    1654: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    1655: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1656: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1657: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    1658: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Free Spirit") ? 2.5 : 1; }
    },
    1659: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    1660: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
    },
    1661: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2 : 1; },
    },
    1662: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.5 : 1; },
    },
    1663: {
        atk: function(p) { return !p.unit.class.has("Powerhouse") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.5 : 2.5); },
        rcv: function(p) { return 0; }
    },
    1664: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
    },
    1665: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1667: {
        atk: function(p) { return !(p.unit.class.has("Striker")) ? 1 : p.percHP <= 30.0 ? 2.75 : 2.25; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    1668: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1669: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1670: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    1671: {
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1672: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1673: {
        atk: function(p) { return 1.75; }
    },
    1674: {
        atk: function(p) { return 2.25; }
    },
    1675: {
        chainModifier: function(p) { return 2; }
    },
    1676: {
        chainModifier: function(p) { return 3.25; }
    },
    1677: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
    },
    1678: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1679: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    1680: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
    },
    1681: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.5 : 1; }
    },
    1682: {
        damageSorter: function(d) { return CrunchUtils.lowCostSort(d, 3.5, 30); },
        hitAtk: function(p) {
            if (!(p.unit.cost <= 30)) return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 1.4 : 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.5 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.cost <= 30 ? 1.3 : 1; }
    },
    1683: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.3 : 1; }
    },
    1684: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.3 : 1; }
    },
    1685: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Shooter" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Shooter") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.75 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1686: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Shooter" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Shooter") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1687: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
    },
    1688: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
    },
    1689: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'DEX', 'INT']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 2.25 : 1.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1690: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'DEX', 'INT']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 3 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1691: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    1692: {
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    1693: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    1694: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.75 : 1; },
    },
    1695: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1696: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
    },
    1697: {
        atk: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 2.25;
            else
                return 1;
               },
        hp: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 1.5;
            else
                return 1;
               },
    },
    1698: {
        atk: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 2.25;
            else
                return 1;
               },
        hp: function(p) { if(p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 1.5;
            else
                return 1;
               },
    },
    1699: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    1700: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.3 : 1; }
    },
    1701: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    1702: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1703: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    1704: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
    },
    1705: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    1706: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.625, ["STR"]); },
        hitAtk: function(p) {
            return !p.unit.type == "STR" ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.125 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1707: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.75 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
    },
    1709: {
        atk: function(p) { return 1.5; },
    },
    1710: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5); },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1711: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 1.5); },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1712: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; }
    },
    1713: {
        atk: function(p) { return p.unit.class.has("Driven") ? Math.min(3.25, 2.5 + 0.25 * p.turnCounter) : 1; }
    },
    1714: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    1715: {
        atk: function(p) { return !p.unit.class.has("Striker") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2); },
    },
    1716: {
        atk: function(p) {
            return p.unit.class.has("Driven") ? Math.min(3, 1.2 + 0.1 * p.turnCounter) : 1;
        }
    },
    1718: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1719: {
        atk: function(p) { return p.unit.type != "PSY" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2 : 1); }
    },
    1720: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    1721: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.5); },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    1722: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; }
    },
    1723: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; }
    },
    1724: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1725: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1726: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.75 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1727: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.5, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Free Spirit") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1728: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2 : 1; },
    },
    1729: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1; },
    },
    1730: {
        atk: function(p) { return 2; },
    },
    1731: {
        atk: function(p) { return 2; },
    },
    1732: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.1 : 1; },
    },
    1733: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    1734: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1735: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    1736: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
    },
    1737: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
    },
    1738: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1739: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1740: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.1 : 1; },
    },
    1741: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.3 : 1; },
    },
    1742: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.1 : 1; },
    },
    1743: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.3 : 1; },
    },
    1744: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1745: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1746: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Shooter')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2.5 : (prev == 'Good' ? 2.75 : (prev == 'Great' ? 3 : (prev == 'Perfect' ? 3.25 : 2.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1747: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Shooter')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2.5 : (prev == 'Good' ? 2.75 : (prev == 'Great' ? 3 : (prev == 'Perfect' ? 3.25 : 2.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1748: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1749: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    1750: {
        atk: function(p) { return p.unit.class.has("Striker") ? 3 : 1; }
    },
    1751: {
        atk: function(p) { return p.unit.class.has("Striker") ? 3 : 1; }
    },
    1752: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.5 : 1; }
    },
    1753: {
        damageSorter: function(d) { return CrunchUtils.lowCostSort(d, 3.5, 30); },
        hitAtk: function(p) {
            if (!(p.unit.cost <= 30)) return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 1.4 : 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.5 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.cost <= 30 ? 1.3 : 1; }
    },
    1754: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1755: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1758: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.1 : 1; },
    },
    1759: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    1760: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 2 : 1; },
    },
    1761: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    1762: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4.026275, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4.026275 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.66025 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.3275 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.025 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? 2.75 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
        rcv: function(p) { return 0.5; },
    },
    1763: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4.026275, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4.026275 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.66025 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.3275 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.025 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? 2.75 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
        rcv: function(p) { return 0.5; },
    },
    1764: {
        atk: function(p) {
            return Math.min(3.5, 2.25 + 0.25 * p.turnCounter);
        },
        hp: function(p) { return 1.25; }
    },
    1765: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    1766: {
        chainModifier: function(p) { return 1.5; },
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    1767: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1767: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1769: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1770: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Cerebral" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Cerebral") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    1771: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    1772: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; }
    },
    1773: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    1774: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.25 : 1; }
    },
    1775: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    1776: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.75 : 1; }
    },
    1777: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1778: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    1779: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    1780: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    1781: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; }
    },
    1782: {
        atk: function(p) { return p.unit.type == "2.25" ? 1.75 : 1; },
    },
    1783: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; }
    },
    1784: {
        atk: function(p) { return p.unit.stars <= 4 ? 2.5 : 1; }
    },
    1791: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.5, [ "QCK", "STR", "DEX" ]); },
        hitAtk: function(p) {
            return !(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1792: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 3.25, [ "QCK", "STR", "DEX" ]); },
        hitAtk: function(p) {
            return !(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1793: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") {
                if(p.colorCount.INT==0 && p.colorCount.PSY==0 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 3.7125;
                else if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 2.75;
                else if(p.colorCount.INT==0 && p.colorCount.PSY==0)
                    return 1.35;
                else
                    return 1;
                }
                else
                    return 1;
        },
        hp: function(p) {
            if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 1.3;
            else
                return 1;
               },
    },
    1794: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") {
                if(p.colorCount.INT==0 && p.colorCount.PSY==0 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 3.7125;
                else if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 2.75;
                else if(p.colorCount.INT==0 && p.colorCount.PSY==0)
                    return 1.35;
                else
                    return 1;
                }
                else
                    return 1;
        },
        hp: function(p) {
            if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 1.3;
            else
                return 1;
               },
    },
    1795: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 2 : 1; },
    },
    1796: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1797: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; }
    },
    1798: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Driven") ? 1.25 : 1; },
    },
    1799: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.25 : 1; }
    },
    1800: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; }
    },
    1801: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2 : 1; }
    },
    1802: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.5 : 1; }
    },
    1803: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    1804: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.3 : 1; },
    },
    1805: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
        hp: function(p) { return p.unit.cost <= 30 ? 1.2 : 1; },
    },
    1806: {
        atk: function(p) { return p.unit.cost <= 30 ? 2.25 : 1; },
        hp: function(p) { return p.unit.cost <= 30 ? 1.2 : 1; },
    },
    1807: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1807].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1808].turnedOn[i]==true) {specialEnabled = true;}
            }
            return p.unit.class.has("Slasher") ? specialEnabled ? 1.35 : 1 : 1;
        },
    },
    1808: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1807].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1808].turnedOn[i]==true) {specialEnabled = true;}
            }
            return p.unit.class.has("Slasher") ? specialEnabled ? p.actions[p.sourceSlot] ? 3.5 : 1.62 : p.actions[p.sourceSlot] ? 2.5 : 1.2 : 1;
        },
        hp: function(p) { return p.actions[p.sourceSlot] ? 1.3 : 1.1 }
    },
    1809: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1810: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1811: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
    },
    1812: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    1813: {
        atk: function(p) { return 2.25; }
    },
    1814: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1815: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1816: {
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? p.actions[p.sourceSlot] ? 3.75 : 3.25 : p.actions[p.sourceSlot] ? 3.5 : 2.25); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    1817: {
        hitAtk: function(p) { return p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great"]) ? 2 : 1; },
        hitModifiers: ["Great", "Great", "Great", "Perfect", "Perfect", "Perfect"],
    },
    1818: {
        hitAtk: function(p) { return p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great"]) ? 2.5 : 1.5; },
        hitModifiers: ["Great", "Great", "Great", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.2; },
    },
    1819: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
    },
    1820: {
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    1821: {
        atk: function(p) { return 1.5; }
    },
    1822: {
        atk: function(p) { return 2; }
    },
    1823: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.543122, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.415765 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.19615 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 1.9965 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 1.815 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? 1.65 : 1.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1824: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.543122, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.543122 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.22102 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.9282 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.662 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? 2.42 : 2.2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1825: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'INT', 'INT']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1826: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'INT', 'INT']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1827: {
        atk: function(p) { return !(p.unit.type == "INT") ? 1 : p.percHP <= 30.0 ? 3 : 2.5; }
    },
    1828: {
        atk: function(p) { return !(p.unit.type == "INT") ? 1 : p.percHP <= 30.0 ? 3 : 2.5; }
    },
    1829: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2 : 1; },
    },
    1830: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1831: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9375 : 2.25 : 1; },
        hp: function(p) { return 1.25; }
    },
    1832: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9375 : 2.25 : 1; },
        hp: function(p) { return 1.25; }
    },
    1833: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "INT" ? 2.1 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "INT" ? 1.75 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "INT" ? 1.2 :
                1;
        },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.1 : 1; },
    },
    1834: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "INT" ? 2.925 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "INT" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "INT" ? 1.3 :
                1;
        },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1835: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.1 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 1.75 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "STR" ? 1.2 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1836: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.925 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "STR" ? 1.3 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1837: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 2.1 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 1.75 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "QCK" ? 1.2 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1838: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 2.925 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "QCK" ? 1.3 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1839: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 2.1 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 1.75 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "DEX" ? 1.2 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1840: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 2.925 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "DEX" ? 1.3 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    1841: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1842: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1843: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    1844: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Striker") ? 1.75 : 1; },
    },
    1845: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
    },
    1846: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.75 : 1; },
    },
    1847: {
        atk: function(p) { return (p.unit.cost <= 29) ? 3.25 : (p.unit.cost == 54) ? 3 : 1; },
        hp: function(p) { return p.unit.cost <= 29 ? 1.2 : 1; },
    },
    1848: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1849: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.3 : 1; },
    },
    1850: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    1851: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
    },
    1852: {
        atk: function(p) { return (1 + 1 * ((100 - p.percHP) / 100)); },
        hp: function(p) { return 1.2; },
    },
    1853: {
        atk: function(p) { return (p.actions[p.sourceSlot]) ? (1 + 2.25 * ((100 - p.percHP) / 100)) : (1 + 1.25 * ((100 - p.percHP) / 100)); },
        hp: function(p) { return (p.actions[p.sourceSlot]) ? 1.35 : 1.2; },
    },
    1854: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    1855: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1856: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    1857: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    1858: {
        hitAtk: function(p) {
            if (!(p.unit.class.has("Striker"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.4 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1859: {
        hitAtk: function(p) {
            if (!(p.unit.class.has("Striker"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    1860: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    1861: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    1863: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1865: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
    },
    1866: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    1867: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        chainModifier: function(p) { return 1.5; }
    },
    1868: {
        hitAtk: function(p) {
            if (!(p.unit.class.has("Slasher"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4.225 : 3.25;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    1869: {
        hitAtk: function(p) {
            if (!(p.unit.class.has("Slasher"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4.225 : 3.25;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    1870: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; }
    },
    1871: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.75 : 1; }
    },
    1872: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    1873: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.25 : 1; }
    },
    1875: {
        atk: function(p) { return 1.5; },
    },
    1876: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    1877: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.25 : 1; }
    },
    1878: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1878].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1879].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 1.5 : 2.25; },
    },
    1879: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[1878].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[1879].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 2.75 : 2.25; },
        hp: function(p) { return 1.35 }
    },
    1880: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 3.25 : 1 : 1; },
        hp: function(p) {
            return p.unit.class.has("Powerhouse") ? p.classCount.Powerhouse==6 ? 2 : p.classCount.Powerhouse==5 ? 1.5 : p.classCount.Powerhouse==4 ? 1.4 : p.classCount.Powerhouse==3 ? 1.3 : p.classCount.Powerhouse==2 ? 1.2 : p.classCount.Powerhouse==1 ? 1.1 : 1 : 1; },
    },
    1881: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.5, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Slasher')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 1.5 : (prev == 'Good' ? 2 : (prev == 'Great' ? 2.75 : (prev == 'Perfect' ? 3.5 : 2)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1882: {
        atk: function(p) { return p.percHP <= 30.0 ? 3.5 : 2.5; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; },
    },
    1883: {
        atk: function(p) { return p.percHP <= 30.0 ? 3.5 : 2.5; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; },
    },
    1884: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.1 : 1; },
    },
    1885: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    1886: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.1 : 1; },
    },
    1887: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    1888: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'PSY', 'PSY']); },
        hitAtk: function(p) {
            return p.unit.class.has("Driven") ? (CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }])) ? 1.32 : 1.2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1889: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'PSY', 'PSY']); },
        hitAtk: function(p) {
            if(p.actions[p.sourceSlot]) {
                return p.unit.class.has("Driven") ? (CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'STR',
                    minModifier: 'Good'
                }, {
                    type: 'STR',
                    minModifier: 'Good'
                }, {
                    type: 'STR',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'QCK',
                    minModifier: 'Good'
                }, {
                    type: 'QCK',
                    minModifier: 'Good'
                }, {
                    type: 'QCK',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'DEX',
                    minModifier: 'Good'
                }, {
                    type: 'DEX',
                    minModifier: 'Good'
                }, {
                    type: 'DEX',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'PSY',
                    minModifier: 'Good'
                }, {
                    type: 'PSY',
                    minModifier: 'Good'
                }, {
                    type: 'PSY',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'INT',
                    minModifier: 'Good'
                }, {
                    type: 'INT',
                    minModifier: 'Good'
                }, {
                    type: 'INT',
                    minModifier: 'Good'
                }])) ? 3.75 : 2.5 : 1;
            }
            else{
                return p.unit.class.has("Driven") ? (CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'STR',
                    minModifier: 'Good'
                }, {
                    type: 'STR',
                    minModifier: 'Good'
                }, {
                    type: 'STR',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'QCK',
                    minModifier: 'Good'
                }, {
                    type: 'QCK',
                    minModifier: 'Good'
                }, {
                    type: 'QCK',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'DEX',
                    minModifier: 'Good'
                }, {
                    type: 'DEX',
                    minModifier: 'Good'
                }, {
                    type: 'DEX',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'PSY',
                    minModifier: 'Good'
                }, {
                    type: 'PSY',
                    minModifier: 'Good'
                }, {
                    type: 'PSY',
                    minModifier: 'Good'
                }]) ||
                CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                    type: 'INT',
                    minModifier: 'Good'
                }, {
                    type: 'INT',
                    minModifier: 'Good'
                }, {
                    type: 'INT',
                    minModifier: 'Good'
                }])) ? 1.8 : 1.5 : 1;
            }
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    1890: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    1891: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    1892: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Slasher") ? 1.5 : 1;},
    },
    1893: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Slasher") ? 1.75 : 1;},
    },
    1894: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    1895: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : p.percHP <= 50.0 ? 3.0375 : 2.25; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
    },
    1896: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.25 + 1 * ((p.percHP) / 100) : 1; }
    },
    1897: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 + 1.25 * ((p.percHP) / 100) : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
    },
    1898: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2 : 1;},
        rcv: function(p) { return 0; }
    },
    1899: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2) : 1;},
        rcv: function(p) { return 0; }
    },
    1900: {
        atk: function(p) { return 2.25; }
    },
    1901: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    1902: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
    },
    1903: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    1904: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.75 : 1; },
    },
    1905: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2 : 1; },
    },
    1906: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    1907: {
        atk: function(p) { return p.unit.class.has("Driven") ? Math.max(1.0, 3.0 * (Math.pow(0.96,p.turnCounter))) : 1; }
    },
    1908: {
        atk: function(p) { return p.unit.class.has("Driven") ? Math.max(1.0, 3.5 * (Math.pow(0.96,p.turnCounter))) : 1; }
    },
    1909: {
        atk: function(p) {
            if(p.classCount.Driven == 6) {
                return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9 : 3.25;
            }
            else
                return 1;
        },
        hp: function(p) {
            if(p.classCount.Driven == 6) {
                return 1.2;
            }
            else
                return 1;
        }
    },
    1910: {
        atk: function(p) {
            if(p.classCount.Driven == 6) {
                return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9 : 3.25;
            }
            else
                return 1;
        },
        hp: function(p) {
            if(p.classCount.Driven == 6) {
                return 1.2;
            }
            else
                return 1;
        }
    },
    1911: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1912: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    1913: {
        atk: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1914: {
        atk: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1915: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2, [ "Free Spirit", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1916: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Free Spirit", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 : p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect"]) ? 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1918: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
    },
    1921: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1922: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.25 : 1; },
    },
    1923: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Slasher") ? 2 : 1; },
    },
    1924: {
        atk: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Slasher") ? 2.5 : 1; },
    },
    1926: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    1927: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 + 1.5 * ((100 - p.percHP) / 100) : 1; }
    },
    1928: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 3 : 1; },
    },
    1929: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    1930: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; }
    },
    1931: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    1932: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1933: {
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.class.has("Free Spirit") ? 2.625 :
                p.unit.class.has("Fighter") && !p.unit.class.has("Free Spirit") ? 1.75 :
                !p.unit.class.has("Fighter") && p.unit.class.has("Free Spirit") ? 1.5 :
                1;
        }
    },
    1934: {
        atk: function(p) { return p.frankyCheck.Primary == 6 ? p.actions[p.sourceSlot] ? (4 * [ 1.25, 1, .5, .75 ][['Fighter', 'Slasher', 'Striker', 'Shooter'].indexOf(p.frankyClass[p.slot])]) : 3 : 1; },
        hp: function(p) { return p.frankyCheck.Primary == 6 ? 1.3 : 1; },
    },
    1935: {
        atk: function(p) { return p.frankyCheck.Primary == 6 ? p.actions[p.sourceSlot] ? (4 * [ 1.25, 1, .5, .75 ][['Fighter', 'Slasher', 'Striker', 'Shooter'].indexOf(p.frankyClass[p.slot])]) : 3 : 1; },
        hp: function(p) { return p.frankyCheck.Primary == 6 ? 1.3 : 1; },
    },
    1936: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
    },
    1937: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    1938: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
    },
    1939: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    1940: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                    return 1.75;
                else
                    return 1;
                }
            else
                return 1;
        },
        hp: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                    return 1.05;
                else
                    return 1;
                }
            else
                return 1;
        },
        rcv: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                    return 1.05;
                else
                    return 1;
                }
            else
                return 1;
        },
    },
    1941: {
        atk: function(p) {
            if(p.actions[p.sourceSlot]) {
                if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1) {
                    if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK")
                        return (p.unit.type == "STR" ? ((p.orb == 2) ? 3.44 : 2.75) : (p.orb == 'str') ? 3.44 : 2.75);
                    else
                        return 1;
                    }
                else
                    return 1;
                        }
            else {
                if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                    if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                        return 2;
                    else
                        return 1;
                    }
                else
                    return 1;
            }
            $scope.notify({ text: p.orb });
        },
        hp: function(p) {
            if(p.actions[p.sourceSlot]) {
                if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                    if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                        return 1.2;
                    else
                        return 1;
                    }
                else
                    return 1;
                        }
            else {
                if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK") {
                    if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1)
                        return 1.1;
                    else
                        return 1;
                    }
                else
                    return 1;
            }
        },
        rcv: function(p) {
            if(p.actions[p.sourceSlot]) {
                if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1) {
                    if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK")
                        return 1.2;
                    else
                        return 1;
                }
            }
            else if(p.colorCount.STR>=1 && p.colorCount.PSY>=1 && p.colorCount.QCK>=1) {
                if(p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "QCK")
                    return 1.1;
                else
                    return 1;
            }
            else
                return 1;
        },
    },
    1942: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    1943: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1944: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1 : 1; },
    },
    1945: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1946: {
        atk: function(p) { return 1.75; }
    },
    1947: {
        atk: function(p) { return 2; }
    },
    1949: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    1950: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1951: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    1952: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    1953: {
        atk: function(p) { return p.unit.type == "INT" ? 2.75 : 1; }
    },
    1954: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    1955: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2); },
    },
    1956: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    1957: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.25 : 1; }
    },
    1959: {
        atk: function(p) { return 2.25; }
    },
    1960: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.class.has("Fighter")) ? 2 : 1; },
    },
    1961: {
        atk: function(p) {
            var specialEnabled = false;
            if(window.specials[1962].turnedOn == true) {specialEnabled = true;}
            if(window.specials[1963].turnedOn == true) {specialEnabled = true;}
            return (p.unit.type == "PSY" || p.unit.class.has("Fighter")) ? specialEnabled ? 2.925 : 2.25 : 1; },
        hp: function(p) { return (p.unit.type == "PSY" || p.unit.class.has("Fighter")) ? 1.2 : 1 }
    },
    1962: {
        atk: function(p) { return (p.unit.type == "INT" || p.unit.class.has("Fighter")) ? 2 : 1; },
    },
    1963: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++){
                if(window.specials[1960].turnedOn == true) {specialEnabled = true;}
                if(window.specials[1961].turnedOn == true) {specialEnabled = true;}
            }
            return (p.unit.type == "INT" || p.unit.class.has("Fighter")) ? specialEnabled ? 2.925 : 2.25 : 1; },
        hp: function(p) { return (p.unit.type == "INT" || p.unit.class.has("Fighter")) ? 1.2 : 1 }
    },
    1964: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 99.0 ? 2.25 : 1; }//CHANGE THIS
    },
    1965: {
        atk: function(p) { return p.unit.class.has("Powerhouse") && p.percHP >= 70.0 ? 2.75 : 1; }
    },
    1966: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    1969: {
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    1970: {
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    1971: {
        atk: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : 1.3; },
        hp: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : 1.05; },
        rcv: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : 1.05; },
        chainModifier: function(p) { return (p.percHP <= 30.0 || p.percHP >= 70.0) ? 1.1 : 1; }
    },
    1972: {
        atk: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : p.actions[p.sourceSlot] ? 2.25 : 1.2; },
        hp: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : p.actions[p.sourceSlot] ? 1.2 : 1.05; },
        rcv: function(p) { return !(p.unit.class.has("Cerebral")) ? 1 : p.actions[p.sourceSlot] ? 1.2 : 1.05; },
        chainModifier: function(p) { return (p.percHP <= 30.0 || p.percHP >= 70.0) ? 1.5 : 1; }
    },
    1973: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    1974: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.25 : 2.5); },
    },
    1975: {
        atk: function(p) { return p.percHP <= 30.0 ? 2 : 1; }
    },
    1976: {
        atk: function(p) { return p.percHP <= 30.0 ? 2.5 : 1; }
    },
    1977: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    1978: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1979: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
    },
    1980: {
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    1981: {
         atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1982: {
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 70.0 ? 2.25 : 2; }//CHANGE THIS
    },
    1986: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    1987: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.3 : 1; },
    },
    1988: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    1989: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    1990: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1991: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    1992: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    1993: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    1994: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    1995: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    1996: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
    },
    1997: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.475, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great"]) ? 2.475 : 2.25;
        },
        hitModifiers: ["Great", "Great", "Great", "Perfect", "Perfect", "Perfect"]
    },
    2000: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? 3.75 : 1; },
    },
    2001: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Slasher", "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.5 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2002: {
        atk: function(p) { return 2.5; }
    },
    2003: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2004: {
        atk: function(p) {
            return p.unit.class.has("Slasher") ? p.actions[p.sourceSlot] ? 2.75 : 2.25 : 1;
        },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2005: {
        atk: function(p) { return (p.unit.type == "PSY") ? 2.25: 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2: 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2: 1; },
    },
    2006: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 3.5 : 2.75; },
        hp: function(p) { return 1.35; },
    },
    2007: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 3.5 : 2.75; },
        hp: function(p) { return 1.35; },
    },
    2008: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.2 : 1; },
    },
    2009: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.2 : 1; },
    },
    2010: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.2: 1; },
    },
    2011: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5: 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.2: 1; },
    },
    2012: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? (p.orb == 'meat') ? 3.25 : 2 : 1; },
        rcv: function(p) { return .2; }
    },
    2013: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? (p.orb == 'meat') ? 3.25 : 2.25 : 1; },
        rcv: function(p) { return .2; }
    },
    2014: {
        atk: function(p) { return p.unit.class.has("Fighter") ? Math.max(2.25, 2.25 + .5 * Math.min(p.turnCounter,1)) : Math.max(1, 1 + .2 * Math.min(p.turnCounter,1)); },
        rcv: function(p) { return 0; }
    },
    2015: {
        atk: function(p) { return p.unit.class.has("Fighter") ? Math.max(2.5, 2.5 + .5 * Math.min(p.turnCounter,1)) : Math.max(1, 1 + .2 * Math.min(p.turnCounter,1)); },
        rcv: function(p) { return 0; }
    },
    2016: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
    },
    2017: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2018: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    2019: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.6, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Free Spirit")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.6 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2020: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
    },
    2021: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 1.75) : 1; },
        rcv: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.2 : 1; },
    },
    2022: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 3.25 : 1; },
    },
    2023: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 3.25 : 1; },
    },
    2024: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'PSY', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 4.0625 : 3.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.35 : 1; },
    },
    2025: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'PSY', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 4.0625 : 3.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.35 : 1; },
    },
    2026: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 2 : 1; },
    },
    2027: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2028: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    2029: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2030: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 2 : 1; },
    },
    2031: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    2032: {
        atk: function(p) { return p.unit.type == "PSY" ? 0.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 0.5 : 1; },
    },
    2033: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2034: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2034].turnedOn[i]==true) { specialEnabled = true; }
            }
            return specialEnabled ? 3.5 : 2; },
        rcv: function(p) { return 1.35 }
    },
    2035: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.75 : 0.5; },
        hp: function(p) { return p.unit.cost <= 40 ? 1 : 0.5; }
    },
    2036: {
        atk: function(p) { return (p.unit.class.has("Fighter")) ? 2.25 : 1 },
    },
    2037: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.75, [ "Fighter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Fighter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.75 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2038: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") && p.unit.type == "QCK" ? 2.25 :
                p.unit.class.has("Free Spirit") || p.unit.type == "QCK" ? 1.5 : 1;
        }
    },
    2039: {
        atk: function(p) {
            return p.unit.class.has("Free Spirit") && p.unit.type == "QCK" ? 3.0625 :
                p.unit.class.has("Free Spirit") || p.unit.type == "QCK" ? 1.75 : 1;
        }
    },
    2040: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2041: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2042: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    2043: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2044: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2045: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
    },
    2046: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    2047: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2); },
    },
    2048: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.25 : 2); },
    },
    2049: {
        atk: function(p) {
            return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? Math.max(1.0, 3 - 0.1 * p.turnCounter) : 1;
        }
    },
    2050: {
        atk: function(p) {
            return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? Math.max(1.0, 3.5 - 0.07 * p.turnCounter) : 1;
        }
    },
    2051: {
        atk: function(p) { return p.unit.class.has("Fighter") ? p.classCount.Fighter>=5 ? 2 : 1 : 1; },
    },
    2052: {
        atk: function(p) { return p.unit.class.has("Fighter") ? p.classCount.Fighter>=5 ? 2.5 : 1 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? p.classCount.Fighter>=5 ? 1.2 : 1 : 1; },//CHANGE IF NO COUNT
    },
    2053: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
    },
    2054: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 0; },
    },
    2055: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    2056: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 0 : 0; },
    },
    2057: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2058: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2059: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2060: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2061: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2062: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2063: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
    },
    2064: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? p.actions[p.sourceSlot] ? 2.5 : 2 : 1; },
        chainModifier: function(p) { return (p.colorCount.DEX >= 1 && p.colorCount.PSY >= 1 && p.colorCount.INT >= 1) ? 1.5 : 1; }
    },
    2065: {
        atk: function(p) { return 2.25; },
    },
    2066: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2067: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.5 : 2;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2068: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.4375, [ "Slasher" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.4375 : 2.75;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2069: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    2070: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; }
    },
    2073: {
        damageSorter: function(d) { return CrunchUtils.gearSort(d, 4.25); },
        hitAtk: function(p) {
            switch(p.gear[p.sourceSlot]) {
                case "0":
                    return 3; break;
                case "1":
                    return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.5 : 1; break;
                case "2":
                    return 4; break;
                case "3":
                    return p.slot == p.sourceSlot ? 4.25 : 4; break;
                default:
                    return 3;
            }
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.25; }
    },
    2074: {
        damageSorter: function(d) { return CrunchUtils.gearSort(d, 4.25); },
        hitAtk: function(p) {
            switch(p.gear[p.sourceSlot]) {
                case "0":
                    return 3; break;
                case "1":
                    return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.5 : 1; break;
                case "2":
                    return 4; break;
                case "3":
                    return p.slot == p.sourceSlot ? 4.25 : 4; break;
                default:
                    return 3;
            }
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.25; }
    },
    2075: {
        atk: function(p) { return p.unit.type == "DEX" ? 3.75 : 1; },
    },
    2076: {
        atk: function(p) { return p.unit.type == "DEX" ? 3.75 : 1; },
    },
    2077: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2078: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2079: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    2080: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2 : 1; },
        chainModifier: function(p) { return 1.5; }
    },
    2081: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
    },
    2082: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
    },
    2083: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.25 : 1; },
    },
    2084: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2085: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.25 : 1; },
    },
    2086: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2087: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2087].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 2.6 : 2; },
    },
    2088: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2090: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2091: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
    },
    2092: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2092].turnedOn[i]==true) {specialEnabled = true;}
            }
            return specialEnabled ? 2.6 : 2; },
    },
    2093: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2094: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
    },
    2095: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
    },
    2096: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Slasher", "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 2.75 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 2.5 : 2.25;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2097: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.3, [ "Slasher", "Driven" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Driven")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.3 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3 : 2.75;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2098: {
        hitAtk: function(p) {
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            var tesoroModifier = (p.chainPosition === 0 ? 1 : (prev == 'Good' ? 1 : (prev == 'Great' ? 1 : (prev == 'Perfect' ? .7 : 1))));
            return (p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.FreeSpirit>=1 && p.classCount.Cerebral>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1) ? p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great", "Great"]) ? 4.5 * tesoroModifier : 3.75 * tesoroModifier : 1;
        },
        hitModifiers: ["Perfect", "Great", "Great", "Great", "Great", "Perfect"],
        hp: function(p) { return (p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.FreeSpirit>=1 && p.classCount.Cerebral>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1) ? 1.35 : 1; },
    },
    2099: {
        hitAtk: function(p) {
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            var tesoroModifier = (p.chainPosition === 0 ? 1 : (prev == 'Good' ? 1 : (prev == 'Great' ? 1 : (prev == 'Perfect' ? .7 : 1))));
            return (p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.FreeSpirit>=1 && p.classCount.Cerebral>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1) ? p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great", "Great"]) ? 4.5 * tesoroModifier : 3.75 * tesoroModifier : 1;
        },
        hitModifiers: ["Perfect", "Great", "Great", "Great", "Great", "Perfect"],
        hp: function(p) { return (p.classCount.Striker>=1 && p.classCount.Fighter>=1 && p.classCount.Shooter>=1 && p.classCount.Slasher>=1 && p.classCount.FreeSpirit>=1 && p.classCount.Cerebral>=1 && p.classCount.Powerhouse>=1 && p.classCount.Driven>=1) ? 1.35 : 1; },
    },
    2100: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.1 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 1.2 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "STR" ? 1.75 :
                1;
        }
    },
    2101: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.7 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 1.2 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "STR" ? 2.25 :
                1;
        }
    },
    2102: {
        atk: function(p) { return 1.2; }
    },
    2103: {
        atk: function(p) { return 1.5; }
    },
    2104: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Shooter")) ? 1.75 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2105: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Shooter")) ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2106: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    2107: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2108: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.5 : 1; },
    },
    2109: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? p.actions[p.sourceSlot] ? 2 : 1.5 : 1; },
    },
    2110: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2111: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    2112: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Striker", "Shooter", "Cerebral", "Powerhouse" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.825, Katacount);
        },
    },
    2113: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Striker", "Shooter", "Cerebral", "Powerhouse" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.825, Katacount); 
        },
    },
    2114: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2115: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2116: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        rcv: function(p) { return 0; }
    },
    2117: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.75 : 1; },
        rcv: function(p) { return 0; }
    },
    2118: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2 : 1; },
    },
    2119: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2.5 : 1; },
    },
    2120: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.class.has("Fighter") ? 2.25 :
                p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.5 :
                1;
        }
    },
    2121: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.class.has("Fighter") ? 2.7225 :
                p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.65 :
                1;
        }
    },
    2122: {
        atk: function(p) { return 1.5; },
    },
    2123: {
        atk: function(p) { return 2; },
    },
    2124: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    2125: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    2126: {
        atk: function(p) {
            return p.unit.class.has("Striker") ? p.actions[p.sourceSlot] ? 3 : 2.5 : 1;
        },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.3 : 1; },
    },
    2127: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 1.75); },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    2128: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        chainModifier: function(p) { return 1.2; }
    },
    2129: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
    },
    2130: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2131: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2132: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2133: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2134: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2135: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.3 : 1; },
    },
    2136: {
        atk: function(p) { 
            return ((window.specials[2136].turnedOn || window.specials[2137].turnedOn) && p.sourceSlot == 1) ? 2 : 1.5;
        },
    },
    2137: {
        atk: function(p) { 
            if(p.actions[p.sourceSlot]) return ((window.specials[2136].turnedOn || window.specials[2137].turnedOn) && p.sourceSlot == 1) ? 4 : 2.5;
            else return ((window.specials[2136].turnedOn || window.specials[2137].turnedOn) && p.sourceSlot == 1) ? 2.5 : 2;
        },
    },
    2138: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9375 : 2.25 : 1; },
        hp: function(p) { return 1.25; }
    },
    2139: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "PSY" ? 3.15 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "PSY" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "PSY" ? 1.4 :
                1;
        },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2140: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 3.15 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "QCK" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "QCK" ? 1.4 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2141: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 3.15 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "DEX" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "DEX" ? 1.4 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2142: {
        atk: function(p) {
            return p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 3.15 :
                !p.unit.class.has("Powerhouse") && p.unit.type == "STR" ? 2.25 :
                p.unit.class.has("Powerhouse") && !p.unit.type == "STR" ? 1.4 :
                1;
        },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2144: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2144: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2146: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    2146: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    2147: {
        atk: function(p) { return !(p.unit.class.has("Fighter")) ? 1 : p.classCount.Fighter == 6 ? 1.75 : 1; },
        chainModifier: function(p) { return  p.classCount.Fighter == 6 ? 4 : 1; }
    },
    2148: {
        atk: function(p) { return !(p.unit.class.has("Fighter")) ? 1 : p.classCount.Fighter == 6 ? 1.75 : 1; },
        chainModifier: function(p) { return  p.classCount.Fighter == 6 ? 4 : 1; }
    },
    2149: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2150: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2151: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.3; },
    },
    2152: {
        atk: function(p) { return 2; },
        hp: function(p) { return 1.3; },
    },
    2153: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2.25); },
    },
    2154: {
        atk: function(p) { return !p.unit.class.has("Fighter") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.5); },
    },
    2155: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2156: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
    },
    2157: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2158: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.75 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.25 : 1; },
    },
    2159: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.5 : 1; },
    },
    2160: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2160].turnedOn[i]==true || window.specials[2161].turnedOn[i]==true) { specialEnabled = true; }
            }
            return p.unit.class.has("Shooter") ? specialEnabled ? 2.7 : 2.25 : 1;
        },
    },
    2161: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2160].turnedOn[i]==true || window.specials[2161].turnedOn[i]==true) { specialEnabled = true; }
            }
            return p.unit.class.has("Shooter") ? specialEnabled ? 3.25 : 2.5 : 1;
        },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    2162: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
    },
    2163: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
    },
    2164: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter")) ? 1.5 : 1; },
    },
    2165: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter")) ? 1.75 : 1; },
    },
    2166: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2, [ "Striker", "Fighter" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has("Striker") || p.unit.class.has("Fighter"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great"]) ? 2 : 1.5;
        },
        hitModifiers: ["Great", "Great", "Great", "Perfect", "Perfect", "Perfect"]
    },
    2167: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Striker", "Fighter" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has("Striker") || p.unit.class.has("Fighter"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Great", "Great", "Great"]) ? 2.5 : 2;
        },
        hitModifiers: ["Great", "Great", "Great", "Perfect", "Perfect", "Perfect"]
    },
    2168: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2168].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[2169].turnedOn[i]==true) {specialEnabled = true;}
            }
            return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? specialEnabled ? 2.75 : 2 : specialEnabled ? 1.375 : 1;
        },
    },
    2169: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2168].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[2169].turnedOn[i]==true) {specialEnabled = true;}
            }
            return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? specialEnabled ? 3.5 : 2.25 : specialEnabled ? (14/9) : 1;
        },
    },
    2170: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    2171: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; },
    },
    2172: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
    },
    2173: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.25 : 1; },
    },
    2174: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
    },
    2175: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? p.actions[p.sourceSlot] ? 2.75 : 2 : 1; },
    },
    2176: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
    },
    2177: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.1 : 1; },
    },
    2178: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
    },
    2179: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.5 : 1; },
    },
    2182: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.25 : 1; },
    },
    2183: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2184: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    2185: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
    },
    2186: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.75 : 1; },
    },
    2187: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.25 : 1; },
    },
    2188: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 2 : 1; },
    },
    2189: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
    },
    2190: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1 + 1.25 * ((p.percHP) / 100) : 1; },
    },
    2191: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1 + 1.5 * ((p.percHP) / 100) : 1; },
    },
    2192: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    2193: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    2194: {
        atk: function(p) { return 2.25; },
    },
    2195: {
        atk: function(p) { return  1 + 2 * (p.percHP / 100); }
    },
    2196: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; }
    },
    2197: {
        atk: function(p) { return p.unit.class.has("Driven") ? p.percHP <= 10.0 ? 3.75 : 2 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; }
    },
    2198: {
        atk: function(p) {
            return p.unit.class.has("Striker") ? Math.min(3, 2 + (1/3) * p.turnCounter) : 1;
        },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    2199: {
        atk: function(p) {
            return p.unit.class.has("Striker") ? Math.min(3.25, 2 + (5/12) * p.turnCounter) : 1;
        },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
    },
    2200: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 4 : 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.35 : 1; },
    },
    2201: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 4 : 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.35 : 1; },
    },
    2202: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2203: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
    },
    2204: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.5, [ "Fighter", "Powerhouse" ]); },
        hitAtk: function(p) {
            return !(p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2205: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Fighter", "Powerhouse" ]); },
        hitAtk: function(p) {
            return !(p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2206: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2207: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
    },
    2208: {
        atk: function(p) { return p.unit.type == "INT" ? 1.25 : 1; },
    },
    2209: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
    },
    2210: {
        atk: function(p) { return 1.5; },
    },
    2211: {
        atk: function(p) { return p.actions[p.sourceSlot] ? 2.5 : 2; },
    },
    2212: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    2213: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2214: {
        atk: function(p) { return 1.5; },
        rcv: function(p) { return 1.2; },
    },
    2215: {
        atk: function(p) {
            return Math.min(3, 1.5 + 0.1875 * p.turnCounter);
        },
        rcv: function(p) { return 1.2; }
    },
    2216: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 1.75; },
        hp: function(p) { return 1.75; },
    },
    2217: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 1.75; },
        hp: function(p) { return 1.75; },
    },
    2218: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    2219: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2220: {
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2221: {
        chainModifier: function(p) { return 1.5; }
    },
    2222: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
    },
    2223: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    2224: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
    },
    2225: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    2226: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2227: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2228: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2229: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2230: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2231: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2232: {//Enel
        hp: function(p) { return 0.8 },
        atk: function(p) { return Math.max(2.0, 2.0 + 0.000175 * p.healCounter); },
    },
    2233: {
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; },
        atk: function(p) { return [ (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 4 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, p.slot == p.sourceSlot ? 10 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.75 : 1 ][Math.min(3, p.semlaCounter)]; },
    },
    2234: {
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; },
        atk: function(p) { return [ (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 4 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, p.slot == p.sourceSlot ? 10 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.75 : 1 ][Math.min(3, p.semlaCounter)]; },
    },
    2235: {
        atk: function(p) { return p.percHP >= 99.0 ? 2.75 : 2; }
    },
    2236: {
        atk: function(p) { return p.percHP >= 99.0 ? 2.75 : 2; }
    },
    2237: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2238: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2239: {
        atk: function(p) { return p.unit.cost >= 50 ? 3 : 1; },
        hp: function(p) { return p.unit.cost >= 50 ? 1.1 : 1; },
        rcv: function(p) { return p.unit.cost >= 50 ? 1.1 : 1; },
    },
    2240: {
        atk: function(p) { return p.unit.cost >= 50 ? 3.5 : 1; },
        hp: function(p) { return p.unit.cost >= 50 ? 1.2 : 1; },
        rcv: function(p) { return p.unit.cost >= 50 ? 1.2 : 1; },
    },
    2241: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; }
    },
    2242: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.75 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.25 : 1; }
    },
    2243: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2244: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    2245: {
        atk: function(p) { return p.slot == p.sourceSlot ? p.actions[p.sourceSlot] ? 8.25 : 3 : 2.75; },
        hp: function(p) { return 1.3 },
    },
    2246: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1 + 1.5 * ((p.percHP) / 100) : 1; },
    },
    2247: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1 + 2.25 * ((p.percHP) / 100) : 1; },
    },
    2249: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.85, [ "Slasher", "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Slasher") && !p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.85 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2250: {
        hitAtk: function(p) {
            var reduction = 1;
            if(p.classCount.Striker >= 1) reduction *= .2;
            if(p.classCount.Shooter >= 1) reduction *= .2;
            if(p.classCount.Cerebral >= 1) reduction *= .2;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 * reduction : 2 * reduction;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.5; },
    },
    2251: {
        hitAtk: function(p) {
            var reduction = 1;
            if(p.classCount.Striker >= 1) reduction *= .2;
            if(p.classCount.Shooter >= 1) reduction *= .2;
            if(p.classCount.Cerebral >= 1) reduction *= .2;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4 * reduction : 2 * reduction;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.5; },
    },
    2252: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    2253: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2252].turnedOn[i]==true) { specialEnabled = true; }
                if(window.specials[2253].turnedOn[i]==true) { specialEnabled = true; }
            }
            return p.unit.class.has("Free Spirit") ? specialEnabled ? 2.6 : 2 : 1; },
    },
    2254: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2255: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2256: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
    },
    2257: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
    },
    2258: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
    },
    2259: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2 : 1; },
    },
    2260: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? p.percHP >= 99.0 ? 2 : 1.5 : 1; }
    },
    2261: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? p.percHP >= 99.0 ? p.actions[p.sourceSlot] ? 3 : 2 : p.actions[p.sourceSlot] ? 2.5 : 1.5 : 1; }
    },
    2262: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? p.percHP <= 50.0 ? 2.5 : 1.5 : 1; }
    },
    2263: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? p.percHP <= 50.0 ? 3 : 1.5 : 1; }
    },
    2264: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") {
                if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.PSY>=1) {
                    return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4 : 3;
                }
                else return 1;
            }
            else return 1;
        },
        hp: function(p) {
            if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.PSY>=1)
                return 1.35;
            else
                return 1;
               },
    },
    2265: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") {
                if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.PSY>=1) {
                    return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4 : 3;
                }
                else return 1;
            }
            else return 1;
        },
        hp: function(p) {
            if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.PSY>=1)
                return 1.35;
            else
                return 1;
               },
    },
    2266: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    2267: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    2268: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 2 : 1; },
    },
    2269: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 2.25 : 1; },
    },
    2270: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        rcv: function(p) { return 0; },
    },
    2271: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; },
        rcv: function(p) { return 0; },
    },
    2272: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher") ? 1.5 : 1; },
        chainModifier: function(p) { return 1.5; }
    },
    2273: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher") ? 1.75 : 1; },
        chainModifier: function(p) { return 2; }
    },
    2276: {
        atk: function(p) { return p.unit.stars <= 4 ? 2 : 1; },
    },
    2277: {
        atk: function(p) { return p.unit.stars <= 4 ? 2.5 : 1; },
    },
    2278: {
        atk: function(p) { return 1.25; },
        hp: function(p) { return 1.25; }
    },
    2279: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.1 : 1; }
    },
    2280: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; }, 
        hp: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.2 : 1; }, 
    },
    2281: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'PSY', 'DEX']); },
        hitAtk: function(p) {
            return (p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "DEX") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 3 : 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.2 : 1; }, 
    },
    2282: {
        atk: function(p) { var multiplier = 1; multiplier *= (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.25 : 1; multiplier *= p.unit.cost <= 30 ? 1.1 : 1; return multiplier; }
    },
    2283: {
        atk: function(p) { var multiplier = 1; multiplier *= (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.75 : 1; multiplier *= p.unit.cost <= 30 ? 1.1 : 1; return multiplier; },
    },
    2284: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; }
    },
    2285: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 3.25 : 1; },
    },
    2286: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
    },
    2287: {
        atk: function(p) { return p.unit.type == "STR" ? 3.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2288: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2.25 : 1; },
    },
    2289: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 2.25 : 1; },
    },
    2290: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; }
    },
    2291: {
        atk: function(p) { return 1.5; },
    },
    2292: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 1.75; },
    },
    2293: {
        atk: function(p) { return 1.5; },
    },
    2294: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
    },
    2295: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
    },
    2296: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    2297: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2298: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.1 : 1; },
    },
    2299: {
        atk: function(p) {
            return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? Math.min(3.25, 2.25 + (1/6) * p.turnCounter) :  Math.min(2.5, 1.5 + (1/6) * p.turnCounter) : 1;
        },
        rcv: function(p) { return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? 1.3 : 1.1 : 1; },
    },
    2300: {
        atk: function(p) { return p.frankyCheck.Primary == 6 ? p.actions[p.sourceSlot] ? (4.25 * [ 1.25, 1, .5, .75 ][['Fighter', 'Slasher', 'Striker', 'Shooter'].indexOf(p.frankyClass[p.slot])]) : 3.25 : 1; },
        hp: function(p) { return p.frankyCheck.Primary == 6 ? 1.3 : 1; },
    },
    2301: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.35 : 1; },
    },
    2302: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.35 : 1; },
    },
    2304: {
        atk: function(p) { return 1.5; },
    },
    2305: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Cerebral" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Cerebral")) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2306: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.75, [ "Cerebral", "Slasher" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has("Slasher") || p.unit.class.has("Cerebral"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).count("Perfect") == p.chainPosition ? 2.75 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2307: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2308: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    2309: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2310: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2311: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
    },
    2312: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
    },
    2313: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
    },
    2314: {
        atk: function(p) { return p.unit.stars <= 3 ? 2 : 1; }
    },
    2315: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    2316: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2317: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2318: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? p.percHP <= 50.0 ? 2.75 : 2.5 : 1; }//change
    },
    2319: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2320: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        chainModifier: function(p) { return (p.percHP <= 30.0) ? 1.2 : 1; }
    },
    2321: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
        chainModifier: function(p) { return (p.percHP <= 30.0) ? 1.4 : 1; }
    },
    2322: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2323: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2324: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Shooter" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Shooter") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2325: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.75, [ "Shooter" ]); },
        hitAtk: function(p) {
            return !p.unit.class.has("Shooter") ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.75 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2326: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    2327: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2328: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2329: {
        atk: function(p) {
            if(p.classCount.Shooter == 6) {
                return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9 : 3.25;
            }
            else
                return 1;
        },
    },
    2330: {
        atk: function(p) {
            if(p.classCount.Shooter == 6) {
                return ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.9 : 3.25;
            }
            else
                return 1;
        },
    },
    2331: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Slasher")) ? 1.25 : 1; },
        rcv: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Slasher")) ? 1.25 : 1; },
    },
    2332: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Slasher")) ? 1.75 : 1; },
        rcv: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Slasher")) ? 1.75 : 1; },
    },
    2333: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2334: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
    },
    2335: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Free Spirit", "Cerebral" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.1, Katacount);
        },
    },
    2336: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Free Spirit", "Cerebral" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(p.actions[p.sourceSlot] ? 1.8 : 1.2, Katacount);
        },
    },
    2337: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Shooter", "Striker", "Cerebral" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return (p.turnCounter < 12) ? Math.pow(2, Katacount) : (Katacount > 0) ? 2.75 : 1;
        },
    },
    2338: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Shooter", "Striker", "Cerebral" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return (p.turnCounter < 12) ? Math.pow(2, Katacount) : (Katacount > 0) ? 2.75 : 1;
        },
    },
    2339: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    2340: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    2341: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2342: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2343: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
    },
    2344: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; },
    },
    2345: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 2.25 : 1; },
    },
    2346: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    2347: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    2348: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
    },
    2349: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.75 : 1; },
        chainModifier: function(p) { return (p.classCount.Slasher >= 5) ? 1.3 : 1; }
    },
    2350: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'STR', 'STR']); },
        hitAtk: function(p) {
            return p.unit.class.has("Powerhouse") ? (CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }]) ||
            CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }])) ? 2.5 : 1 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2351: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2352: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2353: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 2.25 : 1; },
    },
    2354: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Striker") ? 2.5 : 1; },
    },
    2355: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : p.unit.class.has("Slasher") ? 2.25 : 1; },
    },
    2356: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3 : p.unit.class.has("Slasher") ? 2.75 : 1; },
    },
    2357: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "DEX" ? 3 : 1; },
    },
    2359: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2360: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2361: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2362: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? p.percHP >= 50.0 ? p.actions[p.sourceSlot] ? 3 : 1.75 : p.actions[p.sourceSlot] ? 2 : 1.5 : 1; }
    },
    2363: {
        hitAtk: function(p) { return p.actions[p.sourceSlot] ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 4.25 : 4 : 3.25; },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.35; }
    },
    2364: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Shooter", "Driven", "Powerhouse" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.825, Katacount);
        },
        affinity: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 1.4 : 1; }
    },
    2365: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Fighter", "Slasher", "Shooter", "Driven", "Powerhouse" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.825, Katacount);
        },
        affinity: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 1.4 : 1; }
    },
    2368: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.5, [ "STR", "PSY" ]); },
        hitAtk: function(p) {
            if (!(p.unit.type == "STR" || p.unit.type == "PSY")) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2 : (prev == 'Great' ? 2 : (prev == 'Perfect' ? 2.5 : 1)));//change this
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2369: {
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 2.75, [ "STR", "PSY" ]); },
        hitAtk: function(p) {
            if (!(p.unit.type == "STR" || p.unit.type == "PSY")) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2370: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2371: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.3 : 1; },
    },
    2372: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
        chainModifier: function(p) { return  p.percHP <= 30.0 ? 1.5 : 1; }
    },
    2373: {
        atk: function(p) { return p.unit.class.has("Striker") ? (p.orb == 'meat' || p.orb == 'g') ? 1 : 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.25 : 1; }
    },
    2374: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    2375: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    2376: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2377: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    2378: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2379: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2380: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    2381: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 2.75 : 1; },
    },
    2382: {
        atk: function(p) { return 2.25; }
    },
    2383: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
    },
    2384: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2385: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    2386: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2387: {
        atk: function(p) { return p.slot == p.sourceSlot ? p.actions[p.sourceSlot] ? 3.25 : 1.75 : (p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? p.actions[p.sourceSlot] ? 2.75 : 1.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    2389: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 1.2; },
    },
    2390: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
        rcv: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    2391: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 2.925, [ "Fighter", "Free Spirit" ]); },
        hitAtk: function(p) {
            return !(p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 1 : p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 2.925 : 2.25;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2392: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    2393: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? p.percHP <= 50.0 ? 2.5 : 2 : 1; }
    },
    2394: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? p.percHP <= 50.0 ? 3 : 2.5 : 1; }
    },
    2398: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2398].turnedOn[i]==true) {specialEnabled = true;}
            }
            return p.unit.class.has("Shooter") ? specialEnabled ? 2.75 : 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    2400: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['QCK', 'DEX', 'STR']); },
        hitAtk: function(p) {
            return (p.unit.type == "STR") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2401: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['QCK', 'DEX', 'STR']); },
        hitAtk: function(p) {
            return (p.unit.type == "STR") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }]) ? 4 : 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2402: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'QCK', 'DEX']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2403: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['STR', 'QCK', 'DEX']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 4 : 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2404: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'STR', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "QCK") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2405: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'STR', 'QCK']); },
        hitAtk: function(p) {
            return (p.unit.type == "QCK") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 4 : 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2407: {
        atk: function(p) { return 3; },
    },
    2408: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    2409: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 1.2 : 1; },
    },
    2410: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 1.2 : 1; },
    },
    2411: {
        atk: function(p) {
            return (p.unit.class.has("Striker") || p.unit.class.has("Shooter")) ? 1 + 1.75 * (p.percHP / 100) : 1;//change this
        }
    },
    2412: {
        atk: function(p) {
            return (p.unit.class.has("Striker") || p.unit.class.has("Shooter")) ? 1 + 1.75 * (p.percHP / 100) : 1;//change this
        }
    },
    2413: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
    },
    2414: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
    },
    2415: {
        atk: function(p) { return p.slot == p.sourceSlot ? ((window.specials[2415].turnedOn || window.specials[2416].turnedOn) && p.sourceSlot == 1 ? 3 : 1) : 1; },
    },
    2416: {
        atk: function(p) { return p.slot == p.sourceSlot ? ((window.specials[2415].turnedOn || window.specials[2416].turnedOn) && p.sourceSlot == 1 ? 6 : 1) : 1; },
    },
    2419: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : (p.unit.class.has("Driven") || p.unit.class.has("Fighter")) ? 2 : 1; },
    },
    2420: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.75 : (p.unit.class.has("Driven") || p.unit.class.has("Fighter")) ? 2.5 : 1; },
    },
    2421: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? Math.max(1.0, 2.75 - 0.0583294122 * p.turnCounter) : 1; }
    },
    2422: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? Math.max(1.0, 3.25 - 0.0583294122 * p.turnCounter) : 1; }
    },
    2423: {
        atk: function(p) { return p.unit.class.has("Driven") ? Math.min(2.75, 1.0 + 0.0875 * p.turnCounter) : 1; }//change this
    },
    2424: {
        atk: function(p) { return p.unit.class.has("Driven") ? Math.min(3.25, 1.0 + 0.1125 * p.turnCounter) : 1; }//change this
    },
    2425: {
        atk: function(p) { return !p.unit.class.has("Driven") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.25 : 1.5); },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; }
    },
    2426: {
        atk: function(p) { return !p.unit.class.has("Driven") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 1.5); },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.25 : 1; }
    },
    2427: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : p.unit.class.has("Slasher") ? 1.75 : 1; }
    },
    2428: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.75 : p.unit.class.has("Slasher") ? 2 : 1; }
    },
    2429: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    2430: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; }
    },
    2431: {
        atk: function(p) { return p.unit.class.has("Driven") ? 3 : 1; }
    },
    2432: {
        atk: function(p) { return 3; },
        hp: function(p) { return 1.25; }
    },
    2433: {
        atk: function(p) { return 3; },
        hp: function(p) { return 1.25; }
    },
    2434: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.25, [ "Free Spirit" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Free Spirit')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3 : (prev == 'Good' ? 3.25 : (prev == 'Great' ? 3.5 : (prev == 'Perfect' ? 3.75 : 3)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2435: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 2.25 : 1; }
    },
    2436: {
        atk: function(p) { return !(p.unit.class.has("Striker") || p.unit.class.has("Driven")) ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.7 : 2.25); }
    },
    2437: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2438: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2439: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? p.percHP <= 50.0 ? 2.75 : 1.5 : 1; }//change
    },
    2440: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? Math.min(4.25, 3.0 + 0.25 * p.turnCounter) : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 1.25 : 1; },
    },
    2441: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? Math.min(4.25, 3.0 + 0.25 * p.turnCounter) : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 1.25 : 1; },
    },
    2442: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    2443: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2442].turnedOn[i]==true) {specialEnabled = true;}
                if(window.specials[2443].turnedOn[i]==true) {specialEnabled = true;}
            }
            return p.unit.class.has("Driven") ? specialEnabled ? p.actions[p.sourceSlot] ? 3.5 : 2 : p.actions[p.sourceSlot] ? 2.75 : 1.5 : 1; },
    },
    2444: {
        atk: function(p) { return p.unit.class.has("Driven") ? 3.5 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.2 : 1; },
    },
    2447: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "STR" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.25 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2448: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "STR" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.5 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2449: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "QCK" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.25 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2450: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "QCK" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.5 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2451: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "DEX" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.25 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2452: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "DEX" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.5 : 1; return boost; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2453: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "INT" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.25 : 1; return boost; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2454: {
        atk: function(p) { var boost = 1; boost *= p.unit.type == "INT" ? 1.2 : 1; boost *= p.unit.class.has("Powerhouse") ? 2.5 : 1; return boost; },
        rcv: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2455: {
        atk: function(p) { return 1.75; },
        rcv: function(p) { return 1.75; },
    },
    2456: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    2457: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2458: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2459: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return p.unit.class.has("Powerhouse") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }]) ? 2.475 : 2.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2460: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
    },
    2461: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    2462: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2463: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2464: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.35 : 1; },
    },
    2465: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 3.75 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") ? 1.35 : 1; },
    },
    2466: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
    },
    2467: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2470: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Striker") ? 2 : 1; },
    },
    2471: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Striker") ? 2.75 : 1; },
    },
    2472: {
        atk: function(p) { return p.percHP <= 50.0 ? 2.5 : 2; },
        hp: function(p) { return .8; }
    },
    2473: {
        atk: function(p) { return p.percHP <= 50.0 ? 3 : 2.5; },
        hp: function(p) { return .8; }
    },
    2474: {
        atk: function(p) { return !(p.unit.class.has("Slasher")) ? 1 : p.classCount.Slasher == 6 ? 1.75 : 1; },
        chainModifier: function(p) { return  p.classCount.Slasher == 6 ? 4 : 1; }
    },
    2475: {
        atk: function(p) { return !(p.unit.class.has("Slasher")) ? 1 : p.classCount.Slasher == 6 ? 1.75 : 1; },
        chainModifier: function(p) { return  p.classCount.Slasher == 6 ? 4 : 1; }
    },
    2476: {
        atk: function(p) { return p.unit.class.has("Slasher") ? ((p.unit.type == "DEX" || p.unit.type == "INT") ? ((p.orb == 2 || (p.unit.type == "DEX" && p.orb == 'int') || (p.unit.type == "INT" && p.orb == 'dex')) ? 4.0625 : 3.25) : ((p.unit.type == "QCK" || p.unit.type == "PSY") ? (p.orb == 0.5 ? 4.0625 : 3.25) : ((p.orb == 'dex' || p.orb == 'int') ? 4.0625 : 3.25))) : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2477: {
        atk: function(p) { return p.unit.class.has("Slasher") ? ((p.unit.type == "DEX" || p.unit.type == "INT") ? ((p.orb == 2 || (p.unit.type == "DEX" && p.orb == 'int') || (p.unit.type == "INT" && p.orb == 'dex')) ? 4.0625 : 3.25) : ((p.unit.type == "QCK" || p.unit.type == "PSY") ? (p.orb == 0.5 ? 4.0625 : 3.25) : ((p.orb == 'dex' || p.orb == 'int') ? 4.0625 : 3.25))) : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2478: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    2479: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2480: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'DEX', 'DEX']); },
        hitAtk: function(p) {
            return p.unit.class.has("Slasher") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2.5 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2481: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'DEX', 'DEX']); },
        hitAtk: function(p) {
            return p.unit.class.has("Slasher") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 2.81 : 2.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2482: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2483: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2484: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2485: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2486: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    2487: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.75 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
    },
    2488: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.15 : 1; },
    },
    2489: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.25 : 1; },
    },
    2490: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? 2 : 1; },
        rcv: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2491: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? 2.25 : 1; },
        hp: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2492: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2493: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Free Spirit") ? 1.25 : 1; },
    },
    2494: {
        atk: function(p) { return 2.25; },
    },
    2495: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    2496: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2.75 : 1; },
    },
    2497: {
        atk: function(p) { return p.unit.cost <= 40 ? p.actions[p.sourceSlot] ? 3 : 2.5 : 1; },
        hp: function(p) { return p.unit.cost <= 40 ? 1.2 : 1; },
    },
    2498: {
        atk: function(p) { return p.unit.cost <= 40 ? p.actions[p.sourceSlot] ? 3.5 : 3 : 1; },
        hp: function(p) { return p.unit.cost <= 40 ? 1.2 : 1; },
    },
    2499: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? 2.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? 1.25 : 1; },
    },
    2500: {
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.3 : 1; },
        atk: function(p) { return [ p.slot == p.sourceSlot ? 4.25 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 4 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.5 : 1, p.slot == p.sourceSlot ? 12 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.75 : 1 ][Math.min(3, p.semlaCounter)]; },
    },
    2501: {
        atk: function(p) { return (p.unit.class.has("Slasher")) ? 1.75 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher")) ? 1.75 : 1; },
    },
    2502: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Slasher")) ? 2 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Slasher")) ? 1.2 : 1; },
    },
    2503: {
        atk: function(p) { return p.unit.class.has("Shooter") ? p.percHP >= 50.0 ? 2.5 : 2 : 1; },
    },
    2504: {
        atk: function(p) { return p.unit.class.has("Shooter") ? p.percHP >= 50.0 ? 3 : 2.5 : 1; },
    },
    2505: {
        hitAtk: function(p) {
            if (!(p.unit.class.has("Slasher"))) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 4.225 : 3.25;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    2506: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    2507: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    2508: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? p.actions[p.sourceSlot] ? 3.5 : 2.5 : 1; },
        hp: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2509: {
        atk: function(p) { return (p.unit.class.has("Slasher")) ? .5 + 1 * (p.percHP) / 100 : 1; },
    },
    2510: {
        atk: function(p) { return (p.unit.class.has("Slasher")) ? p.actions[p.sourceSlot] ? 1 + 2.25 * (p.percHP) / 100 : 1 + 1 * (p.percHP) / 100 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher")) ? p.actions[p.sourceSlot] ? 1.35 : 1.2 : 1; },
    },
    2511: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    2512: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    2513: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3, [ "Powerhouse" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Powerhouse")) return 1;
            return p.modifiers.slice(0, p.chainPosition)
                .subcontains(["Perfect", "Perfect", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2514: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    2515: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 3 : 1; }
    },
    2519: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; },
    },
    2520: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; }
    },
    2521: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; }
    },
    2522: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; }
    },
    2523: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 2; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2524: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; },
    },
    2525: {
        atk: function(p) { return p.unit.class.has("Slasher") ? (((p.unit.type == "INT") ? (p.orb == 2) ? 2.1 : 1.75 : (p.unit.type == "PSY" ? (p.orb == 0.5 ? 2.1 : 1.75) : (p.orb == 'int' ? 2.1 : 1.75)))) : 1; },
    },
    2526: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 2; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2527: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2528: {
        atk: function(p) { return 1.5; },
    },
    2529: {
        atk: function(p) { return 2; },
    },
    2545: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    2546: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    2547: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    2548: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    2530: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
    },
    2553: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2554: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
    },
    2555: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    2562: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    2563: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.75 : 1; },
    },
    2564: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.25 : p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    2563: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : p.unit.class.has("Free Spirit") ? 3 : 1; },
    },
    2562: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2 : 1; },
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2563: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2568: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.1 : 1; }
    },
    2569: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.75 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    2570: {
        atk: function(p) {
            var boost = 1;
            boost *= p.unit.class.has("Driven") ? 2 : 1;
            boost *= p.unit.type == "PSY" ? 0.5 : 1;
            return boost;
        },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.25 : 1; },
    },
    2571: {
        atk: function(p) {
            var boost = 1;
            boost *= p.unit.class.has("Driven") ? 2.25 : 1;
            boost *= p.unit.type == "STR" ? ((p.orb == 2) ? 1.1 : 1) : (p.unit.type == "DEX" ? (p.orb == 0.5 ? 1.1 : 1) : (p.orb == 'str' ? 1.1 : 1));
            boost *= p.unit.type == "PSY" ? 0.5 : 1;
            return boost;
        },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.25 : 1; },
    },
    2572: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    2573: {
        chainModifier: function(p) { return 1.5; }
    },
    2574: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    2575: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 3 : 1; },
    },
    2578: {
        atk: function(p) {
            return p.unit.type == "STR" ? ((p.orb == 2) ? 4.225 : 3.25) : 1;
        },
    },
    2580: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2581: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2582: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 1.5 : 1); },
        rcv: function(p) { return 0; }
    },
    2583: {
        atk: function(p) { return !p.unit.class.has("Cerebral") ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? p.actions[p.sourceSlot] ? 3.5 : 1.5 : p.actions[p.sourceSlot] ? 2.5 : 1.25); },
        hp: function(p) { return (p.unit.class.has("Cerebral")) ? p.actions[p.sourceSlot] ? 1.2 : 1 : 1; },
        rcv: function(p) { return 0; }
    },
    2584: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? p.percHP >= 50.0 ? 2.75 : 2.5 : 1; },
    },
    2585: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? p.percHP >= 50.0 ? 2.75 : 2.5 : 1; },
    },
    2586: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1.2 : 1; },
    },
    2587: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1.2 : 1; },
    },
    2588: {
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4 : 3.75); }
    },
    2589: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
    },
    2590: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
    },
    2591: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.1 : 1; },
    },
    2592: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.1 : 1; },
    },
    2593: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; },
    },
    2594: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.25 : 1; },
    },
    2595: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
    },
    2596: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven")) ? 2.25 : 1; },
    },
    2597: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.35 : 1; },
    },
    2598: {
        atk: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 1.75 : 1; },
    },
    2599: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        hp: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    2604: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    2605: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.75 : 1; },
    },
    2606: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2607: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2608: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) && p.percHP >= 50.0 ? 2.5 : 2; }
    },
    2609: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) && p.percHP >= 50.0 ? 2.75 : 2.25; }
    },
    2610: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 1.1 : 1; },
    },
    2611: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 1.3 : 1; },
    },
    2612: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    2613: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
    },
    2615: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    2619: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'PSY']); },
        hitAtk: function(p) {
            return (p.unit.type == "INT") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2620: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'PSY']); },
        hitAtk: function(p) {
            return (p.unit.type == "INT") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'DEX',
                minModifier: 'Good'
            }, {
                type: 'PSY',
                minModifier: 'Good'
            }]) ? 4 : 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2621: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'DEX']); },
        hitAtk: function(p) {
            return (p.unit.type == "PSY") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2622: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['INT', 'DEX']); },
        hitAtk: function(p) {
            return (p.unit.type == "PSY") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'INT',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 4 : 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2623: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'INT']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 3 : 2 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2624: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['PSY', 'INT']); },
        hitAtk: function(p) {
            return (p.unit.type == "DEX") ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'PSY',
                minModifier: 'Good'
            }, {
                type: 'INT',
                minModifier: 'Good'
            }]) ? 4 : 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    2625: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? 2.25 : 1; },
    },
    2626: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? 2.75 : 1; },
    },
    2627: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 2 : 1; },
    },
    2628: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 1.25 : 1; },
    },
    2629: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 2 : 1; },
    },
    2630: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 1.25 : 1; },
    },
    2631: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.25 : 2.5; }
    },
    2632: {
        atk: function(p) { return ((window.specials[2632].turnedOn) && p.sourceSlot == 1) ? 4 : 2.5; },
        hp: function(p) { return 1.2; },
    },
    2633: {
        atk: function(p) {
            var specialEnabled = false;
            for(var i=0;i<6;i++)
            {
                if(window.specials[2633].turnedOn[i]==true) { specialEnabled = true; }
            }
            return specialEnabled ? 2.5 : 2.25; },
    },
    2634: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
    },
    2635: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    2636: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    2637: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; }
    },
    2636: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; }
    },
    2639: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    2640: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    2641: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    2642: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Slasher")) ? 2.5 : 1; },
    },
    2643: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 2.5 : 1; },
    },
    2644: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.25 : 1; },
    },
    2645: {
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Slasher")) ? 2 : 1; },
    },
    2646: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 1.75 : 1; },
    },
    2647: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.75 : 1; },
    },
    2648: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 1.1 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 1.1 : 1; },
    },
    2649: {
        hitAtk: function(p) {
            return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                minModifier: 'Good'
            }, {
                minModifier: 'Good'
            }, {
                minModifier: 'Good'
            }]) ? 2.8 : 2.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2650: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4.5 : (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 4 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2651: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4.5 : (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 4 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2652: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    2653: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; },
    },
    2654: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    2655: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : (p.unit.type == "QCK" || p.unit.type == "STR") ? 2 : 1; },
    },
    2655: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2657: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : (p.unit.type == "STR" || p.unit.type == "INT") ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
    },
    2658: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven")) ? 1.5 : 1; },
    },
    2659: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven")) ? p.actions[p.sourceSlot] ? 3.25 : 2 : 1; },
    },
    2660: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2661: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 3.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    2663: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 2.75 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 1.3 : 1; },
        chainModifier: function(p) { return (p.colorCount.STR >= 1 && p.colorCount.QCK >= 1 && p.colorCount.INT >= 1) ? 1.5 : 1; }
    },
    2664: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 2.75 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" ? 1.3 : 1; },
        chainModifier: function(p) { return (p.colorCount.STR >= 1 && p.colorCount.QCK >= 1 && p.colorCount.PSY >= 1) ? 1.5 : 1; }
    },
    2665: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
    },
    2666: {
        atk: function(p) { return 1.2; },
    },
    2667: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Slasher")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Slasher")) ? 1.2 : 1; },
    },
    2668: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Slasher")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Slasher")) ? 1.25 : 1; },
    },
    2669: {
        atk: function(p) {
            return Math.min(2.5, 2 + 0.05 * p.turnCounter);
        }
    },
    2670: {
        atk: function(p) {
            return Math.min(3.25, 2.5 + 0.075 * p.turnCounter);
        },
        hp: function(p) { return 1.2; }
    },
    2671: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4.5 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 4 : 1; },
    },
    2672: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4.5 : (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 4 : 1; },
    },
    2673: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.25 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
    },
    2674: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.75 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
    },
    2675: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2676: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2677: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2678: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : p.unit.type == "PSY" ? 2 : 1; },
    },
    2679: {
        atk: function(p) { return (p.unit.class.has("Shooter")) ? 2.5 : 1; },
    },
    2680: {
        atk: function(p) { return (p.unit.class.has("Shooter")) ? 2.5 : 1; },
    },
    2681: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4.75 : (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 4 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.2 : 1; },
    },
    2682: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 2.5 + .75 * ((p.percHP) / 100) : 1; },
        rcv: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 1.25 : 1; },
    },
    2683: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? Math.min(2.5, 2 + .1 * p.turnCounter) : 1; }
    },
    2684: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? Math.min(3.25, 2.75 + .1 * p.turnCounter) : 1; }
    },
    2685: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 2.5 + 2 * (1 - (p.percHP) / 100) : 1; },
    },
    2686: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 2.5 + 2 * (1 - (p.percHP) / 100) : 1; },
    },
    2687: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2688: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
    },
    2689: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    2690: {
        atk: function(p) { return p.unit.type == "INT" ? p.actions[p.sourceSlot] ? 4 : 1.75 : 1; },
    },
    2691: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    2692: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    2693: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    2694: {
        chainModifier: function(p) { return 1.5; }
    },
    2695: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? p.percHP <= 50.0 ? 2.5 : 2 : 1; }
    },
    2696: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? p.percHP <= 50.0 ? 3.5 : 2.5 : 1; }
    },
    2697: {
        atk: function(p) { return (p.unit.stars == 4 || p.unit.stars == "4+") ? 1.75 : (p.unit.stars == 5 || p.unit.stars == "5+") ? 2 : (p.unit.stars == 6 || p.unit.stars == "6+") ? 2.25 : 1; }
    },
    2698: {
        atk: function(p) { return (p.unit.stars == 4 || p.unit.stars == "4+") ? 2.5 : (p.unit.stars == 5 || p.unit.stars == "5+") ? 2.75 : (p.unit.stars == 6 || p.unit.stars == "6+") ? 3 : 1; }
    },
    2699: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 4 : 1; },
    },
    2700: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 4 : 1; },
    },
    2701: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2702: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    2703: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Powerhouse")) ? Math.max(1.0, 2.75 - 0.1 * p.turnCounter) : 1; }
    },
    2704: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Powerhouse")) ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1; }
    },
    2705: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 2.5 : 1; },
    },
    2706: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 2.75 : 1; },
    },
    2707: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 2.25 : 1; },
    },
    2708: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 2 : 1; },
    },
    2709: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.25 : 1; },
    },
    2710: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2711: {
        chainModifier: function(p) { return 1.5; },
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
    },
    2712: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2713: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    2714: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    2720: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        rcv: function(p) { return 0; },
    },
    2721: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.75 : 1; },
        rcv: function(p) { return 0; },
    },
    2722: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2723: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    2724: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    2725: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2726: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    2727: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? p.actions[p.sourceSlot] ? 3.5 : 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
    },
    2728: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? 1.5 : 1; },
    },
    2729: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? p.actions[p.sourceSlot] ? 3.25 : 1.75 : 1; },
    },
    2730: {
        atk: function(p) { return (p.unit.class.has("Cerebral")) ? 2.75 : 1; },
    },
    2731: {
        atk: function(p) { return (p.unit.class.has("Cerebral")) ? 3 : 1; },
    },
    2732: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    2733: {
        atk: function(p) { return p.unit.type == "INT" ? 2.25 : 1; },
    },
    2735: {
        atk: function(p) { return (p.colorCount.STR >= 1 && p.colorCount.DEX >= 1 && p.colorCount.PSY >= 1) ? p.actions[p.sourceSlot] ? 4.5 : 2.75 : 1; },
    },
    2736: {
        atk: function(p) { return (p.colorCount.STR >= 1 && p.colorCount.DEX >= 1 && p.colorCount.PSY >= 1) ? p.actions[p.sourceSlot] ? 4.5 : 2.75 : 1; },
    },
    2737: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.5 : 2 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 1.2 : 1; },
    },
    2738: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
        hp: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 1.2 : 1; },
    },
    2739: {
        atk: function(p) {
            var Katacount = 0;
            var Kataclass = [ "Slasher", "Striker", "Driven", "Cerebral", "Powerhouse" ];
            for(var i = 0; i < Kataclass.length; i++) {
                if(p.unit.class.has(Kataclass[i])) {
                    Katacount++;
                }
            }
            return Math.pow(1.95, Katacount);
        },
    },
    2740: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    2741: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    2742: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
    },
    2743: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2.5 : 1; },
    },
    2743: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2745: {
        atk: function(p) { return !(p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 1 : (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ?  3 : 2.25); },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 1.2 : 1; }
    },
    2746: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 2.25 : 1; },
    },
    2747: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    2748: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
    },
    2749: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.75 : 1; },
    },
    2750: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 2 : 1; },
    },
    2751: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2752: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    2753: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    2754: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.2 : 1; },
    },
    2755: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.35 : 1; },
    },
    2756: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
    },
    2757: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 2 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 1.2 : 1; },
    },
    2758: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 3 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 1.2 : 1; },
    },
    2759: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
    },
    2760: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
    },
    2761: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
    },
    2762: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    2763: {
        atk: function(p) { return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? 2.25 : 1.5 : 1; },
        affinity: function(p) { console.log(p); return p.unit.class.has("Shooter") ? p.actions[p.sourceSlot] ? 1.5 : 1 : 1; },
    },
    2764: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.25 : 1; },
    },
    2765: {
        atk: function(p) { return 2.25; },
        rcv: function(p) { return 1.25; },
        hp: function(p) { return 1.25; },
    },
    2766: {
        atk: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 2 : 1; },
    },
    2767: {
        atk: function(p) { return !(p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 1 : p.actions[p.sourceSlot] ? (((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ?  3 : 2.5) : 2.5; },
    },
    2768: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 2.5 : 2; },
        rcv: function(p) { return 1.2; },
    },
    2769: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 3 : 2.5; },
        rcv: function(p) { return 1.2; },
    },
    2770: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 2.5 : 2; },
        rcv: function(p) { return 1.2; },
    },
    2771: {
        atk: function(p) { return (p.colorCount.STR>=4 || p.colorCount.DEX>=4 || p.colorCount.QCK>=4 || p.colorCount.PSY>=4 || p.colorCount.INT>=4) ? 3 : 2.5; },
        rcv: function(p) { return 1.2; },
    },
    2772: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
    },
    2773: {
        atk: function(p) { return p.colorCount.STR>=4 && p.unit.type == "STR" ? 3.75 : p.colorCount.DEX>=4 && p.unit.type == "DEX" ? 3.75 : p.colorCount.QCK>=4 && p.unit.type == "QCK" ? 3.75 : p.colorCount.PSY>=4 && p.unit.type == "PSY" ? 3.75 : p.colorCount.INT>=4 && p.unit.type == "INT" ? 3.75 : 3; },
        affinity: function(p) { return p.colorCount.STR>=4 && p.unit.type == "STR" ? 1.1 : p.colorCount.DEX>=4 && p.unit.type == "DEX" ? 1.1 : p.colorCount.QCK>=4 && p.unit.type == "QCK" ? 1.1 : p.colorCount.PSY>=4 && p.unit.type == "PSY" ? 1.1 : p.colorCount.INT>=4 && p.unit.type == "INT" ? 1.1 : 1; },
    },
    2774: {
        atk: function(p) { return p.colorCount.STR>=4 && p.unit.type == "STR" ? 3.75 : p.colorCount.DEX>=4 && p.unit.type == "DEX" ? 3.75 : p.colorCount.QCK>=4 && p.unit.type == "QCK" ? 3.75 : p.colorCount.PSY>=4 && p.unit.type == "PSY" ? 3.75 : p.colorCount.INT>=4 && p.unit.type == "INT" ? 3.75 : 3; },
        affinity: function(p) { return p.colorCount.STR>=4 && p.unit.type == "STR" ? 1.1 : p.colorCount.DEX>=4 && p.unit.type == "DEX" ? 1.1 : p.colorCount.QCK>=4 && p.unit.type == "QCK" ? 1.1 : p.colorCount.PSY>=4 && p.unit.type == "PSY" ? 1.1 : p.colorCount.INT>=4 && p.unit.type == "INT" ? 1.1 : 1; },
    },
    2775: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 4 : 1; },
    },
    2776: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 4 : 1; },
    },
    2777: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1; },
    },
    2778: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.75 : 1; },
    },
    2779: {
        atk: function(p) { return 2.25; },
    },
    2780: {
        atk: function(p) { return 2.25; },
    },
    2781: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 3 : 1; },
    },
    2782: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    2783: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    2784: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4.026275, [ "Shooter" ]); },
        hitAtk: function(p) {
            if (!p.unit.class.has("Shooter")) return 1;
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4.147915078125 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? 3.9503953125 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.76228125 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.583125 : p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? 3.4125 : 3.25;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        rcv: function(p) { return 0; },
    },
    2785: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    2786: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 1.5 : 1; },
    },
    2787: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 2.25 : 1; },
    },
    2788: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 2 : 1; },
    },
    2789: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 1.2 : 1; },
    },
    2790: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
    },
    2791: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 1.5 : 1; },
    },
    2792: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? p.actions[p.sourceSlot] ? 3.25 : 1.75 : 1; },
    },
    2793: {
        atk: function(p) { return p.unit.type == "INT" ? p.actions[p.sourceSlot] ? 3.5 : 2.75 : 1; },
        affinity: function(p) { return p.unit.type == "INT" ? p.actions[p.sourceSlot] ? 1.2 : 1 : 1; },
    },
    2794: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1 : (p.unit.type == "PSY" || p.unit.type == "INT") ? 3 : 1; }
    },
    2796: {
        atk: function(p) { return 3.5; },
        hp: function(p) { return 1.25; },
    },
    2797: {
        atk: function(p) { return 3.5; },
        hp: function(p) { return 1.25; },
    },
    2798: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    2799: {
        atk: function(p) { return 2.5; },
    },
    2800: {
        atk: function(p) { return 1.5; },
    },
    2803: {
        staticMult: function(p) { return p.actions[p.sourceSlot] ? p.slot == p.sourceSlot ? 300 : 0 : 0; },
        atk: function(p) { return (p.orb == 'meat') ? 4.25 : 3.5; },
    },
    2804: {
        staticMult: function(p) { return p.actions[p.sourceSlot] ? p.slot == p.sourceSlot ? 300 : 0 : 0; },
        atk: function(p) { return (p.orb == 'meat') ? 4.25 : 3.5; },
    },
    2805: {
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
    },
    2806: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
    },
    2807: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; },
    },
    2808: {
        atk: function(p) { return p.unit.type == "INT" ? 2.75 : 1; },
    },
    2809: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2810: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Good", "Great", "Perfect"]) ? 3.25 : 1;
        },
        hitModifiers: ["Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    2811: {
        atk: function(p) { return 1.75 + 0.5*(p.percHP / 100); }
    },
    2812: {
        atk: function(p) { return p.actions[p.sourceSlot] ? 2 + 1.0*(p.percHP / 100) : 2 + 0.5*(p.percHP / 100); }
    },
    2813: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1.2 : 1; },
    },
    2814: {
        atk: function(p) {
            if(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") {
                if(p.colorCount.INT==0 && p.colorCount.PSY==0 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 3.85;
                else if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                    return 2.75;
                else if(p.colorCount.INT==0 && p.colorCount.PSY==0)
                    return 1.4;
                else
                    return 1;
                }
                else
                    return 1;
        },
        hp: function(p) {
            if(p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1)
                return 1.3;
            else
                return 1;
               },
    },
    2815: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? p.actions[p.sourceSlot] ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.25 : 2.5 : 2.5 : 1; },
    },
    2816: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
    },
    2817: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
    },
    3333: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 :
            p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.5; },
    },
    3334: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 4 :
            p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? 3.5 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return 1.5; },
    },
    3339: {
        atk: function(p) { return (p.unit.class.has("Fighter")) ? 1.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    3340: {
        atk: function(p) { return (p.unit.class.has("Fighter")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    3347: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1.5 : 1; },
    },
    3348: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1.75 : 1; },
        rcv: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1.5 : 1; },
    },
    3349: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? 1.5 : 1; },
    },
    3350: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? 1.5 : 1; },
    },
    3351: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 1 : 1;//change this
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    3352: {
        damageSorter: function(d) { return CrunchUtils.okamaSort(d, ['DEX', 'INT', 'QCK']); },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0, p.chainPosition), p.modifiers, [{
                type: 'STR',
                minModifier: 'Good'
            }, {
                type: 'QCK',
                minModifier: 'Good'
            }, {
                type: 'DEX',
                minModifier: 'Good'
            }]) ? 3.25 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    3353: {
        atk: function(p) { return p.percHP <= 50.0 ? 2.25 : 1; }
    },
    3354: {
        atk: function(p) { return p.percHP <= 50.0 ? 2.75 : 1; }
    },
    3356: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1; }
    },
    3357: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? Math.max(1.0, 3.5 - 0.1 * p.turnCounter) : 1; }
    },
    3358: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    3359: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    3360: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
    },
    3361: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
    },
    3366: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    3367: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    3368: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    3371: {
        atk: function(p) { return (p.unit.class.has("Fighter")) ? 1.5 : 1; },
    },
    3372: {
        atk: function(p) { return (p.unit.class.has("Fighter")) ? 2 : 1; },
    },
    3373: {
        atk: function(p) { return (p.unit.class.has("Driven")) ? 1.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven")) ? 1.5 : 1; },
    },
    3374: {
        atk: function(p) { return (p.unit.class.has("Cerebral")) ? 1.75 : 1; },
        rcv: function(p) { return (p.unit.class.has("Cerebral")) ? 1.75 : 1; },
    },
    5000: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    5001: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    5002: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.75 : 1; },
    },
    5003: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.75 : 1; },
    },
    5004: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5005: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.5 : 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5006: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4.25 : 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5007: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4.25 : 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5008: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5009: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3.5 : 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5010: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4.25 : 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5011: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 4.25 : 3 : 1; },
        hp: function(p) { return p.unit.class.has("Free Spirit") ? 1.2 : 1; },
    },
    5012: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.75 : p.unit.type == "DEX" ? 2 : 1; },
    },
    5013: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.75 : p.unit.type == "PSY" ? 2 : 1; },
    },
    5014: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 3.75 : 1; },
    },
    5015: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 3.75 : 1; },
    },
    5016: {
        atk: function(p) { return p.unit.type == "PSY" ? 3.5 : 2.75; },
    },
    5017: {
        atk: function(p) { return p.unit.type == "INT" ? 3.5 : 2.75; },
        rcv: function(p) { return 1.25; },
    },
    5018: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 4.25 : 3; },
        rcv: function(p) { return 1.5; },
    },
    5019: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 4.25 : 3; },
        rcv: function(p) { return 1.5; },
    },
    5020: {
        atk: function(p) { return p.unit.type == "PSY" ? 3.5 : 2.75; },
    },
    5021: {
        atk: function(p) { return p.unit.type == "INT" ? 3.5 : 2.75; },
        rcv: function(p) { return 1.25; },
    },
    5022: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 4.25 : 3; },
        rcv: function(p) { return 1.5; },
    },
    5023: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 4.25 : 3; },
        rcv: function(p) { return 1.5; },
    },
    5024: {
        atk: function(p) {
            return (p.unit.type == "STR" || p.unit.type == "DEX") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2 : 1;
        },
    },
    5025: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX") ? 2.5 : 1; },
        rcv: function(p) { return 1.5; },
    },
    5026: {
        atk: function(p) {
            return (p.unit.type == "STR" || p.unit.type == "DEX") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.5 : 1;
        },
    },
    5027: {
        atk: function(p) {
            return (p.unit.type == "STR" || p.unit.type == "DEX") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.5 : 1;
        },
    },
    5028: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5029: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5030: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.class.has("Fighter") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5031: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.class.has("Fighter") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5032: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5033: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3 : p.unit.class.has("Fighter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5034: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.class.has("Fighter") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5035: {
        atk: function(p) { return p.slot == p.sourceSlot ? 4 : p.unit.class.has("Fighter") ? 3 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
    },
    5036: {
        atk: function(p) { return p.unit.class.has("Driven") ? 3.25 : 1; }
    },
    5037: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3.75 : p.unit.class.has("Driven") ? 3.25 : 1; }
    },
    5038: {
        atk: function(p) { return p.unit.class.has("Driven") ? 4.25 : 1; }
    },
    5039: {
        atk: function(p) { return p.unit.class.has("Driven") ? 4.25 : 1; }
    },
    5040: {
        atk: function(p) { return p.unit.class.has("Driven") ? 3.25 : 1; }
    },
    5041: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3.75 : p.unit.class.has("Driven") ? 3.25 : 1; }
    },
    5042: {
        atk: function(p) { return p.unit.class.has("Driven") ? 4.25 : 1; }
    },
    5043: {
        atk: function(p) { return p.unit.class.has("Driven") ? 4.25 : 1; }
    },
    5044: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    5045: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    5046: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 3 : 1; }
    },
    5047: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 3 : 1; }
    },
    5048: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; }
    },
    5049: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
    },
    5050: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 3 : 1; }
    },
    5051: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 3 : 1; }
    },
    5052: {
        atk: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 3.5 : 1 : 1; },
        hp: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 1.25 : 1 : 1; },
    },
    5053: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.5 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.25 : 1; },
    },
    5054: {
        atk: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 4.25 : 1 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? p.unit.class.has("Powerhouse") ? 1.25 : 1 : 1; },
    },
    5055: {
        atk: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 3.5 : 1 : 1; },
        hp: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 1.25 : 1 : 1; },
    },
    5056: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.5 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.25 : 1; },
    },
    5057: {
        atk: function(p) { return (p.classCount.Powerhouse == 6) ? p.unit.class.has("Powerhouse") ? 4.25 : 1 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? p.unit.class.has("Powerhouse") ? 1.25 : 1 : 1; },
    },
    5058: {
        atk: function(p) { return p.unit.type == "PSY" ? 3 : (p.unit.type == "QCK" || p.unit.type == "INT") ? 2.5 : 1; },//Change this
    },
    5059: {
        atk: function(p) { return p.unit.type == "QCK" ? 3 : (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 1; },//Change this
    },
    5060: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 1; },
    },
    5061: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 1; },
    },
    5062: {
        atk: function(p) { return p.unit.type == "PSY" ? 3 : (p.unit.type == "QCK" || p.unit.type == "INT") ? 2.5 : 1; },
    },
    5063: {
        atk: function(p) { return p.unit.type == "QCK" ? 3 : (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.5 : 1; },
    },
    5064: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 3.75 : 1; },
    },
    5065: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 3.75 : 1; },
    },
    5066: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    5067: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    5068: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; },
    },
    5069: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; },
    },
    5070: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : p.unit.type == "QCK" ? 2 : 1; },
    },
    5071: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : p.unit.type == "INT" ? 2 : 1; },
    },
    5072: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 3 : 1; },
    },
    5073: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 3 : 1; },
    },
    5074: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? Math.max(2.75, 2.75 * 1.2 * Math.min(p.turnCounter,1)) : 1; },
    },
    5075: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? 2.75 : 1; },
    },
    5076: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? 3.75 : 1; },
    },
    5077: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? 3.75 : 1; },
    },
    5078: {
        atk: function(p) { return 2.5; },
    },
    5079: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5080: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5081: {
        hitAtk: function(p) {
            return p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 3.25 : 2.5;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5082: {
        atk: function(p) { return 3.5; },
        hp: function(p) { return 1.25; },
    },
    5083: {
        atk: function(p) { return 3; },
        hp: function(p) { return 1.25; },
    },
    5084: {
        atk: function(p) { return 4.5; },
        hp: function(p) { return 1.25; },
    },
    5085: {
        atk: function(p) { return 4.5; },
        hp: function(p) { return 1.25; },
    },
    5086: {
        atk: function(p) { return 3.5; },
        hp: function(p) { return 1.25; },
    },
    5087: {
        atk: function(p) { return 3; },
        hp: function(p) { return 1.25; },
    },
    5088: {
        atk: function(p) { return 4.5; },
        hp: function(p) { return 1.25; },
    },
    5089: {
        atk: function(p) { return 4.5; },
        hp: function(p) { return 1.25; },
    },
    5090: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5091: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5092: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 4 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5093: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5094: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5095: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 4 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2 : 1; },
    },
    5096: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
        rcv: function(p) { return 0.5; },
    },
    5097: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    5098: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5 : 1; },
    },
    5099: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5 : 1; },
    },
    5100: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 2.75 : 2.25 : 1; },
        rcv: function(p) { return 0.5; },
    },
    5101: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    5102: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5 : 1; },
    },
    5103: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? ((CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) == 2) && (p.orb != 'g')) ? 3 : 2.5 : 1; },
    },
    5104: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },//change
    },
    5105: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.25 : 2.7 : 1;//change
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5106: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 3.43 : 1;//change
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5107: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 3.43 : 1;//change
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5108: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1; },
    },
    5109: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.25 : 2.7 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5110: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 3.43 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5111: {
        hitAtk: function(p) {
            return p.unit.class.has("Free Spirit") ? p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 2.75 : 3.43 : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5112: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
    },
    5113: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
    },
    5114: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 3.25 : 2.5; },
        hp: function(p) { return 1.2; },
    },
    5115: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 3.25 : 2.5; },
        hp: function(p) { return 1.2; },
    },
    5116: {
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
    },
    5117: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 2; },
        hp: function(p) { return 1.2; },
    },
    5118: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 3.25 : 2.5; },
        hp: function(p) { return 1.2; },
    },
    5119: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 3.25 : 2.5; },
        hp: function(p) { return 1.2; },
    },
    5120: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    5121: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5122: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
    },
    5123: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
    },
    5124: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    5125: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5126: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
    },
    5127: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 3 : 1; },
    },
    5128: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5129: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5130: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5131: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5132: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.5 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5133: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5134: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5135: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 2.75 : 1; },
        hp: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5136: {
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1.5; },
    },
    5137: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1.5; },
    },
    5138: {
        atk: function(p) { return (p.unit.type == "INT" || p.unit.type == "DEX") ? 3 : 2; },
    },
    5139: {
        atk: function(p) { return (p.unit.type == "INT" || p.unit.type == "DEX") ? 3 : 2; },
    },
    5140: {
        atk: function(p) { return p.unit.type == "INT" ? 3 : 2; },
    },
    5141: {
        atk: function(p) { return p.unit.type == "DEX" ? 3 : 2; },
    },
    5142: {
        atk: function(p) { return (p.unit.type == "INT" || p.unit.type == "DEX") ? 3.75 : 2.5; },
    },
    5143: {
        atk: function(p) { return (p.unit.type == "INT" || p.unit.type == "DEX") ? 3.75 : 2.5; },
    },
    5144: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 3.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5145: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 3 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5146: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 4 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5147: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 4 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5148: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 3.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5149: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 3 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5150: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 4 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5151: {
        hitAtk: function(p) {
            var addit = 0;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect"]) ? .1 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect"]) ? .2 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? .3 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect"]) ? .4 : addit;
            addit = p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? .5 : addit;
            return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 4 + addit : 1;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
        rcv: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1.2 : 1; },
    },
    5152: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.3, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            if (!p.unit.class.has('Cerebral') && p.unit.class.has('Striker')) return 3;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3 : (prev == 'Good' ? 3.1 : (prev == 'Great' ? 3.2 : (prev == 'Perfect' ? 3.3 : 3)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5153: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.3, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            if (p.unit.class.has('Cerebral') && !p.unit.class.has('Striker')) return 3;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3 : (prev == 'Good' ? 3.1 : (prev == 'Great' ? 3.2 : (prev == 'Perfect' ? 3.3 : 3)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5154: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3.5 : (prev == 'Good' ? 3+(.5/3) : (prev == 'Great' ? 3+(1/3) : (prev == 'Perfect' ? 4 : 3.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5155: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3.5 : (prev == 'Good' ? 3+(.5/3) : (prev == 'Great' ? 3+(1/3) : (prev == 'Perfect' ? 4 : 3.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5156: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.3, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            if (!p.unit.class.has('Cerebral') && p.unit.class.has('Striker')) return 3;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3 : (prev == 'Good' ? 3.1 : (prev == 'Great' ? 3.2 : (prev == 'Perfect' ? 3.3 : 3)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5157: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 3.3, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            if (p.unit.class.has('Cerebral') && !p.unit.class.has('Striker')) return 3;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3 : (prev == 'Good' ? 3.1 : (prev == 'Great' ? 3.2 : (prev == 'Perfect' ? 3.3 : 3)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5158: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3.5 : (prev == 'Good' ? 3+(.5/3) : (prev == 'Great' ? 3+(1/3) : (prev == 'Perfect' ? 4 : 3.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5159: {
        damageSorter: function(d) { return CrunchUtils.classSort(d, 4, [ "Cerebral", "Striker" ]); },
        hitAtk: function(p) {
            if (!(p.unit.class.has('Cerebral') || p.unit.class.has('Striker'))) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 3.5 : (prev == 'Good' ? 3+(.5/3) : (prev == 'Great' ? 3+(1/3) : (prev == 'Perfect' ? 4 : 3.5)));
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]
    },
    5160: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 1.75; }
    },
    5161: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2; }
    },
    5162: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2.5; }
    },
    5163: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2.5; }
    },
    5164: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 1.75; }
    },
    5165: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2; }
    },
    5166: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2.5; }
    },
    5167: {
        atk: function(p) { return 1.75; },
        hp: function(p) { return 1.2; },
        affinity: function(p) { return 2.5; }
    },
    5168: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.2 : (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3 : 1; }
    },
    5169: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 2.75 : 1; }
    },
    5170: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3.5 : 1; }
    },
    5171: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3.5 : 1; }
    },
    5172: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.2 : (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3 : 1; }
    },
    5173: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 2.75 : 1; }
    },
    5174: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3.5 : 1; }
    },
    5175: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 3.5 : 1; }
    },
    5176: {
        atk: function(p) { return p.unit.type == "STR" ? 3.25 : p.unit.type == "DEX" || p.unit.type == "INT" ? 2.5 : 1; },
    },
    5177: {
        atk: function(p) { return p.unit.type == "INT" ? 3.25 : p.unit.type == "DEX" || p.unit.type == "STR" ? 2.5 : 1; },
    },
    5178: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 3.75 : 1; },
    },
    5179: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 3.75 : 1; },
    },
    5180: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; },
    },
    5181: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 2.5 : 1; },
        rcv: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.2 : 1; },
    },
    5182: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.25 : 1; },
        rcv: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.5 : 1; },
    },
    5183: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 3.25 : 1; },
        rcv: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.5 : 1; },
    },
    5184: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2.75 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.25 : 1; },
    },
    5185: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 2.75 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.25 : 1; },
    },
    5186: {
        atk: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 3.25 : 1; },
        hp: function(p) { return (p.colorCount.INT>=1 && p.colorCount.PSY>=1 && p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? 1.25 : 1; },
    },
    5187: {
        hitAtk: function(p) {
            var boost =  p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 1.2 : 1;
            return p.unit.type == "PSY" ? 2.5 * boost : p.unit.type == "INT" ? 2.25 * boost : boost;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    5188: {
        hitAtk: function(p) {
            var boost =  p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 1.2 : 1;
            return p.unit.type == "INT" ? 2.5 * boost : p.unit.type == "PSY" ? 2.25 * boost : boost;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    5189: {
        hitAtk: function(p) {
            var boost =  p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 1.2 : 1;
            return (p.unit.type == "PSY" || p.unit.type == "INT") ? 3 * boost : boost;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    5190: {
        hitAtk: function(p) {
            var boost =  p.modifiers.slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect", "Perfect", "Perfect"]) ? 1.2 : 1;
            return (p.unit.type == "PSY" || p.unit.type == "INT") ? 3 * boost : boost;
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
    },
    5191: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 3 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5192: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 3.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5193: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5194: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5195: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 3 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5196: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 3.25 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5197: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
    5198: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 4 : 1; },
        hp: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 1.3 : 1; },
    },
};