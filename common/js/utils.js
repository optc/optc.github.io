(function () {

    var FODDER_REGEX = new RegExp('(' + [
        'Group', 'Ensign Navy HQ', 'Armed \\w+ Unit', '[BM]illions Baroque', 'Eneru\'s Elect',
        'Skypiea (Guard|Enforcer)', '(Adept|Nomad|Hunter), Shandian',
        '(Seaman|Major|Corporal) Navy', 'Hoodlum.+Bounty Hunter', 'Black Cat Pirates',
        'Arlong crewmember', 'Gunner|Cannoneer|Assassin Master', '^(Female|Giant).*(Red|Blue|Green|Yellow|Black) Pirates',
        '(Soldier|General) Zombie.*Shadow', 'Wild Zombie', 'Street Punk', 'Kuja Warriors', '(Naginata|Rifle|Saber|Bazooka|Knuckle) (Corporal|Major)', '(Strong|Speedy|Crafty|Hate-Filled|Egotistical) Soldier Zombie', '(Powerful|Sneaky|Blazing) General Zombie', '(Quick-Draw|Scheming|Technical|Quick-Strike|Strong-Arm|Bold) Gunman', '(Suppressor|Emergency|Perimeter) Jailer', '(Contemplative|All-Action) Guard', 'Fishman (Guard|Outlaw)', 'Punk Hazard Gas Mask Patrol Soldier', 'Punk Hazard Patrol Troop Corps', 'Donquixote Pirates Member', '(Tactical|Elite) Musketeers', '(Fighter Group|Reconnaissance Group|Electro Group), Guardians', 'Germa Kingdom Clone Soldier', 'Soul Homie', 'Chess Mercenaries'
    ].join(')|(') + ')', 'i');

    var utils = {};

    var fullNames = null, reverseEvoMap = null;

    /* * * * * Unit control * * * * */

    var parseUnit = function (element, n) {
        if (element.length === 0)
            return [];
        if (element[15] && element[15].constructor != Array)
            element[15] = [element[15], element[15], element[15]];
        var limitHealth = element[12], limitAttack = element[13], limitRecovery = element[14], limitCooldown = 0, limitSlots = element[6];
        if (window.details) if(window.details[n + 1]) if(window.details[n + 1].limit){
            for(var x in window.details[n + 1].limit){
                if (window.details[n + 1].limit[x].description.includes("Boosts base HP by ")) limitHealth += parseInt(window.details[n + 1].limit[x].description.substring(18), 10);
                if (window.details[n + 1].limit[x].description.includes("Boosts base ATK by ")) limitAttack += parseInt(window.details[n + 1].limit[x].description.substring(19), 10);
                if (window.details[n + 1].limit[x].description.includes("Boosts base RCV by ")) limitRecovery += parseInt(window.details[n + 1].limit[x].description.substring(19), 10);
                if (window.details[n + 1].limit[x].description.includes("Reduce base Special Cooldown by ")) limitCooldown += parseInt(window.details[n + 1].limit[x].description.substring(32, 33), 10);
                if (window.details[n + 1].limit[x].description.includes("additional Socket slot")) limitSlots += parseInt(window.details[n + 1].limit[x].description.substring(8, 9), 10);
            }
        }
        var result = {
            name: element[0], type: element[1],
            class: element[2], stars: element[3],
            cost: element[4], combo: element[5],
            slots: element[6], maxLevel: element[7],
            maxEXP: element[8], minHP: element[9],
            minATK: element[10], minRCV: element[11],
            maxHP: element[12], maxATK: element[13],
            maxRCV: element[14], limitHP: limitHealth, 
            limitATK: limitAttack, limitRCV: limitRecovery,
            limitSlot: limitSlots, limitCD: limitCooldown,
            growth: {
                hp: element[15] ? element[15][0] : 0,
                atk: element[15] ? element[15][1] : 0,
                rcv: element[15] ? element[15][2] : 0
            },
            number: n
        };
        if (element.indexOf(null) != -1)
            result.incomplete = true;
        if (result.combo === null || result.combo === 0)
            result.preview = true;
        return result;
    };

    utils.parseUnits = function (skipIncomplete) {
        if (skipIncomplete) {
            window.units = window.units.map(function (x, n) {
                if (x.indexOf(null) == -1)
                    return x;
                var viable = x[9] && x[10] && x[11] && x[12] && x[13] && x[14];
                return viable ? x : [];
            });
        }
        window.units = window.units.map(parseUnit);
    };

    utils.getFullUnitName = function (id) {
        if (fullNames === null) {
            fullNames = units.map(function (x, n) {
                if (!x.name)
                    return null;
                return x.name + (window.aliases[n + 1] ? ' ' + window.aliases[n + 1].join(', ') : '');
            });
        }
        return fullNames[id - 1];
    };

    /* * * * * Thumbnail control * * * * */
    
    utils.getGlobalThumbnailUrl = function (n) {
        if (n === null || n === undefined || (window.units && window.units[n - 1].incomplete))
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1');
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f' + id + '.png';
    };

    utils.getThumbnailUrl = function (n) {
        switch (n){
            case 'skullLuffy':
            case 9001: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_luffy.png'; break;
            case 'skullZoro':
            case 9002: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_zoro.png'; break;
            case 'skullNami':
            case 9003: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_nami.png'; break;
            case 'skullUsopp':
            case 9004: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_usopp_f.png'; break;
            case 'skullSanji':
            case 9005: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_sanji_f.png'; break;
            case 'skullChopper':
            case 9006: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_chopper_f.png'; break;
            case 'skullRobin':
            case 9007: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_robin_f.png'; break;
            case 'skullFranky':
            case 9008: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_franky_f.png'; break;
            case 'skullBrook':
            case 9009: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_brook_f.png'; break;
            case 'skullSTR':
            case 9010: return 'https://onepiece-treasurecruise.com/wp-content/uploads/red_skull_f.png'; break;
            case 'skullQCK':
            case 9011: return 'https://onepiece-treasurecruise.com/wp-content/uploads/blue_skull_f.png'; break;
            case 'skullPSY':
            case 9012: return 'https://onepiece-treasurecruise.com/wp-content/uploads/yellow_skull2_f.png'; break;
            case 'skullDEX':
            case 9013: return 'https://onepiece-treasurecruise.com/wp-content/uploads/green_skull2_f.png'; break;
            case 'skullINT':
            case 9014: return 'https://onepiece-treasurecruise.com/wp-content/uploads/black_skull_f.png'; break;
            case 'skullJudge':
            case 9015: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f1.png'; break;
            case 'skullReiju':
            case 9016: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f2.png'; break;
            case 'skullIchiji':
            case 9017: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f3.png'; break;
            case 'skullNiji':
            case 9018: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f4.png'; break;
            case 'skullYonji':
            case 9019: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f5.png'; break;
            case 'skullDoffy':
            case 9020: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_f.png'; break;
            case 'skullEnel':
            case 9021: return 'https://onepiece-treasurecruise.com/wp-content/uploads/enel_skull_f.png'; break;
            case 'skullHiguma':
            case 9022: return 'https://onepiece-treasurecruise.com/wp-content/uploads/higuma_skull_f.png'; break;
            case 'skullSanji2':
            case 9023: return 'https://onepiece-treasurecruise.com/wp-content/uploads/sanji_skull_f.png'; break;
            case 'skullFrankie':
            case 9024: return 'https://onepiece-treasurecruise.com/wp-content/uploads/frankie_skull_f.png'; break;
            case 'skullCavendish':
            case 9025: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Cavendish_skull_f.png'; break;
            case 'skullDoflamingo':
            case 9026: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_f2.png'; break;
            case 'skullIchiji2':
            case 9027: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f6.png'; break;
            case 'skullNiji2':
            case 9028: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f7.png'; break;
            case 'skullYonji2':
            case 9029: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f8.png'; break;
            case 'skullReiju2':
            case 9030: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f9.png'; break;
            case 'skullHancock':
            case 9031: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Hancock_skull_f.png'; break;
            case 'skullNami2':
            case 9032: return 'https://onepiece-treasurecruise.com/wp-content/uploads/nami_skull_f.png'; break;
        }
        if (n === null || n === undefined)
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        if ((window.units && window.units[n - 1].incomplete)){
            switch (window.units[n - 1].type){
                case 'STR': return '../res/blank_str.png'; break;
                case 'DEX': return '../res/blank_dex.png'; break;
                case 'QCK': return '../res/blank_qck.png'; break;
                case 'PSY': return '../res/blank_psy.png'; break;
                case 'INT': return '../res/blank_int.png'; break;
                default: return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png'; break;
            }
        }
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1'); // missing aokiji image
        switch(id){
            case '0742': return 'https://onepiece-treasurecruise.com/wp-content/uploads/f0742-2.png'; break;
            //case '2262': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5011.png'; break;
            //case '2263': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5012.png'; break;
            //case '2500': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2500.png'; break;
            case '3333': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5013.png'; break;
            case '3334': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png'; break;
            //case '2399': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5015.png'; break;
            case '3336': return '../res/character_10642_t1.png'; break;
            case '3339': return '../res/character_10852_t1.png'; break;
            case '3340': return '../res/character_10853_t1.png'; break;
            //case '2663': return '../res/character_10713_t1.png'; break;
            //case '2664': return '../res/character_10714_t1.png'; break;
            //case '2685': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5025.png'; break;
            //case '2686': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5026.png'; break;
            case '3347': return '../res/character_1508_t1.png'; break;
            case '3348': return '../res/character_1509_t1.png'; break;
            case '3349': return '../res/character_1510_t1.png'; break;
            case '3350': return '../res/character_1511_t1.png'; break;
            case '3351': return '../res/character_10861_t1.png'; break;
            case '3352': return '../res/character_10862_t1.png'; break;
            case '3353': return '../res/character_10994_t1.png'; break;
            case '3354': return '../res/character_10995_t1.png'; break;
            case '3355': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5037.png'; break;
            case '3356': return '../res/character_10869_t1.png'; break;
            case '3357': return '../res/character_10870_t1.png'; break;
            case '3358': return '../res/character_10867_t1.png'; break;
            case '3359': return '../res/character_10868_t1.png'; break;
            case '3360': return '../res/character_11037_t1.png'; break;
            case '3361': return '../res/character_11038_t1.png'; break;
            case '3362': return '../res/character_10258_t1.png'; break;
            case '3363': return '../res/character_10259_t1.png'; break;
            case '3364': return '../res/character_10262_t1.png'; break;
            case '3365': return '../res/character_10263_t1.png'; break;
            case '3366': return '../res/character_10858_t1.png'; break;
            case '3367': return '../res/character_10859_t1.png'; break;
            case '3368': return '../res/character_10860_t1.png'; break;
            case '3369': return '../res/character_10891_t1.png'; break;
            //case '3370': return '../res/character_10891_t1.png'; break;
            //case '2440': return '../res/character_10643_t1.png'; break;
            //case '2441': return '../res/character_10644_t1.png'; break;
            case '5000': return '../res/character_10185_t1.png'; break;
            case '5001': return '../res/character_10186_t1.png'; break;
            case '5002': return '../res/character_10187_t1_int.png'; break;
            case '5003': return '../res/character_10187_t1_psy.png'; break;
            case '5004': return '../res/character_10173_t1.png'; break;
            case '5005': return '../res/character_10174_t1.png'; break;
            case '5006': return '../res/character_10177_t1_qck.png'; break;
            case '5007': return '../res/character_10177_t1_str.png'; break;
            case '5008': return '../res/character_10175_t1.png'; break;
            case '5009': return '../res/character_10176_t1.png'; break;
            case '5010': return '../res/character_10178_t1_qck.png'; break;
            case '5011': return '../res/character_10178_t1_str.png'; break;
            case '5012': return '../res/character_10181_t1.png'; break;
            case '5013': return '../res/character_10182_t1.png'; break;
            case '5014': return '../res/character_10183_t1_psy.png'; break;
            case '5015': return '../res/character_10183_t1_dex.png'; break;
            case '5016': return '../res/character_10344_t1.png'; break;
            case '5017': return '../res/character_10345_t1.png'; break;
            case '5018': return '../res/character_10348_t1_psy.png'; break;
            case '5019': return '../res/character_10348_t1_int.png'; break;
            case '5020': return '../res/character_10346_t1.png'; break;
            case '5021': return '../res/character_10347_t1.png'; break;
            case '5022': return '../res/character_10349_t1_psy.png'; break;
            case '5023': return '../res/character_10349_t1_int.png'; break;
            case '5024': return '../res/character_10496_t1.png'; break;
            case '5025': return '../res/character_10497_t1.png'; break;
            case '5026': return '../res/character_10498_t1_dex.png'; break;
            case '5027': return '../res/character_10498_t1_str.png'; break;
            case '5028': return '../res/character_10636_t1.png'; break;
            case '5029': return '../res/character_10637_t1.png'; break;
            case '5030': return '../res/character_10640_t1_int.png'; break;
            case '5031': return '../res/character_10640_t1_dex.png'; break;
            case '5032': return '../res/character_10638_t1.png'; break;
            case '5033': return '../res/character_10639_t1.png'; break;
            case '5034': return '../res/character_10641_t1_int.png'; break;
            case '5035': return '../res/character_10641_t1_dex.png'; break;
            case '5036': return '../res/character_10649_t1.png'; break;
            case '5037': return '../res/character_10650_t1.png'; break;
            case '5038': return '../res/character_10653_t1_dex.png'; break;
            case '5039': return '../res/character_10653_t1_qck.png'; break;
            case '5040': return '../res/character_10651_t1.png'; break;
            case '5041': return '../res/character_10652_t1.png'; break;
            case '5042': return '../res/character_10654_t1_dex.png'; break;
            case '5043': return '../res/character_10654_t1_qck.png'; break;
            case '3341': return '../res/character_10707_t1.png'; break;
            case '3342': return '../res/character_10708_t1.png'; break;
            case '5044': return '../res/character_10703_t1.png'; break;
            case '5045': return '../res/character_10704_t1.png'; break;
            case '5046': return '../res/character_10707_t1_qck.png'; break;
            case '5047': return '../res/character_10707_t1_int.png'; break;
            case '5048': return '../res/character_10705_t1.png'; break;
            case '5049': return '../res/character_10706_t1.png'; break;
            case '5050': return '../res/character_10708_t1_qck.png'; break;
            case '5051': return '../res/character_10708_t1_int.png'; break;
            case '5052': return '../res/character_10720_t1.png'; break;
            case '5053': return '../res/character_10721_t1.png'; break;
            case '5054': return '../res/character_10724_t1_psy.png'; break;
            case '5055': return '../res/character_10722_t1.png'; break;
            case '5056': return '../res/character_10723_t1.png'; break;
            case '5057': return '../res/character_10725_t1_psy.png'; break;
            case '5058': return '../res/character_10735_t1.png'; break;
            case '5059': return '../res/character_10736_t1.png'; break;
            case '5060': return '../res/character_10739_t1_psy.png'; break;
            case '5061': return '../res/character_10739_t1_qck.png'; break;
            case '5062': return '../res/character_10737_t1.png'; break;
            case '5063': return '../res/character_10738_t1.png'; break;
            case '5064': return '../res/character_10740_t1_psy.png'; break;
            case '5065': return '../res/character_10740_t1_qck.png'; break;
            case '5066': return '../res/character_10832_t1.png'; break;
            case '5067': return '../res/character_10833_t1.png'; break;
            case '5068': return '../res/character_10836_t1_int.png'; break;
            case '5069': return '../res/character_10836_t1_qck.png'; break;
            case '5070': return '../res/character_10834_t1.png'; break;
            case '5071': return '../res/character_10835_t1.png'; break;
            case '5072': return '../res/character_10837_t1_int.png'; break;
            case '5073': return '../res/character_10837_t1_qck.png'; break;
            case '5074': return '../res/character_10950_t1.png'; break;
            case '5075': return '../res/character_10951_t1.png'; break;
            case '5076': return '../res/character_10952_t1_dex.png'; break;
            case '5077': return '../res/character_10952_t1_qck.png'; break;
            case '5078': return '../res/character_10773_t1.png'; break;
            case '5079': return '../res/character_10774_t1.png'; break;
            case '5080': return '../res/character_10775_t1_int.png'; break;
            case '5081': return '../res/character_10775_t1_qck.png'; break;
            case '5082': return '../res/character_10784_t1.png'; break;
            case '5083': return '../res/character_10785_t1.png'; break;
            case '5084': return '../res/character_10788_t1_dex.png'; break;
            case '5085': return '../res/character_10788_t1_qck.png'; break;
            case '5086': return '../res/character_10786_t1.png'; break;
            case '5087': return '../res/character_10787_t1.png'; break;
            case '5088': return '../res/character_10789_t1_dex.png'; break;
            case '5089': return '../res/character_10789_t1_qck.png'; break;
            case '5090': return '../res/character_10816_t1.png'; break;
            case '5091': return '../res/character_10817_t1.png'; break;
            case '5092': return '../res/character_10820_t1_int.png'; break;
            case '5093': return '../res/character_10818_t1.png'; break;
            case '5094': return '../res/character_10819_t1.png'; break;
            case '5095': return '../res/character_10821_t1_int.png'; break;
            case '5096': return '../res/character_10871_t1.png'; break;
            case '5097': return '../res/character_10872_t1.png'; break;
            case '5098': return '../res/character_10875_t1_str.png'; break;
            case '5099': return '../res/character_10875_t1_dex.png'; break;
            case '5100': return '../res/character_10873_t1.png'; break;
            case '5101': return '../res/character_10874_t1.png'; break;
            case '5102': return '../res/character_10876_t1_str.png'; break;
            case '5103': return '../res/character_10876_t1_dex.png'; break;
            case '5104': return '../res/character_10877_t1.png'; break;
            case '5105': return '../res/character_10878_t1.png'; break;
            case '5106': return '../res/character_10881_t1_psy.png'; break;
            case '5107': return '../res/character_10881_t1_str.png'; break;
            case '5108': return '../res/character_10879_t1.png'; break;
            case '5109': return '../res/character_10880_t1.png'; break;
            case '5110': return '../res/character_10882_t1_psy.png'; break;
            case '5111': return '../res/character_10882_t1_str.png'; break;
            case '5112': return '../res/character_10883_t1.png'; break;
            case '5113': return '../res/character_10884_t1.png'; break;
            case '5114': return '../res/character_10887_t1_qck.png'; break;
            case '5115': return '../res/character_10887_t1_psy.png'; break;
            case '5116': return '../res/character_10885_t1.png'; break;
            case '5117': return '../res/character_10886_t1.png'; break;
            case '5118': return '../res/character_10888_t1_qck.png'; break;
            case '5119': return '../res/character_10888_t1_psy.png'; break;
            case '5120': return '../res/character_10826_t1.png'; break;
            case '5121': return '../res/character_10827_t1.png'; break;
            case '5122': return '../res/character_10830_t1_dex.png'; break;
            case '5123': return '../res/character_10830_t1_int.png'; break;
            case '5124': return '../res/character_10828_t1.png'; break;
            case '5125': return '../res/character_10829_t1.png'; break;
            case '5126': return '../res/character_10831_t1_dex.png'; break;
            case '5127': return '../res/character_10831_t1_int.png'; break;
            case '5128': return '../res/character_10778_t1.png'; break;
            case '5129': return '../res/character_10779_t1.png'; break;
            case '5130': return '../res/character_10782_t1_str.png'; break;
            case '5131': return '../res/character_10782_t1_dex.png'; break;
            case '5132': return '../res/character_10780_t1.png'; break;
            case '5133': return '../res/character_10781_t1.png'; break;
            case '5134': return '../res/character_10783_t1_str.png'; break;
            case '5135': return '../res/character_10783_t1_dex.png'; break;
            case '5136': return '../res/character_10895_t1.png'; break;
            case '5137': return '../res/character_10896_t1.png'; break;
            case '5138': return '../res/character_10899_t1_int.png'; break;
            case '5139': return '../res/character_10899_t1_dex.png'; break;
            case '5140': return '../res/character_10897_t1.png'; break;
            case '5141': return '../res/character_10898_t1.png'; break;
            case '5142': return '../res/character_10900_t1_int.png'; break;
            case '5143': return '../res/character_10900_t1_dex.png'; break;
            case '5144': return '../res/character_10910_t1.png'; break;
            case '5145': return '../res/character_10911_t1.png'; break;
            case '5146': return '../res/character_10914_t1_str.png'; break;
            case '5147': return '../res/character_10914_t1_int.png'; break;
            case '5148': return '../res/character_10912_t1.png'; break;
            case '5149': return '../res/character_10913_t1.png'; break;
            case '5150': return '../res/character_10915_t1_str.png'; break;
            case '5151': return '../res/character_10915_t1_int.png'; break;
            case '5152': return '../res/character_10916_t1.png'; break;
            case '5153': return '../res/character_10917_t1.png'; break;
            case '5154': return '../res/character_10920_t1_str.png'; break;
            case '5155': return '../res/character_10920_t1_psy.png'; break;
            case '5156': return '../res/character_10918_t1.png'; break;
            case '5157': return '../res/character_10919_t1.png'; break;
            case '5158': return '../res/character_10921_t1_str.png'; break;
            case '5159': return '../res/character_10921_t1_psy.png'; break;
            case '5160': return '../res/character_10954_t1.png'; break;
            case '5161': return '../res/character_10955_t1.png'; break;
            case '5162': return '../res/character_10958_t1_dex.png'; break;
            case '5163': return '../res/character_10958_t1_str.png'; break;
            case '5164': return '../res/character_10956_t1.png'; break;
            case '5165': return '../res/character_10957_t1.png'; break;
            case '5166': return '../res/character_10959_t1_dex.png'; break;
            case '5167': return '../res/character_10959_t1_str.png'; break;
            case '5168': return '../res/character_10960_t1.png'; break;
            case '5169': return '../res/character_10961_t1.png'; break;
            case '5170': return '../res/character_10964_t1_int.png'; break;
            case '5171': return '../res/character_10964_t1_psy.png'; break;
            case '5172': return '../res/character_10962_t1.png'; break;
            case '5173': return '../res/character_10963_t1.png'; break;
            case '5174': return '../res/character_10965_t1_int.png'; break;
            case '5175': return '../res/character_10965_t1_psy.png'; break;
            case '5176': return '../res/character_10803_t1.png'; break;
            case '5177': return '../res/character_10804_t1.png'; break;
            case '5178': return '../res/character_10805_t1_str.png'; break;
            case '5179': return '../res/character_10805_t1_int.png'; break;
            case '5180': return '../res/character_10889_t1.png'; break;
            case '5181': return '../res/character_10890_t1.png'; break;
            case '5182': return '../res/character_10891_t1_dex.png'; break;
            case '5183': return '../res/character_10891_t1_qck.png'; break;
            case '5184': return '../res/character_11099_t1.png'; break;
            case '5185': return '../res/character_11100_t1.png'; break;
            case '5186': return '../res/character_11102_t1_qck.png'; break;
            default: break;
        }
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
    };

    utils.getBigThumbnailUrl = function (n) {
        switch (n){
            case 'skullLuffy':
            case 9001: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_luffy_c.png'; break;
            case 'skullZoro':
            case 9002: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_zoro_c.png'; break;
            case 'skullNami':
            case 9003: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_nami_c.png'; break;
            case 'skullUsopp':
            case 9004: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_usopp_c.png'; break;
            case 'skullSanji':
            case 9005: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_sanji_c.png'; break;
            case 'skullChopper':
            case 9006: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_chopper_c.png'; break;
            case 'skullRobin':
            case 9007: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_robin_c.png'; break;
            case 'skullFranky':
            case 9008: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_franky_c.png'; break;
            case 'skullBrook':
            case 9009: return 'https://onepiece-treasurecruise.com/wp-content/uploads/skull_brook_c.png'; break;
            case 'skullSTR':
            case 9010: return 'https://onepiece-treasurecruise.com/wp-content/uploads/red_skull_c.png'; break;
            case 'skullQCK':
            case 9011: return 'https://onepiece-treasurecruise.com/wp-content/uploads/blue_skull_c.png'; break;
            case 'skullPSY':
            case 9012: return 'https://onepiece-treasurecruise.com/wp-content/uploads/yellow_skull2_c.png'; break;
            case 'skullDEX':
            case 9013: return 'https://onepiece-treasurecruise.com/wp-content/uploads/green_skull2_c.png'; break;
            case 'skullINT':
            case 9014: return 'https://onepiece-treasurecruise.com/wp-content/uploads/black_skull_c.png'; break;
            case 'skullJudge':
            case 9015: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c1.png'; break;
            case 'skullReiju':
            case 9016: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c2.png'; break;
            case 'skullIchiji':
            case 9017: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c3.png'; break;
            case 'skullNiji':
            case 9018: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c4.png'; break;
            case 'skullYonji':
            case 9019: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c5.png'; break;
            case 'skullDoffy':
            case 9020: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_c.png'; break;
            case 'skullEnel':
            case 9021: return 'https://onepiece-treasurecruise.com/wp-content/uploads/enel_skull_c.png'; break;
            case 'skullHiguma':
            case 9022: return 'https://onepiece-treasurecruise.com/wp-content/uploads/higuma_skull_c.png'; break;
            case 'skullSanji2':
            case 9023: return 'https://onepiece-treasurecruise.com/wp-content/uploads/sanji_skull_f.png'; break;
            case 'skullFrankie':
            case 9024: return 'https://onepiece-treasurecruise.com/wp-content/uploads/frankie_skull_c.png'; break;
            case 'skullCavendish':
            case 9025: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Cavendish_skull_c.png'; break;
            case 'skullDoflamingo':
            case 9026: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_c2.png'; break;
            case 'skullIchiji2':
            case 9027: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c6.png'; break;
            case 'skullNiji2':
            case 9028: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c7.png'; break;
            case 'skullYonji2':
            case 9029: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c8.png'; break;
            case 'skullReiju2':
            case 9030: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_c9.png'; break;
            case 'skullHancock':
            case 9031: return 'https://onepiece-treasurecruise.com/wp-content/uploads/Hancock_skull_c.png'; break;
            case 'skullNami2':
            case 9032: return 'https://onepiece-treasurecruise.com/wp-content/uploads/nami_skull_c.png'; break;
        }
        if (window.units[n - 1].incomplete)
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1'); // missing aokiji image
        switch(id){
            //case '2262': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/c5012.png'; break;
            //case '2263': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/c5013.png'; break;
            //case '2500': return 'http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/c2500.png'; break;
            case '3333': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/character_1719.png'; break;
            case '3334': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/character_1720.png'; break;
            //case '2685': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/c10686.png'; break;
            //case '2686': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/c10687.png'; break;
            case '3355': return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/character_10993.png'; break;
            default: break;
        }
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';
    };

    utils.getThumbnailTitle = function (arg) {
        if (arg === null || arg === undefined)
            return null;
        if (arg.constructor == Object) {
            return [arg.name, 'HP: ' + arg.hp, 'ATK: ' + arg.atk, 'RCV: ' + arg.rcv, 'CMB: ' + arg.cmb].join('\n');
        }
        var unit = (arg.constructor == Object ? arg : units[arg]);
        return [unit.name, 'HP: ' + unit.maxHP, 'ATK: ' + unit.maxATK, 'RCV: ' + unit.maxRCV, 'CMB: ' + unit.combo, 'Cost: ' + unit.cost].join('\n');
    };

    utils.isClickOnOrb = function (e, target) {
        var x = e.offsetX, y = e.offsetY;
        var distance = Math.sqrt(Math.pow(x - 20, 2) + Math.pow(y - 21, 2));
        return distance < 13;
    };

    /* * * * * Misc functions * * * * */

    /* given an array of arrays, generates the cartesian product of
     * all the arrays contained within the root array
     * eg f([[1],[2,3],[4,5,6]]) -> [[1,2,4],[1,2,5],[1,2,6],[1,3,4],[1,3,5],[1,3,6]] */
    utils.arrayProduct = function (data) {
        var result = data.reduce(function (prev, next) {
            if (next.length === 0)
                return prev;
            return next.map(function (n) {
                return prev.map(function (p) {
                    return p.concat([n]);
                });
            }).reduce(function (prev, next) {
                return prev.concat(next);
            }, []);
        }, [[]]);
        return result.filter(function (r) {
            return r.length > 0;
        });
    };

    utils.getOppositeType = function (type) {
        if (!type)
            return null;
        type = type.toUpperCase();
        if (type == 'STR')
            return 'QCK';
        if (type == 'QCK')
            return 'DEX';
        if (type == 'DEX')
            return 'STR';
        if (type == 'PSY')
            return 'INT';
        return 'PSY';
    };

    /* * * * * Searching/filtering * * * * */

    utils.getRegex = function (query) {
        try {
            return new RegExp(query, 'i');
        } catch (e) {
            return new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'i');
        }
    };

    utils.generateSearchParameters = function (query) {
        if (!query || query.trim().length < 2)
            return null;
        query = query.toLowerCase().trim();
        var result = {matchers: {}, ranges: {}, query: []};
        var ranges = {}, params = ['hp', 'atk', 'stars', 'cost', 'growth', 'rcv', 'id', 'slots', 'combo', 'exp', 'minCD', 'maxCD'];
        var regex = new RegExp('^((type|class):(\\w+\\s{0,1}\\w+)|(' + params.join('|') + ')(>|<|>=|<=|=)([-?\\d.]+))$', 'i');
        var tokens = query.replace(/\s+/g, ' ').split(' ').filter(function (x) {
            return x.length > 0;
        });
        tokens.forEach(function (x) {
            x = x.replace("_", ' ');
            var temp = x.match(regex);
            if (!temp) // if it couldn't be parsed, treat it as string
                result.query.push(x);
            else if (temp[4] !== undefined) { // numeric operator
                var parameter = temp[4],
                        op = temp[5],
                        value = parseFloat(temp[6], 10);
                if (parameter === 'exp')
                    parameter = 'maxEXP';
                if (!result.ranges.hasOwnProperty(parameter)) {
                    if (op === '>' || op === '>=') {
                        result.ranges[parameter] = [0, Number.POSITIVE_INFINITY];
                    } else if (op === '<' || op === '<=') {
                        result.ranges[parameter] = [Number.NEGATIVE_INFINITY, 0];
                    }else{
                         result.ranges[parameter] = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
                    }
                }
                if (op === '=') {
                    result.ranges[parameter][0] = value;
                    result.ranges[parameter][1] = value;
                } else if (op === '<') {
                    result.ranges[parameter][1] =  value - 1;
                } else if (op === '<=') {
                    result.ranges[parameter][1] = value;
                } else if (op === '>') {
                    result.ranges[parameter][0] =  value + 1;
                } else if (op === '>=') {
                    result.ranges[parameter][0] =  value;
                }
            } else // matcher
                result.matchers[temp[2]] = new RegExp(temp[3], 'i');
        });
        if (result.query.length > 0)
            result.query = utils.getRegex(result.query.join(' '));
        else
            result.query = null;
        return result;
    };

    utils.isFodder = function (unit) {
        return (unit.stars < 2 && !utils.isEvolverBooster(unit)) || FODDER_REGEX.test(unit.name);
    };

    utils.isEvolverBooster = function (unit) {
        return /Evolver|Booster/i.test(unit.class);
    };

    utils.searchBaseForms = function (id) {
        if (!reverseEvoMap)
            generateReverseEvoMap();
        if (!reverseEvoMap[id])
            return null;
        return reverseEvoMap[id];
    };

    var updateEvoMap = function (from, to, via) {
        if (!reverseEvoMap[to])
            reverseEvoMap[to] = {};
        if (!reverseEvoMap[to][from])
            reverseEvoMap[to][from] = [];
        reverseEvoMap[to][from].push(via);
    };

    var generateReverseEvoMap = function () {
        reverseEvoMap = {};
        for (var evo in evolutions) {
            var from = parseInt(evo, 10);
            if (evolutions[evo].evolution.constructor != Array)
                updateEvoMap(from, evolutions[evo].evolution, evolutions[evo].evolvers);
            else
                for (var i = 0; i < evolutions[evo].evolution.length; ++i)
                    updateEvoMap(from, evolutions[evo].evolution[i], evolutions[evo].evolvers[i]);
        }
    };

    /* * * * * Body * * * * */

    window.Utils = utils;

})();
