window.profiles = {

    'Baroque Works (Original)': {
        description: 'Stats of non-Fighter units reduced by 90%',
        thumb: 462,
        atk: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Fighter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; }
    },

    'Baroque Works (New)': {
        description: 'ATK of Slasher and Strikers units reduced by 85%, HP and RCV by 80%',
        thumb: 462,
        atk: function(p) { return p.class.isWeakened('Slasher','Striker') ? 0.15 : 1; },
        hp: function(p)  { return p.class.isWeakened('Slasher','Striker') ? 0.20 : 1; },
        rcv: function(p) { return p.class.isWeakened('Slasher','Striker') ? 0.20 : 1; }
    },

    'Prisoner Crocodile': {
        description: 'Stats of non-Striker units reduced by 90%',
        thumb: 510,
        atk: function(p) { return !p.class.has('Striker') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Striker') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Striker') ? 0.1 : 1; }
    },

    'Jailer Domino': {
        description: 'Stats of non-Shooter units reduced by 90%',
        thumb: 538,
        atk: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Shooter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; }
    },

    'Chief Guard Sadi-chan': {
        description: 'Stats of non-Slasher units reduced by 90%',
        thumb: 550,
        atk: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Slasher') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; }
    },

    'Skypiea Warriors': {
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%',
        thumb: 583,
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    }

};
