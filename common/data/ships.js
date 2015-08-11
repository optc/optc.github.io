window.ships = {
    
    'Dingy': {
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

    'Merry Go': {
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

    'Navy Ship': {
        thumb: 'ship_0003_c.png',
        description: 'Boosts HP by 1.5x, boosts ATK of Shooter characters by 100 units',
        atkStatic: function(p) {
            return p.unit.class != 'Shooter' ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    'Baratie': {
        thumb: 'ship_0004_c.png',
        description: 'Boosts captain\'s HP by 2000 units',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    'Coffin Boat': {
        thumb: 'ship_0005_c.png',
        description: 'Boosts ATK and HP of Slasher characters by 1.5x, reduces captain\'s RCV by 700 units',
        atk: function(p) {
            return p.unit.class != 'Slasher' ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class != 'Slasher' ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    'Miss Love Duck': {
        thumb: 'ship_0006_c.png',
        description: 'Reduces damage received by 10%, boosts ATK of each character by 100 units',
        atkStatic: function(p) {
            return p.boatLevel < 7 ? 0 : [ 50, 50, 50, 100 ][p.boatLevel - 7];
        }
    },

    'Merry Go Flying': {
        thumb: 'ship_0007_c.png',
        description: 'Boosts ATK by 1.2x, recovers 350 HP at the end of the turn',
        atk: function(p) {
            return p.boatLevel < 7 ? 0 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        }
    },

    'Moby Dick': {
        thumb: 'ship_0008_c1.png',
        description: 'Boosts ATK by 1.5x, boosts HP by 1.4x, reduces HP by 50% at the start of the fight',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    'Big Top': {
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

    'Bezan Black': {
        thumb: 'ship_0010_c1.png',
        description: 'Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of QCK characters by 1.4x and their HP by 1.3x',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    }

};
