window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: 'Dinghy',
        thumb: 'ship_0001_t2.png',
        description: 'Boosts HP by 1.3x, boosts captain\'s RCV by 120 and makes PERFECTs easier to hit',
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
        thumb: 'ship_0002_t2.png',
        description: 'Boosts ATK by 1.5x, boosts captain\'s HP by 300 and makes PERFECTs easier to hit',
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
        thumb: 'ship_0003_t2.png',
        description: 'Boosts HP by 1.5x, boosts ATK of Shooter characters by 100',
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
        thumb: 'ship_0004_t2.png',
        description: 'Boosts captain\'s HP by 2000',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: 'Coffin Boat',
        thumb: 'ship_0005_t2.png',
        description: 'Boosts ATK and HP of Slasher characters by 1.5x, reduces captain\'s RCV by 700',
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
        thumb: 'ship_0006_t2.png',
        description: 'Boosts ATK of Striker characters by 1.5x, boosts chances of getting Matching orbs on Striker charracters and reduces damage received by 10%',
        atkStatic: function(p) {
            return !p.unit.class.has('Striker') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 0 ][p.boatLevel -1];
        },
        atk: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5 ][p.boatLevel - 1];
        },
    },

    { // 6
        name: 'Going Merry - Flying Model',
        thumb: 'ship_0007_t2.png',
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
        thumb: 'ship_0008_t2.png',
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
        thumb: 'ship_0009_t2.png',
        description: 'Boosts ATK of characters with 40 cost or less by 1.5x and boosts HP of all characters by 1.4x.',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6) || (p.unit.cost <= 40 && p.boatLevel >= 10);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1 ][p.boatLevel - 1] : [ 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 9
        name: 'Bezan Black',
        thumb: 'ship_0010_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of QCK characters by 1.5x and their HP by 1.3x',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: 'Aokiji\'s Bike',
        thumb: 'ship_0011_t2.png',
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
        name: 'Striker',
        thumb: 'ship_0012_t2.png',
        description: 'Boosts ATK of Shooter characters by 1.5x and their HP by 1.3x, reduces cooldown of Shooter specials by 1 turn at the start of the fight',
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
        thumb: 'ship_0014_t2.png',
        description: 'Boosts HP by 1.5x, deals 10,000 typeless damage at the end of the turn',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: 'Thousand Sunny',
        thumb: 'ship_0013_t2.png',
        description: 'Boosts ATK by 1.5x. Special: deals 50,000 typeless damage to all enemies (Cooldown: 15 turns).',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: 'Kuja Pirate Ship',
        thumb: 'ship_0015_t2.png',
        description: 'Boosts ATK of Free Spirit characters by 1.5x and their HP by 1.35x, reduces the HP of everyone else by 99%. Special: heals the crew by 6,500HP (Cooldown: 15 turns).',
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
        thumb: 'ship_0016_t2.png',
        description: 'Boosts ATK of QCK and PSY characters by 1.5x and their HP by 1.2x. Special: Deals 56560 fixed Damage to all enemies (Cooldown: 17 Turns)',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: 'Red Force',
        thumb: 'ship_0017_t2.png',
        description: 'Boosts ATK of Cerebral characters by 1.5x and their HP by 1.35x, Boosts chances of getting Matching orbs for Cerebral characters.',
        atk: function(p) {
            return  !p.unit.class.has('Cerebral') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Cerebral') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: 'Thousand Sunny - 2nd Anniversary Model',
        thumb: 'ship_0018_t2.png',
        //description: 'Boosted Ability: Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. Base Ability: Boosts ATK by 1.2x.',
        description: 'Boosts ATK by 1.2x.',
        //atk: function(p) { return 1.5; },
        atk: function(p) { return 1.2; },
    }, 
    
    { // 18
        name: 'Sun Pirates Ship',
        thumb: 'ship_0019_t2.png',
        description: 'Boosts ATK and HP of Fighter characters depending on the number of Fighters on the team. Sharply reduces ATK and HP of non-Fighter characters.',
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
        name: "Donquixote Pirates Ship",
        thumb: 'ship_0020_t2.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes PERFECTs easier to Hit for Driven characters. Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 19.2
        name: "Donquixote Pirates Ship - Special ACTIVATED",
        thumb: 'ship_0020_t2.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes PERFECTs easier to Hit for Driven characters. ACTIVATED Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: 'Rocketman',
        thumb: 'ship_0021_t2.png',
        description: 'Boosts ATK of Powerhouse characters by 1.55x, and heals at the end of every turn for a variable amount depending on the number of Powerhouse characters on the team. (At MAX, heals 900 per turn with 6 Powerhouse characters) Sharply reduces HP of non-Powerhouse characters. Special: Deals 99,999 typeless damage to one unit.  (cooldown MAX: 17 Turns)',
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
        name: 'Moby Dick - Paramount War Version',
        thumb: 'ship_0022_t2.png',
        //description: 'Boosted Ability: Boosts ATK by 1.5x and HP by 1.4x, reduces HP by 7% at the end of the turn. Special: Cuts the current HP of each enemy by 20% (Cooldown: 18 turns). Base Ability: Boosts HP by 1.3x.',
        description: 'Boosts HP by 1.3x.',
        /*atk: function(p) {
            return 1.5;
        },
        hp: function(p) {
            return 1.4;
        },*/
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: 'Garp\'s Battleship',
        thumb: 'ship_0023_t2.png',
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
        thumb: 'ship_0024_t2.png',
        description: 'Boosts ATK of Slashers and Free Spirit characters by 1.5x and their HP by 1.25x. Makes PERFECTs easier to Hit. Special: Heals for 10k when under 20% HP. (cooldown MAX: 18 turns)',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },
    { // 24
        name: 'Big Top - Grand Line Feast',
        thumb: 'ship_0025_t2.png',
        //description: 'Boosted Ability: Boosts ATK of all characters by 1.5x. Boosts EXP gained by 1.5x and Beli gained by 1.5x.  Base Ability: Boosts ATK of characters with 20 cost or less by 1.2x',
        description: 'Boosts ATK of characters with 20 cost or less by 1.2x',
        atk: function(p) {
            return p.unit.cost <= 20 ? 1.2 : 1;
        }
    },
    { // 25
        name: 'Thousand Sunny - Coated Vessel',
        thumb: 'ship_0026_t2.png',
        description: 'Boosts ATK by 1.5x. Special: reduces damage received by 50% for 1 turn (Cooldown: 16 turns).',
        atk: function(p) {
            return [ 1.3, 1.3, 1.3, 1.3, 1.35, 1.35, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
    { // 26
        name: 'Kizaru\'s Cannonball',
        thumb: 'ship_0027_t2.png',
        description: 'Boosts ATK of Shooter characters by 1.55x and their HP by 1.2x, reduces cooldown of Shooter characters specials by 2 turns at the start of the fight. Special: Cuts the current HP of each enemy by 7% (Cooldown: 15 turns).',
        atk: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { // 27
        name: 'Mister Luffy Go',
        thumb: 'ship_0028_t2.png',
        description: 'Boosts ATK of Striker characters by 1.5x and their HP by 1.2x if there are 6 Striker characters in your crew. Reduces special cooldown of Striker characters by 1 at the start of the adventure.  Special: Reduces any damage received above 10,000 HP by 97% (Cooldown: 17 turns).',
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
        thumb: 'ship_0029_t2.png',
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
        thumb: 'ship_0030_t2.png',
        description: 'Boosted Ability: Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (Cooldown: 12 turns). Base Ability: Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (Cooldown: 16 turns).',
        //description: 'Boosts ATK and Shooter characters by 1.2x. Special: Delays all enemies for 1 turn (Cooldown: 16 turns).',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.02;
        },
        //atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    
    { //29.2
        name: "Karasumaru Ship - Special ACTIVATED",
        thumb: 'ship_0030_t2.png',
        description: 'Boosted Ability: Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (Cooldown: 12 turns). Base Ability: Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 2 turns (Cooldown: 16 turns).',
        //description: 'Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (Cooldown: 16 turns).',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.02;
        },
        //atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    
    
    
    { //30
        name: "Thousand Sunny - Special Anniversary Model",
        thumb: 'ship_0032_t2.png',
        //description: 'Boosted Ability 1: Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. Boosted Ability 2: Boosts ATK by 1.5x. Boosts EXP gained by 3x . Base Ability: Boosts ATK by 1.2x.',
        description: 'Boosts ATK by 1.2x.',
        atk: function(p) { return 1.2; },
    },
    
    
    
    { //31
        name: "Flying Dutchman",
        thumb: 'ship_0033_t2.png',
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. Special: Reduces the defense of all enemies by 25% for 1 turn (Cooldown: 16 turns).',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //31.2
        name: "Flying Dutchman - Special ACTIVATED",
        thumb: 'ship_0033_t2.png',
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. ACTIVATED Special: Reduces the defense of all enemies by 25% for 1 turn (Cooldown: 16 turns).',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //32
        name: "Marshal D. Teach Pirate Ship",
        thumb: 'ship_0034_t2.png',
        description: 'Boosts HP by 1.25x and reduces special cooldown of all characters by 1 at the start of the adventure. Boosts ATK by 1.55x if you have a Striker, Shooter, Fighter, and Slasher character on your crew.',
        atk: function(p) { 
            return (p.classCount.Striker >= 1 && p.classCount.Fighter >= 1 && p.classCount.Shooter >= 1 && p.classCount.Slasher >= 1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //33
        name: "Blackbirds",
        thumb: 'ship_0035_t2.png',
        description: 'Boosts HP by 1.2x and reduces special cooldown of all characters by 1 at the start of the adventure. If you have a [STR], [DEX] and [QCK] character on your crew, boosts ATK of [STR], [DEX] and [QCK] characters by 1.55x.',
        atk: function(p) { 
            return (p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //34
        name: "Zunisha (Zunesha|Zou)",
        thumb: 'ship_0036_t2.png',
        description: 'Boost ATK of Powerhouse and Cerebral characters by 1.55x and their HP by 1.25x, makes PERFECTs easier to hit, and makes TND and Meat orbs beneficial to Powerhouse and Cerebral characters.',
        atk: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //35
        name: "Laboon",
        thumb: 'ship_0038_t2.png',
        description: 'Boosted Ability: Boosts ATK of all characters by 1.5x. At the start of the adventure, all specials start at MAX charge. Default Ability: Boosts ATK of all characters by 1.2x',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //36
        name: "Sexy Foxy",
        thumb: 'ship_0037_t2.png',
        description: 'Boosts ATK of all characters by 1.5x. Boosts EXP gained by 1.2x and Beli gained by 2x.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //37
        name: "Thousand Sunny - 4th Anniversary Model",
        thumb: 'ship_0039_t2.png',
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x. Boosts EXP gained by 3x and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all characters by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //38
        name: "Nostra Castello",
        thumb: 'ship_0040_t2.png',
        description: 'Boosts ATK of all characters by 1.55x and their HP by 1.3x. Makes PERFECTs easier to Hit. Cuts the current HP of each enemy by 3% at the end of each turn. Reduces ATK by 50% per Slasher, Free Spirit or Powerhouse class on your crew.',
        atk: function(p) {
            var reduction = 1;
            if(p.classCount.Slasher > 0) reduction *= 0.5;
            if(p.classCount.FreeSpirit > 0) reduction *= 0.5;
            if(p.classCount.Powerhouse > 0) reduction *= 0.5;
            return [ 1.1, 1.2, 1.25, 1.3, 1.4, 1.4, 1.5, 1.5, 1.5, 1.55 ][p.boatLevel - 1] * reduction;
        },
        hp: function(p) {
            return [ 1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 1.3 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //39
        name: "Queen Mama Chanter",
        thumb: 'ship_0041_t2.png',
        description: 'Boosts chances of getting Matching orbs, Boosts HP of all characters by 1.25x. If your Captain is a Powerhouse or Driven character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x at the start of the chain, by 1.65x after 3 consecutive PERFECTs. Special: Changes bottom right orb into [RCV] (Cooldown: 6 turns). (currently only boosts by 1.5x unconditionally, 1.65x boost is a WIP)',
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 1.65, [ "QCK", "STR", "DEX" ]); },
        atk: function(p) {
            return (p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) ? (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.65 : 1 : 1;
            //return (p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) ? (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? p.hitModifiers[0].slice(0, p.chainPosition).subcontains(["Perfect", "Perfect", "Perfect"]) ? 1.65 : 1.5 : 1 : 1;
            //return 1.5;//this shit still broke
        },
        hitModifiers: ["Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect"],
        hp: function(p) {
            return [ 1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 1.25 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //40
        name: "Germa 66",
        thumb: 'ship_0042_t2.png',
        description: 'If you have a [STR], [DEX], [QCK], [PSY] and [INT] character on your crew, reduces cooldown of all specials by 2 turns, boosts ATK of all characters by 1.55x, their HP by 1.25x, makes PERFECTs slightly easier to hit. If any character has a [RCV] or [TND] orb, boosts their ATK by an additional 1.1x.',
        damageSorter: function(d) { return CrunchUtils.typeSort(d, 1.65, [ "QCK", "STR", "DEX" ]); },
        atk: function(p) {
            var boost = 1;
            boost *= (p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1 && p.colorCount.PSY>=1 && p.colorCount.INT>=1) ? [ 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5, 1.5, 1.55, 1.55 ][p.boatLevel - 1] : 1;
            boost *= (p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1 && p.colorCount.PSY>=1 && p.colorCount.INT>=1) ? p.p.orb == "meat" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.1 ][p.boatLevel - 1] : 1 : 1;
            return boost;
        },
        hp: function(p) {
            return (p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1 && p.colorCount.PSY>=1 && p.colorCount.INT>=1) ? [ 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    { //41
        name: "Going Merry - 5th Anniversary Model",
        thumb: 'ship_0043_t2.png',
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x. Boosts EXP gained by 3x and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all characters by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //42
        name: "Hoe",
        thumb: 'ship_0044_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of all characters by 1.5x. Boosts EXP gained by 1.75x. Special: Recovers 3,500 HP at the end of the turn for 2 turns (Cooldown: 15 turns).',
        atk: function(p) {
            return [ 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5, 1.5, 1.5, 1.5 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //43
        name: "Megalo",
        thumb: 'ship_0045_t2.png',
        description: 'Boosts HP of all characters by 1.25x. If your Captain is a [PSY] or [INT] character, boosts ATK of all characters by 1.5x, boosts captain\'s RCV by 200 and reduces damage received by 10%. Special: Locks all orbs for 1 turn (Cooldown: 8 turns).',
        atk: function(p) {
            return (p.captain.type == "PSY" || p.captain.type == "INT") ? [ 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5, 1.5, 1.5, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //44
        name: "Thousand Sunny - Flying Model",
        thumb: 'ship_0046_t2.png',
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x. Boosts EXP gained by 1.5x. Boosted Ability 2: Boosts ATK of all characters by 1.5x. Boosts EXP gained by 1.5x and makes PERFECTs easier to hit.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //45
        name: "Piece of Spadille",
        thumb: 'ship_0047_t2.png',
        description: 'Boosts ATK of Fighter, Powerhouse and Free Spirit characters by 1.5x and their HP by 1.2x. If HP is below 30% at the start of the turn, boosts ATK of Fighter, Powerhouse and Free Spirit characters by 1.6x.',
        atk: function(p) {
            return p.unit.class.has('Fighter') || p.unit.class.has('Powerhouse') || p.unit.class.has('Free Spirit') ? (p.p.percHP <= 30.0) ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5, 1.5, 1.6 ][p.boatLevel - 1] : [ 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.class.has('Fighter') || p.unit.class.has('Powerhouse') || p.unit.class.has('Free Spirit') ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    { //46
        name: "Giant Koi",
        thumb: 'ship_0048_t2.png',
        description: 'Boosts ATK of [QCK] and [INT] characters by 1.5x and their HP by 1.2x. Makes [RCV] orbs beneficial for [QCK] and [INT] characters. If HP is above 99% at the start of the turn, boosts ATK of [QCK] and [INT] characters by 1.6x.',
        atk: function(p) {
            return p.unit.type == "QCK" || p.unit.type == "INT" ? (p.p.percHP > 99.0) ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5, 1.5, 1.6 ][p.boatLevel - 1] : [ 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "QCK" || p.unit.type == "INT" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    { //47
        name: "Grudge Dolph",
        thumb: 'ship_0049_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, boosts HP of Slasher and Striker by 1.25x and recovers 1,000 HP at the end of the turn. If a Striker or Slasher character has a Matching, [WANO] or [RAINBOW] orb, boosts ATK by 1.6x, by 1.5x otherwise.',
        atk: function(p) {
            return p.unit.class.has('Slasher') || p.unit.class.has('Striker') ? (p.p.orb == 2 || p.p.orb == 'rainbow' || p.p.orb == 'wano') ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5, 1.5, 1.6 ][p.boatLevel - 1] : [ 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.class.has('Slasher') || p.unit.class.has('Striker') ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1] : 1;
        },
        heal: function(p) {
            return [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //48
        name: "Merry Go Goodbye",
        thumb: 'ship_0050_t2.png',
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x, reduces cooldown of all specials by 5 turns at the start of the fight and makes PERFECTs earier to hit. Special: Recovers 32% of crew\'s MAX HP (Cooldown: 12 turns).',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //49
        name: "Shark Superb",
        thumb: 'ship_0051_t2.png',
        description: 'If your Captain is a [STR], [DEX] or [QCK] character, boosts ATK of all characters by 2x, reduces cooldown of all specials by 1 turn at the start of the fight, makes PERFECTs easier to hit and reduces ATK boost at the end of each turn until ATK boost is 1.3x after 10 turns.',
        atk: function(p) {
            if (p.captain) return (p.captain.type == "STR" || p.captain.type == "DEX" || p.captain.type == "QCK") ? [ 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 2 ][p.boatLevel - 1] - Math.min([0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.7][p.boatLevel - 1]*p.p.turnCounter/10,[0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.7][p.boatLevel - 1]) : 1;
            else return 1;
        },
    },
    
    
    
    { //50
        name: "Thousand Sunny - Treasure Cruise 6th Anniversary Model",
        thumb: 'ship_0052_t2.png',
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x. Boosts EXP and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all characters by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //51
        name: "Victoria Punk",
        thumb: 'ship_0053_t2.png',
        description: 'Boosts HP by 1.2x and slightly increases the appearance rate of TND orbs. If your captain is a [STR] or [DEX] character, boosts ATK of all characters by 1.55x. If a character has a [TND], [BOMB], [WANO] or [SUPERBOMB] orb, boost their ATK by 1.65x instead. Special: Reduces all enemies\' Barrier duration by 1 turn (Cooldown: 10 turns).',
        atk: function(p) {
            if (p.captain) return (p.captain.type == "STR" || p.captain.type == "DEX") ? (p.p.orb == 'superbomb' || p.p.orb == 'meat' || p.p.orb == 'wano') ? [ 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65 ][p.boatLevel - 1] : [ 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55 ][p.boatLevel - 1] : 1;
            else return 1;
        },
        hp: function(p) {
            return [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.2 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //52
        name: "Liberal Hind",
        thumb: 'ship_0054_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, boosts captain\'s RCV by 500, recovers 1,000 HP at the end of the turn. If your captain is a Free Spirit, Slasher or Cerebral character, boosts ATK of all characters by 1.6x. If there is 6 [PSY] characters in your crew, boosts ATK by 1.1x additionaly. Special: Reduces Special Cooldown of [PSY] characters by 1 turn (Cooldown: 10 turns).',
        atk: function(p) {
            var mult = 1;
            if (p.colorCount.PSY>=6) mult = [ 1, 1, 1, 1.05, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1 ][p.boatLevel - 1];
            if (p.captain) return (p.captain.class.has("Free Spirit") || p.captain.class.has("Slasher") || p.captain.class.has("Cerebral")) ? mult*[ 1.2, 1.25, 1.3, 1.3, 1.3, 1.3, 1.35, 1.4, 1.5, 1.6 ][p.boatLevel - 1] : mult;
            else return mult;
        },
        heal: function(p) {
            return [ 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //53
        name: "Amphibious Nostra Castello",
        thumb: 'ship_0055_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, Boosts ATK of [STR], [PSY] and [INT] characters by 1.55x and their HP by 1.4x. If HP is above 99% or below 30% at the start of the turn, boosts ATK of [STR], [PSY] and [INT] characters by 1.7x.',
        atk: function(p) {
            return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? (p.p.percHP <= 30.0 || p.p.percHP >= 99.0) ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.6, 1.6, 1.7, 1.7 ][p.boatLevel - 1] : [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.55, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? [ 1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    { //54
        name: "Oro Jackson",
        thumb: 'ship_0056_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of Slasher and Free Spirit characters by 1.6x, their HP by 1.3x, makes [RCV] and [TND] orbs beneficial for Slasher and Free Spirit characters, makes Slasher and Free Spirit character\'s PERFECTs easier to hit and recovers 1,000 HP at the end of the turn. Special: Reduces Paralysis duration by 2 turns (Cooldown: 9 turns).',
        atk: function(p) {
            return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? [ 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.45, 1.45, 1.5, 1.6 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3 ][p.boatLevel - 1] : 1;
        },
        heal: function(p) {
            return [ 0, 0, 0, 0, 0, 0, 0, 500, 750, 1000 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //55
        name: "Thousand Sunny - Treasure Cruise 7th Anniversary Model",
        thumb: null,
        description: 'Boosted Ability 1: Boosts ATK of all characters by 1.5x. Boosts EXP and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all characters by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //56
        name: "Thousand Sunny - Treasure Cruise 8th Anniversary Model",
        thumb: 'ship_0058_t2.png',
        description: 'Boosted Ability 1: Boosts ATK by 1.55x, boosts HP by 1.2x, makes [TND] orbs beneficial for all characters and boosts EXP and Beli gained by 3x. Base Ability: Boosts ATK by 1.5x and makes [TND] orbs beneficial for all characters.',
        atk: function(p) { return 1.55; },
        hp: function(p) { return 1.2; },
    },
    
    
    
    { //57
        name: "Whale Sharks",
        thumb: 'ship_0059_t2.png',
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of all characters by 1.6x, boosts HP of crew by 10,000, makes PERFECTs easier to hit and makes [TND] orbs beneficial for all characters.',
        atk: function(p) { return [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.45, 1.5, 1.6 ][p.boatLevel - 1]; },
        hpStatic: function(p) { return p.slot == 1 ? [0, 0, 0, 0, 500, 1000, 2500, 2500, 5000, 10000][p.boatLevel - 1] : 0; },
    },
    
    
    
    { //58
        name: "Thousand Sunny - 9th Anniversary Model",
        thumb: 'ship_0060_t2.png',
        description: 'Boosted Ability 1: At the start of the adventure, all specials start at MAX charge. Boosts ATK by 1.6x, makes [RCV] orbs beneficial for all characters, makes PERFECTs easier to hit and boosts EXP and Beli gained by 3x. Boosted Ability 2: Reduces Special Cooldown of all characters by 2 turns at the start of the fight, boosts ATK by 1.6x, makes [RCV] orbs beneficial for all characters and boosts EXP and Beli gained by 2x. Base Ability: Boosts ATK by 1.5x and makes PERFECTs easier to hit.',
        atk: function(p) { return 1.55; },
        hp: function(p) { return 1.2; },
    },
    
    
    
    {
        name: "Shiki's Island Ship",
        thumb: null,
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of [DEX], [INT], and [QCK] characters by 1.55x, by 1.7x instead if HP is above 99% or below 30% at start of attack, thier HP by 1.25x.',
        atk: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? (p.p.percHP <= 30.0 || p.p.percHP >= 99.0) ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5, 1.5, 1.6, 1.7 ][p.boatLevel - 1] : [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? [ 1, 1.1, 1.15, 1.15, 1.2, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    {
        name: "White Tiger",
        thumb: null,
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of Shooter characters by 1.6x, their HP by 1.25x, makes [PSY] and [INT] orbs beneficial for all characters, and makes PERFECT easier to hit.',
        atk: function(p) {
            return (p.unit.class.has('Shooter')) ? [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5, 1.6 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return (p.unit.class.has('Shooter')) ? [ 1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    {
        name: "Catapult",
        thumb: null,
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of [STR], [QCK], and [INT] characters by 1.55x, boosts ATK of your Captain by 1.86x instead, boosts HP of [STR], [QCK] and [INT] characters by 1.25x, and makes PERFECT easier to hit.',
        atk: function(p) {
            return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.45, 1.5, 1.55 ][p.boatLevel - 1] : 1)*((p.slot == 1) ? [ 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.15, 1.15, 1.2 ][p.boatLevel - 1] : 1);
        },
        hp: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    
    
    {
        name: "Gran Tesoro",
        thumb: null,
        description: 'Reduces cooldown of all specials by 1 turn, boosts ATK of all characters by 1.5x, by 1.75x instead if they have a [G] or [RAINBOW] orb, boosts HP of all characters by 1.35x, boosts their ATK by approximately 1.75x when they have [G] or Rainbow slots and boosts amount of Beli received by 2x. If your crew has a Fighter, Slasher, Striker, Shooter, Free Spirit, Driven, Cerebral, and Powerhouse character, increases duration of any Chain Lock/Limit/Boundary buffs/debuffs applied by Specials by 1 turn.',
        atk: function(p) {
            return ['g', 'rainbow'].has(p.p.orb) ? [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.5, 1.6, 1.75, 1.75 ][p.boatLevel - 1] : [ 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.35, 1.35, 1.35 ][p.boatLevel - 1];
        },
    },

];
