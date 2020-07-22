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
    3333: {
        staticMult: function(p) { return 3; }
    },
    3334: {
        staticMult: function(p) { return 3; }
    },
    3347: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    3348: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    3371: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    3372: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
    },
    5000: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    5001: {
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 30 : 0; },
    },
    5002: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5003: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5008: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    5009: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    5010: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    5011: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Free Spirit") ? 150 : 0; },
    },
    5012: {
        atkStatic: function(p) { return p.unit.type == "PSY" ? 30 : 0; },
    },
    5013: {
        atkStatic: function(p) { return p.unit.type == "DEX" ? 30 : 0; },
    },
    5014: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    5015: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 50 : 0; },
    },
    5016: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5017: {
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5018: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    5019: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    5020: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5021: {
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 75 : 0; },
    },
    5022: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    5023: {
        atkStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        hpStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
        rcvStatic: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 100 : 0; },
    },
    5028: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5029: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5030: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5031: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5032: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5033: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5034: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5035: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Fighter") ? 40 : 0 : 0; },
    },
    5036: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    5037: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    5038: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    5039: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    5040: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    5041: {
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 50 : 0; },
    },
    5042: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    5043: {
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Driven") ? 100 : 0; },
    },
    5044: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    5045: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    5046: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    5047: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    5048: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 50 : 0; },
    },
    5049: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 50 : 0; },
    },
    5050: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    5051: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "INT" ? 50 : 0; },
    },
    5053: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    5054: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    5056: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 50 : 0; },
    },
    5057: {
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("Powerhouse") ? 75 : 0; },
    },
    5058: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    5059: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    5060: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    5061: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    5062: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    5063: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 25 : 0; },
    },
    5064: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    5065: {
        atkStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT" ? 50 : 0; },
    },
    5066: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
    },
    5067: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
    },
    5068: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    5069: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    5070: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 25 : 0; },
    },
    5071: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 25 : 0; },
    },
    5072: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    5073: {
        atkStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 50 : 0; },
    },
    5082: {
        atkStatic: function(p) { return 50; },
    },
    5083: {
        hpStatic: function(p) { return 50; },
    },
    5084: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    5085: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    5086: {
        atkStatic: function(p) { return 50; },
    },
    5087: {
        hpStatic: function(p) { return 50; },
    },
    5088: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    5089: {
        atkStatic: function(p) { return 100; },
        hpStatic: function(p) { return 100; },
        rcvStatic: function(p) { return 100; },
    },
    5092: {
        hpStatic: function(p) { return 150; },
    },
    5095: {
        hpStatic: function(p) { return 150; },
    },
    5096: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    5097: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
    },
    5098: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    5099: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    5100: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter")) ? 30 : 0; },
    },
    5101: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? 30 : 0; },
    },
    5102: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    5103: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") || p.unit.class.has("Slasher")) ? 50 : 0; },
    },
    5104: {
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    5105: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    5106: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    5107: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    5108: {
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    5109: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 50 : 0; },
    },
    5110: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    5111: {
        atkStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Free Spirit")) ? 75 : 0; },
    },
    5112: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    5113: {
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    5114: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5115: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5116: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    5117: {
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 50 : 0; },
    },
    5118: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5119: {
        hpStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5122: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    5123: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    5126: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    5127: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral")) ? 50 : 0; },
    },
    5128: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    5129: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    5130: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    5131: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    5132: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    5133: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 30 : 0; },
    },
    5134: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    5135: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Driven")) ? 50 : 0; },
    },
    5160: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5161: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5162: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5163: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5164: {
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5165: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5166: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5167: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5170: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5171: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5174: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5175: {
        atkStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") || p.unit.class.has("Striker")) ? 75 : 0; },
    },
    5176: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
    },
    5176: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 25 : 0; },
    },
    5176: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
    },
    5176: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? 50 : 0; },
    },
    5180: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    5181: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    5182: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    5183: {
        atkStatic: function(p) { return p.slot <= 1 ? 60 : 0; },
    },
    5228: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    5229: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    5230: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5231: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5232: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    5233: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 25 : 0; },
    },
    5234: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5235: {
        atkStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        hpStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
        rcvStatic: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? 50 : 0; },
    },
    5244: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    5245: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    5246: {
        atkStatic: function(p) { return 25; },
        hpStatic: function(p) { return 25; },
        rcvStatic: function(p) { return 25; },
    },
    5247: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5248: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5249: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    5250: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    5251: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5252: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 75 : 0; },
    },
    5253: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
    5254: {
        atkStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        hpStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
        rcvStatic: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 100 : 0; },
    },
};