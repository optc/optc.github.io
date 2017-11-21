window.details = {
    1: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "Spinning Gum Punch"
    },
    2: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Pistol",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    3: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Bazooka",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    4: {
        captain: "Boosts ATK of STR characters by 2x, and ATK of all others by 1.5x",
        special: "Deals 25x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Twin Jet Pistol",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts own base ATK by 100 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 3 turns",
                    "Level 5: Reduces No Healing duration by 4 turns"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    5: {
        special: "Deals 7x character's ATK in DEX damage to one enemy",
        specialName: "Oni Giri",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    6: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "Three Thousand Worlds",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    7: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "108 Pound Phoenix",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    8: {
        special: "Deals 15x character's ATK in DEX damage to all enemies",
        specialName: "Ashura Ichibugin",
        captain: "Boosts ATK and HP of DEX characters by 2x",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of [DEX] characters by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [QCK] characters by ?%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    9: {
        special: "Recovers 1,000 HP",
        specialName: "Cat Burglar",
        captain: "Reduces damage received from INT enemies by 20%"
    },
    10: {
        special: "Deals 15x character's ATK in INT damage to one enemy",
        specialName: "Tornado Tempo",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    11: {
        special: "Reduces damage received from INT enemies by 100% for 1 turn",
        specialName: "Mirage Tempo",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    12: {
        special: "Deals 15x character's ATK in INT damage to all enemies",
        specialName: "Thunderbolt Tempo",
        captain: "Boosts ATK and HP of INT characters by 1.5x"
    },
    13: {
        special: "Delays all enemies for 1 turn",
        specialName: "Liar",
        captain: "Boosts ATK of Shooter characters by 1.2x"
    },
    14: {
        special: "Delays all enemies for 2 turns",
        specialName: "Tabasco Star",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    15: {
        special: "Delays all enemies for 3 turns",
        specialName: "Usopp Golden Pound",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    16: {
        special: "Delays all enemies for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Fire Bird Star",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        limit: "This character has a limit break path",
    },
    17: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Special Fried Rice",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    18: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Plastic Surgery Shot",
        captain: "Boosts HP of QCK characters by 1.5x"
    },
    19: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Hot Rock Stew",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    20: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Diable Jambe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of QCK characters by 1.5x"
    },
    21: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Hearty Yell",
        captain: "Boosts RCV of PSY characters by 1.2x"
    },
    22: {
        special: "Deals 15x character's ATK in PSY damage to one enemy",
        specialName: "Heavy Gong",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    23: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Scope",
        captain: "Boosts RCV of INT characters by 1.5x"
    },
    24: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Hoofprint Roseo",
        captain: "Boosts RCV of STR characters by 1.5x"
    },
    25: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        specialName: "Horn Point Roseo Colonnade",
        captain: "Boosts RCV of QCK characters by 1.5x"
    },
    26: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Guard Point",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    27: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash",
        captain: "Boosts HP of QCK characters by 1.2x"
    },
    28: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    29: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Iron Mace Beauty",
        captain: "Reduces damage received from STR enemies by 30%"
    },
    30: {
        special: "Reduces damage received by 80% for 1 turn",
        specialName: "Slip-Slip Tracks",
        captain: "Reduces damage received from STR enemies by 50%"
    },
    31: {
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    32: {
        special: "Changes [RCV] orbs into [TND] orbs",
        specialName: "Shooting Spree",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    33: {
        captain: "Reduces damage received from INT enemies by 30%"
    },
    34: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Straw Doll Of Resentment",
        captain: "Reduces damage received from INT enemies by 30%"
    },
    35: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "Execution Axe-Hand",
        captain: "Boosts HP of Slasher characters by 1.2x"
    },
    36: {
        special: "Deals 5x character's ATK in PSY damage to one enemy",
        specialName: "Fierce Bite",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    37: {
        special: "Deals 5x character's ATK in DEX damage to one enemy",
        specialName: "The Dance Of A Hundred Kamikaze Tops",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    38: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    39: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of INT characters by 2x"
    },
    40: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from Shooter enemies by 30%"
    },
    41: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Cat Snatch",
        captain: "Boosts RCV of INT characters by 1.2x"
    },
    42: {
        special: "Deals 3x character's ATK in STR damage to all enemies",
        specialName: "Cat-A-Pult Cat-Astrophe",
        captain: "Boosts ATK of STR characters by 1.2x"
    },
    43: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        specialName: "One, Two, Django",
        captain: "Reduces damage received by 10%"
    },
    44: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        specialName: "Dance Heaven",
        captain: "Reduces damage received by 10%"
    },
    45: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of QCK characters by 1.2x"
    },
    46: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    47: {
        special: "Changes [TND] orbs into [RCV] orbs",
        specialName: "[TND] Slot Change [RCV]"
    },
    48: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm"
    },
    49: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    50: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "The Meatball Of Doom",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    51: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    52: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "Chef Drop",
        captain: "Boosts ATK of Fighter characters by 2.5x"
    },
    53: {
        captain: "Reduces damage received from QCK enemies by 30%"
    },
    54: {
        special: "Deals 7x character's ATK in QCK damage to one enemy",
        specialName: "Demonic Dance",
        captain: "Reduces damage received from QCK enemies by 50%"
    },
    55: {
        captain: "Reduces damage received from STR enemies by 30%"
    },
    56: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Fire Pearl Privilege",
        captain: "Reduces damage received from STR enemies by 50%"
    },
    57: {
        special: "Deals 7x character's ATK in INT damage to one enemy",
        specialName: "Chain Hammer",
        captain: "Reduces damage received by 10%"
    },
    58: {
        special: "Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "MH5",
        captain: "Reduces damage received by 20%"
    },
    59: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "[PSY] Slot Change [INT]",
        captain: "Boosts ATK of INT characters by 1.2x"
    },
    60: {
        special: "Changes [TND] orbs into [STR] orbs",
        specialName: "[TND] Slot Change [STR]",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    61: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        specialName: "Lip-O-Cannon",
        captain: "Boosts HP of Shooter characters by 1.5x"
    },
    62: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Guffaw Palm Bomb",
        captain: "Boosts HP of Fighter characters by 1.5x"
    },
    63: {
        captain: "Reduces damage received from DEX enemies by 30%"
    },
    64: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "New Year's Open Body Slam",
        captain: "Reduces damage received from DEX enemies by 50%"
    },
    65: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Shark On Darts",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    66: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Shark On Tooth",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    67: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Quick Draw",
        captain: "Boosts RCV of Slasher characters by 1.5x"
    },
    68: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Quick Draw",
        captain: "Boosts RCV of Slasher characters by 2x"
    },
    69: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 20%"
    },
    70: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 20%"
    },
    71: {
        special: "Reduces damage received by 50% for 1 turn",
        specialName: "Enchanting Vertigo Dance",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    72: {
        special: "Randomizes all orbs",
        specialName: "Charge! Supersonic Duck Squadron!",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    73: {
        special: "Randomizes all orbs",
        specialName: "Charge! Supersonic Duck Squadron!",
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    74: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Flame Fist",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    75: {
        special: "Deals 15x character's ATK in QCK to all enemies",
        specialName: "Flame Mirror",
        captain: "Boosts ATK of QCK characters by 2.5x"
    },
    76: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    77: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of PSY characters by 2.5x"
    },
    119: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    120: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    121: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    122: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    123: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    124: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    125: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    126: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    127: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    128: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    129: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    130: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    131: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    132: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    133: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    134: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    135: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    136: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    137: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    138: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    139: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    140: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    141: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    142: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    143: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    144: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    145: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    146: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    147: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    148: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    149: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    150: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    151: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    152: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    153: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    154: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    155: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    156: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    157: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    158: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    159: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    160: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    161: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    162: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    163: {
        special: "Changes [DEX] orbs into [TND] orbs",
        specialName: "[DEX] Slot Change [TND]"
    },
    164: {
        special: "Changes [QCK] orbs into [TND] orbs",
        specialName: "[QCK] Slot Change [TND]"
    },
    165: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    166: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    167: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    168: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    169: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    170: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    171: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    172: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    173: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    174: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    175: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    176: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    177: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    178: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    179: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]"
    },
    180: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    181: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]"
    },
    182: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    183: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]"
    },
    184: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]"
    },
    185: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    186: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]"
    },
    187: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    188: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]"
    },
    194: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    195: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    196: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    197: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Reduces damage received from PSY enemies by 20%"
    },
    198: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    199: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Nez-Palm Cannon",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    200: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Breeze Breath Bomb",
        captain: "Boosts ATK of STR characters by 2x"
    },
    201: {
        captain: "Boosts HP of Fighter characters by 1.5x"
    },
    202: {
        special: "Changes [RCV] orbs into [QCK] orbs",
        specialName: "10,000 Kill-O-Guillotine",
        captain: "Boosts HP of Fighter characters by 2x"
    },
    203: {
        captain: "Reduces damage received from INT enemies by 10%"
    },
    204: {
        special: "Delays all enemies for 1 turn",
        specialName: "Extra Special Candelabra",
        captain: "Reduces damage received from INT enemies by 10%"
    },
    205: {
        captain: "Boosts HP and RCV of DEX characters by 1.2x"
    },
    206: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Colors Trap: Calming Green",
        captain: "Boosts HP and RCV of DEX characters by 1.2x"
    },
    207: {
        captain: "Reduces damage received from PSY enemies by 10%"
    },
    208: {
        special: "Changes [RCV] orbs into [PSY] orbs",
        specialName: "Bombardier Arabesque",
        captain: "Reduces damage received from PSY enemies by 20%"
    },
    209: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Dieciseis Fleur",
        captain: "Boosts RCV of INT characters by 1.5x"
    },
    210: {
        special: "Boosts ATK of INT characters by 2x for 1 turn",
        specialName: "Cien Fleur",
        captain: "Boosts RCV of INT characters by 2x"
    },
    211: {
        captain: "Boosts ATK of Striker characters by 1.2x"
    },
    212: {
        special: "Deals 5x character's ATK in QCK damage to one enemy",
        specialName: "Hot Blooded Bat",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    213: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        specialName: "Sorrowful Charge",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    214: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        specialName: "Sorrowful Charge",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    215: {
        special: "Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Ink",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    216: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Gum-Gum Balloon",
        captain: "Reduces damage received by 20%"
    },
    217: {
        special: "Deals 15x character's ATK in STR damage to all enemies",
        specialName: "Gum-Gum Giant Rifle",
        captain: "Boosts ATK by 3.5x after scoring 3 Perfects in a row"
    },
    218: {
        special: "Reduces damage received from STR enemies by 100% for 1 turn",
        specialName: "Streaming Wolf Swords",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn"
    },
    219: {
        special: "Deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Lion's Song",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn"
    },
    220: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Fine Tempo",
        captain: "Boosts ATK of INT characters by 2x"
    },
    221: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Happiness Punch",
        captain: "Boosts ATK of INT characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [INT] characters by 2.5x and their RCV by 1.2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
        ]
    },
    222: {
        special: "Boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "Usopp Hammer",
        captain: "Boosts ATK of PSY characters by 1.2x"
    },
    223: {
        special: "Boosts ATK of PSY characters by 2x for 1 turn",
        specialName: "Impact",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    224: {
        special: "Deals 15x character's ATK in QCK damage to one enemy",
        specialName: "Mutton Shot",
        captain: "Boosts ATK by 2x after scoring 2 Perfects in a row"
    },
    225: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        specialName: "Veau Shot",
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row"
    },
    226: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    227: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: "Boosts ATK of Slasher characters by 2.5x",
        limit: [
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    228: {
        special: "Reduces Bind duration by 2 turns",
        specialName: "Escapee Axe-Hand",
        captain: "Boosts HP of Slasher characters by 1.5x"
    },
    229: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "Double Cross Dance",
        captain: "Reduces damage received by 10%"
    },
    230: {
        special: "Deals 200 fixed damage to one enemy",
        specialName: "Double Hyper Straight",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    231: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    232: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    233: {
        captain: "Boosts HP of PSY characters by 1.5x"
    },
    234: {
        special: "Deals 5x character's ATK in PSY damage to all enemies",
        specialName: "Igarappapa",
        captain: "Boosts HP of PSY characters by 2x"
    },
    235: {
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    236: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Superhuman Brass Knuckles",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    237: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    238: {
        special: "Changes [TND] orbs into [DEX] orbs",
        specialName: "[TND] Slot Change [DEX]"
    },
    239: {
        special: "Changes [TND] orbs into [QCK] orbs",
        specialName: "[TND] Slot Change [QCK]"
    },
    240: {
        special: "Changes [STR] orbs into [PSY] orbs",
        specialName: "[STR] Slot Change [PSY]"
    },
    241: {
        special: "Changes [QCK] orbs into [INT] orbs",
        specialName: "[QCK] Slot Change [INT]"
    },
    242: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    243: {
        special: "Changes [TND] orbs into [DEX] orbs",
        specialName: "[TND] Slot Change [DEX]"
    },
    244: {
        special: "Changes [TND] orbs into [QCK] orbs",
        specialName: "[TND] Slot Change [QCK]"
    },
    245: {
        special: "Changes [STR] orbs into [PSY] orbs",
        specialName: "[STR] Slot Change [PSY]"
    },
    246: {
        special: "Changes [QCK] orbs into [INT] orbs",
        specialName: "[QCK] Slot Change [INT]"
    },
    247: {
        special: "Recovers 1,224 HP",
        specialName: "Kyuun Spark",
        captain: "Reduces damage received by 10%"
    },
    248: {
        special: "Deals random STR damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of STR characters by 2.5x and reduces their HP by 60%"
    },
    249: {
        special: "Deals random STR damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of STR characters by 3x and reduces their HP by 60%",
        limit: "This character has a limit break path",
    },
    250: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn"
    },
    251: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        limit: "This character has a limit break path",
    },
    252: {
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of QCK characters by 2x"
    },
    253: {
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        limit: "This character has a limit break path",
    },
    254: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of INT characters by 2x"
    },
    255: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of INT characters by 2x"
    },
    256: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        specialName: "Beautiful Dual Flintlocks",
        captain: "Boosts ATK and RCV of DEX characters by 2x"
    },
    257: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        specialName: "Beautiful Dual Flintlocks",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 150" },
            { "description": "Aquire new Captain Ability: Boosts ATK and RCV of DEX characters by 2x and boosts ATK of Shooter characters by 1.2x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        limitnotes: "Captain boosts stack, so [DEX] and Shooter character's ATK will be boosted by 2.4x",
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    258: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        specialName: "Pocket Mallet",
        captain: "Boosts ATK and RCV of STR characters by 2x"
    },
    259: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        specialName: "Pocket Mallet",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [DEX] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [QCK] characters by ?%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by ?%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
        ]
    },
    260: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Seaquake",
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn"
    },
    261: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Seaquake",
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker and Powerhouse characters by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 2: 	Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Potential 3: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by 3%",
                    "Level 3: Reduce damage taken from [DEX] characters by 4%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 25",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ]
    },
    262: {
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    263: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Shave",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    264: {
        captain: "Reduces damage received from INT enemies by 30%"
    },
    265: {
        special: "Reduces Bind duration by 3 turns",
        specialName: "Tempered Kukris",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x"
    },
    267: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    268: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 25%"
    },
    269: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    270: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    271: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    272: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    273: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    274: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    275: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    276: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    277: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    278: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    279: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    280: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    281: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    282: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    283: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    284: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    285: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    286: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    287: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    288: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    289: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    290: {
        special: "Deals 25x character's ATK in INT damage to one enemy",
        specialName: "Judgment Bomb",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    291: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from INT enemies by 50%"
    },
    292: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from PSY enemies by 50%"
    },
    293: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield",
        captain: "Boosts HP of QCK characters by 2x"
    },
    294: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts HP of STR characters by 2x"
    },
    295: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher",
        captain: "Boosts HP of DEX characters by 2x"
    },
    296: {
        special: "Recovers 2,000 HP, randomizes all orbs",
        specialName: "Cleansing Wash",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    297: {
        special: "Recovers 2,000 HP, randomizes all orbs",
        specialName: "Cleansing Wash",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    298: {
        special: "Deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Moonwalk",
        captain: "Boosts HP of PSY characters by 2x"
    },
    299: {
        special: "Cuts the current HP of each enemy by 10%",
        specialName: "8-Sword Style Onigumo",
        captain: "Boosts ATK of DEX characters by 2x"
    },
    305: {
        special: "Randomly changes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of PSY characters by 1.5x"
    },
    306: {
        special: "Randomly changes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of PSY characters by 2x",
        limit: "This character has a limit break path",
    },
    307: {
        special: "Randomly changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of DEX characters by 2.5x"
    },
    308: {
        special: "Randomly changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of DEX characters by 2.5x"
    },
    309: {
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Demon Face",
        captain: "Reduces RCV of all characters by 90%, reduces damage received by 40%"
    },
    310: {
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Demon Face",
        captain: "Reduces RCV of all characters by 90%, reduces damage received by 40%",
        limit: "This character has a limit break path",
    },
    311: {
        special: "Deals 100x character's ATK in fixed damage to one enemy, reduces crew's HP to 1",
        specialName: "Massacre Soldier",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK by 3.5x after scoring 3 hits below Good in a row",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50"
    },
    312: {
        special: "Deals 100x character's ATK in fixed damage to one enemy, reduces crew's HP to 1",
        specialName: "Massacre Soldier",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK by 3.5x after scoring 3 hits below Good in a row",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50"
    },
    313: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Karmic Punishment",
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x"
    },
    314: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Karmic Punishment",
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all Striker characters proportionally to the crew's current HP and their HP by 1.5x" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ]
    },
    315: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs, empties slots with [DEX] and [QCK] orbs",
        specialName: "Aye Aye, Captain!",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        sailor: "Reduces Paralysis for 2 turns for himself"
    },
    316: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs, empties slots with [DEX] and [QCK] orbs",
        specialName: "Aye Aye, Captain!",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        sailor: "Reduces Paralysis for 2 turns for himself",
        limit: "This character has a limit break path",
    },
    317: {
        special: "Randomly changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 500 HP at end of each turn, reduces damage received by 10%"
    },
    318: {
        special: "Randomly changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 1,000 HP at end of each turn, reduces damage received by 15%"
    },
    319: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line, and Sinker",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    320: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line, and Sinker",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    321: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of QCK type characters by 2x"
    },
    322: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of QCK type characters by 2x"
    },
    323: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of QCK characters by 1.5x"
    },
    324: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of QCK characters by 1.5x"
    },
    325: {
        special: "Changes [TND] orbs into [RCV] orbs, changes [RCV] orbs into [QCK] orbs",
        specialName: "Red-Hot Shipwright Soul"
    },
    326: {
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    327: {
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    328: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        specialName: "Fiddle Banff",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    329: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        specialName: "Fiddle Banff",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    332: {
        special: "Changes [STR] orbs into [RCV] orbs, changes [RCV] orbs into [DEX] orbs",
        specialName: "Snow-Slicing Blade",
        captain: "Boosts ATK, HP and RCV of Striker characters by 1.2x"
    },
    333: {
        special: "Recovers a random amount of HP",
        specialName: "Doctor Stop",
        specialNotes: "#{randomHeal : 2,000 : 5,000}",
        captain: "Boosts ATK and RCV of PSY and INT characters by 1.5x"
    },
    334: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    335: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    336: {
        special: "Switches orbs between slots twice",
        specialName: "Franky Centaur",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
    },
    337: {
        special: "Switches orbs between slots twice",
        specialName: "Franky Centaur",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2.5x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
    },
    338: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        specialName: "Wavy Square Hair"
    },
    339: {
        special: "Changes [INT] orbs into [TND] orbs",
        specialName: "Straight Square Hair"
    },
    340: {
        special: "Randomly changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
        specialName: "Kraken Tentacle Crush",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    341: {
        special: "Randomly changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
        specialName: "Kraken Tentacle Crush",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    352: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        specialName: "Smash Buster",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    353: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        specialName: "Smash Buster",
        captain: "Boosts ATK of Shooter characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x and recovers 300 HP at end of each turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    354: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Two-Sword Dance"
    },
    355: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Two-Sword Dance"
    },
    356: {
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    357: {
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: "Boosts ATK of Striker characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker characters by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by ?%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ]
    },
    358: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        specialName: "Scratch Body",
        captain: "Boosts ATK of DEX characters by 2.5x if HP is above 99% at the start of the turn",
        specialNotes: "#{random : 5,000 : 20,000}"
    },
    359: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        specialName: "Scratch Body",
        specialNotes: "#{random : 5,000 : 20,000}",
        captain: "Boosts ATK of DEX characters by 3x if HP is above 99% at the start of the turn",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 30" },
            { "description": "Boosts base HP by 150" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [DEX] characters by 3x if HP is above 99% at the start of the turn, 2x otherwise" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    360: {
        special: "Deals 10x character's ATK in INT damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    361: {
        special: "Deals 10x character's ATK in INT damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    362: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of PSY characters by 2x"
    },
    363: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of PSY characters by 2x"
    },
    364: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    365: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    366: {
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    367: {
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    368: {
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX"
    },
    369: {
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR"
    },
    370: {
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK"
    },
    371: {
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT"
    },
    372: {
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
        specialName: "Crystal Shield PSY"
    },
    373: {
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    374: {
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    375: {
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    376: {
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    377: {
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
        specialName: "Crystal Shield PSY",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    378: {
        special: "Recovers 3x character's RCV in HP",
        specialName: "Quick Healing",
        captain: "Boosts RCV of all characters by 1.5x"
    },
    379: {
        special: "Removes Poison",
        specialName: "Dugong Kung Fu Fist of Healing"
    },
    380: {
        special: "Removes Poison",
        specialName: "Dugong Kung Fu Fist of Healing",
        captain: "Boosts ATK and RCV of STR characters by 1.5x"
    },
    381: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    382: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    383: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Poison Needle",
        captain: "Reduces damage received by 10%, boosts ATK of INT characters by 2x"
    },
    384: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Poison Needle",
        captain: "Reduces damage received by 20%, boosts ATK of INT characters by 2x"
    },
    385: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of INT characters by 2x"
    },
    386: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of INT characters by 2x"
    },
    387: {
        special: "Randomly changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    388: {
        special: "Randomly changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    389: {
        special: "Randomly changes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK by 2.25x following a chain of DEX > INT > QCK attacks no lower than Good"
    },
    390: {
        special: "Randomly changes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK by 2.75x following a chain of DEX > INT > QCK attacks no lower than Good"
    },
    391: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    392: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of DEX characters by 2x"
    },
    393: {
        special: "Deals 35x character's ATK in STR damage to one enemy",
        specialName: "Kumacy Knuckle"
    },
    394: {
        special: "Deals 500 fixed damage to all enemies",
        specialName: "The Tempest Called Love",
        specialNotes: "#{fixed}"
    },
    395: {
        special: "Empties adjacent slots, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Mole Banana",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    396: {
        special: "Empties adjacent slots, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Mole Banana",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    397: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK by 3x after scoring 5 Perfects in a row"
    },
    398: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK by 4x after scoring 5 Perfects in a row"
    },
    399: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        specialName: "Spike-U-Puncture",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    400: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        specialName: "Spike-U-Puncture",
        captain: "Boosts HP of Striker characters by 2x"
    },
    401: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        specialName: "Iron Guard",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 1.5x"
    },
    402: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        specialName: "Iron Guard",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 2x"
    },
    403: {
        special: "Deals several times the character's ATK in QCK damage to all enemies",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Backwater Sword Dance",
        captain: "Reduces damage received by 50% if HP is low, boosts RCV of all characters by 3x if HP is low"
    },
    404: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Clear-Clear Fruit",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    405: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Clear-Clear Fruit",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    406: {
        special: "Reduces crew's HP to 1, deals 1,000 fixed damage to all enemies, boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Skills of the Ancient Warriors",
        specialNotes: "#{fixed}"
    },
    407: {
        special: "Randomizes all orbs, deals 7x character's ATK in [DEX] damage to all enemies",
        specialName: "Zombie-Style 36-Pound Phoenix"
    },
    408: {
        special: "Randomizes all orbs and changes own orb into [INT], deals 15x character's ATK in [INT] damage to all enemies",
        specialName: "Ground Death",
        captain: "Reduces damage received by 20%, boosts ATK of Slasher characters by 2x"
    },
    409: {
        special: "Changes own orb into [QCK], deals 13x character's ATK in QCK damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    410: {
        special: "Changes own orb into [QCK], deals 13x character's ATK in QCK damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: "Boosts ATK of Fighter characters by 2.5x"
    },
    411: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of STR characters by 2x"
    },
    412: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of STR characters by 2x"
    },
    413: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of INT characters by 2.5x if HP is above 99% at the start of the turn"
    },
    414: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of INT characters by 3x if HP is above 99% at the start of the turn"
    },
    415: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn"
    },
    416: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn"
    },
    417: {
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    418: {
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat",
        captain: "Boosts ATK and HP of Slasher characters by 2x"
    },
    419: {
        special: "Reduces the defense of all enemies by 50% for 2 turns, randomizes all orbs",
        specialName: "Parage Shot: The Storm",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    420: {
        special: "Reduces Despair duration by 3 turns, deals 15x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Bazooka: Supremacy",
        captain: "Boosts ATK, HP and RCV of STR characters by 1.5x"
    },
    421: {
        special: "Reduces Bind duration by 2 turns, deals 10x character's ATK in DEX damage to all enemies",
        specialName: "Three Thousand Worlds: The Final Stroke",
        captain: "Boosts ATK, HP and RCV of DEX characters by 1.5x"
    },
    422: {
        special: "Reduces damage received from INT enemies by 100% for 1 turn, recovers a random amount of HP",
        specialName: "Mirage Tempo: The Heavens",
        specialNotes: "#{randomHeal : 1,000 : 3,000}",
        captain: "Boosts ATK, HP and RCV of INT characters by 1.5x"
    },
    423: {
        special: "Recovers 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Lullaby Parry",
        captain: "Protects from defeat as long as HP is above 70%",
        captainNotes: "#{zombie}"
    },
    424: {
        special: "Recovers 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Lullaby Parry",
        captain: "Boosts ATK of the whole crew by 1.5x and protects from defeat as long as HP is above 70%",
        captainNotes: "#{zombie}"
    },
    425: {
        special: "Deals random PSY damage to all enemies",
        specialName: "Shusui: Three Verse Arrow Notch Slash",
        specialNotes: "#{random : 1 : 100,000}",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x"
    },
    426: {
        special: "Boosts ATK of STR characters by 1.05x for 5 turns",
        specialName: "Barco Grabber Breath",
        captain: "Boosts HP of STR characters by 2x"
    },
    427: {
        special: "Reduces Bind and Despair duration by 2 turns",
        specialName: "Havoc Sonar",
        captain: "Boosts HP of DEX characters by 2x"
    },
    428: {
        special: "Reduces damage received by 50% for 2 turns",
        specialName: "Last Boss – Deep Dive of Dreams",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    429: {
        special: "Deals 7x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "South Bird's Fearless Smile"
    },
    430: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    431: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK and HP of DEX characters by 1.5x"
    },
    432: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        specialName: "Big Chop"
    },
    433: {
        special: "Reduces Bind and Despair duration by 1 turn",
        specialName: "New Kama Seduction",
        captain: "Boosts ATK by 2x following a chain of QCK > STR > DEX attacks no lower than Good"
    },
    434: {
        special: "Amplifies the effect of orbs by 1.25x for 3 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "New Kama Karate Maiden's Awakening",
        captain: "Boosts ATK by 2x following a chain of PSY > INT > INT attacks no lower than Good"
    },
    435: {
        special: "Randomly changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK by 2x following a chain of INT > PSY > QCK attacks no lower than Good"
    },
    436: {
        special: "Randomly changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK by 2.25x following a chain of INT > PSY > QCK attacks no lower than Good"
    },
    437: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, Poisons enemies for 1,000 for a single turn",
        specialName: "Negative Horo \"Sweet\"",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 3x if HP is below 30% at the start of the turn"
    },
    438: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, Poisons enemies for 1,000 for a single turn",
        specialName: "Negative Horo \"Sweet\"",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 5x if HP is below 30% at the start of the turn"
    },
    439: {
        special: "Changes adjacent orbs into [RCV] and randomizes every other orb",
        specialName: "Charge! Supersonic Duck Squadron! \"Love\"",
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    440: {
        special: "Changes adjacent orbs into [RCV] and randomizes every other orb",
        specialName: "Charge! Supersonic Duck Squadron! \"Love\"",
        captain: "Recovers 7x character's RCV in HP at the end of each turn"
    },
    444: {
        captain: "Boosts ATK of Evolver and Booster characters by 2x if HP is above 50% at the start of the turn"
    },
    445: {
        special: "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, switches orbs between slots 3 times",
        specialName: "Support Incoming! Supersonic Duck Squadron!",
        captain: "Boosts ATK of Evolver and Booster characters by 2.5x if HP is above 50% at the start of the turn"
    },
    446: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of STR characters by 2x and their HP by 1.5x"
    },
    447: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of STR characters by 2.5x and their HP by 2.25x",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of [STR] characters by 120" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    448: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        specialName: "Pirate King's Sword",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn"
    },
    449: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        specialName: "Pirate King's Sword",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn"
    },
    450: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: "Boosts base ATK of Fighter characters by 20"
    },
    451: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: "Boosts base ATK of Fighter characters by 20"
    },
    452: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x"
    },
    453: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x"
    },
    454: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    455: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    456: {
        special: "Randomly changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit"
    },
    457: {
        special: "Randomly changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit"
    },
    458: {
        special: "Deals random PSY damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Zen Shockwave",
        specialNotes: "#{random : 30,000 : 150,000}",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x"
    },
    459: {
        special: "Deals random PSY damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Zen Shockwave",
        specialNotes: "#{random : 30,000 : 150,000}",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less or 54 cost exactly by 3x",
        captainNotes: "His captain ability also affects his evolved forms, his base form will NOT receive the boost. All evolved and plus evolved Sengoku characters in the team are included in the bonus."
    },
    460: {
        special: "Recovers 33 HP after the end of each turn for 999 turns, delays all enemies for 1 turn",
        specialName: "Extra Large Candle Service Set",
        captain: "Reduces damage received by 10%"
    },
    461: {
        special: "Randomizes all orbs and changes own orb into [DEX], boosts ATK of Fighter characters by 1.25x for 2 turns",
        specialName: "Escape Dance: White Swan Arabesque",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    462: {
        special: "Randomizes all orbs and changes own orb into [DEX], boosts ATK of Fighter characters by 1.25x for 2 turns",
        specialName: "Escape Dance: White Swan Arabesque",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    463: {
        special: "Empties all slots, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Surprise Ball Dragon",
        captain: "Boosts HP of PSY characters by 2x"
    },
    464: {
        special: "Deals 20x character's ATK in INT damage to all enemies",
        specialName: "Roc Rider Fuza's Flame",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    465: {
        special: "Deals 20x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Jet Punch",
        captain: "Boosts ATK by 3x after scoring 4 hits below Good in a row"
    },
    466: {
        special: "Delays all enemies for 1 turn",
        specialName: "Double Flash Gun",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x"
    },
    467: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Mountain Belly",
        captain: "Boosts ATK and RCV of STR characters by 1.5x"
    },
    468: {
        special: "Boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Healing Power"
    },
    469: {
        special: "Switches orbs between slots once",
        specialName: "Quick Change"
    },
    470: {
        special: "Boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Healing Power",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    471: {
        special: "Switches orbs between slots once",
        specialName: "Quick Change"
    },
    472: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Milky Power Axe"
    },
    473: {
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        specialName: "Milky Quick Axe"
    },
    474: {
        special: "Deals 5x character's ATK in DEX damage to all enemies, reduces Bind duration by 1 turn",
        specialName: "Milky Technique Axe"
    },
    475: {
        special: "Deals 5x character's ATK in STR damage to all enemies, recovers 500 HP",
        specialName: "Milky Mind Axe"
    },
    476: {
        special: "Deals 1,000 fixed damage to one enemy",
        specialName: "Milky Intelligence Axe",
        specialNotes: "#{fixed}"
    },
    477: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    478: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]"
    },
    479: {
        special: "Changes [INT] orbs into [DEX] orbs",
        specialName: "[INT] Slot Change [DEX]"
    },
    480: {
        special: "Changes [TND] orbs into [PSY] orbs",
        specialName: "[TND] Slot Change [PSY]"
    },
    481: {
        special: "Changes [DEX] orbs into [INT] orbs",
        specialName: "[DEX] Slot Change [INT]"
    },
    482: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    483: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    484: {
        special: "Changes [INT] orbs into [DEX] orbs",
        specialName: "[INT] Slot Change [DEX]",
        captain: "Reduces damage received by 10%"
    },
    485: {
        special: "Changes [TND] orbs into [PSY] orbs",
        specialName: "[TND] Slot Change [PSY]",
        captain: "Boosts HP and RCV of PSY characters by 1.2x"
    },
    486: {
        special: "Changes [DEX] orbs into [INT] orbs",
        specialName: "[DEX] Slot Change [INT]",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    487: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR"
    },
    488: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK"
    },
    489: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX"
    },
    490: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR",
        captain: "Boosts ATK and HP of Striker characters by 1.2x"
    },
    491: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK",
        captain: "Boosts RCV of Striker characters by 1.5x"
    },
    492: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX",
        captain: "Boosts ATK of DEX characters by 1.2x"
    },
    493: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing"
    },
    494: {
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack"
    },
    495: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing",
        captain: "Recovers 500 HP at the end of each turn"
    },
    496: {
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    497: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    498: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    499: {
        special: "Delays all enemies by 1 turn",
        specialName: "Women Are Courageous!",
        captain: "Boosts RCV of Shooter characters by 1.5x"
    },
    500: {
        special: "Delays all enemies by 1 turn",
        specialName: "Women Are Courageous!",
        captain: "Boosts RCV of Shooter characters by 2x"
    },
    501: {
        special: "Recovers 5x character's RCV in HP at the end of each turn for 4 turns",
        specialName: "Studying Medicine",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.2x"
    },
    502: {
        special: "Recovers 5x character's RCV in HP at the end of each turn for 4 turns",
        specialName: "Studying Medicine",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.5x"
    },
    503: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK of all characters by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        specialName: "Surprise Dial Illusion",
        captain: "Boosts HP of INT characters by 1.5x"
    },
    504: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK of all characters by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        specialName: "Surprise Dial Illusion",
        captain: "Boosts HP of INT characters by 2x"
    },
    505: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        specialName: "Flying Claw",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    506: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        specialName: "Flying Claw",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}"
    },
    507: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        specialName: "Ringing Fang",
        captain: "Boosts ATK and HP of STR characters by 1.2x"
    },
    508: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        specialName: "Ringing Fang",
        captain: "Boosts ATK and HP of STR characters by 1.5x"
    },
    509: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        specialNotes: "#{poison}",
        specialName: "Merciless Ploy: Poison Needle",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    510: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        specialNotes: "#{poison}",
        specialName: "Merciless Ploy: Poison Needle",
        captain: "Reduces damage received by 10%, boosts ATK of Striker characters by 2x"
    },
    511: {
        special: "Reduces damage received by 30% for 2 turns, boosts ATK of Slasher characters by 1.25x for 2 turns",
        specialName: "Cruel Blade: Iron Guard",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    512: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        specialName: "Sneaky Punk Kid Strike",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    513: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        specialName: "Sneaky Punk Kid Strike",
        captain: "Protects from defeat as long as HP is above 50%, boosts ATK of PSY characters by 1.5x if HP is above 50% at the start of the turn",
        captainNotes: "#{zombie}"
    },
    514: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Blooming Flower of Everlasting Summer",
        captain: "Boosts ATK of INT characters by 2x"
    },
    515: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], switches orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        specialName: "Pop Green",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x"
    },
    516: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], switches orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        specialName: "Pop Green",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x, recovers 1x character's RCV in HP at the end of each turn"
    },
    517: {
        special: "Empties all slots with [RCV] orbs, boosts ATK of all characters by 5% for 2 turns",
        specialName: "Overeat! Energy Change",
        captain: "Boosts HP of PSY characters by 1.5x"
    },
    518: {
        special: "Empties all slots with [RCV] orbs, boosts ATK of all characters by 5% for 2 turns",
        specialName: "Overeat! Energy Change",
        captain: "Boosts HP of PSY characters by 2x, boosts chances of getting [RCV] orbs"
    },
    519: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Thor Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2x"
    },
    520: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Thor Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2.5x"
    },
    521: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe - Venaison Shot",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    522: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe - Venaison Shot",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    523: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Billy's Electrical Discharge",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    524: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Billy's Electrical Discharge",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    525: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x",
        sailor: "Boosts base RCV of PSY characters by 15"
    },
    526: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        sailor: "Boosts base RCV of PSY characters by 15"
    },
    527: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boosts own RCV by 50"
    },
    528: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        sailor: "When HP is below 30% at the start of the turn, boosts own RCV by 50"
    },
    529: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        specialName: "Conqueror's Haki: Emperor",
        captain: "Boosts chances of getting [PSY] orbs, boosts ATK of PSY characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    530: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        specialName: "Conqueror's Haki: Emperor",
        captain: "Boosts chances of getting [PSY] orbs, boosts ATK of PSY characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    531: {
        special: "Reduces damage received by 30% for 4 turns",
        specialName: "Veinte Fleur Calendula: Blossom",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%"
    },
    532: {
        special: "Reduces damage received by 30% for 4 turns",
        specialName: "Veinte Fleur Calendula: Blossom",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%"
    },
    533: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Swallow Bond En Avant: Blossom",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    534: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Swallow Bond En Avant: Blossom",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    535: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Mirage Tempo Fata Morgana: Blossom",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    536: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Mirage Tempo Fata Morgana: Blossom",
        captain: "Boosts RCV of DEX characters by 2x"
    },
    537: {
        special: "Reduces Bind and Despair duration by 1 turn, locks all orbs for 1 turn",
        specialName: "Sea Stone Handcuffs",
        captain: "Boosts chain multiplier by 2x"
    },
    538: {
        special: "Reduces Bind and Despair duration by 1 turn, locks all orbs for 1 turn",
        specialName: "Sea Stone Handcuffs",
        captain: "Boosts chain multiplier by 2x, recovers 2x character's RCV in HP at the end of each turn"
    },
    539: {
        special: "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
        specialName: "Bashful Prison Beast's Metal Rod"
    },
    540: {
        special: "Boosts chances of getting [DEX] orbs for 2 turns",
        specialName: "Deadly Glare"
    },
    541: {
        special: "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 turns",
        specialName: "White Thorn Deathmatch",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 50% at the start of the turn"
    },
    542: {
        special: "Boosts RCV of all characters by 2x for 1 turn",
        specialName: "Roar of the Ruler of the Sky",
        captain: "Boosts HP of all characters by 1.5x"
    },
    543: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x, reduces crew's RCV to 0"
    },
    544: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.5x, reduces crew's RCV to 0"
    },
    545: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "60,000,000 Volt Jamboule",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    546: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "60,000,000 Volt Jamboule",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received by 20%"
    },
    547: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Crazy Punk Kid Punch",
        specialNotes: "#{zombie}",
        captain: "Boosts chances of getting [RCV] orbs"
    },
    548: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Crazy Punk Kid Punch",
        specialNotes: "#{zombie}",
        captain: "Boosts chances of getting [RCV] orbs, boosts ATK of all characters by 1.2x"
    },
    549: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2x after scoring 3 Perfects in a row"
    },
    550: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    551: {
        special: "Reduces damage received by 50% for 1 turn, deals 15x character's ATK in STR damage to one enemy",
        specialName: "Uncompromising Prison Beast's Morning Star"
    },
    552: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Cursed Shout"
    },
    553: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    554: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    555: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    556: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Boosts base RCV of Shooter characters by 10",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 120" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 5 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 4 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 4 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 4 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    557: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        sailor: "Reduces Blindness duration by 3 turns"
    },
    558: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: "Reduces Blindness duration by 3 turns"
    },
    559: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    560: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    561: {
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
    },
    562: {
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
    },
    563: {
        special: "Deal 3x character's ATK in PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
        specialName: "Cutie Baton"
    },
    564: {
        special: "Reduces Bind duration by 2 turns",
        specialName: "Sea Surface Split"
    },
    565: {
        special: "Deals 5,000 fixed damage to one enemy",
        specialName: "Hamburger Hammer",
        specialNotes: "#{fixed}"
    },
    566: {
        special: "Empties all slots with [BLOCK] orbs",
        specialName: "Wipeout Tackle"
    },
    567: {
        special: "Reduces Bind and Despair duration by 1 turn, deals 15x the character's ATK as STR damage to all enemies",
        specialName: "Mudfish Coaster"
    },
    568: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x"
    },
    569: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight"
    },
    570: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    571: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    572: {
        special: "Boosts ATK of Fighter characters by 2x for 1 turn, binds himself for 15 turns",
        specialName: "Roar of Mettle",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the turn"
    },
    573: {
        special: "Reduces Despair duration by 2 turns, recovers 10x character's RCV in HP",
        specialName: "Manly Support",
        captain: "Boosts RCV of all characters by 1.2x"
    },
    574: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    575: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak",
        captain: "Boosts ATK and HP of Striker characters by 2x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
        ]
    },
    576: {
        special: "Changes [PSY] orbs into [INT] orbs, boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Fine Tempo - Tea Time Show",
        captain: "Boosts ATK of all characters by 1.5x, boosts RCV of all characters by 1.2x"
    },
    577: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    578: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    579: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 1.5x"
    },
    580: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 2x"
    },
    581: {
        special: "Cuts the current HP of each enemy by 7%",
        specialName: "High-Caliber Bazooka",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    582: {
        special: "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK characters by 1.5x for 1 turn",
        specialName: "Burn Blade",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    583: {
        special: "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 for 3 turns",
        specialName: "Disrupting Fire",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    584: {
        special: "Reduces damage received from PSY enemies by 100% for 1 turn",
        specialName: "Mantra",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, reduces ATK, HP and RCV of all characters by 90%"
    },
    585: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    586: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts HP and RCV of PSY characters by 1.5x"
    },
    587: {
        special: "Removes Poison, reduces Bind and Despair duration by 2 turns",
        specialName: "Merciful Painkiller",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    588: {
        special: "Removes Poison, reduces Bind and Despair duration by 2 turns",
        specialName: "Merciful Painkiller",
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    589: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 1.5x, reduces HP and RCV of all characters by 80%"
    },
    590: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 2x, reduces HP and RCV of all characters by 80%"
    },
    596: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of each turn"
    },
    597: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of each turn"
    },
    598: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 2.5x"
    },
    599: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 3x"
    },
    600: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    601: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    602: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    603: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of each turn"
    },
    604: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    605: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 20%"
    },
    606: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is above 50% at the start of the turn"
    },
    607: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 50% at the start of the turn"
    },
    608: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Wicked Strength"
    },
    609: {
        special: "Changes the captain's orb into [RCV] and randomizes every other orb",
        specialName: "Wicked Spirit"
    },
    610: {
        special: "Changes [TND] orbs into [RCV] orbs",
        specialName: "[TND] Slot Change [RCV]"
    },
    611: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm"
    },
    612: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 turn, reduces damage received by 45% for 1 turn",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    613: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 turn, reduces damage received by 45% for 1 turn",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK, HP and RCV of Slasher characters by 1.5x"
    },
    614: {
        special: "Reduces the defense of all enemies by 50% for 1 turn, deals 10x character's ATK in PSY damage to all enemies",
        specialName: "Demolisher Chop",
        captain: "Boosts ATK of characters with cost 20 or less by 2.25x if HP is below 30% at the start of the turn"
    },
    615: {
        special: "Deals random STR damage to one enemy",
        specialName: "Demolisher Axe"
    },
    616: {
        special: "Changes the captain's orb into STR",
        specialName: "Demolisher Spear"
    },
    617: {
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        specialName: "Demolisher Cannon"
    },
    618: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Mach Punch"
    },
    619: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    620: {
        special: "Changes [INT] orbs into [QCK] orbs",
        specialName: "[INT] Slot Change [QCK]"
    },
    621: {
        special: "Changes [INT] orbs into [STR] orbs",
        specialName: "[INT] Slot Change [STR]"
    },
    622: {
        special: "Boosts RCV of all characters by 100 for 3 turns",
        specialName: "Patch Job"
    },
    623: {
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns",
        specialName: "Auto Repair"
    },
    624: {
        special: "Slightly boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Slot Rate Up [PSY]"
    },
    625: {
        special: "Slightly boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Slot Rate Up [INT]"
    },
    626: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    627: {
        special: "Randomizes all orbs",
        specialName: "Slot Shuffle"
    },
    628: {
        special: "Deals 15,000 fixed damage to one enemy",
        specialName: "Keel Crusher",
        specialNotes: "#{fixed}"
    },
    629: {
        special: "Empties all slots including those with [BLOCK] orbs, deals random INT damage to all enemies",
        specialName: "Master Nail",
        captain: "Boosts ATK of characters with 3 or fewer stars by 2x"
    },
    630: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    631: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    632: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    633: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 2x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    634: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 turns, boosts ATK of QCK and PSY characters by 1.2x for 3 turns",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x"
    },
    635: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 turns, boosts ATK of QCK and PSY characters by 1.2x for 3 turns",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x"
    },
    636: {
        special: "Binds himself for 3 turns, reduces damage received by 50% for 3 turns, recovers 3.5x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Wretched Ballade",
        captain: "Boosts ATK of characters with cost 2 or less by 3x"
    },
    637: {
        special: "Cuts the current HP of each enemy by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        specialName: "Hachi Ink Jet",
        captain: "Recovers 618 HP at the end of each turn, boosts ATK of Slasher characters by 1.5x"
    },
    638: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    639: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    640: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of each turn",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Fighter characters by 100"
    },
    641: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of each turn",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Fighter characters by 100"
    },
    642: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 2.5x if HP is below 30% at the start of the turn",
        sailor: "Recovers 2 turns of Paralysis on self"
    },
    643: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Recovers 2 turns of Paralysis on self",
        limit: [
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [INT] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by ?%",
                    "Level 3: Reduce damage taken from [STR] characters by ?%",
                    "Level 4: Reduce damage taken from [STR] characters by ?%",
                    "Level 5: Reduce damage taken from [STR] characters by ?%"
                ]
            },
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
        ]
    },
    644: {
        special: "Reduces Bind and Despair duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    645: {
        special: "Reduces Bind and Despair duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2.5x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    646: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.5x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of STR characters by 30"
    },
    647: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of STR characters by 30"
    },
    648: {
        special: "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Blue Flame Kick",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn"
    },
    649: {
        special: "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Blue Flame Kick",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn"
    },
    650: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    651: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    652: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs"
    },
    653: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs"
    },
    654: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs"
    },
    655: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    656: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of STR characters by 2x"
    },
    657: {
        special: "Randomly changes [INT] and [PSY] orbs into either [STR] or [EMPTY] orbs",
        specialName: "Forearm Sledge",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    658: {
        special: "Randomly changes all orbs into either [INT] or [PSY] orbs",
        specialName: "Lipowertzer",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    659: {
        special: "Reduces Bind and Despair duration by 2 turns, reduces damage received by 50% for 2 turns",
        specialName: "Gum-Gum Balloon Swim",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    660: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    661: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x, reduces cooldown of all specials by 1 turn at the start of the fight"
    },
    662: {
        special: "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
        specialName: "Tornado Tempo - Beach Side",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    663: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    664: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    665: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.2x, reduces HP and RCV of all characters by 80%"
    },
    666: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.75x, reduces HP and RCV of all characters by 80%"
    },
    667: {
        special: "Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "King's Chopper",
        specialNotes: "#{zombie}",
        captain: "Reduces damage received by 10%, boosts ATK of all characters by 1.5x"
    },
    668: {
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following turn.",
        specialName: "Dragon's Claw",
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    669: {
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following turn.",
        specialName: "Dragon's Claw",
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    670: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    671: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.5x"
    },
    672: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    673: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Fighter characters by 2x"
    },
    674: {
        special: "Removes Poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of each turn for 2 turns",
        specialName: "Emporio Healing Hormone",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    675: {
        special: "Removes Poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of each turn for 2 turns",
        specialName: "Emporio Healing Hormone",
        captain: "Boosts ATK of Free Spirit characters by 2.5x"
    },
    676: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each turn"
    },
    677: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each turn"
    },
    678: {
        special: "Reduces damage received by 50% for 1 turn, locks all orbs for 1 turn",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x, boosts chances of getting [PSY] orbs"
    },
    679: {
        special: "Reduces damage received by 50% for 1 turn, locks all orbs for 1 turn",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x, boosts chances of getting [PSY] orbs"
    },
    680: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 turns",
        specialName: "Midsummer Relax Time"
    },
    681: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 turns",
        specialName: "Midsummer Relax Time",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x"
    },
    682: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 turns",
        specialName: "Transcendental Serenity Healing"
    },
    683: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 turns",
        specialName: "Transcendental Serenity Healing",
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x"
    },
    684: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn",
        specialName: "Romantic Ghost"
    },
    685: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn",
        specialName: "Romantic Ghost",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    686: {
        special: "Delays all enemies for 1 turn, recovers 3x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Captivating Perfume Dance - Relaxation",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    687: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 turn",
        specialName: "First Spear of the Battle",
        captain: "Boosts ATK of Free Spirit characters by 1.5x"
    },
    688: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 turn",
        specialName: "First Spear of the Battle",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit characters by 2x"
    },
    689: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.2x"
    },
    690: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    691: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]"
    },
    692: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]"
    },
    693: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]"
    },
    694: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    695: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    696: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]",
        captain: "Boosts ATK of Striker characters by 1.75x"
    },
    697: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]",
        captain: "Boosts ATK of Shooter characters by 1.75x"
    },
    698: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]",
        captain: "Boosts ATK of Slasher characters by 1.75x"
    },
    699: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst",
        captain: "Boosts ATK of Shooter characters by 500, reduces damage received by 10%"
    },
    700: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break",
        captain: "Boosts ATK of Fighter characters by 1.75x"
    },
    701: {
        special: "Deals 15x character's ATK in PSY damage to all enemies, changes own orb into [PSY]",
        specialName: "Oimo Press",
        captain: "Boosts HP of PSY characters by 2.25x"
    },
    702: {
        special: "Seals himself for 5 turns, reduces damage received by 30% for 5 turns",
        specialName: "Kashi Swing",
        captain: "Boosts HP of INT characters by 2.25x"
    },
    703: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Arm Claw of the Watchdog"
    },
    704: {
        special: "Deals 9x character's ATK in STR damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Companion's Guilt"
    },
    705: {
        special: "Randomly changes [PSY], [INT], [TND], [RCV] and [EMPTY] orbs into [STR], [DEX] or [QCK] orbs",
        specialName: "Guilty Verdict - \"Slow Death Penalty\"",
        captain: "Boosts ATK and HP of STR characters, DEX characters and QCK characters by 1.25x"
    },
    706: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    707: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK and HP of STR characters by 1.5x"
    },
    708: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    709: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    710: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    711: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    712: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 turns",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2x if HP is above 50% at the start of the turn"
    },
    713: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 turns",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2.5x if HP is above 50% at the start of the turn"
    },
    714: {
        special: "Randomizes slots with [STR], [QCK], [INT] or [PSY] orbs",
        specialName: "Pegasus' Neigh"
    },
    715: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 turns, seals herself for 3 turns",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 2x if HP is below 30% at the start of the turn"
    },
    716: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 turns, seals herself for 3 turns",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    717: {
        special: "Deals 50% of the damage dealt in the previous turn as typeless damage to all enemies",
        specialNotes: "The special only includes the damage inflicted through normal attacks.",
        specialName: "Black Sword - Lightning Slash",
        captain: "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters."
    },
    718: {
        special: "Deals 50% of the damage dealt in the previous turn as typeless damage to all enemies",
        specialNotes: "The special only includes the damage inflicted through normal attacks.",
        specialName: "Black Sword - Lightning Slash",
        captain: "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters."
    },
    719: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    720: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    721: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 1.5x if HP is is above 99% at the start of the turn"
    },
    722: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is is above 99% at the start of the turn"
    },
    723: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 turn",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.5x, recovers 1.2x character's RCV in HP at the end of each turn"
    },
    724: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 turn",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.75x, recovers 1.5x character's RCV in HP at the end of each turn"
    },
    725: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 1,000 HP at the end of each turn"
    },
    726: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 2,000 HP at the end of each turn"
    },
    727: {
        special: "Deals 10x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Gum-Gum Gatling",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Free Spirit and Fighter characters by 1.75x"
    },
    728: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, slightly boosts chances of getting [DEX] orbs"
    },
    729: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, boosts chances of getting [DEX] orbs"
    },
    730: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.2x, deals 9 HP as fixed damage to all enemies at the end of each turn",
        captainNotes: "#{fixed}"
    },
    731: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.5x, deals 9 HP as fixed damage to all enemies at the end of each turn",
        captainNotes: "#{fixed}"
    },
    732: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 turn",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 10%"
    },
    733: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 turn",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 20%"
    },
    734: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Return - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    735: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Return - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    736: {
        special: "Deals 20x character's ATK in STR damage to all enemies, changes [QCK] orbs into [STR] orbs",
        specialName: "Fierce Smash",
        captain: "Boosts ATK of Slasher characters by 2.5x if HP is above 50% at the start of the turn"
    },
    737: {
        special: "Changes [RCV] orbs into [QCK] orbs, changes adjacent orbs into [QCK] orbs",
        specialName: "Shigan - Bachi",
        captain: "Boosts ATK of Fighter characters by 2.75x if HP is below 30% at the start of the turn"
    },
    738: {
        special: "Deals 200x character's ATK in INT damage to one enemy",
        specialName: "Ivory Rush",
        captain: "Boosts ATK of characters with cost 21 or more by 2x"
    },
    739: {
        special: "Reduces Bind duration by 5 turns, randomizes all orbs",
        specialName: "Coup de Boo",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    740: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 turns",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight"
    },
    741: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 turns",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight"
    },
    742: {
        special: "Amplifies the effect of orbs by 1.25x for 2 turns, reduces the defense of all enemies by 80% for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x"
    },
    743: {
        special: "Amplifies the effect of orbs by 1.25x for 2 turns, reduces the defense of all enemies by 80% for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x"
    },
    744: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    745: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2.5x"
    },
    746: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Megalo Assault!",
        specialNotes: "#{zombie}",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}"
    },
    747: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 turns",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
    },
    748: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 turns",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0",
        limit: "This character has a limit break path",
    },
    749: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 1.5x, boosts damage of DEX specials by 1.5x",
        captainNotes: "#{noFixedPerc}"
    },
    750: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 2x, boosts damage of DEX specials by 2x",
        captainNotes: "#{noFixedPerc}",
        limit: "This character has a limit break path",
    },
    751: {
        special: "Reduces damage received in the next turn by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x"
    },
    752: {
        special: "Reduces damage received in the next turn by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.5x"
    },
    753: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}",
        specialName: "Moonlight Ten Finger Pistol",
        captain: "Boosts ATK of Powerhouse characters by 2x"
    },
    754: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}",
        specialName: "Moonlight Ten Finger Pistol",
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        limit: "This character has a limit break path",
    },
    755: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Tekkai - Rin",
        captain: "Boosts ATK of INT characters by 1.5x, reduces damage received from PSY enemies by 20%"
    },
    756: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Tekkai - Rin",
        captain: "Boosts ATK of INT characters by 2x, reduces damage received from PSY enemies by 30%",
        limit: "This character has a limit break path",
    },
    757: {
        special: "Changes [DEX] and [QCK] orbs into [PSY] orbs",
        specialName: "Solid Beast Supreme Technique: Owl Strike",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    758: {
        special: "Changes [DEX] and [QCK] orbs into [PSY] orbs",
        specialName: "Solid Beast Supreme Technique: Owl Strike",
        captain: "Boosts ATK of PSY characters by 2x, recovers 3x character's RCV in HP at the end of each turn"
    },
    759: {
        special: "Switches orbs between slots 3 times, locks all orbs for 1 turn",
        specialName: "Life Return: Shishi Finger Pistol",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 30% at the start of the turn"
    },
    760: {
        special: "Switches orbs between slots 3 times, locks all orbs for 1 turn",
        specialName: "Life Return: Shishi Finger Pistol",
        captain: "Boosts ATK of STR characters by 3x if HP is below 30% at the start of the turn",
        limit: "This character has a limit break path",
    },
    761: {
        special: "Deals 15x character's ATK in DEX damage to one enemy, boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Gum-Gum Monster Pistol",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    762: {
        special: "Boosts ATK of PSY characters by 1.75x for 1 turn",
        specialName: "Impact Beast",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    763: {
        special: "Changes own orb into [STR], switches orbs between slots once",
        specialName: "Franken-Franky Centaur",
        captain: "Boosts ATK of STR characters by 2x"
    },
    764: {
        special: "Recovers 3,000 HP",
        specialName: "Cat Burglar Trick",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x"
    },
    765: {
        special: "Reduces Despair duration by 3 turns",
        specialName: "Scope Magic",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    766: {
        special: "Deals 7x character's ATK in QCK damage to all enemies, delays all enemies for 1 turn",
        specialName: "108 Pound Phoenix: Reaper",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    767: {
        special: {
            "japan": "Changes top row orbs into [DEX] orbs, removes blindness",
            "global": "Changes top row orbs into [DEX] orbs, reduces Despair duration by 1 turn"
        },
        specialName: "Ojos Fleur: Thriller",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x"
    },
    768: {
        special: "Recovers 15x character's RCV in HP, changes [TND] orbs into [RCV] orbs",
        specialName: "Hot Rock Stew: Party",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    769: {
        special: "Recovers 4,343 HP, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Lullaby Parry: Horror",
        captain: "Boosts ATK and RCV of INT characters by 1.5x"
    },
    770: {
        special: "Deals 15x character's ATK in STR damage to one enemy, boosts ATK against delayed enemies by 1.3x for 2 turns",
        specialName: "Shigan: Convergence",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of STR characters by 2x"
    },
    771: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of Cerebral characters by 1.75x for 1 turn",
        specialName: "Moonwalk: Air Walking",
        captain: "Boosts ATK of Cerebral characters by 2.5x"
    },
    772: {
        special: "Cuts the current HP of each enemy by 10%, changes [PSY] and [INT] orbs into [DEX] orbs",
        specialName: "Eight-Sword Style: Brave Warrior's Continuous Attack",
        captain: "Boosts ATK of Slasher characters by 2x, reduces damage received from QCK enemies by 20%"
    },
    773: {
        special: "Reduces any damage received above 3,000 HP by 80% for 1 turn",
        specialNotes: "The exact formula for the damage received is: 3000 + ((total damage) - 3000) * 0.2",
        specialName: "Rust-Rust Fruit",
        captain: "Reduces damage received by 20%"
    },
    774: {
        special: "Randomly changes [TND], [RCV], [EMPTY], [BLOCK] and [BOMB] orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, switches orbs between slots 3 times",
        specialName: "Berry-Berry Fruit",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    775: {
        special: "Deals several times the character's ATK in PSY damage to one enemy",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Angry Headbutt",
        captain: "Boosts ATK and HP of Cerebral characters by 1.5x"
    },
    776: {
        specialName: "Boisterous Lucky Shot!!",
        special: "Recovers 5,000 HP, deals 15x character's ATK in PSY damage to one enemy, seals himself for 3 turns",
        captain: "Boosts ATK and RCV of PSY characters by 1.25x"
    },
    777: {
        special: "Recovers 5,000 HP, deals 15x character's ATK in PSY damage to one enemy, seals himself for 3 turns",
        specialName: "Boisterous Lucky Shot!!",
        captain: "Boosts ATK and RCV of PSY characters by 1.75x"
    },
    778: {
        special: "Deals several times the character's ATK in QCK damage to one enemy, changes own orb into [QCK]",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Undefeated Sword Technique",
        captain: "Reduces damage received by 20%"
    },
    779: {
        special: "Deals several times the character's ATK in QCK damage to one enemy, changes own orb into [QCK]",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Undefeated Sword Technique",
        captain: "Reduces damage received by 25%"
    },
    780: {
        special: "Boosts own ATK by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 1.5x; between 20% HP and 50% HP, it's 1.75x; below 20% HP, it's 2x.",
        specialName: "Precept Deification",
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn"
    },
    781: {
        special: "Boosts own ATK by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 1.5x; between 20% HP and 50% HP, it's 1.75x; below 20% HP, it's 2x.",
        specialName: "Precept Deification",
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        limit: "This character has a limit break path",
    },
    782: {
        special: "Delays all enemies for 1 turn, recovers a small random amount of HP",
        specialName: "Smile of a Natural Beauty",
        specialNotes: "#{randomHeal : ??? : ???}",
        captain: "Boosts RCV of Slasher characters by 1.5x"
    },
    783: {
        special: "Delays all enemies for 1 turn, recovers a small random amount of HP",
        specialName: "Smile of a Natural Beauty",
        specialNotes: "#{randomHeal : ??? : ???}",
        captain: "Boosts ATK of Slasher characters by 2x and their RCV by 1.5x"
    },
    784: {
        special: "Reduces Despair duration by 2 turns, removes blindness",
        specialName: "Yelling at Lascivious Young Women"
    },
    785: {
        special: "Reduces Despair duration by 2 turns, removes blindness",
        specialName: "Yelling at Lascivious Young Women",
        captain: "Reduces damage received by 20%"
    },
    786: {
        special: "Seals himself for 10 turns, delays all enemies for 1 turn, reduces damage received by 50% for 4 turns",
        specialName: "The Resolve to Face Death! \"Open Mind\""
    },
    787: {
        special: "Seals himself for 10 turns, delays all enemies for 1 turn, reduces damage received by 50% for 4 turns",
        specialName: "The Resolve to Face Death! \"Open Mind\"",
        captain: "Reduces damage received by 50%, reduces crew's current HP by 10% at the end of each turn"
    },
    788: {
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Slasher characters by 1.75x in the following turn",
        specialName: "Real Sword Fight with a Girl Swordsman"
    },
    789: {
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Slasher characters by 1.75x in the following turn",
        specialName: "Real Sword Fight with a Girl Swordsman",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    790: {
        special: "Deals 3x character's ATK in QCK damage to one enemy, boosts ATK of STR, DEX and QCK characters by 1.2x for 3 turns",
        specialName: "March!! Usopp Pirates"
    },
    791: {
        special: "Deals 3x character's ATK in QCK damage to one enemy, boosts ATK of STR, DEX and QCK characters by 1.2x for 3 turns",
        specialName: "March!! Usopp Pirates",
        captain: "Boosts ATK, HP and RCV of STR, DEX and QCK characters by 1.25x"
    },
    792: {
        special: "Randomly changes all orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, switches orbs between slots twice, locks all orbs for 1 turn",
        specialName: "The Entushiasm to Keep Skilled Workers in Line"
    },
    793: {
        special: "Randomly changes all orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, switches orbs between slots twice, locks all orbs for 1 turn",
        specialName: "The Entushiasm to Keep Skilled Workers in Line",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x"
    },
    794: {
        special: "Deals 10 hits of random INT damage to random enemies, delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 30,000 : for each hit}",
        specialName: "Gum-Gum Storm",
        captain: "Boosts ATK of Powerhouse characters by 3x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.0x on the first turn, 2.9x on the second, 2.8x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Powerhouse characters. You will not die to the HP reduction"
    },
    795: {
        special: "Deals 10 hits of random INT damage to random enemies, delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 30,000 : for each hit}",
        specialName: "Gum-Gum Storm",
        captain: "Boosts ATK of Powerhouse characters by 3.5x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.4x on the second, 3.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Powerhouse characters. You will not die to the HP reduction"
    },
    796: {
        special: "Slightly boosts chances of getting matching orbs for 3 turns, boosts own ATK by 1.75x for 1 turn",
        specialName: "Peto-Peto Fruit, The Greatest Power",
        captain: "Boosts ATK of Cerebral characters by 2x"
    },
    797: {
        special: "Slightly boosts chances of getting matching orbs for 3 turns, boosts own ATK by 1.75x for 1 turn",
        specialName: "Peto-Peto Fruit, The Greatest Power",
        captain: "Boosts ATK of Cerebral and Powerhouse characters by 2x"
    },
    798: {
        special: "Removes Poison, following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Fighter characters by 1.75x in the following turn",
        specialName: "Dugong Secret! Fist of the Black Fin",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    799: {
        special: "Randomizes all orbs, recovers 9x character's RCV in HP",
        specialName: "Sea Animal Healing"
    },
    800: {
        special: "Randomly changes all orbs into either [STR], [DEX] or [QCK] orbs",
        specialName: "Octopus Tentacle Blow"
    },
    801: {
        special: "Randomly changes [STR], [QCK], [DEX], [INT], [BOMB] and [BLOCK] orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, changes [TND] and [RCV] orbs into [PSY] orbs",
        specialName: "Clone-Clone Montage",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    802: {
        special: "Randomly changes [STR], [QCK], [DEX], [INT], [BOMB] and [BLOCK] orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, changes [TND] and [RCV] orbs into [PSY] orbs",
        specialName: "Clone-Clone Montage",
        captain: "Boosts ATK of PSY characters by 2.5x"
    },
    803: {
        special: "Deals 8 hits of random DEX damage to random enemies, boosts ATK of all characters by 1.1x for 3 turns",
        specialNotes: "#{randomHits : 8}",
        specialName: "Black Spear Formation: All-Out Attack!",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x"
    },
    804: {
        special: "Deals 8 hits of random DEX damage to random enemies, boosts ATK of all characters by 1.1x for 3 turns",
        specialNotes: "#{randomHits : 8}",
        specialName: "Black Spear Formation: All-Out Attack!",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x, deals 1x character's ATK in DEX damage to all enemies at the end of each turn"
    },
    805: {
        special: "Reduces crew's current HP by 20%, deals 10x the amount of HP subtracted in INT damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "White Vine",
        captain: "Boosts ATK of Striker characters by 2x",
        specialNotes: "#{orb : 1.75x}"
    },
    806: {
        special: "Reduces crew's current HP by 20%, deals 10x the amount of HP subtracted in INT damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "White Vine",
        captain: "Boosts ATK of Striker characters by 2x, reduces damage received up to 30% depending on the crew's current HP",
        specialNotes: "#{orb : 1.75x}"
    },
    807: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        specialName: "Thunder Charge: Swing Arm",
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    808: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Thunder Charge: Swing Arm",
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    809: {
        captain: "Boosts ATK and RCV of Powerhouse characters by 1.5x",
        specialName: "Lola's Attack Chance",
        special: "Reduces the defense of all enemies by 80% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    810: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.5x, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Lola's Attack Chance",
        special: "Reduces the defense of all enemies by 80% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    811: {
        specialName: "Birdbrain Present",
        special: "Changes own orb into DEX, switches orbs between slots once"
    },
    812: {
        specialName: "Hell Howl",
        special: "Sharply reduces the defense of all enemies for 1 turn"
    },
    813: {
        specialName: "Sticky Spider Net",
        special: "Delays all enemies for 1 turn, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}"
    },
    814: {
        specialName: "Carpet Scratch",
        special: "Deals 13x character's ATK in DEX damage to a single enemy, changes captain's orb into [TND]"
    },
    815: {
        captain: "Boosts ATK by 2.5x following a chain of STR > INT > DEX attacks no lower than Good",
        specialName: "Brick Bat",
        special: "Deals 10 hits of 5,000 fixed damage to random enemies",
        specialNotes: "#{fixed} #{randomHits : 10}"
    },
    816: {
        captain: "Boosts ATK by 2.75x following a chain of STR > INT > DEX attacks no lower than Good",
        specialName: "Brick Bat",
        special: "Deals 10 hits of 5,000 fixed damage to random enemies",
        specialNotes: "#{fixed} #{randomHits : 10}"
    },
    817: {
        specialName: "[PSY] Slot Change [STR]",
        special: "Changes [PSY] orbs into [STR] orbs"
    },
    818: {
        specialName: "Quick Change",
        special: "Switches orbs between slots once"
    },
    819: {
        specialName: "Hyper Burst",
        special: "Deals 13x character's ATK in character's type damage to all enemies"
    },
    820: {
        specialName: "[TND] Slot Change [INT]",
        special: "Changes [TND] orbs into [INT] orbs"
    },
    821: {
        specialName: "Slot Shuffle",
        special: "Randomizes all orbs"
    },
    822: {
        specialName: "Patch Job",
        special: "Boosts RCV of all characters by 100 for 3 turns"
    },
    823: {
        specialName: "Slot Rate Up [INT]",
        special: "Slightly boosts chances of getting [INT] orbs for 3 turns"
    },
    824: {
        specialName: "Auto Repair",
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns"
    },
    825: {
        captain: "Boosts ATK and HP of STR characters by 1.5x",
        specialName: "Energy of the Ancient Knight",
        special: "Boosts ATK of STR characters by 200 for 1 turn"
    },
    826: {
        captain: "Boosts ATK and HP of DEX characters by 1.5x",
        specialName: "Weakness of the Ancient Knight",
        special: "Delays all enemies for 1 turn, reduces the ATK of all characters by 80% for 2 turns"
    },
    827: {
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        specialName: "Poison of the Ancient Knight",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.05x for 999 turns"
    },
    828: {
        specialName: "Surprise Stab",
        special: "Deals 3x character's ATK in [PSY] damage to one enemy, Boosts ATK of Slasher and Driven characters by 1.75x for 1 turn if used below 20% HP",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}" 
    },
    829: {
        specialName: "Surprise Stab",
        special: "Deals 3x character's ATK in [PSY] damage to one enemy, Boosts ATK of Slasher and Driven characters by 1.75x for 1 turn if used below 20% HP",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}" 
    },
    830: {
        captain: "Boosts ATK of Cerebral and Striker characters by 1.75x, deals 2 times the damage received in the previous turn in DEX damage to all enemies at the end of each turn",
        specialName: "Karma Conviction",
        special: "Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [DEX] orbs, changes the orbs in the bottom row into [QCK] orbs"
    },
    831: {
        captain: "Boosts ATK of Cerebral and Striker characters by 2x, deals 5 times the damage received in the previous turn in DEX damage to all enemies at the end of each turn",
        specialName: "Karma Conviction",
        special: "Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [DEX] orbs, changes the orbs in the bottom row into [QCK] orbs"
    },
    832: {
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Burn Bazooka",
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captainNotes: "#{captainProportional : lower : 1 + 1.5 * (1 - (remaining HP) / (total HP)) : 1 : 2.5}"
    },
    833: {
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Burn Bazooka",
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captainNotes: "#{captainProportional : lower : 1 + 1.75 * (1 - (remaining HP) / (total HP)) : 1 : 2.75}"
    },
    834: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        specialName: "Yellow Gun & Gero Gero Gun",
        special: "Changes own orb into [QCK] and the captain's orb into [PSY]"
    },
    835: {
        captain: "Boosts ATK and HP of Cerebral characters by 2x",
        specialName: "Thrust Pad Cannon",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    836: {
        captain: "Boosts ATK and HP of Cerebral characters by 2x, deals 5 times the damage received in the previous turn in STR damage to all enemies at the end of each turn",
        specialName: "Thrust Pad Cannon",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    837: {
        captain: "Boosts ATK of Driven characters by 2x",
        specialName: "Gas Robe",
        special: "Poisons all enemies, boosts ATK of Driven characters by 1.75x for 2 turns",
        specialNotes: "#{poison}"
    },
    838: {
        captain: "Boosts ATK of Driven characters by 2.5x",
        specialName: "Gas Robe",
        special: "Poisons all enemies, boosts ATK of Driven characters by 1.75x for 2 turns"
    },
    839: {
        captain: "Boosts ATK of Striker characters by 2x",
        specialName: "Demon Bamboo",
        special: "Changes own orb into [INT], boosts own ATK by 2x for 1 turn, deals 15x character's ATK in INT damage to one enemy"
    },
    840: {
        captain: "Boosts ATK of Striker characters by 2.5x",
        specialName: "Demon Bamboo",
        special: "Changes own orb into [INT], boosts own ATK by 2x for 1 turn, deals 15x character's ATK in INT damage to one enemy",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: If Vergo has a [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ]
    },
    841: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn, deals 3x character's ATK in PSY damage to all enemies at the end of each turn",
        specialName: "Snow Rabbit",
        special: "Delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.25x for 2 turns"
    },
    842: {
        captain: "Recovers 5x character's RCV in HP at the end of each turn, deals 5x character's ATK in PSY damage to all enemies at the end of each turn",
        specialName: "Snow Rabbit",
        special: "Delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.25x for 2 turns"
    },
    843: {
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.5x",
        specialName: "Arms-Morphosis: Missile Girl",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Shooter characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Shooter, Striker and Slasher characters by 1.5x in the following turn."
    },
    844: {
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 2x",
        specialName: "Arms-Morphosis: Missile Girl",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Shooter characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Shooter, Striker and Slasher characters by 1.5x in the following turn."
    },
    845: {
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2.5x after the 22nd hit",
        specialName: "Gust: Matasaburo",
        special: "Randomizes all orbs and changes own orb into [QCK]"
    },
    846: {
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 30th hit, by 3.5x after the 40th hit",
        specialName: "Gust: Matasaburo",
        special: "Randomizes all orbs and changes own orb into [QCK]",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of all characters by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Aquire Sailor Ability 2: Boosts this character's attack against [DEX] characters by 2x" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    847: {
        captain: "Boosts ATK of all characters by 1.5x if HP is below 30% at the start of the turn",
        specialName: "Sturdy Boat: Launch",
        special: "Reduces Despair duration by 5 turns, boosts ATK of all characters by 5% for 3 turns, reduces damage received by 10% for 3 turns, amplifies the effect of orbs by 1.15x for 3 turns, recovers 2x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "#{orb : 1.15x}"
    },
    848: {
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        specialName: "Sturdy Boat: Launch",
        special: "Reduces Despair duration by 5 turns, boosts ATK of all characters by 5% for 3 turns, reduces damage received by 10% for 3 turns, amplifies the effect of orbs by 1.15x for 3 turns, recovers 2x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "#{orb : 1.15x}"
    },
    849: {
        captain: "Boosts ATK of Shooter characters by 1.75x",
        specialName: "Battle Franky 9",
        special: "Deals 5 hits of random STR damage to random enemies, reduces the defense of all enemies by 50% for 2 turns"
    },
    850: {
        captain: "Boosts ATK of Striker and Cerebral characters by 1.5x",
        specialName: "First-class Assistant of the Passionate Worker",
        special: "Changes the top right orb into [DEX], the middle right orb into [STR] and the bottom right orb into [QCK], seals himself for 3 turns"
    },
    851: {
        captain: "Boosts ATK of Driven characters by 1.5x",
        specialName: "Snow Country Speciality: Snow Powder Makeup",
        special: "Deals 20x character's ATK in character's type damage to one enemy, locks all orbs for 1 turn"
    },
    852: {
        captain: "Boosts ATK of Driven characters by 2x",
        specialName: "Snow Country Speciality: Snow Powder Makeup",
        special: "Deals 20x character's ATK in character's type damage to one enemy, locks all orbs for 1 turn"
    },
    853: {
        specialName: "Robson: Serious Mode",
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Powerhouse and Fighter characters by 1.2x for 3 turns"
    },
    854: {
        captain: "Boosts ATK of DEX chracters by 1.5x, reduces damage received by 10%",
        specialName: "Guard Point: Winter Coat",
        special: "Reduces damage received by 50% for 3 turns, slightly boosts chances of getting [DEX] orbs for 3 turns"
    },
    855: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Shambles: Holiday Toast",
        special: "Changes captain's orb into [RCV], recovers 15x character's RCV in HP"
    },
    856: {
        captain: "Boosts ATK of Slasher characters by 2.5x",
        specialName: "Shambles: Holiday Toast",
        special: "Changes captain's orb into [RCV], recovers 15x character's RCV in HP"
    },
    857: {
        captain: "Boosts ATK of PSY characters by 2x",
        specialName: "Bonney's Holiday Feast",
        special: "Changes adjacent orbs into [RCV] orbs, boosts RCV of PSY characters by 1.5x for 1 turn"
    },
    858: {
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        specialName: "Bonney's Holiday Feast",
        special: "Changes adjacent orbs into [RCV] orbs, boosts RCV of PSY characters by 1.5x for 1 turn"
    },
    859: {
        captain: "Boosts ATK of Driven characters by 1.5x, reduces damage received up to 10% depending on the crew's current HP",
        specialName: "Pleading at the Risk of One's Life",
        special: "Changes adjacent orbs into [RCV] orbs; if the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialNotes: "#{zombie}"
    },
    860: {
        captain: "Boosts ATK of Driven characters by 2x, reduces damage received up to 30% depending on the crew's current HP",
        specialName: "Pleading at the Risk of One's Life",
        special: "Changes adjacent orbs into [RCV] orbs; if the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialNotes: "#{zombie}"
    },
    861: {
        specialName: "Bewitching Lovely Iron Mace",
        special: "Deals 13x character's ATK in QCK damage to one enemy, reduces damage received by 75% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        captain: "Reduces damage received by 10%"
    },
    862: {
        captain: "Boosts ATK of QCK characters by 2x, reduces damage received by 10%",
        specialName: "Bewitching Lovely Iron Mace",
        special: "Deals 13x character's ATK in QCK damage to one enemy, reduces damage received by 75% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    863: {
        captain: "Boosts ATK of QCK characters by 1.75x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Snow Crystal Clima-Tact",
        special: "Reduces the defense of all enemies by 50% for 2 turns, reduces the ATK of all enemies by 10% for 2 turns"
    },
    864: {
        captain: "Boosts ATK of Free Spirit characters by 2x",
        specialName: "Slave Arrow",
        special: "Locks the chain multiplier at 2.5x for 2 turns, delays all enemies for 1 turn"
    },
    865: {
        captain: "Boosts ATK and HP of Free Spirit characters by 2x",
        specialName: "Slave Arrow",
        special: "Locks the chain multiplier at 2.5x for 2 turns, delays all enemies for 1 turn"
    },
    866: {
        captain: "Boosts ATK of Cerebral characters by 2x",
        specialName: "Cien Fleur Wing: The Storm",
        special: "Boosts ATK of Slasher and Cerebral characters by 1.3x for 2 turns, reduces Bind duration by 2 turns"
    },
    867: {
        captain: "Boosts ATK of all characters by 1.5x after the 12th hit in the chain",
        specialName: "Tabasco Star: The Storm",
        special: "Delays all enemies for 2 turns, deals 9x character's ATK in DEX damage to all enemies"
    },
    868: {
        captain: "Boosts ATK of all characters by 1.2x, recovers 1,000 HP at the end of the turn",
        specialName: "Heavy Gong: The Storm",
        special: "Deals 15x character's ATK in STR damage to one enemy, reduces Bind duration by 3 turns"
    },
    869: {
        captain: "Boosts ATK of Driven characters by 3x until the first hit other than Perfect",
        specialName: "Black Knight",
        special: "Changes adjacent orbs into matching orbs, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}"
    },
    870: {
        captain: "Boosts ATK of Driven characters by 3x until the first hit other than Perfect",
        specialName: "Black Knight",
        special: "Changes adjacent orbs into matching orbs, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}"
    },
    871: {
        captain: "Boosts ATK and RCV of QCK characters by 1.5x",
        specialName: "Hobby-Hobby Fruit",
        special: "Removes all enemies with HP below 20%",
        specialNotes: "The special bypasses all known protective buffs. If the enemy can revive after being defeated, however, the special will only reduce the enemy's HP to 0 and trigger their revive effect."
    },
    872: {
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        specialName: "Hobby-Hobby Fruit",
        special: "Removes all enemies with HP below 20%",
        specialNotes: "The special bypasses all known protective buffs. If the enemy can revive after being defeated, however, the special will only reduce the enemy's HP to 0 and trigger their revive effect."
    },
    873: {
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is below 30% at the start of the turn",
        specialName: "Nyan Nyan Swim",
        special: [
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.5x for 1 turn",
                "cooldown": [
                    13,
                    8
                ]
            },
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [
                    19,
                    14
                ]
            }
        ],
        specialNotes: "#{orb: 1.5x or 1.75x} #{stages}"
    },
    874: {
        captain: "Boosts ATK of Fighter characters by 3x if HP is below 30% at the start of the turn",
        specialName: "Nyan Nyan Swim",
        special: [
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.5x for 1 turn",
                "cooldown": [
                    13,
                    8
                ]
            },
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [
                    19,
                    14
                ]
            }
        ],
        specialNotes: "#{orb: 1.5x or 1.75x} #{stages}"
    },
    875: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        specialName: "Beto Launcher",
        special: "Changes the captain's orb into a matching orb, locks all orbs for 1 turn, deals 13x character's ATK in INT damage to all enemies"
    },
    876: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Cerebral and Driven characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Beto Launcher",
        special: "Changes the captain's orb into a matching orb, locks all orbs for 1 turn, deals 13x character's ATK in INT damage to all enemies"
    },
    877: {
        captain: "Boosts amount of Beli received by 2x",
        specialName: "Heaven's Do Art",
        special: "Reduces any damage received above 2,000 HP by 88% for 2 turns",
        specialNotes: "The exact formula for the damage received is: 2000 + ((total damage) - 2000) * 0.12"
    },
    878: {
        captain: "Boosts ATK of all characters by 1.5x, boosts amount of Beli received by 2x",
        specialName: "Heaven's Do Art",
        special: "Reduces any damage received above 2,000 HP by 88% for 2 turns",
        specialNotes: "The exact formula for the damage received is: 2000 + ((total damage) - 2000) * 0.12"
    },
    879: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Fighter characters by 1.75x",
        specialName: "Battle Preservation Fist: Manki Kayaku",
        special: "Randomly changes all orbs including [BLOCK] orbs into [G] orbs, deals random typeless damage to all enemies",
        specialNotes: "#{gOrbs}<br>#{random : 5,000 : 100,000}"
    },
    880: {
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Fighter characters by 2x",
        specialName: "Battle Preservation Fist: Manki Kayaku",
        special: "Randomly changes all orbs including [BLOCK] orbs into [G] orbs, deals random typeless damage to all enemies",
        specialNotes: "#{gOrbs}<br>#{random : 5,000 : 100,000}"
    },
    881: {
        captain: "Boosts ATK of Shooter and Free Spirit characters by 2x following a chain of Good > Great > Perfect hits",
        specialName: "Fighting Music: Conflict Chekera",
        special: "Increases damage received by 2x for 2 turns, reduces RCV by 90% for 2 turns, boosts ATK of Shooter and Free Spirit characters by 1.75x for 1 turn"
    },
    882: {
        captain: "Boosts ATK of Shooter and Free Spirit characters by 3x following a chain of Good > Great > Perfect hits",
        specialName: "Fighting Music: Conflict Chekera",
        special: "Increases damage received by 2x for 2 turns, reduces RCV by 90% for 2 turns, boosts ATK of Shooter and Free Spirit characters by 1.75x for 1 turn"
    },
    883: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.25x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    884: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    885: {
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 10%",
        specialName: "Arabesque Brick Fist: Sun",
        special: "Cuts the current HP of each enemy by 10%, boosts ATK of Fighter characters by 1.5x for 1 turn if HP is below 30% when the special is activated"
    },
    886: {
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        specialName: "Daisy Blade: First",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Slasher characters by 1.5x for 1 turn if HP is below 30% when the special is activated"
    },
    887: {
        captain: "Boosts ATK of Driven characters by 1.5x, boosts amount of Beli received by 1.2x",
        specialName: "Special Muggy Ball: Flashy",
        special: "Reduces the defense of all enemies by 80% for 1 turn, deals 15x character's ATK in QCK damage to all enemies"
    },
    888: {
        specialName: "Negative Ghost",
        special: "Slightly reduces the ATK of all enemies by 10% for 3 turns",
        specialNotes: "The reduction does not apply to damage from specials"
    },
    889: {
        captain: "Boosts ATK and RCV of DEX characters by 1.2x",
        specialName: "Ghost Rap",
        special: "Changes [STR] orbs into [DEX] orbs, deals 10x character's ATK in DEX damage to all enemies"
    },
    890: {
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        specialName: "Ghost Rap",
        special: "Changes [STR] orbs into [DEX] orbs, deals 10x character's ATK in DEX damage to all enemies"
    },
    891: {
        captain: "Boosts ATK and RCV of Powerhouse characters by 1.75x",
        specialName: "Resurrection of the Dead",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.25x for 1 turn"
        },
    892: {
        captain: "Boosts chain multiplier by 2x",
        specialName: "Hands of the Dead",
        special: "Switches orbs between slots three times"
    },
    893: {
        captain: "Boosts ATK of Powerhouse characters by 3x after scoring 3 Perfects in a row",
        specialName: "Oars Ball",
        special: "Reduces damage received by 50% for 1 turn, deals 30x character's ATK in STR damage to all enemies"
    },
    894: {
        captain: "Boosts ATK of Driven characters by 3x following a chain of Good > Great > Perfect hits",
        specialName: "Brick Bat: Black Box",
        special: "Empties all slots with [INT] orbs, deals several times the character's ATK in INT damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [INT] orbs consumed: 1 orb will give a 10x multiplier, 2 orbs 15x, 3 orbs 20x, 4 orbs 50x, 5 orbs 100x, 6 orbs 200x. It's not possible to activate the special without consuming at least one [INT] orb."
    },
    895: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        specialName: "Dying Chorus: Binks' Sake",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns"
    },
    896: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Dying Chorus: Binks' Sake",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns"
    },
    897: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        specialName: "Ground Death: Thirst",
        special: "Cuts the current HP of all enemies by 10%, randomizes all orbs and changes own orb into [STR]"
    },
    898: {
        captain: "Boosts ATK and HP of Striker and Cerebral characters by 1.5x",
        specialName: "Championship Fight: Little Garden Three",
        special: "Deals 10x character's ATK in QCK damage to all enemies, changes adjacent orbs into [G] orbs",
        specialNotes: "#{gOrbs}"
    },
    899: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 1.75x and their RCV by 1.25x",
        specialName: "Hymn to Friendship: \"Okama Way\" Two",
        special: "Reduces Despair duration by 5 turns, recovers 10x character's RCV in HP"
    },
    900: {
        captain: "Boosts ATK of Shooter characters by 2x if HP is above 99% at the start of the turn",
        specialName: "Franky Destroy Gun",
        special: "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
    },
    901: {
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "Franky Destroy Gun",
        special: "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
    },
    902: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.25x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    903: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    904: {
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        specialName: "Yokozuna Slap!",
        special: "Deals 20x character's ATK in STR damage to one enemy, delays all enemies for 1 turn"
    },
    905: {
        captain: "Boosts ATK of Slasher characters by 2.5x if HP is below 30% at the start of the turn",
        specialName: "Two Gorilla Cut",
        special: [
            {
                "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 turns",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 turns",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 turns",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    906: {
        captain: "Boosts ATK of Slasher characters by 2.75x if HP is below 30% at the start of the turn",
        specialName: "Two Gorilla Cut",
        special: [
            {
                "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 turns",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 turns",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 turns",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    907: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 turn, locks all orbs for 1 turn, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x if HP is below 30% at the start of the turn"
    },
    908: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 turn, locks all orbs for 1 turn, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.75x if HP is below 30% at the start of the turn"
    },
    909: {
        captain: "Boosts ATK and RCV of PSY characters by 1.5x",
        specialName: "Hero of Justice! Chopper Mask!!",
        special: "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 turns"
    },
    910: {
        specialName: "Hero of Justice! Chopper Mask!!",
        special: "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 turns",
        captain: "Boosts ATK of PSY characters by 2x, their RCV by 1.5x, makes INT orbs \"beneficial\" to PSY characters",
        captainNotes: "#{beneficial}"
    },
    911: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 turn",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialNotes: "#{stages}"
    },
    912: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 turn",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        specialNotes: "#{stages}"
    },
    913: {
        captain: "Boosts ATK of QCK characters by 2.5x if they have a matching orb",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 turn, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    914: {
        captain: "Boosts ATK of QCK characters by 3x if they have a matching orb, by 1.2x otherwise",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 turn, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    915: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn"
    },
    916: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.75x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn"
    },
    917: {
        captain: "Boosts ATK of Shooter characters by 1.5x",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 turn, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    918: {
        captain: "Boosts ATK of Shooter characters by 1.75x, recovers a small amount of health at the end of each turn",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 turn, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    919: {
        specialName: "Spike of the Warrior Defending Her Country",
        special: "Reduces damage received from STR enemies by 50% for 2 turns"
    },
    920: {
        specialName: "Snake Bow of the Warrior Defending Her Country",
        special: "Changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [TND] orbs"
    },
    921: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 turns"
    },
    922: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.75x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 turns"
    },
    923: {
        captain: "Boosts ATK of Driven Characters by 2.5x if HP is below 30% at the start of the turn, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    924: {
        captain: "Boosts ATK of Driven Characters by 2.75x if HP is below 30% at the start of the turn, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    925: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    926: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    927: {
        captain: "Boosts ATK and HP of Driven characters by 1.5x",
        specialName: "Unwavering Hammer of Justice",
        special: "Increases damage received by 1.5x and boosts ATK of Slasher and Driven characters by 1.2x for 3 turns"
    },
    928: {
        captain: "Boosts ATK of Driven characters by 1.75x while above 30% HP and boosts ATK of Striker characters by 1.75x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns",
        specialName: "Hell Wisdom Rush"
    },
    929: {
        captain: "Boosts ATK of Driven characters by 2.25x while above 30% HP and boosts ATK of Striker characters by 2.25x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns",
        specialName: "Hell Wisdom Rush"
    },
    930: {
        captain: "Boosts chain multiplier by 2x",
        specialName: "Blugori Manipulation Song",
        special: "Changes orbs in left column to [DEX], then [QCK], then [INT]. Locks himself for 3 turns."
    },
    931: {
        specialName: "Large Axe of Punishment",
        special: "Deals 13x ATK to 1 enemy in [DEX] Damage. Turns [BLOCK] orbs into [RCV] orbs"
    },
    932: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
        specialNotes: "#{stages}"	
        },
    933: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        limit: "This character has a limit break path",
    },
    934: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes Perfects harder to hit for 1 turn. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into Matching",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)"
    },
    935: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes Perfects harder to hit for 1 turn. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into matching",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)"
    },
    936: {
        captain: "Boosts Chain Multiplier by 3x",
        specialName: "Gum-Gum Giant Jet Shell",
        special: "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 turns",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    937: {
        captain: "Boosts Chain Multiplier by 3.5x and boosts HP by 1.25x",
        specialName: "Gum-Gum Giant Jet Shell",
        special: "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 turns",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    938: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Cerebral characters by 1.5x",
        specialName: "Cyclone Burst",
        special: "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs"
    },
    939: {
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Cerebral characters by 2x",
        specialName: "Cyclone Burst",
        special: "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs",
        limit: "This character has a limit break path",
    },
    940: {
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 turn"
    },
    941: {
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 2.25x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 turn"
    },
    942: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 turn"
    },
    943: {
        captain: "Boosts ATK of [STR] characters by 2.25x and their HP by 1.75x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 turn"
    },
    944: {
        captain: "Boosts ATK and RCV of Driven characters by 1.2x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 turn"
    },
    945: {
        captain: "Boosts ATK and RCV of Driven characters by 1.75x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 turn"
    },
    946: {
        specialName: "Lock-on Iron Ball",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Striker characters by 1.75x",
        special: "Change Friend Captain and changes own orb into [INT]"
    },
    947: {
        captain: "Boosts ATK of [INT] characters by 1.5x, Boosts damage of [INT] specials by 1.5x",
        specialName: "Flame Flash",
        special: "[STR] and [INT] characters gain 1.3x ATK for 1 turn. Deals 10x character's ATK in [INT] damage to all enemies",
        captainNotes: "#{noFixedPerc}"
    },
    948: {
        captain: "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.2x",
        specialName: "Twin Cannons",
        special: "Randomly changes all orbs to either [STR] or [INT]. Deals random [STR] damage",
        specialNotes: "#{random : 7,000 : 18,000}",
    },
    949: {
        captain: "Boosts ATK of Slasher characters by 2x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Ties with Ace",
        special: "Reduces Silence duration by 3 turns, and recovers 4,000 HP",
        specialNotes: "#{silence}",
    },
    950: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
        specialName: "Flame Commandment: Fire Pillar",
        special: "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 turn. Reduces damage received by 50% for 1 turn.",
        specialNotes: "Reducing Special Cooldown works as if you took an extra turn"
    },
    951: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.75x after scoring 3 Perfects in a row",
        specialName: "Flame Commandment: Fire Pillar",
        special: "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 turn. Reduces damage received by 50% for 1 turn.",
        specialNotes: "Reducing Special Cooldown works as if you took an extra turn"
    },
    952: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.2x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    953: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.5x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    954:{
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        specialName: "Goldfish Fencing! I'll Dye the Sea Red with Your Blood",
        special: "Reduces the defense of all enemies by 80% for 2 turns"
    },
    955:{
        captain: "Boosts ATK and HP of [PSY] characters by 1.5x",
        specialName: "Get Rich Quick Scheme! We're All Gonna Be Rich",
        special: "Boosts ATK against enemies with reduced defense by 1.2x for 2 turns"
    },
    956:{
        captain: "Boosts ATK and HP of [INT] characters by 1.5x",
        specialName: "Fishman karate! I'll Finish You",
        special: "Boosts ATK of Powerhouse characters by 1.2x for 2 turns"
    },
    957:{
        specialName: "First Aid",
        special: "Recover 2,000 HP"
    },
    958:{
        specialName: "Bind Purge",
        special: "Reduces Bind duration by 2 turns"
    },
    959:{
        specialName: "Captain Soul Recovery",
        special: "Reduces Despair duration by 2 turns"
    },
    960:{
        specialName: "Slot Color Shuffle",
        special: "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs"
    },
    961:{
        specialName: "Slot Power Light",
        special: "Amplifies the effect of orbs by 1.25x for 1 turn"
    },
    962:{
        specialName: "Captain Slot Change RCV",
        special: "Changes captain's orb into [RCV]"
    },
    963:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 2x",
        specialName: "Saint Charloss' Stroll",
        special: "Reduces the defense of all enemies by 100% for 1 turn and randomizes all orbs"
    },
    964:{
        captain: "Boosts ATK, HP, and RCV of characters with cost between 50 and 55 by 1.5x",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 turn. If \"Wrath of the Creator Bloodline\" is used again in the same turn the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    965:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 1.5x, recovers 500 HP at the end of each turn",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 turn. If \"Wrath of the Creator Bloodline\" is used again in the same turn the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    966:{
        captain: "Boosts ATK of Driven characters by 2.25x",
        specialName: "Repel",
        special: "Empties slots with [QCK] orbs, deals [QCK] damage based on number of [QCK] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [QCK] orbs consumed: 0 orbs - Can't activate; 1 orb - 14x ATK; 2 orbs - 21x ATK; 3 orbs - 35x ATK; 4 orbs - 49x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    967:{
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Surgeon of Death's First Aid Surgery",
        special: "Recovers 20x character's RCV in HP. Switches orbs between slots twice"
    },
    968:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    969:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    970:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    971:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    972:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    973:{
        captain: "Boosts ATK of Powerhouse characters by 2x if HP is above 99% at the start of the turn",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    974:{
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    975:{
        captain: "Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 turn. Protects from defeat as long as HP is above 50% for 1 turn",
        specialNotes: "#{zombie}"
    },
    976:{
        captain: "Boosts ATK of Driven characters by 2x. Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 turn. Protects from defeat as long as HP is above 50% for 1 turn",
        specialNotes: "#{zombie}"
    },
    977:{
        captain: "Boosts ATK of Shooter characters by 2x",
        specialName: "Yata no Kagami (Sacred Mirror)",
        special: [
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    978:{
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.25x and boosts HP of Shooter characters by 1.5x",
        specialName: "Yata no Kagami (Sacred Mirror)",
        special: [
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire new Captain Ability: Reduces cooldown of Shooter specials by 3 turns at the start of the fight, boosts ATK of Shooter characters by 2.35x and boosts HP of Shooter characters by 1.5x" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    979: {
        captain: "Boosts ATK of [PSY] and [DEX] characters by 1.75x and their RCV by 1.2x",
        specialName: "Flintlock Barrage",
        special: "Randomly changes all orbs into either [PSY] or [DEX] orbs, deals random PSY damage to all enemies",
    },
    980: {
        captain: "Boosts ATK of [DEX] and [STR] characters by 1.75x and their RCV by 1.2x",
        specialName: "Hidden King Mallet",
        special: "Randomizes all orbs and changes own orb into [DEX]"
    },
    981: {
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x and sharply reduces their RCV",
        captainNotes: "The RCV Reduction is around 90%",
        specialName: "Martial Art Diving Fist",
        special: "Boosts own ATK by 1.75x for 1 turn and deals 800 fixed damage to one enemy",
        specialNotes: "#{fixed}"
    },
    982: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
    },
    983: {
        captain: "Boosts ATK of Slasher characters by 2.25x, makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
    },
    984: {
        captain: "Boosts ATK of Striker characters by 2.25x",
        specialName: "Shrouds and Rattling Knot",
        special: "Delays all enemies for 1 turn and locks all orbs for 1 turn"
    },
    985:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    986:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    987:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    988:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    989:{
        captain: "Boosts ATK of characters with cost above 20 and below 30 by 2.5x, but reduces the HP of every character by 90%",
        special: "Changes the orbs in the left column into [G], [QCK] and [DEX], the orbs in the right column into [STR], [PSY] and [INT]",
        specialName: "Bluff Piracy"
    },
    990: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    991: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    992: {
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest"
    },
    993: {
        captain: "Boosts ATK of [QCK] characters by 2.5x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [QCK] characters by 2.75x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Boosts HP, RCV, and ATK of [QCK] characters by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    994: {
        captain: "Boosts amount of Beli received by 2x",
        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "Peeping Mind",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 turn. Displays the status of all enemies.",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 turn. Displays the status of all enemies.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on turns', and 'Effect after Death'<br>#{stages}",
        sailor: "Restores her own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    995:{
        captain: "Boosts amount of Beli received by 3x",
        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "Peeping Mind",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 turn. Displays the status of all enemies.",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 turn. Displays the status of all enemies.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on turns', and 'Effect after Death'<br>#{stages}",
        sailor: "Restores her own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    996: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
        specialNotes: "#{stages}"
    },
    997: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
        specialNotes: "#{stages}",
        limit: "This character has a limit break path",
    },
    998: {
        captain: "Boosts ATK of Driven characters by 2x and reduces cooldown of all specials by 1 turn at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 turns, deals 50x character's ATK as typeless damage to all enemies at the end of the turn for 5 turns"
    },
    999: {
        captain: "Boosts ATK of Driven characters by 2.25x and reduces cooldown of all specials by 2 turns at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 turns, deals 50x character's ATK as typeless damage to all enemies at the end of the turn for 5 turns",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [DEX] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by ?%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
        ]
    },
    1000: {
        captain: "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the turn each time you hit a Good. Heals for .5x his RCV at the end of the turn each time you hit a Great",
        captainNotes: "#{captainProportional : higher : 1 + 1 * (remaining HP) / (total HP) : 2 : 1 }",
        special: "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 turns",
        specialName: "Love Sacrifice"
    },
    1001: {
        captain: "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the turn each time you hit a Good. Heals for .5x his RCV at the end of the turn each time you hit a Great",
        captainNotes: "#{captainProportional : higher : 1 + 1 * (remaining HP) / (total HP) : 2 : 1 }",
        special: "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 turns",
        specialName: "Love Sacrifice"
    },
    1002: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Reduces Paralysis duration by 3 turns and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
        specialNotes: "Paralysis causes that unit to have a chance of not attacking and breaking chain"
    },
    1003: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis duration by 3 turns and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
        specialNotes: "Paralysis causes that unit to have a chance of not attacking and breaking chain"
    },
    1004: {
        captain: "Boosts RCV of all characters by 1.5x",
        specialName: "Hilarious Combination",
        special: "Changes the orbs in the left column into [RCV] orbs"
    },
    1005: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 turn"
    },
    1006: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 turn"
    },
    1007: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 1.5x",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1008: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 2x. Recovers 3x character's RCV in HP at the end of each turn",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1009: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of [STR] and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    1010:{
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Boosts own ATK by 1.3x for 5 turns, reduces damage received by 20% for 5 turns, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1011:{
        captain: "Boosts ATK of Driven characters by 1.75x, and boosts ATK of Powerhouse characters by 1.5x",
        captainNotes: "The bonus is cumulative. Driven Powerhouse characters get a 2.625x bonus.",
        special: "Boosts own ATK by 1.3x for 5 turns, reduces damage received by 20% for 5 turns, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1012: {
        specialName: "Phantom Snake Sword",
        special: "Changes the orbs in the left column into [RCV], [QCK] and [DEX], binds himself for 2 turns"
    },
    1013: {
        specialName: "Binding Iron Chain",
        special: "Boosts ATK against delayed enemies by 1.2x for 1 turn"
    },
    1014: {
        special: "Binds himself for 1 turn and makes Perfects easier to hit for 2 turns",
        specialName: "Scapegoat Substitute",
        captain: "Boosts ATK of Powerhouse characters by 2x, and Recovers 2x character's RCV in HP at the end of each turn"
    },
    1015: {
        captain: "Boosts ATK of [INT] characters by 2.75x if they have a matching orb",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 turns",
        specialName: "Hollow Eye Killing Shot"
    },
    1016: {
        captain: "Boosts ATK of [INT] characters by 3x if they have a matching orb, by 1.5x otherwise",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 turns",
        specialName: "Hollow Eye Killing Shot"
    },
    1017: {
        captain: "Boosts HP of Slasher characters by 1.5x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Ravaging Cutlass Dance",
        specialNotes: "#{specialProportional : lower : 75 * ( 1 - (remaining HP) / (total HP) )}",
    },
    1018: {
        captain: "Boosts ATK of Slasher characters by 1.5x and their HP by 2x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Ravaging Cutlass Dance",
        specialNotes: "#{specialProportional : lower : 75 * ( 1 - (remaining HP) / (total HP) )}",
    },
    1019: {
        captain: "Reduces damage received from [QCK] enemies by 50%",
        special: "Switches orbs between slots 2 times and deals 2000 fixed damage to one enemy",
        specialName: "Blacksmithing Measurement: Double Slash",
        specialNotes: "#{fixed}"
    },
    1020: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.5x.",
        captainNotes: "This effect does not stack for characters that have both classes.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1021: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.75x.",
        captainNotes: "This effect does not stack for characters that have both classes.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1022: {
        captain: "Boosts ATK of all characters by 2x and boosts amount of Beli received by 1.2x",
        special: "Deals 13x character's ATK as [PSY] damage to all enemies. Changes [BOMB], [EMPTY], and [TND] orbs to [PSY]",
        specialName: "Gum-Gum Gigant Rifle: New Star"
    },
    1023: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        special: "Deals 13x characters ATK in INT damage to all enemies, boosts atk of Free Spirit characters by 1.75x for one turn.",
        specialName: "Flame Mirror: Dawn"
    },
    1024: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Amplifies the effect of orbs for 2 turns, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialNotes: "Below 30% -> 1.75x orb boost, between 30% and 70% -> 1.5x, above 70% -> 1.25x",
        specialName: "Eight-Impact Fist! Blow of Resentment"
    },
    1025: {
        captain: "Boosts ATK of Powerhouse characters by 2x and boosts the HP of Striker characters by 2x",
        captainNotes: "A character with both classes will get both boosts",
        special: "Amplifies the effect of orbs for 2 turns, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialNotes: "Below 30% -> 1.75x orb boost, between 30% and 70% -> 1.5x, above 70% -> 1.25x",
        specialName: "Eight-Impact Fist! Blow of Resentment",
        limit: [
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK and HP of Powerhouse and Striker characters by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire new Captain Ability: Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Powerhouse characters by 2.25x and boosts the HP of Striker characters by 2x" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1026: {
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb, and switches orbs between slots three times"
    },
    1027: {
        captain: "Boosts ATK and RCV of Fighter characters by 2x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb, and switches orbs between slots three times"
    },
    1028: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 turns.",
        specialNotes: "Buffalo's Captain as a Special essentially"
    },
    1029: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain and by 3.5x after the 36th hit",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 turns.",
        specialNotes: "Buffalo's Captain as a Special essentially"
    },
    1030: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 turn."
    },
    1031: {
        captain: "Boosts ATK of Powerhouse characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 turn."
    },
    1032: {
        captain: "Boosts ATK of Striker and Slasher characters by 1.5x and reduces cooldown of Slasher and Striker characters by 1 turn at the start of the fight",
        special: "Reduces Special Cooldown of Slasher and Striker specials by 1 turn. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
        specialName: "Surprise Pincer Attack"
    },
    1033: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.25x and reduces cooldown of Slasher and Striker characters by 2 turns at the start of the fight",
        special: "Reduces Special Cooldown of Slasher and Striker specials by 1 turn. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
        specialName: "Surprise Pincer Attack",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK and HP of Slasher and Striker characters by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Aquire Potential #: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1034: {
        captain: "Boosts ATK of Striker characters by a variable amount depending on how many Strikers are on your team. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        captainNotes: "ATK boost with 1 Striker is 1.25x. With 2 Strikers: 1.5x. With 3 Strikers: 1.75x. With 4 Strikers: 2x. With 5 Stikers: 2.5x. With 6 Strikers: 2.75x",
        special: "Protects from defeat for 1 turn, and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )} <br> #{zombie}",
        specialName: "Bari Bari No Pistol"
    },
    1035: {
        captain: "Boosts ATK of Striker characters by a variable amount depending on how many Strikers are on your team. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        captainNotes: "ATK boost with 1 Striker is 1.25x. With 2 Strikers: 1.5x. With 3 Strikers: 1.75x. With 4 Strikers: 2x. With 5 Stikers: 2.5x. With 6 Strikers: 2.75x",
        special: "Protects from defeat for 1 turn, and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )} <br> #{zombie}",
        specialName: "Bari Bari No Pistol",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of STR characters by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    1036: {
        captain: "Boosts ATK of Free Spirit characters by 2x after scoring 3 Perfects in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
        specialNotes: "HP>99%: Middle Left and Bottom Left Orbs into matching <br> 99%>HP>30%: Left Column to [G] orbs <br> HP<30%: Left Column to [RCV]"
    },
    1037: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
        specialNotes: "HP>99%: Middle Left and Bottom Left Orbs into matching <br> 99%>HP>30%: Left Column to [G] orbs <br> HP<30%: Left Column to [RCV]"
    },
    1038: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.2x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1039: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.5x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1040: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1041: {
        captain: "Boosts ATK and HP of [STR] characters by 2x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1042: {
        captain: "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size"
    },
    1043: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.75x if they have a matching Orb, by 2x otherwise, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size"
    },
    1044: {
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
        specialName: "Gamma Knife",
        special: [
            {
                "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in fixed PSY damage to one enemy.",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in fixed PSY damage to one enemy.",
                "cooldown": [ 25, 20 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1045: {
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
        specialName: "Gamma Knife",
        special: [
            {
                "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in fixed PSY damage to one enemy.",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in fixed PSY damage to one enemy.",
                "cooldown": [ 25, 20 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1046: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1047: {
        captain: "Boosts ATK of Free Spirit characters by 3.5x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1048: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.2x",
        special: "Reduces Paralysis duration by 3 turns and Recovers 4x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Mother's Wish to Fight The World"		
    },
    1049: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x, when HP is low the ATK multiplier becomes 2.25x",
        captainNotes: "The low HP threshold is estimated to be 30%",
        special: "Reduces Paralysis duration by 3 turns and Recovers 4x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Mother's Wish to Fight The World"		
    },
    1050: {
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces Bind duration by 4 turns, and Reduces damage received by 50% for 2 turns",
        specialName: "Dereshishishi Towards Hope"
    },
    1051: {
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces Bind duration by 4 turns, and Reduces damage received by 50% for 2 turns",
        specialName: "Dereshishishi Towards Hope"
    },
    1052: {
        captain: "Recovers 1,000 HP at the end of each turn",
        special: "Reduces Silence duration by 2 turns",
        specialName: "Knowledge the World is Afraid of",
        specialNotes: "#{silence}",
    },
    1053: {
        captain: "Boosts RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Despair duration by 3 turns, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1054: {
        captain: "Boosts RCV of Cerebral characters by 2x",
        special: "Reduces Paralysis and Despair duration by 3 turns, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1055: {
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 turns ",
        specialName: "Snake Press"
    },
    1056: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.25x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 turns ",
        specialName: "Snake Press"
    },
    1057: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1058: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.25x",
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1059: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.2x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Strong Bow of Rejection"
    },
    1060: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Strong Bow of Rejection"
    },
    1061: {
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Locks the chain multiplier at 2x for 2 turns",
        specialName: "Instructions to the Warriors"
    },
    1062: {
        captain: "Boosts ATK of Cerebral characters by 2x and Recovers 2x character's RCV in HP at the end of each turn",
        special: "Recovers 13x character's RCV in HP",
        specialName: "Timeless Art of Self-Defense"
    },
    1063: {
        captain: "Boosts ATK and HP of Shooter characters by 1.2x",
        special: "Boosts ATK of Shooter characters by 1.3x for 1 turn",
        specialName: "Shooting Power Light"
    },
    1064: {
        captain: "Boosts ATK and HP of [INT] characters by 1.2x",
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns",
        specialName: "Auto Repair"
    },
    1065: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Slot Power Light"
    },
    1066: {
        captain: "Boosts ATK and HP of [PSY] characters by 1.2x",
        special: "Adds .1x to Chain multiplier for 1 turn",
        specialName: "Chain Plus Light"
    },
    1067: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 turn",
        specialName: "Attack Boost Light"
    },
    1068: {
        captain: "Boosts chain multiplier by 1.5x",
        special: "Changes captain's orb into [QCK]",
        specialName: "Captain Slot Change QCK"
    },
    1069: {
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1070: {
        captain: "Boosts ATK of Driven characters by 2.25x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1071: {
        captain: "Boosts ATK of characters with cost 20 or less by 1.5x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 turn.",
        specialName: "Emerald Porcupine Robe"
    },
    1072: {
        captain: "Boosts ATK of characters with cost 20 or less by 2x and boosts the HP of Powerhouse characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 turn.",
        specialName: "Emerald Porcupine Robe"
    },
    1073: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Deals 5x ATK in [QCK] damage to all enemies and randomizes all orbs",
        specialName: "Drilling Hooks"
    },
    1074: {
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction"
    },
    1075: {
        captain: "Boosts ATK and HP of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction",
        limit: "This character has a limit break path",
    },
    1076:{
        captain: "Boosts ATK of Striker and Free Spirit characters by 1.75x",
        special: [
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Haute Couture: Patchwork"
    },
    1077:{
        captain: "Boosts ATK of Striker and Free Spirit characters by 2.25x and their RCV by 1.5x",
        special: [
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Haute Couture: Patchwork",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK of Striker characters by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker and Free Spirit characters by 2.45x and their RCV by 1.5x" },
            { "description": "Aquire Sailor Ability 2: Boosts this character's attack against DEX characters by 2x" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    1078: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 turns",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Chiyupopo"
    },
    1079: {
        captain: "Recovers 4x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 turns",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Chiyupopo",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis for 1 turn for herself" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire Sailor Ability 2: Reduces Silence duration against this unit by 2 turns" },
            { "description": "Boosts base HP by 65" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    1080: {
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 turn",
        specialName: "Trueno Bastardo"
    },
    1081: {
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 turn",
        specialName: "Trueno Bastardo",
        limit: "This character has a limit break path",
    },
    1082: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 turns, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialNotes: "Below 30% -> 1.75 boost, between 30% and 70% -> 1.5, above 70% -> 1.2",
        specialName: "Drill Dragon: Drill Nail"
    },
    1083: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.5x at the start of the chain, and by 3x after the 3rd Perfect in a row",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 turns, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialNotes: "Below 30% -> 1.75 boost, between 30% and 70% -> 1.5, above 70% -> 1.2",
        specialName: "Drill Dragon: Drill Nail",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 5% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 5% chance to deal 7% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 5% chance to deal 10% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 10% chance to deal 10% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 15% chance to deal 15% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1084: {
        captain: "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
        special: "Cuts the current HP of each enemy by 20%. At the end of the turn, cuts the current HP of each enemy by 20% for 3 turns",
        specialNotes: "Does not stack with other 'end of turn damage' abilities",
        specialName: "Gravito: Heavens Fall"
    },
    1085: {
        captain: "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
        special: "Cuts the current HP of each enemy by 20%. At the end of the turn, cuts the current HP of each enemy by 20% for 3 turns",
        specialNotes: "Does not stack with other 'end of turn damage' abilities",
        specialName: "Gravito: Heavens Fall",
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Sailor Ability 1: Cannot be Blown Away" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts ATK, HP and RCV of Powerhouse and Driven characters by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1086: {
        captain: "Boosts ATK and RCV of Driven characters by 1.5x",
        specialNotes: "#{orb : 1.5x}",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "Lot Stiffen"
    },
    1087: {
        captain: "Boosts ATK of Driven characters by 2x and their RCV by 1.5x",
        specialNotes: "#{orb : 1.5x}",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "Lot Stiffen"
    },
    1088: {
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1089: {
        captain: "Boosts ATK of Slasher characters by 2x and boosts HP of Driven characters by 1.75x",
        captainNotes: "Slasher + Driven characters gain ATK AND HP",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1090: {
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt"
    },
    1091: {
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt"
    },
    1092: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        captainNotes: "The Lower the Health the Higher the Bonus, at 1HP the multiplier is 1.5x",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1093: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        captainNotes: "The Lower the Health the Higher the Bonus, at 1HP the multiplier is 2x",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1094: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 turn.",
        specialName: "Mass Juggling"
    },
    1095: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 turn.",
        specialName: "Mass Juggling"
    },
    1096: {
        captain: "Boosts ATK of Powerhouse characters by 3x after the 5th Perfect in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 turn.",
        specialName: "Crash Drumming"
    },
    1097: {
        captain: "Boosts ATK of Powerhouse characters by 3.5x after the 5th Perfect in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 turn.",
        specialName: "Crash Drumming"
    },
    1098: {
        captain: "Boosts chain multiplier by 2x",
        special: "Randomizes all orbs including [BLOCK] orbs and switches orbs between slots once.",
        specialName: "Mutation-Induced Thunder"
    },
    1099: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "\"To the End of the Clouds\""
    },
    1100: {
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "\"To the End of the Clouds\""
    },
    1101: {
        captain: "Boosts ATK of all characters by 2.25x until the first hit other than Perfect. Reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's current HP by 80%, deals 10x the amount of HP subtracted in typeless damage to one enemy. Boosts ATK of [STR] and [INT] characters by 1.75x for 1 turn",
        specialName: "Black Arm's Last Impact"
    },
    1102: {
        captain: "Boosts ATK of all characters by 2.75x until the first hit other than Perfect. Reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's current HP by 80%, deals 10x the amount of HP subtracted in typeless damage to one enemy. Boosts ATK of [STR] and [INT] characters by 1.75x for 1 turn",
        specialName: "Black Arm's Last Impact"
    },
    1103: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: [
            {
                "description": "Recovers 12% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "Recovers 24% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "Recovers 36% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Return Return Fruit"
    },
    1104: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.75x",
        special: [
            {
                "description": "Recovers 12% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "Recovers 24% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "Recovers 36% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Return Return Fruit"
    },
    1105: {
        captain: "Boosts ATK of Striker and Free Spirit characters by 1.5x, deals 2x character's ATK in typeless damage to all enemies at the end of each turn",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 2 turns. Makes Perfects easier to hit for 2 turns.",
        specialName: "Mosa Mosa Dance"
    },
    1106: {
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x, deals 2x character's ATK in typeless damage to all enemies at the end of each turn",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 2 turns. Makes Perfects easier to hit for 2 turns.",
        specialName: "Mosa Mosa Dance"
    },
    1107: {
        captain: "Boosts ATK and HP of Driven characters by 1.5x",
        special: "Deals 30x the character's ATK as Typeless damage to all enemies. Changes [BLOCK], [G], and [BOMB] orbs into Matching orbs for Driven characters. Boosts ATK of Driven characters by 1.75x for 1 turn.",
        specialName: "Lion's Threat: Imperial Earth Bind"
    },
    1108: {
        captain: "Boosts ATK and HP of Driven characters by 2x",
        special: "Deals 30x the character's ATK as Typeless damage to all enemies. Changes [BLOCK], [G], and [BOMB] orbs into Matching orbs for Driven characters. Boosts ATK of Driven characters by 1.75x for 1 turn.",
        specialName: "Lion's Threat: Imperial Earth Bind"
    },
    1109: {
        captain: "Boosts amount of Beli received by 1.5x",
        special: "Changes [BLOCK] orbs into [PSY] orbs for [PSY] characters",
        specialName: "Cat Burglar's Undercover Investigation"
    },
    1110: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.25x and the amount of Beli received by 1.5x",
        special: "Changes [BLOCK] orbs into [PSY] orbs for [PSY] characters",
        specialName: "Cat Burglar's Undercover Investigation"
    },
    1111: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.25x",
        special: "Amplifies the effect of orbs by 1.25x for 3 turns, recovers 8x character's RCV at the end of the turn for 3 turns.",
        specialName: "Impish Sultry Dance"
    },
    1112: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Amplifies the effect of orbs by 1.25x for 3 turns, recovers 8x character's RCV at the end of the turn for 3 turns.",
        specialName: "Impish Sultry Dance"
    },
    1113: {
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Fury of the Little Monster: \"This is War!!!\""  
    },
    1114: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2x"
    },
    1115: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2.5x"
    },
    1116: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe: Concassé",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    1117: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe: Concassé",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    1118: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "10,000-Carat Smile",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    1119: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "10,000-Carat Smile",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    1120: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum JET Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    1121: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum JET Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    1122: {
        captain: "Boosts ATK of [STR], [DEX], and [QCK] characters by 2.5x, but boosts his OWN attack by 4x",
        captainNotes: "Cavendish only boosts Friend or Sub Cavendish by 2.5x for a total of 10x boost with two Cavendish captains",
        special: "Removes all positive buffs on your team. Deals 15x the character's ATK as Typeless damage to all enemies. Boosts own ATK by 2.25x for 2 turns, amplifies the effect of own orb by 1.5x for 2 turns, locks his orb for 2 turns, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "Slicing Winds of Rommel"
    },
    1123: {
        captain: "Boosts ATK of [STR], [DEX], and [QCK] characters by 2.5x, but boosts his OWN attack by 4x",
        captainNotes: "Cavendish only boosts Friend or Sub Cavendish by 2.5x for a total of 10x boost with two Cavendish captains",
        special: "Removes all positive buffs on your team. Deals 15x the character's ATK as Typeless damage to all enemies. Boosts own ATK by 2.25x for 2 turns, amplifies the effect of own orb by 1.5x for 2 turns, locks his orb for 2 turns, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "Slicing Winds of Rommel"
    },
    1124: {
        captain: "Boosts ATK of Slasher characters by 3x, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3x on the first turn, 2.9x on the second, 2.8x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Slasher characters.",
        special: "Deals 13x character's ATK in [PSY] damage to all enemies, changes own orb and captain's orb into Matching orbs.",
        specialName: "Idle Execution"
    },
    1125: {
        captain: "Boosts ATK of Slasher characters by 3.5x, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.4x on the second, 3.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Slasher characters.",
        special: "Deals 13x character's ATK in [PSY] damage to all enemies, changes own orb and captain's orb into Matching orbs.",
        specialName: "Idle Execution"
    },
    1126: {
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x",
        special: "Empties all slots with [BLOCK] orbs, deals severe typeless damage based on number of [BLOCK] slots emptied to all enemies. Changes [EMPTY] orbs into Matching orbs",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Cannot Activate; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 100x ATK; 4 orbs - 200x ATK; 5 orbs - 300x ATK; 6 orbs - 500x ATK.",
        specialName: "Admiral Killer Bowling"
    },
    1127: {//orlumbus
        captain: "Boosts ATK of [DEX] characters by 2.25x and their HP by 1.5x",
        special: "Empties all slots with [BLOCK] orbs, deals severe typeless damage based on number of [BLOCK] slots emptied to all enemies. Changes [EMPTY] orbs into Matching orbs",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Cannot Activate; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 100x ATK; 4 orbs - 200x ATK; 5 orbs - 300x ATK; 6 orbs - 500x ATK.",
        specialName: "Admiral Killer Bowling"
    },
    1128: {
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 1.75x",
        special: "Reduces Paralysis and Despair duration by 5 turns. Cuts the current HP of one enemy by 10%",
        specialName: "Tactician's Savage Cut"
    },
    1129: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x",
        special: "Reduces Paralysis and Despair duration by 5 turns. Cuts the current HP of one enemy by 10%",
        specialName: "Tactician's Savage Cut"
    },
    1130: {
        captain: "Boosts ATK and HP of Fighter and Powerhouse characters by 1.5x",
        special: [
            {
                "description": "Deals 7x character's ATK in typeless damage to all enemies",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "Deals 15x character's ATK in typeless damage to all enemies",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "Deals 25x character's ATK in typeless damage to all enemies",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialNotes: "For each turn AFTER Elizabello's special reaches stage 3, damage is boosted by 23.75x per turn for an additional 20 turns, for a max damage of 500x character's ATK to all enemies.<br>#{stages}",
        specialName: "King Punch"
    },
    1131: {
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 2x",
        special: [
            {
                "description": "Deals 7x character's ATK in typeless damage to all enemies",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "Deals 15x character's ATK in typeless damage to all enemies",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "Deals 25x character's ATK in typeless damage to all enemies",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialNotes: "For each turn AFTER Elizabello's special reaches stage 3, damage is boosted by 23.75x per turn for an additional 20 turns, for a max damage of 500x character's ATK to all enemies.<br>#{stages}",
        specialName: "King Punch"
    },
    1132: {
        captain: "Boosts ATK and HP of Fighter characters by 1.5x",
        special: [
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.5x for 1 turn",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.75x for 1 turn",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Destruction Cannon"
    },
    1133: {
        captain: "Boosts ATK of Fighter characters by 2.25x and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.5x for 1 turn",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter and Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Destruction Cannon"
    },
    1134: {
        captain: "Boosts ATK and RCV for Striker and Slasher characters by 1.2x",
        special: "Reduces Special Cooldown of [INT] characters by 1 turn.",
        specialName: "Non-Negotiable Quest",
    },
    1135: {
        captain: "Boosts ATK and RCV for Striker and Slasher characters by 1.5x",
        special: "Reduces Special Cooldown of [INT] characters by 1 turn.",
        specialName: "Non-Negotiable Quest",
    },
    1136: { //Fortnight Fukuro
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        special: "For [QCK] characters, changes [TND] and [RCV] orbs into [QCK] orbs",
        specialName: "Stern Beast: Secret Technique: 'Owl Thrasher' Sneak Attack"
    },
    1137: { //Fortnight Jabra
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Deals 13x character's ATK in [STR] damage to one enemy. For Free Spirit characters, amplifies the effects of orbs by 1.5x for 2 turns",
        specialName: "Fatal Sneak Attack",
    },
    1138: {
        captain: "Reduces damage received by 25%",
        special: "Reduces damage received by 60%, and boosts ATK of Powerhouse and Fighter characters by 1.3x for 1 turn",
        specialName: "Iron Mass: Ring Sneak Attack"
    },
    1139: {
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY], or [INT] orbs",
        specialName: "Lack of Pure Chi: Lion Finger Gun Sneak Attack"
    },
    1140: {// Coliseum Moria
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Changes own orb into [DEX] and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow"
    },
    1141: {// Coliseum Moria
        captain: "Boosts ATK of Driven characters by 2.25x, recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes own orb into [DEX] and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow"
    },
    1142: {// Coliseum Foxy
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        special: "Deals 15 hits of random [STR] damage to random enemies. Delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 15}",
        specialName: "Gorilla Punch: Golden Strike"
    },
    1143: {// Coliseum Foxy
        captain: "Boosts ATK of Free Spirit characters by 2x. Reduces cooldown of Free Spirit characters by 2 turns at the start of the fight",
        special: "Deals 15 hits of random [STR] damage to random enemies. Delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 15}",
        specialName: "Gorilla Punch: Golden Strike"
    },
    1144: {// Coliseum Porche
        captain: "Boosts ATK of [PSY] characters by 1.75x",
        special: "Deals 5x character's ATK in [PSY] damage to all enemies. Recovers 15x character's RCV in HP",
        specialName: "Cutie Baton: Flower Shuriken"
    },
    1145: {// Coliseum Porche
        captain: "Boosts ATK of [PSY] characters by 1.75x and their RCV by 1.5x",
        special: "Deals 5x character's ATK in [PSY] damage to all enemies. Recovers 15x character's RCV in HP",
        specialName: "Cutie Baton: Flower Shuriken"
    },
    1146:{
        specialName: "Bind Purge",
        special: "Reduces Bind duration by 2 turns"
    },
    1147:{
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing",
    },
    1148:{
        specialName: "Paralysis Recovery - Light",
        special: "Reduces Paralysis by 1 turn"
    },
    1149:{
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
    },
    1150:{
        special: "Changes Captain orb into Matching orb",
        specialName: "Captain Orb Change",
    },
    1151: {//Minotaur
        special: "Cuts the current HP of one enemy by 10%",
        specialName: "Tough Jailer Beast: Spiked Club"
    },
    1152: {
        special: "Deals 3 hits of 7x character's ATK in [INT] damage to random enemies.",
        specialNotes: "#{randomHits : 3}",
        specialName: "Shy Jailer Beast: Spiked Mace",
    },
    1153: {
        special: "Reduces the defense of all enemies by 100% and boosts ATK of Powerhouse characters by 1.25x for 1 turn",
        specialName: "Demon Lord's Roar"
    },
    1154: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.3x",
        special: "Reduces crew's current HP by 30%. Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Leader of the Jailers",
    },
    1155: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        specialName: "Monsterous Appetite"
    },
    1156: {
        captain: "Boosts ATK of Driven characters by 1.2x if HP is above 50% at the start of the turn",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Abyss Road",
        specialNotes: "#{zombie}",
    },
    1157: {
        captain: "Boosts ATK of Driven and Striker characters by 1.75x and protects from defeat as long as HP is above 50% at the start of the turn",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Abyss Road",
        specialNotes: "#{zombie}",
    },
    1158: {
        captain: "Boosts ATK of Shooter, Striker, and Powerhouse characters by 1.75x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn. Regular Poison deals .5x character's ATK in fixed damage at the end of each turn.",
        specialName: "Poison Puffer Fish"
    },
    1159: {
        captain: "Boosts ATK of Shooter, Striker, and Powerhouse characters by 2.25x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn. Regular Poison deals .5x character's ATK in fixed damage at the end of each turn.",
        specialName: "Poison Puffer Fish"
    },
    1160: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair, and Silence duration by 3 turns, and recovers 2,000 HP",
        specialNotes: "#{silence}",
        specialName: "Open Sun"
    },
    1161: {
        captain: "Boosts ATK of Free Spirit characters by 2x and their RCV by 1.5x",
        special: "Reduces Bind, Despair, and Silence duration by 3 turns, and recovers 2,000 HP",
        specialNotes: "#{silence}",
        specialName: "Open Sun"
    },
    1162: {//Tesoro
        captain: "Boosts ATK of [PSY] characters by 1.75x and boosts amount of Beli received by 1.5x",
        special: "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1163: {//Tesoro Evolved
        captain: "Boosts ATK of PSY characters by 1.75x. Also boosts ATK of Driven and Cerebral characters by 1.5x. Boosts amount of Beli received by 2x",
        captainNotes: "The two Boosts stack with each other so a PSY Driven or a PSY Cerebral Unit will be boosted by 2.625",
        special: "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1164: {//Carina
        captain: "Boosts RCV of all characters by 1.2x",
        special: "Boosts RCV by 1.5x for 1 turn and amplifies the effects of orbs by 1.5x for 1 turn",
        specialName: "Sexy Diva",
    },
    1165: {//Carina Evolved
        captain: "Boosts RCV of all characters by 1.5x",
        special: "Boosts RCV by 1.5x for 1 turn and amplifies the effects of orbs by 1.5x for 1 turn",
        specialName: "Sexy Diva",
    },
    1166: {//Baccarat
        captain: "Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 turn",
        specialName: "Lucky-Lucky Fruit",
    },
    1167: {//Baccarat Evolved
        captain: "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 turn",
        specialName: "Lucky-Lucky Fruit",
    },
    1168: {//Dice
        captain: "Boosts ATK of [STR] characters by 2x if HP is below 30% at the start of the turn",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated<br>HP > 50%: 1.1x<br>50% > HP > 30%: 1.25x<br>30% > HP > 10%: 1.5x<br>HP < 10%: 1.75x",
        specialName: "Trump Card Dealer",
    },
    1169: {//Dice Evolved
        captain: "Boosts ATK of [STR] characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1 + 1.5 * (1 - (remaining HP) / (total HP)) : 1 : 2.5}",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated<br>HP > 50%: 1.1x<br>50% > HP > 30%: 1.25x<br>30% > HP > 10%: 1.5x<br>HP < 10%: 1.75x",
        specialName: "Trump Card Dealer",
    },
    1170: {//Tanaka
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Bind duration by 3 turns and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1171: {//Tanaka Evolved
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Reduces Bind duration by 3 turns and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1172: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x",
        sailor: "Boosts base base RCV of PSY characters by 15"
    },
    1173: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        sailor: "Boosts base RCV of PSY characters by 15"
    },
    1174: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    1175: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    1176: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boosts own RCV by 50"
    },
    1177: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        sailor: "When HP is below 30% at the start of the turn, boosts own RCV by 50"
    },
    1178: {
        captain: "Boosts ATK of [STR] characters by 2x if HP is above 99% at the start of the turn. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
        specialNotes: "#{random : 30,000 : 150,000}",
    },
    1179: {
        captain: "Boosts ATK of [STR] characters by 2.75x if HP is above 99% at the start of the turn. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
        specialNotes: "#{random : 30,000 : 150,000}",
    },
    1181: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 turns",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1182: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 turns",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1183: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [PSY] orbs consumed: 1 orb will give a 13x multiplier, 2 orbs 19x, 3 orbs 26x, 4 orbs 65x, 5 orbs 130x, 6 orbs 230x. It's not possible to activate the special without consuming at least one [PSY] orb.",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the turn, boosts ATK of [PSY] characters by 75"
    },
    1184: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [PSY] orbs consumed: 1 orb will give a 13x multiplier, 2 orbs 19x, 3 orbs 26x, 4 orbs 65x, 5 orbs 130x, 6 orbs 230x. It's not possible to activate the special without consuming at least one [PSY] orb.",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the turn, boosts ATK of [PSY] characters by 75"
    },
    1185: {
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 turn",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialNotes : "#{stages}",
        specialName: "Extreme Speed - One Sword Style, Ten Slashes",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1186: {
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 turn",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialNotes : "#{stages}",
        specialName: "Extreme Speed - One Sword Style, Ten Slashes",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1187: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 turns",
        specialNotes: "#{randomHits : 7}<br>#{random : 5000 : 20000 : for each hit}",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP, and RCV of all characters by 20"
    },
    1188: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 turns",
        specialNotes: "#{randomHits : 7}<br>#{random : 5000 : 20000 : for each hit}",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP, and RCV of all characters by 20"
    },
    1189: {
        captain: "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        special: "Reduces enemy Barrier duration by 1 turn",
        specialNotes: "Does not affect DEF Boost or % Damage reduction buffs. Reduces timers for Barriers such as Perfect/Great/Good Barriers, Combo Hit Barriers and Orb Hit Barriers",
        specialName: "Break Bullet",
        sailor: "Boosts base ATK of [QCK] characters by 40"
    },
    1190: {
        captain: "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        special: "Reduces enemy Barrier duration by 1 turn",
        specialNotes: "Does not affect DEF Boost or % Damage reduction buffs. Reduces timers for Barriers such as Perfect/Great/Good Barriers, Combo Hit Barriers and Orb Hit Barriers",
        specialName: "Break Bullet",
        sailor: "Boosts base ATK of [QCK] characters by 40",
        limit: "This character has a limit break path",
    },
    1191: {
        captain: "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn",
        specialName: "Ice Age",
    },
    1192: {
        captain: "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn",
        specialName: "Ice Age",
    },
    1193: {
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Sweet Style Petrification",
    },
    1194: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Sweet Style Petrification",
    },
    1195: {
        captain: "Boosts ATK of Striker characters by 1.75x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 turn",
        specialName: "Split Air Hole",
    },
    1196: {
        captain: "Boosts ATK of Striker characters by 2x. Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 turn",
        specialName: "Split Air Hole",
        limit: "This character has a limit break path",
    },
    1197: {
        captain: "Boosts ATK of Cerebral and Powerhouse characters by 2.5x if they have a matching orb, by 1x otherwise, reduces crew's RCV to 0",
        special: "For Cerebral and Powerhouse characters, changes all orbs including [BLOCK] orbs to Badly Matching. Deals [INT] damage to all enemies",
        specialName: "Investigator of Sorrow",
    },
    1198: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1199: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1200: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 turns. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1201: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 turns. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1202: {
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1203: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1204: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1205: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1206: {
        captain: "Boosts HP by 1.3x",
        specialName: "Chorus echoing in the sea",
        special: "Protects from defeat as long as HP is above 50%",
        specialNotes: "#{zombie}"
    },
    1207: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        sailor: "Reduces Blindness duration by 3 turn"
    },
    1208: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: "Reduces Blindness duration by 3 turn"
    },
    1209: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    1210: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Boosts base RCV of Shooter characters by 10",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 120" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 5 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 4 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 4 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 4 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    1211: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    1212: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    1213: {
        captain: "Boosts ATK of Slasher characters by 1.5x, the HP of Striker characters by 1.2x, and the RCV of Shooter characters by 1.2x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 turns, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1214: {
        captain: "Boosts ATK of Slasher characters by 2x, the HP of Striker characters by 1.25x, and the RCV of Shooter characters by 1.25x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 turns, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1215: {//Gairam
        captain: "Boosts ATK by 2.5x following a chain of [QCK] > [PSY] > [DEX] attacks no lower than Good",
        special: "Deals 5 hits of 2,000 fixed damage to random enemies and reduces any damage received above 5,000 HP by 80% for 1 turn",
        specialNotes: "#{randomHits : 5}",
        specialName: "Totem Cube"
    },
    1216: {//Sebastian
        captain: "Boosts ATK of Powerhouse characters by 2x and reduces damage received based on current HP by up to 20%",
        captainNotes: "The lower the HP, the larger the damage reduction. At 50% HP you take 10% reduced damage",
        special: "Reduces damage received by 50% for 1 turn, and changes own orb into [QCK]",
        specialName: "Camouflage Air",
    },
    1217: {//Nightin
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Bind duration by 2 turns. Deal 10x her ATK in [PSY] damage to one enemy",
        specialName: "Catepillar Soul Shot",
    },
    1218: {//Hancock
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        special: "Locks all orbs for 1 turn. If HP is below 30%, changes own orb and the captain's orb into matching. ",
        specialName: "Everybody Confusing Fragrance",
    },
    1219: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 16 times to a maximum of 3x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 turn",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 turn",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
    },
    1220: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 10 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 turn",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 turn",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Sailor Ability 1: Boosts own ATK by 100 if this character is the last in the chain to attack" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1221: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 turn, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1222: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 2x and the HP of Powerhouse characters by 1.75x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 turn, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1223: { // Story Bastille
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Deals 25x character's ATK in [INT] damage to all enemies",
        specialName: "Shark Knife - Flash",
    },
    1224: { // Story Yamakaji
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces damage received by 60% for 1 turn",
        specialName: "Appreciation For The Great Men",
    },
    1225: { // Story Hina
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Delays all enemies for 1 turn, and locks own orb for 1 turn",
        specialName: "Binding Iron Tablet",
    },
    1226: { // Story Smoker
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10% and changes own orb into [PSY]",
        specialName: "Seastone Truncheon",
    },
    1227: { //Story Mihawk
        captain: "Reduces cooldown of Slasher specials by 2 turns at the start of the fight. Boosts ATK of Slasher characters by 2.25x",
        special: "Deals 100,000 fixed damage to one enemy, and boosts own ATK by 1.75x for 1 turn ",
        specialName: "Black Blade - Slashing Burial Drop",
    },
    1228: { // Story Kizaru
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "For Shooter characters, changes [BLOCK] orbs into Matching, and deals large [DEX] damage to all enemies",
        specialName: "The Cave of the Sun Goddess",
    },
    1229: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2x, and his OWN ATK by 2x.",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 turns",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away (Such as Raid Boss Kuma)",
        specialName: "Leg-Locked Heave-Ho",
    },
    1230: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2.5x, but boost his OWN ATK by 2.75x. Reduces damage received by 10%",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 turns",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away (Such as Raid Boss Kuma)",
        specialName: "Leg-Locked Heave-Ho",
    },
    1231: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 1.75x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.25x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.1875x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 turns",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap.",
        specialName: "Armed - White Launcher",
        sailor: "Boosts base ATK of Striker characters by 50",
    },
    1232: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 2.25x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.3x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.925x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 turns",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Armed - White Launcher",
        sailor: "Boosts base ATK of Striker characters by 50",
        limit: "This character has a limit break path",
    },
    1233: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x, and their RCV by 1.2x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 turns",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1234: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.6x, and their RCV by 1.3x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.56x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 turns",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1235: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 1.75x, deals 3x character's ATK to all enemies at the end of each turn",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 turn",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 turns",
    },
    1236: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 2x, deals 5x character's ATK to all enemies at the end of each turn",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 turn",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 turns",
    },
    1237: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 turn.",
        specialName: "Shark Cutter - Flash",
        sailor: "Makes [QCK] orbs \"beneficial\" for this unit"
    },
    1238: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain and by 3x after the 30th hit",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 turn.",
        specialName: "Shark Cutter - Flash",
        sailor: "Makes [QCK] orbs \"beneficial\" for this unit"
    },
    1239: {//6* Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 2x, and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
        specialName: "Yasakani no Magatama",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
                "cooldown": [ 20, 17 ], 
            },
        ],    
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1240: {//6* Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 2x, and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
        specialName: "Yasakani no Magatama",
        special: [
            {
                "description": "For Shooter and Slasher characters,randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
                "cooldown": [ 20, 17 ],
            },
        ],    
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1241: {//Fortnight Koala
        captain: "Boosts chain multiplier by 1.5x. Recovers 1x character's RCV in HP at the end of each turn",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1242: {//Fortnight Koala
        captain: "Boosts chain multiplier by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1243: {// Fortnight Hack
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 1.69x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1244: {// Fortnight Hack
        captain: "Boosts ATK of Fighter characters by 1.75x and the ATK of Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 2.275x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1245: {// Event Luffy
        captain: "Boosts ATK of Fighter characters by 1.75x. If HP is below 10%, boosts ATK of Fighter characters by 3x instead.",
        special: "Deals random [QCK] damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Firefly Light, Fiery Doll\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Gomu Gomu no Stamp Gatling",
        specialNotes: "Firefly Light, Fiery Doll is Event Ace's special ability.",
    },
    1246: {// Event Ace
        captain: "Boosts ATK of Fighter characters by 1.2x",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1247: {// Event Ace
        captain: "Boosts HP of Fighter characters by 1.2x and their ATK by 2.75x if they have a matching orb, by 2x otherwise",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1248: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 1.69x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 turn",
        specialName:"Shining Daylight - Dayflower",
    },
    1249: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.6x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 2.56x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 turn",
        specialName:"Shining Daylight - Dayflower",
    },
    1250: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 1.5x and Recovers a variable amount of character's RCV in HP at the end of each turn depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 3.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
    },
    1251: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 2x and Recovers a variable amount of character's RCV in HP at the end of each turn depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 2.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
        limit: "This character has a limit break path",
    },
    1252: {// Coliseum Doma
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of [INT] characters by 2x",
        special: "Changes adjacent orbs into [INT] orbs. Deals 20x character's ATK in [INT] damage to all enemies.",
        specialName: "Reversed Twin Blades - Surprise Thrust",
        sailor: "Reduces own Silence by 1 turn",
        sailorNotes: "#{silence}",
    },
    1253: {// Coliseum Shura
        captain: "Boosts ATK of [DEX] characters by 2.25x if HP is above 99% at the start of the turn",
        special: "Makes Perfects harder to hit for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [DEX] characters by 1.75x in the following turn.",
        specialName: "Angry Instigator",
    },
    1254: {//FN Squard
        captain: "Boosts ATK of Striker characters by 2.5x until the first hit other than Perfect. Reduce crew's current HP by 5% at the end of each turn.",
        special: "Deals 10x character's ATK in fixed damage to one enemy, reduces crews current HP by 30% and reduces enemies defense by 80% for one turn",
        specialName: "Sword Attack Without Hesitation",
        sailor: "Reduces his own Numbness by 1 turn"
    },
    1255: {//FN DeCalvan
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2x after the 16th hit, by 2.5x after the 22nd hit",
        special: "For 1 turn, makes Perfects slightly easier to hit and amplifies the effect of orbs by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boost base ATK of Fighter characters by 40",
        specialName: "Large Fleet Commander",
    },
    1256: {//FN Whitey Bay
        captain: "Boosts ATK of Slasher and Driven characters by 2x and reduces their RCV by 90%",
        special: "For Slasher and Driven characters, randomizes non-matching orbs, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        sailor: "Boosts base ATK and RCV of Driven characters by 10",
        specialName: "Icebreaker Breakthrough Force",
    },
    1257: {//Young Whitebeard
        captain: "Boosts ATK of all characters by 2x if HP is below 50% at the start of the turn",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1258: {//Young Whitebeard Evolved
        captain: "Boosts ATK of all characters by 2.5x if HP is below 50% at the start of the turn",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1259: {//Young Doflamingo
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 turns, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1260: {//Young Doflamingo
        captain: "Reduces cooldown of Driven specials by 1 turn at the start of the fight. Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 turns, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1261: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.5x. Heals for .75x his RCV at the end of the turn each time you hit a Perfect.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 turn",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1262: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.75x. Heals for .75x his RCV at the end of the turn each time you hit a Perfect.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 turn",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1263: {//Young Vergo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 turns",
        specialName: "Iron Leg Sanctions",
    },
    1264: {//Young Vergo
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 turns",
        specialName: "Iron Leg Sanctions",
    },
    1265: {//Kimono Ace
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 turn",
        specialName: "Looking to the Full Moon",
    },
    1266: {//Kimono Ace Evo
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 turn",
        specialName: "Looking to the Full Moon",
    },
    1267: {//Legend Blackbeard
        captain: "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter, and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "World Shaking Impact",
    },
    1268: {//Legend Blackbeard
        captain: "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter, and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "World Shaking Impact",
    },
    1269: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Deals 3x character's ATK in [DEX] damage to all enemies at the end of each turn.",
        special: "Reduces Bind and Despair duration by 2 turns. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: "Boosts base ATK of all characters by 100 if your captain is a Driven character",
        specialName: "Horrifying Suggestion",
    },
    1270: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Deals 7x character's ATK in [DEX] damage to all enemies at the end of each turn.",
        special: "Reduces Bind and Despair duration by 2 turns. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: "Boosts base ATK of all characters by 100 if your captain is a Driven character",
        specialName: "Horrifying Suggestion",
    },
    1271: {//Van Augur
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Other Side of Fate",
    },
    1272: {//Van Augur
        captain: "Reduces cooldown of Shooter specials by 1 turn at the start of the fight. Boosts ATK of Shooter characters by 2.5x.",
        special: "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Other Side of Fate",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Shooter characters by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    1273: {//Jesus Burgess
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK and 1.44x HP",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 turns",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Champion of the Wild Roar",
    },
    1274: {//Jesus Burgess
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.6x and their HP by 1.2x",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.56x ATK and 1.44x HP",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 turns",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Champion of the Wild Roar",
    },
    1275: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1276: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1277: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.25x if HP is above 99% at the start of the turn",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
        specialName: "Reaping of Desperate Lives",
    },
    1278: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.75x if HP is above 99% at the start of the turn",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
        specialName: "Reaping of Desperate Lives",
        limit: "This character has a limit break path",
    },
    1279: {//John Giant
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "Reduces damage received in the next turn by 50% if the special is activated with less than 50% health remaining",
        specialName: "Manifesto to the Weak",
    },
    1280: {//Marineford Aokiji
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Deals 10,000 fixed damage to all enemies and locks all orbs for 1 turn",
        specialName: "Ice Chunks - Trident",
    },
    1281: {//Marineford Garp
        captain: "Boosts ATK of Fighter characters by 2.25x and reduces damage received by 10%",
        special: "Deals 25x character's ATK in [STR] damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Fist of Love - Falling Fortress",
    },
    1282: {//Marineford Sengoku
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Reduces cooldown of all specials by 1 turn. Boosts ATK of all characters by 1.2x and amplifies the effect of orbs by 1.2x for 1 turn",
        specialName: "Encircling Wall around Marineford Bay",
    },
    1283: {//Marineford Akainu
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 35x character's ATK in [INT] damage to one enemy. Boosts ATK of Driven characters by 1.5x for 1 turn",
        specialName: "Dark Dog",
    },
    1284: {//Wild Luffy
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.2x",
        special: "Reduces Bind and Silence duration by 3 turns. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 turns",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1285: {//Wild Luffy Evolved
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.25x. Boosts ATK of Striker characters by 3.375x after scoring 3 Perfects in a row.",
        special: "Reduces Bind and Silence duration by 3 turns. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 turns",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1286: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.3x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Handgun Legs",
    },
    1287: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Handgun Legs",
    },
    1288: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.5x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 2.5x on the first turn, 2.4x on the second, 2.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 turn. If during that turn every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 turn.",
        specialName: "Outcome of Sparta",
    },
    1289: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.75x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 2.75x on the first turn, 2.65x on the second, 2.55x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 turn. If during that turn every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 turn.",
        specialName: "Outcome of Sparta",
    },
    1290: {//Kid Buffalo
        captain: "Recovers 500 HP at the end of each turn",
        special: "Changes own orb into [INT], and Captain orb into [BOMB]",
        specialName: "Rude Prank",
    },
    1291: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 1.75x",
        special: "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 turn. If during that turn every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1292: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 turn. If during that turn every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1293: {//Coliseum Sandersonia
        captain: "Boosts ATK of Fighter characters by 1.75x, deals 2 times the damage received in the previous turn in [PSY] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1294: {//Coliseum Sandersonia
        captain: "Boosts ATK of Powerhouse characters by 2x, deals 4 times the damage received in the previous turn in [PSY] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1295: {//Halloween Kalifa
        captain: "Boosts ATK and RCV of [STR] characters by 1.5x",
        special: "Reduces Paralysis duration by 3 turns, removes Poison, and reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1296: {//Halloween Kalifa
        captain: "Boosts ATK of [STR] characters by 2x and their RCV by 1.5x",
        special: "Reduces Paralysis duration by 3 turns, removes Poison, and reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1297: {//Akainu
        captain: "Boosts ATK by 2.5x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1298: {//Akainu
        captain: "Boosts ATK by 3x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1299: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.2x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 turn",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1300: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 turn",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1301: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1302: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Slasher Driven characters get a 2.625x bonus.",
        special: "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1303: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 1.5x. If you don't attack with Mr. 3, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 60% for 2 turns",
        specialName: "Extra Large Candle Wall",
    },
    1304: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 2x. If you don't attack with Mr. 3, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 60% for 2 turns",
        specialName: "Extra Large Candle Wall",
    },
    1305: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.3x and recovers 500 HP at the end of each turn",
        special: "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1306: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.75x and recovers 1,000 HP at the end of each turn",
        special: "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1307: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 1.75x. If you don't attack with Bartolomeo, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 50% for 1 turn. If during that turn every unit scores a Perfect hit, reduces damage received by 80% in the following turn",
        specialName: "Vulgar Provocation",
    },
    1308: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 2x. If you don't attack with Bartolomeo, reduces damage received by 20% for that turn.",
        special: "Reduces damage received by 50% for 1 turn. If during that turn every unit scores a Perfect hit, reduces damage received by 80% in the following turn",
        specialName: "Vulgar Provocation",
    },
    1309: {//Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and if HP is above 70%, changes adjacent orbs into Matching Orbs",
        specialName: "Poof",
    },
    1310: {//Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and if HP is above 70%, changes adjacent orbs into Matching Orbs",
        specialName: "Poof",
    },
    1311: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 turn",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1312: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.75x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 turn",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1313: {//Akainu
        captain: "If any character has a [STR] orb, boosts ATK by 3.9375x, boosts ATK by 2.25x otherwise. Boosts chances of getting [STR] orbs",
        captainNotes: "If a character has a [STR] orb, regardless of type, they will have a 3.9375x ATK boost",
        special: "Deals 125x character's ATK typeless damage to all enemies and randomizes non-[STR] orbs. Boosts ATK of characters with cost 50 or higher by 1.75x for 2 turns",
        specialName: "Meteor Volcano",
    },
    1314: {//Akainu
        captain: "If any character has a [STR] orb, boosts ATK by 3.9375x, boosts ATK by 2.25x otherwise. Boosts chances of getting [STR] orbs",
        captainNotes: "If a character has a [STR] orb, regardless of type, they will have a 3.9375x ATK boost",
        special: "Deals 125x character's ATK typeless damage to all enemies and randomizes non-[STR] orbs. Boosts ATK of characters with cost 50 or higher by 1.75x for 2 turns",
        specialName: "Meteor Volcano",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts this character's attack against [QCK] characters by 2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1315: {//Coby
        captain: "Boosts ATK of all characters by 2x after the 2nd Perfect in a row and by 3x after the 5th Perfect in a row.",
        special: [
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 1 turn. Recovers 3x character's RCV in HP",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 3 turns. Recovers 6x character's RCV in HP",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, removes No Healing debuff. Recovers 13x character's RCV in HP",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Echoing Cry of the Soul",
    },
    1316: {//Coby
        captain: "Boosts ATK of all characters by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
        special: [
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 1 turn. Recovers 3x character's RCV in HP",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 3 turns. Recovers 6x character's RCV in HP",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, removes No Healing debuff. Recovers 13x character's RCV in HP",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Echoing Cry of the Soul",
    },
    1317: {//Garp
        captain: "Boosts ATK of [STR] and [PSY] characters by 2x",
        special: "Deals 30x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 turn. Reduces the defense of all enemies by 80% for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Super Large Iron Ball",
    },
    1318: {//Garp
        captain: "Boosts ATK of [STR] and [PSY] characters by 2.5x",
        special: "Deals 30x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 turn. Reduces the defense of all enemies by 80% for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Super Large Iron Ball",
    },
    1319: {//Lady Tsuru
        captain: "Heals for 1x her RCV at the end of the turn each time you hit a Good. Heals for .1x her RCV at the end of the turn each time you hit a Perfect",
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "A Decree of the Veteran",
    },
    1320: {//Lady Tsuru
        captain: "Heals for 1.5x her RCV at the end of the turn each time you hit a Good. Heals for .1x her RCV at the end of the turn each time you hit a Perfect",
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "A Decree of the Veteran",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 3 turn" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all characters by 1.2x, heals for 1.5x her RCV at the end of the turn each time you hit a Good. Heals for .3x her RCV at the end of the turn each time you hit a Perfect" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    1321: {//Momonga
        captain: "Boosts ATK of Cerebral and Slasher characters by 2.25x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT], and [PSY] character on your crew.",
        special: "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Front Line Dissection",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
    },
    1322: {//Momonga
        captain: "Boosts ATK of Cerebral and Slasher characters by 2.5x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT], and [PSY] character on your crew.",
        special: "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Front Line Dissection",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
    },
    1323: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Slasher and Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 1.69x bonus.",
        special: "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 turns",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 turns for himself"
    },
    1324: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Slasher and Driven characters by 1.6x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 2.56x bonus.",
        special: "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 turns",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 turns for himself"
    },
    1325: {//Halloween Corazon
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1326: {//Halloween Corazon
        captain: "Boosts ATK by 1.3x and recovers 4x character's RCV in HP at the end of each turn",
        special: "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1327: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1328: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1329: {//Wicca
        captain: "Reduces cooldown of Fighter and Free Spirit specials by 1 turn at the start of the fight. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 6 fixed damage to all enemies. Randomizes orbs of upper row characters",
                "cooldown": [ 9, 3 ],
            },
            {
                "description": "Deals 15 fixed damage to all enemies. Recovers 3x character's RCV in HP",
                "cooldown": [ 11, 5 ],
            },
            {
                "description": "Deals 300 fixed damage to all enemies. Boosts the Color Affinity of Fighter and Free Spirit characters by 1.25x",
                "cooldown": [ 16, 10 ],
            },
        ],
        specialName: "The Work of Fairies",
        specialNotes: "#{colorAffinity : 1.25}<br>#{stages}",
    },
    1330: {//Gancho
        captain: "Boosts ATK of Striker characters by 1.5x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Switches orbs between slots twice. Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns",
        specialName: "Tonta Knowledge",
    },
    1331: {//Mansherry
        captain: "Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 turns. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 turns. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1332: {//Mansherry
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 turns. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 turns. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1333: {//Kabu
        captain: "Boosts ATK of [STR] and Powerhouse characters by 1.4x",
        captainNotes: "The bonus is cumulative. [STR] Powerhouse characters get a 1.96x bonus.",
        special: "Slightly boosts chances of getting [STR] orbs and boosts own ATK by 1.2x for 2 turns",
        specialName: "Yellow Kabu Squad",
    },
    1334: {//Bian
        captain: "Boosts ATK of [DEX] and Free Spirit characters by 1.4x",
        captainNotes: "The bonus is cumulative. [DEX] Free Spirit characters get a 1.96x bonus.",
        special: "Poisons all enemies and randomizes all orbs",
        specialName: "Pink Bee Squad",
    },
    1335: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of Free Spirit characters by 1.5x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 turn",
        specialName: "Gentleman's Welcome",
    },
    1336: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight. Boosts ATK of Free Spirit characters by 2x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 turn",
        specialName: "Gentleman's Welcome",
    },
    1337: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x",
        special: "Changes [RCV], [TND], [EMPTY], [G] and [BOMB] orbs into Badly Matching orbs and [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Free Spirit and Striker characters.",
        specialName: "Brushman's Brush",
    },
    1338: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2.25x, reduces damage received by 10%",
        special: "Changes [RCV], [TND], [EMPTY], [G] and [BOMB] orbs into Badly Matching orbs and [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Free Spirit and Striker characters.",
        specialName: "Brushman's Brush",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ]
    },
    1339: {//Chopper Jump Point
        captain: "Boosts ATK of [DEX] characters by 2.25x",
        special: [
            {
                "description": "Reduces Paralysis duration by 1 turn. Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 18, 8 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 turn. Adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 23, 13 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 turn. Adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 25, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Flight Power Strengthening - Jump Point",
    },
    1340: {//Gedatsu
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Delays all enemies for 1 turn. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1341: {//Getdatsu
        captain: "Boosts ATK of [QCK] characters by 1.75x. After scoring 3 hits below Good in a row, boosts ATK of [QCK] characters by 2.625x instead.",
        special: "Delays all enemies for 1 turn. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1342: {//Dadan
        captain: "Boosts HP of [PSY] characters by 1.75x",
        special: "Reduces Silence duration by 2 turns",
        specialNotes: "#{silence}",
        specialName: "Rogue Threat",
    },
    1343: {//Porchemy
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2x.",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy, and boosts ATK against enemies with reduced defense by 1.3x for 1 turn",
        specialName: "Spiked Glove of Punishment",
    },
    1344: {//Bluejam
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2.25x.",
        special: "Deals 20x character's ATK in [STR] damage to all enemies, and boosts ATK of Driven characters by 1.3x for 1 turn",
        specialName: "Bullet Purge",
    },
    1345: {//Jimbe
        captain: "Boosts ATK of Fighter characters by 2.5x",
        special: "Reduces Despair duration by 5 turns. Reduces Special Cooldown of your top row by 1 turn",
        specialName: "Gathering Strength for a Counter Attack",
    },
    1346: {//Heracles'n
        captain: "Boosts ATK, HP and RCV of Shooter and Cerebral characters by 1.5x",
        special: "Randomizes all orbs, including [BLOCK] orbs, switches orbs between slots 3 times",
        specialName: "Survival Techniques of the Hungry Baron",
    },
    1347: {//Torino Kingdom Monsters
        special: "Change own orb into [PSY], and deals 25x character's attack in [PSY] damage to one enemy",
        specialName: "Tsubami Behemoth",
    },
    1348: {//Humandrills
        special: "Boosts ATK of all characters by 1.2x for 2 turns and amplifies the effect of orbs by 1.2x for 2 turns",
        specialName: "Imitation Tactics",
    },
    1349: {//Haredas
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.75x",
        special: "Empty all slots including [BLOCK] orbs, and boosts ATK of Cerebral characters by 1.2x for 1 turn",
        specialName: "Gust 'Wind Knot'",
    },
    1350: {//Longarm Tribe Theives
        special: "Switches orbs between slots 3 times",
        specialName: "Longarm Tribe of Tehna Gehna",
    },
    1351: {//Tequila Wolf Guard
        special: "Reduces the defense of all by 50% and delays all enemies for 1 turn",
        specialName: "Covering Fire",
    },
    1352: {//Ivankov
        captain: "Boosts ATK of Fighter characters by 2x at the start of the chain, boosts ATK of Fighter characters by 3.5x after the 5th Perfect in a row",
        special: "Following the activation of the special, if every unit scores a Perfect hit, reduces damage received by 90% in the following turn",
        specialName: "Rolling Beauty",
    },
    1353: {//Rayleigh
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Deals 50,000 Fixed damage to one enemy, adds 0.5 to Chain multiplier for 1 turn",
        specialName: "Guidence to Control Haki",
    },
    1354: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 2x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1355: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 3x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1356: {//Pekoms
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 turn.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    1357: {//Pekoms
        captain: "Boosts ATK, HP and RCV of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 turn.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    1358: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.5x and the HP of Striker characters by 1.5x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 turn.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1359: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.75x and the HP of Striker characters by 1.75x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 turn.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1360: {//Winter Luffy
        captain: "Boosts ATK characters with cost 30 or less by 2x and their HP by 1.2x",
        special: "Changes own orb into [QCK], deals 15x character's ATK in [QCK] damage to one enemy",
        specialName: "Gum-Gum Twin Jet Pistol: Snowflake",
    },
    1361: {//6* Zoro
        captain: "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last turn, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "You only need to kill at least 1 character in the last turn to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn instead",
        specialName: "Three Blade Style Secret Skill: Crossroad of Six Paths",
    },
    1362: {//6* Zoro
        captain: "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last turn, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "You only need to kill at least 1 character in the last turn to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn instead",
        specialName: "Three Blade Style Secret Skill: Crossroad of Six Paths",
    },
    1363: {//Timeskip Franky
        captain: "Boosts ATK of [PSY] characters by 2x, reduces damage received by 10%",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        sailor: "Boosts base HP of [PSY] characters by 100",
        specialName: "Franky Fireball",
    },
    1364: {//Timeskip Franky
        captain: "Boosts ATK of [PSY] characters by 2.5x, reduces damage received by 10%",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        sailor: "Boosts base HP of [PSY] characters by 100",
        specialName: "Franky Fireball",
    },
    1365: {//Timeskip Nami
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: [
            {
                "description": "Reduces Paralysis and Silence duration by 1 turn. Delays all enemies for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 2 turns. Delays all enemies for 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 5 turns. Delays all enemies for 2 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}<br>#{stages}",
        specialName: "Black Ball - Thundercloud Rod",
    },
    1366: {//Timeskip Nami
        captain: "Boosts RCV of Cerebral characters by 1.5x and their ATK by 2.75x if they have a matching orb, by 1.5x otherwise",
        special: [
            {
                "description": "Reduces Paralysis and Silence duration by 1 turn. Delays all enemies for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 2 turns. Delays all enemies for 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 5 turns. Delays all enemies for 2 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailorNotes: "#{silence}<br>#{stages}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Black Ball - Thundercloud Rod",
    },
    1367: {//Timeskip Sanji
        captain: "Boosts ATK of [STR] characters by 2x",
        special: [
            {
                "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 turn.",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
        specialName: "Sky Walk",
    },
    1368: {//Timeskip Sanji
        captain: "Boosts ATK of [STR] characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: [
            {
                "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 turn.",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
        specialName: "Sky Walk",
    },
    1369: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1370: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 2x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1371: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.25x after the 2nd Perfect in a row and by 2.5x after the 4th Perfect in a row.",
        special: "Reduces Despair duration by 3 turns. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 turns",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1372: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.5x after the 2nd Perfect in a row and by 3x after the 4th Perfect in a row.",
        special: "Reduces Despair duration by 3 turns. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 turns",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1373: {//Magellan
        captain: "Boosts ATK of INT characters by 1.5x and their HP by 1.2x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Poisons all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Inflicts Toxic to all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "Poison Dragon",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every turn until 1,500,000 damage per turn.<br>#{stages}",
    },
    1374: {//Magellan
        captain: "Boosts ATK of INT characters by 2.25x and their HP by 1.5x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Poisons all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Inflicts Toxic to all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "Poison Dragon",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every turn until 1,500,000 damage per turn.<br>#{stages}",
    },
    1375: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduces crew's HP by 50%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 turn, amplifies the effect of Dellinger's orb by 1.5x for 1 turn, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1376: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's HP by 20%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 turn, amplifies the effect of Dellinger's orb by 1.5x for 1 turn, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1377: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.3x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 turn",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1378: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.75x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 turn",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1379: {//Shanks
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2x",
        special: "Reduces Paralysis duration by 3 turns. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 turn. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 turn.",
        specialName: "A Decision Made over Sake",
        specialNotes: "#{orb : 2x}",
    },
    1380: {//Shanks
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2.5x",
        special: "Reduces Paralysis duration by 3 turns. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 turn. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 turn.",
        specialName: "A Decision Made over Sake",
        specialNotes: "#{orb : 2x}",
    },
    1381: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.2x",
        special: "Reduces Silence duration by 1 turn, and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1382: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.75x",
        special: "Reduces Silence duration by 1 turn, and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1383: {//Soldier-San
        captain: "Boosts ATK of Striker characters by 2x. Increases damage received by 1.5x",
        special: "Reduces Paralysis, Bind, Despair, and Silence duration by 1 turn. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
        specialNotes: "#{silence}",
        specialName: "Angry Extermination of Bugs",
    },
    1384: {//Soldier-San
        captain: "Boosts ATK of Striker characters by 2.5x. Increases damage received by 1.5x",
        special: "Reduces Paralysis, Bind, Despair, and Silence duration by 1 turn. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
        specialNotes: "#{silence}",
        specialName: "Angry Extermination of Bugs",
    },
    1385: {//Rebecca
        captain: "Reduces damage received by 20%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1386: {//Rebecca
        captain: "Reduces damage received by 25%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1387: {//Luffy 5+
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.25x, boosts ATK by 2.8125x after scoring 4 Perfects in a row",
        special: "Deals 40x character's ATK in [STR] damage to all enemies, and delays all enemies for 1 turn",
        specialName: "Gum Gum: Elephant Gun",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts own base ATK by 100 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 3 turns",
                    "Level 5: Reduces No Healing duration by 4 turns"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1388: {//Zoro 5+
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Cuts the current HP of each enemy by 10%. Reduces special cooldown of [DEX] specials by 1 turn.",
        specialName: "Ittoriyu: Unfortunate Port Bird",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of [DEX] characters by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [QCK] characters by ?%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1389: {//Nami 5+
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [INT] characters by 2x and their RCV by 1.5x.",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Amplifies the effect of orbs for [INT] characters by 1.75x for 1 turn",
        specialName: "Weather Egg: Thunder Breed Tempo",
        specialNotes: "#{orb : 1.75x}",
    },
    1390: {//Buggy Legend
        captain: "Boosts ATK of characters with cost 40 or less by 1.5x and boosts the HP and ATK of characters with cost 41 or greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 turns",
        specialName: "Chop-Chop Clown Car",
    },
    1391: {//Buggy Legend
        captain: "Boosts ATK of characters with cost 40 or less by 1.5x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 turns",
        specialName: "Chop-Chop Clown Car",
    },
    1392: {//Sentomaru
        captain: "Boosts ATK of Striker characters by 2x and boosts the HP of [PSY] characters by 1.25x",
        captainNotes: "A character with both classes will get both boosts",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies. If during that turn every unit scores a Perfect hit, boosts ATK of [PSY] characters by 1.75x in the following turn.",
        specialName: "Large Cutting Axe",
    },
    1393: {//Demaro Black
        captain: "Boosts ATK of characters with cost 30 or less by 2x",
        special: "Boosts ATK of all characters by 1.1x, slightly boosts chances of getting matching orbs and amplifies the effect of orbs by 1.1x for 7 turns",
        specialName: "Three Forked Tongue",
    },
    1394: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x and their RCV by 1.1x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 turn",
        specialName: "Nation's Ambition",
    },
    1395: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 2.25x and their RCV by 1.2x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 turn",
        specialName: "Nation's Ambition",
    },
    1396: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 1.75x and the HP of Striker Characters by 1.25x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 turn",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1397: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 2x and the HP of Striker Characters by 1.5x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 turn",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1398: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 turns",
        specialName: "Out-of-Control White Smoke",
    },
    1399: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x, reduces damage received by 15%",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 turns",
        specialName: "Out-of-Control White Smoke",
    },
    1400: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.275x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 turn and boosts the Color Affinity of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 turns and boosts the Color Affinity of Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
    },
    1401: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.625x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 turn and boosts the Color Affinity of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 turns and boosts the Color Affinity of Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Reduces Silence duration against this unit by 2 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1402: {//Colo Dalton
        captain: "Boosts ATK of [PSY] and [QCK] characters by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.3x for 1 turn",
                "cooldown": [ 14, 4 ],
            },
            {
                "description": "Deals 13x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 turn",
                "cooldown": [ 18, 8 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Offense Battle Axe",
    },
    1403: {//Timeskip Luffy
        captain: "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 turns.",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "Deals 25x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 60x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" for 3 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Gomu Gomu no Red Hawk",
    },
    1404: {//Timeskip Luffy
        captain: "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 turns.",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "Deals 25x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 60x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" for 3 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Gomu Gomu no Red Hawk",
    },
    1405: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x, and their RCV by 1.25x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 turn",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK and RCV of Shooter characters by 100",
    },
    1406: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 2.25x, and their RCV by 1.5x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 turn",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK and RCV of Shooter characters by 100",
    },
    1407: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 1.75x and their RCV by 1.25x",
        special: "Reduces Despair duration by 3 turns and boosts ATK of [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 turns",
    },
    1408: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 2.25x and their RCV by 1.5x",
        special: "Reduces Despair duration by 3 turns and boosts ATK of [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 turns",
    },
    1409: {//Timeskip Brook
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Delays all enemies by 1 turn, and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Soul's Murder Soul: Soul Solid",
        sailor: "Completely resists Paralysis on this character",
    },
    1410: {//Timeskip Brook
        captain: "Boosts chain multiplier by 2.5x. Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Delays all enemies by 1 turn, and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Soul's Murder Soul: Soul Solid",
        sailor: "Completely resists Paralysis on this character",
    },
    1411: {//Timeskip Chopper Again
        captain: "Boosts ATK of Powerhouse characters by 2.25x, reduces crew's RCV to 0",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and deals 60x character's ATK in typeless damage to all enemies",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shiled buff enemies have",
        specialName: "Carving Hoof Palm: Coconut",
        sailor: "If Chopper has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
    },
    1412: {//Timeskip Chopper Again
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's RCV to 0",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and deals 60x character's ATK in typeless damage to all enemies",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shield buff enemies have",
        specialName: "Carving Hoof Palm: Coconut",
        sailor: "If Chopper has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
    },
    1413: {//6+ Whitebeard
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn, 1.75x otherwise and boosts the HP of all characters by 1.2x",
        special: "Cuts the current HP of each enemy by 30%, reduces special cooldown of all non-Captain specials by 1 turn, and randomizes non-matching orbs including [BLOCK] orbs.",
        specialName: "Emperor's Pride",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker and Powerhouse characters by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 2: 	Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Potential 3: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by 3%",
                    "Level 3: Reduce damage taken from [DEX] characters by 4%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 25",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ]
    },
    1414: {//Shop Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        special: "Changes own orb into [INT] and reduces Special Cooldown of Powerhouse characters by 1 turn.",
        specialName: "Are you ready?",
    },
    1415: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 1.5x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 turn and boosts ATK of characters with cost 30 or less by 1.5x for 1 turn",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1416: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 turn and boosts ATK of characters with cost 30 or less by 1.5x for 1 turn",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1417: {//Ronse
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Cuts the current HP of all enemies by 10%, changes [BLOCK] orbs into [STR] orbs for Slasher characters",
        specialName: "Raid Battle-Axe: One Flash",
    },
    1418: {//Stainless
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        special: "Reduces any damage received above 5,000 HP by 99% for 1 turn",
        specialName: "Defence of the Command Line",
    },
    1419: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 turn",
        specialName: "Demonic Style",
    },
    1420: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 turn",
        specialName: "Demonic Style",
    },
    1421: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive",
    },
    1422: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
        special: "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive",
    },
    1423: {//Coliseum T-Bone
        captain: "Boosts ATK of the whole crew by 1.75x and recovers 918 HP at end of each turn,",
        special: "If HP is below 500, reduces damage received by 99% for 1 turn",
        specialName: "For the Sake of Justice",
    },
    1424: {//Coliseum Gin
        captain: "Boosts ATK of Striker characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 1 + 1.25 * (remaining HP) / (total HP) : 2.25 : 1}",
        special: "Deals 500 fixed damage to all enemies and reduces Special Cooldown of Striker characters by 1 turn.",
        specialName: "General Commander's Fight",
    },
    1425: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 1.75x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "Military Leg Heel",
    },
    1426: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 2x and their HP by 1.25x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "Military Leg Heel",
    },
    1427: {//Boo
        captain: "Boosts ATK of QCK characters by 2x",
        special: "Deals 15x character's ATK in QCK damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Unblockable Eight Fists",
    },
    1428: {//Jean Ango
        captain: "Boosts amount of Beli received by 1.5x, and gives chance of duplicating a drop upon completion of the island",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "If the enemy is delayed at the time the special is activated, reduces Special Cooldown of all characters by 1 turn and boosts own attack by 1.75x for 1 turn",
        specialName: "Looting the Losers",
    },
    1429: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair, and Paralysis duration by 3 turns and recovers 2000 HP at the end of each turn for 3 turns",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1430: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 2x",
        special: "Reduces Bind, Despair, and Paralysis duration by 3 turns and recovers 2000 HP at the end of each turn for 3 turns",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1431: {//Raid Franky
        captain: "Boosts ATK of all characters by 2x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew, and boosts their HP by 1.2x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit, and Powerhouse character in your crew",
        special: "Deals 100x character's ATK in typeless damage to all enemies, removes enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut, and End of Turn Heal Buffs, and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "General Cannon",
    },
    1432: {//Raid Franky
        captain: "Boosts ATK of all characters by 2.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew, and boosts their HP by 1.5x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit, and Powerhouse character in your crew",
        special: "Deals 100x character's ATK in typeless damage to all enemies, removes enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut, and End of Turn Heal Buffs, and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "General Cannon",
    },
    1433: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 turn at the start of the fight, reduces crew's current HP by 10% at the end of each turn, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
    },
    1434: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 turn at the start of the fight, reduces crew's current HP by 10% at the end of each turn, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
        limit: "This character has a limit break path",
    },
    1435: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2x and HP of Powerhouse characters by 1.2x",
        special: "Makes Perfects harder to hit for 1 turn, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 turn, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)",
        sailor: "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
    },
    1436: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2.5x and HP of Powerhouse characters by 1.25x",
        special: "Makes Perfects harder to hit for 1 turn, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 turn, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)",
        sailor: "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
        limit: "This character has a limit break path",
    },
    1437: {//Ikaros Much
        captain: "Boosts ATK of Powerhouse and Striker characters by 1.3x",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 1.69x bonus.",
        special: "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Squid Spear",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew",
    },
    1438: {//Ikaros Much
        captain: "Boosts ATK of Powerhouse and Striker characters by 1.6x",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 2.56x bonus.",
        special: "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Squid Spear",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew",
    },
    1439: {//Daruma
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.2x",
        special: "Reduces Paralysis and Silence duration by 2 turns, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialNotes: "#{silence}",
        specialName: "Fire Daruma Cutter",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1440: {//Daruma
        captain: "Reduces cooldown of all specials by 4 turns at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.5x",
        special: "Reduces Paralysis and Silence duration by 2 turns, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialNotes: "#{silence}",
        specialName: "Fire Daruma Cutter",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        limit: "This character has a limit break path",
    },
    1441: {//Zeo
        captain: "Boosts ATK of [INT] characters by 1.5x, and reduces damage received by 10%",
        special: "Makes Perfects easier to hit, locks all orbs, and locks the chain multiplier at 2.5x for 1 turn",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)",
        specialName: "Flail Hidden From God",
        sailor: "Completely resists Blindness if your Captain is a Powerhouse character",
    },
    1442: {//Zeo
        captain: "Boosts ATK of [INT] characters by 2.25x and reduces damage received by 20%",
        special: "Makes Perfects easier to hit, locks all orbs, and locks the chain multiplier at 2.5x for 1 turn",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)",
        specialName: "Flail Hidden From God",
        sailor: "Completely resists Blindness if your Captain is a Powerhouse character",
        limit: "This character has a limit break path",
    },
    1443: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.75x following a chain of Good > Great > Perfect hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Papara Hammer",
        sailor: "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
    },
    1444: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Papara Hammer",
        sailor: "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
        limit: "This character has a limit break path",
    },
    1445: {//Boa Hancock+
        captain: "Boosts ATK of [QCK] and [PSY] characters proportionally to the crew's current HP. If HP is below 50%, Boosts RCV of [QCK] and [PSY] units by 1.5x.",
        special: "Boosts ATK and RCV of [QCK] and [PSY] characters by 1.75x for 1 turn, and delays all enemies for 1 turn. Changes your Captain orb to [RCV]. If HP is above 50%, changes left column into Matching orbs.",
        specialName: "Perfume Femur",
        captainNotes: "#{captainProportional : higher : 2.25 + 0.5 * (remaining HP) / (total HP) : 2.75 : 2.25}"
    },
    1446: {//Sogeking 5+
        captain: "Boosts ATK of Shooter characters by 2x and RCV of Shooter characters by 1.25x.",
        special: "Deals random PSY damage to all enemies and delays enemies by 3 turns.",
        specialName: "Green Star: Platanus Shuriken",
        limit: "This character has a limit break path",
    },
    1447: {//Sanji 5+
        captain: "Boosts ATK of Powerhouse characters by 2.5x and reduces damage take by 10%.",
        special: [
            {
                "description": "Deals 5,000 fixed damage to all enemies and boosts own ATK by 1.2x for 1 turn.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Deals 50,000 fixed damage to all enemies and boosts own ATK by 1.5x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Grill Shot",
    },
    1448: {//Chopper 5+
        captain: "Boosts ATK of Fighter characters by 2.5x.",
        special: "Deals PSY damage according to HP. For Fighter characters, Changes [BLOCK] orbs into matching orbs.",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the higher the HP is. The formula used is ???? * (current HP) / (total HP)",
        specialName: "Weight Gain: Heavy Gong",
    },
    1449: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.5x. Heals for .3x character's RCV at the end of the turn each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 turn, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1450: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.75x. Heals for .5x character's RCV at the end of the turn each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 turn, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1451: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.25x if they have a matching orb, by 1.5x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 turns",
        specialName: "Diable Jambe: Love Shot",
    },
    1452: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.5x if they have a matching orb, by 2x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 turns",
        specialName: "Diable Jambe: Love Shot",
    },
    1453: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1454: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x and their RCV by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [DEX], bottom row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1455: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Driven characters by 2.5x until the first hit other than Perfect and recovers 120 HP at end of each turn",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 turn",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 turn",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1456: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than Perfect and recovers 120 HP at end of each turn",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 turn",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 turn",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1457: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [QCK] and [INT] characters by 1.75x",
        special: "Reduces Bind and Despair duration by 2 turns, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1458: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 2 turn at the start of the fight, boosts ATK of [QCK] and [INT] characters by 2x",
        special: "Reduces Bind and Despair duration by 2 turns, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1459: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great > Perfect hits",
        special: "Binds self for 2 turns, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "Crescendo Stone",
    },
    1460: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 2.14x following a chain of Good > Good > Great > Perfect hits",
        special: "Binds self for 2 turns, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "Crescendo Stone",
    },
    1461: {//Snow Zoro
        captain: "Boosts ATK of [QCK] characters by 2x at the start of the chain, by 2.6x after the 3rd Perfect in a row.",
        special: "Deals 11x character's ATK in [QCK] damage to one enemy, boosts ATK of [QCK] characters by 1.5x for 1 turn",
        specialName: "Demoltion: Ice Crush",
    },
    1462: {//White Day Luffy
        captain: "Boosts chain multiplier by 2x",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 turn",
        sailor: "Reduces Paralysis for 2 turns for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1463: {//White Day Luffy
        captain: "Boosts chain multiplier by 2.5x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 turn",
        sailor: "Reduces Paralysis for 2 turns for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1464: {//White Day Chopper
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 turns",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1465: {//White Day Chopper
        captain: "Boosts ATK and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 turns",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1466: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1467: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.3x",
        special: "Reduces the defense of all enemies by 100% for 1 turn and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1468: {//Fortnight Sentomaru 
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
        special: "Delays all enemies for 1 turn. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1469: {//Fortnight Sentomaru Evolved
        captain: "Boosts ATK of [STR] characters by 2x and the HP of Powerhouse characters by 1.25x",
        captainNotes: "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
        special: "Delays all enemies for 1 turn. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1470: {//Lip Service Doughty
        captain: "Boosts ATK of Slasher and Powerhouse characters by 1.5x, but boost his OWN ATK by 3x",
        captainNotes: "Captain ability does not stack with itself (Will not boost another Doughty by 3x)",
        special: "Deals 8x character's ATK as [STR] damage to one enemy. Changes captain orb into [RCV]",
        specialName: "Meat Grinder Blade",
    },
    1471: {//Albion
        captain: "Boosts ATK of Slasher and Driven characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
        special: "Reduces crew's HP by 90%, deals 1x the removed HP as damage to all enemies.",
        specialName: "Deep Claw Stab",
    },
    1472: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each turn and if you don't attack with her, reduces damage received by 10% for that turn.",
        special: [
            {
                "description": "Changes adjacent orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "Changes all orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the beneficial form of [BLOCK] orbs. They can not be shuffled by you or your opponent. They count as beneficial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        sailor: "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
        specialName: "Tears of Courage",
    },
    1473: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each turn and if you don't attack with her, reduces damage received by 10% for that turn.",
        special: [
            {
                "description": "Changes adjacent orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "Changes all orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the benefittial form of [BLOCK] orbs. They can not be shuffled or swapped by you or your opponent. They count as benefittial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        sailor: "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
        specialName: "Tears of Courage",
        limit: "This character has a limit break path",
    },
    1474: {//King Neptune
        captain: "Boosts ATK of all characters by 1.5x and EXP gained by 1.5x",
        special: "Locks all orbs for 1 turn. If the HP of the enemy with the highest HP percentage is above 50%, cuts the current HP of all enemies by 20%, otherwise, deals 140x character's ATK in typeless damage to all enemies.",
        sailor: "Makes [INT], [PSY], and [TND] orbs \"beneficial\" for this unit",
        specialName: "Merman Gujutsu - Ultramarine",
    },
    1475: {//King Neptune
        captain: "Boosts ATK of all characters by 2.25x and EXP gained by 1.5x",
        captainNotes: "EXP boost does not take effect if he becomes your capatin in the middle of the adventure.",
        special: "Locks all orbs for 1 turn. If the HP of the enemy with the highest HP percentage is above 50%, cuts the current HP of all enemies by 20%, otherwise, deals 140x character's ATK in typeless damage to all enemies.",
        sailor: "Makes [INT], [PSY], and [TND] orbs \"beneficial\" for this unit",
        specialName: "Merman Gujutsu - Ultramarine",
    },
    1476: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Delays all enemies by 1 turn, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn",
        sailor: "Boosts base HP, RCV and ATK of all characters by 50",
        specialName: "Merman Gujutsu - Spear of the Ages",
    },
    1477: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2.5x and boosts HP of Powerhouse characters by 1.25x",
        captainNotes: "This effect does stack for characters that have both classes, so Striker/Powerhouse characters will have 2.5x ATK and 1.25x HP",
        special: "Delays all enemies by 1 turn, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn",
        sailor: "Boosts base HP, RCV and ATK of all characters by 50",
        specialName: "Merman Gujutsu - Spear of the Ages",
        limit: "This character has a limit break path",
    },
    1478: {//Caribou
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 1.75x after the 22nd hit, by 2x after the 33th hit, by 3x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 turn",
        specialNotes: "#{randomHits : 15}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "Swamp-Swamp Gatling Gun",
    },
    1479: {//Caribou
        captain: "Boosts ATK of all characters by 1.75x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 33th hit, by 3.5x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 turn",
        specialNotes: "#{randomHits : 15}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "Swamp-Swamp Gatling Gun",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1480: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 turns",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 turn when it is rewinded and reduces Silence for 3 turns for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1481: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 turns",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 turn when it is rewinded and reduces Silence for 3 turns for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1482: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1483: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2.5x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1484: {//Wild Sanji
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        special: "Locks the chain multiplier at 2.5x for 1 turn, reduces Bind duration by 5 turns",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight.",
        specialName: "Wild Shot",
    },
    1485: {//Wild Sanji
        captain: "Boosts HP and RCV of all characters by 1.2x and boosts ATK by 3.25x after scoring 3 Perfects in a row",
        special: "Locks the chain multiplier at 2.5x for 1 turn, reduces Bind duration by 5 turns",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight.",
        specialName: "Wild Shot",
    },
    1486: {//Coliseum Ideo
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a matching orb.",
        special: "Increases damage received by 2x for 2 turns, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Destruction Cannon: Hidden Bullet",
    },
    1487: {//Coliseum Ideo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Fighter characters by 3x if they have a matching orb.",
        special: "Increases damage received by 2x for 2 turns, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Destruction Cannon: Hidden Bullet",
    },
    1488: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 1.5x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1489: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 2x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1490: {//Coliseum Mr. 5
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 turns, and reduces the defense of all enemies by 50% for one turn.",
        specialName: "Explosion Blocking Escape",
    },
    1491: {//Coliseum Mr. 5
        captain: "Boosts ATK by 2x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 turns, and reduces the defense of all enemies by 50% for one turn.",
        specialName: "Explosion Blocking Escape",
    },
    1492: {//6+ Sabo
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters by 2.75x",
        captainNotes: "HP and RCV boost are not known yet, but are assumed to be for anyone and is a 1.2x boost for both in the calculator.",
        special: [
            {
                "description": "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn you score 5 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following turn.",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Boosts ATK of Free Spirit characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following turn.",
                "cooldown": [ 23, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Reborn - Fire",
    },
    1493: {//STR Fishman Outlaw
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1494: {//QCK Fishman Outlaw
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Locks captain's orb for 1 turn",
        specialName: "Captain Slot Hold: Light",
    },
    1495: {//DEX Fishman Outlaw
        captain: "Boosts ATK of [DEX] characters by 1.5x",
        special: "Reduces Silence duration by 1 turn",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1496: {//INT Fishman Outlaw
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces Despair duration by 2 turns",
        specialName: "Captain Soul Recovery",
    },
    1497: {//PSY Fishman Outlaw
        captain: "Boosts ATK of Shooter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 turn",
        specialName: "Light Attack Boost",
    },
    1498: {//STR Fishman Guard
        captain: "Boosts ATK, HP and RCV of [STR] characters by 1.2x",
        special: "Changes Captain's orb into [STR]",
        specialName: "Captain Slot Change - [STR]",
    },
    1499: {//QCK Fishman Guard
        captain: "Boosts ATK, HP and RCV of [QCK] characters by 1.2x",
        special: "Changes Captain's [BLOCK] orbs into Matching orbs",
        specialName: "Captain [BLOCK] Slot Change - Matching",
    },
    1500: {//DEX Fishman Guard
        captain: "Boosts ATK, HP and RCV of [DEX] characters by 1.2x",
        special: "Recovers 2000 HP",
        specialName: "First Aid",
    },
    1501: {//Caribou
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of characters with cost 15 or less by 2x",
        special: "Reduces crew's current HP by 50%, boosts ATK of all characters by 1.3x for 1 turn",
        specialName: "Conviction of God's Will",
    },
    1502: {//Coribou
        captain: "Reduces damage received from [PSY] and [INT] enemies by 30%",
        special: "For Driven characters, randomizes non-matching orbs",
        specialName: "Confession Burial",
    },
    1503: {//Hammond
        captain: "Boosts ATK of Powerhouse characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : ??? + ??? * (1 - (remaining HP) / (total HP)) : ??? : 2.25}",
        special: "Changes own orb into [QCK] and changes adjacent orbs into [EMPTY] orbs",
        specialName: "Absurd Invitation",
    },
    1504: {//Vander Decken IX
        captain: "Boosts ATK of Driven characters by 2x. After scoring 3 Perfects in a row, boosts ATK of Driven characters by 2.4x instead.",
        special: "Changes the orbs in the middle row into [EMPTY] orbs and deals 20x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Inescapable Pursuit",
    },
    1505: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 2.25x if HP is below 30% at the start of the turn",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 turn, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 turn.",
        specialName: "Shark Arrows",
    },
    1506: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 2.5x if HP is below 30% at the start of the turn, 2.25x otherwise",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 turn, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 turn.",
        specialName: "Shark Arrows",
    },
    1507: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 1.69x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1508: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1509: {//Haruta
        captain: "Reduces cooldown of Slasher and Cerebral specials by 1 turn at the start of the fight. Boosts ATK of [INT] characters by 2x.",
        special: "Deals 12x character's ATK in INT damage to one enemy and reduces damage received from PSY enemies by 80%.",
        specialName: "Honorable Blade",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1510: {//Speed Jiru
        captain: "Boosts ATK of Driven and Striker characters by 2x",
        special: "Deals 12,500 fixed damage to one enemy",
        specialName: "Acceleration Lance",
        sailor: "When HP is above 70% at the start of the turn, boosts ATK of Striker characters by 20",
    },
    1511: {//Atmos
        captain: "Boosts ATK of PSY characters by 2x",
        special: "Reduces Despair duration by 3 turns, boosts own ATK by 1.5x for 1 turn",
        specialName: "Buffalo Roar",
        sailor: "Boosts base ATK of Powerhouse characters by 20 if your captain is a Powerhouse character",
    },
    1512: {//Kingdew
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Removes Poison, boosts ATK of Powerhouse characters by 1.5x for 1 turn if HP is below 30% when the special is activated",
        specialName: "Enlightened Spirit",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit if your captain is a Powerhouse character",
    },
    1513: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 1.75x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Unfamiliar Escort",
    },
    1514: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 2.5x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Unfamiliar Escort",
    },
    1515: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 turn",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1516: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 2x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 turn",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1517: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Spring Hopper - Bullet",
    },
    1518: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Spring Hopper - Bullet",
    },
    1519: {//Dadan
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Slasher characters by 1.5x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1520: {//Dadan
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Slasher characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1521: {//Dogra
        captain: "Boosts ATK of [QCK] and Slasher characters by 1.2x",
        captainNotes: "The bonus is cumulative. [QCK] Slasher characters get a 1.44x bonus.",
        special: "Reduces Despair duration by 1 turn, recovers 1000 HP at the end of each turn for 2 turns",
        specialName: "Affectionate Circumstances",
    },
    1522: {//Ace
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.2x",
        special: "Removes blindness, boosts own ATK by 1.75x for 1 turn",
        specialName: "Demon's Temper",
    },
    1523: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 1.75x and recovers 1,000 HP at end of each turn",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1524: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 1,224 HP at end of each turn",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1525: {//Sulieman
        captain: "Boosts ATK of Slasher characters by 3.25x, reduces his own ATK multiplier by 0.0625x at the end of each turn until it is 2x",
        special: "Deals 3 hits of random typeless damage to random enemies, delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.3x for 2 turns",
        specialNotes: "#{randomHits : 3}<br>#{random : 50,000 : 150,000 : per hit}",
        specialName: "Sorrowful Execution",
    },
    1526: {//Arlong
        captain: "Boosts ATK of [INT] characters by 1.75x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.5x for 1 turn",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.75x for 1 turn",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1527: {//Arlong
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of [INT] characters by 2x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.5x for 1 turn",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.75x for 1 turn",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1528: {//Blenheim
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Reduces Despair duration by 2 turns, makes STR, DEX, and QCK orbs \"beneficial\" to Powerhouse characters for 1 turn if HP is below 30% at the start of the turn",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
        specialName: "Australian Army Aid Blade",
    },
    1529: {//Cavendish
        captain: "Boosts ATK of all characters by 1.5x, but boosts his OWN attack by 3x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 turn, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1530: {//Cavendish
        captain: "Boosts ATK of all characters by 1.75x, but boosts his OWN attack by 3.5x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 turn, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1531: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
        special: [
            {
                "description": "Delays all enemies for 3 turns",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 turns, adds 0.2x to Chain multiplier for 4 turns",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 turns, adds 0.3x to Chain multiplier for 4 turns",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Blindness",
        specialName: "Long-Range Attack: Bagworm",
    },
    1532: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
        special: [
            {
                "description": "Delays all enemies for 3 turns",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 turns, adds 0.2x to Chain multiplier for 4 turns",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 turns, adds 0.3x to Chain multiplier for 4 turns",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Blindness",
        specialName: "Long-Range Attack: Bagworm",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of Shooter characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1533: {//Rayleigh
        captain: "Boosts ATK of [QCK] characters by 2x and their HP by 1.2x at the start of the chain, by 2.5x after the 4th Perfect in a row.",
        special: "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
        sailor: "Makes [STR], [INT], and [DEX] orbs \"beneficial\" for this unit",
        specialName: "The Teacher's Final Ordeal",
    },
    1534: {//Rayleigh
        captain: "Boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x at the start of the chain, by 3x after the 4th Perfect in a row.",
        special: "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
        sailor: "Makes [STR], [INT], and [DEX] orbs \"beneficial\" for this unit",
        specialName: "The Teacher's Final Ordeal",
    },
    1535: {//Duval
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [PSY] characters by 2.5x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of PSY characters by 1.75x for 1 turn",
        sailor: "Makes [INT] orbs \"beneficial\" for [PSY] characters",
        specialName: "Prideful Memories",
    },
    1536: {//Duval
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of [PSY] characters by 3x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of PSY characters by 1.75x for 1 turn",
        sailor: "Makes [INT] orbs \"beneficial\" for [PSY] characters",
        specialName: "Prideful Memories",
    },
    1537: {//Heracles'n
        captain: "Boosts ATK of [STR] characters by 2x and boosts HP of Shooter and Striker characters by 1.2x",
        special: "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
        sailor: "Boosts base HP of STR characters by 150",
        specialName: "Greenstone Threat",
    },
    1538: {//Heracles'n
        captain: "Boosts ATK of [STR] characters by 2.5x and boosts HP of Shooter and Striker characters by 1.25x",
        special: "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
        sailor: "Boosts base HP of STR characters by 150",
        specialName: "Greenstone Threat",
    },
    1539: {//Perona
        captain: "Boosts ATK and RCV of characters with cost 20 or less by 1.5x",
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 90% for 1 turn, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns",
        sailor: "Boosts base ATK of INT characters by 50",
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
    },
    1540: {//Perona
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their RCV by 1.5x",
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 90% for 1 turn, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns",
        sailor: "Boosts base ATK of INT characters by 50",
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
    },
    1541: {//Elizabeth
        captain: "Boosts ATK by 2x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 turn",
        sailor: "Restores her own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
    },
    1542: {//Elizabeth
        captain: "Boosts RCV and HP by 1.2x, boosts ATK by 2.5x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 turn",
        sailor: "Restores her own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
    },
    1543: {//6+ Usopp
        captain: "Boosts ATK of Shooter characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to Shooter characters. At the beginning of each Stage, increases the Attack Timer of all enemies by 1 turn",
        captainNotes: "The Attack Timer increase is NOT a delay, so the enemies can still be delayed. Attack Timer increase ignores Debuff Prevention barriers",
        special: "Cuts the current HP of each enemy by 10%. If enemies have Delay Prevention, ignores it and Delays all enemies for 1 turn. Otherwise, Delays all enemies for 3 turns",
        sailor: "Completely resists Blindness",
        specialName: "Green Star, Impact Wolf",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of Shooter characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1544: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 1.75x and heals for .3x her RCV at the end of the turn each time you hit a Perfect",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Bean Paste under the Petal Snow",
    },
    1545: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 2.25x and heals for .5x her RCV at the end of the turn each time you hit a Perfect",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Bean Paste under the Petal Snow",
    },
    1546: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 1.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 turn",
        specialName: "Dawn of A Big Star",
    },
    1547: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 2x and boosts HP of Free Spirit characters by 1.3x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 turn",
        specialName: "Dawn of A Big Star",
    },
    1548: {//Soul King Managers
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 1 turn",
        specialName: "Former Thief's Box Office",
    },
    1549: {//5+ Robin
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces Bind, Despair and Silence duration by 3 turns, and reduces Special Cooldown of all characters by 1 turn",
        specialName: "Mil Fluer: Campo de Flores",
        specialNotes: "#{silence}",
    },
    1550: {//5+ Franky
        captain: "Boosts ATK of [INT] characters by 2.5x, reduces damage received by 10%",
        special: "Deals 35x character's ATK in [INT] damage to all enemies. Changes [TND] and [RCV] orbs on Shooter and Free Spirit characters into Matching Orbs.",
        specialName: "Franky's Rocket Launcher",
    },
    1551: {//5+ Brook
        captain: "Boosts ATK of Free Spirit characters by 2.5x and recovers 430 HP at end of each turn",
        special: "Delays all enemies for 1 turn and locks all orbs for 1 turn",
        specialName: "Song of Scratches: Blizzard Slash",
    },
    1552: {//Coliseum Hajrudin
        captain: "Boosts ATK of characters with 40 cost by 2.5x",
        special: "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 turn",
        specialName: "Thunder Giant",
    },
    1553: {//Coliseum Hajrudin
        captain: "Boosts ATK of characters with 40 cost by 2.75x",
        special: "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 turn",
        specialName: "Thunder Giant",
        limit: "This character has a limit break path",
    },
    1554: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2x",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 turn",
        specialName: "Pure Body and Soul",
    },
    1555: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2.25x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 turn",
        specialName: "Pure Body and Soul",
    },
    1556: {//Wadatsumi
        captain: "Boosts HP of STR characters by 2x",
        special: "If the HP of the enemy with the highest HP percentage is above 3,000,000 HP, boosts own ATK by 2x for 1 turn",
        specialName: "Sailboat Sinking Fist",
    },
    1557: {//Zeo
        captain: "Boosts ATK of Striker characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns",
        specialName: "Super Sole Headbutt",
    },
    1558: {//Ikaros
        captain: "Boosts ATK of Shooter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Cuts the current HP of each enemy by 15%",
        specialName: "Stamping Press",
    },
    1559: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's HP by 50%, deals 55x ATK in Typeless damage to all enemies",
        specialName: "Disorderly Drunken Frenzy Killing",
    },
    1560: {//Daruma
        captain: "Boosts ATK of Fighter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Empties all slots including those with [BLOCK] orbs",
        specialName: "Daruma Drop",
    },
    1561: {//Dosun
        captain: "Boosts ATK of [INT] characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in [INT] damage to one enemy",
        specialName: "Explosive Nail Hammer",
    },
    1562: {//Hody Jones
        captain: "Boosts ATK of Powerhouse characters by 3.5x, reduces own ATK multiplier by 0.1x at the end of each turn until it is 1.5x, reduces crew's current HP by 10% at the end of each turn",
        special: "Deals 60x character's ATK in [QCK] damage to one enemy, increases damage received by 2x for 2 turns, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Drugs From Heaven",
    },
    1563: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.75x at the start of the chain and by 2.1875x after the 5th Perfect in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1564: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x at the start of the chain and by 3x after the 5th Perfect in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1565: {//Dagama
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 1.75x",
        special: "Reduces Special Cooldown of all characters by 1 turn and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1566: {//Dagama
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 1 turn and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1567: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "The Princess' Principle",
    },
    1568: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 2x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "The Princess' Principle",
    },
    1569: {//Anniversary Law
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli recieved by 1.2x",
        special: "Randomizes all non-matching orbs, including [BLOCK] orbs and switches orbs between slots three times",
        specialName: "ROOM Shambles・Junction",
    },
    1570: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.75x and chain by 1.5x if HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 2.5x otherwise",
        special: "Reduces crew's current HP by 80%, deals 60x character's ATK in STR damage to one enemy. Adds 80x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "King Sword Shine",
    },
    1571: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.75x and chain by 1.5x if HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 2.5x otherwise",
        special: "Reduces crew's current HP by 80%, deals 60x character's ATK in STR damage to one enemy. Adds 80x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "King Sword Shine",
    },
    1572: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 turns",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "Ruler's Aide Flight",
    },
    1573: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 turns",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "Ruler's Aide Flight",
    },
    1574: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.25x",
        special: "Delays all enemies for 1 turn, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
        sailor: "When HP is below 30% at the start of the turn, boosts own ATK by 200",
        specialName: "Dash - Dive - Destroy",
    },
    1575: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.5x and their HP by 1.25x",
        special: "Delays all enemies for 1 turn, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
        sailor: "When HP is below 30% at the start of the turn, boosts own ATK by 200",
        specialName: "Dash - Dive - Destroy",
    },
    1576: {//Kin'emon
        captain: "Boosts ATK by 2.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 60x character's ATK in typeless damage to all enemies, and changes all orbs on all characters into Kinemon's orb.",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        sailor: "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        specialName: "Flaming Flash",
    },
    1577: {//Kin'emon
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Boosts ATK by 3.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 60x character's ATK in typeless damage to all enemies, and changes all orbs on all characters into Kinemon's orb.",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        sailor: "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        specialName: "Flaming Flash",
    },
    1578: {//Momonosuke
        captain: "Protects from defeat as long as HP is above 50%",
        special: [
            {
                "description": "Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Makes [STR], [QCK], [DEX], and [INT] orbs \"beneficial\" for this unit",
        specialName: "Miraculous Flying Dragon",
    },
    1579: {//Momonosuke
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        special: [
            {
                "description": "Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Makes [STR], [QCK], [DEX], and [INT] orbs \"beneficial\" for this unit",
        specialName: "Miraculous Flying Dragon",
    },
    1580: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 1.5x and boosts RCV of DEX characters by 1.2x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "ROOM Tact",
    },
    1581: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 2x and boosts RCV of DEX characters by 1.5x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "ROOM Tact",
    },
    1582: {//Fortnight Monet
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        special: "Recovers 10x character's RCV in HP. Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn",
        specialName: "Observing within the Snow Storm",
    },
    1583: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Locks all orbs for 1 turn. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 turn, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 turn",
        specialName: "Admiral Hug",
    },
    1584: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: "Locks all orbs for 1 turn. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 turn, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 turn",
        specialName: "Admiral Hug",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1585: {//Coliseum Helmeppo
        captain: "Boosts ATK and RCV of Slasher and Driven characters by 1.5x",
        special: "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 turn and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1586: {//Coliseum Helmeppo
        captain: "Boosts ATK of Slasher and Driven characters by 2x and their RCV by 1.5x",
        special: "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 turn and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1587: {//Legend Sanji
        captain: "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 turn, preventing all debuffs to himself. This does not remove the his own Captain boost while he is unable to attack. (Including, but not limited to, Bind, Despair, and Silence) Next turn, boosts own ATK by 6.25x instead",
        captainNotes: "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
        special: "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs, and own orb into Matching orbs. Boosts own attack by 2x for 1 turn",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        specialName: "Hell Memories",
    },
    1588: {//Legend Sanji
        captain: "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 turn, preventing all debuffs to himself. This does not remove the his own Captain boost while he is unable to attack. (Including, but not limited to, Bind, Despair, and Silence) Next turn, boosts own ATK by 6.25x instead",
        captainNotes: "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
        special: "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs, and own orb into Matching orbs. Boosts own attack by 2x for 1 turn",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        specialName: "Hell Memories",
    },
    1589: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },
    1590: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3.5x, Boosts HP and RCV of all characters by 1.2x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },	
    1591: {//Anniversary Boa
        captain: "Boosts ATK and RCV of Fighter and Free Spirit characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 turn",
        specialName: "Immoral Gaze",
    },
    1592: {//Anniversary Boa
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.25x and their RCV by 1.75x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 turn",
        specialName: "Immoral Gaze",
    },
    1593: {//Gear 4 Luffy
        captain: "Boosts ATK of Fighter characters by 2.5x. If you use \"King Kong Gun\" THIS LUFFY boosts ATK of Fighter characters by 4x instead for 3 turns and reduces damage taken by 56% for 3 turns.",
        special: [
            {
                "description": "Deals 100x character's ATK in typeless damage to one enemy, and makes [STR], [DEX], [PSY], [INT], [TND], and [RCV] orbs \"beneficial\" for Fighter characters for 1 turn.  After 3 turns, Binds and Despairs himself for 7 turns.",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 200x character's ATK in typeless damage to one enemy, and makes [STR], [DEX], [PSY], [INT], [TND], and [RCV] orbs \"beneficial\" for Fighter and Free Spirit characters for 3 turns. After 3 turns, Binds and Despairs himself for 7 turns.",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "King Kong Gun",
    },
    1594: {//Fujitora
        captain: "Cuts the current HP of each enemy by 10% at the end of each turn",
        special: "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Gravity Blade: Fierce Tiger",
    },
    1595: {//Fujitora
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.2x, cuts the current HP of each enemy by 10% at the end of each turn",
        special: "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Gravity Blade: Fierce Tiger",
    },
    1596: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 turns, reduces damage received by 70% for 1 turn",
        specialName: "Great Dinner Buffet",
    },
    1597: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.75x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 turns, reduces damage received by 70% for 1 turn",
        specialName: "Great Dinner Buffet",
    },
    1598: {//Ryuboshi
        captain: "Boosts HP of Powerhouse characters by 1.5x",
        special: "Boosts ATK of all characters by 1.2x and recovers 5x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Musical Scale",
    },
    1599: {//Manboshi
        captain: "Boosts ATK of Powerhouse characters by 1.75x",
        special: "Reduces the defense of all enemies by 50% for 1 turn. Changes own orb into [QCK]",
        specialName: "Happy Dance",
    },
    1600: {//3rd Anniversary Luffy
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, locks orbs for 1 turn, and amplifies the effect of orbs on [PSY] and [INT] characters by 1.75x for 1 turn",
        specialName: "Right Leg Armament: Gum-Gum Battle Axe",
    },
    1601: {//Power Creep Shiryu
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 turns,",
        specialName: "Blood Stained 'Iron Wall'",
        sailor: "Boosts own base ATK by 100 if this character is the last in the chain to attack",
    },
    1602: {//Power Creep Shiryu
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row",
        special: "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 turns,",
        specialName: "Blood Stained 'Iron Wall'",
        sailor: "Boosts own base ATK by 100 if this character is the last in the chain to attack",
    },
    1603: {//McGuy
        captain: "Boosts ATK of [STR] characters by 2.25x and their RCV by 1.25x",
        special: "Delays all enemies for 2 turns",
        specialName: "Numb Crosscut",
    },
    1604: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1605: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 2x and recovers 500 HP at end of each turn",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1606: {//Lafitte
        captain: "Boosts ATK and RCV of [PSY] characters by 1.75x",
        special: "Randomly shuffles non-matching orbs on Shooter characters, reduces enemies defense by 50% for 1 turn and delays all enemies for 1 turn",
        specialName: "Deprivation of Self-Consciousness",
    },
    1607: {//Van augur
        captain: "Boosts ATK of Shooters by 2x",
        special: "Deals 10x character's ATK in [DEX] damage to one enemy, locks orbs for 1 turn, and boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Painless Bullet",
    },
    1608: {//Doc Q
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "For each enemy, has an extremely small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : <1%}",
        specialName: "Vile Fruit",
    },
    1609: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last turn.",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
        special: "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "Heavy Thunder",
    },
    1610: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last turn.",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
        special: "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "Heavy Thunder",
    },
    1611: {//Kuma
        captain: "Boosts ATK of Shooter characters by 1.75x and their HP by 1.2x",
        special: "Reduces the duration of Bind and Despair by 7 turns.  Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If Kuma has a [PSY] orb, and you hit a Perfect with him, keep his [PSY] orb for the next turn",
    },
    1612: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x",
        special: "Reduces the duration of Bind and Despair by 7 turns.  Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If Kuma has a [PSY] orb, and you hit a Perfect with him, keep his [PSY] orb for the next turn",
    },
    1613: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 turn",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1614: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 turn",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1615: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 turn and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 turn",
        specialName: "Desert Spada",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    1616: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 turn and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 turn",
        specialName: "Desert Spada",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Reduces Silence duration against this character by 3 turns" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
        ]
    },
    1617: {//Moria
        captain: "Boosts ATK of [STR], [INT], and [DEX] characters by 2x",
        special: "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 turns",
        specialName: "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
        sailor: "When any other character uses a special, reduces own cooldown by 1 turn",
    },
    1618: {//Moria
        captain: "Boosts ATK of [STR], [INT], and [DEX] characters by 2.5x",
        special: "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 turns",
        specialName: "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
        sailor: "When any other character uses a special, reduces own cooldown by 1 turn",
    },
    1619: {//6+ Raybae/Rayleigh
        captain: "Boosts chain multiplier by 4x and boosts HP and RCV of all characters by 1.2x",
        special: "Reduces Bind, Despair, and Paralysis duration by 7 turns, delays all enemies for 1 turn, and makes Perfects easier to hit for 1 turn",
        specialName: "Netherworld Conqueror",
    },
    1620: {//Log Kid
        captain: "Boosts ATK of Strikers characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 turn",
        specialName: "Double Steel Magnetic Arm",
    },
    1621: {//Log Kid
        captain: "Boosts ATK of Striker characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise and boosts HP of Striker characters by 1.2x",
        special: "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 turn",
        specialName: "Double Steel Magnetic Arm",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability #: Boosts base ATK of Striker characters by 75" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability #: Boosts base HP of Driven characters by 75" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    1622: {//Reborn Doffy
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat [Neo]",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    1623: {//Reborn Doffy
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat [Neo]",
        captain: "Boosts ATK and HP of Slasher characters by 2x"
    },
    1624: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 1.5x and boosts HP of Powerhouse characters by 1.25x",
        special: "Randomizes all orbs, cuts the current HP of all enemies by 10%, and Poisons all enemies.",
        specialName: "Flexible Six Swords",
    },
    1625: {//Daruma
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.75x",
        special: "Randomizes all orbs, including [BLOCK] orbs, and reduces damage received by 50% for 1 turn.",
        specialName: "Arching Fangs",
    },
    1626: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 turn",
        specialName: "The Calm Before The Storm",
    },
    1627: {//Mach Vise
        captain: "Boosts ATK Free Spirit characters by 2x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 turn and boosts the Color Affinity of Striker characters by 1.25x for 1 turn",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 turns and boosts the Color Affinity of Striker characters by 1.5x for 1 turn",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns and boosts the Color Affinity of Striker characters by 1.75x for 1 turn",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
    },
    1628: {//Mach Vise
        captain: "Boosts ATK Free Spirit and Striker characters by 2.25x and their RCV by 1.5x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 turn and boosts the Color Affinity of Striker characters by 1.25x for 1 turn",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 turns and boosts the Color Affinity of Striker characters by 1.5x for 1 turn",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns and boosts the Color Affinity of Striker characters by 1.75x for 1 turn",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
    },
    1629: {//Ikaros Much
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1630: {//Ikaros Much
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1631: {//Fisher Tiger
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Boosts ATK of Powerhouse characters by 1.75x for 3 turns",
        specialName: "Rebellion against the \"Prohibition\" - Taboo",
        sailor: "When any other Powerhouse character uses a special, reduces own cooldown by 1 turn",
    },
    1632: {//Fisher Tiger
        captain: "Boosts ATK of Powerhouse characters by 2.75x",
        special: "Boosts ATK of Powerhouse characters by 1.75x for 3 turns",
        specialName: "Rebellion against the \"Prohibition\" - Taboo",
        sailor: "When any other Powerhouse character uses a special, reduces own cooldown by 1 turn",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    1633: {//Punk Hazard Dragon
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 15x character's ATK in [STR] damage to all enemies and amplifies the effect of orbs by 1.25x for 1 turn",
        specialName: "Flame Breath",
    },
    1634: {//Rock and Scotch
        captain: "Boosts HP of [INT] characters by 2x",
        special: "Reduces damage received by 50% for 1 turn",
        specialName: "COOL Ambush",
    },
    1635: {//Brownbeard
        captain: "Boosts OWN ATK by 1.5x and the ATK of Cerebral characters by 2x",
        special: "Cuts the HP of all enemies by 20% and binds himself for 5 turns",
        specialName: "Crocodile Thrust",
    },
    1636: {//Caesar Clown
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1637: {//Caesar Clown Evolved
        captain: "Boosts ATK of Cerebral characters by 2.25x and reduces damage received by 15%",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1638: {//STR Gas Mask Fodder
        special: "Boosts chances of getting [RCV] orbs for 2 turns",
        specialName: "Meat for Meat",
    },
    1639: {//QCK Gas Mask Fodder
        special: "Reduces Paralysis duration by 1 turn",
        specialName: "Shock Recovery: Light",
    },
    1640: {//DEX Gas Mask Fodder
        special: "For 1 turn, makes STR orb \"beneficial\" for Shooter characters",
        specialName: "Shooter Beneficial Slot: STR",
    },
    1641: {//INT Gas Mask Fodder
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.2x for 1 turn",
        specialName: "Rising Damage: Poison",
    },
    1642: {//PSY Gas Mask Fodder
        special: "Deals 3x character's ATK in typeless damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
    },
    1643: {//STR Centaur Fodder
        captain: "Reduces cooldown of Slasher specials by 2 turns at the start of the fight",
        special: "Boosts ATK of Slasher characters for 1 turn",
        specialName: "Attack Boost: Slasher",
    },
    1644: {//QCK Centaur Fodder
        captain: "Boosts ATK of [QCK] characters by 2x, reduces crew's current HP by ???% at the end of each turn",
        special: "Reduces Silence duration by 1 turn",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1645: {//DEX Centaur Fodder
        captain: "Boosts ATK of [DEX] characters by 1.5x and Slasher characters by 1.3x",
        captainNotes: "The bonus is cumulative. [DEX] Slasher characters get a 1.95x bonus.",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1646: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
        specialName: "Rock Domination Wall [Neo]",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"	
        },
    1647: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
        specialName: "Rock Domination Wall [Neo]",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1648: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 2.4x after scoring 4 Perfects in a row",
        special: "Reduces damage received by 90% for 1 turn and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1649: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 3x after scoring 4 Perfects in a row",
        special: "Reduces damage received by 90% for 1 turn and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1650: {//Brook x5
        captain: "Boosts RCV of [DEX] characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
        special: "Changes [BLOCK], [TND], [EMPTY], and [BOMB] orbs into [DEX] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Eyes Blinded by True Beauty",
    },
    1651: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 turn",
        specialName: "Daybreak Ruler's Spear",
    },
    1652: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 turn",
        specialName: "Daybreak Ruler's Spear",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 70" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [STR] characters by ?%",
                    "Level 2: Reduce damage taken from [STR] characters by ?%",
                    "Level 3: Reduce damage taken from [STR] characters by ?%",
                    "Level 4: Reduce damage taken from [STR] characters by ?%",
                    "Level 5: Reduce damage taken from [STR] characters by ?%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by ?%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by ? turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ]
    },
    1653: {//Pedro
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
        specialName: "Charge Drive",
    },
    1654: {//Pedro
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of [INT] characters by 2.5x",
        special: "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
        specialName: "Charge Drive",
    },
    1655: {//Carrot
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 turn",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1656: {//Carrot
        captain: "Boosts ATK of [QCK] characters by 2.25x and their RCV by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 turn",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1657: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x",
        special: "Reduces Bind and Despair duration by 5 turns. If your Captain is a Striker character, locks the chain multiplier at 2.75x for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for Striker characters if your Captain is a Striker character",
        specialName: "Summon Dragon",
    },
    1658: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2.5x",
        special: "Reduces Bind and Despair duration by 5 turns. If your Captain is a Striker character, locks the chain multiplier at 2.75x for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for Striker characters if your Captain is a Striker character",
        specialName: "Summon Dragon",
    },
    1659: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Reduces Paralysis and Silence duration by 3 turns, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1660: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2.5x and makes [TND] and [RCV] orbs \"beneficial\" to Shooter characters",
        special: "Reduces Paralysis and Silence duration by 3 turns, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1661: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2x and recovers 300 HP at end of each turn",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 turn and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1662: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2.5x and recovers 500 HP at end of each turn",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 turn and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1663: {//6+ Rob Lucci
        special: "Deals 75x character's ATK in typeless damage to one enemy, greatly boosts chances of getting matching orbs for 3 turns",
        specialName: "Six Powers Supreme: Six King Gun",
        captain: "Boosts ATK of Powerhouse characters by 3.5x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0",
        limit: "This character has a limit break path",
    },
    1664: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Locks all orbs for 1 turn. If during that turn, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 turn in the following turn.",
        specialName: "Ice Saber",
    },
    1665: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x and boosts ATK of Shooters by 3.25x after scoring 3 PERFECTS in a row",
        special: "Locks all orbs for 1 turn. If during that turn, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 turn in the following turn.",
        specialName: "Ice Saber",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of Shooter characters by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 6 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 6 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    1666: {//Kyros
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 turn",
        specialName: "Trueno Bastardo",
    },
    1667: {//Kyros
        captain: "Boosts HP of Striker characters by 1.2x and boosts ATK of Striker characters by 2.75x if HP is below 30% at the start of the turn, 2.25x otherwise",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 turn",
        specialName: "Trueno Bastardo",
    },
    1668: {//Reborn Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak [Neo]",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    1669: {//Reborn Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak [Neo]",
        captain: "Boosts ATK and HP of Striker characters by 2x"
    },
    1670: {//Shyarly
        captain: "Boosts ATK of [DEX] characters by 1.75x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots two times, and delays all enemies for 1 turn",
        specialName: "A Warning to the Fool",
    },
    1671: {//Camie
        captain: "Boosts RCV of Free Spirit characters by 1.5x",
        special: "Recovers 15% of crew's MAX HP and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Cheerfulness that Shines in the Deep Sea",
    },
    1672: {//Pappagu
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Binds himself for 2 turns and reduces Despair and Silence duration by 3 turns",
        specialName: "A Starfish Reaching for His Beliefs",
    },
    1673: {//Swinsuit Perona
        captain: "Boosts ATK of all characters by 1.75x and boosts EXP gained by 1.2x",
        special: "Reduces damage received by 70% for 1 turn, reduces the defense of all enemies by 90% for 1 turn and reduces Silence duration by 2 turns.",
        specialNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Romantic Princess",
    },
    1674: {//Swinsuit Perona
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP gained by 1.5x",
        special: "Reduces damage received by 70% for 1 turn, reduces the defense of all enemies by 90% for 1 turn and reduces Silence duration by 2 turns.",
        specialNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Romantic Princess",
    },
    1675: {//Kimono Zoro
        captain: "Boosts chain multiplier by 2x",
        special: "Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 turns",
        sailor: "Reduces Blindness duration by 1 turn",
        specialName: "Great Swordsman Under the Umbrella",
    },
    1676: {//Kimono Zoro
        captain: "Boosts chain multiplier by 3.25 and reduce damage received by 10%",
        special: "Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 turns",
        sailor: "Reduces Blindness duration by 1 turn",
        specialName: "Great Swordsman Under the Umbrella",
    },
    1677: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 turn, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
    },
    1678: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x at the start of the chain, by 3.25x after the 3rd Perfect in a row",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 turn, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Aquire Sailor Ability 1: Completely resists Silence on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 85" },
            { "description": "Aquire Sailor Ability 2: Reduces Paralysis duration by 1 turn" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    1679: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter [Neo]",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    1680: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter [Neo]",
        captain: "Boosts ATK of Slasher characters by 2.5x"
    },
    1681: {//20th Anni Luffy
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Tako Stamp",
        sailor: "Boosts base HP and ATK of all characters by 56",
    },
    1682: {//20th Anni Luffy
        captain: "Boosts HP of characters with cost 30 or less by 1.3x and boosts ATK of characters with cost 30 or less by 2.5x at the start of the chain, 3.5x after the 3rd Perfect in a row",
        special: "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Tako Stamp",
        sailor: "Boosts base HP and ATK of all characters by 56",
    },
    1683: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.3x",
        special: "Binds self for 1 turn, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 turns",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
    },
    1684: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.3x",
        special: "Binds self for 1 turn, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 turns",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
    },
    1685: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 2.75x following a chain of Good > Great > Perfect hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 turn",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 turns",
        sailorNotes: "#{silence}",
    },
    1686: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 turn",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 turns",
        sailorNotes: "#{silence}",
    },
    1687: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2x and reduce damage received by 10%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 turns",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1688: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 15%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 turns",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1689: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 1.5x at the start of the chain, by 2.25x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 turn",
        specialName: "Iron Giant Palm Slam",
    },
    1690: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 2x at the start of the chain, by 3x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 turn",
        specialName: "Iron Giant Palm Slam",
    },
    1691: {//Heat
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 1 turn, changes the captain's [STR], [DEX], [QCK], [INT], or [PSY] orbs into Matching orbs.",
        specialName: "Aim and Burn",
    },
    1692: {//Wire
        captain: "Boosts HP of Driven characters by 1.5x",
        special: "Adds .3x to Chain multiplier, and reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Three Wind Tunnels",
    },
    1693: {//Inuarashi
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 turn, amplifies the effect of own orb by 1.75x for 1 turn and changes own orb to [PSY].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "King's Lightning Burial",
    },
    1694: {//Inuarashi
        captain: "Boosts ATK of [PSY] characters by 2.75x",
        special: "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 turn, amplifies the effect of own orb by 1.75x for 1 turn and changes own orb to [PSY].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "King's Lightning Burial",
    },
    1695: {//Vergo
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 turn and reduces damage received by 50% for 1 turn",
        specialName: "The Darkest Demon",
    },
    1696: {//Vergo
        captain: "Boosts ATK of Striker characters by 2.5x and reduces damage received by 10%",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 turn and reduces damage received by 50% for 1 turn",
        specialName: "The Darkest Demon",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [QCK] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "[QCK] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
        ]
    },
    1697: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each turn",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every turn until 2,000,000 damage per turn.",
        specialName: "Venom Cloud",
    },
    1698: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each turn",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every turn until 2,000,000 damage per turn.",
        specialName: "Venom Cloud",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Cannot be blown away" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 3x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    1699: {//Jinbe
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.2x",
        special: "Adds .3x to Chain multiplier for 2 turns, reduces Chain Multiplier Limit and Chain Coeffiecient Reduction duration by 3 turns",
        specialName: "Gentle Ultrasound Wave",
        specialNotes: "This is most likely the effect that prevents your chain from exceeding a certain value.",
        sailor: "Boosts base ATK of Fighter characters by 75",
    },
    1700: {//Jinbe
        captain: "Boosts ATK of Fighter characters by 2.5x, and their HP by 1.3x",
        special: "Adds .3x to Chain multiplier for 2 turns, reduces Chain Multiplier Limit and Chain Coeffiecient Reduction duration by 3 turns",
        specialName: "Gentle Ultrasound Wave",
        specialNotes: "This is most likely the effect that prevents your chain from exceeding a certain value.",
        sailor: "Boosts base ATK of Fighter characters by 75",
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Sailor Ability 1: Boost HP of all characters by 40 if your Captain is a Fighter character" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1701: {//Ivankov
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: [
            {
                "description": "Randomizes all orbs",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "Changes [BLOCK] orbs into Matching orbs",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "Changes [BLOCK] and Badly Matching orbs into Matching orbs",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "Hair Removal Fist",
        specialNotes: "#{stages}",
        sailor: "Completely resists Paralysis on this character",
    },
    1702: {//Ivankov
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Randomizes all orbs",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "Changes [BLOCK] orbs into Matching orbs",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "Changes [BLOCK] and Badly Matching orbs into Matching orbs",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "Hair Removal Fist",
        specialNotes: "#{stages}",
        sailor: "Completely resists Paralysis on this character",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: When any other Free Spirit character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 30% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    1703: {//Hannyabal
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces damage received by 50% for 2 turns and boosts ATK against enemies inflicted with Toxic by 1.75x for 2 turns",
        specialName: "Inferno Hell Wheel",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Striker character",
    },
    1704: {//Hannyabal
        captain: "Boosts ATK of [INT] characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 50% for 2 turns and boosts ATK against enemies inflicted with Toxic by 1.75x for 2 turns",
        specialName: "Inferno Hell Wheel",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Striker character",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit if your Captain is a Driven character" },
            { "description": "Boosts base HP by 200" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1705: {//Bon Clay
        captain: "Boosts ATK of [STR] characters by 2x",
        special: "Removes all positive buffs on your team. If the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialName: "A Speech Left in Hell",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
    },
    1706: {//Bon Clay
        captain: "Boosts ATK of [STR] characters by 2.5x at the start of the chain, and boosts ATK of [STR] characters by 3.125x after scoring 3 Perfects in a row",
        special: "Removes all positive buffs on your team. If the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialName: "A Speech Left in Hell",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 130" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential #: Enrage" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1707: {//Shanks 6+
        captain: "Boosts ATK of [PSY] characters by 2.75x and their HP by 1.3x. Boosts chances of getting [PSY] orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of [PSY] orbs is ???% and at full HP, the rate of [PSY] orbs is ???%",
        special: "Reduces the defense of all enemies by 100% for 1 turn, deals 75x character's ATK in typeless damage to one enemy and changes all orbs to [PSY] orbs",
        specialName: "One-Armed Man that Splits the Heavens",
    },
    1708: {//Summer Nami
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Striker and Cerebral characters by 1 turn, reduces Paralysis duration by 2 turns, and randomizes all non-matching orbs",
        specialName: "Cat Burglar's Eye Contact",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
    },
    1709: {//Summer Nami
        captain: "Boosts ATK of all characters by 1.5x, recovers 4x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Striker and Cerebral characters by 1 turn, reduces Paralysis duration by 2 turns, and randomizes all non-matching orbs",
        specialName: "Cat Burglar's Eye Contact",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
    },
    1710: {//Summer Robin
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        special: "Amplifies the effect of orbs for Cerebral characters by 1.75x for 1 turn and reduces damage received by 30% for 2 turns",
        specialName: "Charmed by a Lovely Adult",
        sailor: "Reduces Blindness duration by 2 turns",
    },
    1711: {//Summer Robin
        captain: "Boosts RCV of Cerebral characters by 1.2x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
        special: "Amplifies the effect of orbs for Cerebral characters by 1.75x for 1 turn and reduces damage received by 30% for 2 turns",
        specialName: "Charmed by a Lovely Adult",
        sailor: "Reduces Blindness duration by 2 turns",
    },
    1712: {//Akainu
        captain: "Boosts ATK of Driven characters by 2.5x.",
        special: "Deals 50x character's ATK as typeless damage to all enemies. Amplifies the effect of orbs for Driven characters by 2x for 1 turn.",
        specialName: "Blazing Hound Crimson Lotus",
    },
    1713: {//Akainu
        captain: "Boosts ATK of Driven characters by 2.5x. If you defeat an enemy last turn, increases ATK boost slighty. Stacks up to 3 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 50x character's ATK as typeless damage to all enemies. Amplifies the effect of orbs for Driven characters by 2x for 1 turn.",
        specialName: "Blazing Hound Crimson Lotus",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Sailor Ability 1: Makes [STR] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for Driven characters" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1714: {//Monet
        captain: "Boosts ATK of INT characters by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Deals 10x character's ATK in [INT] damage to all enemies. Randomly changes all orbs into either [TND], [BOMB] or [RCV] orbs.",
        specialName: "Devouring Blizzard",
    },
    1715: {//Vergo
        captain: "Boosts ATK of Striker characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Changes own orb into [QCK], locks all orbs for 1 turn",
        specialName: "Sealed Mouth Exterminator",
    },
    1716: {//Caesar
        captain: "Reduces HP of all characters by 50%, boosts ATK of Driven characters by 1.2x, increases his own ATK multiplier by 0.1x at the end of each turn until it reaches 3x",
        special: "Delays all enemies for 1 turn. For Driven characters, Changes [EMPTY] orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x if HP is below 30% when the special is activated.",
        specialName: "Massacre GAS",
    },
    1717: {//Vegapunk Dragon
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight",
        special: "Deals 3x character's ATK in [QCK] damage to all enemies",
        specialName: "High Maneuverable Fireball Blast",
    },
    1718: {//Buffalo
        captain: "Boosts ATK of Driven characters by 2.5x until the first hit other than Perfect",
        special: "Boosts ATK of Driven characters by 1.25x for 5 turns",
        specialName: "Rolling Rotation",
    },
    1719: {//Baby 5
        captain: "Boosts ATK of [PSY] characters by 2x if they have matching orbs, makes INT orbs \"beneficial\" to PSY characters",
        captainNotes: "#{beneficial}",
        special: "Changes adjacent orbs into [G] orbs",
        specialName: "Phantasmagoric \"Weapon-Morphosis\"",
    },
    1720: {//Secret Jinbe
        captain: "Boosts ATK of Fighter characters by 2.5x",
        special: "If your Captain is a Fighter character, changes adjacent orbs into matching orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Passive Agressive Boss"
    },
    1721: {//Secret Jinbe
        captain: "Boosts HP of Fighter characters by 1.4x and boosts ATK by 2.75x if they have a matching orb, by 2.5x otherwise.",
        special: "If your Captain is a Fighter character, changes adjacent orbs into matching orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Passive Agressive Boss",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [STR] and [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]

    },
    1722: {//Neptune
        captain: "Boosts ATK of Striker characters by 2x.",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and Changes own orb into [PSY] if HP is below 30% when the special is activated and deals 20,000 Fixed damage to one enemy.",
        specialName: "Sea God's Strike"
    },
    1723: {//Neptune
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.2x.",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and Changes own orb into [PSY] if HP is below 30% when the special is activated and deals 20,000 Fixed damage to one enemy.",
        specialName: "Sea God's Strike"
    },
    1724: {//Fukaboshi
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces crew's current HP by 50%, adds 25x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 25x}",
        specialName: "Sun's Hope"
    },
    1725: {//Fukaboshi
        captain: "Slightly boosts chances Powerhouse characters of getting Matching orbs, boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces crew's current HP by 50%, adds 25x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 25x}",
        specialName: "Sun's Hope"
    },
    1726: {//Sabo
        captain: "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath [Neo]",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1727: {//Sabo
        captain: "Boosts ATK of Free Spirit characters by 3.5x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath [Neo]",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1728: {//Tashigi
        captain: "Boosts ATK of [STR], [DEX], and [QCK] characters by 2x",
        special: "Randomly changes all orbs, includiong [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs, removes enemies' ATK Up Buffs, and recovers 2,000 HP",
        sailor: "Boosts base ATK, HP and RCV of [STR], [DEX], and [QCK] characters by 30",
        specialName: "Destructive Water Splash",
    },
    1729: {//Tashigi
        captain: "Boosts ATK of [STR], [DEX], and [QCK] characters by 2.25x and their HP by 1.25x. Recovers 3x character's RCV in HP at the end of each turn",
        special: "Randomly changes all orbs, includiong [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs, removes enemies' ATK Up Buffs, and recovers 2,000 HP",
        sailor: "Boosts base ATK, HP and RCV of [STR], [DEX], and [QCK] characters by 30",
        specialName: "Destructive Water Splash",
    },
    1730: {//Vivi
        captain: "Boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 2 turns, reduces Paralysis duration by 3 turns, reduces damage received by 60% for 2 turns",
        sailor: "Restores her own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
        specialName: "Shining Brightly Upon the Oasis",
    },
    1731: {//Vivi
        captain: "Boosts amount of Beli received by 2.5x and boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 2 turns, reduces Paralysis duration by 3 turns, reduces damage received by 60% for 2 turns",
        sailor: "Restores her own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
        specialName: "Shining Brightly Upon the Oasis",
    },
    1732: {//Nekomamushi
        captain: "Boosts ATK of [STR] characters by 2x, boosts HP of Striker and Powerhouse characters by 1.1x",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn and changes all orbs, including [BLOCK] orbs, into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Battle Guardian",
    },
    1733: {//Nekomamushi
        captain: "Boosts ATK of [STR] characters by 2.5x, boosts HP of Striker and Powerhouse characters by 1.25x",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn and changes all orbs, including [BLOCK] orbs, into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Battle Guardian",
    },
    1734: {//Sugar
        captain: "Boosts ATK of Cerebral and Fighter characters by 1.5x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes bottom right orb to [STR] and bottom left orb to [INT]. Switches orbs between slots twice.",
        specialName: "Toy's Close Combat",
    },
    1735: {//Sugar
        captain: "Boosts ATK of Cerebral and Fighter characters by 1.75x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes bottom right orb to [STR] and bottom left orb to [INT]. Switches orbs between slots twice.",
        specialName: "Toy's Close Combat",
    },
    1736: {//Trebol
        captain: "Boosts ATK of [INT] characters by 2.25x. Reduces damage received by 10%",
        special: "Delays all enemies for 1 turn and deals 20x character's ATK as [INT] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Sticky Sticky Burning Explosion",
    },
    1737: {//Trebol
        captain: "Boosts ATK of [INT] characters by 2.25x and their HP by 1.2x. Reduces damage received by 10%",
        special: "Delays all enemies for 1 turn and deals 20x character's ATK as [INT] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Sticky Sticky Burning Explosion",
    },
    1738: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Spring Hopper - Bullet [Neo]",
    },
    1739: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Spring Hopper - Bullet [Neo]",
    },
    1740: {//Sandersonia
        captain: "Boosts ATK of Striker and Powerhouse characters by 2x and boosts HP of [DEX] characters by 1.1x",
        special: "Changes all orbs to [DEX] orbs, reduces the defense of all enemies by 80% for 2 turns, and boosts ATK of Striker and Powerhouse characters by 1.75x for 2 turns",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Snake Hair Possession: Eight-Headed Serpent",
    },
    1741: {//Sandersonia
        captain: "Boosts ATK of Striker and Powerhouse characters by 2.5x and boosts HP of [DEX] characters by 1.3x",
        special: "Changes all orbs to [DEX] orbs, reduces the defense of all enemies by 80% for 2 turns, and boosts ATK of Striker and Powerhouse characters by 1.75x for 2 turns",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Snake Hair Possession: Eight-Headed Serpent",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts this character's attack against [STR] characters by 2x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1742: {//Marigold
        captain: "Boosts ATK of Striker and Powerhouse characters by 2x and boosts HP of [STR] characters by 1.1x",
        special: "Changes [QCK] and [DEX] orbs into Matching orbs, boosts ATK against enemies with reduced defense by 1.75x for 2 turns and reduces damage received by 60% for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        specialName: "Snake Hair Possession: Salamander",
    },
    1743: {//Marigold
        captain: "Boosts ATK of Striker and Powerhouse characters by 2.5x and boosts HP of [STR] characters by 1.3x",
        special: "Changes [QCK] and [DEX] orbs into Matching orbs, boosts ATK against enemies with reduced defense by 1.75x for 2 turns and reduces damage received by 60% for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        specialName: "Snake Hair Possession: Salamander",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts this character's attack against [QCK] characters by 2x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    1744: {//Marguerite
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Cuts the current HP of one enemy by 7% and amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Shooter characters by 30",
        specialName: "Defender's Spade-Shaped Arrow",
    },
    1745: {//Marguerite
        captain: "Boosts ATK of Shooter characters by 2x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Cuts the current HP of one enemy by 7% and amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Shooter characters by 30",
        specialName: "Defender's Spade-Shaped Arrow",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 5 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 4 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 4 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 4 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    1746: {//Boa Hancock
        captain: "Boosts ATK of Shooter characters by a variable factor between 2.5x and 3.25x based on the timing of the attack of the previous unit in the chain and recovers 1,000 HP at end of each turn. Greatly reduces chances of getting [TND] / [RCV] orbs",
        special: "Deals 6 hits of 20,000 fixed damage to random enemies, delays all enemies for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Shooter characters for 2 turns",
        specialName: "Pistol Kisses",
    },
    1747: {//Boa Hancock
        captain: "Boosts ATK of Shooter characters by a variable factor between 2.5x and 3.25x based on the timing of the attack of the previous unit in the chain and recovers 1,000 HP at end of each turn. Greatly reduces chances of getting [TND] / [RCV] orbs",
        special: "Deals 6 hits of 20,000 fixed damage to random enemies, delays all enemies for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Shooter characters for 2 turns",
        specialName: "Pistol Kisses",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Sailor Ability 1: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Free Spirit character" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    1748: {//Bepo
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy's Threshold Damage Reduction duration by 5 turns",
        sailor: "If Bepo has a [QCK] orb and you hit a Perfect with him, keep his [QCK] orb for the next turn",
        specialName: "Bear Rush Out",
    },
    1749: {//Bepo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK and HP of QCK characters by 2x",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy's Threshold Damage Reduction duration by 5 turns",
        sailor: "If Bepo has a [QCK] orb and you hit a Perfect with him, keep his [QCK] orb for the next turn",
        specialName: "Bear Rush Out",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability #: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1750: {//Korea Law
        captain: "Boosts ATK of Striker characters by 3x and heals for .5x his RCV at the end of the turn each time you hit a Perfect",
        special: [
            {
                "description": "Deals 50,000 fixed damage to one enemy, and for Striker characters, amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy, and for Striker characters, amplifies the effect of orbs by 2.25x for 1 turn",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "Injection Shot",
    },
    1751: {//Korea Law
        captain: "Boosts ATK of Striker characters by 3x and heals for .5x his RCV at the end of the turn each time you hit a Perfect",
        special: [
            {
                "description": "Deals 50,000 fixed damage to one enemy, and for Striker characters, amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy, and for Striker characters, amplifies the effect of orbs by 2.25x for 1 turn",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "Injection Shot",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: Reduce No Healing Duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 80%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    1752: {//20th Anni Zoro
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals 60x character's ATK in [INT] damage to one enemy. Boosts ATK of characters with 30 cost or less by 1.75x for 1 turn. If Zoro is a Capain or Friend/Guest Captain, then if during that turn you score 4 Perfect hits, boosts ATK of characters with 30 cost or less by 2x in the following turn.",
        sailor: "Boosts base ATK of Slasher characters by 50",
        specialName: "Three Sword Style: Ultra Tiger Hunting",
    },
    1753: {//20th Anni Zoro
        captain: "Boosts HP of characters with cost 30 or less by 1.3x and boosts ATK of characters with cost 30 or less by 2.5x at the start of the chain, 3.5x after the 3rd Perfect in a row",
        special: "Deals 60x character's ATK in [INT] damage to one enemy. Boosts ATK of characters with 30 cost or less by 1.75x for 1 turn. If Zoro is a Capain or Friend/Guest Captain, then if during that turn you score 4 Perfect hits, boosts ATK of characters with 30 cost or less by 2x in the following turn.",
        sailor: "Boosts base ATK of Slasher characters by 50",
        specialName: "Three Sword Style: Ultra Tiger Hunting",
    },
    1754: {//20th Anni Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Cuts the current HP of one enemy by 15%, removes Poison and amplifies the effects of orbs by 1.75x for 1 turn",
        sailor: "Boosts base ATK, HP and RCV of all characters by 40",
        specialName: "Diable Jambe: Collier Strike",
    },
    1755: {//20th Anni Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.5x and their HP by 1.2x",
        special: "Cuts the current HP of one enemy by 15%, removes Poison and amplifies the effects of orbs by 1.75x for 1 turn",
        sailor: "Boosts base ATK, HP and RCV of all characters by 40",
        specialName: "Diable Jambe: Collier Strike",
    },
    1756: {//20th Anni Nami
        captain: "Recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and ATK UP duration by 3 turns",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        specialName: "Gust Sword",
    },
    1757: {//20th Anni Nami
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and ATK UP duration by 3 turns",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        specialName: "Gust Sword",
    },
    1758: {//20th Anni Brook
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.1x",
        special: "Delays all enemies for 1 turn, reduces Paralysis, Bind and Despair duration by 1 turn.",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        specialName: "Party Music: Quinte Tierce Fantasia",
    },
    1759: {//20th Anni Brook
        captain: "Boosts ATK of Free Spirit characters by 2.5x and their HP by 1.2x",
        special: "Delays all enemies for 1 turn, reduces Paralysis, Bind and Despair duration by 1 turn.",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        specialName: "Party Music: Quinte Tierce Fantasia",
    },
    1760: {//20th Anni Chopper
        captain: "Boosts ATK of [DEX] and [INT] characters by 2x",
        special: "Changes the orbs in the left column into [INT], [RCV] and [DEX], the orbs in the right column into [INT], [PSY] and [DEX]",
        sailor: "Restores his own special by 2 turns when it is rewinded and reduces Silence duration on this character by 2 turns",
        sailorNotes: "#{silence}<br>#{rewind : 2}",
        specialName: "Intelligent Monster",
    },
    1761: {//20th Anni Chopper
        captain: "Boosts ATK of [DEX] and [INT] characters by 2.5x",
        special: "Changes the orbs in the left column into [INT], [RCV] and [DEX], the orbs in the right column into [INT], [PSY] and [DEX]",
        sailor: "Restores his own special by 2 turns when it is rewinded and reduces Silence duration on this character by 2 turns",
        sailorNotes: "#{silence}<br>#{rewind : 2}",
        specialName: "Intelligent Monster",
    },
    1762: {//Rob Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x at the start of the chain. Reduces RCV of all characters by 50%.<br>Boosts ATK of Powerhouse characters by 2.75x after the 1st Perfect in a row, by 3.025x after the 2nd Perfect in a row, by 3.3275x after the 3rd Perfect in a row, by 3.66025x after the 4th Perfect in a row, and by 4.026275x after the 5th Perfect in a row.",
        special: "Reduces the defense of all enemies by 80% for 2 turns, deals 50x character's ATK in typeless damage to all enemies and changes all orbs on Powerhouse characters into Matching orbs, recover 20% of crew's MAX HP.",
        specialName: "Flying Finger Gun: Fire Sting",
    },
    1763: {//Rob Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x at the start of the chain. Reduces RCV of all characters by 50%.<br>Boosts ATK of Powerhouse characters by 2.75x after the 1st Perfect in a row, by 3.025x after the 2nd Perfect in a row, by 3.3275x after the 3rd Perfect in a row, by 3.66025x after the 4th Perfect in a row, and by 4.026275x after the 5th Perfect in a row.",
        special: "Reduces the defense of all enemies by 80% for 2 turns, deals 50x character's ATK in typeless damage to all enemies and changes all orbs on Powerhouse characters into Matching orbs, recover 20% of crew's MAX HP.",
        specialName: "Flying Finger Gun: Fire Sting",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1764: {//6+ Aokiji
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.25x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 5 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn, locks the chain multiplier at 2.5x for 1 turn and deals 100000 fixed damage to all enemies that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Determined Man's Ice Attack",
    },
    1765: {//Blue Gilly
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Deals 10 hits of 5x character's ATK in typeless damage to random enemies, reduces the defense of all enemies by 50% for 1 turn, randomizes non-matching orbs, including [BLOCK] orbs",
        specialName: "Jao Kun Do Consecutive Thrusting Kick",
    },
    1766: {//Blue Gilly
        captain: "Boosts chain multiplier by 1.5x and boosts ATK of Fighter characters by 1.5x",
        special: "Deals 10 hits of 5x character's ATK in typeless damage to random enemies, reduces the defense of all enemies by 50% for 1 turn, randomizes non-matching orbs, including [BLOCK] orbs",
        specialName: "Jao Kun Do Consecutive Thrusting Kick",
    },
    1767: {//Funk Bros
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Delays all enemies for 1 turn, following the activation of the special, if every unit scores a Great hit, boosts ATK of Fighter characters by 1.5x in the following turn",
        specialName: "Prideless Surprise Attack",
    },
    1768: {//Abdullah and Jeet
        captain: "Boosts ATK of Striker and Slasher characters by 1.5x",
        special: "At the end of the turn, cuts the current HP of each enemy by 10% for 2 turns",
        specialName: "Nasty Final Blow",
    },
    1769: {//Ben Beckman
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Delays all enemies for 1 turn. If your captain is a Cerebral Character, boosts ATK against delayed enemies by 1.5x for 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Restraining Gunpoint",
    },
    1770: {//Ben Beckman
        captain: "Boosts ATK of Cerebral characters by 2.5x and their HP by 1.2x at the start of the chain, and boosts ATK of Cerebral characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Delays all enemies for 1 turn. If your captain is a Cerebral Character, boosts ATK against delayed enemies by 1.5x for 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Restraining Gunpoint",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Adds 2x character's ATK as Additional Typeless Damage" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 50",
                    "Level 3: Boosts base ATK by 80",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1771: {//Kuma
        captain: "Boosts ATK and HP of Cerebral characters by 2x",
        specialName: "Thrust Pad Cannon [Neo]",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    1772: {//Kuma
        captain: "Boosts ATK and HP of Cerebral characters by 2x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        specialName: "Thrust Pad Cannon [Neo]",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    1773: {//Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x and reduces damage received by 10%",
        special: "Deals 20x character's ATK in [INT] damage to one enemy, amplifies the effect of orbs for Free Spirit characters by 1.5x for 1 turn",
        sailor: "Boosts base ATK of Free Spirit characters by 25"
    },
    1774: {//Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.25x and their HP by 1.25x and reduces damage received by 15%",
        special: "Deals 20x character's ATK in [INT] damage to one enemy, amplifies the effect of orbs for Free Spirit characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of Free Spirit characters by 25"
    },
    1775: {//Momonosuke
        captain: "Boosts ATK and RCV of QCK characters by 1.5x, and slightly boosts chances of getting [QCK] orbs",
        special: "Reduces damage received by 50% for 1 turn and switches orbs between slots twice",
    },
    1776: {//Momonosuke
        captain: "Boosts ATK and RCV of QCK characters by 1.75x, boosts chances of getting [QCK] orbs",
        special: "Reduces damage received by 50% for 1 turn and switches orbs between slots twice",
    },
    1777:{//Kizaru
        captain: "Not Translated",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers, changes [BLOCK], [STR], and [INT] orbs into Matching orbs for Free Spirit characters and adds .2x to Chain multiplier for 3 turns",
        specialName: "Devil Destroyer's Light Arrow",
        specialNotes: "#{ignoreBarrier}"
    },
    1778:{//Kizaru
        captain: "Boosts ATK of Free Spirit characters by 2.5x, and their HP by 1.2x. Recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers, changes [BLOCK], [STR], and [INT] orbs into Matching orbs for Free Spirit characters and adds .2x to Chain multiplier for 3 turns",
        specialName: "Devil Destroyer's Light Arrow",
        specialNotes: "#{ignoreBarrier}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of Shooter and Free Spirit characters by 50" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    1779:{//Kizaru
        captain: "Boosts ATK of Shooter characters by 2x",
        specialName: "Yata no Kagami (Sacred Mirror) Neo",
        special: [
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 14, 5 ]
            },
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 20, 11 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1780:{//Kizaru
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.25x and boosts HP of Shooter characters by 1.5x",
        specialName: "Yata no Kagami (Sacred Mirror) Neo",
        special: [
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 14, 5 ]
            },
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 20, 11 ]
            }
        ],
        specialNotes: "#{stages}",
    },
    1781: {//Fighting Fish
        captain: "Boosts ATK of Powerhouse characters by 1.75x. Makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
        special: "Boosts ATK of ??? characters by 1.3x for 1 turn, changes own orb into STR and deals 5x character's ATK in [STR] damage to all enemies",
        specialName: "Fish Special",
    },
    1782: {//Chinjao
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts damage of QCK specials by 1.75x",
        captainNotes: "#{noFixedPerc}",
        special: "Delays all enemies for 2 turns, deals 25x character's ATK in [QCK] damage to all enemies",
        specialName: "Chinjao Special",
    },
    1783: {//Hajrudin
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Locks all orbs for 1 turn. If during that turn you score 4 Perfect hits, amplifies the effect of orbs by 1.5x for 1 turn.",
        specialName: "Hajrudin Special",
    },
    1784: {//Fujitora
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with fewer than 4 stars by 2.5x",
        special: "Deals random [INT] damage to all enemies, reduces Special Cooldown of all characters by 1 turn and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Fujitora Special",
    },
    1785: {//Spartan
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Recovers 3000 HP and amplifies the effect of orbs by 1.25x for 1 turn",
        specialName: "Spartan Special",
    },
    1786: {//Dressrosa Fodder
        special: "Makes [QCK] orbs \"beneficial\" to Shooter characters for 1 turn",
        specialName: "Shooter Beneficial Slot: [QCK]"
    },
    1787: {//Dressrosa Fodder
        special: "Reduces crew's current HP by 50%, deals 5x the amount of HP subtracted in typeless damage to one enemy",
        specialName: "Risky Attack"
    },
    1788: {//Dressrosa Fodder
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        specialName: "Attack Boost: Shooter"
    },
    1789: {//Dressrosa Fodder
        special: "Boosts chances of getting [RCV] orbs for 2 turns",
        specialName: "Meat for Meat",
    },
    1790: {//Dressrosa Fodder
        special: "Recovers 3x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Auto Light Recovery"
    },
    1791:{//Lucy Luffy
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x after scoring 3 Perfects in a row",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [QCK] orbs, changes the orbs in the bottom row into [DEX] orbs and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        sailor: "If you captain is a [STR] character, boosts this character's attack against [STR] characters by 1.5x",
        specialName: "Gomu Gomu no Hawk Rifle",
    },
    1792:{//Lucy Luffy
        captain: "Boosts RCV of [STR], [DEX] and [QCK] characters by 1.2x and boosts ATK of [STR], [DEX] and [QCK] characters by 3.25x after scoring 3 Perfects in a row",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [QCK] orbs, changes the orbs in the bottom row into [DEX] orbs and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        sailor: "If you captain is a [STR] character, boosts this character's attack against [STR] characters by 1.5x",
        specialName: "Gomu Gomu no Hawk Rifle",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of STR, DEX, and QCK characters by 75 if your Captain is a [STR] character" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1793:{//Lucy Sabo
        captain: "If there is a [STR], [DEX] and [QCK] character in your crew, boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.3x, lowers chances of getting [STR] orbs and makes [DEX] and [QCK] orbs \"beneficial\" to [STR], [DEX] and [QCK] characters. If there are not [PSY] or [INT] characters on your crew, boosts ATK by 3.7125x instead.",
        captainNotes: "Sabo boosts ATK by 3.7125x if you have [STR], [DEX] and [QCK] type characters, and no [PSY] or [INT] characters at all.<br>#{beneficial}",
        special: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of [STR], [DEX] and [QCK] characters by 2x in the following turn.",
        specialName: "Dragon's Claw: Reverse Wave Motion",
    },
    1794:{//Lucy Sabo
        captain: "If there is a [STR], [DEX] and [QCK] character in your crew, boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.3x, lowers chances of getting [STR] orbs and makes [DEX] and [QCK] orbs \"beneficial\" to [STR], [DEX] and [QCK] characters. If there are not [PSY] or [INT] characters on your crew, boosts ATK by 3.7125x instead.",
        captainNotes: "Sabo boosts ATK by 3.7125x if you have [STR], [DEX] and [QCK] type characters, and no [PSY] or [INT] characters at all.<br>#{beneficial}",
        special: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of [STR], [DEX] and [QCK] characters by 2x in the following turn.",
        specialName: "Dragon's Claw: Reverse Wave Motion",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of [STR], [DEX], and [QCK] characters by 50" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 60",
                    "Level 2: Boosts base ATK by 90",
                    "Level 3: Boosts base ATK by 120",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1795:{//Diamante
        captain: "Boosts ATK of Slasher and Driven characters by 2x",
        special: "Delays all enemies for 2 turns, reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and changes right column [STR], [DEX], [QCK], [PSY] and [INT] orbs into Matching orbs",
        sailor: "Boosts this character's attack against [STR] characters by 1.1x",
        specialName: "Snake Sword",
    },
    1796:{//Diamante
        captain: "Boosts ATK of Slasher and Driven characters by 2.5x",
        special: "Delays all enemies for 2 turns, reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and changes right column [STR], [DEX], [QCK], [PSY] and [INT] orbs into Matching orbs",
        sailor: "Boosts this character's attack against [STR] characters by 1.1x",
        specialName: "Snake Sword",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1797:{//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 15, 9 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20% and boosts ATK against delayed enemies by 1.5x for 2 turns.",
                "cooldown": [ 21, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        sailor: "Boosts base ATK and HP of [STR], [DEX], and [QCK] characters by 75",
        specialName: "Shockwave Elbow",
    },
    1798:{//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.5x, boosts HP of Powerhouse and Driven characters by 1.25x",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 15, 9 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20% and boosts ATK against delayed enemies by 1.5x for 2 turns.",
                "cooldown": [ 21, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        sailor: "Boosts base ATK and HP of [STR], [DEX], and [QCK] characters by 75",
        specialName: "Shockwave Elbow",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 50",
                    "Level 3: Boosts base ATK by 70",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1799:{//Cavendish
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.25x",
        special: "Changes [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn, boosts ATK against enemies with reduced defense by 1.75x for 2 turns",
        sailor: "Makes [INT] and [PSY] orbs \"beneficial\" for this unit",
        specialName: "Beautiful Sword: Round Table",
    },
    1800:{//Cavendish
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x and their RCV by 1.2x",
        special: "Changes [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn, boosts ATK against enemies with reduced defense by 1.75x for 2 turns",
        sailor: "Makes [INT] and [PSY] orbs \"beneficial\" for this unit",
        specialName: "Beautiful Sword: Round Table",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [STR], [DEX], and [QCK] characters by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1801:{//Bartolomeo
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2x and if you don't attack with Bartolomeo, reduces damage received by 10% for that turn.",
        special: "Deal 30x character's ATK in [QCK] damage to all enemies, reduces damage received by 90% for 1 turn and reduces the defense of all enemies by 80% for 2 turns",
        sailor: "Reduces Paralysis for 3 turns for himself",
        specialName: "Barrier Bulls",
    },
    1802:{//Bartolomeo
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x and if you don't attack with Bartolomeo, reduces damage received by 15% for that turn.",
        special: "Deal 30x character's ATK in [QCK] damage to all enemies, reduces damage received by 90% for 1 turn and reduces the defense of all enemies by 80% for 2 turns",
        sailor: "Reduces Paralysis for 3 turns for himself",
        specialName: "Barrier Bulls",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [STR], [DEX], and [QCK] characters by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1803: {//Zoro
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Deals 13x character's ATK in [DEX] to one enemy, removes enemies' End of Turn Damage/Percent Cut, and randomizes all orbs, including [BLOCK] orbs",
        specialName: "To Become Stronger. Santoryu Ogi: Sanzen Sekai",
    },
    1804: {//Zoro
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.3x",
        special: "Deals 13x character's ATK in [DEX] to one enemy, removes enemies' End of Turn Damage/Percent Cut, and randomizes all orbs, including [BLOCK] orbs",
        specialName: "To Become Stronger. Santoryu Ogi: Sanzen Sekai",
    },
    1805: {//Buggy
        captain: "Boosts ATK of characters with cost 30 or less by 1.5x and their HP by 1.2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn, reduces damage received from STR enemies by 80% for 1 turn, Amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Deceiving the World with the Most Evil Show",
    },
    1806: {//Buggy
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn, reduces damage received from STR enemies by 80% for 1 turn, Amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Deceiving the World with the Most Evil Show",
    },
    1807: {//Mihawk
        captain: "Not Translated",
        special: "Deals 100x character's ATK in typeless damage to all enemies, if your Captain is a Slasher character, locks the chain multiplier at 2.75x for 1 turn and  amplifies the effects of orbs for Slasher characters by 2x for 1 turn",
        specialName: "Black Blade • The Ultimate Sword",
    },
    1808: {//Mihawk
        captain: {
            "base": "Boosts ATK of Slasher characters by 1.2x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.62x instead for 1 turn.",
            "level1": "Boosts ATK of Slasher characters by 1.35x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.8225x instead for 1 turn.",
            "level2": "Boosts ATK of Slasher characters by 1.6x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.16x instead for 1 turn.",
            "level3": "Boosts ATK of Slasher characters by 1.8x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.43x instead for 1 turn.",
            "level4": "Boosts ATK of Slasher characters by 2x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn.",
            "level5": "Boosts ATK of Slasher characters by 2x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn.",
            "level6": "Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 3.5x instead for 1 turn.",
        },
        special: "Deals 100x character's ATK in typeless damage to all enemies, if your Captain is a Slasher character, locks the chain multiplier at 2.75x for 1 turn and  amplifies the effects of orbs for Slasher characters by 2x for 1 turn",
        specialName: "Black Blade • The Ultimate Sword",
        limit: [
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 1.35x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.8225x instead for 1 turn." },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 1.6x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.16x instead for 1 turn." },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 1.8x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.43x instead for 1 turn." },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 2x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn." },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 2x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn." },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 3.5x instead for 1 turn." },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ],
    },
    1809: {//Wanda
        captain: "Boosts ATK by 2.25x after scoring 2 Perfects in a row",
        special: "Reduces Bind and Paralysis duration by 2 turns. If your Captain is a Slasher character, makes Perfects easier to hit for 1 turn",
        sailor: "Reduces Paralysis for 1 turn for herself",
        specialName: "Super Express Beast Path",
    },
    1810: {//Wanda
        captain: "Boosts chances of getting Matching orbs, boosts ATK by 2.25x after scoring 2 Perfects in a row",
        special: "Reduces Bind and Paralysis duration by 2 turns. If your Captain is a Slasher character, makes Perfects easier to hit for 1 turn",
        sailor: "Reduces Paralysis for 1 turn for herself",
        specialName: "Super Express Beast Path",
    },
    1811: {//Carrot
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2x",
        special: "Reduces Special Cooldown of your top row by 2 turns, boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Rabbit Mink's Air Step",
    },
    1812: {//Carrot
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2.25x",
        special: "Reduces Special Cooldown of your top row by 2 turns, boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Rabbit Mink's Air Step",
    },
    1813: {//Koala
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli recieved by 1.2x",
        special: "Changes Captain's orb into Matching and boosts ATK of your Captain by 1.5x for 1 turn",
        specialName: "Revolutionary Soldier's Anger",
    },
    1814: {//Raid Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.5x until the first hit other than Perfect and recovers 100 HP at end of each turn",
        specialName: "Joue Shoot",
        special: "Deal 150x character's ATK in typeless damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
    },
    1815: {//Raid Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than Perfect and recovers 300 HP at end of each turn",
        specialName: "Joue Shoot",
        special: "Deal 150x character's ATK in typeless damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for all characters" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    1816: {// Ace 6+
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, boosts ATK of Shooter characters by 2x for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor • Flame Wheel",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3.25x if they have a matching orb, by 2.25x otherwise"
    },
    1817: {// Riku
        captain: "Boosts ATK by 2x after scoring 3 Greats in a row",
        special: "Cuts the current HP of one enemy by 7%, boosts ATK of the characters in the bottom and middle row by 1.2x for 1 turn and reduces special cooldown of all non-Captain specials by 1 turn",
        specialName: "Divine Sword",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1818: {// Riku
        captain: "Boosts ATK of all characters by 1.5x and their HP by 1.2x, boosts ATK by 2.5x after scoring 3 Greats in a row",
        special: "Cuts the current HP of one enemy by 7%, boosts ATK of the characters in the bottom and middle row by 1.2x for 1 turn and reduces special cooldown of all non-Captain specials by 1 turn",
        specialName: "Divine Sword",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1819: {//Tank
        captain: "Boosts ATK of Powerhouse and Stiker characters by 1.75x",
        special: "Boosts own ATK by 1.75x for 1 turn",
        specialName: "Shameful Hidden Activity",
    },
    1820: {//Scarlet
        captain: "Boosts HP and RCV of [PSY] characters by 1.5x",
        special: "Locks all orbs for 1 turn and recovers 5x character's RCV in HP.",
        specialName: "Frontier Love",
    },
    1821: {//Sanji
        captain: "Boosts ATK of all characters by 1.5x. Recovers 1x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 4x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "Recovers 10x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "Sanji Special",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1822: {//Sanji
        captain: "Boosts ATK of all characters by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 4x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "Recovers 10x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "Sanji Special",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1823: {//World
        captain: "Not Translated",
        special: [
            {
                "description": "Deals 100,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "Deals 500,000 fixed damage to one enemy, removes ATK down debuff from your team and reduces enemy Barrier duration by 1 turn",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "More More: Hundredfold Artillery Cannon",
    },
    1824: {//World
        captain: "Boosts ATK of Shooter characters by 2.2x at the start of the chain.<br>Boosts ATK of Shooter characters by 2.42x after the 1st Perfect in a row, by 2.662x after the 2nd Perfect in a row, by 2.9282x after the 3rd Perfect in a row, by 3.22102x after the 4th Perfect in a row, and by 3.543122x after the 5th Perfect in a row.",
        special: [
            {
                "description": "Deals 100,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "Deals 500,000 fixed damage to one enemy, removes ATK down debuff from your team and reduces enemy Barrier duration by 1 turn",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "More More: Hundredfold Artillery Cannon",
        limit: "This character has a limit break path",
    },
    1825: {//Akainu
        captain: "Boosts ATK by 2.5x following a chain of [INT] > [INT] > [INT] attacks no lower than Good",
        special: "Deals 50x character's ATK in [INT] damage to all enemies. Changes orbs for [INT] characters into [INT] orbs. Boosts the Color Affinity of [INT] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption [Neo]",
    },
    1826: {//Akainu
        captain: "Boosts ATK by 3x following a chain of [INT] > [INT] > [INT] attacks no lower than Good",
        special: "Deals 50x character's ATK in [INT] damage to all enemies. Changes orbs for [INT] characters into [INT] orbs. Boosts the Color Affinity of [INT] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption [Neo]",
    },
    1827: {//Sicilian Colo
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduce crew's current HP by 50%, Boosts ATK of [INT] characters by 2x for 1 turn and randomize non-matching orbs, including [BLOCK] orbs",
        specialName: "Explosive Spirit",
    },
    1828: {//Sicilian Colo
        captain: "Boosts ATK of [INT] characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: "Reduce crew's current HP by 50%, Boosts ATK of [INT] characters by 2x for 1 turn and randomize non-matching orbs, including [BLOCK] orbs",
        specialName: "Explosive Spirit",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduces Damage recieved from [PSY] enemies by 1%",
                    "Level 2: Reduces Damage recieved from [PSY] enemies by 2%",
                    "Level 3: Reduces Damage recieved from [PSY] enemies by 3%",
                    "Level 4: Reduces Damage recieved from [PSY] enemies by 4%",
                    "Level 5: Reduces Damage recieved from [PSY] enemies by 5%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1829: {//Raid Caesar
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        special: "Deals 45x character's ATK in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for Cerebral and Driven characters for 2 turns, and poisons all enemies",
        spcialName: "Flammable Type: Miok GAS",
    },
    1830: {//Raid Caesar
        captain: "Boosts ATK of Cerebral and Driven characters by 2.5x",
        special: "Deals 45x character's ATK in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for Cerebral and Driven characters for 2 turns, and poisons all enemies",
        spcialName:"Flammable Type: Miok GAS",
        limit: "This character has a limit break path",
    },
    1831: {//6* Judge
        captain: "Increase the rate of PSY orbs, reduces damage recieved by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY], and [INT] characters in your crew, boosts ATK of all characters by 3.9375x if they have a matching orb, by 2.25x otherwise",
        special: "Reduces bind duration by 7 turns and amplifies the effect of orbs by 2x for 1 turn.  If this character is the captain or the friend captain, slightly boosts the rate of [PSY] orbs and randomly shuffles all orbs including [BLOCK] orbs",
        specialName: "Dengi Crack",
    },
    1832: {//6* Judge
        captain: "Increase the rate of PSY orbs, reduces damage recieved by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY], and [INT] characters in your crew, boosts ATK of all characters by 3.9375x if they have a matching orb, by 2.25x otherwise",
        special: "Reduces bind duration by 7 turns and amplifies the effect of orbs by 2x for 1 turn.  If this character is the captain or the friend captain, slightly boosts the rate of [PSY] orbs and randomly shuffles all orbs including [BLOCK] orbs",
        specialName: "Dengi Crack",
        limit: "This character has a limit break path",
    },
    1833: {//Reiju
        captain: "Boosts ATK of [INT] characters by 1.75x and Powerhouse characters by 1.2x and the RCV of Powerhouse characters by 1.1x",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse unit has 2.1x ATK",
        special: "If your captain is [INT] or [PSY], recovers 7,000 HP, removes poison, and reduces the duration of paralysis, despair, and silence by 3 turns.  If the captain is a Powerhouse character, reduces damage recieved by 70% for 2 turns ",
        specialName: "Dangerous Healing",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1834: {//Reiju
        captain: "Boosts ATK of [INT] characters by 2.25x and Powerhouse characters by 1.3x and the RCV of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse unit has 2.925x ATK",
        special: "If your captain is [INT] or [PSY], recovers 7,000 HP, removes poison, and reduces the duration of paralysis, despair, and silence by 3 turns.  If the captain is a Powerhouse character, reduces damage recieved by 70% for 2 turns ",
        specialName: "Dangerous Healing",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        limit: "This character has a limit break path",
    },
    1835: {//Ichiji
        captain: "Boosts ATK of [STR] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse unit has 2.1x ATK",
        special: "If your captain is [STR] or[PSY] character, locks chain multiplier at 2.5x for 2 turns. If your Captain is a Powerhouse character, delays all enemies for 2 turns",
        specialName: "Majestic Impact",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1836: {//Ichiji
        captain: "Boosts ATK of [STR] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse unit has 2.925x ATK",
        special: "If your captain is [STR] or[PSY] character, locks chain multiplier at 2.5x for 2 turns. If your Captain is a Powerhouse character, delays all enemies for 2 turns",
        specialName: "Majestic Impact",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        limit: "This character has a limit break path",
    },
    1837: {//Niji
        captain: "Boosts ATK of [QCK] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse unit has 2.1x ATK",
        special: "If your captain is a [QCK] or [PSY] character, boosts ATK of all characters by 1.75x for 2 turns. If your captain is a Powerhouse character, locks all orbs for 1 turn",
        specialName: "Blitz Needle",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1838: {//Niji
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse unit has 2.925x ATK",
        special: "If your captain is a [QCK] or [PSY] character, boosts ATK of all characters by 1.75x for 2 turns. If your captain is a Powerhouse character, locks all orbs for 1 turn",
        specialName: "Blitz Needle",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        limit: "This character has a limit break path",
    },
    1839: {//Yonji
        captain: "Boosts ATK of [DEX] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse unit has 2.1x ATK",
        special: "If your captain is a [DEX] or [PSY] character, boosts ATK against delayed enemies by 1.75x for 1 turn. If your captain is a Powerhouse character, adds 40x characters ATK as additional typeless damage for 2 turns",
        specialName: "Burst End Kick",
        specialNotes: "Extra Damage can only be boosted by conditional Boosters.",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1840: {//Yonji
        captain: "Boosts ATK of [DEX] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x, and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse unit has 2.925x ATK",
        special: "If your captain is a [DEX] or [PSY] character, boosts ATK against delayed enemies by 1.75x for 1 turn. If your captain is a Powerhouse character, adds 40x characters ATK as additional typeless damage for 2 turns",
        specialName: "Burst End Kick",
        specialNotes: "Extra Damage can only be boosted by conditional Boosters.",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        limit: "This character has a limit break path",
    },
    1841: {//Caribou
        captain: "Boosts ATK of Driven characters by 1.5x, deals 2x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Boosts ATK of Driven characters by 1.5x for 1 turn, reduces enemy's Threshold Damage Reduction by 2 turns and ATK Up duration by 3 turns",
        specialName: "Fathomless Infinite Hell",
        sailor: "When any other character uses a special, reduces own cooldown by 5 turn",
    },
    1842: {//Caribou
        captain: "Boosts ATK of Driven characters by 1.5x, deals 4x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Boosts ATK of Driven characters by 1.5x for 1 turn, reduces enemy's Threshold Damage Reduction by 2 turns and ATK Up duration by 3 turns",
        specialName: "Fathomless Infinite Hell",
        sailor: "When any other character uses a special, reduces own cooldown by 5 turn",        
    },
    1843: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.5x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1844: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.75x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1845: {//Garp
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 5%",
        special: "Reduces the defense of all enemies by 100% for 1 turn. If the targeted enemy has less than 25% HP, instantly defeats them, otherwise, cuts the current HP of one enemy by 30%",
        specialName: "Garp Special",
    },
    1846: {//Garp
        captain: "Boosts ATK of Fighter characters by 2.75x and reduce damage received by 15%",
        special: "Reduces the defense of all enemies by 100% for 1 turn. If the targeted enemy has less than 25% HP, instantly defeats them, otherwise, cuts the current HP of one enemy by 30%",
        specialName: "Garp Special",
    },
    1847: {//Sengoku+
        captain: "Reduce CD by 2 at the start of the adventure, boost ATK of characters that are 29 cost or lower by 3.25x, and their HP by 1.2x, boost ATK of characters with cost 54 by 3x",
        captainNotes: "His captain ability also affects his evolved forms, his base form will NOT receive the boost. All evolved and plus evolved Sengoku characters in the team are included in the bonus.",
        special: "Deals random large INT Damage to all enemies, boost ATK of all characters by 1.5x for 1 turn, changes orbs to matching orbs for chatacters that are 29 cost or lower",
        specialName: "Requiem Shockwave",
    },
    1848: {//Treasure Map Akainu
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Deals 50x character's Atk in Str damage to one enemy, reduces enemy Barrier duration by 1 turn, and reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1849: {//Treasure Map Akainu
        captain: "Boosts ATK of Powerhouse characters by 2.25x and their HP by 1.3x",
        special: "Deals 50x character's Atk in Str damage to one enemy, reduces enemy Barrier duration by 1 turn, and reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1850: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 40x character's Atk in Dex damage to one enemy that will ignore damage negating abilities and barriers, makes Perfects easier to hit for 1 turn, and adds .5x to Chain multiplier for 1 turn",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1851: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2.25x and their HP by 1.3x",
        special: "Deals 40x character's Atk in Dex damage to one enemy that will ignore damage negating abilities and barriers, makes Perfects easier to hit for 1 turn, and adds .5x to Chain multiplier for 1 turn",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1852: {//Whitebeard
        captain: "Not Translated",
        special: "Changes own orb into [INT], deals 100x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn. If enemies have a barrier at the time the special was activated, boosts own ATK by 2.25x",
        specialName: "Whitebeard Special",
    },
    1853: {//Whitebeard
        captain: "Boosts ATK of all characters proportionally to the crew's current HP and their HP by 1.2x",
        captainNotes: "#{captainProportional : lower : 1 + 1.25 * (1 - (remaining HP) / (total HP)) : 1 : 2.25}",
        special: "Changes own orb into [INT], deals 100x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn. If enemies have a barrier at the time the special was activated, boosts own ATK by 2.25x",
        specialName: "Whitebeard Special",
    },
    1854: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1855: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x at the start of the chain, by 2.5x after the 3rd Perfect in a row and by 3x after the 5th Perfect in a row",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1856: {//X Drake
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Cuts the current HP of each enemy by 7%. Boosts the Color Affinity of Powerhouse characters by 1.25x",
        specialName: "Intervening A Fierce Battle",
    },
    1857: {//X Drake
        captain: "Boosts ATK of Powerhouse characters by 2.5 and recovers 200 HP at end of each turnx",
        special: "Cuts the current HP of each enemy by 7%. Boosts the Color Affinity of Powerhouse characters by 1.25x",
        specialName: "Intervening A Fierce Battle",
    },
    1858: {//Leo
        captain: "Boosts ATK of Striker characters by 2x at the start of the chain. Boosts ATK of Striker characters by 2.4x after scoring 3 Perfects in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: "If Leo has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
    },
    1859: {//Leo
        captain: "Boosts ATK of Striker characters by 2.5x and their HP by 1.2x at the start of the chain. Boosts ATK of Striker characters by 3.25x after scoring 3 Perfects in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: "If Leo has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
    },
    1860: {//Coloseum Raizo
        captain: "Not Translated",
        special: [
            {
                "description": "Deals 3x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Raizo Special",
    },
    1861: {//Coloseum Raizo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Raizo Special",
    },
    1862: {//Neo Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Poof [Neo]",
    },
    1863: {//Neo Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Poof [Neo]",
    },
    1865: {//Urouge FN
        captain: "Striker Characters ATK 1.75x, protects from defeat as long as HP is above a certain percent",
        captainNotes: "PERFECT hits don't count, it has to GREAT hits",
        special: "Recover 5000 HP, for 1 turn boost ATK by 1.5x for Striker Characters, if you hit 4 or more GREAT this turn boost ATK by 1.75x for Striker Characters the next turn",
        specialName: "Culling the Criminals from this Earthly World"
    },
    1867: {//Hawkins FN
        captain: "Cerebral Characters ATK 2x, boost chain multiplier by 1.5x",
        special: "Cut HP of all enemies by 10%, for 3 turns cut HP of all enemies by 10%, reduce incoming damage by 40%",
        specialName: "Fortune-Telling from the Shadow of Death"
    },
    2000: {//Rayleigh
        captain: "Boosts ATK of Slasher and Cerebral characters by 2x",
        special: "Randomizes all non-matching orbs, boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Maelstrom at Sea",
    },
    2001: {//Rayleigh
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Randomizes all non-matching orbs, boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Maelstrom at Sea",
    },
};
