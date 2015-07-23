window.captains = {
    2: { // Gum-Gum Pistol Luffy
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    3: { // Gum-Gum Bazooka Luffy
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    4: { // Gear Second Luffy
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    5: { // Roronoa Zoro
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    6: { // 3k Worlds Zoro
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    7: { // Zoro Pound Phoenix
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    8: { // Zoro Ashura
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    10: { // Nami Tornado Tempo
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    11: { // Nami Mirage Tempo
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    12: { // Nami Thunderbolt Tempo
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    13: { // Usopp
        atk: function(p) { return p.unit.class == "SHOOTER" ? 1.2 : 1; }
    },
    14: { // Usopp Tabasco Star
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    15: { // GPU
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    16: { // Sogeking
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    17: { // Sanji
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    18: { // Sanji Plastic Sugery Shot
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    19: { // Sanji Hot Rock Stew
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    20: { // Sanji Diable Jambe
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    21: { // Chopper
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    22: { // Chopper Heavy Point
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    23: { // Chopper Brain Point
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    24: { // Chopper Arm Point
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    25: { // Chopper Horn Point
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    26: { // Chopper Guard Point
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    27: { // Higuma
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    28: { // Master of the Near Sea
        atk: function(p) { return p.unit.class == "Fighter" ? 1.2 : 1; }
    },
    35: { // Axe-Hand morgan
        hp: function(p) { return p.unit.class == "Slasher" ? 1.2 : 1; }
    },
    36: { // Mohji & Richie
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    37: { // Cabaji
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    38: { // Buggy
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    39: { // Buggy the Clown
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    41: { // Siam
        rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }  
    },
    42: { // Siam
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    45: { // Kuro
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    46: { // Kuro of a Hundred Plans
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    49: { // Iron Fist Fullbody
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    52: { // Chef Zeff
        atk: function(p) { return p.unit.class == "Fighter" ? 2.5 : 1; }
    },
    59: { // Nezumi
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    60: { // Momoo
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    61: { // Choo
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    62: { // Kuroobi
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    65: { // Arlong
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    66: { // Enraged Arlong Shark On Tooth
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    67: { // Tashigi
        rcv: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }  
    },
    68: { // Tashigi evolved
        rcv: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }  
    },
    74: { // Portgas D. Ace
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    75: { // Portgas D. Ace Flame Mirror
        atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1; }
    },
    76: { // Shanks
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    77: { // Red-Haired Shanks
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
    },
    194: { // Fodder
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    195: { // Fodder
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    196: { // Fodder
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    198: { // Fodder
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    199: { // Mr. 5 Nez-Palm Cannon
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    200: { // Mr. 5 Breeze Breath Bomb
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    201: { // Miss Valentine
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    202: { // Miss Valentine 10,000 Kilo Guillotine
        hp: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    205: { // Miss Goldenweek
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    206: { // Miss Goldenweek Colors Trap: Calming Green
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    209: { // Nico Robin
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }  
    },
    210: { // Nico Robin evolved
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }  
    },
    211: { // Mr. 9
        atk: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; }
    },
    212: { // Mr. 9
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    215: { // Neptunian Squid
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    217: { // Monkey D. Luffy Gear Third
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 3.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ], // don't remove this
    },
    220: { // Nami Fine Tempo
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    221: { // Towel Nami
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    222: { // Usopp Usopp Hammer
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    223: { // Usopp Impact
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    224: { // Mr. Prince Mutton Shot
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect" ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    225: { // Mr. Prince Veau Shot
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect" ]) ? 2.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    226: { // Dracule Mihawk
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    227: { // Hawk Eyes Mihawk
        atk: function(p) { return p.unit.class == "Slasher" ? 2.5 : 1; }
    },
    228: { // Escapee Morgan
        hp: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    230: { // Double Ironfist Fullbody
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    231: { // Hina
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    232: { // Black Cage Hina
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    233: { // Mr. 8
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    234: { // Mr. 8 Igarappapa
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    235: { // Miss Monday
        atk: function(p) { return p.unit.class == "Fighter" ? 1.2 : 1; }
    },
    236: { // Miss Monday Superhuman Brass Knuckles
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    248: { // Monster Point
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
    },
    249: { // Monster Choper
        atk: function(p) { return p.unit.type == "STR" ? 3 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
    },
    250: { // Marco
        atk: function(p) { return p.unit.type == "PSY" && p.percHP == 100.0 ? 3 : 1; }
    },
    251: { // Marco the Phoenix
        atk: function(p) { return p.unit.type == "PSY" && p.percHP == 100.0 ? 3 : 1; }
    },
    252: { // Jozu
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    253: { // Diamond Jozu
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
    },
    254: { // Vista
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    255: { // Flower Sword Vista
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    256: { // Izo
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    257: { // Flintlock Pistols Izo
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    258: { // Blamenco
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    259: { // Blamenco the Mallet
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    260: { // Edward Newgate
        atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    261: { // Whitebeard
        atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    263: { // Sergeant Major Coby
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    265: { // Sergeant Helmeppo
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    267: { // Rainbow dragon
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    290: { // Mr. 13 & Miss Friday - Friday the Thirteenth (The Unluckies)
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    293: { // Triceratops
        hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    294: { // Rex
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    295: { // Brontosaurus
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    296: { // Otsuru-san
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    297: { // Great Staff Tsuru
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    298: { // Momonga
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    299: { // Onigumo
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    305: { // Monkey D. Garp
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    306: { // Garp the Fist
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    307: { // Trafalgar Law
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    308: { // Trafalgar Law ROOM
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
    },
    311: { // Killer
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Miss", "Miss", "Miss" ]) ? 3.5 : 1;
        },
        hitModifiers: [ 'Miss', 'Miss', 'Miss', 'Perfect', 'Perfect', 'Perfect' ]
    },
    312: { // Massacre Soldier Killer
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Miss", "Miss", "Miss" ]) ? 3.5 : 1;
        },
        hitModifiers: [ 'Miss', 'Miss', 'Miss', 'Perfect', 'Perfect', 'Perfect' ]
    },
    313: { // Urouge
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    314: { // Mad Monk Urouge
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    315: { // Bepo
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    316: { // Martial Artist Bepo
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    319: { // Paulie
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    320: { // Paulie evolved
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    321: { // Rob Lucci
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    322: { // Rob Lucci evolved
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    323: { // Kaku
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    324: { // Kaku evolved
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    328: { // Dalton
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }  
    },
    329: { // Dalton evolved
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }  
    },
    332: { // Chessmarino
        atk: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; }
    },
    333: { // Dr.Kureha
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    336: { // Franky
        atk: function(p) { return p.percHP < 50.0 ? 1 : (p.unit.type == "PSY" ? 2 : 0.8); }
    },
    337: { // Wrecking Yard Franky
        atk: function(p) { return p.percHP < 50.0 ? 1 : (p.unit.type == "PSY" ? 2.5 : 0.8); }
    },
    340: { // Kraken Surume
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    341: { // Kraken Arctic Monster
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    352: { // Zephyr
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    353: { // Zephyr NEO
        atk: function(p) { return p.unit.class == "Shooter" ? 2.5 : 1; }
    },
    356: { // Eustass Kid
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    357: { // Eustass Kid
        atk: function(p) { return p.unit.class == "Striker" ? 2.5 : 1; }
    },
    358: { // Apoo
        atk: function(p) { return p.unit.type == "DEX" && p.percHP == 100.0 ? 2.5 : 1; }
    },
    359: { // Apoo evolved
        atk: function(p) { return p.unit.type == "DEX" && p.percHP == 100.0 ? 3 : 1; }
    },
    360: { // Drake
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    361: { // Drake evolved
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    362: { // Bonnie
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    363: { // Bonnie evolved
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    364: { // Capone Bege
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    365: { // Capone Gang Bege
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    366: { // Rayleigh
        chainModifier: function(p) { return 4; }
    },
    367: { // Rayleigh evolved
        chainModifier: function(p) { return 4; }
    },
    373: { // Fodder
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    374: { // Fodder
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    375: { // Fodder
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    376: { // Fodder
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    377: { // Fodder
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    378: { // Umineko
        rcv: function(p) { return 1.5; }
    },
    380: { // Kung-fu Dugong Fellow Pupils
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    383: { // Mr.0 - Baroque Works Leader
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    384: { // Sir Crocodile
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    385: { // Hogback
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    386: { // Hogback evolved
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    387: { // Cindry
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    388: { // Cindry evolved
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    389: { // Emporio Ivankov
        damageSorter: function(d) {
            return d.okamaSort([ 'STR', 'DEX', 'QCK' ]);
        },
        hitAtk: function(p) {
            return p.damage.slice(0,p.chainPosition).okamaCheck(p.modifiers,[
                { type: 'STR', minModifier: 'Good' },
                { type: 'DEX', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    390: { // Emporio Ivankov evolved
        damageSorter: function(d) {
            return d.okamaSort([ 'STR', 'DEX', 'QCK' ]);
        },
        hitAtk: function(p) {
            return p.damage.slice(0,p.chainPosition).okamaCheck(p.modifiers,[
                { type: 'STR', minModifier: 'Good' },
                { type: 'DEX', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2.75 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    391: { // Perona
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    392: { // Perona evolved
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    395: { // Miss Merry Christmas
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    396: { // Miss Merry Christmas evolved
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    397: { // Mr.4
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition)
                .subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 3 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    398: { // Mr.4 evolved
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition)
                .subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    399: { // Miss Doublefinger
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    400: { // Miss Doublefinger evolved
        hp: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    401: { // Mr.1
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 0.9; } // TODO Check debuff amount
    },
    402: { // Mr.1 evolved
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 0.9; } // TODO Check debuff amount
    },
    403: { // Rebecca
        rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; } // TODO Double check the HP
    },
    404: { // Absalom
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    405: { // Absalom evolved
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    408: { // Crocodile evolved v2
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    409: { // Jinbei
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    410: { // Jinbei evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2.5 : 1; }
    },
    411: { // Kuma
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    412: { // Kuma evolved
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    413: { // Gekko Moriah
        atk: function(p) { return p.unit.type == "INT" && p.percHP == 100.0 ? 2.5 : 1; }
    },
    414: { // Gekko Moriah evolved
        atk: function(p) { return p.unit.type == "INT" && p.percHP == 100.0 ? 3 : 1; }
    },
    415: { // Boa Hancock
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
        rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
    },
    416: { // Boa Hancock evolved
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
        rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
    },
    417: { // Doflamingo
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    418: { // Doflamingo evolved
        hp: function(p) { return p.unit.class == "Slasher" ? 2 : 1; },
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    419: { // Sanji Kimono
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    420: { // Luffy Kimono
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    421: { // Zoro Kimono
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    422: { // Nami Kimono
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    424: { // Brook evolved
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    425: { // Ryuuma
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    426: { // Masira
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    427: { // Shoujou
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    428: { // Montblanc
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    430: { // Bellamy
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    431: { // Bellamy evolved
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    433: { // Elizabeth
        damageSorter: function(d) {
            return d.okamaSort([ 'QCK', 'STR', 'DEX' ]);
        },
        hitAtk: function(p) {
            return p.damage.slice(0,p.chainPosition).okamaCheck(p.modifiers,[
                { type: 'QCK', minModifier: 'Good' },
                { type: 'STR', minModifier: 'Good' },
                { type: 'DEX', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    434: { // Caroline
        damageSorter: function(d) {
            return d.okamaSort([ 'PSY', 'INT', 'INT' ]);
        },
        hitAtk: function(p) {
            return p.damage.slice(0,p.chainPosition).okamaCheck(p.modifiers,[
                { type: 'PSY', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    435: { // Okama Sanji
        damageSorter: function(d) {
            return d.okamaSort([ 'INT', 'PSY', 'QCK' ]);
        },
        hitAtk: function(p) {
            return p.damage.slice(0,p.chainPosition).okamaCheck(p.modifiers,[
                { type: 'INT', minModifier: 'Good' },
                { type: 'PSY', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    437: { // v2 Perona
        rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; } // TODO Double check the HP
    },
    438: { // v2 Perona evolved
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; } // TODO Double check the HP
    },
    444: { // Carue
        atk: function(p) { return p.percHP <= 30.0 && p.unit.class == "PowerUp" ? 2 : 1; } // TODO Double check the HP
    },
    445: { // Duck squad
        atk: function(p) { return p.percHP <= 30.0 && p.unit.class == "PowerUp" ? 2.5 : 1; } // TODO Double check the HP
    },
    446: { // Marshall D. Teach
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    447: { // Blackbeard
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
    },
    448: { // Thatch
        atk: function(p) { return p.unit.type == "QCK" && p.percHP == 100.0 ? 3 : 1; }
    },
    449: { // Thatch evolved
        atk: function(p) { return p.unit.type == "QCK" && p.percHP == 100.0 ? 3 : 1; }
    },
    450: { // Namur
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; },
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    451: { // Namur evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; },
        hp: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    452: { // Rakuyo
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    453: { // Rakuyo evolved
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    454: { // Fossa
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    455: { // Fossa evolved
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    456: { // Curiel
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    457: { // Curiel evolved
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    458: { // Sengoku
        atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
    },
    459: { // Sengoku evolved
        atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
    },
    461: { // Fugitive Bentham Mr.2
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    462: { // Fugitive Bentham Mr.2 evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    463: { // Satori
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    464: { // Shura
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    465: { // Gedatsu
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Miss", "Miss", "Miss", "Miss" ]) ? 3 : 1;
        },
        hitModifiers: [ 'Miss', 'Miss', 'Miss', 'Miss', 'Perfect', 'Perfect' ]
    },
    466: { // Braham
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    467: { // Yama
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    470: { // Fodder
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    471: { // Fodder
        atk: function(p) { return p.unit.type == "INT" ? 1.2: 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    482: { // Fodder
        hp: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; }
    },
    483: { // Fodder
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    485: { // Fodder
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    486: { // Fodder
        atk: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; }
    },
    490: { // Fodder
        atk: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.2 : 1; }
    },
    491: { // Fodder
        rcv: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
    },
    492: { // Fodder
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    496: { // Fodder
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    497: { // Kid Ace
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    498: { // Kid Ace evolved
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    499: { // Bellmere
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    500: { // Bellmere evolved
        rcv: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    501: { // Kaya
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    502: { // Kaya evolved
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    503: { // Hotori Kotori
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    504: { // Hotori Kotori evolved
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    507: { // Chaka
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    508: { // Chaka evolved
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    509: { // Prisoner Crocodile
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    510: { // Prisoner Crocodile evolved
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    511: { // Prisoner Mr.1
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    513: { // Kid Sabo evolved
        atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 50.0 ? 1.5 : 1; }
    },
    514: { // Tropical Robin
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    515: { // Heracles
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    516: { // Heracles evolved
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    517: { // Usoppun
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    518: { // Usoppun evolved
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    519: { // SW Luffy
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    520: { // SW Luffy evolved
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
    },
    523: { // Butt Nami
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    524: { // Butt Nami evolved
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; },
        rcv: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    525: { // SW Brook
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    526: { // SW Brook evolved
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    527: { // SW Chopper
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    528: { // SW Chopper evolved
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    529: { // SW Shanks
        atk: function(p) {
            return p.percHP == 100.0 ? 2.75 :
                   p.percHP >= 80.0  ? 2.6  :
                   p.percHP >= 50.0  ? 2.37 :
                   p.percHP >= 20.0  ? 2.15 :
                                       2;
        }
    },
    530: { // SW Shanks evolved
        atk: function(p) {
            return p.percHP == 100.0 ? 2.75 :
                   p.percHP >= 80.0  ? 2.6  :
                   p.percHP >= 50.0  ? 2.37 :
                   p.percHP >= 20.0  ? 2.15 :
                                       2;
        }
    },
    533: { // Sakura Brook
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    534: { // Sakura Brook evolved
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    535: { // Sakura Nami
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    536: { // Sakura Nami evolved
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    537: { // Domino
        chainModifier: function(p) { return 2; }
    },
    538: { // Domino evolved
        chainModifier: function(p) { return 2; }
    },
    541: { // Ohm
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 50.0 ? 2.5 : 1; }
    },
    542: { // Bigass snake
        hp: function(p) { return 1.5; }
    },
    543: { // Wiper
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        rcv: function(p) { return 0; }
    },
    544: { // Wiper evolved
        atk: function(p) { return p.unit.class == "Shooter" ? 2.25 : 1; },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        rcv: function(p) { return 0; }
    },
    545: { // Enel
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    546: { // God Enel
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    548: { // Kid Luffy evolved
        atk: function(p) { return 1.2; }
    },
    549: { // Sadi-chan
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    550: { // Sadi-chan evolved
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    553: { // SW Zoro
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    554: { // SW Zoro evolved
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
    },
    555: { // SW Usopp
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; }
    },
    556: { // SW Usopp evolved
        atk: function(p) { return p.unit.class == "Shooter" ? 2 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    557: { // SW Robin
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    558: { // SW Robin evolved
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    559: { // SW Franky
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    560: { // SW Franky evolved
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
    },
    561: { // SW Ace
        atk: function(p) { return p.unit.class != "Shooter" ? 1 : (p.orb == 2.0 ? 3 : 2); },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
    },
    562: { // SW Ace evolved
        atk: function(p) { return p.unit.class != "Shooter" ? 1 : (p.orb == 2.0 ? 3 : 2); },
        hp: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
    },
    568: { // Foxy
        atk: function(p) { return 1.25; },
        hp: function(p) { return 1.25; },
        rcv: function(p) { return 1.25; }
    },
    569: { // Foxy evolved
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    570: { // Afro Luffy
        atk: function(p) {
            return p.unit.class == "Fighter" && p.unit.type == "STR" ? 2.25 :
                   p.unit.type == "STR" || p.unit.class == "Fighter" ? 1.5  :
                                                                       1;
        }
    },
    571: { // Afro Luffy evolved
        atk: function(p) {
            return p.unit.class == "Fighter" && p.unit.type == "STR" ? 2.25 :
                   p.unit.type == "STR" || p.unit.class == "Fighter" ? 1.5  :
                                                                       1;
        }
    },
    572: { // DBF Usopp
        atk: function(p) { return p.unit.class == "Fighter" && p.percHP == 100.0 ? 2.5 : 1; }
    },
    573: { // DBF Chopper
        rcv: function(p) { return 1.2; }
    },
    574: { // Aokiji
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    575: { // Aokiji evolved
        atk: function(p) { return p.unit.class == "Striker" ? 2 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 2 : 1; }
    },
    576: { // Tea Time Nami
        atk: function(p) { return 1.5; },
        rcv: function(p) { return 1.2; }
    },
    577: { // Record of Voyage Luffy
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Good', 'Great', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]
    },
    578: { // Dream of Voyage Luffy
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Good', 'Great', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]
    },
    579: { // Record of Voyage Zoro
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 1.5 : 1; }
    },
    580: { // Dream of Voyage Zoro
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 2 : 1; }
    },
    581: { // Genbou
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    582: { // Kamakiri
        atk: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; },
        hp: function(p) { return p.unit.class == "Striker" ? 1.5 : 1; }
    },
    583: { // Laki
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    584: { // Aisa
        // TODO Find parameters
    },
    585: { // Nojiko
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    586: { // Nojiko evolved
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    589: { // Kohza
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.75; }, // TODO needs checking
        rcv: function(p) { return 0.75; } // TODO needs checking
    },
    590: { // Kohza evolved
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.75; }, // TODO needs checking
        rcv: function(p) { return 0.75; } // TODO needs checking
    },
    596: { // Log Chopper
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    597: { // Log Chopper evolved
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    598: { // Apprentice Buggy
        atk: function(p) { return p.unit.stars < 3 ? 2.5 : 1; }
    },
    599: { // Apprentice Buggy evolved
        atk: function(p) { return p.unit.stars < 3 ? 3 : 1; }
    },
    600: { // Apprentice Shanks
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    601: { // Apprentice Shanks evolved
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    602: { // v2 Enel
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    603: { // v2 Enel evolved
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
    },
    604: { // Log Sanji
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    605: { // Log Sanji evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    606: { // v2 Zeff
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class == "Fighter" ? 2 : 1; }
    },
    607: { // v2 Zeff evolved
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class == "Fighter" ? 2.5 : 1; }
    },
    612: { // Log Brook
        hp: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    613: { // Log Brook evolved
        hp: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    614: { // Zanbai
        atk: function(p) { return p.unit.cost <= 20 && p.percHP <= 50.0 ? 2.25 : 1; } // TODO Double check the HP
    },
    629: { // WS Franky
        atk: function(p) { return p.unit.stars <= 3 ? 2 : 1; }
    },
    630: { // WS Kaku
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    631: { // WS Kaku evolved
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    632: { // WS Lucci
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    633: { // WS Lucci evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    634: { // Keimi
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; }
    },
    635: { // Keimi evolved
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    636: { // Pappug
        atk: function(p) { return p.unit.cost <= 2 ? 3 : 1; }
    },
    637: { // v2 Hatchan
        atk: function(p) { return p.unit.class == "Slasher" ? 1.5 : 1; }
    },
    638: { // Doma
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    639: { // Doma evolved
        atk: function(p) { return p.unit.class == "Slasher" ? 2 : 1; }
    },
    640: { // Decalvan Brothers
        atk: function(p) { return p.unit.class == "Fighter" ? 2 : 1; }
    },
    641: { // Decalvan Brothers evolved
        atk: function(p) { return p.unit.class == "Fighter" ? 2.25 : 1; }
    },
    642: { // Squard
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 2.5 : 1; } // TODO Double check the HP
    },
    643: { // Squard evolved
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 3 : 1; } // TODO Double check the HP
    },
    644: { // Whitey Bay
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    645: { // Whitey Bay evolved
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    646: { // Little Oars Jr.
        atk: function(p) { return p.unit.class == "Shooter" && p.percHP <= 30.0 ? 2.5 : 1; } // TODO Double check the HP
    },
    647: { // Little Oars Jr. evolved
        atk: function(p) { return p.unit.class == "Shooter" && p.percHP <= 30.0 ? 2.75 : 1; } // TODO Double check the HP
    },
    648: { // v2 Marco
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; } // TODO Double check the HP
    },
    649: { // v2 Marco evolved
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; } // TODO Double check the HP
    },
    650: { // Log Nami
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    651: { // Log Nami evolved
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    652: { // base Duval
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2 : 1); },
    },
    653: { // lv2 Duval
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.25 : 1); },
    },
    654: { // lv3 Duval
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.75 : 1); },
    },
    655: { // Young Arlong
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    656: { // Young Arlong evolved
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    657: { // Young Kuroobi
        atk: function(p) { return p.unit.class == "Fighter" ? 1.5 : 1; }
    },
    658: { // Young Choo
        atk: function(p) { return p.unit.class == "Shooter" ? 1.5 : 1; }
    },
    659: { // Swim Ring Luffy
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ], // don't remove this
    }
};
