window.specials = {
    18: { // Sanji Plastic Sugery Shot
        def: function(p) { return 0.5; }
    },
    24: { // Tony Tony Chopper Arm Point
        def: function(p) { return 0.5; }
    },
    34: { // Cabin Boy Helmeppo
        def: function(p) { return 0; }
    },
    127: { // Fodder
        def: function(p) { return 0.5; }
    },
    137: { // Fodder
        def: function(p) { return 0.5; }
    },
    148: { // Fodder
        def: function(p) { return 0.5; }
    },
    158: { // Fodder
        def: function(p) { return 0.5; }
    },
    206: { // Miss Goldenweek Colors Trap: Calming Green
        def: function(p) { return 0.5; }
    },
    209: { // Miss All Sunday Baroque Works VP
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    210: { // Nico Robin
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        type: 'type'
    },
    222: { // Usopp Usopp Hammer
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: 'type'
    },
    223: { // Usopp Impact
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        type: 'type'
    },
    263: { // Sergeant Major Coby
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    267: { // Rainbow Dragon
        def: function(p) { return 0.5; }
    },
    275: { // Fodder
        def: function(p) { return 0.5; }
    },
    285: { // Fodder
        def: function(p) { return 0.5; }
    },
    295: { // Brontosaurus
        def: function(p) { return 0.5; }
    },
    309: { // Basil Hawkins
        def: function(p) { return 0.5; }
    },
    310: { // Basil Hawkins evolved
        def: function(p) { return 0.5; }
    },
    313: { // Urouge
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    314: { // Mad Monk Urouge
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    323: { // Kaku
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    324: { // Kaku evolved
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    352: { // Zephyr
        atk: function(p) { return p.unit.class == "Shooter" ? 1.75 : 1; },
        type: 'class'
    },
    353: { // Zephyr NEO
        atk: function(p) { return p.unit.class == "Shooter" ? 1.75 : 1; },
        type: 'class'
    },
    382: { // Fodder
        def: function(p) { return 0.5; }
    },
    385: { // Hogback
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    386: { // Doctor Hogback
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    391: { // Perona
        def: function(p) { return 0; }
    },
    392: { // Ghost Princess Perona
        def: function(p) { return 0; }
    },
    395: { // Miss Merry Christmas
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    399: { // Miss Doublefinger
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: 'type'
    },
    400: { // Miss Doublefinger evolved
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: 'type'
    },
    401: { // Mr.1
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    402: { // Mr.1 evolved
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    406: { // Shougun Zombie
        atk: function(p) { return 1.2; },
        type: 'all'
    },
    417: { // Doflamingo
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    418: { // Doflamingo evolved
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    419: { // Kimono Sanji
        def: function(p) { return 0.5; }
    },
    423: { // Brook
        def: function(p) { return 0.5; }
    },
    424: { // Brook evolved
        def: function(p) { return 0.5; }
    },
    426: { // Masira
        atk: function(p) { return p.unit.type == "STR" ? 1.05 : 1; },
        type: 'type'
    },
    429: { // South Bird
        def: function(p) { return 0.5; },
    },
    430: { // Bellamy
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    431: { // Bellamy evolved
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    434: { // Caroline
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    450: { // Namur
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        type: 'class'
    },
    451: { // Namur evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        type: 'class'
    },
    454: { // Fossa
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: 'type'
    },
    455: { // Fossa evolved
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: 'type'
    },
    458: { // Sengoku
        atk: function(p) { return 1.5; },
        type: 'type'
    },
    459: { // Sengoku evolved
        atk: function(p) { return 1.5; },
        type: 'type'
    },
    461: { // Fugitive Bentham Mr.2
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    462: { // Fugitive Bentham Mr.2 evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    465: { // Gedatsu
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    487: { // Fodder
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    488: { // Fodder
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    489: { // Fodder
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    490: { // Fodder
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    491: { // Fodder
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    492: { // Fodder
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    505: { // Pell
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    506: { // Pell evolved
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    509: { // Prisoner Crocodile
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    510: { // Prisoner Crocodile evolved
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    511: { // Prisoner Mr.1
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    514: { // Tropical Robin
        def: function(p) { return 0.5; },
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    517: { // Usoppun
        atk: function(p) { return 1.05; },
        type: 'all'
    },
    518: { // Usoppun evolved
        atk: function(p) { return 1.05; },
        type: 'all'
    },
    519: { // SW Luffy
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    520: { // SW Luffy evolved
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    529: { // SW Shanks
        def: function(p) { return 0; }
    },
    530: { // SW Shanks evolved
        def: function(p) { return 0; }
    },
    533: { // Sakura Brook
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    534: { // Sakura Brook evolved
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    545: { // Enel
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: 'type'
    },
    546: { // God Enel
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: 'type'
    },
    549: { // Sadi-chan
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'all'
    },
    550: { // Sadi-chan evolved
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'all'
    },
    559: { // SW Franky
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    560: { // SW Franky evolved
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    568: { // Foxy
        def: function(p) { return 0.5; }
    },
    569: { // Foxy evolved
        def: function(p) { return 0.5; }
    },
    572: { // DBF Usopp
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; },
        type: 'class'
    },
    574: { // Aokiji
        atk: function(p) { return p.unit.class == "Striker" ? 1.75 : 1; },
        type: 'class'
    },
    575: { // Aokiji evolved
        atk: function(p) { return p.unit.class == "Striker" ? 1.75 : 1; },
        type: 'class'
    },
    582: { // Kamakiri
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: 'type'
    },
    589: { // Kohza
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        type: 'class'
    },
    590: { // Kohza evolved
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        type: 'class'
    },
    596: { // Log Chopper
        def: function(p) { return 0.5; }
    },
    597: { // Log Chopper evolved
        def: function(p) { return 0.5; }
    },
    600: { // Apprentice Shanks
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: 'type'
    },
    601: { // Apprentice Shanks evolved
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: 'type'
    },
    602: { // v2 Enel
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: 'type'
    },
    603: { // v2 Enel evolved
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: 'type'
    },
    614: { // Zanbai
        def: function(p) { return 0.5; }
    },
    617: { // Fodder
        atk: function(p) { return p.unit.class == "Shooter" ? 1.2 : 1; }
    },
    632: { // WS Lucci
        def: function(p) { return 0.5; }
    },
    633: { // WS Lucci evolved
        def: function(p) { return 0.5; }
    }
};
