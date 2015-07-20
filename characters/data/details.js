var details = {
    1: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        evolvers: [ 78 ],
        evolution: 2,
        cooldown: 3
    },
    2: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        evolvers: [ 115, 78 ],
        evolution: 3,
        cooldown: 12
    },
    3: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        evolvers: [ 117, 84, 95, 100 ],
        evolution: 4,
        cooldown: 23
    },
    4: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [ 25, 18 ]
    },
    5: {
        special: "Deals 7x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        evolvers: [ [ 115, 80 ], [ 116, 80, 97 ] ],
        evolution: [ 6, 7 ],
        cooldown: 12
    },
    6: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        evolvers: [ 117, 86, 97, 102 ],
        evolution: 8,
        cooldown: 15
    },
    7: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        evolvers: [ 117, 80, 102 ],
        evolution: 8,
        cooldown: 15
    },
    8: {
        special: "Deals 15x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK and HP of DEX characters by 2x",
        cooldown: [ 25, 20 ]
    },
    9: {
        special: "Heals 1,000 HP",
        captain: "Damage received from INT enemies reduced by 20%",
        evolvers: [ [ 115, 82 ], [ 116, 82, 99 ] ],
        evolution: [ 10, 11 ],
        cooldown: 12
    },
    10: {
        special: "Deals 15x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of INT characters by 1.5x",
        evolvers: [ 117, 88, 99, 104 ],
        evolution: 12,
        cooldown: 23
    },
    11: {
        special: "Neutralize INT attacks for 1 turn",
        captain: "Boosts ATK of INT characters by 1.5x",
        evolvers: [ 117, 82, 104 ],
        evolution: 12,
        cooldown: [ 15, 8 ]
    },
    12: {
        special: "Deals 15x character's ATK in INT damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 1.5x",
        cooldown: [ 25, 20 ]
    },
    13: {
        special: "Delays all enemies for 1 turn",
        captain: "Boosts ATK of Shooter characters by 1.2x",
        evolvers: [ [ 115, 81 ], [ 115, 81, 98 ] ],
        evolution: [ 14, 15 ],
        cooldown: 15
    },
    14: {
        special: "Delays all enemies for 2 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        evolvers: [ 117, 87, 98, 103 ],
        evolution: 16,
        cooldown: [ 15, 10 ]
    },
    15: {
        special: "Delays all enemies for 3 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        evolvers: [ 117, 81, 103 ],
        evolution: 16,
        cooldown: [ 15, 10 ]
    },
    16: {
        special: "Delays all enemies for 3 turns and deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    17: {
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        evolvers: [ [ 115, 79 ], [ 116, 79, 96 ] ],
        evolution: [ 18, 19 ],
        cooldown: 23
    },
    18: {
        special: "Reduces all enemies 'defense by 50% for 2 turns",
        captain: "Boosts HP of QCK characters by 1.5x",
        evolvers: [ 117, 85, 96, 101 ],
        evolution: 20,
        cooldown: 15
    },
    19: {
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        evolvers: [ 117, 79, 101 ],
        evolution: 20,
        cooldown: 23
    },
    20: {
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    21: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of PSY characters by 1.2x",
        evolvers: [ [ 116, 81, 98 ], [ 116, 82, 99 ], [ 116, 78, 95 ], [ 116, 79, 96 ], [ 116, 80, 97 ] ],
        evolution: [ 22, 23, 24, 25, 26 ],
        cooldown: 15
    },
    22: {
        special: "Deals 15x character's ATK in PSY damage to one enemy",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [ 23, 15 ]
    },
    23: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of INT characters by 1.5x",
        cooldown: [ 15, 8 ]
    },
    24: {
        special: "Reduces all enemies' defense by 50% for 2 turns",
        captain: "Boosts RCV of STR characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    25: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV of QCK characters by 1.5x",
        cooldown: [ 25, 15 ]
    },
    26: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [ 22, 15 ]
    },
    27: {
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        captain: "Boosts HP of QCK characters by 1.2x",
    },
    28: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.2x",
        cooldown: [ 40, 15 ]
    },
    29: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Damage received from STR enemies reduced by 30%",
        evolvers: [ 117, 78, 89, 100 ],
        evolution: 30,
        cooldown: 15
    },
    30: {
        special: "Damage received reduced by 80% for 1 turn",
        captain: "Damage received from STR enemies reduced by 50%",
        cooldown: [ 15 , 9 ]
    },
    31: {
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolvers: [ 115, 81 ],
        evolution: 32
    },
    32: {
        special: "Changes [RCV] orbs into [TND] orbs",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [ 13, 7 ]
    },
    33: {
        captain: "Damage received from INT enemies reduced by 30%",
        evolvers: [ 115, 82 ],
        evolution: 34
    },
    34: {
        special: "Reduces all enemies' defense by 100% for 1 turn",
        captain: "Damage received from INT enemies reduced by 30%",
        cooldown: [ 25, 20 ]
    },
    35: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Slasher characters by 1.2x",
        evolvers: [ 116, 78, 89 ],
        cooldown: [ 15, 9 ]
    },
    36: {
        special: "Deals 5x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    37: {
        special: "Deals 5x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    38: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.5x",
        evolvers: [ 116, 82, 93 ],
        evolution: 39,
        cooldown: [ 13, 7 ]
    },
    39: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 13, 7 ]
    },
    40: {
        special: "Changes neighboring orbs into [RCV] orbs",
        captain: "Damage received from Shooter enemies reduced by 30%",
        cooldown: [ 15, 8 ]
    },
    41: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts RCV of INT characters by 1.2x",
        cooldown: [ 13, 10 ]
    },
    42: {
        special: "Deals 3x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 1.2x",
        cooldown: [ 10, 5 ]
    },
    43: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Damage received reduced by 10%",
        evolvers: [ 116, 87, 92 ],
        cooldown: 13
    },
    44: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: [ 13, 7 ]
    },
    45: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.2x",
        evolvers: [ 117, 79, 90, 101 ],
        evolution: 46,
        cooldown: 15
    },
    46: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 15, 8 ]
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
        evolvers: [ 116, 78, 89 ],
        cooldown: [ 15, 10 ]
    },
    50: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
    },
    51: {
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
    },
    52: {
        special: "Changes [STR] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2.5x",
        cooldown: [ 13, 7 ]
    },
    53: {
        captain: "Damage received from QCK enemies reduced by 30%",
        evolvers: [ 116, 79, 90 ],
        evolution: 54
    },
    54: {
        special: "Deals 7x character's ATK in QCK damage to one enemy",
        captain: "Damage received from QCK enemies reduced by 50%",
        cooldown: [ 15, 9 ]
    },
    55: {
        captain: "Damage received from STR enemies reduced by 30%",
        evolvers: [ 116, 78, 89 ],
        evolution: 56
    },
    56: {
        special: "Changes [RCV] orbs into [STR] orbs",
        captain: "Damage received from STR enemies reduced by 50%",
        cooldown: [ 13, 7 ]
    },
    57: {
        special: "Deals 7x character's ATK in INT damage to one enemy",
        captain: "Damage received reduced by 10%",
        evolvers: [ 117, 82, 93, 104 ],
        evolution: 58,
        cooldown: 15
    },
    58: {
        special: "Poisons all enemies",
        captain: "Damage received reduced by 20%",
        cooldown: [ 15, 12 ]
    },
    59: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.2x",
        cooldown: [ 15, 7 ]
    },
    60: {
        special: "Changes [TND] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    61: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        captain: "Boosts HP of Shooter characters by 1.5x",
        cooldown: [ 15, 8 ]
    },
    62: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Fighter characters by 1.5x",
        cooldown: [ 15, 9 ]
    },
    63: {
        captain: "Damage received from DEX enemies reduced by 30%",
        evolvers: [ 116, 80, 91 ],
        evolution: 64
    },
    64: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Damage received from DEX enemies reduced by 50%",
        cooldown: [ 15, 10 ]
    },
    65: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        evolvers: [ 117, 78, 89, 100 ],
        evolution: 66,
        cooldown: 15
    },
    66: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [ 23, 15 ]
    },
    67: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 1.5x",
        evolvers: [ 117, 83, 79, 85, 96 ],
        evolution: 68,
        cooldown: 25
    },
    68: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 2x",
        cooldown: [ 25, 18 ]
    },
    69: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        evolvers: [ 117, 83, 80, 86, 97 ],
        evolution: 70,
        cooldown: [ 22, 15 ]
    },
    70: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        evolvers: [ 86 ],
        cooldown: [ 22, 15 ]
    },
    71: {
        special: "Damage received reduced by 50% for 1 turn",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolvers: [ 117, 81, 98 ],
        evolution: 72,
        cooldown: [ 17, 10 ]
    },
    72: {
        special: "Randomizes all orbs",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        evolvers: [ 118, 83, 87, 98, 103 ],
        evolution: 73,
        cooldown: [ 12, 6 ]
    },
    73: {
        special: "Randomizes all orbs",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [ 12, 6 ]
    },
    74: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        evolvers: [ 118, 83, 85, 85, 101 ],
        evolution: 75,
        cooldown: 25
    },
    75: {
        special: "Deals 15x character's ATK in QCK to all enemies",
        captain: "Boosts ATK of QCK characters by 2.5x",
        cooldown: 25
    },
    76: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2x",
        evolvers: [ 118, 83, 87, 98, 103 ],
        evolution: 77,
        cooldown: 25
    },
    77: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2.5x",
        cooldown: [ 25, 20 ]
    },
    78: { },
    79: { },
    80: { },
    81: { },
    82: { },
    83: { },
    84: { },
    85: { },
    86: { },
    87: { },
    88: { },
    89: { },
    90: { },
    91: { },
    92: { },
    93: { },
    94: { },
    95: { },
    96: { },
    97: { },
    98: { },
    99: { },
    100: { },
    101: { },
    102: { },
    103: { },
    104: { },
    105: { },
    106: { },
    107: { },
    108: { },
    109: { },
    110: { },
    111: { },
    112: { },
    113: { },
    114: { },
    115: { },
    116: { },
    117: { },
    118: { },
    119: {
        special: "Deals 10x character's ATK in DEX damage to one enemy"
    },
    120: {
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    121: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolvers: [ 89 ],
        evolution: 142
    },
    122: {
        special: "Damage received reduced by 20% for 1 turn",
        evolvers: [ 90 ],
        evolution: 143
    },
    123: {
        special: "Changes [STR] orbs into [DEX] orbs",
        evolvers: [ 91 ],
        evolution: 144,
        cooldown: [ 15, 7 ]
    },
    124: {
        special: "Damage received reduced by 20% for 1 turn",
        evolvers: [ 92 ],
        evolution: 145
    },
    125: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolvers: [ 93 ],
        evolution: 146,
        cooldown: [ 40, 15 ]
    },
    126: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolvers: [ 89 ],
        evolution: 147
    },
    127: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        evolvers: [ 90 ],
        evolution: 148
    },
    128: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        evolvers: [ 91 ],
        evolution: 149,
        cooldown: [ 15, 7 ]
    },
    129: {
        special: "Changes [INT] orbs into [PSY] orbs",
        evolvers: [ 92 ],
        evolution: 150,
        cooldown: [ 15, 7 ]
    },
    130: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolvers: [ 93 ],
        evolution: 151
    },
    131: {
        special: "Changes [RCV] orbs into [STR] orbs",
        evolvers: [ 89 ],
        evolution: 152,
        cooldown: [ 15, 7 ]
    },
    132: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        evolvers: [ 90 ],
        evolution: 153,
        cooldown: [ 15, 7 ]
    },
    133: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        evolvers: [ 91 ],
        evolution: 154,
        cooldown: [ 15, 7 ]
    },
    134: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        evolvers: [ 92 ],
        evolution: 155,
        cooldown: [ 15, 7 ]
    },
    135: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolvers: [ 93 ],
        evolution: 156
    },
    136: {
        special: "Deals 5x character's ATK in STR damage to all enemies",
        evolvers: [ 89 ],
        evolution: 157
    },
    137: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        evolvers: [ 90 ],
        evolution: 158,
        cooldown: [ 15, 7 ]
    },
    138: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        evolvers: [ 91 ],
        evolution: 159,
        cooldown: 13
    },
    139: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        evolvers: [ 92 ],
        evolution: 160,
        cooldown: 13
    },
    140: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        evolvers: [ 93 ],
        evolution: 161,
        cooldown: 15
    },
    141: {
        special: "Damage received reduced by 20% for 1 turn",
        evolvers: [ 115, 93 ],
        evolution: 162,
        cooldown: [ 25, 10 ]
    },
    142: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    143: {
        special: "Damage received reduced by 20% for 1 turn",
    },
    144: {
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    145: {
        special: "Damage received reduced by 20% for 1 turn",
    },
    146: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [ 40, 15 ]
    },
    147: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    148: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
    },
    149: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    150: {
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ]
    },
    151: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    152: {
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    153: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    154: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    155: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [ 15, 7 ]
    },
    156: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    157: {
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    158: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        cooldown: [ 15, 7 ]
    },
    159: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13
    },
    160: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13
    },
    161: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15
    },
    162: {
        special: "Damage received reduced by 20% for 1 turn",
        cooldown: [ 25, 10 ]
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
        cooldown: [ 25, 10 ]
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
        cooldown: [ 40, 15 ]
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
        evolvers: [ 78 ],
        evolution: 184,
        cooldown: [ 13, 7 ]
    },
    180: {
        special: "Recovers 5x character's RCV in HP",
        evolvers: [ 80 ],
        evolution: 185,
        cooldown: [ 12, 8 ]
    },
    181: {
        special: "Changes [STR] orbs into [QCK] orbs",
        evolvers: [ 79 ],
        evolution: 186,
        cooldown: [ 13, 7 ]
    },
    182: {
        special: "Recovers 5x character's RCV in HP",
        evolvers: [ 81 ],
        evolution: 187,
        cooldown: [ 12, 8 ]
    },
    183: {
        special: "Changes [RCV] orbs into [INT] orbs",
        evolvers: [ 115, 82 ],
        evolution: 188,
        cooldown: [ 13, 7 ]
    },
    184: {
        special: "Changes [QCK] orbs into [STR] orbs",
        evolvers: [ 116, 78, 84 ],
        evolution: 194,
        cooldown: [ 15, 7 ]
    },
    185: {
        special: "Recovers 5x character's RCV in HP",
        evolvers: [ 116, 80, 86 ],
        evolution: 195,
        cooldown: [ 12, 8 ]
    },
    186: {
        special: "Changes [STR] orbs into [QCK] orbs",
        evolvers: [ 116, 79, 85 ],
        evolution: 196,
        cooldown: [ 13, 7 ]
    },
    187: {
        special: "Recovers 5x character's RCV in HP",
        evolvers: [ 116, 81, 87 ],
        evolution: 197,
        cooldown: [ 12, 8 ]
    },
    188: {
        special: "Changes [RCV] orbs into [INT] orbs",
        evolvers: [ 116, 117, 82, 88 ],
        evolution: 198,
        cooldown: [ 13, 7 ]
    },
    189: { },
    190: { },
    191: { },
    192: { },
    193: { },
    194: {
        special: "Changes [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    195: {
        special: "Recovers 5x character's RCV in HP",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [ 12, 8 ]
    },
    196: {
        special: "Changes [STR] orbs into [QCK] orbs",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 13, 7 ]
    },
    197: {
        special: "Recovers 5x character's RCV in HP",
        captain: "Damage received from PSY enemies reduced by 20%",
        cooldown: [ 12, 8 ]
    },
    198: {
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 13, 7 ]
    },
    199: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        evolvers: [ 94, 78 ],
        evolution: 200,
        cooldown: 15
    },
    200: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [ 20, 14 ]
    },
    201: {
        captain: "Boosts HP of Fighter characters by 1.5x",
        evolvers: [ 94, 79 ],
        evolution: 202
    },
    202: {
        special: "Changes [RCV] orbs into [QCK] orbs",
        captain: "Boosts HP of Fighter characters by 2x",
        cooldown: [ 15, 6 ]
    },
    203: {
        captain: "Damage received by INT enemies reduced by 10%",
        evolvers: [ 94, 82 ],
        evolution: 204
    },
    204: {
        special: "Delays all enemies for 1 turn",
        captain: "Damage received by INT enemies reduced by 10%",
        cooldown: [ 13, 9 ]
    },
    205: {
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        evolvers: [ 94, 80 ],
        evolution: 206
    },
    206: {
        special: "Reduces all enemies' defense by 50% for 2 turns",
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        cooldown: [ 15, 10 ]
    },
    207: {
        captain: "Damage received by PSY enemies reduced by 10%",
        evolvers: [ 94, 81 ],
        evolution: 208
    },
    208: {
        special: "Changes [RCV] orbs into [PSY] orbs",
        captain: "Damage received by PSY enemies reduced by 20%",
        cooldown: [ 13, 7 ]
    },
    209: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn",
        captain: "Boosts RCV of INT characters by 1.5x",
        evolvers: [ 118, 82, 83, 88, 104 ],
        evolution: 210,
        cooldown: [ 17, 8 ]
    },
    210: {
        special: "Boosts ATK of INT characters by 2x for 1 turn",
        captain: "Boosts RCV of INT characters by 2x",
        cooldown: [ 17, 12 ]
    },
    211: {
        captain: "Boosts ATK of Striker characters by 1.2x",
        evolvers: [ 116, 79, 90 ],
        evolution: 212
    },
    212: {
        special: "Deals 5x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    213: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        evolvers: [ 117, 78, 95, 100 ],
        evolution: 214,
        cooldown: 20
    },
    214: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [ 20, 15 ]
    },
    215: {
        special: "Poisons all enemies",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [ 15, 12 ]
    },
    216: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 20%",
        evolvers: [ 118, 84, 100, 94, 89 ],
        evolution: 217,
        cooldown: [ 22, 15 ]
    },
    217: {
        special: "Deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK by 3.5x after scoring 3 Perfects in a row",
        cooldown: [ 25, 20 ]
    },
    218: {
        special: "Damage received by STR enemies reduced by 100% for 1 turn",
        captain: "Damage received reduced by 80% when HP is above 99%",
        evolvers: [ 118, 86, 102, 94, 91 ],
        evolution: 219,
        cooldown: 15
    },
    219: {
        special: "Deals 25x character's ATK in DEX damage to one enemy",
        captain: "Damage received reduced by 80% when HP is above 99%",
        cooldown: [ 25, 18 ]
    },
    220: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        evolvers: [ 118, 88, 104, 94, 93 ],
        evolution: 221,
        cooldown: 13
    },
    221: {
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2.5x",
        cooldown: [ 13, 7 ]
    },
    222: {
        special: "Boosts ATK of PSY characters by 1.5x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.2x",
        evolvers: [ 117, 81, 98, 83 ],
        evolution: 223,
        cooldown: [ 17, 8 ]
    },
    223: {
        special: "Boosts ATK of PSY characters by 2x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 17, 12 ]
    },
    224: {
        special: "Deals 15x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2x after scoring 2 Perfects in a row",
        evolvers: [ 117, 79, 90, 83 ],
        evolution: 225,
        cooldown: 15
    },
    225: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
        cooldown: [ 20, 11 ]
    },
    226: {
        special: "Cut all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2x",
        evolvers: [ 118, 83, 86, 86, 102 ],
        evolution: 227,
        cooldown: [ 32, 17 ]
    },
    227: {
        special: "Cut all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2.5x",
        cooldown: [ 32, 17 ]
    },
    228: {
        special: "Reduce the duration of Bind by 2 turns",
        captain: "Boosts HP of Slasher characters by 1.5x",
        cooldown: [ 15, 9 ]
    },
    229: {
        special: "Change [INT] orbs into [PSY] orbs",
        captain: "Damage received reduced by 10%",
        cooldown: [ 13, 7 ]
    },
    230: {
        special: "Deals 200 damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 10, 5 ]
    },
    231: {
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        evolvers: [ 117, 79, 85, 90, 101 ],
        evolution: 232,
        cooldown: [ 22, 14 ]
    },
    232: {
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 22, 14 ]
    },
    233: {
        captain: "Boosts HP of PSY characters by 1.5x",
        evolvers: [ 116, 81, 92 ],
        evolution: 234
    },
    234: {
        special: "Deals 5x character's ATK in PSY damage to all enemies",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [ 15, 8 ]
    },
    235: {
        captain: "Boosts ATK of Fighter characters by 1.2x",
        evolvers: [ 116, 78, 89 ],
        evolution: 236
    },
    236: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [ 20, 11 ]
    },
    237: {
        special: "Changes [DEX] orbs into [STR] orbs",
        evolvers: [ 115, 89, 95 ],
        evolution: 242,
        cooldown: [ 15, 7 ]
    },
    238: {
        special: "Changes [TND] orbs into [DEX] orbs",
        evolvers: [ 115, 91, 97 ],
        evolution: 243,
        cooldown: [ 15, 7 ]
    },
    239: {
        special: "Changes [TND] orbs into [QCK] orbs",
        evolvers: [ 115, 90, 96 ],
        evolution: 244,
        cooldown: [ 15, 7 ]
    },
    240: {
        special: "Changes [STR] orbs into [PSY] orbs",
        evolvers: [ 115, 92, 98 ],
        evolution: 245,
        cooldown: [ 15, 7 ]
    },
    241: {
        special: "Changes [QCK] orbs into [INT] orbs",
        evolvers: [ 115, 93, 99 ],
        evolution: 246,
        cooldown: [ 15, 7 ]
    },
    242: {
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    243: {
        special: "Changes [TND] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    244: {
        special: "Changes [TND] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    245: {
        special: "Changes [STR] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ]
    },
    246: {
        special: "Changes [QCK] orbs into [INT] orbs",
        cooldown: [ 15, 7 ]
    },
    247: {
        special: "Heals 1,224 HP",
        captain: "Damage received reduced by 10%",
        cooldown: [ 10, 10 ]
    },
    248: {
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 2.5x",
        evolvers: [ 118, 84, 84, 95, 100 ],
        evolution: 249,
        cooldown: [ 30, 15 ]
    },
    249: {
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 2.5x",
        cooldown: [ 30, 15 ]
    },
    250: {
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        evolvers: [ 118, 87, 94, 98, 103 ],
        evolution: 251,
        cooldown: [ 30, 20 ]
    },
    251: {
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 30, 20 ]
    },
    252: {
        special: "Damage received by DEX enemies reduced by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        evolvers: [ 118, 85, 94, 96, 101 ],
        evolution: 253,
        cooldown: [ 15, 8 ]
    },
    253: {
        special: "Damage received by DEX enemies reduced by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        cooldown: [ 15, 8 ]
    },
    254: {
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        evolvers: [ 118, 88, 94, 99, 104 ],
        evolution: 255,
        cooldown: [ 15, 10 ]
    },
    255: {
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        cooldown: [ 15, 10 ]
    },
    256: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        evolvers: [ 118, 86, 94, 97, 102 ],
        evolution: 257,
        cooldown: [ 20, 10 ]
    },
    257: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [ 20, 10 ]
    },
    258: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        evolvers: [ 118, 84, 94, 95, 100 ],
        evolution: 259,
        cooldown: [ 20, 10 ]
    },
    259: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        cooldown: [ 20, 10 ]
    },
    260: {
        special: "Cut all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        evolvers: [ 118, 84, 266, 95, 267 ],
        evolution: 261,
        cooldown: [ 25, 17 ]
    },
    261: {
        special: "Cut all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 25, 17 ]
    },
    262: {
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolvers: [ 117, 81, 87, 92, 103 ],
        evolution: 263
    },
    263: {
        special: "Boosts orb's effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [ 17, 10 ]
    },
    264: {
        captain: "Damage received from INT enemies reduced by 30%",
        evolvers: [ 117, 82, 88, 93, 104 ],
        evolution: 265
    },
    265: {
        special: "Reduces Bind duration by 3 turns",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        cooldown: [ 17, 11 ]
    },
    266: { },
    267: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        captain: "Boosts ATK by 1.5x",
        cooldown: 15
    },
    268: {
        special: "Damage received reduced by 50% for 3 turns",
        captain: "Damage received reduced by 25%",
        cooldown: [ 22, 15 ]
    },
    269: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    270: {
        special: "Damage received reduced by 20% for 1 turn"
    },
    271: {
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    272: {
        special: "Damage received reduced by 20% for 1 turn"
    },
    273: {
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [ 40, 15 ]
    },
    274: {
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    275: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
    },
    276: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    277: {
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ]
    },
    278: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    279: {
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    280: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    281: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    282: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [ 15, 7 ]
    },
    283: {
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    284: {
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    285: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        cooldown: [ 15, 7 ]
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
        cooldown: [ 25, 10 ]
    },
    290: {
        special: "Deals 25x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: 25
    },
    291: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Damage received by INT enemies reduced by 50%",
        cooldown: [ 18, 8 ]
    },
    292: {
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Damage received by PSY enemies reduced by 50%",
        cooldown: [ 18, 8 ]
    },
    293: {
        special: "Damage received reduced by 20% for 1 turn",
        captain: "Boosts HP of QCK characters by 2x",
        cooldown: [ 15, 10 ]
    },
    294: {
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of STR characters by 2x",
        cooldown: [ 40, 15 ]
    },
    295: {
        special: "Reduces all enemies' defense by 50% for 1 turn",
        captain: "Boosts HP of DEX characters by 2x",
        cooldown: [ 15, 10 ]
    },
    296: {
        special: "Heals 2,000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        evolvers: [ 117, 82, 88, 93, 104 ],
        evolution: 297,
        cooldown: 20
    },
    297: {
        special: "Heals 2,000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 20, 12 ]
    },
    298: {
        special: "Deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [ 25, 18 ]
    },
    299: {
        special: "Reduces all enemies' HP by 10%",
        captain: "Boosts ATK of DEX characters by 2x",
        cooldown: [ 21, 16 ]
    },
    300: { },
    301: { },
    302: { },
    303: { },
    304: { },
    305: {
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        evolvers: [ 118, 87, 87, 303, 103 ],
        evolution: 306,
        cooldown: [ 28, 13 ]
    },
    306: {
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 2x",
        cooldown: [ 28, 13 ]
    },
    307: {
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        evolvers: [ 118, 80, 83, 302, 102 ],
        evolution: 308,
        cooldown: [ 18, 10 ]
    },
    308: {
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        cooldown: [ 18, 10 ]
    },
    309: {
        special: "Cut all enemies' current HP by 10% and reduces all enemies' defense by 50% for 3 turns",
        captain: "Greatly reduces RCV and reduces damage received by 40%",
        evolvers: [ 118, 82, 83, 304, 104 ],
        evolution: 310,
        cooldown: [ 23, 15 ]
    },
    310: {
        special: "Cut all enemies' current HP by 10% and reduces all enemies' defense by 50% for 3 turns",
        captain: "Greatly reduces RCV and reduces damage received by 40%",
        cooldown: [ 23, 15 ]
    },
    311: {
        special: "Deals 100x character's ATK in QCK damage to one enemy and reduces HP to 1",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        evolvers: [ 118, 79, 83, 301, 101 ],
        evolution: 312,
        cooldown: [ 35, 25 ]
    },
    312: {
        special: "Deals 100x character's ATK in QCK damage to one enemy and reduces HP to 1",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        cooldown: [ 35, 25 ]
    },
    313: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        evolvers: [ 118, 81, 83, 303, 103 ],
        evolution: 314,
        cooldown: [ 25, 18 ]
    },
    314: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        cooldown: [ 25, 18 ]
    },
    315: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        evolvers: [ 118, 78, 83, 300, 100 ],
        evolution: 316,
        cooldown: [ 20, 10 ]
    },
    316: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        cooldown: [ 20, 10 ]
    },
    317: {
        special: "Changes all orbs into either [DEX] or [STR] orbs and deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn and reduces damage received by 10%",
        evolvers: [ 117, 80, 86, 97, 102 ],
        evolution: 318,
        cooldown: [ 25, 18 ]
    },
    318: {
        special: "Changes all orbs into either [DEX] or [STR] orbs and deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn and reduces damage received by 15%",
        cooldown: [ 25, 18 ]
    },
    319: {
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        evolvers: [ 117, 80, 86, 97, 102 ],
        evolution: 320,
        cooldown: [ 20, 15 ]
    },
    320: {
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 20, 15 ]
    },
    321: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        evolvers: [ 117, 79, 85, 96, 101 ],
        evolution: 322,
        cooldown: [ 25, 18 ]
    },
    322: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        cooldown: [ 25, 18 ]
    },
    323: {
        special: "Boosts orb's effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        evolvers: [ 117, 90, 85, 96, 101 ],
        evolution: 324,
        cooldown: [ 17, 10 ]
    },
    324: {
        special: "Boosts orb's effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        cooldown: [ 17, 10 ]
    },
    325: {
        special: "Changes [TND] orbs into [RCV] orbs and [RCV] orbs into [QCK] orbs",
        cooldown: [ 14, 10 ]
    },
    326: {
        special: "Empties all slots and deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        evolvers: [ 117, 84, 89, 95, 300 ],
        evolution: 327,
        cooldown: [ 22, 16 ]
    },
    327: {
        special: "Empties all slots and deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        cooldown: [ 22, 16 ]
    },
    328: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts crew's RCV by 5x if HP is below 30% at the start of the turn",
        evolvers: [ 117, 79, 85, 96 ],
        evolution: 329,
        cooldown: [ 20, 15 ]
    },
    329: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts crew's RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [ 20, 15 ]
    },
    330: {
        evolvers: [ 116, 331, 302 ],
        evolution: 332
    },
    331: {
        evolvers: [ 116, 330, 302 ],
        evolution: 332
    },
    332: {
        special: "Changes [STR] orbs into [RCV] orbs and [RCV] orbs into [DEX] orbs",
        captain: "Boosts ATK, HP and RCV of Striker characters by 1.2x",
        cooldown: [ 16, 10 ]
    },
    333: {
        special: "Heals a random amount of HP",
        captain: "Boosts ATK and RCV of PSY and INT characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    334: {
        special: "Recovers 5x character's RCV in HP",
        evolvers: [ 116, 82, 304 ],
        evolution: 335,
        cooldown:  [ 12, 8 ]
    },
    335: {
        special: "Recovers 5x character's RCV in HP",
        cooldown:  [ 12, 8 ]
    },
    336: {
        special: "Freely switch 2 orbs between slots twice",
        captain: "Damage received reduced by 50% when HP is above 50%. At the start of the turn, if HP is above 50%, boosts ATK of PSY characters by 2x and reduces ATK of every other character by 20%.",
        evolvers: [ 117, 81, 87, 98, 103 ],
        evolution: 337,
        cooldown: [ 14, 6 ]
    },
    337: {
        special: "Freely switch 2 orbs between slots twice",
        captain: "Damage received reduced by 50% when HP is above 50%. At the start of the turn, if HP is above 50%, boosts ATK of PSY characters by 2.5x and reduces ATK of every other character by 20%.",
        cooldown: [ 14, 6 ]
    },
    338: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        cooldown: [ 14, 6 ]
    },
    339: {
        special: "Changes [INT] orbs into [TND] orbs",
        cooldown: [ 14, 6 ]
    },
    340: {
        special: "Changes all orbs into either [STR] or [QCK] orbs and deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        evolvers: [ 117, 89, 84, 95, 100 ],
        evolution: 342,
        cooldown: [ 25, 18 ]
    },
    341: {
        special: "Changes all orbs into either [STR] or [QCK] orbs and deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 25, 18 ]
    },
    342: {
        evolvers: [ 89, 105, 105 ],
        evolution: 347
    },
    343: {
        evolvers: [ 90, 106, 106 ],
        evolution: 348
    },
    344: {
        evolvers: [ 91, 107, 107 ],
        evolution: 349
    },
    345: {
        evolvers: [ 92, 108, 108 ],
        evolution: 350
    },
    346: {
        evolvers: [ 93, 109, 109 ],
        evolution: 351
    },
    347: { },
    348: { },
    349: { },
    350: { },
    351: { },
    352: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        evolvers: [ 118, 83, 88, 304, 104 ],
        evolution: 353,
        cooldown: [ 30, 16 ]
    },
    353: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2.5x",
        cooldown: [ 30, 16 ]
    },
    354: {
        special: "Reduces Bind and Silence duration by 3 turns",
        evolvers: [ 116, 85, 90, 96 ],
        evolution: 355,
        cooldown: [ 22, 15 ]
    },
    355: {
        special: "Reduces Bind and Silence duration by 3 turns",
        cooldown: [ 22, 15 ]
    },
    356: {
        special: "Changes own orb into [STR] and deals 7x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        evolvers: [ 118, 78, 83, 300, 100 ],
        evolution: 357,
        cooldown: [ 11, 6 ]
    },
    357: {
        special: "Changes own orb into [STR] and deals 7x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2.5x",
        cooldown: [ 11, 6 ]
    },
    358: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs and deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 2.5x if HP is above 99% at the start of the turn",
        evolvers: [ 118, 80, 83, 302, 102 ],
        evolution: 359,
        cooldown: [ 20, 12 ]
    },
    359: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs and deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 20, 12 ]
    },
    360: {
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        evolvers: [ 118, 82, 83, 304, 104 ],
        evolution: 361,
        cooldown: [ 28, 20 ]
    },
    361: {
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 28, 20 ]
    },
    362: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward.",
        captain: "Doubles ATK and RCV of PSY characters by 2x",
        evolvers: [ 118, 81, 83, 303, 103 ],
        evolution: 363,
        cooldown: [ 13, 8 ]
    },
    363: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward.",
        captain: "Doubles ATK and RCV of PSY characters by 2x",
        cooldown: [ 13, 8 ]
    },
    364: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        evolvers: [ 118, 79, 83, 301, 101 ],
        evolution: 365,
        cooldown: [ 20, 10 ]
    },
    365: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        cooldown: [ 20, 10 ]
    },
    366: {
        special: "Deals 20x character's ATK in INT damage to all enemies and reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        evolvers: [ 118, 88, 266, 99, 267 ],
        evolution: 367,
        cooldown: [ 23, 18 ]
    },
    367: {
        special: "Deals 20x character's ATK in INT damage to all enemies and reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        cooldown: [ 23, 18 ]
    }
};
