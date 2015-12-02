window.captains = {
	2: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	3: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	4: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	5: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	6: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	7: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	8: {
		atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	10: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	11: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	12: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	13: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; }
	},
	14: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	15: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	16: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	17: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	18: {
		hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	19: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	20: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	21: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	22: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	23: {
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	24: {
		rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	25: {
		rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	26: {
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	27: {
		hp: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
	},
	28: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
	},
	35: {
		hp: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
	},
	36: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	37: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	38: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	39: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	41: {
		rcv: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
	},
	42: {
		atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
	},
	45: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
	},
	46: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	49: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	52: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
	},
	59: {
		atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
	},
	60: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	61: {
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	62: {
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	65: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	66: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	67: {
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	68: {
		rcv: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	74: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	75: {
		atk: function(p) { return p.unit.type == "QCK" ? 2.5 : 1; }
	},
	76: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	77: {
		atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
	},
	194: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	195: {
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	196: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	198: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	199: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	200: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	201: {
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	202: {
		hp: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	205: {
		hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
	},
	206: {
		hp: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
	},
	209: {
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	210: {
		rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	211: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
	},
	212: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	215: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	217: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 3.5 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	220: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	221: {
		atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
	},
	222: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	223: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	224: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect" ]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	225: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect" ]) ? 2.5 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	226: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	227: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2.5 : 1; }
	},
	228: {
		hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	230: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	231: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	232: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	233: {
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	234: {
		hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	235: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; }
	},
	236: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	248: {
		atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
	},
	249: {
		atk: function(p) { return p.unit.type == "STR" ? 3 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 0.4 : 1; }
	},
	250: {
		atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 99.0 ? 3 : 1; }
	},
	251: {
		atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 99.0 ? 3 : 1; }
	},
	252: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	253: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	254: {
		hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	255: {
		hp: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	256: {
		atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	257: {
		atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	258: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	259: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	260: {
		atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
	},
	261: {
		atk: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
	},
	263: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	265: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	267: {
		atk: function(p) { return 1.5; },
		hp: function(p) { return 1.5; },
		rcv: function(p) { return 1.5; }
	},
	290: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	293: {
		hp: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	294: {
		hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	295: {
		hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	296: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	297: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	298: {
		hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	299: {
		hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	305: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	306: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	307: {
		atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
	},
	308: {
		atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; }
	},
	311: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good" ]) ? 3.5 : 1;
		},
		hitModifiers: [ "Below Good", "Below Good", "Below Good", "Perfect", "Perfect", "Perfect" ]
	},
	312: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good" ]) ? 3.5 : 1;
		},
		hitModifiers: [ "Below Good", "Below Good", "Below Good", "Perfect", "Perfect", "Perfect" ]
	},
	313: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	314: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	315: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	316: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	319: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	320: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	321: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	322: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	323: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	324: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	328: {
		rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
	},
	329: {
		rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
	},
	332: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
	},
	333: {
		atk: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "INT" || p.unit.type == "PSY" ? 1.5 : 1; }
	},
	336: {
		atk: function(p) { return p.percHP <= 50.0 ? 1 : (p.unit.type == "PSY" ? 2 : 0.8); }
	},
	337: {
		atk: function(p) { return p.percHP <= 50.0 ? 1 : (p.unit.type == "PSY" ? 2.5 : 0.8); }
	},
	340: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	341: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	352: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	353: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2.5 : 1; }
	},
	356: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	357: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
	},
	358: {
		atk: function(p) { return p.unit.type == "DEX" && p.percHP >= 99.0 ? 2.5 : 1; }
	},
	359: {
		atk: function(p) { return p.unit.type == "DEX" && p.percHP >= 99.0 ? 3 : 1; }
	},
	360: {
		atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
	},
	361: {
		atk: function(p) { return p.unit.type == "INT" && p.percHP <= 30.0 ? 3 : 1; }
	},
	362: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	363: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	364: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	365: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	366: {
		chainModifier: function(p) { return 4; }
	},
	367: {
		chainModifier: function(p) { return 4; }
	},
	373: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	374: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	375: {
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	376: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	377: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	378: {
		rcv: function(p) { return 1.5; }
	},
	380: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	383: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	384: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	385: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	386: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	387: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	388: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	389: {
		damageSorter: function(d) {
			return CrunchUtils.okamaSort(d, [ 'DEX', 'INT', 'QCK' ]);
		},
		hitAtk: function(p) {
			return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
				{ type: 'DEX', minModifier: 'Good' },
				{ type: 'INT', minModifier: 'Good' },
				{ type: 'QCK', minModifier: 'Good' }
			]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	390: {
		damageSorter: function(d) {
			return CrunchUtils.okamaSort(d, [ 'DEX', 'INT', 'QCK' ]);
		},
		hitAtk: function(p) {
			return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
				{ type: 'DEX', minModifier: 'Good' },
				{ type: 'INT', minModifier: 'Good' },
				{ type: 'QCK', minModifier: 'Good' }
			]) ? 2.75 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	391: {
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	392: {
		rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	395: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
	},
	396: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	397: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition)
				.subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 3 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	398: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition)
				.subcontains([ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]) ? 4 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	399: {
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	400: {
		hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	401: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	402: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	403: {
		rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
	},
	404: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	405: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	408: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	409: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	410: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2.5 : 1; }
	},
	411: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	412: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	413: {
		atk: function(p) { return p.unit.type == "INT" && p.percHP >= 99.0 ? 2.5 : 1; }
	},
	414: {
		atk: function(p) { return p.unit.type == "INT" && p.percHP >= 99.0 ? 3 : 1; }
	},
	415: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
		rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
	},
	416: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; },
		rcv: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 1.5 : 1; }
	},
	417: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	418: {
		hp: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	419: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	420: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	421: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	422: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	424: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	425: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	426: {
		hp: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	427: {
		hp: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	428: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	430: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	431: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	433: {
		damageSorter: function(d) {
			return CrunchUtils.okamaSort(d, [ 'QCK', 'STR', 'DEX' ]);
		},
		hitAtk: function(p) {
			return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
				{ type: 'QCK', minModifier: 'Good' },
				{ type: 'STR', minModifier: 'Good' },
				{ type: 'DEX', minModifier: 'Good' }
			]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	434: {
		damageSorter: function(d) {
			return CrunchUtils.okamaSort(d, [ 'PSY', 'INT', 'INT' ]);
		},
		hitAtk: function(p) {
			return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
				{ type: 'PSY', minModifier: 'Good' },
				{ type: 'INT', minModifier: 'Good' },
				{ type: 'INT', minModifier: 'Good' }
			]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	435: {
		damageSorter: function(d) {
			return CrunchUtils.okamaSort(d, [ 'INT', 'PSY', 'QCK' ]);
		},
		hitAtk: function(p) {
			return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
				{ type: 'INT', minModifier: 'Good' },
				{ type: 'PSY', minModifier: 'Good' },
				{ type: 'QCK', minModifier: 'Good' }
			]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	437: {
		rcv: function(p) { return p.percHP <= 30.0 ? 3 : 1; }
	},
	438: {
		rcv: function(p) { return p.percHP <= 30.0 ? 5 : 1; }
	},
	444: {
		atk: function(p) { return p.percHP >= 70.0 && p.unit.class.has("Booster") ? 2 : 1; }
	},
	445: {
		atk: function(p) { return p.percHP >= 70.0 && p.unit.class.has("Booster") ? 2.5 : 1; }
	},
	446: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	447: {
		atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
	},
	448: {
		atk: function(p) { return p.unit.type == "QCK" && p.percHP >= 99.0 ? 3 : 1; }
	},
	449: {
		atk: function(p) { return p.unit.type == "QCK" && p.percHP >= 99.0 ? 3 : 1; }
	},
	450: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	451: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	452: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	453: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	454: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	455: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	456: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	457: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	458: {
		atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
	},
	459: {
		atk: function(p) { return p.unit.cost <= 20 ? 3 : 1; }
	},
	461: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	462: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	463: {
		hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	464: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	465: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Below Good", "Below Good", "Below Good", "Below Good" ]) ? 3 : 1;
		},
		hitModifiers: [ "Below Good", "Below Good", "Below Good", "Below Good", "Perfect", "Perfect" ]
	},
	466: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	467: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	470: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	471: {
		atk: function(p) { return p.unit.type == "INT" ? 1.2: 1; },
		hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
	},
	482: {
		hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
	},
	483: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; }
	},
	485: {
		hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	486: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
	},
	490: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.2 : 1; }
	},
	491: {
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	492: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	496: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	497: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	498: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; }
	},
	499: {
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	500: {
		rcv: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	501: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		hp: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	502: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	503: {
		hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	504: {
		hp: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	507: {
		atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 1.2 : 1; }
	},
	508: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	509: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	510: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	511: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	513: {
		atk: function(p) { return p.unit.type == "PSY" && p.percHP >= 50.0 ? 1.5 : 1; }
	},
	514: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	515: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	516: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	517: {
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	518: {
		hp: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	519: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	520: {
		atk: function(p) { return p.unit.type == "STR" ? 2.5 : 1; }
	},
	523: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	524: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	525: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	526: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	527: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	528: {
		atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	529: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
	},
	530: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 + 0.75 * p.percHP / 100 : 1; }
	},
	533: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	534: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	535: {
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	536: {
		rcv: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	537: {
		chainModifier: function(p) { return 2; }
	},
	538: {
		chainModifier: function(p) { return 2; }
	},
	541: {
		atk: function(p) { return p.unit.type == "STR" && p.percHP <= 50.0 ? 2.5 : 1; }
	},
	542: {
		hp: function(p) { return 1.5; }
	},
	543: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return 0; }
	},
	544: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2.25 : 1; },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return 0; }
	},
	545: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	546: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	548: {
		atk: function(p) { return 1.2; }
	},
	549: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	550: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	553: {
		atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 2.75 : 1; }
	},
	554: {
		atk: function(p) { return p.unit.type == "DEX" && p.percHP <= 30.0 ? 3 : 1; }
	},
	555: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	556: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	557: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	558: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	559: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	560: {
		atk: function(p) { return p.unit.type == "STR" ? 2.25 : 1; }
	},
	561: {
		atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (p.orb == 2.0 ? 3 : 2); },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	562: {
		atk: function(p) { return !p.unit.class.has("Shooter") ? 1 : (p.orb == 2.0 ? 3 : 2); },
		hp: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	568: {
		atk: function(p) { return 1.25; },
		hp: function(p) { return 1.25; },
		rcv: function(p) { return 1.25; }
	},
	569: {
		atk: function(p) { return 1.5; },
		hp: function(p) { return 1.5; },
		rcv: function(p) { return 1.5; }
	},
	570: {
		atk: function(p) {
			return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
				   p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5  :
																	   1;
		}
	},
	571: {
		atk: function(p) {
			return p.unit.class.has("Fighter") && p.unit.type == "STR" ? 2.25 :
				   p.unit.type == "STR" || p.unit.class.has("Fighter") ? 1.5  :
																	   1;
		}
	},
	572: {
		atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 2.5 : 1; }
	},
	573: {
		rcv: function(p) { return 1.2; }
	},
	574: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	575: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	576: {
		atk: function(p) { return 1.5; },
		rcv: function(p) { return 1.2; }
	},
	577: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
		},
		hitModifiers: [ "Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	578: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Good", "Great", "Perfect" ]) ? 4 : 1;
		},
		hitModifiers: [ "Good", "Great", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	579: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 1.5 : 1; }
	},
	580: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "DEX") ? 2 : 1; }
	},
	581: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	582: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	583: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	584: {
		atk: function(p) { return 0.1; },
		hp: function(p) { return 0.1; },
		rcv: function(p) { return 0.1; }
	},
	585: {
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	586: {
		hp: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	589: {
		atk: function(p) { return 1.5; },
		hp: function(p) { return 0.2; },
		rcv: function(p) { return 0.2; }
	},
	590: {
		atk: function(p) { return 1.5; },
		hp: function(p) { return 0.2; },
		rcv: function(p) { return 0.2; }
	},
	596: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	597: {
		atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
	},
	598: {
		atk: function(p) { return p.unit.stars < 3 ? 2.5 : 1; }
	},
	599: {
		atk: function(p) { return p.unit.stars < 3 ? 3 : 1; }
	},
	600: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	601: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	602: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	603: {
		atk: function(p) { return p.unit.type == "QCK" ? 2.25 : 1; }
	},
	604: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	605: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	606: {
		atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2 : 1; }
	},
	607: {
		atk: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 2.5 : 1; }
	},
	612: {
		hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	613: {
		hp: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	614: {
		atk: function(p) { return p.unit.cost <= 20 && p.percHP <= 30.0 ? 2.25 : 1; }
	},
	629: {
		atk: function(p) { return p.unit.stars <= 3 ? 2 : 1; }
	},
	630: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	631: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	632: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	633: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	634: {
		atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.25 : 1; }
	},
	635: {
		atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.5 : 1; }
	},
	636: {
		atk: function(p) { return p.unit.cost <= 2 ? 3 : 1; }
	},
	637: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	638: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	639: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	640: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	641: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; }
	},
	642: {
		atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 2.5 : 1; }
	},
	643: {
		atk: function(p) { return p.unit.type == "PSY" && p.percHP <= 30.0 ? 3 : 1; }
	},
	644: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	645: {
		atk: function(p) { return p.unit.type == "INT" ? 2.5 : 1; }
	},
	646: {
		atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.5 : 1; }
	},
	647: {
		atk: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 2.75 : 1; }
	},
	648: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; }
	},
	649: {
		atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") && p.percHP >= 70.0 ? 2.75 : 1; }
	},
	650: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	651: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	652: {
		atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2 : 1); }
	},
	653: {
		atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.25 : 1); }
	},
	654: {
		atk: function(p) { return p.unit.type != "DEX" ? 1 : (p.orb == 2.0 ? 2.75 : 1); }
	},
	655: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	656: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	657: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	658: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	659: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	660: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	661: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	662: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	665: {
		atk: function(p) { return 1.2; },
		hp: function(p) { return 0.2; },
		rcv: function(p) { return 0.2; }
	},
	666: {
		atk: function(p) { return 1.75; },
		hp: function(p) { return 0.2; },
		rcv: function(p) { return 0.2; }
	},
	667: {
		atk: function(p) { return 1.75; }
	},
	668: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 + 0.75 * p.percHP / 100 : 1; },
		hp: function(p) { return 1.2; },
		rcv: function(p) { return 1.2; }
	},
	669: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 + 0.75 * p.percHP / 100 : 1; },
		hp: function(p) { return 1.2; },
		rcv: function(p) { return 1.2; }
	},
	670: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	671: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
		rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	672: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2: 1; }
	},
	673: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2: 1; }
	},
	674: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
	},
	675: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2.5 : 1; }
	},
	676: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	677: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	678: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	679: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	681: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	683: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; }
	},
	684: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	686: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	687: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; }
	},
	688: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
	},
	689: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; }
	},
	690: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	696: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; }
	},
	697: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
	},
	698: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
	},
	699: {
		atkStatic: function(p) { return p.unit.class.has("Shooter") ? 500 : 0; }
	},
	700: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; }
	},
	701: {
		hp: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; }
	},
	702: {
		hp: function(p) { return p.unit.type == "INT" ? 2.25 : 1; }
	},
	705: {
		atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1; },
		hp: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 1.25 : 1; }
	},
	706: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	707: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	708: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	709: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	710: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	711: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; }
	},
	712: {
		atk: function(p) { return p.unit.class.has("Striker") && p.percHP >= 50 ? 2 : 1; }
	},
	713: {
		atk: function(p) { return p.unit.class.has("Striker") && p.percHP >= 50 ? 2.5 : 1; }
	},
	715: {
		rcv: function(p) { return p.percHP <= 30 ? 3 : 1; }
	},
	716: {
		rcv: function(p) { return p.percHP <= 30 ? 5 : 1; }
	},
	717: {
		damageSorter: function(d) { return CrunchUtils.mihawkSort(d); },
		hitAtk: function(p) {
			if (!p.unit.class.has('Slasher')) return 1;
			var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
			return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	718: {
		damageSorter: function(d) { return CrunchUtils.mihawkSort(d); },
		hitAtk: function(p) {
			if (!p.unit.class.has('Slasher')) return 1;
			var prev = p.modifiers.slice(p.chainPosition - 1, p.chainPosition)[0];
			return p.chainPosition === 0 ? 2 : (prev == 'Good' ? 2.25 : (prev == 'Great' ? 2.5 : (prev == 'Perfect' ? 2.75 : 2)));
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	719: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1; }
	},
	720: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 + 1.75 * ((100 - p.percHP) / 100) : 1; }
	},
	721: {
		atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 1.5 : 1; }
	},
	722: {
		atk: function(p) { return p.unit.class.has("Fighter") && p.percHP >= 99.0 ? 2 : 1; }
	},
	723: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	724: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; }
	},
	727: {
		atk: function(p) { return p.unit.class.has("Freedom") || p.unit.class.has("Fighter") ? 1.75 : 1; }
	},
	728: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
	},
	730: {
		atk: function(p) { return p.unit.type == "INT" ? 1.2 : 1; },
		hp: function(p) { return p.unit.type == "INT" ? 1.2 : 1; }
	},
	731: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	732: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	733: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; }
	},
	734: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.2 : 1; }
	},
	735: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	736: {
		atk: function(p) { return p.unit.class.has("Slasher") && p.percHP >= 50.0 ? 2.5 : 1; }
	},
	737: {
		atk: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 2.75 : 1; }
	},
	738: {
		atk: function(p) { return p.unit.cost >= 21 ? 2 : 1; }
	},
	739: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
	},
	742: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.2 : 1; },
		rcv: function(p) { return p.unit.class.has("Freedom") ? 1.2 : 1; }
	},
	743: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; }
	},
	744: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
	},
	745: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2.5 : 1; }
	},
	747: {
		atk: function(p) { return !p.unit.class.has("Tough") ? 1 : (p.orb == 2.0 ? 3 : 2.5); },
		rcv: function(p) { return 0; }
	},
	748: {
		atk: function(p) { return !p.unit.class.has("Tough") ? 1 : (p.orb == 2.0 ? 3 : 2.5); },
		rcv: function(p) { return 0; }
	},
	749: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	750: {
		atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; }
	},
	751: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	752: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 2.25 : 1; },
		rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	753: {
		atk: function(p) { return p.unit.class.has("Tough") ? 2 : 1; }
	},
	754: {
		atk: function(p) { return p.unit.class.has("Tough") ? 2.5 : 1; }
	},
	755: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	756: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; }
	},
	757: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	758: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	759: {
		atk: function(p) { return p.unit.type == "STR" && p.percHP <= 30.0 ? 2.5 : 1; }
	},
	760: {
		atk: function(p) { return p.unit.type == "STR" && p.percHP <= 30.0 ? 3 : 1; }
	},
	761: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; }
	},
	762: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; }
	},
	763: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	764: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	766: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; }
	},
	767: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	768: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	769: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "INT" ? 1.5 : 1; }
	},
	770: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; }
	},
	771: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 2.5 : 1; }
	},
	772: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; }
	},
	774: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 2 : 1; }
	},
	775: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
		hp: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	776: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.25 : 1; }
	},
	777: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
		rcv: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; }
	},
	780: {
		atk: function(p) { return p.percHP <= 30.0 ? 2 : 1; }
	},
	781: {
		atk: function(p) { return p.percHP <= 30.0 ? 2.5 : 1; }
	},
	782: {
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	783: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	789: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
	},
	791: {
		atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; },
		hp: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; },
		rcv: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.25 : 1; }
	},
	793: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	794: {
		atk: function(p) { return  p.unit.class.has("Tough") ? Math.max(1.0, 3.0 - 0.1 * p.turnCounter) : 1; }
	},
	795: {
		atk: function(p) { return  p.unit.class.has("Tough") ? Math.max(1.0, 3.5 - 0.1 * p.turnCounter) : 1; }
	},
	796: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 2 : 1; }
	},
	797: {
		atk: function(p) { return p.unit.class.has("Knowledge") || p.unit.class.has("Tough") ? 2 : 1; }
	},
	798: {
		hitAtk: function(p) {
			return p.modifiers.slice(0,p.chainPosition).subcontains([ "Perfect", "Perfect", "Perfect" ]) ? 2.5 : 1;
		},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	801: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; }
	},
	802: {
		atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; }
	},
	803: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; }
	},
	804: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; }
	},
	805: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	806: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	807: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	808: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Knowledge") ? 1.5 : 1; }
	},
	809: {
		atk: function(p) { return p.unit.class.has("Tough") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Tough") ? 1.5 : 1; }
	},
	810: {
		atk: function(p) { return p.unit.class.has("Tough") ? 2 : 1; },
		rcv: function(p) { return p.unit.class.has("Tough") ? 1.5 : 1; }
	},
	813: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	815: {
		damageSorter: function(d) {
					return CrunchUtils.okamaSort(d, [ 'STR', 'INT', 'DEX' ]);
				},
		hitAtk: function(p) {
					return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
						{ type: 'STR', minModifier: 'Good' },
						{ type: 'INT', minModifier: 'Good' },
						{ type: 'DEX', minModifier: 'Good' }
					]) ? 2.5 : 1;
				},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	816: {
		damageSorter: function(d) {
					return CrunchUtils.okamaSort(d, [ 'STR', 'INT', 'DEX' ]);
				},
		hitAtk: function(p) {
					return CrunchUtils.okamaCheck(p.damage.slice(0,p.chainPosition), p.modifiers, [
						{ type: 'STR', minModifier: 'Good' },
						{ type: 'INT', minModifier: 'Good' },
						{ type: 'DEX', minModifier: 'Good' }
					]) ? 2.75 : 1;
				},
		hitModifiers: [ "Perfect", "Perfect", "Perfect", "Perfect", "Perfect", "Perfect" ]
	},
	825: {
		atk: function(p) { return p.unit.type == 'STR' ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == 'STR' ? 1.5 : 1; }
	},
	826: {
		atk: function(p) { return p.unit.type == 'DEX' ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == 'DEX' ? 1.5 : 1; }
	},
	827: {
		atk: function(p) { return p.unit.type == 'QCK' ? 1.5 : 1; },
		hp: function(p) { return p.unit.type == 'QCK' ? 1.5 : 1; }
	},
	830: {
		atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Knowledge") ? 1.75 : 1; }
	},
	831: {
		atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Knowledge") ? 2 : 1; }
	},
	832: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1 + 1.5 * ((100 - p.percHP) / 100) : 1; }
	},
	833: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1 + 1.75 * ((100 - p.percHP) / 100) : 1; }
	},
	834: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; }
	},
	835: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Knowledge") ? 2 : 1; }
	},
	836: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 2 : 1; },
		hp: function(p) { return p.unit.class.has("Knowledge") ? 2 : 1; }
	},
	837: {
		atk: function(p) { return p.unit.class.has("Ambition") ? 2 : 1; }
	},
	838: {
		atk: function(p) { return p.unit.class.has("Ambition") ? 2.5 : 1; }
	},
	839: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; }
	},
	840: {
		atk: function(p) { return p.unit.class.has("Striker") ? 2.5 : 1; }
	},
	843: {
		atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1; }
	},
	844: {
		atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 2 : 1; }
	},
	845: {
		hit: function(n) { return n > 22 ? 2.5 : (n > 11 ? 1.5 : 1); },
		warning: "Selected captain ability (%name%) has not been tested yet."
	},
	846: {
		hit: function(n) {
					return n > 40 ? 3.5  :
						   n > 30 ? 2.75 :
						   n > 22 ? 2.5  :
						   n > 11 ? 1.5  : 1;
				},
		warning: "Selected captain ability (%name%) has not been tested yet."
	},
	847: {
		atk: function(p) { return p.percHP <= 30.0 ? 1.5 : 1; }
	},
	848: {
		atk: function(p) { return p.percHP <= 30.0 ? 1.5 : 1; }
	},
	849: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; }
	},
	850: {
		atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Knowledge") ? 1.5 : 1; }
	}
};
