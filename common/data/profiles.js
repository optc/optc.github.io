var profiles = {

    'Jailbreaking Baroque Works': {
        description: 'Stats of non-Fighter units reduced by 90%',
        icon: 461,
        atk: function(p) { return p.class != 'Fighter' ? 0.1 : 1; },
        hp: function(p) { return p.class != 'Fighter' ? 0.1 : 1; },
        rcv: function(p) { return p.class != 'Fighter' ? 0.1 : 1; }
    },

    'Strongest Prisoner Crocodile': {
        description: 'Stats of non-Striker units reduced by 90%',
        icon: 509,
        atk: function(p) { return p.class != 'Striker' ? 0.1 : 1; },
        hp: function(p) { return p.class != 'Striker' ? 0.1 : 1; },
        rcv: function(p) { return p.class != 'Striker' ? 0.1 : 1; }
    },

    'Jailer Domino': {
        description: 'Stats of non-Shooter units reduced by 90%',
        icon: 537,
        atk: function(p) { return p.class != 'Shooter' ? 0.1 : 1; },
        hp: function(p) { return p.class != 'Shooter' ? 0.1 : 1; },
        rcv: function(p) { return p.class != 'Shooter' ? 0.1 : 1; }
    },

    'Chief Guard Sadi-chan': {
        description: 'Stats of non-Slasher units reduced by 90%',
        icon: 549,
        atk: function(p) { return p.class != 'Slasher' ? 0.1 : 1; },
        hp: function(p) { return p.class != 'Slasher' ? 0.1 : 1; },
        rcv: function(p) { return p.class != 'Slasher' ? 0.1 : 1; }
    },

    'Skypiea Warriors': {
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%',
        icon: 582,
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
