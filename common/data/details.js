var details = {
    1: { // Monkey D. Luffy
        special: "Deals 5x character's ATK in STR damage to one enemy",
        cooldown: [ 3, 3],
        evolution: 2,
        evolvers: [ 78 ]
    },
    2: { // Monkey D. Luffy Gum-Gum Pistol
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 12,
        evolution: 3,
        evolvers: [ 115, 78 ]
    },
    3: { // Monkey D. Luffy Gum-Gum Bazooka
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 23,
        evolution: 4,
        evolvers: [ 117, 84, 95, 100 ]
    },
    4: { // Monkey D. Luffy Gear 2
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [ 25, 18 ]
    },
    5: { // Roronoa Zoro
        special: "Deals 7x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 12,
        evolution: [ 6, 7 ],
        evolvers: [ [ 115, 80 ], [ 116, 80, 97 ] ]
    },
    6: { // Roronoa Zoro Three Thousand Worlds
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 15,
        evolution: 8,
        evolvers: [ 117, 86, 97, 102 ]
    },
    7: { // Roronoa Zoro Pound Phoenix
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: 15,
        evolution: 8,
        evolvers: [ 117, 80, 102 ]
    },
    8: { // Roronoa Zoro Ashura Ichibugin
        special: "Deals 15x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK and HP of DEX characters by 2x",
        cooldown: [ 25, 20 ]
    },
    9: { // Nami
        special: "Heals 1,000 HP",
        captain: "Reduces damage received from INT enemies by 20%",
        cooldown: 12,
        evolution: [ 10, 11 ],
        evolvers: [ [ 115, 82 ], [ 116, 82, 99 ] ]
    },
    10: { // Nami Tornado Tempo
        special: "Deals 15x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: 23,
        evolution: 12,
        evolvers: [ 117, 88, 99, 104 ]
    },
    11: { // Nami Mirage Tempo
        special: "Reduces damage received from INT enemies by 100% for 1 turn",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: [ 15, 8 ],
        evolution: 12,
        evolvers: [ 117, 82, 104 ]
    },
    12: { // Nami Thunderbolt Tempo
        special: "Deals 15x character's ATK in INT damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 1.5x",
        cooldown: [ 25, 20 ]
    },
    13: { // Usopp
        special: "Delays all enemies for 1 turn",
        captain: "Boosts ATK of Shooter characters by 1.2x",
        cooldown: 15,
        evolution: [ 14, 15 ],
        evolvers: [ [ 115, 81 ], [ 115, 81, 98 ] ]
    },
    14: { // Usopp Tabasco Star
        special: "Delays all enemies for 2 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 15, 10 ],
        evolution: 16,
        evolvers: [ 117, 87, 98, 103 ]
    },
    15: { // Usopp Golden Pound (GPU)
        special: "Delays all enemies for 3 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 15, 10 ],
        evolution: 16,
        evolvers: [ 117, 81, 103 ]
    },
    16: { // Sogeking
        special: "Delays all enemies for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    17: { // Sanji
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: 23,
        evolution: [ 18, 19 ],
        evolvers: [ [ 115, 79 ], [ 116, 79, 96 ] ]
    },
    18: { // Sanji Plastic Surgery Shot
        special: "Reduces all enemies 'defense by 50% for 2 turns",
        captain: "Boosts HP of QCK characters by 1.5x",
        cooldown: 15,
        evolution: 20,
        evolvers: [ 117, 85, 96, 101 ]
    },
    19: { // Chef Sanji Hot Rock Stew
        special: "Recovers 10x character's RCV in HP",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: 23,
        evolution: 20,
        evolvers: [ 117, 79, 101 ]
    },
    20: { // Sanji Diable Jambe Flambe
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    21: { // Tony Tony Chopper
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of PSY characters by 1.2x",
        cooldown: 15,
        evolution: [ 22, 23, 24, 25, 26 ],
        evolvers: [ [ 116, 81, 98 ], [ 116, 82, 99 ], [ 116, 78, 95 ], [ 116, 79, 96 ], [ 116, 80, 97 ] ]
    },
    22: { // Tony Tony Chopper Heavy Point
        special: "Deals 15x character's ATK in PSY damage to one enemy",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [ 23, 15 ]
    },
    23: { // Tony Tony Chopper Brain Point
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts RCV of INT characters by 1.5x",
        cooldown: [ 15, 8 ]
    },
    24: { // Tony Tony Chopper Arm Point
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts RCV of STR characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    25: { // Tony Tony Chopper Horn Point
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV of QCK characters by 1.5x",
        cooldown: [ 25, 15 ]
    },
    26: { // Tony Tony Chopper Guard Point
        special: "Reduces damage received by 50% for 3 turns",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [ 22, 15 ]
    },
    27: { // Higuma
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        captain: "Boosts HP of QCK characters by 1.2x"
    },
    28: { // Master of the Near Sea
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.2x",
        cooldown: [ 40, 15 ]
    },
    29: { // Iron-Mace Alvida
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Reduces damage received from STR enemies by 30%",
        cooldown: 15,
        evolution: 30,
        evolvers: [ 117, 78, 89, 100 ]
    },
    30: { // Iron-Mace Alvida Smooth-Smooth Fruit
        special: "Reduces damage received by 80% for 1 turn",
        captain: "Reduces damage received from STR enemies by 50%",
        cooldown: [ 15, 9 ]
    },
    31: { // Coby
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolution: 32,
        evolvers: [ 115, 81 ]
    },
    32: { // Cabin Boy Coby
        special: "Changes [RCV] orbs into [TND] orbs",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [ 13, 7 ]
    },
    33: { // Helmeppo
        captain: "Reduces damage received from INT enemies by 30%",
        evolution: 34,
        evolvers: [ 115, 82 ]
    },
    34: { // Cabin Boy Helmeppo
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        captain: "Reduces damage received from INT enemies by 30%",
        cooldown: [ 25, 20 ]
    },
    35: { // Axe-Hand Morgan
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Slasher characters by 1.2x",
        cooldown: [ 15, 9 ],
        evolution: 228,
        evolvers: [ 116, 78, 89 ]
    },
    36: { // Mohji & Richie
        special: "Deals 5x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    37: { // Cabaji the Acrobat
        special: "Deals 5x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    38: { // Buggy
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.5x",
        cooldown: [ 13, 7 ],
        evolution: 39,
        evolvers: [ 116, 82, 93 ]
    },
    39: { // Buggy the Clown
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 13, 7 ]
    },
    40: { // Gaimon
        special: "Changes neighboring orbs into [RCV] orbs",
        captain: "Reduces damage received from Shooter enemies by 30%",
        cooldown: [ 15, 8 ]
    },
    41: { // Siam
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts RCV of INT characters by 1.2x",
        cooldown: [ 13, 10 ]
    },
    42: { // Butchie
        special: "Deals 3x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 1.2x",
        cooldown: [ 10, 5 ]
    },
    43: { // One-Two Django
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Reduces damage received by 10%",
        cooldown: 13,
        evolution: [ 44, 229 ],
        evolvers: [ [ 116, 80, 91 ], [ 116, 81, 92 ] ]
    },
    44: { // Dancing Django
        special: "Changes [RCV] orbs into [DEX] orbs",
        captain: "Reduces damage received by 10%",
        cooldown: [ 13, 7 ]
    },
    45: { // Captain Kuro
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.2x",
        cooldown: [ 15, 8 ],
        evolution: 46,
        evolvers: [ 117, 79, 90, 101 ]
    },
    46: { // Kuro of a Hundred Plans
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 15, 8 ]
    },
    47: { // Yosaku
        special: "Changes [TND] orbs into [RCV] orbs"
    },
    48: { // Johnny
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        cooldown: 18
    },
    49: { // Iron Fist Fullbody
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 15, 10 ],
        evolution: 230,
        evolvers: [ 116, 78, 89 ]
    },
    50: { // Patty
        special: "Deals 5x character's ATK in STR damage to one enemy",
        captain: "Recovers 3x character's RCV in HP at the end of the turn"
    },
    51: { // Carne
        captain: "Recovers 3x character's RCV in HP at the end of the turn"
    },
    52: { // Chef Zeff
        special: "Changes [STR] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2.5x",
        cooldown: [ 13, 7 ]
    },
    53: { // Gin
        captain: "Reduces damage received from QCK enemies by 30%",
        evolution: 54,
        evolvers: [ 116, 79, 90 ]
    },
    54: { // Gin the Man-Demon
        special: "Deals 7x character's ATK in QCK damage to one enemy",
        captain: "Reduces damage received from QCK enemies by 50%",
        cooldown: [ 15, 9 ]
    },
    55: { // Pearl
        captain: "Reduces damage received from STR enemies by 30%",
        evolution: 56,
        evolvers: [ 116, 78, 89 ]
    },
    56: { // Fire Pearl
        special: "Changes [RCV] orbs into [STR] orbs",
        captain: "Reduces damage received from STR enemies by 50%",
        cooldown: [ 13, 7 ]
    },
    57: { // Don Krieg
        special: "Deals 7x character's ATK in INT damage to one enemy",
        captain: "Reduces damage received by 10%",
        cooldown: 15,
        evolution: 58,
        evolvers: [ 117, 82, 93, 104 ]
    },
    58: { // Don Krieg Poison Gas Bomb MH5
        special: "Poisons all enemies",
        captain: "Reduces damage received by 20%",
        cooldown: [ 15, 12 ]
    },
    59: { // Nezumi
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 1.2x",
        cooldown: [ 15, 7 ]
    },
    60: { // Momoo
        special: "Changes [TND] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    61: { // Choo
        special: "Deals 5x character's ATK in INT damage to all enemies",
        captain: "Boosts HP of Shooter characters by 1.5x",
        cooldown: [ 15, 8 ]
    },
    62: { // Kuroobi
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of Fighter characters by 1.5x",
        cooldown: [ 15, 9 ]
    },
    63: { // Hatchan
        captain: "Reduces damage received from DEX enemies by 30%",
        evolution: 64,
        evolvers: [ 116, 80, 91 ]
    },
    64: { // Six-Sword Hachi
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        captain: "Reduces damage received from DEX enemies by 50%",
        cooldown: [ 15, 10 ]
    },
    65: { // Arlong
        special: "Deals 7x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: 15,
        evolution: 66,
        evolvers: [ 117, 78, 89, 100 ]
    },
    66: { // Enraged Arlong Shark On Tooth
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [ 23, 15 ]
    },
    67: { // Tashigi
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 1.5x",
        cooldown: [ 25, 18 ],
        evolution: 68,
        evolvers: [ 117, 83, 79, 85, 96 ]
    },
    68: { // Tashigi Navy HQ Ensign
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts RCV of Slasher characters by 2x",
        cooldown: [ 25, 18 ]
    },
    69: { // Smoker
        special: "Reduces damage received by 50% for 3 turns",
        captain: "Reduces damage received by 20%",
        cooldown: [ 22, 15 ],
        evolution: 70,
        evolvers: [ 117, 83, 80, 86, 97 ]
    },
    70: { // Smoker the White Hunter
        special: "Reduces damage received by 50% for 3 turns",
        captain: "Reduces damage received by 20%",
        cooldown: [ 22, 15 ],
        evolution: 268,
        evolvers: [ 117, 80, 86, 91, 102 ]
    },
    71: { // Miss Wednesday
        special: "Reduces damage received by 50% for 1 turn",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [ 17, 10 ],
        evolution: [ 72, 72 ],
        evolvers: [ [ 117, 81, 98 ], [ 444 ] ]
    },
    72: { // Nefertari Vivi
        special: "Randomizes all orbs",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        cooldown: [ 12, 6 ],
        evolution: 73,
        evolvers: [ 118, 83, 87, 98, 103 ]
    },
    73: { // Princess Vivi
        special: "Randomizes all orbs",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [ 12, 6 ]
    },
    74: { // Portgas D. Ace
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 25, 18 ],
        evolution: 75,
        evolvers: [ 118, 83, 85, 85, 101 ]
    },
    75: { // Portgas D. Ace
        special: "Deals 15x character's ATK in QCK to all enemies",
        captain: "Boosts ATK of QCK characters by 2.5x",
        cooldown: [ 25, 20 ]
    },
    76: { // Shanks
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [ 25, 20 ],
        evolution: 77,
        evolvers: [ 118, 83, 87, 98, 103 ]
    },
    77: { // Shanks
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of PSY characters by 2.5x",
        cooldown: [ 25, 20 ]
    },
    78: {}, // Red Robber Penguin
    79: {}, // Blue Robber Penguin
    80: {}, // Green Robber Penguin
    81: {}, // Yellow Robber Penguin
    82: {}, // Black Robber Penguin
    83: {}, // Rainbow Robber Penguin
    84: {}, // Red Pirate Penguin
    85: {}, // Blue Pirate Penguin
    86: {}, // Green Pirate Penguin
    87: {}, // Yellow Pirate Penguin
    88: {}, // Black Pirate Penguin
    89: {}, // Red Hermit Crab
    90: {}, // Blue Hermit Crab
    91: {}, // Green Hermit Crab
    92: {}, // Green Hermit Crab
    93: {}, // Black Hermit Crab
    94: {}, // Rainbow Hermit Crab
    95: {}, // Red Armored Crab
    96: {}, // Blue Armored Crab
    97: {}, // Green Armored Crab
    98: {}, // Yellow Armored Crab
    99: {}, // Black Armored Crab
    100: {}, // Red Striped Dragon
    101: {}, // Blue Striped Dragon
    102: {}, // Green Striped Dragon
    103: {}, // Yellow Striped Dragon
    104: {}, // Black Striped Dragon
    105: {}, // Red Treasure Turtle
    106: {}, // Blue Treasure Turtle
    107: {}, // Green Treasure Turtle
    108: {}, // Green Treasure Turtle
    109: {}, // Black Treasure Turtle
    110: {}, // Red Daimyo Turtle
    111: {}, // Blue Daimyo Turtle
    112: {}, // Green Daimyo Turtle
    113: {}, // Yellow Daimyo Turtle
    114: {}, // Black Daimyo Turtle
    115: {}, // Sea Pony
    116: {}, // Sea Colt
    117: {}, // Sea Horse
    118: {}, // Sea Stallion
    119: { // Sword Bandit
        special: "Deals 10x character's ATK in DEX damage to one enemy"
    },
    120: { // Pistol Bandit
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    121: { // Fighter Group Cabin Boy Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 142,
        evolvers: [ 89 ]
    },
    122: { // Fighter Group Cabin Boy Blue Pirates
        special: "Reduces damage received by 20% for 1 turn",
        evolution: 143,
        evolvers: [ 90 ]
    },
    123: { // Fighter Group Cabin Boy Blue Pirates
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 144,
        evolvers: [ 91 ]
    },
    124: { // Fighter Group Cabin Boy Yellow Pirates
        special: "Reduces damage received by 20% for 1 turn",
        evolution: 145,
        evolvers: [ 92 ]
    },
    125: { // Fighter Group Cabin Boy Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [ 40, 15 ],
        evolution: 146,
        evolvers: [ 93 ]
    },
    126: { // Slasher Group Cabin Boy Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 147,
        evolvers: [ 89 ]
    },
    127: { // Slasher Group Cabin Boy Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        evolution: 148,
        evolvers: [ 90 ]
    },
    128: { // Slasher Group Cabin Boy Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 149,
        evolvers: [ 91 ]
    },
    129: { // Slasher Group Cabin Boy Yellow Pirates
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ],
        evolution: 150,
        evolvers: [ 92 ]
    },
    130: { // Slasher Group Cabin Boy Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 151,
        evolvers: [ 93 ]
    },
    131: { // Striker Group Cabin Boy Red Pirates
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [ 15, 7 ],
        evolution: 152,
        evolvers: [ 89 ]
    },
    132: { // Striker Group Cabin Boy Blue Pirates
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ],
        evolution: 153,
        evolvers: [ 90 ]
    },
    133: { // Striker Group Cabin Boy Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 154,
        evolvers: [ 91 ]
    },
    134: { // Striker Group Cabin Boy Yellow Pirates
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [ 15, 7 ],
        evolution: 155,
        evolvers: [ 92 ]
    },
    135: { // Striker Group Cabin Boy Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 156,
        evolvers: [ 93 ]
    },
    136: { // Shooter Group Cabin Boy Red Pirates
        special: "Deals 5x character's ATK in STR damage to all enemies",
        evolution: 157,
        evolvers: [ 89 ]
    },
    137: { // Shooter Group Cabin Boy Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [ 15, 7 ],
        evolution: 158,
        evolvers: [ 90 ]
    },
    138: { // Shooter Group Cabin Boy Green Pirates
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 159,
        evolvers: [ 91 ]
    },
    139: { // Shooter Group Cabin Boy Yellow Pirates
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 160,
        evolvers: [ 92 ]
    },
    140: { // Shooter Group Cabin Boy Black Pirates
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15,
        evolution: 161,
        evolvers: [ 93 ]
    },
    141: { // Cannoneer Cabin Boy
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: [ 25, 10 ],
        evolution: 162,
        evolvers: [ 115, 93 ]
    },
    142: { // Fighter Group Crew Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 269,
        evolvers: [ 115, 116, 89 ]
    },
    143: { // Fighter Group Crew Blue Pirates
        special: "Reduces damage received by 20% for 1 turn",
        evolution: 270,
        evolvers: [ 115, 116, 90 ]
    },
    144: { // Fighter Group Crew Green Pirates
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 271,
        evolvers: [ 115, 116, 91 ]
    },
    145: { // Fighter Group Crew Yellow Pirates
        special: "Reduces damage received by 20% for 1 turn",
        evolution: 272,
        evolvers: [ 115, 116, 92 ]
    },
    146: { // Fighter Group Crew Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [ 40, 15 ],
        evolution: 273,
        evolvers: [ 115, 116, 93 ]
    },
    147: { // Slasher Group Crew Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy",
        evolution: 274,
        evolvers: [ 116, 95 ]
    },
    148: { // Slasher Group Crew Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        evolution: 275,
        evolvers: [ 116, 96 ]
    },
    149: { // Slasher Group Crew Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 276,
        evolvers: [ 116, 97 ]
    },
    150: { // Slasher Group Crew Yellow Pirates
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ],
        evolution: 277,
        evolvers: [ 116, 98 ]
    },
    151: { // Slasher Group Crew Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 278,
        evolvers: [ 116, 99 ]
    },
    152: { // Striker Group Crew Red Pirates
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [ 15, 7 ],
        evolution: 279,
        evolvers: [ 78, 84 ]
    },
    153: { // Striker Group Crew Blue Pirates
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ],
        evolution: 280,
        evolvers: [ 79, 85 ]
    },
    154: { // Striker Group Crew Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 281,
        evolvers: [ 80, 86 ]
    },
    155: { // Striker Group Crew Yellow Pirates
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [ 15, 7 ],
        evolution: 282,
        evolvers: [ 81, 87 ]
    },
    156: { // Striker Group Crew Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        evolution: 283,
        evolvers: [ 82, 88 ]
    },
    157: { // Shooter Group Crew Red Pirates
        special: "Deals 5x character's ATK in STR damage to all enemies",
        evolution: 284,
        evolvers: [ 115, 116, 89 ]
    },
    158: { // Shooter Group Crew Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [ 15, 7 ],
        evolution: 285,
        evolvers: [ 115, 116, 90 ]
    },
    159: { // Shooter Group Crew Green Pirates
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 286,
        evolvers: [ 115, 116, 91 ]
    },
    160: { // Shooter Group Crew Yellow Pirates
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13,
        evolution: 287,
        evolvers: [ 115, 116, 92 ]
    },
    161: { // Shooter Group Crew Black Pirates
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15,
        evolution: 288,
        evolvers: [ 115, 116, 93 ]
    },
    162: { // Cannoneer Skilled
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: [ 25, 10 ],
        evolution: 289,
        evolvers: [ 104 ]
    },
    163: { // Bodyguard, ‘Sunglasses’
        special: "Changes [DEX] orbs into [TND] orbs"
    },
    164: { // Bearded Bodyguard
        special: "Changes [QCK] orbs into [TND] orbs"
    },
    165: { // Knuckle Punk Black Cat Pirates
        special: "Recovers 5x character's RCV in HP"
    },
    166: { // Saber Punk Black Cat Pirates
        special: "Recovers 5x character's RCV in HP"
    },
    167: { // Halberd Punk Black Cat Pirates
        special: "Recovers 5x character's RCV in HP"
    },
    168: { // Pistol Punk Black Cat Pirates
        special: "Recovers 5x character's RCV in HP"
    },
    169: { // Cannoneer Punk Black Cat Pirates
        special: "Recovers 5x character's RCV in HP"
    },
    170: { // Fighter Group Leader
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: [ 25, 10 ]
    },
    171: { // Slasher Group Leader
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: 25
    },
    172: { // Striker Group Leader
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: 25
    },
    173: { // Shooter Group Leader
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: 25
    },
    174: { // Assassin Master
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: 25
    },
    175: { // Karate Fishman Arlong crewmember
        special: "Deals 10x character's ATK in STR damage to one enemy",
        cooldown: [ 40, 15 ]
    },
    176: { // Sword Fishman Arlong crewmember
        special: "Deals 10x character's ATK in DEX damage to one enemy"
    },
    177: { // Spear Fishman Arlong crewmember
        special: "Deals 10x character's ATK in QCK damage to one enemy"
    },
    178: { // Pistol Fishman Arlong crewmember
        special: "Deals 5x character's ATK in PSY damage to all enemies"
    },
    179: { // Knuckle Apprentice Navy
        special: "Changes [QCK] orbs into [STR] orbs",
        cooldown: [ 13, 7 ],
        evolution: 184,
        evolvers: [ 78 ]
    },
    180: { // Saber Apprentice Navy
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ],
        evolution: 185,
        evolvers: [ 80 ]
    },
    181: { // Halberd Apprentice Navy
        special: "Changes [STR] orbs into [QCK] orbs",
        cooldown: [ 13, 7 ],
        evolution: 186,
        evolvers: [ 79 ]
    },
    182: { // Pistol Apprentice Navy
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ],
        evolution: 187,
        evolvers: [ 81 ]
    },
    183: { // Cannoneer Apprentice Navy
        special: "Changes [RCV] orbs into [INT] orbs",
        cooldown: [ 13, 7 ],
        evolution: 188,
        evolvers: [ 115, 82 ]
    },
    184: { // Knuckle Seaman Navy
        special: "Changes [QCK] orbs into [STR] orbs",
        cooldown: [ 15, 7 ],
        evolution: 194,
        evolvers: [ 116, 78, 84 ]
    },
    185: { // Saber Seaman Navy
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ],
        evolution: 195,
        evolvers: [ 116, 80, 86 ]
    },
    186: { // Halberd Seaman Navy
        special: "Changes [STR] orbs into [QCK] orbs",
        cooldown: [ 13, 7 ],
        evolution: 196,
        evolvers: [ 116, 79, 85 ]
    },
    187: { // Pistol Seaman Navy
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ],
        evolution: 197,
        evolvers: [ 116, 81, 87 ]
    },
    188: { // Cannoneer Seaman Navy
        special: "Changes [RCV] orbs into [INT] orbs",
        cooldown: [ 13, 7 ],
        evolution: 198,
        evolvers: [ 116, 117, 82, 88 ]
    },
    189: {}, // Red Elder Turtle
    190: {}, // Blue Elder Turtle
    191: {}, // Green Elder Turtle
    192: {}, // Yellow Elder Turtle
    193: {}, // Black Elder Turtle
    194: { // Knuckle Ensign Navy HQ
        special: "Changes [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    195: { // Saber Ensign Navy HQ
        special: "Recovers 5x character's RCV in HP",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [ 12, 8 ]
    },
    196: { // Halberd Ensign Navy HQ
        special: "Changes [STR] orbs into [QCK] orbs",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 13, 7 ]
    },
    197: { // Pistol Ensign Navy HQ
        special: "Recovers 5x character's RCV in HP",
        captain: "Reduces damage received from PSY enemies by 20%",
        cooldown: [ 12, 8 ]
    },
    198: { // Bazooka Ensign Navy HQ
        special: "Changes [RCV] orbs into [INT] orbs",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 13, 7 ]
    },
    199: { // Mr. 5 Nez-Palm Cannon
        special: "Deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: 15,
        evolution: 200,
        evolvers: [ 94, 78 ]
    },
    200: { // Mr. 5 Breeze Breath Bomb
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [ 20, 14 ]
    },
    201: { // Miss Valentine
        captain: "Boosts HP of Fighter characters by 1.5x",
        evolution: 202,
        evolvers: [ 94, 79 ]
    },
    202: { // Miss Valentine 10,000 Kilo Guillotine
        special: "Changes [RCV] orbs into [QCK] orbs",
        captain: "Boosts HP of Fighter characters by 2x",
        cooldown: [ 15, 6 ]
    },
    203: { // Mr. 3
        captain: "Reduces damage received from INT enemies by 10%",
        evolution: 204,
        evolvers: [ 94, 82 ]
    },
    204: { // Mr. 3 Extra Special Candelabra
        special: "Delays all enemies for 1 turn",
        captain: "Reduces damage received from INT enemies by 10%",
        cooldown: [ 13, 9 ]
    },
    205: { // Miss Goldenweek
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        evolution: 206,
        evolvers: [ 94, 80 ]
    },
    206: { // Miss Goldenweek Colors Trap: Calming Green
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts HP and RCV of DEX characters by 1.2x",
        cooldown: [ 15, 10 ]
    },
    207: { // Mr. 2 Bon Clay
        captain: "Reduces damage received from PSY enemies by 10%",
        evolution: [ 208, 462 ],
        evolvers: [ [ 94, 81 ], [ 117, 231 ] ]
    },
    208: { // Mr. 2 Bon Clay Bombardier Arabesque
        special: "Changes [RCV] orbs into [PSY] orbs",
        captain: "Reduces damage received from PSY enemies by 20%",
        cooldown: [ 13, 7 ]
    },
    209: { // Miss All Sunday Baroque Works VP
        special: "Boosts ATK of INT characters by 1.5x for 1 turn",
        captain: "Boosts RCV of INT characters by 1.5x",
        cooldown: [ 17, 8 ],
        evolution: 210,
        evolvers: [ 118, 82, 83, 88, 104 ]
    },
    210: { // Nico Robin
        special: "Boosts ATK of INT characters by 2x for 1 turn",
        captain: "Boosts RCV of INT characters by 2x",
        cooldown: [ 17, 12 ]
    },
    211: { // Mr. 9
        captain: "Boosts ATK of Striker characters by 1.2x",
        evolution: 212,
        evolvers: [ 116, 79, 90 ]
    },
    212: { // Mr. 9 Hot Blooded Bat
        special: "Deals 5x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    213: { // Laboon
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [ 20, 15 ],
        evolution: 214,
        evolvers: [ 117, 78, 95, 100 ]
    },
    214: { // Laboon (Luffy’s drawing)
        special: "Deals 20x character's ATK in STR damage to all enemies",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [ 20, 15 ]
    },
    215: { // Neptunian Squid
        special: "Poisons all enemies",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [ 15, 12 ]
    },
    216: { // Monkey D. Luffy Gum-Gum Balloon
        special: "Reduces damage received by 50% for 3 turns",
        captain: "Reduces damage received by 20%",
        cooldown: [ 22, 15 ],
        evolution: 217,
        evolvers: [ 118, 84, 100, 94, 89 ]
    },
    217: { // Monkey D. Luffy Gear Third
        special: "Deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK by 3.5x after scoring 3 Perfects in a row",
        cooldown: [ 25, 20 ]
    },
    218: { // Roronoa Zoro Streaming Wolf Swords
        special: "Reduces damage received from STR enemies by 100% for 1 turn",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        cooldown: [ 15, 8 ],
        evolution: 219,
        evolvers: [ 118, 86, 102, 94, 91 ]
    },
    219: { // Roronoa Zoro Lion’s Song
        special: "Deals 25x character's ATK in DEX damage to one enemy",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        cooldown: [ 25, 18 ]
    },
    220: { // Nami Fine Tempo
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 13, 7 ],
        evolution: 221,
        evolvers: [ 118, 88, 104, 94, 93 ]
    },
    221: { // Nami Happiness Punch (Towel Nami)
        special: "Changes [PSY] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2.5x",
        cooldown: [ 13, 7 ]
    },
    222: { // Usopp Usopp Hammer
        special: "Boosts ATK of PSY characters by 1.5x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.2x",
        cooldown: [ 17, 8 ],
        evolution: 223,
        evolvers: [ 117, 81, 98, 83 ]
    },
    223: { // Usopp Impact
        special: "Boosts ATK of PSY characters by 2x for 1 turn",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 17, 12 ]
    },
    224: { // Mr. Prince Mutton Shot
        special: "Deals 15x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2x after scoring 2 Perfects in a row",
        cooldown: 15,
        evolution: 225,
        evolvers: [ 117, 79, 90, 83 ]
    },
    225: { // Mr. Prince Veau Shot
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
        cooldown: [ 20, 11 ]
    },
    226: { // Dracule Mihawk
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [ 32, 17 ],
        evolution: 227,
        evolvers: [ 118, 83, 86, 86, 102 ]
    },
    227: { // Hawk Eyes Mihawk
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK of Slasher characters by 2.5x",
        cooldown: [ 32, 17 ]
    },
    228: { // Escapee Morgan
        special: "Reduces Bind duration by 2 turns",
        captain: "Boosts HP of Slasher characters by 1.5x",
        cooldown: [ 15, 9 ]
    },
    229: { // Double Crosser Django
        special: "Change [INT] orbs into [PSY] orbs",
        captain: "Reduces damage received by 10%",
        cooldown: [ 13, 7 ]
    },
    230: { // Double Ironfist Fullbody
        special: "Deals 200 damage to one enemy",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 10, 5 ]
    },
    231: { // Hina
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 22, 14 ],
        evolution: 232,
        evolvers: [ 117, 79, 85, 90, 101 ]
    },
    232: { // Black Cage Hina
        special: "Locks all orbs for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 22, 14 ]
    },
    233: { // Mr. 8
        captain: "Boosts HP of PSY characters by 1.5x",
        evolution: 234,
        evolvers: [ 116, 81, 92 ]
    },
    234: { // Mr. 8 Igarappapa
        special: "Deals 5x character's ATK in PSY damage to all enemies",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [ 15, 8 ]
    },
    235: { // Miss Monday
        captain: "Boosts ATK of Fighter characters by 1.2x",
        evolution: 236,
        evolvers: [ 116, 78, 89 ]
    },
    236: { // Miss Monday Superhuman Brass Knuckles
        special: "Deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [ 20, 11 ]
    },
    237: { // Knuckle Millions Baroque Works
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [ 15, 7 ],
        evolution: 242,
        evolvers: [ 115, 89, 95 ]
    },
    238: { // Saber Millions Baroque Works
        special: "Changes [TND] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 243,
        evolvers: [ 115, 91, 97 ]
    },
    239: { // Polearm Millions Baroque Works
        special: "Changes [TND] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ],
        evolution: 244,
        evolvers: [ 115, 90, 96 ]
    },
    240: { // Pistol Millions Baroque Works
        special: "Changes [STR] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ],
        evolution: 245,
        evolvers: [ 115, 92, 98 ]
    },
    241: { // Bazooka Millions Baroque Works
        special: "Changes [QCK] orbs into [INT] orbs",
        cooldown: [ 15, 7 ],
        evolution: 246,
        evolvers: [ 115, 93, 99 ]
    },
    242: { // Knuckle Billions Baroque Works
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    243: { // Saber Billions Baroque Works
        special: "Changes [TND] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    244: { // Halberd Billions Baroque Works
        special: "Changes [TND] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    245: { // Pistol Billions Baroque Works
        special: "Changes [STR] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ]
    },
    246: { // Bazooka Billions Baroque Works
        special: "Changes [QCK] orbs into [INT] orbs",
        cooldown: [ 15, 7 ]
    },
    247: { // Chopperman
        special: "Heals 1,224 HP",
        captain: "Reduces damage received by 10%",
        cooldown: [ 10, 10 ]
    },
    248: { // Tony Tony Chopper Pre-Rampage (Monster Chopper)
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 2.5x",
        cooldown: [ 30, 15 ],
        evolution: 249,
        evolvers: [ 118, 84, 84, 95, 100 ]
    },
    249: { // Tony Tony Chopper Post-Rampage (Monster Chopper)
        special: "Deals random STR damage to one enemy",
        captain: "Reduces HP of STR characters by 60% and boosts their ATK by 3x",
        cooldown: [ 30, 15 ]
    },
    250: { // Marco
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 30, 20 ],
        evolution: 251,
        evolvers: [ 118, 87, 94, 98, 103 ]
    },
    251: { // Marco the Phoenix
        special: "Recovers all HP",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 30, 20 ]
    },
    252: { // Jozu
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        cooldown: [ 15, 8 ],
        evolution: 253,
        evolvers: [ 118, 85, 94, 96, 101 ]
    },
    253: { // Diamond Jozu
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        cooldown: [ 15, 8 ]
    },
    254: { // Vista
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        cooldown: [ 15, 10 ],
        evolution: 255,
        evolvers: [ 118, 88, 94, 99, 104 ]
    },
    255: { // Flower Sword Vista
        special: "Deals 5,000 damage to all enemies",
        captain: "Boosts ATK and HP of INT characters by 2x",
        cooldown: [ 15, 10 ]
    },
    256: { // Izo
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [ 20, 10 ],
        evolution: 257,
        evolvers: [ 118, 86, 94, 97, 102 ]
    },
    257: { // Flintlock Pistols Izo
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [ 20, 10 ]
    },
    258: { // Blamenco
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        cooldown: [ 20, 10 ],
        evolution: 259,
        evolvers: [ 118, 84, 94, 95, 100 ]
    },
    259: { // Blamenco the Mallet
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        cooldown: [ 20, 10 ]
    },
    260: { // Edward Newgate
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 25, 17 ],
        evolution: 261,
        evolvers: [ 118, 84, 266, 95, 267 ]
    },
    261: { // Whitebeard
        special: "Cuts all enemies' current HP by 30%",
        captain: "Boosts ATK by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 25, 17 ]
    },
    262: { // Training Coby
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        evolution: 263,
        evolvers: [ 117, 81, 87, 92, 103 ]
    },
    263: { // Petty Officer Coby
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [ 17, 10 ]
    },
    264: { // Training Helmeppo
        captain: "Reduces damage received from INT enemies by 30%",
        evolution: 265,
        evolvers: [ 117, 82, 88, 93, 104 ]
    },
    265: { // Sergeant Helmeppo
        special: "Reduces Bind duration by 3 turns",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        cooldown: [ 17, 11 ]
    },
    266: {}, // Rainbow Pirate Penguin
    267: { // Rainbow Striped Dragon
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts ATK by 1.5x",
        cooldown: 15
    },
    268: { // White Chase Smoker
        special: "Reduces damage received by 50% for 3 turns",
        captain: "Reduces damage received by 25%",
        cooldown: [ 22, 15 ]
    },
    269: { // Armed Fighter Unit Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    270: { // Armed Fighter Unit Blue Pirates
        special: "Reduces damage received by 20% for 1 turn"
    },
    271: { // Armed Fighter Unit Green Pirates
        special: "Changes [STR] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    272: { // Armed Fighter Unit Yellow Pirates
        special: "Reduces damage received by 20% for 1 turn"
    },
    273: { // Armed Fighter Unit Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy",
        cooldown: [ 40, 15 ]
    },
    274: { // Armed Slasher Unit Red Pirates
        special: "Deals 10x character's ATK in STR damage to one enemy"
    },
    275: { // Armed Slasher Unit Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn"
    },
    276: { // Armed Slasher Unit Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    277: { // Armed Slasher Unit Yellow Pirates
        special: "Changes [INT] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ]
    },
    278: { // Armed Slasher Unit Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    279: { // Armed Striker Unit Red Pirates
        special: "Changes [RCV] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    280: { // Armed Striker Unit Blue Pirates
        special: "Changes [DEX] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    281: { // Armed Striker Unit Green Pirates
        special: "Changes [QCK] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ]
    },
    282: { // Armed Striker Unit Yellow Pirates
        special: "Changes [QCK] orbs into [RCV] orbs",
        cooldown: [ 15, 7 ]
    },
    283: { // Armed Striker Unit Black Pirates
        special: "Deals 10x character's ATK in INT damage to one enemy"
    },
    284: { // Armed Shooter Unit Red Pirates
        special: "Deals 5x character's ATK in STR damage to all enemies"
    },
    285: { // Armed Shooter Unit Blue Pirates
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [ 15, 7 ]
    },
    286: { // Armed Shooter Unit Green Pirates
        special: "Changes [DEX] orbs into [RCV] orbs",
        cooldown: 13
    },
    287: { // Armed Shooter Unit Yellow Pirates
        special: "Changes [PSY] orbs into [RCV] orbs",
        cooldown: 13
    },
    288: { // Armed Shooter Unit Black Pirates
        special: "Deals 5x character's ATK in INT damage to all enemies",
        cooldown: 15
    },
    289: { // Skilled Gunner
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: [ 25, 10 ]
    },
    290: { // Mr. 13 & Ms. Friday The Unluckies
        special: "Deals 25x character's ATK in INT damage to one enemy",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 25, 18 ]
    },
    291: { // Dorry
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Reduces damage received from INT enemies by 50%",
        cooldown: [ 18, 8 ]
    },
    292: { // Broggy
        special: "Changes neighboring slots' orbs into [RCV] orbs",
        captain: "Reduces damage received from PSY enemies by 50%",
        cooldown: [ 18, 8 ]
    },
    293: { // Triceratops
        special: "Reduces damage received by 20% for 1 turn",
        captain: "Boosts HP of QCK characters by 2x",
        cooldown: [ 15, 10 ]
    },
    294: { // Rex
        special: "Deals 10x character's ATK in STR damage to one enemy",
        captain: "Boosts HP of STR characters by 2x",
        cooldown: [ 40, 15 ]
    },
    295: { // Brontosaurus
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts HP of DEX characters by 2x",
        cooldown: [ 15, 10 ]
    },
    296: { // Tsuru
        special: "Heals 2,000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 20, 12 ],
        evolution: 297,
        evolvers: [ 117, 82, 88, 93, 104 ]
    },
    297: { // Great Advisor Tsuru
        special: "Heals 2,000 HP and randomizes all orbs",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 20, 12 ]
    },
    298: { // Momonga
        special: "Deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [ 25, 18 ]
    },
    299: { // Onigumo
        special: "Cuts all enemies' current HP by 10%",
        captain: "Boosts ATK of DEX characters by 2x",
        cooldown: [ 21, 16 ]
    },
    300: {}, // Red Plated Lobster
    301: {}, // Blue Plated Lobster
    302: {}, // Green Plated Lobster
    303: {}, // Yellow Plated Lobster
    304: {}, // Black Plated Lobster
    305: { // Monkey D. Garp
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        cooldown: [ 28, 13 ],
        evolution: 306,
        evolvers: [ 118, 87, 87, 303, 103 ]
    },
    306: { // Garp the Fist
        special: "Changes all orbs into either [PSY] or [RCV] orbs",
        captain: "Boosts ATK and HP of PSY characters by 2x",
        cooldown: [ 28, 13 ]
    },
    307: { // Trafalgar Law
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        cooldown: [ 18, 10 ],
        evolution: 308,
        evolvers: [ 118, 80, 83, 302, 102 ]
    },
    308: { // Trafalgar Law ROOM
        special: "Changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        captain: "Boosts ATK of DEX characters by 2.5x",
        cooldown: [ 18, 10 ]
    },
    309: { // Basil Hawkins
        special: "Cuts all enemies' current HP by 10%, reduces the defense of all enemies by 50% for 3 turns",
        captain: "Reduces RCV by 90%, reduces damage received by 40%",
        cooldown: [ 23, 15 ],
        evolution: 310,
        evolvers: [ 118, 82, 83, 304, 104 ]
    },
    310: { // Basil Hawkins the Magician
        special: "Cuts all enemies' current HP by 10%, reduces the defense of all enemies by 50% for 3 turns",
        captain: "Reduces RCV by 90%, reduces damage received by 40%",
        cooldown: [ 23, 15 ]
    },
    311: { // Killer
        special: "Deals 100x character's ATK in fixed QCK damage to one enemy and reduces HP to 1",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        cooldown: [ 35, 25 ],
        evolution: 312,
        evolvers: [ 118, 79, 83, 301, 101 ]
    },
    312: { // Massacre Soldier Killer
        special: "Deals 100x character's ATK in QCK damage to one enemy and reduces HP to 1",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK by 3.5x after scoring 3 less than Good attacks in a row",
        cooldown: [ 35, 25 ]
    },
    313: { // Urouge
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        cooldown: [ 25, 18 ],
        evolution: 314,
        evolvers: [ 118, 81, 83, 303, 103 ]
    },
    314: { // Mad Monk Urouge
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts ATK of Striker characters by 2x and HP by 1.5x",
        cooldown: [ 25, 18 ]
    },
    315: { // Bepo
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        cooldown: [ 20, 10 ],
        evolution: 316,
        evolvers: [ 118, 78, 83, 300, 100 ]
    },
    316: { // Bepo the Martial Artist
        special: "Changes [PSY] and [INT] orbs into [STR] orbs and empties slots with [DEX] and [QCK] orbs",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        cooldown: [ 20, 10 ]
    },
    317: { // Kalifa
        special: "Changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn, reduces damage received by 10%",
        cooldown: [ 25, 18 ],
        evolution: 318,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    318: { // Beautiful Secretary Kalifa
        special: "Changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        captain: "Heals 500 HP at end of turn, reduces damage received by 15%",
        cooldown: [ 25, 18 ]
    },
    319: { // Paulie
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 20, 15 ],
        evolution: 320,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    320: { // Paulie Dock One Foreman/Mast Specialist
        special: "Locks all of orbs for 1 turn",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 20, 15 ]
    },
    321: { // Rob Lucci
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        cooldown: [ 25, 18 ],
        evolution: 322,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    322: { // Rob Lucci Dock One Sawyer, Treenail Specialist
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK type characters by 2x",
        cooldown: [ 25, 18 ]
    },
    323: { // Kaku
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        cooldown: [ 17, 10 ],
        evolution: 324,
        evolvers: [ 117, 90, 85, 96, 101 ]
    },
    324: { // Kaku Dock One Carpentry Specialist
        special: "Boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts HP and RCV of QCK characters by 1.5x",
        cooldown: [ 17, 10 ]
    },
    325: { // Lulu
        special: "Changes [TND] orbs into [RCV] orbs and [RCV] orbs into [QCK] orbs",
        cooldown: [ 14, 10 ]
    },
    326: { // Wapol
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        cooldown: [ 22, 16 ],
        evolution: 327,
        evolvers: [ 117, 84, 89, 95, 300 ]
    },
    327: { // Wapol House
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        captain: "Recovers 10x character's RCV in HP at the end of the turn",
        cooldown: [ 22, 16 ]
    },
    328: { // Dalton
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [ 20, 15 ],
        evolution: 329,
        evolvers: [ 117, 79, 85, 96 ]
    },
    329: { // Dalton Bison
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [ 20, 15 ]
    },
    330: { // Chess
        evolution: 332,
        evolvers: [ 116, 331, 302 ]
    },
    331: { // Kuromarimo
        evolution: 332,
        evolvers: [ 116, 330, 302 ]
    },
    332: { // Chessmarimo
        special: "Changes [STR] orbs into [RCV] orbs and [RCV] orbs into [DEX] orbs",
        captain: "Boosts ATK, HP and RCV of Striker characters by 1.2x",
        cooldown: [ 16, 10 ]
    },
    333: { // Dr. Kureha
        special: "Heals a random amount of HP",
        captain: "Boosts ATK and RCV of PSY and INT characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    334: { // Lapin
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ],
        evolution: 335,
        evolvers: [ 116, 82, 304 ]
    },
    335: { // Lapin Adult
        special: "Recovers 5x character's RCV in HP",
        cooldown: [ 12, 8 ]
    },
    336: { // Franky
        special: "Freely switch orbs between slots twice",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn",
        cooldown: [ 14, 6 ],
        evolution: 337,
        evolvers: [ 117, 81, 87, 98, 103 ]
    },
    337: { // Wrecking Yard Franky
        special: "Freely switch orbs between slots twice",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2.5x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn",
        cooldown: [ 14, 6 ]
    },
    338: { // Kiwi
        special: "Changes [QCK] orbs into [PSY] orbs",
        cooldown: [ 14, 6 ]
    },
    339: { // Mozu
        special: "Changes [INT] orbs into [TND] orbs",
        cooldown: [ 14, 6 ]
    },
    340: { // Kraken Surume
        special: "Changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 25, 18 ],
        evolution: 341,
        evolvers: [ 117, 78, 84, 95, 100 ]
    },
    341: { // Kraken Arctic Monster
        special: "Changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 25, 18 ]
    },
    342: { // Red Jeweled Porc
        evolution: [ 347, 347, 347 ],
        evolvers: [ [ 115, 105, 105 ], [ 78, 105, 105 ], [ 89, 105, 105 ] ]
    },
    343: { // Blue Jeweled Porc
        evolution: [ 348, 348, 348 ],
        evolvers: [ [ 115, 106, 106 ], [ 79, 106, 106 ], [ 90, 106, 106 ] ]
    },
    344: { // Green Jeweled Porc
        evolution: [ 349, 349, 349 ],
        evolvers: [ [ 115, 107, 107 ], [ 80, 107, 107 ], [ 91, 107, 107 ] ]
    },
    345: { // Yellow Jeweled Porc
        evolution: [ 350, 350, 350 ],
        evolvers: [ [ 115, 108, 108 ], [ 81, 108, 108 ], [ 92, 108, 108 ] ]
    },
    346: { // Black Jeweled Porc
        evolution: [ 351, 351, 351 ],
        evolvers: [ [ 115, 109, 109 ], [ 82, 109, 109 ], [ 93, 109, 109 ] ]
    },
    347: {}, // Ruby Jeweled Porc
    348: {}, // Sapphire Jeweled Porc
    349: {}, // Emerald Jeweled Porc
    350: {}, // Topaz Jeweled Porc
    351: {}, // Amethyst Jeweled Porc
    352: { // Zephyr
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 30, 16 ],
        evolution: 353,
        evolvers: [ 118, 83, 88, 304, 104 ]
    },
    353: { // Zephyr NEO Navy Commander
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2.5x",
        cooldown: [ 30, 16 ]
    },
    354: { // Ain
        special: "Reduces Bind and Silence duration by 3 turns",
        cooldown: [ 22, 15 ],
        evolution: 355,
        evolvers: [ 116, 85, 90, 96 ]
    },
    355: { // Ain NEO Navy Vice Admiral
        special: "Reduces Bind and Silence duration by 3 turns",
        cooldown: [ 22, 15 ]
    },
    356: { // Eustass Kid
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialNotes: "The in-game description is wrong, the special does not deal 7x damage",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 11, 6 ],
        evolution: 357,
        evolvers: [ 118, 78, 83, 300, 100 ]
    },
    357: { // Captain Kid
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialNotes: "The in-game description is wrong, the special does not deal 7x damage",
        captain: "Boosts ATK of Striker characters by 2.5x",
        cooldown: [ 11, 6 ]
    },
    358: { // Scratchmen Apoo
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [ 20, 12 ],
        evolution: 359,
        evolvers: [ 118, 80, 83, 302, 102 ]
    },
    359: { // Roar of the Sea Scratchmen Apoo
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        captain: "Boosts ATK of DEX characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 20, 12 ]
    },
    360: { // X Drake
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 28, 20 ],
        evolution: 361,
        evolvers: [ 118, 82, 83, 304, 104 ]
    },
    361: { // Red Flag X Drake
        special: "Deals 10x character's ATK in INT damage to all enemies, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 28, 20 ]
    },
    362: { // Jewelry Bonney
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        cooldown: [ 13, 8 ],
        evolution: 363,
        evolvers: [ 118, 81, 83, 303, 103 ]
    },
    363: { // Big Eater Jewelry Bonney
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        cooldown: [ 13, 8 ]
    },
    364: { // Capone Bege
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        cooldown: [ 20, 10 ],
        evolution: 365,
        evolvers: [ 118, 79, 83, 301, 101 ]
    },
    365: { // Capone Gang Bege
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        cooldown: [ 20, 10 ]
    },
    366: { // Silvers Rayleigh
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        cooldown: [ 23, 18 ],
        evolution: 367,
        evolvers: [ 118, 88, 266, 99, 267 ]
    },
    367: { // Dark King Rayleigh
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        captain: "Boosts chain multiplier by 4x",
        cooldown: [ 23, 18 ]
    },
    368: { // Giant Slasher Red Pirates
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        cooldown: [ 25, 12 ],
        evolution: 373,
        evolvers: [ 116, 89, 95 ]
    },
    369: { // Giant Shooter Blue Pirates
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        cooldown: [ 25, 12 ],
        evolution: 374,
        evolvers: [ 116, 90, 96 ]
    },
    370: { // Giant Warrior Green Pirates
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        cooldown: [ 25, 12 ],
        evolution: 375,
        evolvers: [ 116, 91, 97 ]
    },
    371: { // Giant Fighter Yellow Pirates
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        cooldown: [ 25, 12 ],
        evolution: 376,
        evolvers: [ 116, 92, 98 ]
    },
    372: { // Giant Striker Black Pirates
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
        cooldown: [ 25, 12 ],
        evolution: 377,
        evolvers: [ 116, 93, 99 ]
    },
    373: { // Giant Imperial Slasher Red Pirates
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    374: { // Giant Imperial Shooter Blue Pirates
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    375: { // Female Giant Imperial Warrior Green Pirates
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    376: { // Giant Imperial Fighter Yellow Pirates
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    377: { // Giant Imperial Striker Black Pirates
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    378: { // Sea Cat
        special: "Recovers 3x character's RCV in HP",
        captain: "Boosts RCV by 1.5x",
        cooldown: [ 10, 5 ]
    },
    379: { // Kung Fu Dugong
        special: "Removes poison",
        cooldown: [ 15, 10 ],
        evolution: 380,
        evolvers: [ 115, 78, 300 ]
    },
    380: { // Kung Fu Dugong Faithful Apprentice
        special: "Removes poison",
        captain: "Boosts ATK and RCV of STR characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    381: { // Banana Gator
        special: "Reduces damage received by 20% for 1 turn",
        cooldown: [ 25, 8 ]
    },
    382: { // Sandora Dragon
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [ 15, 10 ]
    },
    383: { // Mr. 0 Baroque Works CEO (Crocodile)
        special: "Poisons one enemy",
        captain: "Reduces damage received by 10%, boosts ATK of INT units by 2x",
        cooldown: [ 17, 12 ],
        evolution: [ 384, 408 ],
        evolvers: [ [ 117, 88, 93, 94, 104 ], [ 118, 88, 266, 304, 267 ] ]
    },
    384: { // Sir Crocodile
        special: "Poisons one enemy",
        captain: "Reduces damage received by 20%, boosts ATK of INT units by 2x",
        cooldown: [ 17, 12 ]
    },
    385: { // Hogback
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 20, 10 ],
        evolution: 386,
        evolvers: [ 117, 82, 88, 93, 99 ]
    },
    386: { // Doctor Hogback
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 20, 10 ]
    },
    387: { // Cindry-chan
        special: "Changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [ 25, 18 ],
        evolution: 388,
        evolvers: [ 117, 81, 87, 385 ]
    },
    388: { // Victoria Cindry
        special: "Changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: [ 25, 18 ]
    },
    389: { // Emporio Ivankov
        special: "Changes own orb into [QCK] and every other orb into either [RCV], [STR], [DEX] or [QCK] orbs",
        captain: "Boosts ATK by 2.25x following a chain of DEX > INT > QCK attacks no lower than Good",
        cooldown: [ 17, 8 ],
        evolution: 390,
        evolvers: [ 118, 85, 94, 301, 101 ]
    },
    390: { // Emporio Ivankov, Queen of Kamabakka Kingdom
        special: "Changes own orb into [QCK] and every other orb into either [RCV], [STR], [DEX] or [QCK] orbs",
        captain: "Boosts ATK by 2.75x following a chain of DEX > INT > QCK attacks no lower than Good",
        cooldown: [ 17, 8 ]
    },
    391: { // Perona
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, deals 1,000 damage to all enemies",
        captain: "Boosts RCV of DEX characters by 1.5x",
        cooldown: [ 23, 14 ],
        evolution: 392,
        evolvers: [ 117, 86, 91, 97, 102 ]
    },
    392: { // Ghost Princess Perona
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, deals 1,000 damage to all enemies",
        captain: "Boosts RCV of DEX characters by 2x",
        cooldown: [ 23, 14 ]
    },
    393: { // Kumashi
        special: "Deals 35x character's ATK in STRdamage to one enemy",
        cooldown: [ 38, 18 ]
    },
    394: { // Inuppe
        special: "Deals 5,000 damage to all enemies",
        cooldown: [ 17, 8 ]
    },
    395: { // Miss Merry Christmas
        special: "Empties neighboring slots, boosts orb effectiveness by 1.25x for 1 turn",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: [ 15, 8 ],
        evolution: 396,
        evolvers: [ 79, 85, 90, 301 ]
    },
    396: { // Miss Merry Christmas the Mole Human
        special: "Empties neighboring slots, boosts orb effectiveness by 1.25x for 1 turn",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: [ 15, 8 ],
    },
    397: { // Mr. 4
        special: "Fills empty slots with [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        captain: "Boosts ATK by 3x after scoring 5 Perfects in a row",
        cooldown: [ 25, 20 ],
        evolution: 398,
        evolvers: [ 78, 84, 89, 300 ]
    },
    398: { // Mr.4 & Lassoo the Dog Gun
        special: "Fills empty slots with [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        captain: "Boosts ATK by 4x after scoring 5 Perfects in a row",
        cooldown: [ 25, 20 ]
    },
    399: { // Miss Doublefinger
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [ 15, 8 ],
        evolution: 400,
        evolvers: [ 80, 86, 91, 302 ]
    },
    400: { // Miss Doublefinger the Spike Human
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        captain: "Boosts HP of Striker characters by 2x",
        cooldown: [ 15, 8 ]
    },
    401: { // Mr. 1
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 1.5x, slightly reduces ATK of every other character",
        cooldown: [ 18, 12 ],
        evolution: 402,
        evolvers: [ 78, 84, 89, 300 ]
    },
    402: { // Mr.1 the Fullbody Bladed Human
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 2x, reduces reduces ATK of every other character",
        cooldown: [ 18, 12 ]
    },
    403: { // Rebecca
        special: "Deals several times the character's ATK in QCK damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 150 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Reduces damage received by 50% if HP is low, boosts RCV by 3x if HP is low",
        cooldown: [ 20, 20 ]
    },
    404: { // Absalom
        special: "Reduces damage received by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 23, 14 ],
        evolution: 405,
        evolvers: [ 117, 84, 89, 95, 100 ]
    },
    405: { // Graveyeard Absalom
        special: "Reduces damage received by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 23, 14 ]
    },
    406: { // Zombie Shougun
        special: "Reduces HP to 1, deals 1,000 damage to all enemies, boosts ATK by 1.2x for 1 turn",
        cooldown: [ 30, 15 ]
    },
    407: { // Jigoro of the Wind
        special: "Randomizes all orbs, deals 7x character's ATK in DEX damage to all enemies",
        cooldown: [ 20, 10 ]
    },
    408: { // Sir Crocodile the Shichibukai
        special: "Changes own orb into [INT], randomizes every other orb, deals 15x character's ATK in INT damage to all enemies",
        captain: "Reduces damage received by 20%, boosts ATK of Slasher characters by 2x",
        cooldown: [ 23, 18 ]
    },
    409: { // Jinbei
        special: "Changes own orb into [QCK] deals 13x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [ 11, 6 ],
        evolution: 410,
        evolvers: [ 118, 85, 94, 301, 101 ]
    },
    410: { // Jinbei the Shichibukai
        special: "Changes own orb into [QCK] deals 13x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2.5x",
        cooldown: [ 11, 6 ]
    },
    411: { // Bartholomew Kuma
        special: "Changes neighboring slots' orbs into [STR] orbs, deals 1,000 damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 2x",
        cooldown: [ 20, 14 ],
        evolution: 412,
        evolvers: [ 118, 84, 94, 300, 100 ]
    },
    412: { // Bartholomew Kuma the Shichibukai
        special: "Changes neighboring slots' orbs into [STR] orbs, deals 1,000 damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 2x",
        cooldown: [ 20, 14 ]
    },
    413: { // Gekko Moriah
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [ 20, 10 ],
        evolution: 414,
        evolvers: [ 118, 88, 94, 304, 104 ]
    },
    414: { // Gekko Moriah the Shichibukai
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of INT characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 20, 10 ]
    },
    415: { // Boa Hancock
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn",
        cooldown: [ 17, 13 ],
        evolution: 416,
        evolvers: [ 118, 266, 94, 96, 267 ]
    },
    416: { // Boa Hancock the Shichibukai
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn",
        cooldown: [ 17, 13 ]
    },
    417: { // Donquixote Doflamingo
        special: "Freely switch orbs between slots twice, boosts orbs effectiveness by 2x for 1 turn",
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        cooldown: [ 28, 14 ],
        evolution: 418,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    418: { // Donquixote Doflamingo the Shichibukai
        special: "Freely switch orbs between slots twice, boosts orbs effectiveness by 2x for 1 turn",
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        cooldown: [ 28, 14 ]
    },
    419: { // Sanji Parage Shot - Arashi (Kimono)
        special: "Reduces the defense of all enemies by 50% for 2 turns, randomizes all orbs",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 15, 15 ]
    },
    420: { // Monkey D. Luffy Gomu Gomu no Bazooka - Arashi (Kimono)
        special: "Reduces Silence duration by 3 turns, deals 15x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK, HP and RCV of STR characters by 1.5x",
        cooldown: [ 23, 13 ]
    },
    421: { // Roronoa Zoro Three Thousand Worlds - Arashi (Kimono)
        special: "Reduces Bind duration by 2 turns, deals 10x character's ATK in DEX damage to all enemies",
        captain: "Boosts ATK, HP and RCV of DEX characters by 1.5x",
        cooldown: [ 20, 10 ]
    },
    422: { // Nami Mirage Tempo - Arashi (Kimono)
        special: "Reduces damage received from INT enemies by 100% for 1 turn, heals a random amount of HP",
        captain: "Boosts ATK, HP and RCV of INT characters by 1.5x",
        cooldown: [ 20, 10 ]
    },
    423: { // Brook
        special: "Heals 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Prevents death as long as HP is above 70%",
        cooldown: [ 24, 15 ],
        evolution: 424,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    424: { // Humming Brook
        special: "Heals 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Prevents death as long as HP is above 70%",
        cooldown: [ 24, 15 ]
    },
    425: { // Ryuuma
        special: "Deals random PSY damage to all enemies",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        cooldown: [ 35, 18 ]
    },
    426: { // Masira
        special: "Boosts ATK of STR characters by 1.05x for 5 turns",
        captain: "Boosts HP of STR characters by 2x",
        cooldown: [ 17, 12 ]
    },
    427: { // Shoujou
        special: "Reduces Bind and Silence duration by 2 turns",
        captain: "Boosts HP of DEX characters by 2x",
        cooldown: [ 21, 16 ]
    },
    428: { // Montblanc Cricket
        special: "Reduces damage received by 50% for 2 turns",
        captain: "Boosts AATK of PSY characters by 2x",
        cooldown: [ 20, 15 ]
    },
    429: { // South Bird and the Forest Fauna
        special: "Deals 7x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        cooldown: [ 20, 15 ]
    },
    430: { // Bellamy
        special: "Boosts orbs effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of DEX characters by 1.5x",
        cooldown: [ 14, 9 ],
        evolution: 431,
        evolvers: [ 116, 86, 91, 97 ]
    },
    431: { // Bellamy the Hyena
        special: "Boosts orbs effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK and HP of DEX characters by 1.5x",
        cooldown: [ 14, 9 ]
    },
    432: { // Sarkies
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        cooldown: [ 25, 18 ]
    },
    433: { // Elizabeth
        special: "Reduces Bind and Silence duration by 1 turn",
        captain: "Boosts ATK by 2x following a chain of QCK > STR > DEX attacks no lower than Good",
        cooldown: [ 16, 6 ]
    },
    434: { // Caroline
        special: "Boosts orbs effectiveness by 1.25x for 3 turns",
        captain: "Boosts ATK by 2x following a chain of PSY > INT > INT attacks no lower than Good",
        cooldown: [ 21, 11 ]
    },
    435: { // Sanji - Traditional Kamabakka Kingdom Duel Style
        special: "Changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        captain: "Boosts ATK by 2x following a chain of INT > PSY > QCK attacks no lower than Good",
        cooldown: [ 12, 8 ],
        evolution: 436,
        evolvers: [ 117, 85, 433, 434, 96 ]
    },
    436: { // Sanji Candy-chan
        special: "Changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        captain: "Boosts ATK by 2.25x following a chain of INT > PSY > QCK attacks no lower than Good",
        cooldown: [ 12, 8 ]
    },
    437: { // Perona Sweet
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, poisons all enemies",
        captain: "Boosts RCV by 3x if HP is below 30% at the start of the turn",
        cooldown: [ 18, 18 ],
        evolution: 438,
        evolvers: [ 118, 80, 86, 94, 97 ]
    },
    438: { // Perona Sweet Ghost Princees
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, poisons all enemies",
        captain: "Boosts RCV by 5x if HP is below 30% at the start of the turn",
        cooldown: [ 18, 18 ]
    },
    439: { // Nefertari Vivi Love
        special: "Changes neighboring slots' orbs into [RCV], randomizes every other orb",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [ 16, 16 ],
        evolution: 440,
        evolvers: [ 118, 81, 87, 94, 98 ]
    },
    440: { // Princess Vivi Love
        special: "Changes neighboring slots' orbs into [RCV], randomizes every other orb",
        captain: "Recovers 7x character's RCV in HP at the end of the turn",
        cooldown: [ 16, 16 ]
    },
    441: {}, // Cowboy & Bourbon Jr. - Super Spot-Billed Duck Squad
    442: {}, // Stomp & Ivan X. - Super Spot-Billed Duck Squad
    443: {}, // Kentauros & Hikoichi - Super Spot-Billed Duck Squad
    444: { // Carue
        captain: "Boosts ATK of Evolver characters by 2x if HP is above 70% at the start of the turn",
        evolution: 445,
        evolvers: [ 441, 442, 443 ]
    },
    445: { // Captain Carue & The Super Spot-Billed Duck Squad
        special: "Changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, freely switch orbs between slots 3 times",
        captain: "Boosts ATK of Evolver characters by 2.5x if HP is above 70% at the start of the turn",
        cooldown: [ 26, 17 ]
    },
    446: { // Marshall D. Teach
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        captain: "Doubles damage received, boosts ATK of STR characters by 2x and their HP by 1.5x",
        cooldown: [ 30, 15 ],
        evolution: 447,
        evolvers: [ 118, 266, 89, 300, 100 ]
    },
    447: { // Blackbeard
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        captain: "Doubles damage received, boosts ATK of STR characters by 2.5x and their HP by 2.25x",
        cooldown: [ 30, 15 ]
    },
    448: { // Thatch
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 16, 10 ],
        evolution: 449,
        evolvers: [ 118, 83, 85, 301, 101 ]
    },
    449: { // Thatch of the Twin Blade
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn",
        cooldown: [ 16, 10 ]
    },
    450: { // Namur
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals DEX damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        cooldown: [ 25, 18 ],
        evolution: 451,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    451: { // One-Shot Namur
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals DEX damage to one enemy",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        cooldown: [ 25, 18 ]
    },
    452: { // Rakuyo
        special: "Changes own orb and the captain's orb into [PSY]",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x",
        cooldown: [ 16, 10 ],
        evolution: 453,
        evolvers: [ 118, 83, 87, 303, 103 ]
    },
    453: { // Rakuyo of the Morning Star
        special: "Changes own orb and the captain's orb into [PSY]",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x",
        cooldown: [ 16, 10 ]
    },
    454: { // Fossa
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        cooldown: [ 25, 18 ],
        evolution: 455,
        evolvers: [ 118, 83, 84, 300, 100 ]
    },
    455: { // Fossa the Flaming Blade
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        cooldown: [ 25, 18 ]
    },
    456: { // Curiel
        special: "Changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, freely switch orbs between slots once",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [ 18, 10 ],
        evolution: 457,
        evolvers: [ 118, 83, 88, 304, 104 ]
    },
    457: { // Curiel the Heavy Weapon Specialist
        special: "Changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, freely switch orbs between slots once",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [ 18, 10 ]
    },
    458: { // Sengoku
        special: "Deals random PSY damage to all enemies, boosts ATK by 1.5x",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x",
        cooldown: [ 28, 19 ],
        evolution: 459,
        evolvers: [ 118, 266, 94, 98, 267 ]
    },
    459: { // Sengoku the Buddha
        special: "Deals random PSY damage to all enemies, boosts ATK by 1.5x",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x",
        cooldown: [ 28, 19 ]
    },
    460: { // Criminal Galdino Mr.3
        special: "Heals 33 HP after the end of each turn for 999 turns, delays all enemies for 1 turn",
        captain: "Reduces damage received by 10%",
        cooldown: [ 14, 10 ]
    },
    461: { // Fugitive Bentham Mr.2 Bon Clay
        special: "Changes own orb into [DEX], randomizes every other orb, boosts ATK of Fighter characters by 1.25x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [ 25, 15 ],
        evolution: 462,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    462: { // Prison Break Expert Mr.2 Bon Clay
        special: "Changes own orb into [DEX], randomizes every other orb, boosts ATK of Fighter characters by 1.25x for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: [ 25, 15 ]
    },
    463: { // Satori
        special: "Empties all slots, deals 25x character's ATK in PSY damage to one enemy",
        captain: "Boosts HP of PSY characters by 2x",
        cooldown: [ 25, 20 ]
    },
    464: { // Shura
        special: "Deals 20x character's ATK in INT damage to all enemies",
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    465: { // Gedatsu
        special: "Deals 20x character's ATK in QCK damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Boosts ATK by 3x after scoring 4 hits no lower than Good in a row",
        cooldown: [ 25, 18 ]
    },
    466: { // Braham
        special: "Delays all enemies for 1 turn",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    467: { // Yama
        special: "Changes [RCV] orbs into [STR] orbs",
        captain: "Boosts ATK and RCV of STR characters by 1.5x",
        cooldown: [ 15, 10 ]
    },
    468: { // White Beret Force Yellow Group Skypiea God's Army
        special: "Boosts RCV by 1.5x for 1 turn",
        cooldown: 25,
        evolution: 470,
        evolvers: [ 116, 81, 98 ]
    },
    469: { // White Beret Force Black Group Skypiea God's Army
        special: "Freely switch orbs between slots once",
        cooldown: 18,
        evolution: 471,
        evolvers: [ 116, 82, 99 ]
    },
    470: { // White Beret Force Yellow Group Commander Skypiea God's Army
        special: "Boosts RCV by 1.5x for 1 turn",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: 25
    },
    471: { // White Beret Force Black Group Commander Skypiea God's Army
        special: "Freely switch orbs between slots once",
        cooldown: 18
    },
    472: { // Red God's Guard Group Skypiea God's Army
        special: "Deals 20x character's ATK in STR damage to one enemy",
        cooldown: [ 20, 15 ]
    },
    473: { // Blue God's Guard Group Skypiea God's Army
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        cooldown: 20
    },
    474: { // Green God's Guard Group Skypiea God's Army
        special: "Deals 5x character's ATK in DEX damage to all enemies, reduces Bind duration by 1 turn",
        cooldown: [ 25, 15 ]
    },
    475: { // Yellow God's Guard Group Skypiea God's Army
        special: "Deals 5x character's ATK in STR damage to all enemies, heals 500 HP",
        cooldown: [ 25, 15 ]
    },
    476: { // Black God's Guard Group Skypiea God's Army
        special: "Deals 1,000 damage to one enemy",
        cooldown: 20
    },
    477: { // Red Assult Squad Skypiea God's Army
        special: "Changes [DEX] orbs into [STR] orbs",
        cooldown: [ 15, 7 ],
        evolution: 482,
        evolvers: [ 116, 84, 89, 95 ]
    },
    478: { // Blue Assult Squad Skypiea God's Army
        special: "Changes [PSY] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ],
        evolution: 483,
        evolvers: [ 116, 85, 90, 96 ]
    },
    479: { // Green Assult Squad Skypiea God's Army
        special: "Changes [INT] orbs into [DEX] orbs",
        cooldown: [ 15, 7 ],
        evolution: 484,
        evolvers: [ 116, 86, 91, 97 ]
    },
    480: { // Yellow Assult Squad Skypiea God's Army
        special: "Changes [QCK] orbs into [PSY] orbs",
        cooldown: [ 15, 7 ],
        evolution: 485,
        evolvers: [ 116, 87, 92, 98 ]
    },
    481: { // Black Assult Squad Skypiea God's Army
        special: "Changes [DEX] orbs into [INT] orbs",
        cooldown: [ 15, 7 ],
        evolution: 486,
        evolvers: [ 116, 88, 93, 99 ]
    },
    482: { // Red Elite Assult Squad Skypiea God's Army
        special: "Changes [DEX] orbs into [STR] orbs",
        captain: "Boosts HP of Striker characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    483: { // Blue Elite Assult Squad Skypiea God's Army
        special: "Changes [PSY] orbs into [QCK] orbs",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x",
        cooldown: [ 15, 7 ]
    },
    484: { // Green Elite Assult Squad Skypiea God's Army
        special: "Changes [INT] orbs into [DEX] orbs",
        captain: "Reduces damage received by 10%",
        cooldown: [ 15, 7 ]
    },
    485: { // Yellow Elite Assult Squad Skypiea God's Army
        special: "Changes [QCK] orbs into [PSY] orbs",
        captain: "Boosts HP and RCV of PSY characters by 1.2x",
        cooldown: [ 15, 7 ]
    },
    486: { // Black Elite Assult Squad Skypiea God's Army
        special: "Changes [DEX] orbs into [INT] orbs",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 15, 7 ]
    },
    487: { // Red Nomad Group Shandia Warrior
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        cooldown: [ 25, 15 ],
        evolution: 490,
        evolvers: [ 115, 300 ]
    },
    488: { // Blue Nomad Group Shandia Warrior
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        cooldown: [ 25, 15 ],
        evolution: 491,
        evolvers: [ 116, 301 ]
    },
    489: { // Green Nomad Group Shandia Warrior
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        cooldown: [ 25, 15 ],
        evolution: 492,
        evolvers: [ 117, 302 ]
    },
    490: { // Red Nomad Group Expert Shandia Warrior
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        captain: "Boosts ATK and HP of Striker characters by 1.2x",
        cooldown: [ 25, 15 ]
    },
    491: { // Blue Nomad Group Expert Shandia Warrior
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        captain: "Boosts RCV of Striker characters by 1.5x",
        cooldown: [ 25, 15 ]
    },
    492: { // Green Nomad Group Expert Shandia Warrior
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        captain: "Boosts ATK of DEX characters by 1.2x",
        cooldown: [ 25, 15 ]
    },
    493: { // Yellow Hunting Group Shandia Warrior
        special: "Recovers 7x character's RCV in HP",
        cooldown: [ 20, 15 ],
        evolution: 495,
        evolvers: [ 117, 81, 87 ]
    },
    494: { // Black Hunting Group Shandia Warrior
        special: "Deals 3x character's ATK in INT damage toc all enemies, poisons all enemies",
        cooldown: [ 20, 15 ],
        evolution: 496,
        evolvers: [ 117, 82, 88 ]
    },
    495: { // Yellow Hunting Group Expert Shandia Warrior
        special: "Recovers 7x character's RCV in HP",
        captain: "Recovers 500 HP at the end of the turn",
        cooldown: [ 20, 15 ]
    },
    496: { // Black Hunting Group Expert Shandia Warrior
        special: "Deals 3x character's ATK in INT damage to all enemies, poisons all enemies",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 20, 15 ]
    },
    497: { // Portgas D. Ace of the 3 Terrible Brothers of Colubo Mountain
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 11, 11 ],
        evolution: 498,
        evolvers: [ 90, 94, 96, 301, 101 ]
    },
    498: { // Portgas D. Ace of the 3 Terrible Brothers of Colubo Mountain - Brother Oath
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 1.5x",
        cooldown: [ 11, 11 ]
    },
    499: { // Bellmere
        special: "Delays all enemies by 1 turn",
        captain: "Boosts RCV of Shooter characters by 1.5x",
        cooldown: [ 13, 9 ],
        evolution: 500,
        evolvers: [ 117, 80, 97, 94 ]
    },
    500: { // Bellmere - Nami's and Nojiko's Mother
        special: "Delays all enemies by 1 turn",
        captain: "Boosts RCV of Shooter characters by 2x",
        cooldown: [ 13, 9 ]
    },
    501: { // Kaya
        special: "Recovers 5x character's RCV in HP at the end of the turn for 4 turns",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.2x",
        cooldown: [ 21, 16 ],
        evolution: 502,
        evolvers: [ 117, 87, 92, 94 ]
    },
    502: { // Kaya, Lady of Syrup's Village
        special: "Recovers 5x character's RCV in HP at the end of the turn for 4 turns",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.5x",
        cooldown: [ 21, 16 ]
    },
    503: { // Hotori Kotori
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        captain: "Boosts HP of INT characters by 1.5x",
        cooldown: [ 20, 15 ],
        evolution: 504,
        evolvers: [ 117, 82, 88, 104 ]
    },
    504: { // Hotori Kotori - Lieutenants of God's Army
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        captain: "Boosts HP of INT characters by 2x",
        cooldown: [ 20, 15 ]
    },
    505: { // Pell
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        captain: "Prevents death as long as HP is above 30%",
        cooldown: [ 21, 15 ],
        evolution: 506,
        evolvers: [ 116, 79, 85, 266 ]
    },
    506: { // Pell, Alabasta's Guardian Falcon
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        captain: "Prevents death as long as HP is above 30%",
        cooldown: [ 21, 15 ]
    },
    507: { // Chaka
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 1.2x",
        cooldown: [ 25, 18 ],
        evolution: 508,
        evolvers: [ 116, 89, 95, 300 ]
    },
    508: { // Chaka, Alabasta's Guardian Jackal
        special: "Deals 25x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK and HP of STR characters by 1.5x",
        cooldown: [ 25, 18 ]
    },
    509: { // The Strongest Prisoner Sir. Crocodile Mr.0, Former Leader of Baroque Works
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        captain: "Boosts ATK of Striker characters by 1.5x",
        cooldown: [ 24, 14 ],
        evolution: 510,
        evolvers: [ 117, 85, 96, 96, 301 ]
    },
    510: { // The Strongest Prisoner Sir. Crocodile the Shichibukai
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        captain: "Reduces damage received by 10%, boosts ATK of Striker characters by 2x",
        cooldown: [ 24, 14 ]
    },
    511: { // Prisoner Daz Bonez Mr.1
        special: "Reduces damage received by 30% for 2 turns, boosts ATK of Slasher character by 1.25x for 2 turns",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: [ 22, 17 ]
    },
    512: { // Sabo of the 3 Terrible Brothers of Colubo Mountain
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        captain: "Prevents death as long as HP is above 50%",
        cooldown: [ 15, 15 ],
        evolution: 513,
        evolvers: [ 115, 116, 117, 118, 81 ]
    },
    513: { // Sabo of the 3 Terrible Brothers of Colubo Mountain - Brother Oath
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        captain: "Prevents death as long as HP is above 50%, boosts ATK of PSY characters by 1.5x if HP is above 50% at the start of the turn",
        cooldown: [ 15, 15 ]
    },
    514: { // Nico Robin Tropical
        special: "Boosts ATK of INT characters by 1.5x for 1 turn, reduces the defense of all enemies by 50% for 1 turn",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: [ 14, 14 ]
    },
    515: { // Heracles
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], freely switch orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x",
        cooldown: [ 24, 11 ],
        evolution: 516,
        evolvers: [ 118, 87, 266, 303, 103 ]
    },
    516: { // Heracles the Hero of the Forest
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], freely switch orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x, heals a bit of HP at the end of the turn",
        cooldown: [ 24, 11 ]
    },
    517: { // Usoppun
        special: "Empties all slots with [RCV] orbs, boosts ATK by 5% for 2 turns",
        captain: "Boosts HP of PSY characters by 1.5x",
        cooldown: [ 10, 5 ],
        evolution: 518,
        evolvers: [ 116, 81, 98 ]
    },
    518: { // Usoppun, Heracles' Pupil
        special: "Empties all slots with [RCV] orbs, boosts ATK by 5% for 2 turns",
        captain: "Boosts HP of PSY characters by 2x, boosts chances of getting [RCV] orbs",
        cooldown: [ 10, 5 ]
    },
    519: { // Monkey D. Luffy, Merveille's Adventurer (Strong World/SW)
        special: "Reduce current HP by 99%, deals 25x character's ATK in fixed STR damage to all enemies, boosts ATK of STR characters by 2x",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK of STR characters by 2x",
        cooldown: [ 25, 18 ],
        evolution: 520,
        evolvers: [ 118, 84, 95, 94, 100 ]
    },
    520: { // Monkey D. Luffy, Strawhat Crew's Attack (Strong World/SW)
        special: "Reduce current HP by 99%, deals 25x character's ATK in fixed STR damage to all enemies, boosts ATK of STR characters by 2x",
        specialNotes: "Fixed damage means the special entirely bypasses enemy defense",
        captain: "Boosts ATK of STR characters by 2.5x",
        cooldown: [ 23, 18 ]
    },
    521: { // Sanji, Merveille's Adventurer (Strong World/SW)
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 100 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        cooldown: [ 23, 17 ],
        evolution: 522,
        evolvers: [ 118, 83, 88, 94, 104 ]
    },
    522: { // Sanji, Strawhat Crew's Attack (Strong World/SW)
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 100 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        cooldown: [ 25, 17 ]
    },
    523: { // Nami, Merveille's Adventurer (Strong World/SW)
        special: "Randomizes all orbs, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        cooldown: [ 23, 16 ],
        evolution: 524,
        evolvers: [ 118, 85, 96, 301, 101 ]
    },
    524: { // Nami and Billy the Thunder Bird (Strong World/SW)
        special: "Randomizes all orbs, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        cooldown: [ 23, 16 ]
    },
    525: { // Brook, Merveille's Adventurer (Strong World/SW)
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [ 23, 16 ],
        evolution: 526,
        evolvers: [ 118, 92, 94, 98, 303 ]
    },
    526: { // Brook, Strawhat Crew's Attack (Strong World/SW)
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        cooldown: [ 23, 16 ]
    },
    527: { // Chopper, Merveille's Adventurer (Strong World/SW)
        special: "Removes poison, recovers 15x character's RCV in HP",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        cooldown: [ 23, 17 ],
        evolution: 528,
        evolvers: [ 118, 86, 266, 97, 302 ]
    },
    528: { // Chopper, Strawhat Crew's Attack (Strong World/SW)
        special: "Removes poison, recovers 15x character's RCV in HP",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        cooldown: [ 23, 17 ]
    },
    529: { // Shanks, Black Clothes and Red Hair (Strong World/SW)
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        captain: "Boosts chances of getting [PSY] orbs, greatly boosts ATK of PSY characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 25,
        evolution: 530,
        evolvers: [ 118, 87, 266, 98, 267 ]
    },
    530: { // Shanks, The Black-Clothed Yonkou (Strong World/SW)
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        captain: "Boosts chances of getting [PSY] orbs, greatly boosts ATK of PSY characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 25
    },
    531: { // Nico Robin Sakura Snow Storm
        special: "Reduces damage received by 30% for 4 turns",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%",
        cooldown: [ 16, 16 ],
        evolution: 532,
        evolvers: [ 117, 80, 86, 91, 97 ]
    },
    532: { // Nico Robin Sakura Full Bloom
        special: "Reduces damage received by 30% for 4 turns",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%",
        cooldown: [ 16, 16 ]
    },
    533: { // Brook Cherry Head
        special: "Boosts orbs effectiveness by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 18, 18 ],
        evolution: 534,
        evolvers: [ 118, 79, 85, 96, 101 ]
    },
    534: { // Brook Sakura Color
        special: "Boosts orbs effectiveness by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 18, 18 ]
    },
    535: { // Nami Sakura Cloud
        special: "Reduces damage received by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts RCV of QCK characters by 1.5x",
        cooldown: [ 16, 16 ],
        evolution: 536,
        evolvers: [ 118, 80, 86, 91, 97 ]
    },
    536: { // Nami Sakura Weather
        special: "Reduces damage received by 50% for 2 turns, boosts RCV by 2x for 2 turns",
        captain: "Boosts RCV of QCK characters by 2x",
        cooldown: [ 16, 16 ]
    },
    537: { // Domino
        special: "Reduces Bind and Silence duration by 1 turn, locks all orbs for 1 turn",
        captain: "Boosts chain multiplier by 2x",
        cooldown: [ 25, 16 ],
        evolution: 538,
        evolvers: [ 117, 81, 92, 98, 103 ]
    },
    538: { // Domino, Impel Down's Head Jailer
        special: "Reduces Bind and Silence duration by 1 turn, locks all orbs for 1 turn",
        captain: "Boosts chain multiplier by 2x, recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [ 25, 16 ]
    },
    539: { // Minorhinoceros
        special: "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
        cooldown: [ 50, 20 ]
    },
    540: { // Basilisk
        special: "Boosts chances of getting [DEX] orbs for 2 turns",
        cooldown: [ 16, 12 ]
    },
    541: { // Ohm
        special: "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 turns",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 50% at the start of the turn",
        cooldown: 15
    },
    542: { // Nola the Giant Snake
        special: "Boosts RCV by 2x for 1 turn",
        captain: "Boosts HP by 1.5x",
        cooldown: 18
    },
    543: { // Wiper
        special: "Reduces current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x, reduces RCV by 100%",
        cooldown: [ 25, 20 ],
        evolution: 544,
        evolvers: [ 117, 86, 97, 102 ]
    },
    544: { // Wiper, Descendant of the Great Calgara
        special: "Reduces current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        captain: "Boosts ATK of Shooter characters by 2.25x, their HP by 1.5x and reduces RCV by 100%",
        cooldown: [ 25, 20 ]
    },
    545: { // Enel
        special: "Deals 6,000 damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [ 32, 17 ],
        evolution: 546,
        evolvers: [ 118, 266, 92, 303, 103 ]
    },
    546: { // God Enel
        special: "Deals 6,000 damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received by 20%",
        cooldown: [ 32, 17 ]
    },
    547: { // Monkey D. Luffy of the 3 Terrible Brothers of Colubo Mountain
        special: "Reduces current HP by 10%, deals 1x character's ATK in STR damage to one enemy, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts chances of getting [RCV] orbs",
        cooldown: [ 18, 18 ],
        evolution: 548,
        evolvers: [ 118, 78, 78, 84, 84 ]
    },
    548: { // Monkey D. Luffy of the 3 Terrible Brothers of Colubo Mountain - Brother Oath
        special: "Reduces current HP by 10%, deals 1x character's ATK in STR damage to one enemy, prevents death as long as HP is above 50% for 1 turn",
        captain: "Boosts chances of getting [RCV] orbs, boosts ATK by 1.2x",
        cooldown: [ 18, 18 ]
    },
    549: { // Sadi-chan
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        captain: "Boosts ATK by 2x after scoring 3 Perfects in a row",
        cooldown: [ 20, 10 ],
        evolution: 550,
        evolvers: [ 117, 82, 88, 99, 104 ]
    },
    550: { // Sadi-chan, Impel Down's Chief Guard
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        cooldown: [ 20, 10 ]
    },
    551: { // Minokoala
        special: "Reduces damage received by 50% for 1 turn, deals 15x character's ATK in STR damage to one enemy",
        cooldown: [ 45, 15 ]
    },
    552: { // Manticore
        special: "Reduces all enemies' defense by 100% for 1 turn",
        cooldown: [ 33, 18 ]
    },
    553: { // Roronoa Zoro, Merveille's Adventurer (Strong World/SW)
        special: "Changes neighboring slots' orbs into [DEX], deals 1,000 damage to all enemies",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        cooldown: 20,
        evolution: 554,
        evolvers: [ 118, 83, 97, 302, 102 ]
    },
    554: { // Roronoa Zoro, Strawhat Crew's Attack (Strong World/SW)
        special: "Changes neighboring slots' orbs into [DEX], deals 1,000 damage to all enemies",
        captain: "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
        cooldown: 20
    },
    555: { // Usopp, Merveille's Adventurer (Strong World/SW)
        special: "Delays all enemies for 3 turns, cuts all enemies' current HP by 10%",
        captain: "Boosts ATK of Shooter characters by 2x",
        cooldown: [ 21, 14 ],
        evolution: 556,
        evolvers: [ 118, 83, 96, 301, 101 ]
    },
    556: { // Usopp, Strawhat Crew's Attack (Strong World/SW)
        special: "Delays all enemies for 3 turns, cuts all enemies' current HP by 10%",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        cooldown: [ 21, 14 ]
    },
    557: { // Nico Robin, Merveille's Adventurer (Strong World/SW)
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        cooldown: [ 16, 10 ],
        evolution: 558,
        evolvers: [ 118, 88, 94, 304, 104 ]
    },
    558: { // Nico Robin, Strawhat Crew's Attack (Strong World/SW)
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        cooldown: [ 16, 10 ]
    },
    559: { // Franky, Merveille's Adventurer (Strong World/SW)
        special: "Changes own orb into [STR], boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of the turn",
        cooldown: [ 17, 11 ],
        evolution: 560,
        evolvers: [ 118, 83, 84, 300, 100 ]
    },
    560: { // Franky, Strawhat Crew's Attack (Strong World/SW)
        special: "Changes own orb into [STR], boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of the turn",
        cooldown: [ 17, 11 ]
    },
    561: { // Portgas D. Ace, Black Clothes Hiken
        special: "Reduces current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        captain: "Boosts HP of Shooter characters by 1.5x and their ATK by 3x if they have a matching orb, by 2x otherwise",
        cooldown: 22,
        evolution: 562,
        evolvers: [ 118, 86, 266, 302, 267 ]
    },
    562: { // Portgas D. Ace, Black Clothes - Commander of the 2nd Division of the Whitebeard Pirates
        special: "Reduces current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        captain: "Boosts HP of Shooter characters by 1.5x and their ATK by 3x if they have a matching orb, by 2x otherwise",
        cooldown: 22
    },
    563: { // Porche
        special: "Deal small PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
        cooldown: 15
    },
    564: { // Capote
        special: "Reduces Bind duration by 2 turns",
        cooldown: 16
    },
    565: { // Hamburg
        special: "Deals 5,000 damage to one enemy",
        cooldown: 18
    },
    566: { // Pickles
        special: "Empties all slots with hindrance orbs",
        cooldown: 14
    },
    567: { // Big Pan
        special: "Reduces Bind and Silence duration by 1 turn, deals STR damage to all enemies",
        cooldown: 23
    },
    568: { // Foxy
        special: "Delays all enemies for 2 turns, freely switch orbs between slots twice",
        captain: "Boosts ATK, HP and RCV by 1.25x",
        cooldown: 25,
        evolution: 569,
        evolvers: [ 117, 83, 88, 93, 99 ]
    },
    569: { // Foxy the Silver Fox
        special: "Delays all enemies for 2 turns, freely switch orbs between slots twice",
        captain: "Boosts ATK, HP and RCV by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        cooldown: 25
    },
    570: { // Monkey D. Luffy Davy Back Fight - Afro
        special: "Changes hindrance orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus.",
        cooldown: [ 25, 14 ],
        evolution: 571,
        evolvers: [ 170, 142, 184, 237, 572 ]
    },
    571: { // Monkey D. Luffy Davy Back Fight - Combat
        special: "Changes hindrance orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus.",
        cooldown: [ 25, 14 ]
    },
    572: { // Usopp Davy Back Fight - Second
        special: "Boosts ATK of Fighter characters by 2x for 1 turn, binds himself for 15 turn",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the turn",
        cooldown: [ 30, 15 ]
    },
    573: { // Tony Tony Chopper Davy Back Fight - Mask
        special: "Reduces Silence duration by 2 turns, recovers 10x character's RCV in HP",
        captain: "Boosts RCV by 1.2x",
        cooldown: [ 20, 15 ]
    },
    574: { // Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        captain: "Boosts ATK of Striker characters by 2x",
        cooldown: [ 33, 18 ],
        evolution: 575,
        evolvers: [ 118, 88, 266, 304, 104 ]
    },
    575: { // Aokiji the Freezing Man
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        captain: "Boosts ATK and HP of Striker characters by 2x",
        cooldown: [ 33, 18 ]
    },
    576: { // Tea Time Nami
        special: "Changes [PSY] orbs into [INT] orbs, boosts RCV by 1.5x for 1 turn",
        captain: "Boosts ATK by 1.5x, RCV by 1.2x",
        cooldown: [ 12, 12 ]
    },
    577: { // Monkey D. Luffy, Record of the Voyage - Strawhat Crew (Log Luffy)
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits",
        cooldown: 23,
        evolution: 578,
        evolvers: [ 118, 266, 95, 300, 267 ]
    },
    578: { // Monkey D. Luffy, Dream of the Voyage - Pirate King (Log Luffy)
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits",
        cooldown: 23
    },
    579: { // Roronoa Zoro, Record of the Voyage - Strawhat Crew (Log Zoro)
        special: "Changes hindrance orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK and DEX characters by 1.5x",
        cooldown: 20,
        evolution: 580,
        evolvers: [ 117, 85, 86, 96, 97 ]
    },
    580: { // Roronoa Zoro, Dream of the Voyage - Strongest Swordsman (Log Zoro)
        special: "Changes hindrance orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        captain: "Boosts ATK of QCK and DEX characters by 2x",
        cooldown: 20
    },
    581: { // Genbou
        special: "Cuts all enemies' current HP by 7%",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 20, 11 ]
    },
    582: { // Kamakiri
        special: "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK character by 1.5x for 1 turn",
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        cooldown: [ 26, 17 ]
    },
    583: { // Laki
        special: "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 units for 3 turns",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        cooldown: [ 21, 10 ]
    },
    584: { // Aisa
        special: "Reduces damage received from PSY enemies by 100% for 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, greatly reduces ATK, HP and RCV",
        cooldown: [ 22, 8 ]
    },
    585: { // Nojiko
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        captain: "Boosts RCV of PSY characters by 1.5x",
        cooldown: 20,
        evolution: 586,
        evolvers: [ 116, 87, 92, 98 ]
    },
    586: { // Nojiko, Nami's Sister
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        captain: "Boosts HP and RCV of PSY characters by 1.5x",
        cooldown: 20
    },
    587: { // Crocus
        special: "Removes poison, reduces Bind and Seal duration by 2 turns",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        cooldown: 21,
        evolution: 588,
        evolvers: [ 117, 304 ]
    },
    588: { // Crocus, Twin Cape's Lighthouse Keeper
        special: "Removes poison, reduces Bind and Seal duration by 2 turns",
        captain: "Recovers 5x character's RCV in HP at the end of the turn",
        cooldown: 21
    },
    589: { // Kohza
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        captain: "Boosts ATK by 1.5x, reduces HP and RCV by 80%",
        cooldown: 20,
        evolution: 590,
        evolvers: [ 116, 117, 79, 85 ]
    },
    590: { // Kohza, Leader of the Rebel Army
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        captain: "Boosts ATK by 2x, reduces HP and RCV by 80%",
        cooldown: 20
    },
    591: {},
    592: {},
    593: {},
    594: {},
    595: {}, // Black Turtle Princess
    596: { // Tony Tony Chopper, Record of the Voyage - Strawhat Crew (Log Chopper)
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of one enemy by 50% for 3 turns",
        captain: "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of the turn",
        cooldown: 20,
        evolution: 597,
        evolvers: [ 117, 78, 84, 89, 95 ]
    },
    597: { // Tony Tony Chopper, Dream of the Voyage - Greatest Doctor (Log Chopper)
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of one enemy by 50% for 3 turns",
        captain: "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of the turn",
        cooldown: 20
    },
    598: { // Buggy the Pirate Apprentice
        special: "Changes own orb into [INT], freely move orbs between slots once",
        captain: "Boosts ATK of characters with fewer than 3 stars by 2.5x",
        cooldown: [ 16, 6 ],
        evolution: 599,
        evolvers: [ 117, 82, 82, 88, 88 ]
    },
    599: { // Buggy of the Roger Pirates
        special: "Changes own orb into [INT], freely move orbs between slots once",
        captain: "Boosts ATK of characters with fewer than 3 stars by 3x",
        cooldown: [ 16, 6 ]
    },
    600: { // Shanks the Pirate Apprentice
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        captain: "Boosts ATK of PSY characters by 1.5x",
        cooldown: [ 18, 10 ],
        evolution: 601,
        evolvers: [ 117, 81, 87, 98, 103 ]
    },
    601: { // Shanks of the Roger Pirates
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [ 18, 10 ]
    },
    602: { // Enel - 200 Million Volt Thunder God
        special: "Reduces current HP by 90%, deals 20,000 damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        captain: "Boosts ATK of QCK characters by 2x",
        cooldown: [ 32, 17 ],
        evolution: 603,
        evolvers: [ 118, 266, 96, 301, 101 ]
    },
    603: { // Enel the Lightning Human - 200 Million Volt Thunder God
        special: "Reduces current HP by 90%, deals 20,000 damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        captain: "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of the turn",
        cooldown: [ 32, 17 ]
    },
    604: { // Sanji, Record of the Voyage - Strawhat Crew (Log Sanji)
        special: "Cuts all enemies' current HP by 10%, changes [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 18,
        evolution: 605,
        evolvers: [ 117, 86, 97, 97, 302 ]
    },
    605: { // Sanji, Dream of the Voyage - All Blue (Log Sanji)
        special: "Cuts all enemies' current HP by 10%, changes [QCK] orbs into [DEX] orbs",
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 20%",
        cooldown: 18
    },
    606: { // Zeff the Pirate
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts ATK of Fighter characters by 2x if HP is below 50% at the start of the turn",
        cooldown: [ 23, 13 ],
        evolution: 607,
        evolvers: [ 117, 80, 86, 97, 102 ]
    },
    607: { // Red Leg Zeff, Captain of the Cook Pirates
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes neighboring slots' orbs into [RCV] orbs",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is below 50% at the start of the turn",
        cooldown: [ 23, 13 ]
    },
    608: { // Thug Patty
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        cooldown: [ 14, 7 ]
    },
    609: { // Thug Carne
        special: "Changes the captain's orb into [RCV], randomizes every other orb",
        cooldown: [ 15, 8 ]
    },
    610: { // Hiking Bear
        special: "Changes [TND] orbs into [RCV] orbs",
        cooldown: 15
    },
    611: { // Pudding Pudding
        special: "Changes neighboring slots' orbs into [RCV]",
        cooldown: 18
    },
    612: { // Brook, Record of the Voyage - Strawhat Crew (Log Brook)
        special: "Boosts ATK and RCV by 45 units for 1 turn, reduces damage received by 45% for 1 turn",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: 13,
        evolution: 613,
        evolvers: [ 91, 94, 97, 97, 302 ]
    },
    613: { // Brook, Dream of the Voyage - Promised Meeting (Log Brook)
        special: "Boosts ATK and RCV by 45 units for 1 turn, reduces damage received by 45% for 1 turn",
        captain: "Boosts ATK, HP and RCV of Slasher characters by 1.5x",
        cooldown: 13
    },
    614: { // Zanbai
        special: "Reduces the defense of all enemies by 50% for 1 turn, deals 10x character's ATK in PSY damage to all enemies",
        captain: "Boosts ATK of characters with cost 20 or less by 2.25x if HP is below 30% at the start of the turn",
        cooldown: 23
    },
    615: { // Superhuman Destroyers, Axe User
        special: "Deals random STR damage to one enemy",
        cooldown: 20
    },
    616: { // Superhuman Destroyers, Lance User
        special: "Changes the captain's orb into STR",
        cooldown: 13
    },
    617: { // Superhuman Destroyers, Cannon User
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        cooldown: 18
    },
    618: { // Knuckle Hoodlum, Red Bounty Hunter
        special: "Deals 20x character's ATK in STR damage to one enemy",
        cooldown: [ 33, 18 ]
    },
    619: { // Knuckle Hoodlum, Green Bounty Hunter
        special: "Cuts all enemies' current HP by 5%",
        cooldown: 25
    },
    620: { // Katana Hoodlum, Blue Bounty Hunter
        special: "Changes [INT] orbs into [QCK] orbs",
        cooldown: [ 15, 7 ]
    },
    621: { // Katana Hoodlum, Red Bounty Hunter
        special: "Changes [INT] orbs into [STR] orbs",
        cooldown: [ 15, 7 ]
    },
    622: { // Pistol Hoodlum, Green Bounty Hunter
        special: "Boosts RCV by 100 units for 3 turns",
        cooldown: [ 20, 10 ]
    },
    623: { // Pistol Hoodlum, Yellow Bounty Hunter
        special: "Recovers 3x character's RCV in HP at the end of the turn for 5 turns",
        cooldown: [ 28, 18 ]
    },
    624: { // Stick Hoodlum, Yellow Bounty Hunter
        special: "Boosts chances of getting [PSY] orbs for 3 turns",
        cooldown: [ 25, 15 ]
    },
    625: { // Stick Hoodlum, Black Bounty Hunter
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        cooldown: [ 25, 15 ]
    },
    626: { // Gatling Hoodlum, Purple Bounty Hunter
        special: "Deals 13x character's ATK in INT damage to all enemies",
        cooldown: [ 35, 18 ]
    },
    627: { // Gatling Hoodlum, Blue Bounty Hunter
        special: "Randomizes all orbs",
        cooldown: [ 18, 8 ]
    },
    628: { // Tilestone
        special: "Deals 15,000 damage to one enemy",
        cooldown: 20
    },
    629: { // Franky, Boss of the Franky Family
        special: "Empties all slots with hindrance orbs, deals random INT damage to all enemies",
        captain: "Boosts ATK of characters with 3 or fewer stars by 2x",
        cooldown: 23
    },
    630: { // Kaku, Cipher Pol No.9
        special: "Changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        captain: "Boosts ATK of Slasher characters by 1.5x",
        cooldown: 25,
        evolution: 631,
        evolvers: [ 117, 90, 96, 301, 101 ]
    },
    631: { // Kaku Rokushiki, Cipher Pol No.9
        special: "Changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        captain: "Boosts ATK of Slasher characters by 2x",
        cooldown: 25
    },
    632: { // Rob Lucci, Cipher Pol No.9
        special: "Changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: 25,
        evolution: 633,
        evolvers: [ 117, 89, 95, 300, 100 ]
    },
    633: { // Rob Lucci Rokushiki, Cipher Pol No.9
        special: "Changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 25
    },
    634: { // Keimi
        special: "Boosts chances of getting [QCK] and [PSY] orbs, boosts ATK of QCK and PSY characters by 1.2x",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x",
        cooldown: [ 25, 16 ],
        evolution: 635,
        evolvers: [ 117, 79, 85, 96, 101 ]
    },
    635: { // Keimi, Takoyaki Stand Assistant
        special: "Boosts chances of getting [QCK] and [PSY] orbs, boosts ATK of QCK and PSY characters by 1.2x",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x",
        cooldown: [ 25, 16 ]
    },
    636: { // Pappug
        special: "Binds himself for 3 turns, reduces damage received by 50% for 3 turns, heals a small amount of HP at the end of the turn for 3 turns",
        captain: "Boosts ATK of characters with cost 2 or less by 3x",
        cooldown: [ 23, 15 ]
    },
    637: { // Hatchan, Takoyaki Stand Owner
        special: "Cuts all enemies' current HP by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        captain: "Recovers 618 HP at the end of the turn, boosts ATK of Slasher characters by 1.5x",
        cooldown: [ 25, 12 ]
    },
    638: { // Doma
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        cooldown: 20,
        evolution: 639,
        evolvers: [ 118, 83, 96, 301, 101 ]
    },
    639: { // Bohemian Knight Doma
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Slasher characters by 2x",
        cooldown: 20
    },
    640: { // Decalvan Brothers
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 50 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of the turn",
        cooldown: 23,
        evolution: 641,
        evolvers: [ 118, 83, 86, 302, 102 ]
    },
    641: { // Decalvan Brothers, Sibling Bonds
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the lower the HP is. The multiplier is calculated as: 50 * ( 1 - (remaining HP) / (total HP) )",
        captain: "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of the turn",
        cooldown: 23
    },
    642: { // Squard
        special: "Reduces current HP by 30%, deals 10x character's ATK in PSY damage to one enemy, boosts orb effectiveness by 1.75x for 1 turn",
        captain: "Boosts ATK of PSY characters by 2.5x if HP is below 30% at the start of the turn",
        cooldown: 21,
        evolution: 643,
        evolvers: [ 118, 92, 94, 303, 103 ]
    },
    643: { // Maelstrom Spider Squard
        special: "Reduces current HP by 30%, deals 10x character's ATK in PSY damage to one enemy, boosts orb effectiveness by 1.75x for 1 turn",
        captain: "Boosts ATK of PSY characters by 3x if HP is below 30% at the start of the turn",
        cooldown: 21
    },
    644: { // Whitey Bay
        special: "Reduces Bind and Silence duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        captain: "Boosts ATK of INT characters by 2x",
        cooldown: 18,
        evolution: 645,
        evolvers: [ 118, 94, 99, 304, 104 ]
    },
    645: { // Ice Witch Whitey Bay
        special: "Reduces Bind and Silence duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        captain: "Boosts ATK of INT characters by 2.5x",
        cooldown: 18
    },
    646: { // Little Oars Jr.
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        captain: "Boosts ATK of Shooter characters by 2.5x if HP is below 30% at the start of the turn",
        cooldown: 25,
        evolution: 647,
        evolvers: [ 118, 84, 266, 95, 100 ]
    },
    647: { // Rampaging Little Oars Jr.
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is below 30% at the start of the turn",
        cooldown: 25
    },
    648: { // Marco, Whitebeard Pirates' 1st Division Commander
        special: "Recovers 100x character's RCV in HP, boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn",
        cooldown: 25,
        evolution: 649,
        evolvers: [ 118, 85, 266, 301, 267 ]
    },
    649: { // Phoenix Marco, Whitebeard Pirates' 1st Division Commander
        special: "Recovers 100x character's RCV in HP, boosts orb effectiveness by 1.5x for 2 turns",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn",
        cooldown: 25
    },
    650: { // Nami, Record of the Voyage - Strawhat Crew (Log Nami)
        special: "Deals 5,000 damage to one enemy, boost orb effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x",
        cooldown: 15,
        evolution: 651,
        evolvers: [ 117, 83, 88, 93, 104 ]
    },
    651: { // Nami, Dream of the Voyage - World Map (Log Nami)
        special: "Deals 5,000 damage to one enemy, boost orb effectiveness by 1.5x for 1 turn",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x",
        cooldown: 15
    },
    652: { // Iron Mask Duval
        special: "Cuts all enemies' current HP by 20%, reduces damage received by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs",
        cooldown: [ 28, 14 ],
        evolution: 653,
        evolvers: [ 116, 117, 80, 91, 97 ]
    },
    653: { // Duval, Head of the Flying Fish Riders
        special: "Cuts all enemies' current HP by 20%, reduces damage received by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs",
        cooldown: [ 28, 14 ],
        evolution: [ 654, 654 ],
        evolvers: [ [ 118, 86, 266, 97, 102 ], [ 18 ] ]
    },
    654: { // Duval, Head of the Rosy Life Riders
        special: "Cuts all enemies' current HP by 20%, reduces damage received by 50% for 1 turn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs",
        cooldown: [ 28, 14 ]
    },
    655: { // Pirate Arlong
        special: "Changes empty slots and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Boosts ATK of STR characters by 1.5x",
        cooldown: [ 24, 15 ],
        evolution: 656,
        evolvers: [ 117, 78, 84, 95, 100 ]
    },
    656: { // Arlong of the Sun Pirates
        special: "Changes empty slots and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, boosts orb effectiveness by 1.25x for 2 turns",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of STR characters by 2x",
        cooldown: [ 24, 15 ]
    },
    657: { // Kuroobi of the Sun Pirates
        special: "Changes [INT] and [PSY] orbs into either [STR] orbs or empty slots",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        cooldown: [ 20, 10 ]
    },
    658: { // Choo of the Sun Pirates
        special: "Changes all orbs into either [INT] or [PSY] orbs",
        captain: "Boosts ATK of Shooter characters by 1.5x",
        cooldown: [ 30, 17 ]
    },
    659: { // Monkey D. Luffy Swim Ring
        special: "Reduces Bind and Silence duration by 2 turns, reduces damage received by 50% for 2 turns",
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
    662: { // Nami Holiday
        special: "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
        captain: "Boosts ATK of PSY characters by 2x",
        cooldown: [ 15, 15 ]
    },
    663: { // Nefertari Vivi, Princess of the Alabasta Kingdom
        special: "Deals PSY damage to one enemy, recovers 5x character's RCV in HP at the end of the turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        captain: "Recovers 2x character's RCV in HP at the end of the turn",
        cooldown: [ 25, 16 ]
    },
    664: { // Nefertari Vivi, Vice-Leader of the Suna Suna Clan
        special: "Deals PSY damage to one enemy, recovers 5x character's RCV in HP at the end of the turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        captain: "Recovers 3x character's RCV in HP at the end of the turn",
        cooldown: [ 25, 16 ]
    },
    665: { // Kohza, Alabasta Citizen
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        captain: "Boosts ATK by 1.2x, reduces HP and RCV by 80%",
        cooldown: [ 19, 10 ]
    },
    666: { // Kohza, Leader of the Suna Suna Clan
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        captain: "Boosts ATK by 1.75x, reduces HP and RCV by 80%",
        cooldown: [ 19, 10 ]
    },
    667: { // Nefertari Cobra, King of the Alabasta Kingdom
        special: "Prevents death as long as HP is above 50% for 1 turn",
        captain: "Reduces damage received by 10%, boosts ATK by 1.5x",
        cooldown: [ 28, 15 ]
    },
    668: {
        special: "Boosts ATK of Freedom characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Freedom characters by 2x in the following turn.",
        captain: "Boosts HP and RCV by 1.2x, greatly boosts ATK of Freedom characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 21
    },
    669: {
        special: "Boosts ATK of Freedom characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Freedom characters by 2x in the following turn.",
        captain: "Boosts HP and RCV by 1.2x, greatly boosts ATK of Freedom characters",
        captainNotes: "The exact multiplier used to compute the damage is proportional to the crew's remaining HP and is higher the higher the HP is. The multiplier is calculated as 2 + 0.75 * (remaining HP) / (total HP). At full health the boost is equal to 2.75x",
        cooldown: 21
    },
    670: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 15
    },
    671: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.5x",
        cooldown: 15
    },
    672: {
        special: "Cuts all enemies' current HP by 20%, changes own orb into [STR]",
        captain: "Boosts ATK of Fighter characters by 2x",
        cooldown: 20
    },
    673: {
        special: "Cuts all enemies' current HP by 20%, changes own orb into [STR]",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Fighter characters by 2x",
        cooldown: 20
    },
    674: {
        special: "Removes poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of the turn for 2 turns",
        captain: "Boosts ATK of Freedom characters by 2x",
        cooldown: 21
    },
    675: {
        special: "Removes poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of the turn for 2 turns",
        captain: "Boosts ATK of Freedom characters by 2.5x",
        cooldown: 21
    },
    676: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of the turn",
        cooldown: 18
    },
    677: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of the turn",
        cooldown: 18
    }
};
