window.sailors = {
    311: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    312: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    360: {
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; },
    },
    361: {
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; },
    },
    364: {
        rcvStatic: function(p) { return 10; },
    },
    365: {
        rcvStatic: function(p) { return 10; },
    },
    450: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 20 : 0; },
    },
    451: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 20 : 0; },
    },
    525: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; },
    },
    526: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; },
    },
    527: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    528: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    553: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    554: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    555: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 : 0; },
    },
    556: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 : 0; },
    },
    559: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 : 0; },
    },
    560: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 : 0; },
    },
    640: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Fighter") ? 100 : 0; },
    },
    641: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Fighter") ? 100 : 0; },
    },
    644: {
        rcvStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
    },
    645: {
        rcvStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
    },
    646: {
        hpStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; },
    },
    647: {
        hpStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; },
    },
    1172: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; },
    },
    1173: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; },
    },
    1174: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1175: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1176: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1177: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1183: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.type == "PSY" ? 75 : 0; },
    },
    1184: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.type == "PSY" ? 75 : 0; },
    },
    1187: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1188: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1189: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
    },
    1190: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
    },
    1209: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 : 0; },
    },
    1210: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 : 0; },
    },
    1211: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 : 0; },
    },
    1212: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 : 0; },
    },
    1231: {
        atkStatic: function(p) { return p.unit.class.has("Striker") ? 50 : 0; },
    },
    1232: {
        atkStatic: function(p) { return p.unit.class.has("Striker") ? 50 : 0; },
    },
    1233: {
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    1234: {
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    1255: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Fighter") ? 40 : 0; },
    },
    1256: {
        rcvStatic: function(p) { return p.unit.class.has("Driven") ? 10 : 0; },
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 10 : 0; },
    },
    1269: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Driven") ? 100 : 0 : 0; },
    },
    1270: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Driven") ? 100 : 0 : 0; },
    },
    1273: {
        hpStatic: function(p) { return 75; },
    },
    1274: {
        hpStatic: function(p) { return 75; },
    },
    1277: {
        rcvAdded: function(p) { return 150; },
    },
    1278: {
        rcvAdded: function(p) { return 150; },
    },
    1317: {
        hpStatic: function(p) { return 75; },
    },
    1318: {
        hpStatic: function(p) { return 75; },
    },
    1321: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Cerebral") ? p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 75 : 0 : 0 : 0; },
    },
    1322: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Cerebral") ? p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 75 : 0 : 0 : 0; },
    },
    1363: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 100 : 0; },
    },
    1364: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 100 : 0; },
    },
    1367: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1368: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1377: {
        rcvAdded: function(p) { return 125; },
    },
    1378: {
        rcvAdded: function(p) { return 125; },
    },
    1405: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Shooter") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Shooter") ? 100 : 0; },
    },
    1406: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Shooter") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("Shooter") ? 100 : 0; },
    },
    1435: {
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
    },
    1436: {
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
    },
    1443: {
        hpStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 50 : 0; },
    },
    1444: {
        hpStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 50 : 0; },
    },
    1464: {
        rcvAdded: function(p) { return 100; },
    },
    1465: {
        rcvAdded: function(p) { return 100; },
    },
    1476: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1477: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1507: {
        atkStatic: function(p) { return 15; },
    },
    1508: {
        atkStatic: function(p) { return 15; },
    },
    1510: {
        atkStatic: function(p) { return p.percHP >= 70.0 && p.unit.class.has("Striker") ? 20 : 0; },
    },
    1511: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Powerhouse") ? p.unit.class.has("Powerhouse") ? 20 : 0 : 0 : 0; },
    },
    1523: {
        rcvAdded: function(p) { return 124; },
    },
    1524: {
        rcvAdded: function(p) { return 124; },
    },
    1529: {
        atk: function(p) { return p.captain != null ? p.captain.type == "STR" || p.captain.type == "QCK" ? .5 : 1 : 1; },
    },
    1530: {
        atk: function(p) { return p.captain != null ? p.captain.type == "STR" || p.captain.type == "QCK" ? .5 : 1 : 1; },
    },
    1537: {
        hpStatic: function(p) { return p.unit.type == "STR" ? 150 : 0; },
    },
    1538: {
        hpStatic: function(p) { return p.unit.type == "STR" ? 150 : 0; },
    },
    1539: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    1540: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    1574: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1575: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1613: {
        staticMult: function(p) { return 2; }
    },
    1614: {
        staticMult: function(p) { return 2; }
    },
    1655: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
    },
    1656: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
    },
    1681: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1682: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1699: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 75 : 0; },
    },
    1700: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 75 : 0; },
    },
    1705: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1706: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1728: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    1729: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    1744: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
    },
    1745: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 30 : 0; },
    },
    1752: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1753: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1754: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1755: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1773: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 25 : 0; },
    },
    1774: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 25 : 0; },
    },
    1797: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
    },
    1798: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
    },
    1872: {
        staticMult: function(p) { return 2; }
    },
    1873: {
        staticMult: function(p) { return 2; }
    },
    1890: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    1891: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    1892: {
        atk: function(p) { return p.percHP <= 50.0 && p.slot == p.sourceSlot ? 1.25 : 1; },
    },
    1893: {
        atk: function(p) { return p.percHP <= 50.0 && p.slot == p.sourceSlot ? 1.25 : 1; },
    },
    1907: {
        atkStatic: function(p) { return p.slot <= 1 ? 100 : 0; },
    },
    1908: {
        atkStatic: function(p) { return p.slot <= 1 ? 100 : 0; },
    },
    1973: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    1974: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    1975: {
        atkStatic: function(p) { return p.percHP <= 30.0 ? 40 : 0; },
    },
    1976: {
        atkStatic: function(p) { return p.percHP <= 30.0 ? 40 : 0; },
    },
    1983: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    1984: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    1985: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    1992: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    1993: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    2006: {
        atkStatic: function(p) { return (p.colorCount.STR>=4 && p.unit.type == "STR") ? 125 : (p.colorCount.DEX>=4 && p.unit.type == "DEX") ? 125 : (p.colorCount.QCK>=4 && p.unit.type == "QCK") ? 125 : (p.colorCount.PSY>=4 && p.unit.type == "PSY") ? 125 : (p.colorCount.INT>=4 && p.unit.type == "INT") ? 125 : 0; },
    },
    2007: {
        atkStatic: function(p) { return (p.colorCount.STR>=4 && p.unit.type == "STR") ? 125 : (p.colorCount.DEX>=4 && p.unit.type == "DEX") ? 125 : (p.colorCount.QCK>=4 && p.unit.type == "QCK") ? 125 : (p.colorCount.PSY>=4 && p.unit.type == "PSY") ? 125 : (p.colorCount.INT>=4 && p.unit.type == "INT") ? 125 : 0; },
    },
    2026: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 50 : 0; },
    },
    2027: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 50 : 0; },
    },
    2031: {
        atkStatic: function(p) { return p.unit.type == "INT"  ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT"  ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT"  ? 50 : 0; },
    },
    2038: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
    },
    2039: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 40 : 0; },
    },
    2040: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
    },
    2041: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
    },
    2042: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2043: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2067: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    2068: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    2081: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 40 : 0; },
    },
    2084: {
        atkStatic: function(p) { return 50; },
    },
    2085: {
        atkStatic: function(p) { return 50; },
    },
    2110: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
    },
    2111: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 20 : 0; },
    },
    2122: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    2123: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    2153: {
        atkStatic: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 120 : 0; },
    },
    2154: {
        atkStatic: function(p) { return p.percHP >= 50.0 && p.unit.class.has("Fighter") ? 120 : 0; },
    },
    2164: {
        staticMult: function(p) { return p.captain.class.has("Fighter") ? 1.5 : 0; }
    },
    2165: {
        staticMult: function(p) { return p.captain.class.has("Fighter") ? 1.5 : 0; }
    },
    2182: {
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    2183: {
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    2184: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    2185: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    2186: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2187: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2192: {
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 75 : 0; },
    },
    2193: {
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 75 : 0; },
    },
    2266: {
        staticMult: function(p) { return 2; }
    },
    2267: {
        staticMult: function(p) { return 2; }
    },
    2268: {
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 50 : 0; },
    },
    2269: {
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 50 : 0; },
    },
    2272: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2273: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2280: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    2281: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    2284: {
        atkStatic: function(p) { return 50; },
    },
    2285: {
        atkStatic: function(p) { return 50; },
    },
    2287: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    2288: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2289: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2290: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2305: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    2306: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    2322: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
    },
    2323: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
    },
    2333: {
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    2334: {
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    2345: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2346: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2347: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2374: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2375: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2393: {
        atkStatic: function(p) { return p.slot <= 1 ? 80 : 0; },
    },
    2394: {
        atkStatic: function(p) { return p.slot <= 1 ? 80 : 0; },
    },
    2400: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2401: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2402: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2403: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2404: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2405: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    2406: {
        atkStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
    },
    2407: {
        atkStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
    },
    2408: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
    },
    2409: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    2410: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    2413: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    2414: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    2421: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
    },
    2422: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
    },
    2425: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    2426: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    2462: {
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; },
    },
    2463: {
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; },
    },
    2472: {
        hp: function(p) { return .7; },
        rcv: function(p) { return 1.2; },
    },
    2473: {
        hp: function(p) { return .7; },
        rcv: function(p) { return 1.2; },
    },
    2478: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Slasher") ? p.slot == p.sourceSlot ? 150 : 0 : 0 : 0; },
    },
    2479: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Slasher") ? p.slot == p.sourceSlot ? 150 : 0 : 0 : 0; },
    },
    2484: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2485: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2486: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2487: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 50 : 0; },
    },
    2488: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 40 : 0; },
    },
    2489: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 40 : 0; },
    },
    2494: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    2503: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    2504: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 50 : 0; },
    },
    2528: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2529: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2562: {
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    2563: {
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    2568: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    2569: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    2586: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    2587: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    2606: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 40 : 0; },
    },
    2607: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 40 : 0; },
    },
    2608: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2609: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2610: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2619: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2620: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2621: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2622: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2623: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2624: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2625: {
        atkStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
    },
    2626: {
        atkStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
    },
    2627: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2628: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2629: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
    },
    2630: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT" ? 30 : 0; },
    },
    2646: {
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 25 : 0; },
    },
    2647: {
        atkStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Slasher")) ? 25 : 0; },
    },
    2652: {
        atkStatic: function(p) { return 30; },
    },
    2653: {
        atkStatic: function(p) { return 30; },
    },
    2654: {
        rcvStatic: function(p) { return 30; },
    },
    2655: {
        rcvStatic: function(p) { return 30; },
    },
    2660: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
    },
    2661: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 40 : 0; },
    },
    2673: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    2674: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    2682: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    2683: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    2684: {
        hpStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    2695: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    2696: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    2703: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2704: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    2708: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    2709: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    2720: {
        atkStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
    },
    2721: {
        atkStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
    },
    2728: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    2728: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    2735: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
    },
    2736: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
    },
    2742: {
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 30 : 0; },
    },
    2743: {
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 30 : 0; },
    },
    2744: {
        hpStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 30 : 0; },
    },
    2745: {
        hpStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? 30 : 0; },
    },
    2746: {
        atkStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    2747: {
        atkStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    2757: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    2758: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    2766: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
    },
    2767: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 25 : 0; },
    },
    2777: {
        atkStatic: function(p) { return 50; },
    },
    2778: {
        atkStatic: function(p) { return 50; },
    },
    2779: {
        atkStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
    },
    2780: {
        atkStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
    },
    2788: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    2789: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    5003: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    2799: {
        atkStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
    },
    2811: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
    },
    2812: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 25 : 0; },
    },
    2813: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
    },
    2828: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 150 : 0; },
    },
    2829: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 150 : 0; },
    },
    2838: {
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 75 : 0; },
    },
    2839: {
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 75 : 0; },
    },
    2840: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
    },
    2841: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "INT" ? 30 : 0; },
    },
    2853: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 75 : 0; },
    },
    2854: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter")) ? 50 : 0; },
    },
    2855: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2856: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2858: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2881: {
        atkStatic: function(p) { return (p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Driven")) ? 50 : 0; },
    },
    2892: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
    },
    2887: {
        atkStatic: function(p) { return (p.colorCount.STR>=1 || p.colorCount.DEX>=1 || p.colorCount.QCK>=1) ? p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0 : 0; },
        hpStatic: function(p) { return (p.colorCount.STR>=1 || p.colorCount.DEX>=1 || p.colorCount.QCK>=1) ? p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0 : 0; },
        rcvStatic: function(p) { return (p.colorCount.STR>=1 || p.colorCount.DEX>=1 || p.colorCount.QCK>=1) ? p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0 : 0; },
    },
    2898: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2899: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2900: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    2901: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    2902: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2903: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    2920: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 50 : 0; },
    },
    2931: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    2932: {
        hpStatic: function(p) { return p.unit.type == "INT" ? 100 : 0; },
    },
    2934: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    2935: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    2936: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    2937: {
        atkStatic: function(p) { return 50; },
    },
    2938: {
        atkStatic: function(p) { return 50; },
    },
    2943: {
        atkStatic: function(p) { return 50; },
    },
    2944: {
        atkStatic: function(p) { return 50; },
    },
    2945: {
        rcvStatic: function(p) { return 50; },
    },
    2946: {
        rcvStatic: function(p) { return 50; },
    },
    2949: {
        atkStatic: function(p) { return 50; },
    },
    2950: {
        atkStatic: function(p) { return 50; },
    },
    2951: {
        atkStatic: function(p) { return 50; },
    },
    2952: {
        atkStatic: function(p) { return 50; },
    },
    2956: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 40 : 0; },
    },
    2985: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    2986: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    2987: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    2988: {
        atkStatic: function(p) { return 50; },
    },
    2998: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 40 : 0; },
    },
    3010: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
    },
    3011: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 30 : 0; },
    },
    3012: {
        hpStatic: function(p) { return p.unit.type == "QCK" ? 100 : 0; },
    },
    3013: {
        hpStatic: function(p) { return p.unit.type == "QCK" ? 100 : 0; },
    },
    3014: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3015: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3016: {
        hpStatic: function(p) { return 50; },
    },
    3017: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    3024: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3025: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3028: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3029: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3030: {
        atkStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3031: {
        atkStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3032: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    3033: {
        atkStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 50 : 0; },
    },
    3034: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Shooter")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Shooter")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Shooter")) ? 50 : 0; },
    },
    3035: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Shooter")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Shooter")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Shooter")) ? 50 : 0; },
    },
    3039: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3040: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3041: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3042: {
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3045: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3047: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    3049: {
        atkStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) ? 30 : 0; },
    },
    3050: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3051: {
        atkStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3052: {
        atkStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3056: {
        atkStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3057: {
        atkStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    3062: {
        atkStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? 30 : 0; },
    },
    3063: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    3068: {
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 50 : 0; },
    },
    3069: {
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 50 : 0; },
    },
    3078: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
    },
    3080: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
    },
    3081: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY" ? 30 : 0; },
    },
    3082: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; },
    },
    3083: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    3085: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    3086: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 30 : 0; },
    },
    3095: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    3096: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
    },
    3097: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    3111: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3103: {
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3104: {
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3107: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3108: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 40 : 0; },
    },
    3110: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3120: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3126: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    3127: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    3127: {
        atkStatic: function(p) { return 75; },
    },
    3128: {
        atkStatic: function(p) { return 75; },
    },
    3130: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 30 : 0; },
    },
    3140: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3141: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3142: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    3143: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3144: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 30 : 0; },
    },
    3145: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    3146: {
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 50 : 0; },
    },
    3149: {
        hpStatic: function(p) { return p.unit.class.has("Fighter") ? 75 : 0; },
    },
    3151: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 75 : 0; },
    },
    3152: {
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    3153: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3167: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3168: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3169: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3170: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3171: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3172: {
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3173: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3178: {
        atkStatic: function(p) { return p.percHP <= 50.0 && p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3179: {
        atkStatic: function(p) { return p.percHP <= 50.0 && p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3184: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    3185: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    3190: {
        rcvStatic: function(p) { return 30; },
    },
    3191: {
        atkStatic: function(p) { return 30; },
    },
    3192: {
        hpStatic: function(p) { return 30; },
    },
    3198: {
        atkStatic: function(p) { return 50; },
    },
    3199: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3205: {
        hpStatic: function(p) { return p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    3206: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    3207: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    3212: {
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 75 : 0; },
    },
    3213: {
        atkStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
    },
    3214: {
        atkStatic: function(p) { return 50; },
    },
    3216: {
        hpStatic: function(p) { return 50; },
    },
    3218: {
        rcvStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3219: {
        rcvStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3220: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3221: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3222: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    3223: {
        atkStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    3228: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3229: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3233: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3235: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3236: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3238: {
        rcvStatic: function(p) { return 30; },
    },
    3243: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    3246: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    3248: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    3249: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    3258: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    3259: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    3264: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3272: {
        atkStatic: function(p) { return 30; },
    },
    3274: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3283: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3284: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    3285: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3286: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3287: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Shooter") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Shooter") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Shooter") ? 30 : 0; },
    },
    3292: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") ? 30 : 0; },
    },
    3294: {
        atkStatic: function(p) { return 30; },
    },
    3295: {
        rcvStatic: function(p) { return 30; },
    },
    3296: {
        hpStatic: function(p) { return 30; },
    },
    3301: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 30 : 0; },
    },
    3301: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 30 : 0; },
    },
    3308: {
        atkStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3309: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
    },
    3310: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
    },
    3328: {
        atkStatic: function(p) { return p.unit.class.has("Striker") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") ? 30 : 0; },
    },
    3332: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3340: {
        atkStatic: function(p) { return p.unit.type == "STR" ? 50 : 0; },
    },
    3341: {
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    3342: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3344: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 50 : 0; },
    },
    3345: {
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 50 : 0; },
    },
    3347: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3351: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 30 : 0; },
    },
    3353: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3356: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
    },
    3357: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 75 : 0; },
    },
    3358: {
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    3359: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    3360: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 50 : 0; },
    },
    3362: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    3374: {
        atkStatic: function(p) { return 30; },
    },
    3380: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    3381: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    3382: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 50 : 0; },
    },
    3383: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    3385: {
        atkStatic: function(p) { return 30; },
        hpStatic: function(p) { return 30; },
        rcvStatic: function(p) { return 30; },
    },
    3386: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 30 : 0; },
    },
    3387: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    3388: {
        hpStatic: function(p) { return 50; },
    },
    3392: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 75 : 0; },
    },
    3394: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3395: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 : 0; },
    },
    3396: {
        atkStatic: function(p) { return 50; },
    },
    3397: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3400: {
        rcvStatic: function(p) { return 60; },
    },
    3401: {
        atkStatic: function(p) { return 60; },
        hpStatic: function(p) { return 60; },
        rcvStatic: function(p) { return 60; },
    },
    3403: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
    },
    3405: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
        hpStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? [0, 75, 75][p.team[p.sourceSlot].unit.limitStats.sailors[Math.min(p.limit[p.sourceSlot],p.team[p.sourceSlot].unit.limitStats.sailors.length-1)]] : 0; },
    },
    3406: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? 50 : 0; },
    },
    3407: {
        atkStatic: function(p) { return p.unit.class.has("Cerebral") || p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3409: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    3412: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3413: {
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3414: {
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3415: {
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    3418: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Fighter") ? 50 : 0; },
    },
    3419: {
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    3420: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    4986: {
        staticMult: function(p) { return 3; }
    },
    4987: {
        staticMult: function(p) { return 3; }
    },
    4988: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    4989: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    4994: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    4995: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
};


var calcGhostStartIDSailors = { "start": 5000 };

var ghostsSailors = {
    0: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    1: {
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    2: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    3: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    6: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    7: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    10: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    11: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    12: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    13: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    14: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    15: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    16: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    17: {
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    18: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    19: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    20: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    21: {
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    22: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    23: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    28: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    29: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    30: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    31: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    32: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    33: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    34: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    35: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    37: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    38: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    40: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    41: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    42: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    43: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
    },
    44: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    45: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    46: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    47: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 25 : 0; },
    },
    48: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    49: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    50: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
    },
    51: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
    },
    52: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    53: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    54: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
    },
    55: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
    },
    56: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    57: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    66: {
        atkStatic: function(p) { return 50; },
    },
    67: {
        hpStatic: function(p) { return 50; },
    },
    68: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    69: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    70: {
        atkStatic: function(p) { return 50; },
    },
    71: {
        hpStatic: function(p) { return 50; },
    },
    72: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    73: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    80: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    81: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
    },
    82: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    83: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    84: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    85: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
    },
    86: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    87: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    88: {
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    89: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    90: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    91: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    92: {
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    93: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    94: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    95: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    96: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    97: {
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    98: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    99: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    100: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    101: {
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    102: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    103: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    106: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    107: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    110: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    111: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    112: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    113: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    114: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    115: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    116: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    117: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    118: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    119: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    120: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    121: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    122: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    123: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    124: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    125: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    126: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    127: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    152: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    153: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    154: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    155: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    156: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    157: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    158: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    159: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    162: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    163: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    166: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    167: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    168: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
    },
    169: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
    },
    170: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
    },
    171: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
    },
    172: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    173: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    174: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    175: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    176: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    177: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    178: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    179: {
        atkStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    180: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    181: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    182: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    183: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    184: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    185: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    186: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    187: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    221: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    222: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    223: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    224: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    225: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    226: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    227: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    228: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    237: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    238: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    239: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    240: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    241: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    242: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    243: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    244: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    245: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    246: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    247: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    248: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    249: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    250: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    251: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    260: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    261: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    262: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    263: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    264: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    265: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    266: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    267: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    276: {
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    277: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    278: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    279: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    280: {
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    281: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    282: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    283: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    284: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    285: {
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    286: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    287: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    288: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    289: {
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    290: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    291: {
        atkStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 75 : 0; },
    },
    292: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    293: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    294: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
    },
    295: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
    },
    296: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    297: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 50 : 0; },
    },
    298: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
    },
    299: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 100 : 0; },
    },
    304: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 75 : 0; },
    },
    305: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    306: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 125 : 0; },
    },
    307: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 75 : 0; },
    },
    308: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    309: {
        atkStatic: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 125 : 0; },
    },
    310: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    311: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    312: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
    },
    313: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
    },
    314: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    315: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 50 : 0; },
    },
    316: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
    },
    317: {
        atkStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 100 : 0; },
    },
    318: {
        rcvStatic: function(p) { return 40; },
    },
    319: {
        rcvStatic: function(p) { return 40; },
    },
    320: {
        rcvStatic: function(p) { return 40; },
    },
    321: {
        rcvStatic: function(p) { return 40; },
    },
    325: {
        atkStatic: function(p) { return 50; },
    },
    326: {
        atkStatic: function(p) { return 50; },
    },
    327: {
        atkStatic: function(p) { return 100; },
    },
    328: {
        atkStatic: function(p) { return 100; },
    },
    329: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    330: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    331: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    332: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    333: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    334: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    335: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    336: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
}

Object.keys(ghostsSailors).forEach(function (key) {
    window.sailors[calcGhostStartIDSailors["start"] + parseInt(key)] = ghostsSailors[key];
});