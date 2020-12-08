window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 62
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
        orb: function(p) { return (p.orb == 2.0 || p.orb == 'g') ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
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
        description: 'Boosts Orbs of all characters by 1.2x, ATK by 1.3x and Reduces Chain by Half.',
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

    'Treasure Map [Global]': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 3022,
        id: 43, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3019 ].indexOf(id) != -1) boost = 3;
            if([ 3020, 3021, 3007, 3009, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551 ].indexOf(id) != -1) boost = 2.5;
            if([ 3018, 3011, 3013, 3015, 2996, 2997, 2998, 3000, 3017, 2995, 3022, 2999, 3016, 3004, 3005, 2025, 2034, 2338, 2804, 2909, 2980, 2982, 2992, 2993, 2994, 603, 836, 1518, 2097, 2281, 2473, 2885, 2886, 2893, 2922, 2923, 2956, 779, 862, 1222, 1251, 1553, 1733, 2123, 2193, 2290, 2471, 2649, 2845, 2990, 666, 810, 1918, 2094, 2377, 2521, 1941, 2109, 2175, 2261, 2443, 2659, 2729, 2792, 2823, 2879, 2977, 2499, 2767, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952, 1808, 1853, 1889, 1916, 1972, 2000, 5012, 5013, 5014, 5015, 2064, 2211, 2137, 2299, 2336, 2362, 2387, 2469, 5062, 5063, 5064, 5065, 2510, 2557, 5140, 5141, 5142, 5143, 2583, 2618, 5176, 5177, 5178, 5179, 2690, 2763, 2850, 5210, 5211, 5212, 5213, 2913 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3019 ].indexOf(id) != -1) boost = 3;
            if([ 3020, 3021, 3007, 3009, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551 ].indexOf(id) != -1) boost = 2.5;
            if([ 3018, 3011, 3013, 3015, 2996, 2997, 2998, 3000, 3017, 2995, 3022, 2999, 3016, 3004, 3005, 2025, 2034, 2338, 2804, 2909, 2980, 2982, 2992, 2993, 2994, 603, 836, 1518, 2097, 2281, 2473, 2885, 2886, 2893, 2922, 2923, 2956, 779, 862, 1222, 1251, 1553, 1733, 2123, 2193, 2290, 2471, 2649, 2845, 2990, 666, 810, 1918, 2094, 2377, 2521, 1941, 2109, 2175, 2261, 2443, 2659, 2729, 2792, 2823, 2879, 2977, 2499, 2767, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952, 1808, 1853, 1889, 1916, 1972, 2000, 5012, 5013, 5014, 5015, 2064, 2211, 2137, 2299, 2336, 2362, 2387, 2469, 5062, 5063, 5064, 5065, 2510, 2557, 5140, 5141, 5142, 5143, 2583, 2618, 5176, 5177, 5178, 5179, 2690, 2763, 2850, 5210, 5211, 5212, 5213, 2913 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3019 ].indexOf(id) != -1) boost = 3;
            if([ 3020, 3021, 3007, 3009, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551 ].indexOf(id) != -1) boost = 2.5;
            if([ 3018, 3011, 3013, 3015, 2996, 2997, 2998, 3000, 3017, 2995, 3022, 2999, 3016, 3004, 3005, 2025, 2034, 2338, 2804, 2909, 2980, 2982, 2992, 2993, 2994, 603, 836, 1518, 2097, 2281, 2473, 2885, 2886, 2893, 2922, 2923, 2956, 779, 862, 1222, 1251, 1553, 1733, 2123, 2193, 2290, 2471, 2649, 2845, 2990, 666, 810, 1918, 2094, 2377, 2521, 1941, 2109, 2175, 2261, 2443, 2659, 2729, 2792, 2823, 2879, 2977, 2499, 2767, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952, 1808, 1853, 1889, 1916, 1972, 2000, 5012, 5013, 5014, 5015, 2064, 2211, 2137, 2299, 2336, 2362, 2387, 2469, 5062, 5063, 5064, 5065, 2510, 2557, 5140, 5141, 5142, 5143, 2583, 2618, 5176, 5177, 5178, 5179, 2690, 2763, 2850, 5210, 5211, 5212, 5213, 2913 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
	},

    'Treasure Map [Japan]': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 3197,
        id: 44, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3191, 3192, 3190, 3164, 3166, 3150 ].indexOf(id) != -1) boost = 2.5;
            //if([ 0 ].indexOf(id) != -1) boost = 1.3;
            if([ 3135, 5281, 5282, 3154, 3157, 3137, 3139, 3141, 3168, 3170, 3189, 3153, 3173, 3171, 3172, 3143, 3145, 3142, 3144, 1889, 1972, 2336, 2362, 2510, 2659, 2995, 3094, 3115, 3197 ].indexOf(id) != -1) boost = 1.25;
            if([ 2797, 3100, 3102, 3118, 3104, 3106, 603, 865, 1518, 1879, 2097, 2158, 2394, 2684, 2698, 2893, 2987, 1143, 1792, 1945, 2111, 2323, 2354, 2611, 2649, 2721, 2869, 2908, 2990, 3017, 3049, 3083, 848, 1650, 2044, 2087, 2521, 3124, 3107, 3108, 3109, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3191, 3192, 3190, 3164, 3166, 3150 ].indexOf(id) != -1) boost = 2.5;
            //if([ 0 ].indexOf(id) != -1) boost = 1.3;
            if([ 3135, 5281, 5282, 3154, 3157, 3137, 3139, 3141, 3168, 3170, 3189, 3153, 3173, 3171, 3172, 3143, 3145, 3142, 3144, 1889, 1972, 2336, 2362, 2510, 2659, 2995, 3094, 3115, 3197 ].indexOf(id) != -1) boost = 1.25;
            if([ 2797, 3100, 3102, 3118, 3104, 3106, 603, 865, 1518, 1879, 2097, 2158, 2394, 2684, 2698, 2893, 2987, 1143, 1792, 1945, 2111, 2323, 2354, 2611, 2649, 2721, 2869, 2908, 2990, 3017, 3049, 3083, 848, 1650, 2044, 2087, 2521, 3124, 3107, 3108, 3109, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3191, 3192, 3190, 3164, 3166, 3150 ].indexOf(id) != -1) boost = 2.5;
            //if([ 0 ].indexOf(id) != -1) boost = 1.3;
            if([ 3135, 5281, 5282, 3154, 3157, 3137, 3139, 3141, 3168, 3170, 3189, 3153, 3173, 3171, 3172, 3143, 3145, 3142, 3144, 1889, 1972, 2336, 2362, 2510, 2659, 2995, 3094, 3115, 3197 ].indexOf(id) != -1) boost = 1.25;
            if([ 2797, 3100, 3102, 3118, 3104, 3106, 603, 865, 1518, 1879, 2097, 2158, 2394, 2684, 2698, 2893, 2987, 1143, 1792, 1945, 2111, 2323, 2354, 2611, 2649, 2721, 2869, 2908, 2990, 3017, 3049, 3083, 848, 1650, 2044, 2087, 2521, 3124, 3107, 3108, 3109, 2936, 2938, 2940, 2942, 2944, 2946, 2948, 2950, 2952 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
    },
    
    '3 Stamina Ranking Missions - Shanks, Tony Tony Chopper and Jinbe': {
        description: 'Stats of certain units boosted.',
        thumb: 1700,
        id: 45, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },
	
	'Kizuna Clash [Global]': {
        description: 'Certain units boosted',
        thumb: 2999,
        id: 46, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2998, 2997, 2996, 2995, 2991, 2990, 2989, 2988, 2987, 2986, 2984, 2982, 2980, 2955 ].indexOf(id) != -1) boost = 2;
            if([ 2756, 2793, 2832, 2887, 2888, 2889 ].indexOf(id) != -1) boost = 1.5;
            if([ 2977, 2976, 2975, 2974, 2973, 2972, 2970, 2968, 2966, 2964, 2962, 2960, 2958, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2934, 2956, 2893, 2281, 2158, 2097, 2015, 1879, 1830, 1595, 1518, 1298, 2521, 2146, 2127, 2095, 2087, 2046, 1995, 1918, 1581, 899 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2998, 2997, 2996, 2995, 2991, 2990, 2989, 2988, 2987, 2986, 2984, 2982, 2980, 2955 ].indexOf(id) != -1) boost = 2;
            if([ 2756, 2793, 2832, 2887, 2888, 2889 ].indexOf(id) != -1) boost = 1.5;
            if([ 2977, 2976, 2975, 2974, 2973, 2972, 2970, 2968, 2966, 2964, 2962, 2960, 2958, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2934, 2956, 2893, 2281, 2158, 2097, 2015, 1879, 1830, 1595, 1518, 1298, 2521, 2146, 2127, 2095, 2087, 2046, 1995, 1918, 1581, 899 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2998, 2997, 2996, 2995, 2991, 2990, 2989, 2988, 2987, 2986, 2984, 2982, 2980, 2955 ].indexOf(id) != -1) boost = 2;
            if([ 2756, 2793, 2832, 2887, 2888, 2889 ].indexOf(id) != -1) boost = 1.5;
            if([ 2977, 2976, 2975, 2974, 2973, 2972, 2970, 2968, 2966, 2964, 2962, 2960, 2958, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2934, 2956, 2893, 2281, 2158, 2097, 2015, 1879, 1830, 1595, 1518, 1298, 2521, 2146, 2127, 2095, 2087, 2046, 1995, 1918, 1581, 899 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
	},
    
    'Blitz Battle! The Three Admirals': {
        description: 'Lot of units boosted',
        thumb: 1314,
        id: 47, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        }, 
    },
    
    'Blitz Battle! Straw Hat Pirates': {
        description: 'Lot of units boosted',
        thumb: 1404,
        id: 48, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
    },
    
    'Kizaru Neo [GLOBAL] - Free Spirit/Striker': {
        description: 'Chain multiplier reduced.',
        thumb: 1780,
        id: 49,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Striker': {
        description: 'Chain multiplier halved.',
        thumb: 1780,
        id: 50,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Powerhouse': {
        description: 'Chain multiplier locked at 1.1x after revive.',
        thumb: 1780,
        id: 51,
        chainLimiter: function() { return 1.1; } //Chain locked at 1.1x
    },
    
    'Strawhats 20th Anniversary Mission': {
        description: 'Stats of Strawhats boosted, 1.75x ATK, 1.75x HP, 1.5x RCV and Cooldown reduced by 7 turns at the start of the island.',
        thumb: 1753,
        id: 52,
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    'Rainbow Orbs': {
        description: 'Activates [RAINBOW] orb support even when Shirahoshi is not in the team',
        thumb: 1472,
        id: 53, // don't change this
        rainbowOrbsEnabled: true
    },
    
    'Blitz Battle! Doflamingo Family': {
        description: 'Lot of units boosted',
        thumb: 870,
        id: 54, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            //matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", "Sabo", "Dagama", "Jesus Burgess", "Diamante" ].indexOf(character) != -1;
            if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;
            if (matching) boost *= 1.5;
            return matching ? boost : 1;
        },
        hp: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        }, 
    },

    'Orb amplification (1.75x)': {
        description: 'Orb effects amplified by 1.75x',
        thumb: 1961,
        id: 55, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
    },

    '0.5x Chain Boost - Sanji Zoro Change Action': {
        description: 'Chain Boosted by 0.5x',
        thumb: 2000,
        id: 56, // don't change this
        chainAddition: function(p) { return 0.5 }
    },
    
    'Encourage the Soul': {
        description: 'Stats of Strawhats boosted, 1.5x ATK, 1.5x HP, 1.5x RCV and Cooldown reduced by 9 turns at the start of the island.',
        thumb: 1547,
        id: 57, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    '3 Stamina Ranking Missions - Ganfor, Mihawk and Blackbeard': {
        description: 'Stats of certain characters boosted.',
        thumb: 447,
        id: 58, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },
    
    'STR Orbs Beneficial': {
        description: 'Activates [STR] orb beneficial effects for all characters',
        thumb: 1313,
        id: 59, // don't change this
        strOrbsEnabled: true
    },
    
    '3 Stamina Ranking Missions - Wanda, Ivankov and Kyros': {
        description: 'Stats of certain characters boosted.',
        thumb: 1873,
        id: 60, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },
    
    'High Seas Pirate': {
        description: 'Stats of certain characters boosted.',
        thumb: 1984,
        id: 61, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    '3 Stamina Ranking Mission - Sanji': {
        description: 'Stats of certain units boosted',
        thumb: 912,
        id: 62, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Vinsmoke Judge", "Charlotte Cracker", "Charlotte Smoothie", "Charlotte Perospero", "Marco", "Donquixote Doflamingo", "Eneru", "Señor Pink", "Carrot", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Vinsmoke Judge", "Charlotte Cracker", "Charlotte Smoothie", "Charlotte Perospero", "Marco", "Donquixote Doflamingo", "Eneru", "Señor Pink", "Carrot", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Vinsmoke Judge", "Charlotte Cracker", "Charlotte Smoothie", "Charlotte Perospero", "Marco", "Donquixote Doflamingo", "Eneru", "Señor Pink", "Carrot", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },

    'World Clash': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 2407,
        id: 63, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2401, 2403, 2405 ].indexOf(id) != -1) boost = 1.5;
            if([ 253, 1041, 255, 257, 259, 979, 980, 983, 453, 455, 457, 946, 947, 948, 1182, 1528, 1186, 1188, 1190, 1270, 1509, 1510, 1511, 1606, 451, 981, 1184, 1272, 1512, 1607, 1222, 1276, 1278, 1602, 1608, 1700, 1798, 1989, 2037, 1047, 1492, 1972, 447, 1268, 575, 2025, 978, 2034, 1298, 2023, 1380, 2007, 1846, 1416, 1847, 2066, 408, 1927, 1345, 1593, 649, 1251, 1991, 1387 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2401, 2403, 2405 ].indexOf(id) != -1) boost = 1.5;
            if([ 253, 1041, 255, 257, 259, 979, 980, 983, 453, 455, 457, 946, 947, 948, 1182, 1528, 1186, 1188, 1190, 1270, 1509, 1510, 1511, 1606, 451, 981, 1184, 1272, 1512, 1607, 1222, 1276, 1278, 1602, 1608, 1700, 1798, 1989, 2037, 1047, 1492, 1972, 447, 1268, 575, 2025, 978, 2034, 1298, 2023, 1380, 2007, 1846, 1416, 1847, 2066, 408, 1927, 1345, 1593, 649, 1251, 1991, 1387 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2401, 2403, 2405 ].indexOf(id) != -1) boost = 1.5;
            if([ 253, 1041, 255, 257, 259, 979, 980, 983, 453, 455, 457, 946, 947, 948, 1182, 1528, 1186, 1188, 1190, 1270, 1509, 1510, 1511, 1606, 451, 981, 1184, 1272, 1512, 1607, 1222, 1276, 1278, 1602, 1608, 1700, 1798, 1989, 2037, 1047, 1492, 1972, 447, 1268, 575, 2025, 978, 2034, 1298, 2023, 1380, 2007, 1846, 1416, 1847, 2066, 408, 1927, 1345, 1593, 649, 1251, 1991, 1387 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
	},
    
    '3 Stamina Ranking Missions - Perospero, Tamago and Jack': {
        description: 'Stats of certain characters boosted.',
        thumb: 2175,
        id: 64, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Stussy", "Pedro", "Brook", "Hody Jones", "Kizaru", "Charlotte Oven", "Wanda", "Carina", "Charlotte Daifuku"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Stussy", "Pedro", "Brook", "Hody Jones", "Kizaru", "Charlotte Oven", "Wanda", "Carina", "Charlotte Daifuku"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Stussy", "Pedro", "Brook", "Hody Jones", "Kizaru", "Charlotte Oven", "Wanda", "Carina", "Charlotte Daifuku"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },

    '1.2x ATK Boost - Sengoku Garp Change Action': {
        description: '1.2x ATK boost for Fighters',
        thumb: 2552,
        id: 65, // don't change this
        atk: function(p) { return p.class.has('Fighter') ? 1.2 : 1; }
    },

    '1.25x Chain Multiplier - Sanji Judge Change Action': {
        description: 'Chain Boosted by 1.25x',
        thumb: 2446,
        id: 66, // don't change this
        chainAddition: function(p) { return 1.25 }
    },

    '1.2x ATK Boost - Neo Garp': {
        description: '1.2x ATK',
        thumb: 3340,
        id: 67, // don't change this
        atk: function(p) { return 1.2; }
    },
    
    '3 Stamina Ranking Missions - Bege, Buggy and Akainu': {
        description: 'Stats of certain units boosted.',
        thumb: 1298,
        id: 68, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Nefertari Vivi", "Portgas D. Ace", "Shanks", "Brook", "Sabo", "Pound", "Charlotte Linlin", "Charlotte Smoothie", "Charlotte Perospero", "Charlotte Cracker", "Charlotte Daifuku", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Nefertari Vivi", "Portgas D. Ace", "Shanks", "Brook", "Sabo", "Pound", "Charlotte Linlin", "Charlotte Smoothie", "Charlotte Perospero", "Charlotte Cracker", "Charlotte Daifuku", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Nefertari Vivi", "Portgas D. Ace", "Shanks", "Brook", "Sabo", "Pound", "Charlotte Linlin", "Charlotte Smoothie", "Charlotte Perospero", "Charlotte Cracker", "Charlotte Daifuku", ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },
    
    'Ordeal of the Blade': {
        description: 'Stats of certain units boosted.',
        thumb: 2475,
        id: 69, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ([ 77, 255, 308, 449, 455, 530, 639, 645, 677, 750, 914, 1033, 1081, 1125, 1129, 1173, 1182, 1186, 1188, 1175, 1230, 1234, 1236, 1238, 1276, 1278, 1322, 1324, 1410, 1436, 1481, 1534, 1536, 1573, 1575, 1577, 1654, 1614, 1796, 1753, 1800, 1759, 1881, 2505, 1873, 1875, 1877, 1921, 1989, 2001, 2242, 2306, 2031, 2034, 2080, 2082, 2332, 2185, 2189, 2117, 2119, 2107, 2336, 2338, 2346, 2372, 2338, 2371, 2418, 2465, 2475, 2477, 2479, 2481, 2483, 2485, 2496, 2498 ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ([ 77, 255, 308, 449, 455, 530, 639, 645, 677, 750, 914, 1033, 1081, 1125, 1129, 1173, 1182, 1186, 1188, 1175, 1230, 1234, 1236, 1238, 1276, 1278, 1322, 1324, 1410, 1436, 1481, 1534, 1536, 1573, 1575, 1577, 1654, 1614, 1796, 1753, 1800, 1759, 1881, 2505, 1873, 1875, 1877, 1921, 1989, 2001, 2242, 2306, 2031, 2034, 2080, 2082, 2332, 2185, 2189, 2117, 2119, 2107, 2336, 2338, 2346, 2372, 2338, 2371, 2418, 2465, 2475, 2477, 2479, 2481, 2483, 2485, 2496, 2498 ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ([ 77, 255, 308, 449, 455, 530, 639, 645, 677, 750, 914, 1033, 1081, 1125, 1129, 1173, 1182, 1186, 1188, 1175, 1230, 1234, 1236, 1238, 1276, 1278, 1322, 1324, 1410, 1436, 1481, 1534, 1536, 1573, 1575, 1577, 1654, 1614, 1796, 1753, 1800, 1759, 1881, 2505, 1873, 1875, 1877, 1921, 1989, 2001, 2242, 2306, 2031, 2034, 2080, 2082, 2332, 2185, 2189, 2117, 2119, 2107, 2336, 2338, 2346, 2372, 2338, 2371, 2418, 2465, 2475, 2477, 2479, 2481, 2483, 2485, 2496, 2498 ].indexOf(id) != -1);
            return !matching ? 1 : 1.25;
        },
    },

    '0.3x Chain Boost - Lucci Kaku Change Action': {
        description: 'Chain Boosted by 0.3x',
        thumb: 2538,
        id: 70, // don't change this
        chainAddition: function(p) { return 0.3 }
    },
    
    'Face Off! Luffy vs. Katakuri: Part 1': {
        description: 'Stats of certain units boosted.',
        thumb: 2363,
        id: 71, // don't change this
        atk: function(p) {
            var id = p.number + 1;
            var evolved = !(id in window.evolutions);
            var character = window.families[p.number];
            if(character) if(character.length == 2) var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[0]) != -1 || [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[1]) != -1;
            else var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character) != -1;
            if(character) if(character.length == 2) var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[0]) != -1 || [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[1]) != -1;
            else var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character) != -1;
            var criteria = p.stars >= 4 && p.maxLevel == 99;
            var specific1 = [ 2245, 2148, 1815, 2236, 2080, 2076, 2089, 2072, 2093, 2382 ].indexOf(id) != -1;
            var specific2 = [ 2074, 2363 ].indexOf(id) != -1;
            if ((matching2 && evolved) || specific2) return 1.5;
            if ((matching && criteria) || specific1) return 1.25;
            return 1;
        },
        hp: function(p) {
            var id = p.number + 1;
            var evolved = !(id in window.evolutions);
            var character = window.families[p.number];
            if(character) if(character.length == 2) var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[0]) != -1 || [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[1]) != -1;
            else var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character) != -1;
            if(character) if(character.length == 2) var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[0]) != -1 || [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[1]) != -1;
            else var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character) != -1;
            var criteria = p.stars >= 4 && p.maxLevel == 99;
            var specific1 = [ 2245, 2148, 1815, 2236, 2080, 2076, 2089, 2072, 2093, 2382 ].indexOf(id) != -1;
            var specific2 = [ 2074, 2363 ].indexOf(id) != -1;
            if ((matching2 && evolved) || specific2) return 1.5;
            if ((matching && criteria) || specific1) return 1.25;
            return 1;
        },
        rcv: function(p) {
            var id = p.number + 1;
            var evolved = !(id in window.evolutions);
            var character = window.families[p.number];
            if(character) if(character.length == 2) var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[0]) != -1 || [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character[1]) != -1;
            else var matching = [ "Capone Bege", "Charlotte Linlin", "Carrot", "Jinbe", "Vinsmoke Judge", "Vito", "Gotti", "Charlotte Smoothie", "Charlotte Daifuku", "Tamago", "Charlotte Amande", "Caesar Clown", "Aladdin", "Charlotte Praline", "Charlotte Perospero", "Charlotte Pudding", "Bobbin", "Charlotte Opera", "Charlotte Chiffon", "Wadatsumi", "Charlotte Cracker", "Pekoms", "Charlotte Brûlée", "Charlotte Oven", "Pedro" ].indexOf(character) != -1;
            if(character) if(character.length == 2) var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[0]) != -1 || [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character[1]) != -1;
            else var matching2 = [ "Charlotte Katakuri", "Charlotte Flampe", "Charlotte Mont-d'Or", "Streusen" ].indexOf(character) != -1;
            var criteria = p.stars >= 4 && p.maxLevel == 99;
            var specific1 = [ 2245, 2148, 1815, 2236, 2080, 2076, 2089, 2072, 2093, 2382 ].indexOf(id) != -1;
            var specific2 = [ 2074, 2363 ].indexOf(id) != -1;
            if ((matching2 && evolved) || specific2) return 1.5;
            if ((matching && criteria) || specific1) return 1.25;
            return 1;
        },
    },

    '1.5x Affinity Boost - Sabo Koala Change Action': {
        description: 'Affinity of Free Spirit and Cerebral by 1.5x',
        thumb: 2561,
        id: 72, // don't change this
        affinity: function(p) { return (p.class.has('Free Spirit') || p.class.has('Cerebral')) ? 1.5 : 1 }
    },
    
    'Meat Orbs': {
        description: 'Activates [RCV] orb support',
        thumb: 1652,
        id: 73, // don't change this
        meatOrbsEnabled: true
    },

    'Attack boost (1.75x)': {
        description: 'ATK of all units boosted by 1.75x',
        thumb: 2215,
        id: 74, // don't change this
        atk: function(p) { return 1.75; }
    },
    
    '3 Stamina Ranking Mission - Daifuku': {
        description: 'Stats of certain units boosted',
        thumb: 2244,
        id: 75, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Carrot", "Stussy", "Charlotte Opera", "Charlotte Bavarois", "Charlotte Galette", "Pedro" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Carrot", "Stussy", "Charlotte Opera", "Charlotte Bavarois", "Charlotte Galette", "Pedro" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Carrot", "Stussy", "Charlotte Opera", "Charlotte Bavarois", "Charlotte Galette", "Pedro" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },
    
    'Face Off! Akainu vs. Aokiji: Rematch': {
        description: 'Stats of certain units boosted.',
        thumb: 2769,
        id: 76, // don't change this
        atk: function(p) {
            var id = p.number + 1;
            var matching = 1;
            matching = ([ 2771, 2769 ].indexOf(id) != -1) ? 1.75 : matching;
            matching = ([ 595, 1298, 1314, 1192, 1280, 1283, 1665, 1669, 1713, 1826, 1849, 1764, 2023, 2025, 2405 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 2039, 2041, 32, 77, 232, 263, 306, 459, 530, 860, 804, 978, 1054, 1085, 1100, 1225, 1228, 1240, 1281, 1282, 1316, 1318, 1380, 1416, 1590, 1595, 1707, 1778, 1780, 1784, 1846, 1847, 1869, 1926, 1991, 1993, 2007, 2019, 2027, 2029, 2031, 2034, 2043, 2064, 2187, 2251, 2261, 2283, 2347, 2552, 5032, 5033, 5034, 5035, 3340, 2819, 5048, 5049, 5050, 5051 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 3359, 1126, 34, 44, 59, 68, 228, 229, 230, 265, 268, 297, 298, 299, 353, 355, 724, 770, 771, 772, 773, 774, 775, 783, 804, 806, 840, 974, 976, 1051, 1072, 1102, 1104, 1106, 1135, 1223, 1224, 1230, 1232, 1234, 1236, 1238, 1264, 1279, 1320, 1322, 1324, 1382, 1392, 1397, 1399, 1417, 1418, 1423, 1469, 1696, 1715, 1729, 2053, 2068, 1983, 5000, 5001, 5002, 5003, 2189, 2330, 2332, 2334, 2389 ].indexOf(id) != -1) ? 1.2 : matching;
            return matching;
        },
        hp: function(p) {
            var id = p.number + 1;
            var matching = 1;
            matching = ([ 2771, 2769 ].indexOf(id) != -1) ? 1.75 : matching;
            matching = ([ 595, 1298, 1314, 1192, 1280, 1283, 1665, 1669, 1713, 1826, 1849, 1764, 2023, 2025, 2405 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 2039, 2041, 32, 77, 232, 263, 306, 459, 530, 860, 804, 978, 1054, 1085, 1100, 1225, 1228, 1240, 1281, 1282, 1316, 1318, 1380, 1416, 1590, 1595, 1707, 1778, 1780, 1784, 1846, 1847, 1869, 1926, 1991, 1993, 2007, 2019, 2027, 2029, 2031, 2034, 2043, 2064, 2187, 2251, 2261, 2283, 2347, 2552, 5032, 5033, 5034, 5035, 3340, 2819, 5048, 5049, 5050, 5051 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 34, 44, 59, 68, 228, 229, 230, 265, 268, 297, 298, 299, 353, 355, 724, 770, 771, 772, 773, 774, 775, 783, 804, 806, 840, 974, 976, 1051, 1072, 1102, 1104, 1106, 1135, 1223, 1224, 1230, 1232, 1234, 1236, 1238, 1264, 1279, 1320, 1322, 1324, 1382, 1392, 1397, 1399, 1417, 1418, 1423, 1469, 1696, 1715, 1729, 2053, 2068, 1983, 5000, 5001, 5002, 5003, 2189, 2330, 2332, 2334, 2389 ].indexOf(id) != -1) ? 1.2 : matching;
            return matching;
        },
        rcv: function(p) {
            var id = p.number + 1;
            var matching = 1;
            matching = ([ 2771, 2769 ].indexOf(id) != -1) ? 1.75 : matching;
            matching = ([ 595, 1298, 1314, 1192, 1280, 1283, 1665, 1669, 1713, 1826, 1849, 1764, 2023, 2025, 2405 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 2039, 2041, 32, 77, 232, 263, 306, 459, 530, 860, 804, 978, 1054, 1085, 1100, 1225, 1228, 1240, 1281, 1282, 1316, 1318, 1380, 1416, 1590, 1595, 1707, 1778, 1780, 1784, 1846, 1847, 1869, 1926, 1991, 1993, 2007, 2019, 2027, 2029, 2031, 2034, 2043, 2064, 2187, 2251, 2261, 2283, 2347, 2552, 5032, 5033, 5034, 5035, 3340, 2819, 5048, 5049, 5050, 5051 ].indexOf(id) != -1) ? 1.5 : matching;
            matching = ([ 34, 44, 59, 68, 228, 229, 230, 265, 268, 297, 298, 299, 353, 355, 724, 770, 771, 772, 773, 774, 775, 783, 804, 806, 840, 974, 976, 1051, 1072, 1102, 1104, 1106, 1135, 1223, 1224, 1230, 1232, 1234, 1236, 1238, 1264, 1279, 1320, 1322, 1324, 1382, 1392, 1397, 1399, 1417, 1418, 1423, 1469, 1696, 1715, 1729, 2053, 2068, 1983, 5000, 5001, 5002, 5003, 2189, 2330, 2332, 2334, 2389 ].indexOf(id) != -1) ? 1.2 : matching;
            return matching;
        },
    },
	
	'Kizuna Clash [Japan]': {
        description: 'Certain units boosted',
        thumb: 3153,
        id: 77, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3149, 3151, 3152 ].indexOf(id) != -1) boost = 2.5;
            if([ 3154, 3150, 3145, 3143, 3142, 3141, 3139, 3137, 3135, 5283, 5284, 3124, 1268 ].indexOf(id) != -1) boost = 2;
            if([ 3121, 3120, 2998, 2997, 2996, 2889, 2888, 2887, 2853, 2832, 2793, 2756 ].indexOf(id) != -1) boost = 1.5;
            if([ 3118, 3106, 3104, 3102, 3100, 2987, 2956, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2923, 2922, 2886, 2885, 2281, 2158, 2019, 2015, 1997, 1855, 1815, 1812, 1564, 1108, 2146 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3149, 3151, 3152 ].indexOf(id) != -1) boost = 2.5;
            if([ 3154, 3150, 3145, 3143, 3142, 3141, 3139, 3137, 3135, 5283, 5284, 3124, 1268 ].indexOf(id) != -1) boost = 2;
            if([ 3121, 3120, 2998, 2997, 2996, 2889, 2888, 2887, 2853, 2832, 2793, 2756 ].indexOf(id) != -1) boost = 1.5;
            if([ 3118, 3106, 3104, 3102, 3100, 2987, 2956, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2923, 2922, 2886, 2885, 2281, 2158, 2019, 2015, 1997, 1855, 1815, 1812, 1564, 1108, 2146 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 3149, 3151, 3152 ].indexOf(id) != -1) boost = 2.5;
            if([ 3154, 3150, 3145, 3143, 3142, 3141, 3139, 3137, 3135, 5283, 5284, 3124, 1268 ].indexOf(id) != -1) boost = 2;
            if([ 3121, 3120, 2998, 2997, 2996, 2889, 2888, 2887, 2853, 2832, 2793, 2756 ].indexOf(id) != -1) boost = 1.5;
            if([ 3118, 3106, 3104, 3102, 3100, 2987, 2956, 2952, 2950, 2948, 2946, 2944, 2942, 2940, 2938, 2936, 2923, 2922, 2886, 2885, 2281, 2158, 2019, 2015, 1997, 1855, 1815, 1812, 1564, 1108, 2146 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },
	},
    
    '[和]/[Wano] Orbs': {
        description: 'Activates [WANO] orb support',
        thumb: 2802,
        id: 78, // don't change this
        wanoOrbsEnabled: true
    },
	
	'Girls of Summer Paradise! Blitz Battle': {
        description: 'Certain units boosted',
        thumb: 2626,
        id: 79, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2626 ].indexOf(id) != -1) boost = 2;
            if([ 2624, 2622, 2620, 2631, 2603, 2601, 5164, 5165, 5166, 5167, 5172, 5173, 5174, 5175 ].indexOf(id) != -1) boost = 1.75;
            if([ 2588, 2561, 5148, 5149, 5150, 5151, 2628, 2434, 2076, 2338, 5076, 1951, 1747, 1473, 1445, 416, 3361, 2217, 2215, 2213, 2191, 2173, 1731, 1729, 1711, 1709, 1674, 1214, 1201, 1199, 1194, 1161, 686, 685, 683, 681, 662, 514 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2626 ].indexOf(id) != -1) boost = 2;
            if([ 2624, 2622, 2620, 2631, 2603, 2601, 5164, 5165, 5166, 5167, 5172, 5173, 5174, 5175 ].indexOf(id) != -1) boost = 1.75;
            if([ 2588, 2561, 5148, 5149, 5150, 5151, 2628, 2434, 2076, 2338, 5076, 1951, 1747, 1473, 1445, 416, 3361, 2217, 2215, 2213, 2191, 2173, 1731, 1729, 1711, 1709, 1674, 1214, 1201, 1199, 1194, 1161, 686, 685, 683, 681, 662, 514 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2626 ].indexOf(id) != -1) boost = 2;
            if([ 2624, 2622, 2620, 2631, 2603, 2601, 5164, 5165, 5166, 5167, 5172, 5173, 5174, 5175 ].indexOf(id) != -1) boost = 1.75;
            if([ 2588, 2561, 5148, 5149, 5150, 5151, 2628, 2434, 2076, 2338, 5076, 1951, 1747, 1473, 1445, 416, 3361, 2217, 2215, 2213, 2191, 2173, 1731, 1729, 1711, 1709, 1674, 1214, 1201, 1199, 1194, 1161, 686, 685, 683, 681, 662, 514 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
	},
	
	'Beast Pirates! Blitz Battle': {
        description: 'Certain units boosted',
        thumb: 2700,
        id: 80, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2840, 2802, 5195, 5196, 5197, 5198 ].indexOf(id) != -1) boost = 2;
            if([ 2812 ].indexOf(id) != -1) boost = 1.5;
            if([ 2810, 2808, 2806, 2792, 2789, 2787, 2780, 2778, 2776, 2774, 2709, 2707, 2782, 2785, 2815, 2813, 2904, 2905, 2906, 2907 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2840, 2802, 5195, 5196, 5197, 5198 ].indexOf(id) != -1) boost = 2;
            if([ 2812 ].indexOf(id) != -1) boost = 1.5;
            if([ 2810, 2808, 2806, 2792, 2789, 2787, 2780, 2778, 2776, 2774, 2709, 2707, 2782, 2785, 2815, 2813, 2904, 2905, 2906, 2907 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2840, 2802, 5195, 5196, 5197, 5198 ].indexOf(id) != -1) boost = 2;
            if([ 2812 ].indexOf(id) != -1) boost = 1.5;
            if([ 2810, 2808, 2806, 2792, 2789, 2787, 2780, 2778, 2776, 2774, 2709, 2707, 2782, 2785, 2815, 2813, 2904, 2905, 2906, 2907 ].indexOf(id) != -1) boost = 1.3;
            return boost;
        },
	},
    
    'EMPTY Orbs': {
        description: 'Activates [EMPTY] orb support',
        thumb: 1652,
        id: 81, // don't change this
        emptyOrbsEnabled: true
    },

    '2.5x Chain Lock - Vivi Rebecca Change Action': {
        description: 'Limits chain multiplier to 2.5x',
        thumb: 2601,
        id: 82, // don't change this
        chainLimiter: function() { return 2.5; },
        chainAddition: function() { return 2.5; }
    },
    
    'Proof of "The World\s Strongest"': {
        description: 'Stats of certain units boosted.',
        thumb: 2672,
        id: 83, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2883 ].indexOf(id) != -1) boost = 2;
            if([ 2881, 2882 ].indexOf(id) != -1) boost = 1.75;
            if([ 2684, 2682, 2681, 2672, 2670, 2659, 2649 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },    
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2883 ].indexOf(id) != -1) boost = 2;
            if([ 2881, 2882 ].indexOf(id) != -1) boost = 1.75;
            if([ 2684, 2682, 2681, 2672, 2670, 2659, 2649 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },    
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2883 ].indexOf(id) != -1) boost = 2;
            if([ 2881, 2882 ].indexOf(id) != -1) boost = 1.75;
            if([ 2684, 2682, 2681, 2672, 2670, 2659, 2649 ].indexOf(id) != -1) boost = 1.25;
            return boost;
        },    
    },

    'Blitz Battle! Four Emperors': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 2734,
        id: 84, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2734 ].indexOf(id) != -1) boost = 2;
            if([ 2736, 2735, 2738 ].indexOf(id) != -1) boost = 1.75;
            if([ 2557, 5140, 5141, 5142, 5143, 2347, 2019, 2007, 1707, 1380, 2536, 5093, 5094, 5095, 2500, 2473, 2381, 2109, 2700, 2387, 2690, 2197, 1268, 2302, 2504, 1980, 1016, 365, 2477, 1921, 2097, 2525, 2707, 2534, 5086, 5087, 5088, 5089, 1922, 2001, 1751, 2709, 2336, 1581, 2672, 1985, 5008, 5009, 5010, 5011, 1916, 2087, 2519, 2245, 2148, 2919, 5180, 5181, 5182, 5183, 1961, 2459, 2523, 314, 781, 1865, 312, 1043, 2609, 1982, 359, 882, 361, 1091, 1857, 1855, 310, 2729, 1867, 831, 357, 2111, 1690, 2152, 1963, 2457 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2734 ].indexOf(id) != -1) boost = 2;
            if([ 2736, 2735, 2738 ].indexOf(id) != -1) boost = 1.75;
            if([ 2557, 5140, 5141, 5142, 5143, 2347, 2019, 2007, 1707, 1380, 2536, 5093, 5094, 5095, 2500, 2473, 2381, 2109, 2700, 2387, 2690, 2197, 1268, 2302, 2504, 1980, 1016, 365, 2477, 1921, 2097, 2525, 2707, 2534, 5086, 5087, 5088, 5089, 1922, 2001, 1751, 2709, 2336, 1581, 2672, 1985, 5008, 5009, 5010, 5011, 1916, 2087, 2519, 2245, 2148, 2919, 5180, 5181, 5182, 5183, 1961, 2459, 2523, 314, 781, 1865, 312, 1043, 2609, 1982, 359, 882, 361, 1091, 1857, 1855, 310, 2729, 1867, 831, 357, 2111, 1690, 2152, 1963, 2457 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2734 ].indexOf(id) != -1) boost = 2;
            if([ 2736, 2735, 2738 ].indexOf(id) != -1) boost = 1.75;
            if([ 2557, 5140, 5141, 5142, 5143, 2347, 2019, 2007, 1707, 1380, 2536, 5093, 5094, 5095, 2500, 2473, 2381, 2109, 2700, 2387, 2690, 2197, 1268, 2302, 2504, 1980, 1016, 365, 2477, 1921, 2097, 2525, 2707, 2534, 5086, 5087, 5088, 5089, 1922, 2001, 1751, 2709, 2336, 1581, 2672, 1985, 5008, 5009, 5010, 5011, 1916, 2087, 2519, 2245, 2148, 2919, 5180, 5181, 5182, 5183, 1961, 2459, 2523, 314, 781, 1865, 312, 1043, 2609, 1982, 359, 882, 361, 1091, 1857, 1855, 310, 2729, 1867, 831, 357, 2111, 1690, 2152, 1963, 2457 ].indexOf(id) != -1) boost = 1.5;
            return boost;
        },
	},

    '80% DEF reduction': {
        description: 'Reduces enemy DEF by 80%',
        thumb: 2853,
        id: 85, // don't change this
    },
};
