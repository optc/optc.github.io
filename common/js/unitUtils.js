(function() {

var UnitUtils = { };

/* * * * * Public methods * * * * */

UnitUtils.extendDouble = function(state, baseid, type) {
    var types = [ "character1", "character2" ];
    if(type == "dual"){
        if (Array.isArray(window.units[baseid - 1][1])){
            if(window.units[baseid - 1][1][0] == window.units[baseid - 1][1][1]){
                types.push("combined");
            }
            else types.push("combined", "combined");
        }
    }
    //if (type == "vs") console.log(baseid, types, window.units[baseid - 1][1], Array.isArray(window.units[baseid - 1][1]));
    for(i in types) {
        window.details[state["start"]+state["increment"]] = Object.assign({},window.details[baseid]);
        if (type == "dual"){
            window.details[state["start"]+state["increment"]]["captain"] = window.details[baseid]["captain"][types[i]];
            if (window.details[baseid].sailor) window.details[state["start"]+state["increment"]]["sailor"] = { "base": window.details[baseid]["sailor"][types[i]], "level1": window.details[baseid]["sailor"]["level1"], };
        }
        if (type == "vs"){
            window.details[state["start"]+state["increment"]]["captain"] = window.details[baseid]["captain"][types[i]];
            window.details[state["start"]+state["increment"]]["special"] = window.details[baseid]["special"][types[i]];
            window.details[state["start"]+state["increment"]]["VSSpecial"] = window.details[baseid]["VSSpecial"][types[i]];
            if (window.details[baseid].sailor) window.details[state["start"]+state["increment"]]["sailor"] = { "base": window.details[baseid]["sailor"][types[i]], "level1": window.details[baseid]["sailor"]["level1"], };
        }
        state["increment"] += 1;
    }
};

/******************
 * Initialization *
 ******************/

window.UnitUtils = UnitUtils;

})();
