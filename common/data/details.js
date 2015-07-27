var details = {
    1: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        cooldown: 3,
        evolution: 2,
        evolvers: [ 78 ]
    },
    2: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 12,
        evolution: 3,
        evolvers: [ 115, 78 ]
    },
    3: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 23,
        evolution: 4,
        evolvers: [ 117, 84, 95, 100 ]
    },
    4: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [
            25,
            18
        ]
    },
    5: {
        special: "Deals 7x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 12,
        evolution: [ 6, 7 ],
        evolvers: [ [ 115, 80 ], [ 116, 80, 97 ] ]
    },
    6: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 15,
        evolution: 8,
        evolvers: [ 117, 86, 97, 102 ]
    },
    7: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 15,
        evolution: 8,
        evolvers: [ 117, 80, 102 ]
    },
    8: {
        special: "Deals 15x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK and HP of DEX characters by 2x",
        cooldown: [
            25,
            20
        ]
    },
    9: {
        special: "Heals 1, 000 HP",
        captain: "Damage received from INT enemies reduced by 20%",
        cooldown: 12,
        evolution: [ 10, 11 ],
        evolvers: [ [ 115, 82 ], [ 116, 82, 99 ] ]
    },
    10: {
        special: "Deals 15x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: 23,
        evolution: 12,
        evolvers: [ 117, 88, 99, 104 ]
    },
    11: {
        special: "Damages received from INT enemies reduced by 100% for 1 turn",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: [
            15,
            8
        ],
        evolution: 12,
        evolvers: [ 117, 82, 104 ]
    },
    12: {
        special: "Deals 15x character's ATK in INT damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 1.5x",
        cooldown: [
            25,
            20
        ]
    },
    13: {
        special: "Delays all enemies for 1 turn",
        captain: "Boosts ATK of Shooter characters by 1.2x",
        cooldown: 15,
        evolution: [ 14, 15 ],
        evolvers: [ [ 115, 81 ], [ 115, 81, 98 ] ]
    },
    14: {
        special: "Delays all enemies for 2 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [
            15,
            10
        ],
        evolution: 16,
        evolvers: [ 117, 87, 98, 103 ]
    },
    15: {
        special: "Delays all enemies for 3 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [
            15,
            10
        ],
        evolution: 16,
        evolvers: [ 117, 81, 103 ]
    },
    16: {
        special: "Delays all enemies for 3 turns and deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        cooldown: [
            20,
            15
        ]
    },
    17: {
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: 23,
        evolution: [ 18, 19 ],
        evolvers: [ [ 115, 79 ], [ 116, 79, 96 ] ]
    },
    18: {
        special: "Reduces all enemies 'defense by 50% for 2 turns",
        captain: "Boosts HP of QCK characters by 1.5x",
        cooldown: 15,
        evolution: 20,
        evolvers: [ 117, 85, 96, 101 ]
    },
    19: {
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: 23,
        evolution: 20,
        evolvers: [ 117, 79, 101 ]
    },
    20: {
        special: "Deals 5, 000 damage to all enemies",
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    21: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of PSY characters by 1.2x",
        cooldown: 15,
        evolution: [ 22, 23, 24, 25, 26 ],
        evolvers: [ [ 116, 81, 98 ], [ 116, 82, 99 ], [ 116, 78, 95 ], [ 116, 79, 96 ], [ 116, 80, 97 ] ]
    },
    22: {
        special: "Deals 15x character's ATK in PSY damage to one enemy",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [
            23,
            15
        ]
    },
    23: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of INT characters by 1.5x",
        cooldown: [
            15,
            8
        ]
    },
    24: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts RCV of STR characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    25: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV of QCK characters by 1.5x",
        cooldown: [
            25,
            15
        ]
    },
    26: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [
            22,
            15
        ]
    },
    27: {
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        captain: "Boosts HP of QCK characters by 1.2x"
    },
    28: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.2x",
        cooldown: [
            40,
            15
        ]
    },
    29: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Damage received from STR enemies reduced by 30%",
        cooldown: 15,
        evolution: 30,
        evolvers: [ 117, 78, 89, 100 ]
    },
    30: {
        special: "Damage received reduced by 80% for 1 turn",
        captain: "Damage received from STR enemies reduced by 50%",
        cooldown: [
            15,
            9
        ]
    },
    31: {
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolution: 32,
        evolvers: [ 115, 81 ]
    },
    32: {
        special: "Changes [RCV] orbs into [TND] orbs",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [
            13,
            7
        ]
    },
    33: {
        captain: "Damage received from INT enemies reduced by 30%",
        evolution: 34,
        evolvers: [ 115, 82 ]
    },
    34: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        captain: "Damage received from INT enemies reduced by 30%",
        cooldown: [
            25,
            20
        ]
    },
    35: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Slasher characters by 1.2x",
        cooldown: [
            15,
            9
        ],
        evolution: 228,
        evolvers: [ 116, 78, 89 ]
    },
    36: {
        special: "Deals 5x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    37: {
        special: "Deals 5x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    38: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: [
            13,
            7
        ],
        evolution: 39,
        evolvers: [ 116, 82, 93 ]
    },
    39: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [
            13,
            7
        ]
    },
    40: {
        special: "Changes neighboring orbs into [RCV] orbs",
        captain: "Damage received from Shooter enemies reduced by 30%",
        cooldown: [
            15,
            8
        ]
    },
    41: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts RCV of INT characters by 1.2x",
        cooldown: [
            13,
            10
        ]
    },
    42: {
        special: "Deals 3x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 1.2x",
        cooldown: [
            10,
            5
        ]
    },
    43: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: 13,
        evolution: [ 44, 229 ],
        evolvers: [ [ 116, 80, 91 ], [ 116, 81, 92 ] ]
    },
    44: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: [
            13,
            7
        ]
    },
    45: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.2x",
        cooldown: 15,
        evolution: 46,
        evolvers: [ 117, 79, 90, 101 ]
    },
    46: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [
            15,
            8
        ]
    },
    47: {
        special: "Changes [TND] orbs into [RCV] orbs"
    },
    48: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        cooldown: 18
    },
    49: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            15,
            10
        ],
        evolution: 230,
        evolvers: [ 116, 78, 89 ]
    },
    50: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Recovers 3x character's RCV in HP at the end of the turn"
    },
    51: {
        captain: "Recovers 3x character's RCV in HP at the end of the turn"
    },
    52: {
        special: "Changes [STR] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2.5x",
        cooldown: [
            13,
            7
        ]
    },
    53: {
        captain: "Damage received from QCK enemies reduced by 30%",
        evolution: 54,
        evolvers: [ 116, 79, 90 ]
    },
    54: {
        special: "Deals 7x character's ATK in QCK damage to one enemy",
        captain: "Damage received from QCK enemies reduced by 50%",
        cooldown: [
            15,
            9
        ]
    },
    55: {
        captain: "Damage received from STR enemies reduced by 30%",
        evolution: 56,
        evolvers: [ 116, 78, 89 ]
    },
    56: {
        special: "Changes [RCV] orbs into [STR] orbs",
        captain: "Damage received from STR enemies reduced by 50%",
        cooldown: [
            13,
            7
        ]
    },
    57: {
        special: "Deals 7x character's ATK in INT damage to one enemy",
        captain: "Damage received reduced by 10%",
        cooldown: 15,
        evolution: 58,
        evolvers: [ 117, 82, 93, 104 ]
    },
    58: {
        special: "Poisons all enemies",
        captain: "Damage received reduced by 20%",
        cooldown: [
            15,
            12
        ]
    },
    59: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.2x",
        cooldown: [
            15,
            7
        ]
    },
    60: {
        special: "Changes [TND] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            15,
            7
        ]
    },
    61: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        captain: "Boosts HP of Shooter characters by 1.5x",
        cooldown: [
            15,
            8
        ]
    },
    62: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Fighter characters by 1.5x",
        cooldown: [
            15,
            9
        ]
    },
    63: {
        captain: "Damage received from DEX enemies reduced by 30%",
        evolution: 64,
        evolvers: [ 116, 80, 91 ]
    },
    64: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Damage received from DEX enemies reduced by 50%",
        cooldown: [
            15,
            10
        ]
    },
    65: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: 15,
        evolution: 66,
        evolvers: [ 117, 78, 89, 100 ]
    },
    66: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [
            23,
            15
        ]
    },
    67: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 1.5x",
        cooldown: 25,
        evolution: 68,
        evolvers: [ 117, 83, 79, 85, 96 ]
    },
    68: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 2x",
        cooldown: [
            25,
            18
        ]
    },
    69: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        cooldown: [
            22,
            15
        ],
        evolution: 70,
        evolvers: [ 117, 83, 80, 86, 97 ]
    },
    70: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        cooldown: [
            22,
            15
        ],
        evolution: 268,
        evolvers: [ 117, 80, 86, 91, 102 ]
    },
    71: {
        special: "Damage received reduced by 50% for 1 turn",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [
            17,
            10
        ],
        evolution: [ 72, 72 ],
        evolvers: [ [ 117, 81, 98 ], [ 444 ] ]
    },
    72: {
        special: "Randomizes all orbs",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        cooldown: [
            12,
            6
        ],
        evolution: 73,
        evolvers: [ 118, 83, 87, 98, 103 ]
    },
    73: {
        special: "Randomizes all orbs",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [
            12,
            6
        ]
    },
    74: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: 25,
        evolution: 75,
        evolvers: [ 118, 83, 85, 85, 101 ]
    },
    75: {
        special: "Deals 15x character's ATK in QCK to all enemies",
        captain: "Boosts ATK of QCK characters by 2.5x",
        cooldown: 25
    },
    76: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: 25,
        evolution: 77,
        evolvers: [ 118, 83, 87, 98, 103 ]
    },
    77: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2.5x",
        cooldown: [
            25,
            20
        ]
    },
    78: {},
    79: {},
    80: {},
    81: {},
    82: {},
    83: {},
    84: {},
    85: {},
    86: {},
    87: {},
    88: {},
    89: {},
    90: {},
    91: {},
    92: {},
    93: {},
    94: {},
    95: {},
    96: {},
    97: {},
    98: {},
    99: {},
    100: {},
    101: {},
    102: {},
    103: {},
    104: {},
    105: {},
    106: {},
    107: {},
    108: {},
    109: {},
    110: {},
    111: {},
    112: {},
    113: {},
    114: {},
    115: {},
    116: {},
    117: {},
    118: {},
    119: {
        special: "Deals 10x character's ATK in DEX damage to one enemy"
    },
    120: {
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    121: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 142,
        evolvers: [ 89 ]
    },
    122: {
        special: "Damage received reduced by 20% for 1 turn",
        evolution: 143,
        evolvers: [ 90 ]
    },
    123: {
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 144,
        evolvers: [ 91 ]
    },
    124: {
        special: "Damage received reduced by 20% for 1 turn",
        evolution: 145,
        evolvers: [ 92 ]
    },
    125: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [
            40,
            15
        ],
        evolution: 146,
        evolvers: [ 93 ]
    },
    126: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 147,
        evolvers: [ 89 ]
    },
    127: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        evolution: 148,
        evolvers: [ 90 ]
    },
    128: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 149,
        evolvers: [ 91 ]
    },
    129: {
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 150,
        evolvers: [ 92 ]
    },
    130: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 151,
        evolvers: [ 93 ]
    },
    131: {
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 152,
        evolvers: [ 89 ]
    },
    132: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 153,
        evolvers: [ 90 ]
    },
    133: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 154,
        evolvers: [ 91 ]
    },
    134: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 155,
        evolvers: [ 92 ]
    },
    135: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 156,
        evolvers: [ 93 ]
    },
    136: {
        special: "Deals 5x character's ATK in STR damage to all enemies",
        evolution: 157,
        evolvers: [ 89 ]
    },
    137: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [
            15,
            7
        ],
        evolution: 158,
        evolvers: [ 90 ]
    },
    138: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 159,
        evolvers: [ 91 ]
    },
    139: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 160,
        evolvers: [ 92 ]
    },
    140: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15,
        evolution: 161,
        evolvers: [ 93 ]
    },
    141: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [
            25,
            10
        ],
        evolution: 162,
        evolvers: [ 115, 93 ]
    },
    142: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 269,
        evolvers: [ 115, 116, 89 ]
    },
    143: {
        special: "Damage received reduced by 20% for 1 turn",
        evolution: 270,
        evolvers: [ 115, 116, 90 ]
    },
    144: {
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 271,
        evolvers: [ 115, 116, 91 ]
    },
    145: {
        special: "Damage received reduced by 20% for 1 turn",
        evolution: 272,
        evolvers: [ 115, 116, 92 ]
    },
    146: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [
            40,
            15
        ],
        evolution: 273,
        evolvers: [ 115, 116, 93 ]
    },
    147: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 274,
        evolvers: [ 116, 95 ]
    },
    148: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        evolution: 275,
        evolvers: [ 116, 96 ]
    },
    149: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 276,
        evolvers: [ 116, 97 ]
    },
    150: {
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 277,
        evolvers: [ 116, 98 ]
    },
    151: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 278,
        evolvers: [ 116, 99 ]
    },
    152: {
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 279,
        evolvers: [ 78, 84 ]
    },
    153: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 280,
        evolvers: [ 79, 85 ]
    },
    154: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 281,
        evolvers: [ 80, 86 ]
    },
    155: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 282,
        evolvers: [ 81, 87 ]
    },
    156: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 283,
        evolvers: [ 82, 88 ]
    },
    157: {
        special: "Deals 5x character's ATK in STR damage to all enemies",
        evolution: 284,
        evolvers: [ 115, 116, 89 ]
    },
    158: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [
            15,
            7
        ],
        evolution: 285,
        evolvers: [ 115, 116, 90 ]
    },
    159: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 286,
        evolvers: [ 115, 116, 91 ]
    },
    160: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 287,
        evolvers: [ 115, 116, 92 ]
    },
    161: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15,
        evolution: 288,
        evolvers: [ 115, 116, 93 ]
    },
    162: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [
            25,
            10
        ],
        evolution: 289,
        evolvers: [ 104 ]
    },
    163: {
        special: "Changes [DEX] orbs into [TND] orbs"
    },
    164: {
        special: "Changes [QCK] orbs into [TND] orbs"
    },
    165: {
        special: "Recovers 5x character's RCV in HP"
    },
    166: {
        special: "Recovers 5x character's RCV in HP"
    },
    167: {
        special: "Recovers 5x character's RCV in HP"
    },
    168: {
        special: "Recovers 5x character's RCV in HP"
    },
    169: {
        special: "Recovers 5x character's RCV in HP"
    },
    170: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [
            25,
            10
        ]
    },
    171: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: 25
    },
    172: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: 25
    },
    173: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: 25
    },
    174: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: 25
    },
    175: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        cooldown: [
            40,
            15
        ]
    },
    176: {
        special: "Deals 10x character's ATK in DEX damage to one enemy"
    },
    177: {
        special: "Deals 10x character's ATK in QCK damage to one enemy"
    },
    178: {
        special: "Deals 5x character's ATK in PSY damage to all enemies"
    },
    179: {
        special: "Changes [QCK] orbs into [STR] orbs",
        cooldown: [
            13,
            7
        ],
        evolution: 184,
        evolvers: [ 78 ]
    },
    180: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ],
        evolution: 185,
        evolvers: [ 80 ]
    },
    181: {
        special: "Changes [STR] orbs into [QCK] orbs",
        cooldown: [
            13,
            7
        ],
        evolution: 186,
        evolvers: [ 79 ]
    },
    182: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ],
        evolution: 187,
        evolvers: [ 81 ]
    },
    183: {
        special: "Changes [RCV] orbs into [INT] orbs",
        cooldown: [
            13,
            7
        ],
        evolution: 188,
        evolvers: [ 115, 82 ]
    },
    184: {
        special: "Changes [QCK] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 194,
        evolvers: [ 116, 78, 84 ]
    },
    185: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ],
        evolution: 195,
        evolvers: [ 116, 80, 86 ]
    },
    186: {
        special: "Changes [STR] orbs into [QCK] orbs",
        cooldown: [
            13,
            7
        ],
        evolution: 196,
        evolvers: [ 116, 79, 85 ]
    },
    187: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ],
        evolution: 197,
        evolvers: [ 116, 81, 87 ]
    },
    188: {
        special: "Changes [RCV] orbs into [INT] orbs",
        cooldown: [
            13,
            7
        ],
        evolution: 198,
        evolvers: [ 116, 117, 82, 88 ]
    },
    189: {},
    190: {},
    191: {},
    192: {},
    193: {},
    194: {
        special: "Changes [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            15,
            7
        ]
    },
    195: {
        special: "Recovers 5x character's RCV in HP",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [
            12,
            8
        ]
    },
    196: {
        special: "Changes [STR] orbs into [QCK] orbs",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [
            13,
            7
        ]
    },
    197: {
        special: "Recovers 5x character's RCV in HP",
        captain: "Damage received from PSY enemies reduced by 20%",
        cooldown: [
            12,
            8
        ]
    },
    198: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [
            13,
            7
        ]
    },
    199: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 15,
        evolution: 200,
        evolvers: [ 94, 78 ]
    },
    200: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [
            20,
            14
        ]
    },
    201: {
        captain: "Boosts HP of Fighter characters by 1.5x",
        evolution: 202,
        evolvers: [ 94, 79 ]
    },
    202: {
        special: "Changes [RCV] orbs into [QCK] orbs",
        captain: "Boosts HP of Fighter characters by 2x",
        cooldown: [
            15,
            6
        ]
    },
    203: {
        captain: "Damage received by INT enemies reduced by 10%",
        evolution: 204,
        evolvers: [ 94, 82 ]
    },
    204: {
        special: "Delays all enemies for 1 turn",
        captain: "Damage received by INT enemies reduced by 10%",
        cooldown: [
            13,
            9
        ]
    },
    205: {
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        evolution: 206,
        evolvers: [ 94, 80 ]
    },
    206: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        cooldown: [
            15,
            10
        ]
    },
    207: {
        captain: "Damage received by PSY enemies reduced by 10%",
        evolution: [ 208, 462 ],
        evolvers: [ [ 94, 81 ], [ 117, 231 ] ]
    },
    208: {
        special: "Changes [RCV] orbs into [PSY] orbs",
        captain: "Damage received by PSY enemies reduced by 20%",
        cooldown: [
            13,
            7
        ]
    },
    209: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn",
        captain: "Boosts RCV of INT characters by 1.5x",
        cooldown: [
            17,
            8
        ],
        evolution: 210,
        evolvers: [ 118, 82, 83, 88, 104 ]
    },
    210: {
        special: "Boosts ATK of INT characters by 2x for 1 turn",
        captain: "Boosts RCV of INT characters by 2x",
        cooldown: [
            17,
            12
        ]
    },
    211: {
        captain: "Boosts ATK of Striker characters by 1.2x",
        evolution: 212,
        evolvers: [ 116, 79, 90 ]
    },
    212: {
        special: "Deals 5x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    213: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: 20,
        evolution: 214,
        evolvers: [ 117, 78, 95, 100 ]
    },
    214: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [
            20,
            15
        ]
    },
    215: {
        special: "Poisons all enemies",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [
            15,
            12
        ]
    },
    216: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        cooldown: [
            22,
            15
        ],
        evolution: 217,
        evolvers: [ 118, 84, 100, 94, 89 ]
    },
    217: {
        special: "Deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK by 3.5x after scoring 3 Perfects in a row",
        cooldown: [
            25,
            20
        ]
    },
    218: {
        special: "Damage received by STR enemies reduced by 100% for 1 turn",
        captain: "Damage received reduced by 80% if HP is above 99% at the start of the turn",
        cooldown: 15,
        evolution: 219,
        evolvers: [ 118, 86, 102, 94, 91 ]
    },
    219: {
        special: "Deals 25x character's ATK in DEX damage to one enemy",
        captain: "Damage received reduced by 80% if HP is above 99% at the start of the turn",
        cooldown: [
            25,
            18
        ]
    },
    220: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: 13,
        evolution: 221,
        evolvers: [ 118, 88, 104, 94, 93 ]
    },
    221: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2.5x",
        cooldown: [
            13,
            7
        ]
    },
    222: {
        special: "Boosts ATK of PSY characters by 1.5x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.2x",
        cooldown: [
            17,
            8
        ],
        evolution: 223,
        evolvers: [ 117, 81, 98, 83 ]
    },
    223: {
        special: "Boosts ATK of PSY characters by 2x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [
            17,
            12
        ]
    },
    224: {
        special: "Deals 15x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2x after scoring 2 Perfects in a row",
        cooldown: 15,
        evolution: 225,
        evolvers: [ 117, 79, 90, 83 ]
    },
    225: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
        cooldown: [
            20,
            11
        ]
    },
    226: {
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [
            32,
            17
        ],
        evolution: 227,
        evolvers: [ 118, 83, 86, 86, 102 ]
    },
    227: {
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2.5x",
        cooldown: [
            32,
            17
        ]
    },
    228: {
        special: "Reduce the duration of Bind by 2 turns",
        captain: "Boosts HP of Slasher characters by 1.5x",
        cooldown: [
            15,
            9
        ]
    },
    229: {
        special: "Change [INT] orbs into [PSY] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: [
            13,
            7
        ]
    },
    230: {
        special: "Deals 200 damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            10,
            5
        ]
    },
    231: {
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            22,
            14
        ],
        evolution: 232,
        evolvers: [ 117, 79, 85, 90, 101 ]
    },
    232: {
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            22,
            14
        ]
    },
    233: {
        captain: "Boosts HP of PSY characters by 1.5x",
        evolution: 234,
        evolvers: [ 116, 81, 92 ]
    },
    234: {
        special: "Deals 5x character's ATK in PSY damage to all enemies",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [
            15,
            8
        ]
    },
    235: {
        captain: "Boosts ATK of Fighter characters by 1.2x",
        evolution: 236,
        evolvers: [ 116, 78, 89 ]
    },
    236: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [
            20,
            11
        ]
    },
    237: {
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 242,
        evolvers: [ 115, 89, 95 ]
    },
    238: {
        special: "Changes [TND] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 243,
        evolvers: [ 115, 91, 97 ]
    },
    239: {
        special: "Changes [TND] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 244,
        evolvers: [ 115, 90, 96 ]
    },
    240: {
        special: "Changes [STR] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 245,
        evolvers: [ 115, 92, 98 ]
    },
    241: {
        special: "Changes [QCK] orbs into [INT] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 246,
        evolvers: [ 115, 93, 99 ]
    },
    242: {
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ]
    },
    243: {
        special: "Changes [TND] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ]
    },
    244: {
        special: "Changes [TND] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ]
    },
    245: {
        special: "Changes [STR] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ]
    },
    246: {
        special: "Changes [QCK] orbs into [INT] orbs",
        cooldown: [
            15,
            7
        ]
    },
    247: {
        special: "Heals 1, 224 HP",
        captain: "Damage received reduced by 10%",
        cooldown: [
            10,
            10
        ]
    },
    248: {
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 2.5x",
        cooldown: [
            30,
            15
        ],
        evolution: 249,
        evolvers: [ 118, 84, 84, 95, 100 ]
    },
    249: {
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 2.5x",
        cooldown: [
            30,
            15
        ]
    },
    250: {
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            30,
            20
        ],
        evolution: 251,
        evolvers: [ 118, 87, 94, 98, 103 ]
    },
    251: {
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            30,
            20
        ]
    },
    252: {
        special: "Damage received by DEX enemies reduced by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        cooldown: [
            15,
            8
        ],
        evolution: 253,
        evolvers: [ 118, 85, 94, 96, 101 ]
    },
    253: {
        special: "Damage received by DEX enemies reduced by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        cooldown: [
            15,
            8
        ]
    },
    254: {
        special: "Deals 5, 000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        cooldown: [
            15,
            10
        ],
        evolution: 255,
        evolvers: [ 118, 88, 94, 99, 104 ]
    },
    255: {
        special: "Deals 5, 000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        cooldown: [
            15,
            10
        ]
    },
    256: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [
            20,
            10
        ],
        evolution: 257,
        evolvers: [ 118, 86, 94, 97, 102 ]
    },
    257: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [
            20,
            10
        ]
    },
    258: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        cooldown: [
            20,
            10
        ],
        evolution: 259,
        evolvers: [ 118, 84, 94, 95, 100 ]
    },
    259: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        cooldown: [
            20,
            10
        ]
    },
    260: {
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        cooldown: [
            25,
            17
        ],
        evolution: 261,
        evolvers: [ 118, 84, 266, 95, 267 ]
    },
    261: {
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        cooldown: [
            25,
            17
        ]
    },
    262: {
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolution: 263,
        evolvers: [ 117, 81, 87, 92, 103 ]
    },
    263: {
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [
            17,
            10
        ]
    },
    264: {
        captain: "Damage received from INT enemies reduced by 30%",
        evolution: 265,
        evolvers: [ 117, 82, 88, 93, 104 ]
    },
    265: {
        special: "Reduces Bind duration by 3 turns",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        cooldown: [
            17,
            11
        ]
    },
    266: {},
    267: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts ATK by 1.5x",
        cooldown: 15
    },
    268: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 25%",
        cooldown: [
            22,
            15
        ]
    },
    269: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    270: {
        special: "Damage received reduced by 20% for 1 turn"
    },
    271: {
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ]
    },
    272: {
        special: "Damage received reduced by 20% for 1 turn"
    },
    273: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [
            40,
            15
        ]
    },
    274: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    275: {
        special: "Reduces the defense of all enemies by 50% for 1 turn"
    },
    276: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ]
    },
    277: {
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ]
    },
    278: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    279: {
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ]
    },
    280: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ]
    },
    281: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ]
    },
    282: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [
            15,
            7
        ]
    },
    283: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    284: {
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    285: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [
            15,
            7
        ]
    },
    286: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13
    },
    287: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13
    },
    288: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15
    },
    289: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [
            25,
            10
        ]
    },
    290: {
        special: "Deals 25x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: 25
    },
    291: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Damage received by INT enemies reduced by 50%",
        cooldown: [
            18,
            8
        ]
    },
    292: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Damage received by PSY enemies reduced by 50%",
        cooldown: [
            18,
            8
        ]
    },
    293: {
        special: "Damage received reduced by 20% for 1 turn",
        captain: "Boosts HP of QCK characters by 2x",
        cooldown: [
            15,
            10
        ]
    },
    294: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of STR characters by 2x",
        cooldown: [
            40,
            15
        ]
    },
    295: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts HP of DEX characters by 2x",
        cooldown: [
            15,
            10
        ]
    },
    296: {
        special: "Heals 2, 000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: 20,
        evolution: 297,
        evolvers: [ 117, 82, 88, 93, 104 ]
    },
    297: {
        special: "Heals 2, 000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [
            20,
            12
        ]
    },
    298: {
        special: "Deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [
            25,
            18
        ]
    },
    299: {
        special: "Reduces all enemies' HP by 10%",
        captain: "Boosts ATK of DEX characters by 2x",
        cooldown: [
            21,
            16
        ]
    },
    300: {},
    301: {},
    302: {},
    303: {},
    304: {},
    305: {
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        cooldown: [
            28,
            13
        ],
        evolution: 306,
        evolvers: [ 118, 87, 87, 303, 103 ]
    },
    306: {
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 2x",
        cooldown: [
            28,
            13
        ]
    },
    307: {
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        cooldown: [
            18,
            10
        ],
        evolution: 308,
        evolvers: [ 118, 80, 83, 302, 102 ]
    },
    308: {
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        cooldown: [
            18,
            10
        ]
    },
    309: {
        special: "Cuts all enemies' current HP by 10% and reduces the defense of all enemies by 50% for 3 turns",
        captain: "Reduces RCV by 90% and damage received by 40%",
        cooldown: [
            23,
            15
        ],
        evolution: 310,
        evolvers: [ 118, 82, 83, 304, 104 ]
    },
    310: {
        special: "Cuts all enemies' current HP by 10% and reduces the defense of all enemies by 50% for 3 turns",
        captain: "Reduces RCV by 90% and damage received by 40%",
        cooldown: [
            23,
            15
        ]
    },
    311: {
        special: "Deals 100x character's ATK in fixed QCK damage to one enemy and reduces HP to 1",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        cooldown: [
            35,
            25
        ],
        evolution: 312,
        evolvers: [ 118, 79, 83, 301, 101 ]
    },
    312: {
        special: "Deals 100x character's ATK in QCK damage to one enemy and reduces HP to 1",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        cooldown: [
            35,
            25
        ]
    },
    313: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        cooldown: [
            25,
            18
        ],
        evolution: 314,
        evolvers: [ 118, 81, 83, 303, 103 ]
    },
    314: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        cooldown: [
            25,
            18
        ]
    },
    315: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        cooldown: [
            20,
            10
        ],
        evolution: 316,
        evolvers: [ 118, 78, 83, 300, 100 ]
    },
    316: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        cooldown: [
            20,
            10
        ]
    },
    317: {
        special: "Changes all orbs into either [DEX] or [STR] orbs and deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn and reduces damage received by 10%",
        cooldown: [
            25,
            18
        ],
        evolution: 318,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    318: {
        special: "Changes all orbs into either [DEX] or [STR] orbs and deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn and reduces damage received by 15%",
        cooldown: [
            25,
            18
        ]
    },
    319: {
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [
            20,
            15
        ],
        evolution: 320,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    320: {
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [
            20,
            15
        ]
    },
    321: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        cooldown: [
            25,
            18
        ],
        evolution: 322,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    322: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        cooldown: [
            25,
            18
        ]
    },
    323: {
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        cooldown: [
            17,
            10
        ],
        evolution: 324,
        evolvers: [ 117, 90, 85, 96, 101 ]
    },
    324: {
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        cooldown: [
            17,
            10
        ]
    },
    325: {
        special: "Changes [TND] orbs into [RCV] orbs and [RCV] orbs into [QCK] orbs",
        cooldown: [
            14,
            10
        ]
    },
    326: {
        special: "Empties all slots and deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        cooldown: [
            22,
            16
        ],
        evolution: 327,
        evolvers: [ 117, 84, 89, 95, 300 ]
    },
    327: {
        special: "Empties all slots and deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        cooldown: [
            22,
            16
        ]
    },
    328: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [
            20,
            15
        ],
        evolution: 329,
        evolvers: [ 117, 79, 85, 96 ]
    },
    329: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [
            20,
            15
        ]
    },
    330: {
        evolution: 332,
        evolvers: [ 116, 331, 302 ]
    },
    331: {
        evolution: 332,
        evolvers: [ 116, 330, 302 ]
    },
    332: {
        special: "Changes [STR] orbs into [RCV] orbs and [RCV] orbs into [DEX] orbs",
        captain: "Boosts ATK, HP and RCV of Striker characters by 1.2x",
        cooldown: [
            16,
            10
        ]
    },
    333: {
        special: "Heals a random amount of HP",
        captain: "Boosts ATK and RCV of PSY and INT characters by 1.5x",
        cooldown: [
            20,
            15
        ]
    },
    334: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ],
        evolution: 335,
        evolvers: [ 116, 82, 304 ]
    },
    335: {
        special: "Recovers 5x character's RCV in HP",
        cooldown: [
            12,
            8
        ]
    },
    336: {
        special: "Freely switch orbs between slots twice",
        captain: "Damage received reduced by 50% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn",
        cooldown: [
            14,
            6
        ],
        evolution: 337,
        evolvers: [ 117, 81, 87, 98, 103 ]
    },
    337: {
        special: "Freely switch orbs between slots twice",
        captain: "Damage received reduced by 50% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2.5x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn",
        cooldown: [
            14,
            6
        ]
    },
    338: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        cooldown: [
            14,
            6
        ]
    },
    339: {
        special: "Changes [INT] orbs into [TND] orbs",
        cooldown: [
            14,
            6
        ]
    },
    340: {
        special: "Changes all orbs into either [STR] or [QCK] orbs and deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [
            25,
            18
        ],
        evolution: 341,
        evolvers: [ 117, 78, 84, 95, 100 ]
    },
    341: {
        special: "Changes all orbs into either [STR] or [QCK] orbs and deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [
            25,
            18
        ]
    },
    342: {
        evolution: [ 347, 347, 347 ],
        evolvers: [ [ 115, 105, 105 ], [ 78, 105, 105 ], [ 89, 105, 105 ] ]
    },
    343: {
        evolution: [ 348, 348, 348 ],
        evolvers: [ [ 115, 106, 106 ], [ 79, 106, 106 ], [ 90, 106, 106 ] ]
    },
    344: {
        evolution: [ 349, 349, 349 ],
        evolvers: [ [ 115, 107, 107 ], [ 80, 107, 107 ], [ 91, 107, 107 ] ]
    },
    345: {
        evolution: [ 350, 350, 350 ],
        evolvers: [ [ 115, 108, 108 ], [ 81, 108, 108 ], [ 92, 108, 108 ] ]
    },
    346: {
        evolution: [ 351, 351, 351 ],
        evolvers: [ [ 115, 109, 109 ], [ 82, 109, 109 ], [ 93, 109, 109 ] ]
    },
    347: {},
    348: {},
    349: {},
    350: {},
    351: {},
    352: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [
            30,
            16
        ],
        evolution: 353,
        evolvers: [ 118, 83, 88, 304, 104 ]
    },
    353: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2.5x",
        cooldown: [
            30,
            16
        ]
    },
    354: {
        special: "Reduces Bind and Silence duration by 3 turns",
        cooldown: [
            22,
            15
        ],
        evolution: 355,
        evolvers: [ 116, 85, 90, 96 ]
    },
    355: {
        special: "Reduces Bind and Silence duration by 3 turns",
        cooldown: [
            22,
            15
        ]
    },
    356: {
        special: "Changes own orb into [STR] and deals 9x character's ATK in STR damage to all enemies",
        specialNotes: "The in-game description is wrong, the special does not deal 7x damage",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [
            11,
            6
        ],
        evolution: 357,
        evolvers: [ 118, 78, 83, 300, 100 ]
    },
    357: {
        special: "Changes own orb into [STR] and deals 9x character's ATK in STR damage to all enemies",
        specialNotes: "The in-game description is wrong, the special does not deal 7x damage",
        captain: "Boosts ATK of Striker characters by 2.5x",
        cooldown: [
            11,
            6
        ]
    },
    358: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs and deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [
            20,
            12
        ],
        evolution: 359,
        evolvers: [ 118, 80, 83, 302, 102 ]
    },
    359: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs and deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            20,
            12
        ]
    },
    360: {
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        cooldown: [
            28,
            20
        ],
        evolution: 361,
        evolvers: [ 118, 82, 83, 304, 104 ]
    },
    361: {
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        cooldown: [
            28,
            20
        ]
    },
    362: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        cooldown: [
            13,
            8
        ],
        evolution: 363,
        evolvers: [ 118, 81, 83, 303, 103 ]
    },
    363: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        cooldown: [
            13,
            8
        ]
    },
    364: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        cooldown: [
            20,
            10
        ],
        evolution: 365,
        evolvers: [ 118, 79, 83, 301, 101 ]
    },
    365: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        cooldown: [
            20,
            10
        ]
    },
    366: {
        special: "Deals 20x character's ATK in INT damage to all enemies and reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        cooldown: [
            23,
            18
        ],
        evolution: 367,
        evolvers: [ 118, 88, 266, 99, 267 ]
    },
    367: {
        special: "Deals 20x character's ATK in INT damage to all enemies and reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        cooldown: [
            23,
            18
        ]
    },
    368: {
        special: "Damage received by DEX enemies reduced by 50% for 1 turn",
        cooldown: [
            25,
            12
        ],
        evolution: 373,
        evolvers: [ 116, 89, 95 ]
    },
    369: {
        special: "Damage received by STR enemies reduced by 50% for 1 turn",
        cooldown: [
            25,
            12
        ],
        evolution: 374,
        evolvers: [ 116, 90, 96 ]
    },
    370: {
        special: "Damage received by QCK enemies reduced by 50% for 1 turn",
        cooldown: [
            25,
            12
        ],
        evolution: 375,
        evolvers: [ 116, 91, 97 ]
    },
    371: {
        special: "Damage received by INT enemies reduced by 50% for 1 turn",
        cooldown: [
            25,
            12
        ],
        evolution: 376,
        evolvers: [ 116, 92, 98 ]
    },
    372: {
        special: "Damage received by PSY enemies reduced by 50% for 1 turn",
        cooldown: [
            25,
            12
        ],
        evolution: 377,
        evolvers: [ 116, 93, 99 ]
    },
    373: {
        special: "Damage received by DEX enemies reduced by 50% for 1 turn",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    374: {
        special: "Damage received by STR enemies reduced by 50% for 1 turn",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    375: {
        special: "Damage received by QCK enemies reduced by 50% for 1 turn",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    376: {
        special: "Damage received by INT enemies reduced by 50% for 1 turn",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    377: {
        special: "Damage received by PSY enemies reduced by 50% for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    378: {
        special: "Recovers 3x character's RCV in HP",
        captain: "Boosts RCV by 1.5x",
        cooldown: [
            10,
            5
        ]
    },
    379: {
        special: "Poisons all enemies",
        cooldown: [
            15,
            10
        ],
        evolution: 380,
        evolvers: [ 115, 78, 300 ]
    },
    380: {
        special: "Poisons all enemies",
        captain: "Boosts ATK and RCV of STR characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    381: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [
            25,
            8
        ]
    },
    382: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [
            15,
            10
        ]
    },
    383: {
        special: "Poisons one enemy",
        captain: "Damage received reduced by 10%, boosts ATK of INT units by 2x",
        cooldown: [
            17,
            12
        ],
        evolution: [ 384, 408 ],
        evolvers: [ [ 117, 88, 93, 94, 104 ], [ 118, 88, 266, 304, 267 ] ]
    },
    384: {
        special: "Poisons one enemy",
        captain: "Damage received reduced by 20%, boosts ATK of INT units by 2x",
        cooldown: [
            17,
            12
        ]
    },
    385: {
        special: "Damage received reduced by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [
            20,
            10
        ],
        evolution: 386,
        evolvers: [ 117, 82, 88, 93, 99 ]
    },
    386: {
        special: "Damage received reduced by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [
            20,
            10
        ]
    },
    387: {
        special: "Changes all orbs into either [PSY] or [INT] orbs and deals random PSY damage to all enemies",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [
            25,
            18
        ],
        evolution: 388,
        evolvers: [ 117, 81, 87, 385 ]
    },
    388: {
        special: "Changes all orbs into either [PSY] or [INT] orbs and deals random PSY damage to all enemies",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [
            25,
            18
        ]
    },
    389: {
        special: "Changes own orb into [QCK] and every other orb into either [RCV], [STR], [DEX] or [QCK] orbs",
        captain: "Boosts ATK by 2.25x following a chain of DEX > INT > QCK attacks no lower than Good",
        cooldown: [
            17,
            8
        ],
        evolution: 390,
        evolvers: [ 118, 85, 94, 301, 101 ]
    },
    390: {
        special: "Changes own orb into [QCK] and every other orb into either [RCV], [STR], [DEX] or [QCK] orbs",
        captain: "Boosts ATK by 2.75x following a chain of STR > DEX > QCK attacks no lower than Good",
        cooldown: [
            17,
            8
        ]
    },
    391: {
        special: "Damage received reduced by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn and deals 1, 000 damage to all enemies",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [
            23,
            14
        ],
        evolution: 392,
        evolvers: [ 117, 86, 91, 97, 102 ]
    },
    392: {
        special: "Damage received reduced by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn and deals 1, 000 damage to all enemies",
        captain: "Boosts RCV of DEX characters by 2x",
        cooldown: [
            23,
            14
        ]
    },
    393: {
        special: "Deals 35x character's ATK in STRdamage to one enemy",
        cooldown: [
            38,
            18
        ]
    },
    394: {
        special: "Deals 5, 000 damage to all enemies",
        cooldown: [
            17,
            8
        ]
    },
    395: {
        special: "Empties neighboring slots, boosts orb effectiveness by 1.25x for 1 turn",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: 15,
        evolution: 396,
        evolvers: [ 79, 85, 90, 301 ]
    },
    396: {
        special: "Empties neighboring slots, boosts orb effectiveness by 1.25x for 1 turn",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: 15
    },
    397: {
        special: "Fills empty slots with [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        captain: "Boosts ATK by 3x after scoring 5 Perfects in a row",
        cooldown: [
            25,
            20
        ],
        evolution: 398,
        evolvers: [ 78, 84, 89, 300 ]
    },
    398: {
        special: "Fills empty slots with [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        captain: "Boosts ATK by 4x after scoring 5 Perfects in a row",
        cooldown: [
            25,
            20
        ]
    },
    399: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [
            15,
            8
        ],
        evolution: 400,
        evolvers: [ 80, 86, 91, 302 ]
    },
    400: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        captain: "Boosts HP of Striker characters by 2x",
        cooldown: [
            15,
            8
        ]
    },
    401: {
        special: "Damage received reduced by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        captain: "Damage received reduced by 10%, boosts ATK of Slasher characters by 1.5x, slightly reduces ATK of every other character",
        cooldown: [
            18,
            12
        ],
        evolution: 402,
        evolvers: [ 78, 84, 89, 300 ]
    },
    402: {
        special: "Damage received reduced by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        captain: "Damage received reduced by 10%, boosts ATK of Slasher characters by 2x, reduces reduces ATK of every other character",
        cooldown: [
            18,
            12
        ]
    },
    403: {
        special: "Deals several times the character's ATK in QCK damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 150 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Damage received reduced by 50% if HP is low, boosts RCV by 3x if HP is low",
        cooldown: [
            20,
            20
        ]
    },
    404: {
        special: "Damage received reduced by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [
            23,
            14
        ],
        evolution: 405,
        evolvers: [ 117, 84, 89, 95, 100 ]
    },
    405: {
        special: "Damage received reduced by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [
            23,
            14
        ]
    },
    406: {
        special: "Reduces HP to 1, deals 1, 000 damage to all enemies and boosts ATK by 1.2x for 1 turn",
        cooldown: [
            30,
            15
        ]
    },
    407: {
        special: "Randomizes all orbs, deals 7x character's ATK in DEX damage to all enemies",
        cooldown: [
            20,
            10
        ]
    },
    408: {
        special: "Changes own orb into [INT], randomizes every other orb, deals 15x character's ATK in INT damage to all enemies",
        captain: "Damage received reduced by 20%, boosts ATK of Slasher characters by 2x",
        cooldown: [
            23,
            18
        ]
    },
    409: {
        special: "Changes own orb into [QCK] deals 13x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [
            11,
            6
        ],
        evolution: 410,
        evolvers: [ 118, 85, 94, 301, 101 ]
    },
    410: {
        special: "Changes own orb into [QCK] deals 13x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2.5x",
        cooldown: [
            11,
            6
        ]
    },
    411: {
        special: "Changes neighboring slots' orbs into [STR] orbs, deals 1, 000 damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 2x",
        cooldown: [
            20,
            14
        ],
        evolution: 412,
        evolvers: [ 118, 84, 94, 300, 100 ]
    },
    412: {
        special: "Changes neighboring slots' orbs into [STR] orbs, deals 1, 000 damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 2x",
        cooldown: [
            20,
            14
        ]
    },
    413: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [
            20,
            10
        ],
        evolution: 414,
        evolvers: [ 118, 88, 94, 304, 104 ]
    },
    414: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            20,
            10
        ]
    },
    415: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn",
        cooldown: [
            17,
            13
        ],
        evolution: 416,
        evolvers: [ 118, 266, 94, 96, 267 ]
    },
    416: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn",
        cooldown: [
            17,
            13
        ]
    },
    417: {
        special: "Freely switch orbs between slots twice, boosts orbs effectiveness by 2x for 1 turn",
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        cooldown: [
            28,
            14
        ],
        evolution: 418,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    418: {
        special: "Freely switch orbs between slots twice, boosts orbs effectiveness by 2x for 1 turn",
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        cooldown: [
            28,
            14
        ]
    },
    419: {
        special: "Reduces the defense of all enemies by 50% for 2 turns, randomizes all orbs",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            15,
            15
        ]
    },
    420: {
        special: "Reduces Silence duration by 3 turns, deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK, HP and RCV of STR characters by 1.5x",
        cooldown: [
            23,
            13
        ]
    },
    421: {
        special: "Reduces Bind duration by 2 turns, deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK, HP and RCV of DEX characters by 1.5x",
        cooldown: [
            20,
            10
        ]
    },
    422: {
        special: "Damage received from INT enemies reduced by 100% for 1 turn, heals a random amount of HP",
        captain: "Boosts ATK, HP and RCV of INT characters by 1.5x",
        cooldown: [
            20,
            10
        ]
    },
    423: {
        special: "Heals 4, 343 HP, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Prevents death as long as HP is above 70%",
        cooldown: [
            24,
            15
        ],
        evolution: 424,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    424: {
        special: "Heals 4, 343 HP, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Prevents death as long as HP is above 70%",
        cooldown: [
            24,
            15
        ]
    },
    425: {
        special: "Deals random PSY damage to all enemies",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        cooldown: [
            35,
            18
        ]
    },
    426: {
        special: "Boosts ATK of STR characters by 1.05x for 5 turns",
        captain: "Boosts HP of STR characters by 2x",
        cooldown: [
            17,
            12
        ]
    },
    427: {
        special: "Reduces Bind and Silence duration by 2 turns",
        captain: "Boosts HP of DEX characters by 2x",
        cooldown: [
            21,
            16
        ]
    },
    428: {
        special: "Damage received reduced by 50% for 2 turns",
        captain: "Boosts AATK of PSY characters by 2x",
        cooldown: [
            20,
            15
        ]
    },
    429: {
        special: "Deals 7x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [
            20,
            15
        ]
    },
    430: {
        special: "Boosts orbs effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: [
            14,
            9
        ],
        evolution: 431,
        evolvers: [ 116, 86, 91, 97 ]
    },
    431: {
        special: "Boosts orbs effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK and HP of DEX characters by 1.5x",
        cooldown: [
            14,
            9
        ]
    },
    432: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        cooldown: [
            25,
            18
        ]
    },
    433: {
        special: "Reduces Bind and Silence duration by 1 turn",
        captain: "Boosts ATK by 2x following a chain of QCK > STR > DEX attacks no lower than Good",
        cooldown: [
            16,
            6
        ]
    },
    434: {
        special: "Boosts orbs effectiveness by 1.25x for 3 turns",
        captain: "Boosts ATK by 2x following a chain of PSY > INT > INT attacks no lower than Good",
        cooldown: [
            21,
            11
        ]
    },
    435: {
        special: "Changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        captain: "Boosts ATK by 2x following a chain of INT > PSY > QCK attacks no lower than Good",
        cooldown: [
            12,
            8
        ],
        evolution: 436,
        evolvers: [ 117, 85, 433, 434, 96 ]
    },
    436: {
        special: "Changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        captain: "Boosts ATK by 2.25x following a chain of INT > PSY > QCK attacks no lower than Good",
        cooldown: [
            12,
            8
        ]
    },
    437: {
        special: "Recovers 3x character's RCV in HP, damage received reduced by 80% for 1 turn, poisons all enemies",
        captain: "Boosts RCV by 3x if HP is below 30% at the start of the turn",
        cooldown: [
            18,
            18
        ],
        evolution: 438,
        evolvers: [ 118, 80, 86, 94, 97 ]
    },
    438: {
        special: "Recovers 3x character's RCV in HP, damage received reduced by 80% for 1 turn, poisons all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [
            18,
            18
        ]
    },
    439: {
        special: "Changes neighboring slots' orbs into [RCV], randomizes every other orb",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [
            16,
            16
        ],
        evolution: 440,
        evolvers: [ 118, 81, 87, 94, 98 ]
    },
    440: {
        special: "Changes neighboring slots' orbs into [RCV], randomizes every other orb",
        captain: "Recovers 7x character's RCV in HP at the end of the turn",
        cooldown: [
            16,
            16
        ]
    },
    441: {},
    442: {},
    443: {},
    444: {
        captain: "Boosts ATK of Evolver characters by 2x if HP is above 70% at the start of the turn",
        evolution: 445,
        evolvers: [ 441, 442, 443 ]
    },
    445: {
        special: "Changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, freely switch orbs between slots 3 times",
        captain: "Boosts ATK of Evolver characters by 2.5x if HP is above 70% at the start of the turn",
        cooldown: [
            26,
            17
        ]
    },
    446: {
        special: "Deals 10 times the damage received in the previous turn in type-less damage to all enemies",
        captain: "Doubles damage received, boosts ATK of STR characters by 2 and their HP by 1.5x",
        cooldown: [
            30,
            15
        ],
        evolution: 447,
        evolvers: [ 118, 266, 89, 300, 100 ]
    },
    447: {
        special: "Deals 10 times the damage received in the previous turn in type-less damage to all enemies",
        captain: "Doubles damage received, boosts ATK of STR characters by 2.5 and their HP by 2.25x",
        cooldown: [
            30,
            15
        ]
    },
    448: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            16,
            10
        ],
        evolution: 449,
        evolvers: [ 118, 83, 85, 301, 101 ]
    },
    449: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [
            16,
            10
        ]
    },
    450: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals DEX damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        cooldown: [
            25,
            18
        ],
        evolution: 451,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    451: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals DEX damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        cooldown: [
            25,
            18
        ]
    },
    452: {
        special: "Changes own orb and the captain's orb into [PSY]",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x",
        cooldown: [
            16,
            10
        ],
        evolution: 453,
        evolvers: [ 118, 83, 87, 303, 103 ]
    },
    453: {
        special: "Changes own orb and the captain's orb into [PSY]",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x",
        cooldown: [
            16,
            10
        ]
    },
    454: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        cooldown: [
            25,
            18
        ],
        evolution: 455,
        evolvers: [ 118, 83, 84, 300, 100 ]
    },
    455: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        cooldown: [
            25,
            18
        ]
    },
    456: {
        special: "Changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, freely switch orbs between slots once",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [
            18,
            10
        ],
        evolution: 457,
        evolvers: [ 118, 83, 88, 304, 104 ]
    },
    457: {
        special: "Changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, freely switch orbs between slots once",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [
            18,
            10
        ]
    },
    458: {
        special: "Deals random PSY damage to all enemies, boosts ATK by 1.5x",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x",
        cooldown: 28,
        evolution: 459,
        evolvers: [ 118, 266, 94, 98, 267 ]
    },
    459: {
        special: "Deals random PSY damage to all enemies, boosts ATK by 1.5x",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x",
        cooldown: 28
    },
    460: {
        special: "Heals 33 HP after the end of each turn for 999 turns, delays all enemies for 1 turn",
        captain: "Damage received reduced by 10%",
        cooldown: [
            14,
            10
        ]
    },
    461: {
        special: "Changes own orb into [DEX], randomizes every other orb, boosts ATK of Fighter characters by 1.25x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [
            25,
            15
        ],
        evolution: 462,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    462: {
        special: "Changes own orb into [DEX], randomizes every other orb, boosts ATK of Fighter characters by 1.25x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [
            25,
            15
        ]
    },
    463: {
        special: "Empties all slots, deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [
            25,
            20
        ]
    },
    464: {
        special: "Deals 20x character's ATK in INT damage to all enemies",
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        cooldown: [
            20,
            15
        ]
    },
    465: {
        special: "Deals 20x character's ATK in QCK damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Boosts ATK by 3x after scoring 4 hits no lower than Good in a row",
        cooldown: [
            25,
            18
        ]
    },
    466: {
        special: "Delays all enemies for 1 turn",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    467: {
        special: "Changes [RCV] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 1.5x",
        cooldown: [
            15,
            10
        ]
    },
    468: {
        special: "Boosts RCV by 1.5x for 1 turn",
        cooldown: 25,
        evolution: 470,
        evolvers: [ 116, 81, 98 ]
    },
    469: {
        special: "Freely switch orbs between slots once",
        cooldown: 18,
        evolution: 471,
        evolvers: [ 116, 82, 99 ]
    },
    470: {
        special: "Boosts RCV by 1.5x for 1 turn",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: 25
    },
    471: {
        special: "Freely switch orbs between slots once",
        cooldown: 18
    },
    472: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        cooldown: [
            20,
            15
        ]
    },
    473: {
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        cooldown: 20
    },
    474: {
        special: "Deals 5x character's ATK in DEX damage to all enemies, reduces Bind duration by 1 turn",
        cooldown: [
            25,
            15
        ]
    },
    475: {
        special: "Deals 5x character's ATK in STR damage to all enemies, heals 500 HP",
        cooldown: [
            25,
            15
        ]
    },
    476: {
        special: "Deals 1, 000 damage to one enemy",
        cooldown: 20
    },
    477: {
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 482,
        evolvers: [ 116, 84, 89, 95 ]
    },
    478: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 483,
        evolvers: [ 116, 85, 90, 96 ]
    },
    479: {
        special: "Changes [INT] orbs into [DEX] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 484,
        evolvers: [ 116, 86, 91, 97 ]
    },
    480: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 485,
        evolvers: [ 116, 87, 92, 98 ]
    },
    481: {
        special: "Changes [DEX] orbs into [INT] orbs",
        cooldown: [
            15,
            7
        ],
        evolution: 486,
        evolvers: [ 116, 88, 93, 99 ]
    },
    482: {
        special: "Changes [DEX] orbs into [STR] orbs",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [
            15,
            7
        ]
    },
    483: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: [
            15,
            7
        ]
    },
    484: {
        special: "Changes [INT] orbs into [DEX] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: [
            15,
            7
        ]
    },
    485: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        captain: "Boosts HP and RCV of PSY characters by 1.2x",
        cooldown: [
            15,
            7
        ]
    },
    486: {
        special: "Changes [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [
            15,
            7
        ]
    },
    487: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        cooldown: [
            25,
            15
        ],
        evolution: 490,
        evolvers: [ 115, 300 ]
    },
    488: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        cooldown: [
            25,
            15
        ],
        evolution: 491,
        evolvers: [ 116, 301 ]
    },
    489: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        cooldown: [
            25,
            15
        ],
        evolution: 492,
        evolvers: [ 117, 302 ]
    },
    490: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        captain: "Boosts ATK and HP of Striker characters by 1.2x",
        cooldown: [
            25,
            15
        ]
    },
    491: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        captain: "Boosts RCV of Striker characters by 1.5x",
        cooldown: [
            25,
            15
        ]
    },
    492: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        captain: "Boosts ATK of DEX characters by 1.2x",
        cooldown: [
            25,
            15
        ]
    },
    493: {
        special: "Recovers 7x character's RCV in HP",
        cooldown: [
            20,
            15
        ],
        evolution: 495,
        evolvers: [ 117, 81, 87 ]
    },
    494: {
        special: "Deals 3x character's ATK in INT damage toc all enemies, poisons all enemies",
        cooldown: [
            20,
            15
        ],
        evolution: 496,
        evolvers: [ 117, 82, 88 ]
    },
    495: {
        special: "Recovers 7x character's RCV in HP",
        captain: "Recovers 500 HP at the end of the turn",
        cooldown: [
            20,
            15
        ]
    },
    496: {
        special: "Deals 3x character's ATK in INT damage to all enemies, poisons all enemies",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [
            20,
            15
        ]
    },
    497: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [
            11,
            1
        ],
        evolution: 498,
        evolvers: [ 90, 94, 96, 301, 101 ]
    },
    498: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [
            11,
            1
        ]
    },
    499: {
        special: "Delays all enemies by 1 turn",
        captain: "Boosts RCV of Shooter characters by 1.5x",
        cooldown: [
            13,
            9
        ],
        evolution: 500,
        evolvers: [ 117, 80, 97, 94 ]
    },
    500: {
        special: "Delays all enemies by 1 turn",
        captain: "Boosts RCV of Shooter characters by 2x",
        cooldown: [
            13,
            9
        ]
    },
    501: {
        special: "Recovers 5x character's RCV in HP at the end of the turn for 4 turns",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.2x",
        cooldown: [
            21,
            16
        ],
        evolution: 502,
        evolvers: [ 117, 87, 92, 94 ]
    },
    502: {
        special: "Recovers 5x character's RCV in HP at the end of the turn for 4 turns",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.5x",
        cooldown: [
            21,
            16
        ]
    },
    503: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        captain: "Boosts HP of INT characters by 1.5x",
        cooldown: [
            20,
            15
        ],
        evolution: 504,
        evolvers: [ 117, 82, 88, 104 ]
    },
    504: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        captain: "Boosts HP of INT characters by 2x",
        cooldown: [
            20,
            15
        ]
    },
    505: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        captain: "Prevents death as long as HP is above 30%",
        cooldown: [
            21,
            15
        ],
        evolution: 506,
        evolvers: [ 116, 79, 85, 266 ]
    },
    506: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        captain: "Prevents death as long as HP is above 30%",
        cooldown: [
            21,
            15
        ]
    },
    507: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 1.2x",
        cooldown: 25,
        evolution: 508,
        evolvers: [ 116, 89, 95, 300 ]
    },
    508: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 1.5x",
        cooldown: 25
    },
    509: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5 for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [
            24,
            14
        ],
        evolution: 510,
        evolvers: [ 117, 85, 96, 96, 301 ]
    },
    510: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5 for 1 turn",
        captain: "Damage received reduced by 10%, boosts ATK of Striker characters by 2x",
        cooldown: [
            24,
            14
        ]
    },
    511: {
        special: "Damage received reduced by 30% for 2 turns, boosts ATK of Slasher character by 1.25 for 2 turns",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [
            22,
            17
        ]
    },
    512: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [
            15,
            15
        ],
        evolution: 513,
        evolvers: [ 115, 116, 117, 118, 81 ]
    },
    513: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        captain: "Prevents death as long as HP is above 50%, boosts ATK of PSY characters by 1.5x if HP is above 50% at the start of the turn",
        cooldown: [
            15,
            15
        ]
    },
    514: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn, reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [
            14,
            14
        ]
    },
    515: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], freely switch orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x",
        cooldown: [
            24,
            11
        ],
        evolution: 516,
        evolvers: [ 118, 87, 266, 303, 103 ]
    },
    516: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], freely switch orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x, heals a bit of HP at the end of the turn",
        cooldown: [
            24,
            11
        ]
    },
    517: {
        special: "Empties all slots with [RCV] orbs, boosts ATK by 5% for 2 turns",
        captain: "Boosts HP of PSY characters by 1.5x",
        cooldown: [
            10,
            5
        ],
        evolution: 518,
        evolvers: [ 116, 81, 98 ]
    },
    518: {
        special: "Empties all slots with [RCV] orbs, boosts ATK by 5% for 2 turns",
        captain: "Boosts HP of PSY characters by 2x, boosts chances of getting [RCV] orbs",
        cooldown: [
            10,
            5
        ]
    },
    519: {
        special: "Reduce current HP by 99%, deals 25x character's ATK in fixed STR damage to all enemies, boosts ATK of STR characters by 2x",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [
            25,
            18
        ],
        evolution: 520,
        evolvers: [ 118, 84, 95, 94, 100 ]
    },
    520: {
        special: "Reduce current HP by 99%, deals 25x character's ATK in fixed STR damage to all enemies, boosts ATK of STR characters by 2x",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK of STR characters by 2.5x",
        cooldown: [
            25,
            18
        ]
    },
    521: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 100 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Damage received reduced by 80% if HP is above 99% at the start of the turn",
        cooldown: [
            25,
            17
        ],
        evolution: 522,
        evolvers: [ 118, 83, 88, 94, 104 ]
    },
    522: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 100 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Damage received reduced by 80% if HP is above 99% at the start of the turn",
        cooldown: [
            25,
            17
        ]
    },
    523: {
        special: "Randomizes all orbs, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        cooldown: [
            23,
            16
        ],
        evolution: 524,
        evolvers: [ 118, 85, 96, 301, 101 ]
    },
    524: {
        special: "Randomizes all orbs, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        cooldown: [
            23,
            16
        ]
    },
    525: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [
            23,
            16
        ],
        evolution: 526,
        evolvers: [ 118, 92, 94, 98, 303 ]
    },
    526: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        captain: "Boosts ATK of PSY characters by 2x, damage received from INT enemies reduced by 30%",
        cooldown: [
            23,
            16
        ]
    },
    527: {
        special: "Removes poison, recovers 15x character's RCV in HP",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        cooldown: [
            23,
            17
        ],
        evolution: 528,
        evolvers: [ 118, 86, 266, 97, 302 ]
    },
    528: {
        special: "Removes poison, recovers 15x character's RCV in HP",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [
            23,
            17
        ]
    },
    529: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        captain: "Boosts chances of getting [PSY] orbs, greatly boosts ATK of PSY characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 25,
        evolution: 530,
        evolvers: [ 118, 87, 266, 98, 267 ]
    },
    530: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        captain: "Boosts chances of getting [PSY] orbs, greatly boosts ATK of PSY characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 25
    },
    531: {
        special: "Damage received reduced by 30% for 4 turns",
        captain: "Damage received by STR, DEX and QCK enemies reduced by 30%",
        cooldown: [
            16,
            16
        ],
        evolution: 532,
        evolvers: [ 117, 80, 86, 91, 97 ]
    },
    532: {
        special: "Damage received reduced by 30% for 4 turns",
        captain: "Damage received by STR, DEX and QCK enemies reduced by 30%",
        cooldown: [
            16,
            16
        ]
    },
    533: {
        special: "Boosts orbs effectiveness by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            18,
            18
        ],
        evolution: 534,
        evolvers: [ 118, 79, 85, 96, 101 ]
    },
    534: {
        special: "Boosts orbs effectiveness by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            18,
            18
        ]
    },
    535: {
        special: "Damage received reduced by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts RCV of QCK characters by 1.5x",
        cooldown: [
            16,
            16
        ],
        evolution: 536,
        evolvers: [ 118, 80, 86, 91, 97 ]
    },
    536: {
        special: "Damage received reduced by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts RCV of QCK characters by 2x",
        cooldown: [
            16,
            16
        ]
    },
    537: {
        special: "Reduces Bind and Silence duration by 1 turn, locks all orbs for 1 turn",
        captain: "Boosts chain multiplier by 2x",
        cooldown: [
            25,
            16
        ],
        evolution: 538,
        evolvers: [ 117, 81, 92, 98, 103 ]
    },
    538: {
        special: "Reduces Bind and Silence duration by 1 turn, locks all orbs for 1 turn",
        captain: "Boosts chain multiplier by 2x, recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [
            25,
            16
        ]
    },
    539: {
        special: "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
        cooldown: [
            50,
            20
        ]
    },
    540: {
        special: "Boosts chances of getting [DEX] orbs for 2 turns",
        cooldown: [
            16,
            12
        ]
    },
    541: {
        special: "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 turns",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 50% at the start of the turn",
        cooldown: 15
    },
    542: {
        special: "Boosts RCV by 2x for 1 turn",
        captain: "Boosts HP by 1.5x",
        cooldown: 18
    },
    543: {
        special: "Reduces current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x, reduces RCV by 100%",
        cooldown: [
            25,
            20
        ],
        evolution: 544,
        evolvers: [ 117, 86, 97, 102 ]
    },
    544: {
        special: "Reduces current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of Shooter characters by 2.25x, their HP by 1.5x and reduces RCV by 100%",
        cooldown: [
            25,
            20
        ]
    },
    545: {
        special: "Deals 6, 000 damage to all enemies, boosts ATK of PSY characters by 1.5 for 1 turn",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [
            32,
            17
        ],
        evolution: 546,
        evolvers: [ 118, 266, 92, 303, 103 ]
    },
    546: {
        special: "Deals 6, 000 damage to all enemies, boosts ATK of PSY characters by 1.5 for 1 turn",
        captain: "Boosts ATK of PSY characters by 2x, damage received reduced by 20%",
        cooldown: [
            32,
            17
        ]
    },
    547: {
        special: "Reduces current HP by 10%, deals 1x character's ATK in STR damage to one enemy, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts chances of getting [RCV] orbs",
        cooldown: [
            18,
            18
        ],
        evolution: 548,
        evolvers: [ 118, 78, 78, 84, 84 ]
    },
    548: {
        special: "Reduces current HP by 10%, deals 1x character's ATK in STR damage to one enemy, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts chances of getting [RCV] orbs, boosts ATK by 1.2x",
        cooldown: [
            18,
            18
        ]
    },
    549: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        captain: "Boosts ATK by 2x after scoring 3 Perfects in a row",
        cooldown: [
            20,
            10
        ],
        evolution: 550,
        evolvers: [ 117, 82, 88, 99, 104 ]
    },
    550: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        cooldown: [
            20,
            10
        ]
    },
    551: {
        special: "Damage received reduced by 50% for 1 turn, deals 15x character's ATK in STR damage to one enemy",
        cooldown: [
            45,
            15
        ]
    },
    552: {
        special: "Reduces all enemies' defense by 100% for 1 turn",
        cooldown: [
            33,
            18
        ]
    },
    553: {
        special: "Changes neighboring slots' orbs into [DEX], deals 1, 000 damage to all enemies",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        cooldown: 20,
        evolution: 554,
        evolvers: [ 118, 83, 97, 302, 102 ]
    },
    554: {
        special: "Changes neighboring slots' orbs into [DEX], deals 1, 000 damage to all enemies",
        captain: "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
        cooldown: 20
    },
    555: {
        special: "Delays all enemies for 3 turns, cuts all enemies' current HP by 10%",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [
            21,
            14
        ],
        evolution: 556,
        evolvers: [ 118, 83, 96, 301, 101 ]
    },
    556: {
        special: "Delays all enemies for 3 turns, cuts all enemies' current HP by 10%",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [
            21,
            14
        ]
    },
    557: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        cooldown: [
            16,
            10
        ],
        evolution: 558,
        evolvers: [ 118, 88, 94, 304, 104 ]
    },
    558: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        cooldown: [
            16,
            10
        ]
    },
    559: {
        special: "Changes own orb into [STR], boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of the turn",
        cooldown: [
            17,
            11
        ],
        evolution: 560,
        evolvers: [ 118, 83, 84, 300, 100 ]
    },
    560: {
        special: "Changes own orb into [STR], boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of the turn",
        cooldown: [
            17,
            11
        ]
    },
    561: {
        special: "Reduces current HP by 40% and deals 15x the amount of HP subtracted in type-less damage to all enemies, locks all orbs for 1 turn",
        captain: "Boosts ATK of Shooter characters by 3x if they have a matching orb, by 2x otherwise",
        cooldown: 22,
        evolution: 562,
        evolvers: [ 118, 86, 266, 302, 267 ]
    },
    562: {
        special: "Reduces current HP by 40% and deals 15x the amount of HP subtracted in type-less damage to all enemies, locks all orbs for 1 turn",
        captain: "Boosts ATK of Shooter characters by 3x if they have a matching orb, by 2x otherwise",
        cooldown: 22
    },
    563: {
        special: "Deal small PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
        cooldown: 15
    },
    564: {
        special: "Reduces Bind duration by 2 turns",
        cooldown: 16
    },
    565: {
        special: "Deals 5, 000 damage to one enemy",
        cooldown: 18
    },
    566: {
        special: "Empties all slots with hindrance orbs",
        cooldown: 14
    },
    567: {
        special: "Reduces Bind and Silence duration by 1 turn, deals STR damage to all enemies",
        cooldown: 23
    },
    568: {
        special: "Delays all enemies for 2 turns, freely switch orbs between slots twice",
        captain: "Boosts ATK, HP and RCV by 1.25x",
        cooldown: 25,
        evolution: 569,
        evolvers: [ 117, 83, 88, 93, 99 ]
    },
    569: {
        special: "Delays all enemies for 2 turns, freely switch orbs between slots twice",
        captain: "Boosts ATK, HP and RCV by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        cooldown: 25
    },
    570: {
        special: "Changes hindrance orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus.",
        cooldown: [
            25,
            14
        ],
        evolution: 571,
        evolvers: [ 170, 142, 184, 237, 572 ]
    },
    571: {
        special: "Changes hindrance orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus.",
        cooldown: [
            25,
            14
        ]
    },
    572: {
        special: "Boosts ATK of Fighter characters by 2x for 1 turn, binds himself for 15 turn",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [
            30,
            15
        ]
    },
    573: {
        special: "Reduces Silence duration by 2 turns, recovers 10x character's RCV in HP",
        captain: "Boosts RCV by 1.2x",
        cooldown: [
            20,
            15
        ]
    },
    574: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [
            33,
            18
        ],
        evolution: 575,
        evolvers: [ 118, 88, 266, 304, 104 ]
    },
    575: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        captain: "Boosts ATK and HP of Striker characters by 2x",
        cooldown: [
            33,
            18
        ]
    },
    576: {
        special: "Changes [PSY] orbs into [INT] orbs, boosts RCV by 1.5x for 1 turn",
        captain: "Boosts ATK by 1.5x, RCV by 1.2x",
        cooldown: [
            12,
            12
        ]
    },
    577: {
        special: "Deals random type-less damage to all enemies, changes own orb into [STR]",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits",
        cooldown: 23,
        evolution: 578,
        evolvers: [ 118, 266, 95, 300, 267 ]
    },
    578: {
        special: "Deals random type-less damage to all enemies, changes own orb into [STR]",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits",
        cooldown: 23
    },
    579: {
        special: "Changes hindrance orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK and DEX characters by 1.5x",
        cooldown: 20,
        evolution: 580,
        evolvers: [ 117, 85, 86, 96, 97 ]
    },
    580: {
        special: "Changes hindrance orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK and DEX characters by 2x",
        cooldown: 20
    },
    581: {
        special: "Cuts all enemies' current HP by 7%",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            20,
            11
        ]
    },
    582: {
        special: "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK character by 1.5x for 1 turn",
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        cooldown: [
            26,
            17
        ]
    },
    583: {
        special: "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 units for 3 turns",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        cooldown: [
            21,
            10
        ]
    },
    584: {
        special: "Damage received from PSY enemies reduced by 100% for 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, greatly reduces ATK, HP and RCV",
        cooldown: [
            22,
            8
        ]
    },
    585: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: 20,
        evolution: 586,
        evolvers: [ 116, 87, 92, 98 ]
    },
    586: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        captain: "Boosts HP and RCV of PSY characters by 1.5x",
        cooldown: 20
    },
    587: {
        special: "Removes poison, reduces Bind and Seal duration by 2 turns",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        cooldown: 21,
        evolution: 588,
        evolvers: [ 117, 304 ]
    },
    588: {
        special: "Removes poison, reduces Bind and Seal duration by 2 turns",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: 21
    },
    589: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        captain: "Boosts ATK by 1.5x, reduces HP and RCV by 80%",
        cooldown: 20,
        evolution: 590,
        evolvers: [ 116, 117, 79, 85 ]
    },
    590: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        captain: "Boosts ATK by 2x, reduces HP and RCV by 80%",
        cooldown: 20
    },
    591: {},
    592: {},
    593: {},
    594: {},
    595: {},
    596: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of one enemy by 50% for 3 turns",
        captain: "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of the turn",
        cooldown: 20,
        evolution: 597,
        evolvers: [ 117, 78, 84, 89, 95 ]
    },
    597: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of one enemy by 50% for 3 turns",
        captain: "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of the turn",
        cooldown: 20
    },
    598: {
        special: "Changes own orb into [INT], freely move orbs between slots once",
        captain: "Boosts ATK of characters with fewer than 3 stars by 2.5x",
        cooldown: [
            16,
            6
        ],
        evolution: 599,
        evolvers: [ 117, 82, 82, 88, 88 ]
    },
    599: {
        special: "Changes own orb into [INT], freely move orbs between slots once",
        captain: "Boosts ATK of characters with fewer than 3 stars by 3x",
        cooldown: [
            16,
            6
        ]
    },
    600: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [
            18,
            10
        ],
        evolution: 601,
        evolvers: [ 117, 81, 87, 98, 103 ]
    },
    601: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [
            18,
            10
        ]
    },
    602: {
        special: "Reduces current HP by 90%, deals 20, 000 damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [
            32,
            17
        ],
        evolution: 603,
        evolvers: [ 118, 266, 96, 301, 101 ]
    },
    603: {
        special: "Reduces current HP by 90%, deals 20, 000 damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        captain: "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [
            32,
            17
        ]
    },
    604: {
        special: "Cuts all enemies' current HP by 10%, changes [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 18,
        evolution: 605,
        evolvers: [ 117, 86, 97, 97, 302 ]
    },
    605: {
        special: "Cuts all enemies' current HP by 10%, changes [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2x, damage received reduced by 20%",
        cooldown: 18
    },
    606: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts ATK of Fighter characters by 2x if HP is below 50% at the start of the turn",
        cooldown: [
            23,
            13
        ],
        evolution: 607,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    607: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is below 50% at the start of the turn",
        cooldown: [
            23,
            13
        ]
    },
    608: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        cooldown: [
            14,
            7
        ]
    },
    609: {
        special: "Changes the captain's orb into [RCV], randomizes every other orb",
        cooldown: [
            15,
            8
        ]
    },
    610: {
        special: "Changes [TND] orbs into [RCV] orbs",
        cooldown: 15
    },
    611: {
        special: "Changes neighboring slots' orbs into [RCV]",
        cooldown: 18
    },
    612: {
        special: "Boosts ATK and RCV by 45 units for 1 turn, damage received reduced by 45% for 1 turn",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: 13,
        evolution: 613,
        evolvers: [ 91, 94, 97, 97, 302 ]
    },
    613: {
        special: "Boosts ATK and RCV by 45 units for 1 turn, damage received reduced by 45% for 1 turn",
        captain: "Boosts ATK, HP and RCV of Slasher characters by 1.5x",
        cooldown: 13
    },
    614: {
        special: "Reduces the defense of all enemies by 50% for 1 turn, deals 10x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of characters with cost 20 or less by 2.25x if HP is below 30% at the start of the turn",
        cooldown: 23
    },
    615: {
        special: "Deals random STR damage to one enemy",
        cooldown: 20
    },
    616: {
        special: "Changes the captain's orb into STR",
        cooldown: 13
    },
    617: {
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        cooldown: 18
    },
    618: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        cooldown: [
            33,
            18
        ]
    },
    619: {
        special: "Cuts all enemies' current HP by 5%",
        cooldown: 25
    },
    620: {
        special: "Changes [INT] orbs into [QCK] orbs",
        cooldown: [
            15,
            7
        ]
    },
    621: {
        special: "Changes [INT] orbs into [STR] orbs",
        cooldown: [
            15,
            7
        ]
    },
    622: {
        special: "Boosts RCV by 100 units for 3 turns",
        cooldown: [
            20,
            10
        ]
    },
    623: {
        special: "Recovers 3x character's RCV in HP at the end of the turn for 5 turns",
        cooldown: [
            28,
            18
        ]
    },
    624: {
        special: "Boosts chances of getting [PSY] orbs for 3 turns",
        cooldown: [
            25,
            15
        ]
    },
    625: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        cooldown: [
            25,
            15
        ]
    },
    626: {
        special: "Deals 13x character's ATK in INT damage to all enemies",
        cooldown: [
            35,
            18
        ]
    },
    627: {
        special: "Randomizes all orbs",
        cooldown: [
            18,
            8
        ]
    },
    628: {
        special: "Deals 15, 000 damage to one enemy",
        cooldown: 20
    },
    629: {
        special: "Empties all slots with hindrance orbs, deals random INT damage to all enemies",
        captain: "Boosts ATK of characters with 3 or fewer stars by 2x",
        cooldown: 23
    },
    630: {
        special: "Changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: 25,
        evolution: 631,
        evolvers: [ 117, 90, 96, 301, 101 ]
    },
    631: {
        special: "Changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: 25
    },
    632: {
        special: "Changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: 25,
        evolution: 633,
        evolvers: [ 117, 89, 95, 300, 100 ]
    },
    633: {
        special: "Changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 25
    },
    634: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs, boosts ATK of QCK and PSY characters by 1.2x",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x",
        cooldown: [
            25,
            16
        ],
        evolution: 635,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    635: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs, boosts ATK of QCK and PSY characters by 1.2x",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x",
        cooldown: [
            25,
            16
        ]
    },
    636: {
        special: "Binds himself for 3 turns, damage received reduced by 50% for 3 turns, heals a small amount of HP at the end of the turn for 3 turns",
        captain: "Boosts ATK of characters with cost 2 or less by 3x",
        cooldown: [
            23,
            15
        ]
    },
    637: {
        special: "Cuts all enemies' current HP by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        captain: "Recovers 618 HP at the end of the turn, boosts ATK of Slasher characters by 1.5x",
        cooldown: [
            25,
            12
        ]
    },
    638: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        cooldown: 20,
        evolution: 639,
        evolvers: [ 118, 83, 96, 301, 101 ]
    },
    639: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Slasher characters by 2x",
        cooldown: 20
    },
    640: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 50 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of the turn",
        cooldown: 23,
        evolution: 641,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    641: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 50 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of the turn",
        cooldown: 23
    },
    642: {
        special: "Reduces current HP by 30%, deals 10x character's ATK in PSY damage to one enemy, boosts orb effectiveness by 1.75x for 1 turn",
        captain: "Boosts ATK of PSY characters by 2.5x if HP is below 30% at the start of the turn",
        cooldown: 21,
        evolution: 643,
        evolvers: [ 118, 92, 94, 303, 103 ]
    },
    643: {
        special: "Reduces current HP by 30%, deals 10x character's ATK in PSY damage to one enemy, boosts orb effectiveness by 1.75x for 1 turn",
        captain: "Boosts ATK of PSY characters by 3x if HP is below 30% at the start of the turn",
        cooldown: 21
    },
    644: {
        special: "Reduces Bind and Silence duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: 18,
        evolution: 645,
        evolvers: [ 118, 94, 99, 304, 104 ]
    },
    645: {
        special: "Reduces Bind and Silence duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        captain: "Boosts ATK of INT characters by 2.5x",
        cooldown: 18
    },
    646: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        captain: "Boosts ATK of Shooter characters by 2.5x if HP is below 30% at the start of the turn",
        cooldown: 25,
        evolution: 647,
        evolvers: [ 118, 84, 266, 95, 100 ]
    },
    647: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is below 30% at the start of the turn",
        cooldown: 25
    },
    648: {
        special: "Recovers 100x character's RCV in HP, boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Damage received reduced by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn",
        cooldown: 25,
        evolution: 649,
        evolvers: [ 118, 85, 266, 301, 267 ]
    },
    649: {
        special: "Recovers 100x character's RCV in HP, boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Damage received reduced by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn",
        cooldown: 25
    },
    650: {
        special: "Deals 5, 000 damage to one enemy, boost orb effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x",
        cooldown: 15,
        evolution: 651,
        evolvers: [ 117, 83, 88, 93, 104 ]
    },
    651: {
        special: "Deals 5, 000 damage to one enemy, boost orb effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x",
        cooldown: 15
    },
    652: {
        special: "Cuts all enemies' current HP by 20%, damage received reduced by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs",
        cooldown: [
            28,
            14
        ],
        evolution: 653,
        evolvers: [ 116, 117, 80, 91, 97 ]
    },
    653: {
        special: "Cuts all enemies' current HP by 20%, damage received reduced by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs",
        cooldown: [
            28,
            14
        ],
        evolution: [ 654, 654 ],
        evolvers: [ [ 118, 86, 266, 97, 102 ], [ 18 ] ]
    },
    654: {
        special: "Cuts all enemies' current HP by 20%, damage received reduced by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs",
        cooldown: [
            28,
            14
        ]
    },
    655: {
        special: "Changes empty slots and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [
            24,
            15
        ],
        evolution: 656,
        evolvers: [ 117, 78, 84, 95, 100 ]
    },
    656: {
        special: "Changes empty slots and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of STR characters by 2x",
        cooldown: [
            24,
            15
        ]
    },
    657: {
        special: "Changes [INT] and [PSY] orbs into either [STR] orbs or empty slots",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [
            20,
            10
        ]
    },
    658: {
        special: "Changes all orbs into either [INT] or [PSY] orbs",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [
            30,
            17
        ]
    },
    659: {
        special: "Reduces Bind and Silence duration by 2 turns, damage received reduced by 50% for 2 turns",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        cooldown: 20
    },
    660: {
        special: "Delays all enemies for 2 turns, reduces all enemies' defense by 50% for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: 13
    },
    661: {
        special: "Delays all enemies for 2 turns, reduces all enemies' defense by 50% for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x, reduces cooldown of all specials by 1 turn at the start of the fight",
        cooldown: 13
    },
    662: {
        special: "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [
            15,
            15
        ]
    }
};
