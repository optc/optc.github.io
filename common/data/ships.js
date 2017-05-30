window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: 'Dinghy',
        thumb: 'ship_0001_c.png',
        description: 'Boosts HP by 1.3x, boosts captain\'s RCV by 120 units',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: 'Merry Go',
        thumb: 'ship_0002_c.png',
        description: 'Boosts ATK by 1.5x, boosts captain\'s HP by 300 units',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: 'Navy Ship',
        thumb: 'ship_0003_c.png',
        description: 'Boosts HP by 1.5x, boosts ATK of Shooter characters by 100 units',
        atkStatic: function(p) {
            return !p.unit.class.has('Shooter') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: 'Baratie',
        thumb: 'ship_0004_c.png',
        description: 'Boosts captain\'s HP by 2000 units',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: 'Coffin Boat',
        thumb: 'ship_0005_c.png',
        description: 'Boosts ATK and HP of Slasher characters by 1.5x, reduces captain\'s RCV by 700 units',
        atk: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss Love Duck',
        thumb: 'ship_0006_c.png',
        description: 'Reduces damage received by 10%, boosts ATK of Striker characters by 100 units',
        atkStatic: function(p) {
            return !p.unit.class.has('Striker') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: 'Merry Go Flying',
        thumb: 'ship_0007_c.png',
        description: 'Boosts ATK by 1.2x, recovers 350 HP at the end of the turn',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: 'Moby Dick',
        thumb: 'ship_0008_c1.png',
        description: 'Boosts ATK by 1.5x, boosts HP by 1.4x, reduces HP by 50% at the start of the fight',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: 'Big Top',
        thumb: 'ship_0009_c1.png',
        description: 'Boosts ATK of characters with 20 cost or less by 1.5x, boosts HP of characters with 4 stars and below by 1.4x',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: 'Bezan Black',
        thumb: 'ship_0010_c1.png',
        description: 'Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of QCK characters by 1.4x and their HP by 1.3x',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: 'Aokiji\'s Bike',
        thumb: 'ship_0011_c1.png',
        description: 'Boosts ATK and HP of Striker characters by 1.5x, greatly reduces the appearance of RCV orbs',
        atk: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: 'Ace\'s Striker',
        thumb: 'ship_0012_c1.png',
        description: 'Boosts ATK of Shooter characters by 1.5x and their HP by 1.3x, reduces cooldown of all specials by 1 turn at the start of the fight',
        atk: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: 'Dreadnaught Sabre',
        thumb: 'ship_0014_c1.png',
        description: 'Boosts HP by 1.5x, deals 5,000 typeless damage at the end of the turn',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: 'Thousand Sunny',
        thumb: 'ship_0013_c.png',
        description: 'Boosts ATK by 1.5x. Special: deals 50,000 typeless damage to all enemies (cooldown: 15 turns).',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: 'Kuja Pirate Ship',
        thumb: 'ship_0015_c1.png',
        description: 'Boosts ATK of Free Spirit characters by 1.5x and their HP by 1.35x, reduces the HP of everyone else by 99%. Special: heals the crew by 6,500HP (cooldown: 15 turns).',
        atk: function(p) {
            return !p.unit.class.has('Free Spirit') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Free Spirit') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: 'Ark Maxim',
        thumb: 'ship_0016_c1.png',
        description: 'Boosts ATK of QCK and PSY characters by 1.5x and their HP by 1.2x. Special: Deals 56560 fixed Damage to all enemies (cooldown: 17 Turns)',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: 'Red Force',
        thumb: 'ship_0017_c1.png',
        description: 'Boosts ATK of Cerebral characters by 1.5x and their HP by 1.35x, Increased Orb Rate for Cerebral characters.',
        atk: function(p) {
            return  !p.unit.class.has('Cerebral') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Cerebral') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '2nd Anniversary Thousand Sunny',
        thumb: 'ship_0018_c1.png',
        //description: 'Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        description: 'Boosts ATK by 1.2x.',
        atk: function(p) { return 1.2; },
    }, 
    
    { // 18
        name: 'Sun Pirates Ship',
        thumb: 'ship_0019_c.png',
        description: 'Boosts ATK and HP of Fighter characters depending on the number of Fighters on the team. Sharply reduces ATK and HP of non-Fighter units.',
        atk: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        }
    },
    
    { // 19
        name: "Doflamingo Ship",
        thumb: 'ship_0020_c.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes Perfects easier to Hit for Driven characters. Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 19.2
        name: "Doflamingo Ship - Special ACTIVATED",
        thumb: 'ship_0020_c.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes Perfects easier to Hit for Driven characters. ACTIVATED Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: 'The Rocket Man',
        thumb: 'ship_0021_c.png',
        description: 'Boosts ATK of Powerhouse characters by 1.55x, and heals at the end of every turn for a variable amount depending on the number of Powerhouse characters on the team. (At MAX, heals 900 per turn with 6 Powerhouse characters) Sharply reduces HP of non-Powerhouse units. Special: Deals 99,999 typeless damage to one unit.  (cooldown MAX: 17 Turns)',
        atk: function(p) {
            return !p.unit.class.has('Powerhouse') ? 1 : [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class.has('Powerhouse') ? 1 : 0.01;
        },
        heal: function(p) {
            return p.classCount.Powerhouse == 1 ? 1 : p.classCount.Powerhouse == 2 ? 10 : p.classCount.Powerhouse == 3 ? 20 : p.classCount.Powerhouse == 4 ? 30 : p.classCount.Powerhouse == 5 ? 100 : p.classCount.Powerhouse == 6 ? 900 : 0;  
        },
        
    },
    
    { // 21
        name: 'Burning Whitebeard Ship',
        thumb: 'ship_0022_c.png',
        //description: 'Boosts ATK by 1.5x and HP by 1.4x, reduces HP by 7% at the end of the turn. Special: Cuts the current HP of each enemy by 20% (cooldown: 18 turns).',
        description: 'Boosts HP by 1.3x.',
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: 'Garp Ship',
        thumb: 'ship_0023_c.png',
        description: 'Boosts ATK of [STR] and [PSY] characters by 1.5x, and their HP by 1.25x',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //23
        name: 'Polar Tang',
        thumb: 'ship_0024_c.png',
        description: 'Boosts ATK of Slashers and Free Spirit characters by 1.5x and their HP by 1.25x. Makes Perfects easier to Hit. Special: Heals for 10k when under 20% HP. (cooldown MAX: 18 turns)',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },
    { // 24
        name: 'New Year\'s Big Top',
        thumb: 'ship_0025_c.png',
        description: 'Boosts ATK of characters with 20 cost or less by 1.2x',
        atk: function(p) {
            return p.unit.cost <= 20 ? 1.2 : 1;
        }
    },
    { // 25
        name: 'Thousand Sunny: Coated',
        thumb: 'ship_0026_c.png',
        description: 'Boosts ATK by 1.5x. Special: reduces damage received by 50% for 1 turn (cooldown: 16 turns).',
        atk: function(p) {
            return [ 1.3, 1.3, 1.3, 1.3, 1.35, 1.35, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
    { // 26
        name: 'Kizaru\'s Cannonball',
        thumb: 'ship_0027_c.png',
        description: 'Boosts ATK of Shooter characters by 1.55x and their HP by 1.2x, reduces cooldown of Shooter characters specials by 2 turns at the start of the fight. Special: Cuts the current HP of each enemy by 7% (cooldown: 15 turns).',
        atk: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { // 27
        name: 'Going Luffy SENPAI!',
        thumb: 'ship_0028_c.png',
        description: 'Boosts ATK of Striker characters by 1.5x and their HP by 1.2x if there are 6 Striker characters in your crew. Special: Reduces any damage received above 10,000 HP by 97% (cooldown: 17 turns).',
        atk: function(p) {
            return !(p.classCount.Striker == 6) ? 1 : !p.unit.class.has('Striker') ? 1 :
                [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.classCount.Striker == 6) ? 1 : !p.unit.class.has('Striker') ? 1 :
                [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { //28
        name: "Thriller Bark",
        thumb: 'ship_0029_c.png',
        description: 'Boosts ATK of [DEX] and [INT] characters by 1.5x and their HP by 1.25x',
        atk: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "INT" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "INT" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //29
        name: "Karasumaru Ship",
        thumb: 'ship_0030_c.png',
        //description: 'Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns).',
        description: 'Boosts ATK and Shooter characters by 1.2x. Special: Delays all enemies for 1 turn (cooldown: 16 turns).',
        /*atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.02;
        },*/
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    
    
    
    { //30
        name: "3rd Anniversary Thousand Sunny",
        thumb: null,
        //description: 'Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        description: 'Boosts ATK by 1.2x.',
        atk: function(p) { return 1.2; },
    },
    
    
    
    { //31
        name: "Flying Dutchman",
        thumb: null,
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. Special: Reduces the defense of all enemies by 25% for 1 turn (cooldown: 16 turns).',
        atk: function(p) { return 1.5; },
    },
    
    
    
    { //31.2
        name: "Flying Dutchman - Special ACTIVATED",
        thumb: null,
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. ACTIVATED Special: Reduces the defense of all enemies by 25% for 1 turn (cooldown: 16 turns).',
        atk: function(p) { return 1.5; },
    },

];
