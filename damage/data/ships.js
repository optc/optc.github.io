window.ships = {
    
    'Dingy': {
        thumb: 'ship_0001_c.png',
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        }
    },

    'Merry Go': {
        thumb: 'ship_0002_c.png',
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
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    'Coffin Boat': {
        thumb: 'ship_0005_c.png',
        atk: function(p) {
            return p.unit.class != 'Slasher' ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class != 'Slasher' ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    'Miss Love Duck': {
        thumb: 'ship_0006_c.png',
        atkStatic: function(p) {
            return p.boatLevel < 7 ? 0 : [ 50, 50, 50, 100 ][p.boatLevel - 7];
        }
    },

    'Merry Go Flying': {
        thumb: 'ship_0007_c.png',
        atk: function(p) {
            return p.boatLevel < 7 ? 0 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        }
    },

    'Moby Dick': {
        thumb: 'ship_0008_c1.png',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    'Big Top': {
        thumb: null,
        atk: function(p) {
            var matching = (p.boatLevel < 6 && p.unit.cost <= 15) || (p.boatLevel > 6 && p.unit.cost <= 20);
            return !matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.rarity <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    }

};
