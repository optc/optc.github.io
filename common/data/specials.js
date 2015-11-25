window.specials = {
	18: {
		def: function(p) { return 0.5; }
	},
	24: {
		def: function(p) { return 0.5; }
	},
	34: {
		def: function(p) { return 0; }
	},
	127: {
		def: function(p) { return 0.5; }
	},
	137: {
		def: function(p) { return 0.5; }
	},
	148: {
		def: function(p) { return 0.5; }
	},
	158: {
		def: function(p) { return 0.5; }
	},
	206: {
		def: function(p) { return 0.5; }
	},
	209: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		type: "type"
	},
	210: {
		atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
		type: "type"
	},
	222: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		type: "type"
	},
	223: {
		atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
		type: "type"
	},
	263: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	267: {
		def: function(p) { return 0.5; }
	},
	275: {
		def: function(p) { return 0.5; }
	},
	285: {
		def: function(p) { return 0.5; }
	},
	295: {
		def: function(p) { return 0.5; }
	},
	309: {
		def: function(p) { return 0.5; }
	},
	310: {
		def: function(p) { return 0.5; }
	},
	313: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		type: "class"
	},
	314: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		type: "class"
	},
	323: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	324: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	352: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
		type: "class"
	},
	353: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
		type: "class"
	},
	382: {
		def: function(p) { return 0.5; }
	},
	385: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
		type: "class"
	},
	386: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
		type: "class"
	},
	391: {
		def: function(p) { return 0.2; }
	},
	392: {
		def: function(p) { return 0.2; }
	},
	395: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	396: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	399: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		type: "type"
	},
	400: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
		type: "type"
	},
	401: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
		type: "class"
	},
	402: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
		type: "class"
	},
	404: {
		rcv: function(p) { return 2; }
	},
	405: {
		rcv: function(p) { return 2; }
	},
	406: {
		atk: function(p) { return 1.2; },
		type: "type"
	},
	417: {
		orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
	},
	418: {
		orb: function(p) { return p.orb == 2.0 ? 2.0 : (p.orb == 0.5 ? 0.25 : 1); }
	},
	419: {
		def: function(p) { return 0.5; }
	},
	423: {
		def: function(p) { return 0.5; }
	},
	424: {
		def: function(p) { return 0.5; }
	},
	426: {
		atk: function(p) { return p.unit.type == "STR" ? 1.05 : 1; },
		type: "type"
	},
	429: {
		def: function(p) { return 0.5; }
	},
	430: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	431: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	434: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	450: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		type: "class"
	},
	451: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
		type: "class"
	},
	454: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		type: "type"
	},
	455: {
		atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
		type: "type"
	},
	458: {
		atk: function(p) { return 1.5; },
		type: "type"
	},
	459: {
		atk: function(p) { return 1.5; },
		type: "type"
	},
	461: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
		type: "class"
	},
	462: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
		type: "class"
	},
	465: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	468: {
		rcv: function(p) { return 1.5; }
	},
	470: {
		rcv: function(p) { return 1.5; }
	},
	487: {
		atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
		type: "type"
	},
	488: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
		type: "type"
	},
	489: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		type: "type"
	},
	490: {
		atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
		type: "type"
	},
	491: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
		type: "type"
	},
	492: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
		type: "type"
	},
	505: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
		type: "type"
	},
	506: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
		type: "type"
	},
	509: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		type: "class"
	},
	510: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
		type: "class"
	},
	511: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
		type: "class"
	},
	514: {
		def: function(p) { return 0.5; },
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		type: "type"
	},
	517: {
		atk: function(p) { return 1.05; },
		type: "type"
	},
	518: {
		atk: function(p) { return 1.05; },
		type: "type"
	},
	519: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		type: "type"
	},
	520: {
		atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
		type: "type"
	},
	529: {
		def: function(p) { return 0; }
	},
	530: {
		def: function(p) { return 0; }
	},
	533: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	534: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	542: {
		rcv: function(p) { return 2; }
	},
	545: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		type: "type"
	},
	546: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
		type: "type"
	},
	549: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	550: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	559: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	560: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	568: {
		def: function(p) { return 0.5; }
	},
	569: {
		def: function(p) { return 0.5; }
	},
	572: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
		type: "class",
		onActivation: function(p) { p.tdata.lock = Math.max(1,p.tdata.lock); },
		onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
	},
	574: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
		type: "class"
	},
	575: {
		atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
		type: "class"
	},
	576: {
		rcv: function(p) { return 1.5; }
	},
	582: {
		atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
		type: "type"
	},
	589: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		type: "class"
	},
	590: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
		type: "class"
	},
	596: {
		def: function(p) { return 0.5; }
	},
	597: {
		def: function(p) { return 0.5; }
	},
	600: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
		type: "type"
	},
	601: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
		type: "type"
	},
	602: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		type: "type"
	},
	603: {
		atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
		type: "type"
	},
	612: {
		atkStatic: function(p) { return 45; },
		rcvStatic: function(p) { return 45; }
	},
	613: {
		atkStatic: function(p) { return 45; },
		rcvStatic: function(p) { return 45; }
	},
	614: {
		def: function(p) { return 0.5; }
	},
	617: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
		type: "class"
	},
	622: {
		rcvStatic: function(p) { return 100; }
	},
	632: {
		def: function(p) { return 0.5; }
	},
	633: {
		def: function(p) { return 0.5; }
	},
	634: {
		atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
		type: "type"
	},
	635: {
		atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
		type: "type"
	},
	637: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (Hatchan, Takoyaki Stand) assumes that the enemy has a defense buff active."
	},
	642: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	643: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	644: {
		atk: function(p) { return 1.2; },
		type: "condition",
		warning: "Selected special (Whitey Bay) assumes that the enemy has been delayed."
	},
	645: {
		atk: function(p) { return 1.2; },
		type: "condition",
		warning: "Selected special (Ice Witch Whitey Bay) assumes that the enemy has been delayed."
	},
	648: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	649: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	650: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	651: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	655: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	656: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	660: {
		def: function(p) { return 0.5; }
	},
	661: {
		def: function(p) { return 0.5; }
	},
	665: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	666: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	668: {
		atk: function(p) { return !p.unit.class.has('Freedom') ? 1 : window.specials[668].multiplier; },
		type: "class",
		onActivation: function(p) {
			var n = (window.specials[668].multiplier == 1.5 ? 1 : 0);
			window.specials[668].multiplier = [1.5,2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5,2][n] + 'x ATK multiplier. To switch to the ' +
					[2,1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '667warning'
			});
		}
	},
	669: {
		atk: function(p) { return !p.unit.class.has('Freedom') ? 1 : window.specials[669].multiplier; },
		type: "class",
		onActivation: function(p) {
			var n = (window.specials[669].multiplier == 1.5 ? 1 : 0);
			window.specials[669].multiplier = [1.5,2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5,2][n] + 'x ATK multiplier. To switch to the ' +
					[2,1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '668warning'
			});
		}
	},
	670: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
		type: "class"
	},
	671: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
		type: "class"
	},
	680: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
		type: "type"
	},
	681: {
		atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
		type: "type"
	},
	687: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.3 : 1; },
		type: "class"
	},
	688: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.3 : 1; },
		type: "class"
	},
	689: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	690: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); }
	},
	710: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
		type: "class"
	},
	711: {
		atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
		type: "class"
	},
	712: {
		atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
		type: "class"
	},
	713: {
		atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
		type: "class"
	},
	715: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
		type: "class"
	},
	716: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
		type: "class"
	},
	719: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? window.specials[719].multiplier : 1; },
		type: "class",
		onActivation: function(p) {
			var n = (p.percHP <= 30 ? 2 : 1.5);
			window.specials[719].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
				name: '719warning'
			});
		}
	},
	720: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? window.specials[720].multiplier : 1; },
		type: "class",
		onActivation: function(p) {
			var n = (p.percHP <= 30 ? 2 : 1.5);
			window.specials[720].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
				name: '720warning'
			});
		}
	},
	727: {
		def: function(p) { return 0.5; }
	},
	730: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		type: "type"
	},
	731: {
		atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
		type: "type"
	},
	732: {
		def: function(p) { return 0.5; }
	},
	733: {
		def: function(p) { return 0.5; }
	},
	740: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (Nero) assumes that the enemy has a defense buff active."
	},
	741: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (Nero, Cipher Pol No.9) assumes that the enemy has a defense buff active."
	},
	742: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	743: {
		orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 4/5 : 1); }
	},
	753: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	754: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	755: {
		atk: function(p) { return p.unit.class.has("Tough") ? 1.75 : 1; },
		type: "class"
	},
	756: {
		atk: function(p) { return p.unit.class.has("Tough") ? 1.75 : 1; },
		type: "class"
	},
	761: {
		atk: function(p) { return 1.2; },
		type: "type"
	},
	762: {
		atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
		type: "type"
	},
	770: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (Dalmatian, Navy Headquarters Vice Admiral) assumes that the enemy has been delayed."
	},
	771: {
		atk: function(p) { return p.unit.class.has("Knowledge") ? 1.75 : 1; },
		type: "type"
	},
	780: {
		atk: function(p) {
			return p.slot == p.sourceSlot ? window.specials[780].multiplier : 1;
		},
		type: "type",
		onActivation: function(p) {
			var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
			window.specials[780].multiplier = n;
			p.scope.notify({
				text: 'Using the ' + n + 'x multiplier.',
				name: '780warning'
			});
		}
	},
	781: {
		atk: function(p) {
			return p.slot == p.sourceSlot ? window.specials[781].multiplier : 1;
		},
		type: "type",
		onActivation: function(p) {
			var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
			window.specials[781].multiplier = n;
			p.scope.notify({
				text: 'Using the ' + n + 'x multiplier.',
				name: '781warning'
			});
		}
	},
	788: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
		type: "class"
	},
	789: {
		atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
		type: "class"
	},
	790: {
		atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
		type: "type"
	},
	791: {
		atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
		type: "type"
	},
	796: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "type"
	},
	797: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "type"
	},
	798: {
		atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
		type: "class"
	},
	803: {
		atk: function(p) { return 1.1; },
		type: "type"
	},
	804: {
		atk: function(p) { return 1.1; },
		type: "type"
	},
	805: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	806: {
		orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
	},
	807: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	808: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	809: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
		def: function(p) { return 0.2; }
	},
	810: {
		orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 2/3 : 1); },
		def: function(p) { return 0.2; }
	},
	822: {
		rcvStatic: function(p) { return 100; }
	},
	825: {
		atkStatic: function(p) { return 100; },
		type: "type"
	},
	826: {
		atk: function(p) { return 0.2; },
		type: "type"
	},
	827: {
		atk: function(p) { return 1.05; },
		type: "condition",
		warning: "Selected special (General Zombie Swift Shadow) assumes that the enemy has been poisoned."
	},
	832: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
		type: "class"
	},
	833: {
		atk: function(p) { return p.unit.class.has("Freedom") ? 1.5 : 1; },
		type: "class"
	}
};