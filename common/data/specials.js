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
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: 'class'
    },
    314: { // Mad Monk Urouge
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: 'class'
    },
    323: { // Kaku
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    324: { // Kaku Dock One Carpentry Specialist
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    352: { // Zephyr
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: 'class'
    },
    353: { // Zephyr NEO Navy Commander
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: 'class'
    },
    382: { // Sandora Dragon
        def: function(p) { return 0.5; }
    },
    385: { // Hogback
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: 'class'
    },
    386: { // Doctor Hogback
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: 'class'
    },
    391: { // Perona
        def: function(p) { return 0.2; }
    },
    392: { // Ghost Princess Perona
        def: function(p) { return 0.2; }
    },
    395: { // Miss Merry Christmas
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    396: { // Miss Merry Christmas Human Mole
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    399: { // Miss Doublefinger
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: 'type'
    },
    400: { // Miss Doublefinger Human Spike
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: 'type'
    },
    401: { // Mr. 1
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: 'class'
    },
    402: { // Mr. 1 Human Sword
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: 'class'
    },
    404: { // Absalom
        rcv: function(p) { return 2; }
    },
    405: { // Absalom of the Graveyard
        rcv: function(p) { return 2; }
    },
    406: { // General Zombie
        atk: function(p) { return 1.2; },
        type: 'type'
    },
    417: { // Donquixote Doflamingo
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    418: { // Donquixote Doflamingo Warlord of the Sea
        orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
    },
    419: { // Sanji Parage Shot - Arashi (Kimono Sanji)
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
    429: { // South Bird and Forest Residents
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
    450: { // Namule (Namur)
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: 'class'
    },
    451: { // One-Hit Namule (Namur)
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: 'class'
    },
    454: { // Fossa
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: 'type'
    },
    455: { // Fossa the Blazing Katana
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
    461: { // Fugitive Bentham Mr. 2 Bon Clay
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: 'class'
    },
    462: { // Prison Break Expert Mr. 2 Bon Clay
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: 'class'
    },
    465: { // Gedatsu
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    468: { // Yellow White Beret Skypiea Guard
        rcv: function(p) { return 1.5; }
    },
    470: { // Yellow White Beret Captain Skypiea Guard
        rcv: function(p) { return 1.5; }
    },
    487: { // Red Nomad Shandian Warrior
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    488: { // Blue Nomad Shandian Warrior
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    489: { // Green Nomad Shandian Warrior
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    490: { // Red Nomad Adept Shandian Warrior
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: 'type'
    },
    491: { // Blue Nomad Adept Shandian Warrior
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: 'type'
    },
    492: { // Green Nomad Adept Shandian Warrior
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: 'type'
    },
    505: { // Pell
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    506: { // Pell The Guardian Falcon of Alabasta
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: 'type'
    },
    509: { // The Strongest Prisoner, Sir Crocodile Mr. 0, Former CEO of Baroque Works
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: 'class'
    },
    510: { // The Strongest Prisoner, Sir Crocodile Warlord of the Sea
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: 'class'
    },
    511: { // Prisoner Daz Bonez Mr. 1
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: 'class'
    },
    514: { // Nico Robin Tropical
        def: function(p) { return 0.5; },
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    517: { // Usoppun
        atk: function(p) { return 1.05; },
        type: 'type'
    },
    518: { // Usoppun, Heracles' Pupil
        atk: function(p) { return 1.05; },
        type: 'type'
    },
    519: { // Monkey D. Luffy, Merveille's Adventurer (Strong World Luffy)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    520: { // Monkey D. Luffy, Straw Hat Pirates' Attack (Strong World Luffy)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: 'type'
    },
    529: { // Shanks, Black Clothes and Red Hair (Strong World Shanks)
        def: function(p) { return 0; }
    },
    530: { // Shanks, The Black-Clothed Yonkou (Strong World Shanks)
        def: function(p) { return 0; }
    },
    533: { // Brook Cherry Blossom Hair
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    534: { // Brook Cherry Blossom Melody
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
        type: 'condition'
    },
    550: { // Sadi-chan, Impel Down's Chief Guard
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'condition'
    },
    559: { // Franky, Merveille's Adventurer (Strong World Franky)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    560: { // Franky, Straw Hat Pirates' Attack (Strong World Franky)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    568: { // Foxy
        def: function(p) { return 0.5; }
    },
    569: { // Foxy the Silver Fox
        def: function(p) { return 0.5; }
    },
    572: { // Usopp Davy Back Fight - Second
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        type: 'class',
        onActivation: function(p) { p.tdata.lock = Math.max(1,p.tdata.lock); },
        onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
    },
    574: { // Aokiji
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: 'class'
    },
    575: { // Aokiji the Freezing Man
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: 'class'
    },
    576: { // Tea Time Nami
        rcv: function(p) { return 1.5; }
    },
    582: { // Kamakiri
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: 'type'
    },
    589: { // Koza
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: 'class'
    },
    590: { // Koza Rebel Leader
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: 'class'
    },
    596: { // Tony Tony Chopper Voyage Log: Straw Hat Pirates (Log Chopper)
        def: function(p) { return 0.5; }
    },
    597: { // Tony Tony Chopper Voyage Dream: Great Doctor (Log Chopper)
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
    612: { // Brook Voyage Log: Straw Hat Pirates (Log Brook)
        atkStatic: function(p) { return 45; }, // TODO Implement me
        rcvStatic: function(p) { return 45; }
    },
    613: { // Brook Voyage Dream: Promised Meeting (Log Brook)
        atkStatic: function(p) { return 45; }, // TODO Implement me
        rcvStatic: function(p) { return 45; }
    },
    614: { // Zanbai
        def: function(p) { return 0.5; }
    },
    617: { // Superhuman Destroyers, Cannon User
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
        type: 'class'
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
        atk: function(p) { return 1.3; },
        type: 'condition',
        warning: 'Selected special (Hatchan, Takoyaki Stand) assumes that the enemy has a defense buff active.'
    },
    642: { // Squard
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    643: { // Maelstrom Spider Squard
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    644: { // Whitey Bay
        atk: function(p) { return 1.2; },
        type: 'condition',
        warning: 'Selected special (Whitey Bay) assumes that the enemy has been delayed.'
    },
    645: { // Ice Witch Whitey Bay
        atk: function(p) { return 1.2; },
        type: 'condition',
        warning: 'Selected special (Ice Witch Whitey Bay) assumes that the enemy has been delayed.'
    },
    648: { // Marco, Commander of the 1st Division of the Whitebeard Pirates
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    649: { // Phoenix Marco, Commander of the 1st Division of the Whitebeard Pirates
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    650: { // Nami Voyage Log: Straw Hat Pirates (Log Nami)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    651: { // Nami Voyage Dream: World Map (Log Nami)
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
    },
    655: { // Pirate Arlong
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    656: { // Arlong of the Sun Pirates
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    660: { // Usopp Voyage Log: Straw Hat Pirates (Log Usopp)
        def: function(p) { return 0.5; }
    },
    661: { // Usopp Voyage Dream: Brave Warrior of the Sea (Log Usopp)
        def: function(p) { return 0.5; }
    },
    665: { // Koza, Alabasta Citizen
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'condition'
    },
    666: { // Koza, Leader of the Suna Suna Clan
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: 'condition'
    },
    668: { // Sabo
        atk: function(p) { return !p.unit.class.has('Freedom') ? 1 : window.specials[668].multiplier; },
        type: 'class',
        onActivation: function(p) {
            var n = (window.specials[668].multiplier == 1.5 ? 1 : 0);
            window.specials[668].multiplier = [1.5,2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5,2][n] + 'x ATK multiplier. To switch to the ' +
                    [2,1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '667warning'
            });
        }
    },
    669: { // Sabo the Revolutionary
        atk: function(p) { return !p.unit.class.has('Freedom') ? 1 : window.specials[669].multiplier; },
        type: 'class',
        onActivation: function(p) {
            var n = (window.specials[669].multiplier == 1.5 ? 1 : 0);
            window.specials[669].multiplier = [1.5,2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5,2][n] + 'x ATK multiplier. To switch to the ' +
                    [2,1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '668warning'
            });
        }
    },
    670: { // Koala
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: 'class'
    },
    671: { // Koala the Revolutionary
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: 'class'
    },
    680: { // Ice Cream Loving Nami
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: 'type'
    },
    681: { // Lemon Ice Cream Loving Nami
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: 'type'
    },
    687: { // Calgara
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.3 : 1; },
        type: 'class'
    },
    688: { // Calgara, the Great Warrior of Shandia
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.3 : 1; },
        type: 'class'
    },
    689: { // Montblanc Noland
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    690: { // Montblanc Noland, Explorer and Admiral of the Lvneel Kingdom
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
    },
    710: { // Franky Voyage Log: Straw Hat Pirates (Log Franky)
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: 'class'
    },
    711: { // Franky Voyage Dream: A Ship to Sail Around the World (Log Franky)
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: 'class'
    },
    712: { // Gan Fall
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: 'class'
    },
    713: { // Gan Fall the Knight of the Sky
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: 'class'
    },
    715: { // Konis
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
        type: 'class'
    },
    716: { // Konis, Skypiean Maiden
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
        type: 'class'
    },
    719: { // Sir Crocodile Logia Warlord of the Sea
        atk: function(p) { return p.unit.class.has("Knowledge") ? window.specials[719].multiplier : 1; },
        type: 'class',
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[719].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '719warning'
            });
        }
    },
    720: { // Sir Crocodile Logia Former Warlord of the Sea
        atk: function(p) { return p.unit.class.has("Knowledge") ? window.specials[720].multiplier : 1; },
        type: 'class',
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[720].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '720warning'
            });
        }
    },
    727: { // Monkey D. Luffy Gum-Gum Gatling
        def: function(p) { return 0.5; }
    },
    730: { // Jabra, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    731: { // Jabra Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: 'type'
    },
    732: { // Fukuro, Cipher Pol No.9
        def: function(p) { return 0.5; }
    },
    733: { // Fukuro Rokushiki, Cipher Pol No.9
        def: function(p) { return 0.5; }
    },
    740: { // Nero
        atk: function(p) { return 1.3; },
        type: 'condition',
        warning: 'Selected special (Nero) assumes that the enemy has a defense buff active.'
    },
    741: { // Nero, Cipher Pol No.9
        atk: function(p) { return 1.3; },
        type: 'condition',
        warning: 'Selected special (Nero, Cipher Pol No.9) assumes that the enemy has a defense buff active.'
    },
    742: { // Wanze
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    743: { // Wanze, Cipher Pol No.7
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
    },
    753: { // Jabra, CP9's Dark Justice
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    754: { // Jabra, CP9's Strongest Generation
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    755: { // Blueno, CP9's Dark Justice
        atk: function(p) { return p.unit.class.has("Tough") ? 1.75 : 1; },
        type: 'class'
    },
    756: { // Blueno, CP9's Strongest Generation
        atk: function(p) { return p.unit.class.has("Tough") ? 1.75 : 1; },
        type: 'class'
    },
    761: { // Monkey D. Luffy Halloween Monster (Halloween Luffy)
        atk: function(p) { return 1.2; },
        type: 'type'
    },
    762: { // Usopp Lying Wolf (Halloween Usopp)
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: 'type'
    },
    770: { // Dalmatian, Navy HQ Vice Admiral
        atk: function(p) { return 1.3; },
        type: 'condition',
        warning: 'Selected special (Dalmatian, Navy Headquarters Vice Admiral) assumes that the enemy has been delayed.'
    },
    771: { // Momonga, Navy HQ Vice Admiral
        atk: function(p) { return p.unit.class.has("Knowledge") ? 1.75 : 1; },
        type: 'type'
    },
    780: { // Urouge, Captain of the Fallen Monk Pirates
        atk: function(p) {
            return p.slot == p.sourceSlot ? window.specials[780].multiplier : 1;
        },
        type: 'type',
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[780].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x multiplier.',
                name: '780warning'
            });
        }
    },
    781: { // Mad Monk Urouge, Captain of the Fallen Monk Pirates
        atk: function(p) {
            return p.slot == p.sourceSlot ? window.specials[781].multiplier : 1;
        },
        type: 'type',
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[781].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x multiplier.',
                name: '781warning'
            });
        }
    },
    788: { // Kuina
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: 'class',
    },
    789: { // Kuina, Shimotsuki Village's Girl Swordsman
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: 'class',
    },
    790: { // Tamanegi, Piiman & Ninjin
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: 'type',
    },
    791: { // Tamanegi, Piiman & Ninjin, the Usopp Pirates
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: 'type',
    },
    796: { // Breed
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: 'type',
    },
    797: { // Breed, User of the Peto-Peto Fruit
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: 'type',
    },
    798: { // Kung Fu Dugong, Sea Animal Pirates
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: 'class'
    },
    803: { // Hina, Navy HQ Captain
        atk: function(p) { return 1.1; },
        type: 'type'
    },
    804: { // Black Cage Hina, Navy HQ Captain
        atk: function(p) { return 1.1; },
        type: 'type'
    },
    805: { // Smoker, Navy HQ Captain
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    },
    806: { // Smoker the White Hunter, Navy HQ Captain
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); },
    }
};
