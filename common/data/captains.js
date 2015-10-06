window.captains = {
    2: { // Monkey D. Luffy Gum-Gum Pistol
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    3: { // Monkey D. Luffy Gum-Gum Bazooka
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    4: { // Monkey D. Luffy Gear 2
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    5: { // Roronoa Zoro
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    6: { // Roronoa Zoro Three Thousand Worlds
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    7: { // Roronoa Zoro Pound Phoenix
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    8: { // Roronoa Zoro Ashura Ichibugin
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
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
    },
    14: { // Usopp Tabasco Star
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    15: { // Usopp Golden Pound (GPU)
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    16: { // Sogeking
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    17: { // Sanji
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    18: { // Sanji Plastic Surgery Shot
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    19: { // Chef Sanji Hot Rock Stew
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    20: { // Sanji Diable Jambe Flambe
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    21: { // Tony Tony Chopper
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    22: { // Tony Tony Chopper Heavy Point
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    23: { // Tony Tony Chopper Brain Point
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    24: { // Tony Tony Chopper Arm Point
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    25: { // Tony Tony Chopper Horn Point
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    26: { // Tony Tony Chopper Guard Point
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    27: { // Higuma
        hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    28: { // Master of the Near Sea
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    35: { // Axe-Hand Morgan
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    36: { // Mohji & Richie
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    37: { // Cabaji the Acrobat
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
    42: { // Butchie
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    45: { // Captain Kuro
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    46: { // Kuro of a Hundred Plans
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    49: { // Iron Fist Fullbody
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    52: { // Chef Zeff
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    59: { // Nezumi
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    60: { // Momoo
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    61: { // Choo
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    62: { // Kuroobi
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    65: { // Arlong
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    66: { // Enraged Arlong Shark On Tooth
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    67: { // Tashigi
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }  
    },
    68: { // Tashigi Navy HQ Ensign
        rcv: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }  
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
    194: { // Knuckle Ensign Navy HQ
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    195: { // Saber Ensign Navy HQ
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    196: { // Halberd Ensign Navy HQ
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    198: { // Bazooka Ensign Navy HQ
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    199: { // Mr. 5 Nez-Palm Cannon
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    200: { // Mr. 5 Breeze Breath Bomb
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    201: { // Miss Valentine
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    202: { // Miss Valentine 10,000 Kilo Guillotine
        hp: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    205: { // Miss Goldenweek
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    206: { // Miss Goldenweek Colors Trap: Calming Green
        hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    209: { // Miss All Sunday Baroque Works VP
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }  
    },
    210: { // Nico Robin
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }  
    },
    211: { // Mr. 9
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    212: { // Mr. 9 Hot Blooded Bat
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    215: { // Neptunian Squid
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
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
    221: { // Nami Happiness Punch (Towel Nami)
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
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    227: { // Hawk Eyes Mihawk
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
    },
    228: { // Escapee Morgan
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
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
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
    },
    236: { // Miss Monday Superhuman Brass Knuckles
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    248: { // Tony Tony Chopper Pre-Rampage (Monster Chopper)
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
    },
    249: { // Tony Tony Chopper Post-Rampage (Monster Chopper)
        atk: function(p) { return p.unit.type == "STR" ? 3 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
    },
    250: { // Marco
        atk: function(p) { return p.unit.type == "PSY" && p.percHP > 99.0 ? 3 : 1; }
    },
    251: { // Marco the Phoenix
        atk: function(p) { return p.unit.type == "PSY" && p.percHP > 99.0 ? 3 : 1; }
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
    263: { // Petty Officer Coby
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    265: { // Sergeant Helmeppo
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    267: { // Rainbow Striped Dragon
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    290: { // Mr. 13 & Ms. Friday The Unluckies
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
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
    296: { // Tsuru
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    297: { // Great Advisor Tsuru
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
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
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good" ]) ? 3.5 : 1;
        },
        hitModifiers: [ 'Below Good', 'Below Good', 'Below Good', 'Perfect', 'Perfect', 'Perfect' ]
    },
    312: { // Massacre Soldier Killer
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good" ]) ? 3.5 : 1;
        },
        hitModifiers: [ 'Below Good', 'Below Good', 'Below Good', 'Perfect', 'Perfect', 'Perfect' ]
    },
    313: { // Urouge
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    314: { // Mad Monk Urouge
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    315: { // Bepo
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    316: { // Bepo the Martial Artist
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    319: { // Paulie
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    320: { // Paulie Dock One Foreman/Mast Specialist
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    321: { // Rob Lucci
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    322: { // Rob Lucci Dock One Sawyer, Treenail Specialist
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    323: { // Kaku
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    324: { // Kaku Dock One Carpentry Specialist
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    328: { // Dalton
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }  
    },
    329: { // Dalton Bison
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }  
    },
    332: { // Chessmarimo
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    333: { // Dr. Kureha
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    336: { // Franky
        atk: function(p) { return p.percHP < 50.0 ? 1 : (p.unit.type == "PSY" ? 2 : 0.8); }
    },
    337: { // Dismantler Franky
        atk: function(p) { return p.percHP < 50.0 ? 1 : (p.unit.type == "PSY" ? 2.5 : 0.8); }
    },
    340: { // Kraken Surume
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    341: { // Kraken Arctic Monster
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    352: { // Zephyr
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    353: { // Zephyr NEO Navy Commander
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
    },
    356: { // Eustass Kid
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    357: { // Captain Kid
        atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
    },
    358: { // Scratchmen Apoo
        atk: function(p) { return p.unit.type == "DEX" && p.percHP > 99.0 ? 2.5 : 1; }
    },
    359: { // Roar of the Sea Scratchmen Apoo
        atk: function(p) { return p.unit.type == "DEX" && p.percHP > 99.0 ? 3 : 1; }
    },
    360: { // X Drake
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    361: { // Red Flag X Drake
        atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
    },
    362: { // Jewelry Bonney
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    363: { // Big Eater Jewelry Bonney
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
    366: { // Silvers Rayleigh
        chainModifier: function(p) { return 4; }
    },
    367: { // Dark King Rayleigh
        chainModifier: function(p) { return 4; }
    },
    373: { // Giant Imperial Slasher Red Pirates
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    374: { // Giant Imperial Shooter Blue Pirates
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    375: { // Female Giant Imperial Warrior Green Pirates
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    376: { // Giant Imperial Fighter Yellow Pirates
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    377: { // Giant Imperial Striker Black Pirates
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    378: { // Sea Cat
        rcv: function(p) { return 1.5; }
    },
    380: { // Kung Fu Dugong Faithful Apprentice
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    383: { // Mr. 0 Baroque Works CEO (Crocodile)
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    384: { // Sir Crocodile
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    385: { // Hogback
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    386: { // Doctor Hogback
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    387: { // Cindry-chan
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    388: { // Victoria Cindry
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    389: { // Emporio Ivankov
        damageSorter: function(d) {
            return CrunchUtils.okamaSort(d, [ 'DEX', 'INT', 'QCK' ]);
        },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
                { type: 'DEX', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    390: { // Emporio Ivankov, Queen of Kamabakka Kingdom
        damageSorter: function(d) {
            return CrunchUtils.okamaSort(d, [ 'DEX', 'INT', 'QCK' ]);
        },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
                { type: 'DEX', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2.75 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    391: { // Perona
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    392: { // Ghost Princess Perona
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    395: { // Miss Merry Christmas
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    396: { // Miss Merry Christmas the Mole Human
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    397: { // Mr. 4
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition)
                .subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 3 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    398: { // Mr. 4 & Lassoo the Dog Gun
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition)
                .subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    399: { // Miss Doublefinger
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    400: { // Miss Doublefinger the Spike Human
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    401: { // Mr. 1
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    402: { // Mr. 1 the Fullbody Bladed Human
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    403: { // Rebecca
        rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    404: { // Absalom
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    405: { // Graveyeard Absalom
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    408: { // Sir Crocodile the Shichibukai
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    409: { // Jinbei
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    410: { // Jinbei the Shichibukai
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    411: { // Bartholomew Kuma
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    412: { // Bartholomew Kuma the Shichibukai
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    413: { // Gekko Moriah
        atk: function(p) { return p.unit.type == "INT" && p.percHP > 99.0 ? 2.5 : 1; }
    },
    414: { // Gekko Moriah the Shichibukai
        atk: function(p) { return p.unit.type == "INT" && p.percHP > 99.0 ? 3 : 1; }
    },
    415: { // Boa Hancock
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
        rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
    },
    416: { // Boa Hancock the Shichibukai
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
        rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
    },
    417: { // Donquixote Doflamingo
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    418: { // Donquixote Doflamingo the Shichibukai
        hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    419: { // Sanji Parage Shot - Arashi (Kimono)
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    420: { // Monkey D. Luffy Gomu Gomu no Bazooka - Arashi (Kimono)
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    421: { // Roronoa Zoro Three Thousand Worlds - Arashi (Kimono)
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    422: { // Nami Mirage Tempo - Arashi (Kimono)
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    424: { // Humming Brook
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    425: { // Ryuuma
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    426: { // Masira
        hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    427: { // Shoujou
        hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    428: { // Montblanc Cricket
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    430: { // Bellamy
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    431: { // Bellamy the Hyena
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    433: { // Elizabeth
        damageSorter: function(d) {
            return CrunchUtils.okamaSort(d, [ 'QCK', 'STR', 'DEX' ]);
        },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
                { type: 'QCK', minModifier: 'Good' },
                { type: 'STR', minModifier: 'Good' },
                { type: 'DEX', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    434: { // Caroline
        damageSorter: function(d) {
            return CrunchUtils.okamaSort(d, [ 'PSY', 'INT', 'INT' ]);
        },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
                { type: 'PSY', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' },
                { type: 'INT', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    435: { // Sanji - Traditional Kamabakka Kingdom Duel Style
        damageSorter: function(d) {
            return CrunchUtils.okamaSort(d, [ 'INT', 'PSY', 'QCK' ]);
        },
        hitAtk: function(p) {
            return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
                { type: 'INT', minModifier: 'Good' },
                { type: 'PSY', minModifier: 'Good' },
                { type: 'QCK', minModifier: 'Good' }
            ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    437: { // Perona Sweet
        rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
    },
    438: { // Perona Sweet Ghost Princees
        rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
    },
    444: { // Carue
        atk: function(p) { return p.percHP >= 70.0 && p.unit.class.has("Booster") ? 2 : 1; }
    },
    445: { // Captain Carue & The Super Spot-Billed Duck Squad
        atk: function(p) { return p.percHP >= 70.0 && p.unit.class.has("Booster") ? 2.5 : 1; }
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
        atk: function(p) { return p.unit.type == "QCK" && p.percHP > 99.0 ? 3 : 1; }
    },
    449: { // Thatch of the Twin Blade
        atk: function(p) { return p.unit.type == "QCK" && p.percHP > 99.0 ? 3 : 1; }
    },
    450: { // Namur
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    451: { // One-Shot Namur
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    452: { // Rakuyo
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    453: { // Rakuyo of the Morning Star
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    454: { // Fossa
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    455: { // Fossa the Flaming Blade
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    456: { // Curiel
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    457: { // Curiel the Heavy Weapon Specialist
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    458: { // Sengoku
        atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
    },
    459: { // Sengoku the Buddha
        atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
    },
    461: { // Fugitive Bentham Mr. 2 Bon Clay
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    462: { // Prison Break Expert Mr. 2 Bon Clay
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    463: { // Satori
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    464: { // Shura
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    465: { // Gedatsu
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good", "Below Good" ]) ? 3 : 1;
        },
        hitModifiers: [ 'Below Good', 'Below Good', 'Below Good', 'Below Good', 'Perfect', 'Perfect' ]
    },
    466: { // Braham
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    467: { // Yama
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    470: { // White Beret Force Yellow Group Commander Skypiea God's Army
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    471: { // White Beret Force Black Group Commander Skypiea God's Army
        atk: function(p) { return p.unit.type == "INT" ? 1.2: 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    482: { // Red Elite Assult Squad Skypiea God's Army
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    483: { // Blue Elite Assult Squad Skypiea God's Army
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
    },
    485: { // Yellow Elite Assult Squad Skypiea God's Army
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    486: { // Black Elite Assult Squad Skypiea God's Army
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    490: { // Red Nomad Group Expert Shandia Warrior
        atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
    },
    491: { // Blue Nomad Group Expert Shandia Warrior
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
    },
    492: { // Green Nomad Group Expert Shandia Warrior
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    496: { // Black Hunting Group Expert Shandia Warrior
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    497: { // Portgas D. Ace Mt. Corvo's Brothers 3
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    498: { // Portgas D. Ace Mt. Corvo's Brothers 3, Cup of Sworn Brotherhood
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
    },
    499: { // Bellmere
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    500: { // Bellmere - Nami's and Nojiko's Mother
        rcv: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    501: { // Kaya
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    502: { // Kaya, Lady of Syrup's Village
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    503: { // Hotori Kotori
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    504: { // Hotori Kotori - Lieutenants of God's Army
        hp: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    507: { // Chaka
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
    },
    508: { // Chaka, Alabasta's Guardian Jackal
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    509: { // The Strongest Prisoner, Sir Crocodile Mr. 0, Former CEO of Baroque Works
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    510: { // The Strongest Prisoner, Sir Crocodile the Shichibukai
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    511: { // Prisoner Daz Bonez Mr. 1
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    513: { // Sabo Mt. Corvo's Brothers 3, Cup of Sworn Brotherhood
        atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 50.0 ? 1.5 : 1; }
    },
    514: { // Nico Robin Tropical
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    515: { // Heracles 
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    516: { // Heracles the Hero of the Forest
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    517: { // Usoppun
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    518: { // Usoppun, Heracles' Pupil
        hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
    },
    519: { // Monkey D. Luffy, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    520: { // Monkey D. Luffy, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
    },
    523: { // Nami, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    524: { // Nami and Billy the Thunder Bird (Strong World/SW)
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    525: { // Brook, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    526: { // Brook, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    527: { // Chopper, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    528: { // Chopper, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    529: { // Shanks, Black Clothes and Red Hair (Strong World/SW)
        atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
    },
    530: { // Shanks, The Black-Clothed Yonkou (Strong World/SW)
        atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
    },
    533: { // Brook Cherry Head
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    534: { // Brook Sakura Color
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    535: { // Nami Sakura Cloud
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    536: { // Nami Sakura Weather
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    537: { // Domino
        chainModifier: function(p) { return 2; }
    },
    538: { // Domino, Impel Down's Head Jailer
        chainModifier: function(p) { return 2; }
    },
    541: { // Ohm
        atk: function(p) { return p.unit.type == "STR" && p.percHP <= 50.0 ? 2.5 : 1; }
    },
    542: { // Nola the Giant Snake
        hp: function(p) { return 1.5; }
    },
    543: { // Wiper
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return 0; }
    },
    544: { // Wiper, Descendant of the Great Calgara
        atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return 0; }
    },
    545: { // Enel
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    546: { // God Enel
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    548: { // Monkey D. Luffy Mt. Corvo's Brothers 3, Cup of Sworn Brotherhood
        atk: function(p) { return 1.2; }
    },
    549: { // Sadi-chan
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    550: { // Sadi-chan, Impel Down's Chief Guard
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ] // don't remove this
    },
    553: { // Roronoa Zoro, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    554: { // Roronoa Zoro, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
    },
    555: { // Usopp, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    556: { // Usopp, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    557: { // Nico Robin, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    558: { // Nico Robin, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    559: { // Franky, Merveille's Adventurer (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    560: { // Franky, Strawhat Crew's Attack (Strong World/SW)
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
    },
    561: { // Portgas D. Ace, Black Clothes Hiken
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (p.orb == 2.0 ? 3 : 2); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    562: { // Portgas D. Ace, Black Clothes - Commander of the 2nd Division of the Whitebeard Pirates
        atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (p.orb == 2.0 ? 3 : 2); },
        hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    568: { // Foxy
        atk: function(p) { return 1.25; },
        hp: function(p) { return 1.25; },
        rcv: function(p) { return 1.25; }
    },
    569: { // Foxy the Silver Fox
        atk: function(p) { return 1.5; },
        hp: function(p) { return 1.5; },
        rcv: function(p) { return 1.5; }
    },
    570: { // Monkey D. Luffy Davy Back Fight - Afro
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
                   p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5  :
                                                                       1;
        }
    },
    571: { // Monkey D. Luffy Davy Back Fight - Combat
        atk: function(p) {
            return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
                   p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5  :
                                                                       1;
        }
    },
    572: { // Usopp Davy Back Fight - Second
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP > 99.0 ? 2.5 : 1; }
    },
    573: { // Tony Tony Chopper Davy Back Fight - Mask
        rcv: function(p) { return 1.2; }
    },
    574: { // Aokiji
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    575: { // Aokiji the Freezing Man
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
    },
    576: { // Tea Time Nami
        atk: function(p) { return 1.5; },
        rcv: function(p) { return 1.2; }
    },
    577: { // Monkey D. Luffy, Record of the Voyage - Strawhat Crew (Log Luffy)
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Good', 'Great', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]
    },
    578: { // Monkey D. Luffy, Dream of the Voyage - Pirate King (Log Luffy)
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
        },
        hitModifiers: [ 'Good', 'Great', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ]
    },
    579: { // Roronoa Zoro, Record of the Voyage - Strawhat Crew (Log Zoro)
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 1.5 : 1; }
    },
    580: { // Roronoa Zoro, Dream of the Voyage - Strongest Swordsman (Log Zoro)
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 2 : 1; }
    },
    581: { // Genbou
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    582: { // Kamakiri
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    583: { // Laki
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    584: { // Aisa
        // TODO Find parameters
    },
    585: { // Nojiko
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    586: { // Nojiko, Nami's Sister
        hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    589: { // Kohza
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    590: { // Kohza, Leader of the Rebel Army
        atk: function(p) { return 1.5; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    596: { // Tony Tony Chopper, Record of the Voyage - Strawhat Crew (Log Chopper)
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    597: { // Tony Tony Chopper, Dream of the Voyage - Greatest Doctor (Log Chopper)
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    598: { // Buggy the Pirate Apprentice
        atk: function(p) { return p.unit.stars < 3 ? 2.5 : 1; }
    },
    599: { // Buggy of the Roger Pirates
        atk: function(p) { return p.unit.stars < 3 ? 3 : 1; }
    },
    600: { // Shanks the Pirate Apprentice
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    601: { // Shanks of the Roger Pirates
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    602: { // Enel - 200 Million Volt Thunder God
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
    },
    603: { // Enel the Lightning Human - 200 Million Volt Thunder God
        atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
    },
    604: { // Sanji, Record of the Voyage - Strawhat Crew (Log Sanji)
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    605: { // Sanji, Dream of the Voyage - All Blue (Log Sanji)
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    606: { // Zeff the Pirate
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2 : 1; }
    },
    607: { // Red Leg Zeff, Captain of the Cook Pirates
        atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2.5 : 1; }
    },
    612: { // Brook, Record of the Voyage - Strawhat Crew (Log Brook)
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    613: { // Brook, Dream of the Voyage - Promised Meeting (Log Brook)
        hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    614: { // Zanbai
        atk: function(p) { return p.unit.cost <= 20 && p.percHP <= 30.0 ? 2.25 : 1; }
    },
    629: { // Franky, Boss of the Franky Family
        atk: function(p) { return p.unit.stars <= 3 ? 2 : 1; }
    },
    630: { // Kaku, Cipher Pol No.9
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    631: { // Kaku Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    632: { // Rob Lucci, Cipher Pol No.9
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    633: { // Rob Lucci Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    634: { // Keimi
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; }
    },
    635: { // Keimi, Takoyaki Stand Assistant
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; }
    },
    636: { // Pappug
        atk: function(p) { return p.unit.cost <= 2 ? 3 : 1; }
    },
    637: { // Hatchan, Takoyaki Stand Owner
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    638: { // Doma
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    639: { // Bohemian Knight Doma
        atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
    },
    640: { // Decalvan Brothers
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    641: { // Decalvan Brothers, Sibling Bonds
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; }
    },
    642: { // Squard
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    643: { // Maelstrom Spider Squard
        atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 3 : 1; }
    },
    644: { // Whitey Bay
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
    },
    645: { // Ice Witch Whitey Bay
        atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
    },
    646: { // Little Oars Jr.
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.5 : 1; }
    },
    647: { // Rampaging Little Oars Jr.
        atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.75 : 1; }
    },
    648: { // Marco, Whitebeard Pirates' 1st Division Commander
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; }
    },
    649: { // Phoenix Marco, Whitebeard Pirates' 1st Division Commander
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; }
    },
    650: { // Nami, Record of the Voyage - Strawhat Crew (Log Nami)
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    651: { // Nami, Dream of the Voyage - World Map (Log Nami)
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    652: { // Iron Mask Duval
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2 : 1); },
    },
    653: { // Duval, Head of the Flying Fish Riders
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.25 : 1); },
    },
    654: { // Duval, Head of the Rosy Life Riders
        atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.75 : 1); },
    },
    655: { // Pirate Arlong
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    656: { // Arlong of the Sun Pirates
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    657: { // Kuroobi of the Sun Pirates
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    658: { // Choo of the Sun Pirates
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    659: { // Monkey D. Luffy Swim Ring
        hitAtk: function(p) {
            return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ], // don't remove this
    },
    660: { // Usopp, Record of the Voyage - Strawhat Crew (Log Usopp)
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }    
    },
    661: { // Usopp, Dream of the Voyage - Brave Warrior of the Sea (Log Usopp)
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }    
    },
    662: { // Nami Holiday
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
    },
    665: { // Kohza, Alabasta Citizen
        atk: function(p) { return 1.2; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    666: { // Kohza, Leader of the Suna Suna Clan
        atk: function(p) { return 1.75; },
        hp: function(p) { return 0.2; },
        rcv: function(p) { return 0.2; }
    },
    667: { // Nefertari Cobra, King of the Alabasta Kingdom
        atk: function(p) { return 1.75; },
    },
    668: {  // Sabo
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 + 0.75 * p.percHP / 100 : 1; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; }
    },
    669: {  // Sabo, Member of the Revolutionary Army
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 + 0.75 * p.percHP / 100 : 1; },
        hp: function(p) { return 1.2; },
        rcv: function(p) { return 1.2; }
    },
    670: { // Koala
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
    },
    671: { // Koala, Member of the Revolutionary Army
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    672: { // Hack
        atk: function(p) { return p.unit.class.has("Fighter") ? 2: 1; }
    },
    673: { // Hack, Member of the Revolutionary Army
        atk: function(p) { return p.unit.class.has("Fighter") ? 2: 1; }
    },
    674: { // Emporio Ivankov, Newkama Kenpo Instructor
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
    },
    675: { // Emporio Ivankov, Member of the Revolutionary Army
        atk: function(p) { return p.unit.class.has("Freedom") ? 2.5 : 1; }
    },
    676: { // Inazuma
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    677: { // Inazuma, Member of the Revolutionary Army
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    678: { // Robin, Record of the Voyage - Strawhat Crew (Log Robin)
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    679: { // Robin, Dream of the Voyage - Uncover the Blank Page of History (Log Robin)
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    681: { // Lemon Ice Cream Loving Nami
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    },
    683: { // Chocolate Ice Cream Loving Robin
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
    },
    684: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
    },
    686: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    687: { // Calgara
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; }
    },
    688: { // Calgara, the Great Warrior of Shandia
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
    },
    689: { // Montblanc Noland
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
    },
    690: { // Montblanc Noland, Explorer and Admiral of the Lvneel Kingdom
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    696: { // Halberd Major Navy Headquarters
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
    },
    697: { // Pistol Major Navy Headquarters
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
    },
    698: { // Saber Major Navy Headquarters
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
    },
    699: { // Bazooka Major Navy Headquarters
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 500 : 0; }
    },
    700: { // Knuckle Major Navy Headquarters
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; }
    },
    701: { // Oimo
        hp: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; }
    },
    702: { // Kashi
        hp: function(p) { return p.unit.type == "INT" ? 2.25 : 1; }
    },
    705: { // Three-Headed Baskerville
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1; },
        hp: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1; }
    },
    706: { // Blueno, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    707: { // Blueno Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    708: { // Nico Robin, the Devil Child
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    709: { // Nico Robin, Member of the Strawhat Pirates
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    710: { // Franky, Record of the Voyage - Strawhat Crew (Log Franky)
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
    },
    711: { // Franky, Dream of the Voyage - A Ship to Sail Around the World (Log Franky)
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
    },
    712: { // Gan Fall
        atk: function(p) { return p.unit.class.has("Striker") && p.percHP > 50 ? 2 : 1; }
    },
    713: { // Gan Fall the Knight of the Sky
        atk: function(p) { return p.unit.class.has("Striker") && p.percHP > 50 ? 2.5 : 1; }
    },
    715: { // Konis
        rcv: function(p) { return p.percHP < 30 ? 3 : 1; }
    },
    716: { // Konis, Skypiean Maiden
        rcv: function(p) { return p.percHP < 30 ? 5 : 1; }
    },
    717: { // Dracule Mihawk Warlord of the Sea
        damageSorter: function(d) { return CrunchUtils.mihawkSort(d); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Slasher')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ], // don't remove this
    },
    718: { // Dracule Mihawk, World's Strongest Swordsman
        damageSorter: function(d) { return CrunchUtils.mihawkSort(d); },
        hitAtk: function(p) {
            if (!p.unit.class.has('Slasher')) return 1;
            var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
            return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
        },
        hitModifiers: [ 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect', 'Perfect' ], // don't remove this
    },
    719: { // Sir Crocodile Logia Warlord of the Sea
        atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1; }
    },
    720: { // Sir Crocodile Logia Former Warlord of the Sea
        atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1; }
    },
    721: { // Jerry
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP > 99.0 ? 1.5 : 1; }
    },
    722: { // Jerry, Cipher Pol No.6
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP > 99.0 ? 2 : 1; }
    },
    723: { // T-Bone
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    724: { // Ship Cutter T-Bone, Navy Headquarters Captain
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
    },
    727: { // Monkey D. Luffy Gum-Gum Gatling
        atk: function(p) { return p.unit.class.has("Freedom") || p.unit.class.has("Fighter") ? 1.75 : 1; }
    },

    728: { // Kalifa, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
    },
    730: { // Jabra, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
    },
    731: { // Jabra Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
    },
    732: { // Kakuro, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    733: { // Kakuro Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
    },
    734: { // Kumadori, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
    },
    735: { // Kumadori Rokushiki, Cipher Pol No.9
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
    },
    736: { // Kaku Human-Beast, Ox-Ox Fruit Model: Giraffe
        atk: function(p) { return p.unit.class.has("Slasher") && p.percHP > 50.0 ? 2.5 : 1; }
    },
    737: { // Lucci Human-Beast, Cat-Cat Fruit Model: Leopard
        atk: function(p) { return p.unit.class.has("Fighter") && p.percHP < 30.0 ? 2.75 : 1; }
    },
    738: { // Spandam
        atk: function(p) { return p.unit.cost >= 21 ? 2 : 1; }
    },
    739: { // Franky, Member of the Strawhat Pirates
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
    },
    742: { // Wanze
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.2 : 1; },
        rcv: function(p) { return p.unit.class.has("Freedom") ? 1.2 : 1; }
    },
    743: { // evolved Wanze
        atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; }
    },
    744: { // Log Ace
        atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; },
    },
    745: { // evolved Log Ace
        atk: function(p) { return p.unit.class.has("Freedom") ? 2.5 : 1; },
    },
    747: {
        atk: function(p) { return !p.unit.class.has("Tough") ? 1 : (p.orb == 2.0 ? 3 : 2.5); },
        rcv: function(p) { return 0; }
    },
    748: {
        atk: function(p) { return !p.unit.class.has("Tough") ? 1 : (p.orb == 2.0 ? 3 : 2.5); },
        rcv: function(p) { return 0; }
    },
    749: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
    },
    750: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
    },
    751: {
        atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
    },
    752: {
        atk: function(p) { return p.unit.class.has("Knowledge") ? 2.25 : 1; },
        rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
    },
    753: {
        atk: function(p) { return p.unit.class.has("Tough") ? 2 : 1; },
    },
    754: {
        atk: function(p) { return p.unit.class.has("Tough") ? 2.5 : 1; },
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
        rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
    },
    763: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
    },
    764: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
    }
};
