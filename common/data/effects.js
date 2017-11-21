window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 46
    // Use p.type instead of p.unit.type here

    'Baroque Works (pre-v4.0)': {
        description: 'Stats of non-Fighter units reduced by 90%',
        thumb: 462,
        id: 1, // don't change this
        atk: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Fighter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; }
    },

    'Baroque Works': {
        description: 'ATK of non-Fighter, non-Booster, non-Evolver units reduced by 90%',
        thumb: 462,
        id: 2, // don't change this
        atk: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Prisoner Crocodile (pre-v4.0)': {
        description: 'Stats of non-Striker units reduced by 90%',
        thumb: 510,
        id: 3, // don't change this
        atk: function(p) { return !p.class.has('Striker') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Striker') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Striker') ? 0.1 : 1; }
    },

    'Prisoner Crocodile': {
        description: 'Stats of non-Striker, non-Booster, non-Evolver units reduced by 90%',
        thumb: 510,
        id: 4, // don't change this
        atk: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Jailer Domino (pre-v4.0)': {
        description: 'Stats of non-Shooter units reduced by 90%',
        thumb: 538,
        id: 5, // don't change this
        atk: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Shooter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; }
    },

    'Jailer Domino': {
        description: 'Stats of non-Shooter, non-Booster, non-Evolver units reduced by 90%',
        thumb: 538,
        id: 6, // don't change this
        atk: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Chief Guard Sadi-chan (pre-v4.0)': {
        description: 'Stats of non-Slasher units reduced by 90%',
        thumb: 550,
        id: 7, // don't change this
        atk: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Slasher') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; }
    },

    'Chief Guard Sadi-chan': {
        description: 'Stats of non-Slasher, non-Booster, non-Evolver units reduced by 90%',
        thumb: 550,
        id: 8, // don't change this
        atk: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Warriors of Shandia': {
        // Note: The debuff is applied to normal attacks but not to specials
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%',
        thumb: 583,
        id: 9, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584, 780, 781 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    },

    'Warriors of Shandia, Last Round': {
        // Note: The debuff is applied to normal attacks but not to specials
        // Note 2: The 50% reduction is applied to enemy's defense as well, for whatever reason
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%, ATK of PSY characters reduced by 50%',
        thumb: 583,
        id: 10, // don't change this
        atk: function(p) {
            var result = window.effects['Warriors of Shandia'].atk(p);
            return (p.type == 'PSY' ? 0.5 : 1) * result;
        },
        hp: function(p) { return window.effects['Warriors of Shandia'].hp(p); },
        rcv: function(p) { return window.effects['Warriors of Shandia'].rcv(p); },
    },

    'Gan Fall': {
        description: 'Stats of non-Free Spirit, non-Booster, non-Evolver units reduced by 90%',
        thumb: 713,
        id: 11, // don't change this
        atk: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Orb amplification (1.05x)': {
        description: 'Orb effects amplified by 1.05x',
        thumb: 768,
        id: 12, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.05 : (p.orb == 0.5 ? 20/21 : 1); }
    },

    'Orb amplification (1.10x)': {
        description: 'Orb effects amplified by 1.10x',
        thumb: 415,
        id: 13, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); }
    },

    'Chain multiplier limiter (2.0x)': {
        description: 'Limits chain multiplier to 2.0x',
        thumb: 772,
        id: 14, // don't change this
        chainLimiter: function() { return 2.0; }
    },

    'Nightmare Luffy, 2nd stage': {
        description: 'Limits chain multiplier to 2.0x, nullifies the first 11 hits in the chain',
        thumb: 795,
        id: 15, // don't change this
        comboShield: 11,
        chainLimiter: function() { return 2.0; }
    },

    'Attack reduction (50%)': {
        description: 'ATK of all units reduced by 50%',
        thumb: 546,
        id: 16, // don't change this
        atk: function(p) { return 0.5; }
    },

    'Attack reduction (70%)': {
        description: 'ATK of all units reduced by 70%',
        thumb: 765,
        id: 17, // don't change this
        atk: function(p) { return 0.3; }
    },

    'Kuma': {
        description: 'Damage of STR and DEX characters nullified',
        thumb: 836,
        id: 18,  // don't change this
        atk: function(p) { return p.type == 'STR' || p.type == 'DEX' ? 0 : 1; }
    },

    'Shu (Expert)': {
        description: 'Attack of Slasher units reduced by 50%',
        thumb: 773,
        id: 19, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.5 : 1; }
    },

    'Shu (Master)': {
        description: 'Attack of Slasher units reduced by 70%',
        thumb: 773,
        id: 20, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.3 : 1; }
    },

    'Attack reduction (20%)': {
        description: 'ATK of all units reduced by 20%',
        thumb: 567,
        id: 21, // don't change this
        atk: function(p) { return 0.8; }
    },

    'Hit barrier (26 hits)': {
        description: 'Nullifies the first 26 hits in the chain',
        thumb: 375,
        id: 22, // don't change this
        comboShield: 26
    },

    'There\'s the G!': {
        description: 'Activates [G] orb support even when Lao-G is not in the team',
        thumb: 880,
        id: 23, // don't change this
        gOrbsEnabled: true
    },
    
    'Coliseum Franky': {
        description: 'Activates [G] orb Support, boosts Orbs by 1.5x',
        thumb: 560,
        id: 24, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
        gOrbsEnabled: true
    },

    'Coliseum Killer': {
        description: 'ATK of all units reduced by 95%',
        thumb: 1043,
        id: 25, // don't change this
        atk: function(p) { return 0.05; }
    },
    
    'Coliseum Cricket': {
        description: 'Fixed threshold barrier (200,000)',
        thumb: 428,
        id: 26,
        barrierThreshold: 200000,
        barrierReduction: 0.99
    },
    
    'Sabo Raid Boss': {
        description: 'Reduces Chain By Half',
        thumb: 1047,
        id: 27,
        chainModifier: function(p) { return 0.5 ; }
    },
    
    'Pirate Ship Competition! \"Dead End\" Opens!': {
        description: 'STR/DEX/QCK ATK 1.6x. INT/PSY HP 2x',
        thumb: 1072,
        id: 28,
        atk: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1.6 : 1; },
        hp: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1 : 2.0; }
        
    },
    
    '1.25x Orb Boost': {
        description: 'Used by Christmas Law in Saga Coliseum',
        thumb: 856,
        id: 29,
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 20/25 : 1); }
    },
    
    '700k Damage Treshold Barrier': {
        description: 'Used by Saga. You cannot do more that 700k damage in one hit',
        thumb: 1089,
        id: 30,
        barrierThreshold: 700000,
        barrierReduction: 0.99
    },
    
    'Dr. Indigo & Scarlet! Fortnight': {
        //OLD description: 'Boosts ATK of Driven and Powerhouse characters by 2x, other classes get .5x ATK. Boosts HP of Slasher and Fighter characters by 2x, other classes get .5x HP.',
        description: 'Boosts ATK of Driven characters by 2x and boosts HP for Powerhouse characters by 2x.',
        thumb: 1095,
        id: 31,
        atk: function(p) { 
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Driven')) { boost1 = 2.0}
                            if(p.class.has('Powerhouse')) { boost2 = 2.0}
                            if(!(p.class.has('Driven')&&p.class.has('Powerhouse')) && p.class.constructor === Array){
                            if(!p.class.has('Driven')){ boost3 = 0.5}
                            if(!p.class.has('Powerhouse')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Driven') || p.class.has('Powerhouse'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/ 
                            return p.class.has('Driven') ? 2 : 1;
                        },
        hp: function(p) {
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Fighter')) { boost1 = 2.0}
                            if(p.class.has('Slasher')) { boost2 = 2.0}
                            if(!(p.class.has('Fighter')&&p.class.has('Slasher')) && p.class.constructor === Array){
                            if(!p.class.has('Fighter')){ boost3 = 0.5}
                            if(!p.class.has('Slasher')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Fighter') || p.class.has('Slasher'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/
                            return p.class.has('Powerhouse') ? 2 : 1;
                        }
    },
    
    'Coliseum Tashigi': {
        description: '25 hit barrier and 2x chain limit',
        thumb: 783,
        id: 32,
        comboShield: 25,
        chainLimiter: function() { return 2.0; }
    },
    
    'Robin and Nami\'s Secret Undercover Investigation': {
        description: 'Boosts ATK of Cerebral and Free Spirit characters by 2x, other classes get .5x ATK. Boosts HP of Striker and Shooter characters by 2x, other classes get .5x HP.',
        thumb: 1112,
        id: 33,
        atk: function(p) { 
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Cerebral')) { boost1 = 2.0}
                            if(p.class.has('Free Spirit')) { boost2 = 2.0}
                            if(!(p.class.has('Cerebral')&&p.class.has('Free Spirit')) && p.class.constructor === Array){
                            if(!p.class.has('Cerebral')){ boost3 = 0.5}
                            if(!p.class.has('Free Spirit')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Cerebral') || p.class.has('Free Spirit'))){ boost5 = 0.5}
                            }
                            //console.log(boost1+" "+boost2+" "+boost3+" "+boost4+" "+boost5)
                            return 1*boost1*boost2*boost3*boost4*boost5; 
                        },
        hp: function(p) {
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Striker')) { boost1 = 2.0}
                            if(p.class.has('Shooter')) { boost2 = 2.0}
                            if(!(p.class.has('Striker')&&p.class.has('Shooter')) && p.class.constructor === Array){
                            if(!p.class.has('Striker')){ boost3 = 0.5}
                            if(!p.class.has('Shooter')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Striker') || p.class.has('Shooter'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;
                        }
    },
    
    'Gild Tesoro - 40 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.1x',
        thumb: 1162,
        id: 34,
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); },
        atk: function(p) { return 1.1; }
    },
    
    'Gild Tesoro - 60 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.2x',
        thumb: 1163,
        id: 35,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.2; }
    },
    
    'World Pirates - Boa Stage 1': {
        description: 'Boosts the ATK of characters with 30 cost or less by 1.5x',
        thumb: 865,
        id: 36,
        atk: function(p) { return p.cost <= 30 ? 1.5 : 1; }
    },
    
    'Aokiji Neo - Striker Raid Boss': {
        description: 'Reduces Chain By 90%',
        thumb: 1668,
        id: 37,
        chainModifier: function(p) { return 0.1 ; }
    },

    'Doflamingo Neo - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 30%',
        thumb: 1623,
        id: 38, // don't change this
        atk: function(p) { return .7 ; },
    },

    'Doflamingo Neo [GLOBAL] - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 50%',
        thumb: 1623,
        id: 39, // don't change this
        atk: function(p) { return .5 ; },
    },

    'Doflamingo Neo [GLOBAL] - Striker Raid Boss': {
        description: 'Halves Chain Multiplier.',
        thumb: 1623,
        id: 40, // don't change this
        chainModifier: function(p) { return 0.5 ; }
    },
    
    'Sabo Neo - Fighter Raid Boss': {
        description: 'Boosts the Orbs all characters by 1.2x, ATK by 1.3x and Reduces Chain by Half.',
        thumb: 1727,
        id: 41,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.3; },
        chainModifier: function(p) { return 0.5 ; }
    },

    'Kyros Colisuem - Chain multiplier limiter (1.5x)': {
        description: 'Limits chain multiplier to 1.5x',
        thumb: 1667,
        id: 42, // don't change this
        chainLimiter: function() { return 1.5; }
    },

    'Treasure Map [Mihawk Season]': {
        description: 'Boost stats of Buggy & Zoro 2.5x',
        thumb: 1808,
        id: 43, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1803 && id < 1806) ||
                    [ 1804, 1806 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 1803 && id < 1806) ||
                    [ 1804, 1806 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 1803 && id < 1806) ||
                    [ 1804, 1806 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
	},
	
	'Akainu Neo': {
        description: 'Certain units boosted',
        thumb: 1826,
        id: 44, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1795, 1796, 1539, 1540, 1823, 1844, 1277, 1278 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1795, 1796, 1539, 1540, 1823, 1844, 1277, 1278 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1795, 1796, 1539, 1540, 1823, 1844, 1277, 1278 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
	},
    
    'Blitz Battle! The Three Admirals': {
        description: 'Lot of units boosted',
        thumb: 1314,
        id: 45, // don't change this
        atk: function(p) {
            var id = p.number + 1,
            matching = ((id > 446 && id < 457) || (id > 638 && id < 659) ||
                [ 1, 2, 3, 4, 216, 1245, 217, 250, 251, 252, 1248, 1249, 253, 254, 255, 420, 547, 548, 570, 571, 577, 578, 727, 761, 794, 946, 947, 948, 936, 937, 1022, 1114, 1115, 1120, 1121, 1285, 1387, 1403, 1404, 38, 39, 598, 599, 887, 1301, 1302, 1390, 1391, 74, 75, 497, 498, 561, 562, 950, 951, 1023, 1246, 1247, 1265, 1266, 1604, 1605, 1040, 1041, 982, 983, 260, 261, 1257, 1258, 1413, 383, 384, 408, 509, 510, 719, 720, 897, 389, 390, 674, 675, 1036, 1037, 1352, 409, 410, 885, 934, 935, 1345, 415, 416, 864, 865, 921, 922, 1193, 1194, 1218, 1445, 981, 1255, 1254, 1256, 676, 677, 1038, 1039, 1181, 1182, 1183, 1184, 1512, 1187, 1188, 1511, 1189, 1190, 1510, 1267, 1268, 321, 322, 632, 633, 737, 747, 748, 1762, 1763, 949, 366, 367, 1353, 1354, 1355, 1533, 1534, 1619, 2000, 2001, 545, 546, 602, 603, 226, 227, 717, 718, 1227, 1679, 1680, 391, 392, 437, 438, 684, 685, 889, 890, 944, 945, 1539, 1540, 1309, 1310, 1576, 1577, 1337, 1338, 1657, 1658, 1570, 1571, 1572, 1573, 1574, 1575, 1578, 1579, 1651, 1652, 1653, 1654, 1655, 1656, 1659, 1660, 1158, 1159, 1373, 1374, 1697, 1698, 928, 929, 1156, 1157, 207, 208, 461, 462, 899 ].indexOf(id) != -1);
            return !matching ? 1 : 1.5;
        },    
        hp: function(p) {
            var id = p.number + 1,
            matching = ((id > 446 && id < 457) || (id > 638 && id < 659) ||
                [ 1, 2, 3, 4, 216, 1245, 217, 250, 251, 252, 1248, 1249, 253, 254, 255, 420, 547, 548, 570, 571, 577, 578, 727, 761, 794, 946, 947, 948, 936, 937, 1022, 1114, 1115, 1120, 1121, 1285, 1387, 1403, 1404, 38, 39, 598, 599, 887, 1301, 1302, 1390, 1391, 74, 75, 497, 498, 561, 562, 950, 951, 1023, 1246, 1247, 1265, 1266, 1604, 1605, 1040, 1041, 982, 983, 260, 261, 1257, 1258, 1413, 383, 384, 408, 509, 510, 719, 720, 897, 389, 390, 674, 675, 1036, 1037, 1352, 409, 410, 885, 934, 935, 1345, 415, 416, 864, 865, 921, 922, 1193, 1194, 1218, 1445, 981, 1255, 1254, 1256, 676, 677, 1038, 1039, 1181, 1182, 1183, 1184, 1512, 1187, 1188, 1511, 1189, 1190, 1510, 1267, 1268, 321, 322, 632, 633, 737, 747, 748, 1762, 1763, 949, 366, 367, 1353, 1354, 1355, 1533, 1534, 1619, 2000, 2001, 545, 546, 602, 603, 226, 227, 717, 718, 1227, 1679, 1680, 391, 392, 437, 438, 684, 685, 889, 890, 944, 945, 1539, 1540, 1309, 1310, 1576, 1577, 1337, 1338, 1657, 1658, 1570, 1571, 1572, 1573, 1574, 1575, 1578, 1579, 1651, 1652, 1653, 1654, 1655, 1656, 1659, 1660, 1158, 1159, 1373, 1374, 1697, 1698, 928, 929, 1156, 1157, 207, 208, 461, 462, 899 ].indexOf(id) != -1);
            return !matching ? 1 : 1.5;
        },    
        rcv: function(p) {
            var id = p.number + 1,
            matching = ((id > 446 && id < 457) || (id > 638 && id < 659) ||
                [ 1, 2, 3, 4, 216, 1245, 217, 250, 251, 252, 1248, 1249, 253, 254, 255, 420, 547, 548, 570, 571, 577, 578, 727, 761, 794, 946, 947, 948, 936, 937, 1022, 1114, 1115, 1120, 1121, 1285, 1387, 1403, 1404, 38, 39, 598, 599, 887, 1301, 1302, 1390, 1391, 74, 75, 497, 498, 561, 562, 950, 951, 1023, 1246, 1247, 1265, 1266, 1604, 1605, 1040, 1041, 982, 983, 260, 261, 1257, 1258, 1413, 383, 384, 408, 509, 510, 719, 720, 897, 389, 390, 674, 675, 1036, 1037, 1352, 409, 410, 885, 934, 935, 1345, 415, 416, 864, 865, 921, 922, 1193, 1194, 1218, 1445, 981, 1255, 1254, 1256, 676, 677, 1038, 1039, 1181, 1182, 1183, 1184, 1512, 1187, 1188, 1511, 1189, 1190, 1510, 1267, 1268, 321, 322, 632, 633, 737, 747, 748, 1762, 1763, 949, 366, 367, 1353, 1354, 1355, 1533, 1534, 1619, 2000, 2001, 545, 546, 602, 603, 226, 227, 717, 718, 1227, 1679, 1680, 391, 392, 437, 438, 684, 685, 889, 890, 944, 945, 1539, 1540, 1309, 1310, 1576, 1577, 1337, 1338, 1657, 1658, 1570, 1571, 1572, 1573, 1574, 1575, 1578, 1579, 1651, 1652, 1653, 1654, 1655, 1656, 1659, 1660, 1158, 1159, 1373, 1374, 1697, 1698, 928, 929, 1156, 1157, 207, 208, 461, 462, 899 ].indexOf(id) != -1);
            return !matching ? 1 : 1.5;
        },    
    },
    
    'Sicilian Coloseum': {
        description: 'Certain units boosted',
        thumb: 1828,
        id: 46, // don't change this
        atk: function(p) {
            var id = p.number + 1,
            matching = ((id > 1831 && id < 1840) ||
                [ ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var id = p.number + 1,
            matching = ((id > 1831 && id < 1840) ||
                [ ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var id = p.number + 1,
            matching = ((id > 1831 && id < 1840) ||
                [ ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },    
    },

    'Treasure Map [Whitebeard Season]': {
        description: 'Boost stats of Akainu & Squard 2.5x',
        thumb: 1853,
        id: 47, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1848 && id < 1851) ||
                    [ 1851 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 1848 && id < 1851) ||
                    [ 1851 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 1848 && id < 1851) ||
                    [ 1851 ].indexOf(id) != -1);
            return !matching ? 1 : 2.5;
        },
    },
    
    'Coloseum Kinemon Neo': {
        description: 'Certain units boosted',
        thumb: 1863,
        id: 48, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1858 && id < 1859) ||
                    [ 1720, 1621, 1631, 1632, 1777, 1778, 1833, 1834, 871, 872, 1695, 1696, 1791, 1792, 1431, 1432 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 1858 && id < 1859) ||
                    [ 1720, 1621, 1631, 1632, 1777, 1778, 1833, 1834, 871, 872, 1695, 1696, 1791, 1792, 1431, 1432 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 1858 && id < 1859) ||
                    [ 1720, 1621, 1631, 1632, 1777, 1778, 1833, 1834, 871, 872, 1695, 1696, 1791, 1792, 1431, 1432 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        }
    },
    
    'Kizaru Neo [GLOBAL] - Free Spirit': {
        description: 'Chain multiplier reduced.',
        thumb: 1780,
        id: 49,
        //orb: function(p) { return p.orb === 2.0 ? 1.2 : (p.orb === 0.5 ? 5/6 : 1); },
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1777 && id < 1778) ||
                    [ 1441, 1442, 1701, 1702, 1659, 1660, 1631, 1632, 1699, 1700, 1748, 1749, 1615, 1616 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        },
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Striker': {
        description: 'Chain multiplier halved.',
        thumb: 1780,
        id: 50,
        //orb: function(p) { return p.orb === 2.0 ? 1.2 : (p.orb === 0.5 ? 5/6 : 1); },
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1777 && id < 1778) ||
                    [ 1441, 1442, 1701, 1702, 1659, 1660, 1631, 1632, 1699, 1700, 1748, 1749, 1615, 1616 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        },
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Powerhouse': {
        description: 'Chain multiplier locked at 1.1x after revive.',
        thumb: 1780,
        id: 51,
        //orb: function(p) { return p.orb === 2.0 ? 1.2 : (p.orb === 0.5 ? 5/6 : 1); },
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1777 && id < 1778) ||
                    [ 1441, 1442, 1701, 1702, 1659, 1660, 1631, 1632, 1699, 1700, 1748, 1749, 1615, 1616 ].indexOf(id) !== -1);
            return !matching ? 1 : 1.75;
        },
        chainLimiter: function() { return 1.1; } //Chain locked at 1.1x
    }
};
