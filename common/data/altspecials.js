window.altspecials = {
    1587: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1588: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1934: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1935: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2073: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2074: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2245: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            console.log(p);
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2300: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2803: {
        staticMult: function(p) { return p.slot == p.sourceSlot ? 500 : 0; }
    },
    2804: {
        staticMult: function(p) { return p.slot == p.sourceSlot ? 500 : 0; }
    },
    2958: {
        atk: function(p) { return 2; },
        type: "type",
    },
    2960: {
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 100; }
    },
    2962: {
        delay: function(p) { return 1; },
        ignoresImmunities: function(p) { return ['delay']; },
    },
    2964: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3009: {
        orb: function(p) { return p.unit.cost <= 40  ? 2.25 : 1; },
    },
    3037: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3038: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3071: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3100:{
        staticMult: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3118: {
        def: function(p) { return 0; },
    },
    3122: {
        orb: function(p) { return 1.75; },
    },
    3175: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3225:{
        affinity: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    3334: {
        chainAddition: function(p) { return 1; },
    },
    3364: {
        atkPlus: function(p) { return 0.3; },
        orbPlus: function(p) { return 0.3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3369: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3391: {
        affinity: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    3403: {
        orb: function(p) { return p.unit.type == "INT" || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    3405: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? 2 : 1; },
        type: "type",
    },
    3422: {
        orbPlus: function(p) { return 0.3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3429: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3430: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3454: {
        negative: function(p) { return 10; },
    },
    3519: {
        atkbase: function(p) { return p.slot < 2 ? 1000 : 0; },
    },
    3523: {
        chain: function(p) { return 3.25; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.25 : 1;
        }
    },
    3553: {
        chainMultiplication: function(p) { return 1.25; }
    },
    3563: {
        chainPlus: function(p) { 
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1];
            return p.chainPosition === 0 ? 0 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 0.3 : 0;
        },
    },
    3576: {
        chainAdditionPlus: function(p) { return 0.5; }, 
    },
    3597: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.25 : 1; },
        type: "type",
    },
    3607: {
        orbPlus: function(p) { return 0.25; },
        atkbase: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1000 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3620: {
        orb: function(p) { return 1.75; },
    },
    3626: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3627: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3629: {
        status: function(p) { return p.defenseDown ? 2.25 : 1; },
        def: function(p) { return 0; },//Temp until we deal with on-hit effects
    },
    3631: {
        atkPlus: function(p) { return 0.25; },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3641: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        type: "type",
    },
    3650: {
        orbCeil: function(p) { return 3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3652: {
        chainMultiplication: function(p) { return 1.25; }
    },
    3669: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3670: {
        chainAddition: function(p) { return 1.5; }, 
    },
    3672: {
        orbCeil: function(p) { return 2.5; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3674: {
        mark: function(p) { return 1; },
        status: function(p) { return p.marked ? 1.75 : 1; },
    },
    3680: {
        atkPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3695: {
        affinityPlus: function(p) { return 0.25; },
    },
    3697: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        type: "type",
    },
    3718: {
        burn: function(p) { return 1; },
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 150; }
    },
    3721: {
        affinityPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3723: {
        atkbase: function(p) { return 1250; },
    },
    3724: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3725: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3726: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3727: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3735: {
        status: function(p) { return p.delayed > 0 ? 2 : 1; },
    },
    3739: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1250 : 0; },
    },
    3755: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        type: "type",
    },
    3766: {
        affinity: function(p) { return p.unit.type == "INT" || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    3780: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    3785: {
        affinity: function(p) { return 1.75; },
    },
    3790: {
        status: function(p) { return 2.25; },
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Paralysis."
    },
    3792: {
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        orb: function(p) { return p.unit.type == "QCK" || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? [2.5, 1, 2.5][p.cached.multiplier] : 1; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Orb boost", "Orb Buff", "Orb boost and Orb buff"][n] + '. To switch to ' + ["Orb boost", "Orb Buff", "Orb boost and Orb buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3805: {
        orb: function(p) { return p.unit.cost <= 40  ? 2.25 : 1; },
    },
    3814: {
        chainAddition: function(p) { return 1.5; },
    },
    3816: {
        atkPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3829: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3839: {
        affinity: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.class.has("Cerebral") ? 2.5 : 1; },
    },
    3842: {
        affinity: function(p) { return 1.75; },
    },
    3848: {
        atkPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        atk: function(p) { return [1.75, 1, 1.75][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "ATK Buff", "ATK boost and ATK buff"][n] + '. To switch to ' + ["ATK boost", "ATK Buff", "ATK boost and ATK buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3850: {
        status: function(p) { return p.defenseDown ? 2.25 : 1; },
        orbPlus: function(p) { return 0.25; },
    },
    3852: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.5 : 1; },
        type: "type",
    },
    3861: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 40 : 1;
        }
    },
    3886: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    3870: {
        increaseDamageTaken: function(p) { return 2; },
        def: function(p) { return 0; },
    },
    3887: {
        increaseDamageTaken: function(p) { return 1.75; },
    },
    3889: {
        chainAddition: function(p) { return 1.5; },
    },
    3898: {
        chainAddition: function(p) { return 1.5; },
    },
    3895: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Sheathed", "Enma", "Enma Unleached", "Weakened"][n] + ' boost. To ' + ["Sheathed", "Enma", "Enma Unleached", "Weakened"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3896: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.capspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.capspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Sheathed", "Enma", "Enma Unleached", "Weakened"][n] + ' boost. To ' + ["Sheathed", "Enma", "Enma Unleached", "Weakened"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3903: {
        increaseDamageTaken: function(p) { return 2; },
    },
    3956: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3957: {
        increaseDamageTaken: function(p) { return 2; },
    },
    3967: {
        poison: function(p) { return 99; },
        affinity: function(p) { return p.unit.type == "DEX" || p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    3973: {
        affinity: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.5 : 1; },
    },
    3984: {
        increaseDamageTaken: function(p) { return [1.75, 1, 1.75][p.cached.multiplier]; },
        increaseDamageTakenPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Increase Damage Taken Debuff", "Increase Damage Taken Increase", "Both Effects"][n] + '. To switch to ' + ["Increase Damage Taken Debuff", "Increase Damage Taken Increase", "Both Effects"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    3986: {
        burn: function(p) { return 2; },
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        type: "type",
    },
    3990: {
        dmgredatk: function(p) { return 1+(p.dmgreductionCounter/100); },
    },
    3991: {
        dmgredatk: function(p) { return 1+(p.dmgreductionCounter/100); },
    },
    3993: {
        delay: function(p) { return 1; },
        ignoresImmunities: function(p) { return ['delay']; },
    },
    3364: {
        atkPlus: function(p) { return 0.25; },
    },
    4011: {
        tapTiming: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher") ? { Good: 0.2, Great: 0.3, Perfect: 0.3 } : { Good: 0, Great: 0, Perfect: 0 }; },
    },
    4012: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    4020: {
        def: function(p) { return 0.1; },
    },
    4024: {
        atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; },
        type: "type",
    },
    4029: {
        atkbase: function(p) { return 1250; },
    },
    4035: {
        dmgredatk: function(p) { return 1+(p.dmgreductionCounter/100); },
    },
    4038: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    4039: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    4041: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")? [1.25, 1, 1.25][p.cached.multiplier] : 1; },
        type: "type",
        atkbase: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")? [0, 1250, 1250][p.cached.multiplier] : 0; },
        orb: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")? [1.25, 1, 1.25][p.cached.multiplier] : 1; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK & Orb Boost", "Base ATK Boost", "All Effects"][n] + '. To switch to ' + ["ATK & Orb Boost", "Base ATK Boost", "All Effects"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    4050: {
        orbPlus: function(p) { return 0.25; },
    },
    4054: {
        status: function(p) { return p.defenseDown ? 2 : 1; },
        def: function(p) { return 0.5; },
        ignoresImmunities: function(p) { return ['def']; },
    },
    4058: {
        atkbase: function(p) { return p.slot % 2 == 1 ? 2000 : 0; },
    },
    4071: {
        delay: function(p) { return 1; },
        ignoresImmunities: function(p) { return ['delay']; },
        status: function(p) { return p.delayed > 0 ? 1.75 : 1; },
    },
    4082: {
        atk: function(p) { return p.unit.type == "INT" && p.unit.class.has("Cerebral") ? 2.75 : p.unit.type == "INT" || p.unit.class.has("Cerebral") ? 2.5 : 1; },
        type: "type",
    },
    4084: {
        increaseDamageTaken: function(p) { return 1.75; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    4085: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    4100: {
        superClass: function(p) { return { "Driven": 1.5 }; },
    },
    4102: {
        atkbase: function(p) { return p.unit.type == "STR" || p.unit.class.has("Driven") || p.unit.class.has("Fighter") ? 1250 : 0; },
    },
    4115: {
        increaseDamageTaken: function(p) { return 2; },
    },
    4137: {
        atkPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
    },
};

var calcGhostStartIDAltSpecials = { "start": 5000 };

var ghostsAltSpecials = {
    12: {
        chainAddition: function(p) { return 0.5; },
    },
    13: {
        chainAddition: function(p) { return 0.5; },
    },
    14: {
        chainAddition: function(p) { return 0.5; },
    },
    15: {
        chainAddition: function(p) { return 0.5; },
    },
    28: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    29: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    30: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    31: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    32: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    33: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    34: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    35: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    36: {
        chainMultiplication: function(p) { return 1.25; },
    },
    37: {
        chainMultiplication: function(p) { return 1.25; },
    },
    38: {
        chainMultiplication: function(p) { return 1.25; },
    },
    39: {
        chainMultiplication: function(p) { return 1.25; },
    },
    40: {
        chainMultiplication: function(p) { return 1.25; },
    },
    41: {
        chainMultiplication: function(p) { return 1.25; },
    },
    66: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    67: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    68: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    69: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    70: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    71: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    72: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    73: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    74: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    75: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    76: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    77: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    78: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    79: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    80: {
        chainAddition: function(p) { return 0.3; },
    },
    81: {
        chainAddition: function(p) { return 0.3; },
    },
    82: {
        chainAddition: function(p) { return 0.3; },
    },
    83: {
        chainAddition: function(p) { return 0.3; },
    },
    84: {
        chainAddition: function(p) { return 0.3; },
    },
    85: {
        chainAddition: function(p) { return 0.3; },
    },
    86: {
        chainAddition: function(p) { return 0.3; },
    },
    87: {
        chainAddition: function(p) { return 0.3; },
    },
    120: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    121: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    122: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    123: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    124: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    125: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    126: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    127: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    136:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    137:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    138:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    139:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    140:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    141:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    142:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    143:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    152: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    153: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    154: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    155: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    156: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    157: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    158: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    159: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    168: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    169: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    170: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    171: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    207: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    208: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    209: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    210: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    211: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    212: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    213: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    214: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    215: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    216: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    217: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    218: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    219: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    220: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    237:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    238:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    239:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    240: {
        negative: function(p) { return 1; },
    },
    241: {
        negative: function(p) { return 1; },
    },
    242: {
        negative: function(p) { return 1; },
    },
    243: {
        negative: function(p) { return 1; },
    },
    244: {
        negative: function(p) { return 1; },
    },
    245: {
        negative: function(p) { return 1; },
    },
    246: {
        negative: function(p) { return 1; },
    },
    247: {
        negative: function(p) { return 1; },
    },
    276: {
        chainMultiplication: function(p) { return 1.25; },
    },
    277: {
        chainMultiplication: function(p) { return 1.25; },
    },
    278: {
        chainMultiplication: function(p) { return 1.25; },
    },
    279: {
        chainMultiplication: function(p) { return 1.25; },
    },
    280: {
        chainMultiplication: function(p) { return 1.25; },
    },
    281: {
        chainMultiplication: function(p) { return 1.25; },
    },
    282: {
        chainMultiplication: function(p) { return 1.25; },
    },
    283: {
        chainMultiplication: function(p) { return 1.25; },
    },
    300: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    301: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    302: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    303: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    322: {
        chainAddition: function(p) { return 0.3; },
    },
    323: {
        chainAddition: function(p) { return 0.3; },
    },
    324: {
        chainAddition: function(p) { return 0.3; },
    },
    325: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    326: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    327: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    328: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    329: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    330: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5330warning'
            });
        },
    },
    331: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5331warning'
            });
        },
    },
    332: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5332warning'
            });
        },
    },
    333: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5333warning'
            });
        },
    },
    334: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5334warning'
            });
        },
    },
    335: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5335warning'
            });
        },
    },
    336: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5336warning'
            });
        },
    },
    338: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
    340: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
    341: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    342: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    343: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    344: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    345: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    346: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    347: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    348: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    349: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    350: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    351: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    352: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    353: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    354: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    355: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    356: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    373: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    374: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    375: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    376: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    377: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    378: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    379: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    380: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    389: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    390: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    391: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    392: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    393: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    394: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    395: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    396: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    405: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    406: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    407: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    408: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    409: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    410: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    411: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    412: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    413: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    414: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    415: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    416: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    417: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    418: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    419: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    420: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    429: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    430: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    431: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    432: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    433: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    434: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    435: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    436: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    437: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    438: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    439: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    440: {
        chainAddition: function(p) { return [0, 1.2, 1.2][p.cached.multiplier]; },
        atk: function(p) { return [1.3, 1, 1.3][p.cached.multiplier]; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][n] + '. To switch to ' + ["ATK boost", "Chain Addition", "ATK boost and Chain Addition"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    441: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    442: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    443: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    444: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    445: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    446: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    447: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    448: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    449: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Driven")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    450: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Driven")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    451: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Driven")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    452: {
        orb: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Driven")][p.cached.multiplier] ? 2 : 1; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Class Orb'][n] + ' boost. To ' + ['Own Orb', 'Class Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    453: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    454: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    455: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    456: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    457: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    458: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    459: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    460: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    461: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    462: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    463: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    464: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    465: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    466: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    467: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    468: {
        orb: function(p) { return p.unit.class.has("Slasher") ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.5];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    469: {
        atk: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Universal Orb'][n] + ' boost. To ' + ['Own Orb', 'Universal Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    470: {
        atk: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Universal Orb'][n] + ' boost. To ' + ['Own Orb', 'Universal Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    471: {
        atk: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [p.slot == p.sourceSlot ? 1.5 : 1, 2][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own Orb', 'Universal Orb'][n] + ' boost. To ' + ['Own Orb', 'Universal Orb'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    472: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.type == "PSY" ? 2.5 : 1; },
    },
    473: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.type == "DEX" ? 2.5 : 1; },
    },
    474: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.type == "PSY" ? 2.5 : 1; },
    },
    475: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.type == "DEX" ? 2.5 : 1; },
    },
    492: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 15 : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.5, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + 'x Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    493: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 15 : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.5, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + 'x Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    494: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 15 : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.5, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + 'x Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    495: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 15 : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.5, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + 'x Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    496: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    497: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    498: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    499: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    500: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    501: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    502: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    503: {
        affinity: function(p) { return p.unit.class.has("Cerebral") || p.unit.type == "DEX" || p.unit.type == "INT" ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    504: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    505: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    506: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    507: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    508: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    509: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    510: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    511: {
        chainAddition: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [0.5, 1.2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    524: {
        chainMultiplication: function(p) { return [1.25, 1, 1.25][p.cached.multiplier]; },
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? [1, 2.25, 2.25][p.cached.multiplier] : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][n] + ' boost. To ' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    525: {
        chainMultiplication: function(p) { return [1.25, 1, 1.25][p.cached.multiplier]; },
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? [1, 2.25, 2.25][p.cached.multiplier] : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][n] + ' boost. To ' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    526: {
        chainMultiplication: function(p) { return [1.25, 1, 1.25][p.cached.multiplier]; },
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") ? [1, 2.25, 2.25][p.cached.multiplier] : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][n] + ' boost. To ' + ['Chain Multiplication', 'ATK', 'Chain Multiplication & ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    527: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    528: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    529: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    530: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    531: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    532: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    533: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    534: {
        chainMultiplication: function(p) { return [1.25, 1.4, 1.25, 1.4][p.cached.multiplier]; },
        chainMultiplicationPlus: function(p) { return [0, 0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    547: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    548: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    549: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    550: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    551: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    552: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    553: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    554: {
        turnedOn: -1,
        atkbase: function(p) { return [300, 800][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = -1;
        },
    },
    563: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    564: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    565: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    566: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    567: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    568: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    569: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    570: {
        atk: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        type: "type",
        orb: function(p) { return [1.3, 2.25, 1.3, 2.25][p.cached.multiplier]; },
        tapTiming: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? [{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.0 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 },{ Good: 0, Great: 0, Perfect: 0.4 }][p.cached.multiplier] : { Good: 0, Great: 0, Perfect: 0 }; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][n] + ' boost. To ' + ['Swap', 'Super Swap', 'Swap & EX', 'Super Swap & EX'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    571: {
        atkbase: function(p) { return Math.ceil(10 + 1240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    572: {
        atkbase: function(p) { return Math.ceil(10 + 1240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    573: {
        atkbase: function(p) { return Math.ceil(10 + 1240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    574: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    575: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    576: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    577: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    578: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    579: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    580: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    581: {
        increaseDamageTaken: function(p) { return p.cached.multiplier; },
        ignoresImmunities: function(p) { return p.cached.multiplier1; },
        onActivation: function(p) {
            var levels = [1.25, 1.75];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.cached.multiplier1 = [[],['increaseDamageTaken']][n];
            p.scope.notify({
                text: 'Using ' + levels[n] + 'x Increase Damage Taken. To switch to' + levels[(n + 1) % levels.length] + 'x Increase Damage Taken, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    582: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    583: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    584: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    585: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    586: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    587: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    588: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    589: {
        negative: function(p) { return 1; },
        ignoresImmunities: function(p) { return [[''],['negative']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Swap', 'Super Swap'][n] + ' boost. To ' + ['Swap', 'Super Swap'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    590: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2, 1, 2][p.cached.multiplier] : 1; },
        type: "type",
        atkPlus: function(p) { return [0, 0.25, 0.25, 0, 0.25][p.cached.multiplier]; },
        def: function(p) { return [0.5, 1, 1, 0.2, 0.2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return [[''],[''],[''],['def'],['def']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3, 4];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    591: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2, 1, 2][p.cached.multiplier] : 1; },
        type: "type",
        atkPlus: function(p) { return [0, 0.25, 0.25, 0, 0.25][p.cached.multiplier]; },
        def: function(p) { return [0.5, 1, 1, 0.2, 0.2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return [[''],[''],[''],['def'],['def']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3, 4];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    592: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2, 1, 2][p.cached.multiplier] : 1; },
        type: "type",
        atkPlus: function(p) { return [0, 0.25, 0.25, 0, 0.25][p.cached.multiplier]; },
        def: function(p) { return [0.5, 1, 1, 0.2, 0.2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return [[''],[''],[''],['def'],['def']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3, 4];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    593: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2, 1, 2][p.cached.multiplier] : 1; },
        type: "type",
        atkPlus: function(p) { return [0, 0.25, 0.25, 0, 0.25][p.cached.multiplier]; },
        def: function(p) { return [0.5, 1, 1, 0.2, 0.2][p.cached.multiplier]; },
        ignoresImmunities: function(p) { return [[''],[''],[''],['def'],['def']][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2, 3, 4];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: ATK Buff", "Super Swap: ATK Boost and ATK Buff", "Super Swap: DEF Reduction", "Super Swap: DEF Reduction, ATK Boost and ATK Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    594: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    595: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    596: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    597: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    598: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    599: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    600: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    601: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" || p.unit.class.has("Cerebral")? [1.5, 1, 2][p.cached.multiplier] : 1; },
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][n] + '. To switch to ' + ["Swap", "Super Swap: Orb Buff", "Super Swap: Orb Boost and Orb Buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
}

Object.keys(ghostsAltSpecials).forEach(function (key) {
    window.altspecials[calcGhostStartIDAltSpecials["start"] + parseInt(key)] = ghostsAltSpecials[key];
});
