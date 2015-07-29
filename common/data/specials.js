window.specials = {
    18: { // Sanji Plastic Surgery Shot
        def: function(p) { return 0.5; }
    },
    24: { // Tony Tony Chopper Arm Point
        def: function(p) { return 0.5; }
    },
    34: { // Cabin Boy Helmeppo
        def: function(p) { return 0; }
    },
    127: { // Slasher Group Cabin Boy Blue Pirates
        def: function(p) { return 0.5; }
    },
    137: { // Shooter Group Cabin Boy Blue Pirates
        def: function(p) { return 0.5; }
    },
    148: { // Slasher Group Crew Blue Pirates
        def: function(p) { return 0.5; }
    },
    158: { // Shooter Group Crew Blue Pirates
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
    263: { // Petty Officer Coby
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    267: { // Rainbow Striped Dragon
        def: function(p) { return 0.5; }
    },
    275: { // Armed Slasher Unit Blue Pirates
        def: function(p) { return 0.5; }
    },
    285: { // Armed Shooter Unit Blue Pirates
        def: function(p) { return 0.5; }
    },
    295: { // Brontosaurus
        def: function(p) { return 0.5; }
    },
    309: { // Basil Hawkins
        def: function(p) { return 0.5; }
    },
    310: { // Basil Hawkins the Magician
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
    324: { // Kaku Dock One Carpentry Specialist
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    352: { // Zephyr
        atk: function(p) { return p.unit.class == "Shooter" ? 1.75 : 1; },
        type: 'class'
    },
    353: { // Zephyr NEO Navy Commander
        atk: function(p) { return p.unit.class == "Shooter" ? 1.75 : 1; },
        type: 'class'
    },
    382: { // Sandora Dragon
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
    400: { // Miss Doublefinger the Spike Human
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: 'type'
    },
    401: { // Mr. 1
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    402: { // Mr.1 the Fullbody Bladed Human
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    404: { // Absalom
        rcv: function(p) { return 2; }
    },
    405: { // Graveyeard Absalom
        rcv: function(p) { return 2; }
    },
    406: { // Zombie Shougun
        atk: function(p) { return 1.2; },
        type: 'all'
    },
    417: { // Donquixote Doflamingo
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    418: { // Donquixote Doflamingo the Shichibukai
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    419: { // Sanji Parage Shot - Arashi (Kimono)
        def: function(p) { return 0.5; }
    },
    423: { // Brook
        def: function(p) { return 0.5; }
    },
    424: { // Humming Brook
        def: function(p) { return 0.5; }
    },
    426: { // Masira
        atk: function(p) { return p.unit.type == "STR" ? 1.05 : 1; },
        type: 'type'
    },
    429: { // South Bird and the Forest Fauna
        def: function(p) { return 0.5; },
    },
    430: { // Bellamy
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    431: { // Bellamy the Hyena
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    434: { // Caroline
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    450: { // Namur
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        type: 'class'
    },
    451: { // One-Shot Namur
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        type: 'class'
    },
    454: { // Fossa
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: 'type'
    },
    455: { // Fossa the Flaming Blade
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: 'type'
    },
    458: { // Sengoku
        atk: function(p) { return 1.5; },
        type: 'type'
    },
    459: { // Sengoku the Buddha
        atk: function(p) { return 1.5; },
        type: 'type'
    },
    461: { // Fugitive Bentham Mr.2 Bon Clay
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    462: { // Prison Break Expert Mr.2 Bon Clay
        atk: function(p) { return p.unit.class == "Fighter" ? 1.25 : 1; },
        type: 'class'
    },
    465: { // Gedatsu
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    468: { // White Beret Force Yellow Group Skypiea God's Army
        rcv: function(p) { return 1.5; }
    },
    470: { // White Beret Force Yellow Group Commander Skypiea God's Army
        rcv: function(p) { return 1.5; }
    },
    487: { // Red Nomad Group Shandia Warrior
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    488: { // Blue Nomad Group Shandia Warrior
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    489: { // Green Nomad Group Shandia Warrior
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    490: { // Red Nomad Group Expert Shandia Warrior
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    491: { // Blue Nomad Group Expert Shandia Warrior
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    492: { // Green Nomad Group Expert Shandia Warrior
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    505: { // Pell
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    506: { // Pell, Alabasta's Guardian Falcon
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    509: { // The Strongest Prisoner Sir. Crocodile Mr.0, Former Leader of Baroque Works
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    510: { // The Strongest Prisoner Sir. Crocodile the Shichibukai
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        type: 'class'
    },
    511: { // Prisoner Daz Bonez Mr.1
        atk: function(p) { return p.unit.class == "Slasher" ? 1.25 : 1; },
        type: 'class'
    },
    514: { // Nico Robin Tropical
        def: function(p) { return 0.5; },
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    517: { // Usoppun
        atk: function(p) { return 1.05; },
        type: 'all'
    },
    518: { // Usoppun, Heracles' Pupil
        atk: function(p) { return 1.05; },
        type: 'all'
    },
    519: { // Monkey D. Luffy, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    520: { // Monkey D. Luffy, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    529: { // Shanks, Black Clothes and Red Hair (Strong World/SW)
        def: function(p) { return 0; }
    },
    530: { // Shanks, The Black-Clothed Yonkou (Strong World/SW)
        def: function(p) { return 0; }
    },
    533: { // Brook Cherry Head
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    534: { // Brook Sakura Color
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    542: { // Nola the Giant Snake
        rcv: function(p) { return 2; }
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
    550: { // Sadi-chan, Impel Down's Chief Guard
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'all'
    },
    559: { // Franky, Merveille's Adventurer (Strong World/SW)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    560: { // Franky, Strawhat Crew's Attack (Strong World/SW)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    568: { // Foxy
        def: function(p) { return 0.5; }
    },
    569: { // Foxy the Silver Fox
        def: function(p) { return 0.5; }
    },
    572: { // Usopp Davy Back Fight - Second
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; },
        type: 'class',
        onActivation: function(p) { p.tdata.lock = Math.max(1,p.tdata.lock); },
        onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
    },
    574: { // Aokiji
        atk: function(p) { return p.unit.class == "Striker" ? 1.75 : 1; },
        type: 'class'
    },
    575: { // Aokiji the Freezing Man
        atk: function(p) { return p.unit.class == "Striker" ? 1.75 : 1; },
        type: 'class'
    },
    576: { // Tea Time Nami
        rcv: function(p) { return 1.5; }
    },
    582: { // Kamakiri
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: 'type'
    },
    589: { // Kohza
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        type: 'class'
    },
    590: { // Kohza, Leader of the Rebel Army
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        type: 'class'
    },
    596: { // Tony Tony Chopper, Record of the Voyage - Strawhat Crew (Log Chopper)
        def: function(p) { return 0.5; }
    },
    597: { // Tony Tony Chopper, Dream of the Voyage - Greatest Doctor (Log Chopper)
        def: function(p) { return 0.5; }
    },
    600: { // Shanks the Pirate Apprentice
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: 'type'
    },
    601: { // Shanks of the Roger Pirates
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: 'type'
    },
    602: { // Enel - 200 Million Volt Thunder God
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: 'type'
    },
    603: { // Enel the Lightning Human - 200 Million Volt Thunder God
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: 'type'
    },
    612: { // Brook, Record of the Voyage - Strawhat Crew (Log Brook)
        atkStatic: function(p) { return 45; }, // TODO Implement me
        rcvStatic: function(p) { return 45; }
    },
    613: { // Brook, Dream of the Voyage - Promised Meeting (Log Brook)
        atkStatic: function(p) { return 45; }, // TODO Implement me
        rcvStatic: function(p) { return 45; }
    },
    614: { // Zanbai
        def: function(p) { return 0.5; }
    },
    617: { // Superhuman Destroyers, Cannon User
        atk: function(p) { return p.unit.class == "Shooter" ? 1.2 : 1; }
    },
    622: { // Pistol Hoodlum, Green Bounty Hunter
        rcvStatic: function(p) { return 100; }
    },
    632: { // Rob Lucci, Cipher Pol No.9
        def: function(p) { return 0.5; }
    },
    633: { // Rob Lucci Rokushiki, Cipher Pol No.9
        def: function(p) { return 0.5; }
    },
    634: { // Keimi
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: 'type'
    },
    635: { // Keimi, Takoyaki Stand Assistant
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: 'type'
    },
    637: { // Hatchan, Takoyaki Stand Owner
        // TODO boost atk by 1.3 if the enemy has a defense buff
        warning: 'Selected special (Hatchan, Takoyaki Stand) is not yet supported'
    },
    642: { // Squard
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    643: { // Maelstrom Spider Squard
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    644: { // Whitey Bay
        // TODO boost atk by 1.2 if the enemy is delayed
        warning: 'Selected special (Whitey Bay) is not yet supported'
    },
    645: { // Ice Witch Whitey Bay
        // TODO boost atk by 1.2 if the enemy is delayed
        warning: 'Selected special (Ice Witch Whitey Bay) is not yet supported'
    },
    648: { // Marco, Whitebeard Pirates' 1st Division Commander
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    649: { // Phoenix Marco, Whitebeard Pirates' 1st Division Commander
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    650: { // Nami, Record of the Voyage - Strawhat Crew (Log Nami)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    651: { // Nami, Dream of the Voyage - World Map (Log Nami)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    655: { // Pirate Arlong
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    656: { // Arlong of the Sun Pirates
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    660: {
        def: function(p) { return 0.5; }
    },
    661: {
        def: function(p) { return 0.5; }
    },
    665: { // Kohza, Alabasta Citizen
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'all'
    },
    666: { // Kohza, Leader of the Suna Suna Clan
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'all'
    }
};