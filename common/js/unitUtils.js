(function() {

var UnitUtils = { };

/* * * * * Public methods * * * * */

UnitUtils.extendDouble = function(state, baseid, type) {
    var types = [ "character1", "character2" ];
    var newId = state["start"]+state["increment"];
    if(type == "dual"){
        if (Array.isArray(window.units[baseid - 1][1])){
            if(window.units[baseid - 1][1][0] == window.units[baseid - 1][1][1]){
                types.push("combined");
            }
            else types.push("combined", "combined");
        }
    }
    //if (type == "vs") console.log(baseid, types, window.units[baseid - 1][1], Array.isArray(window.units[baseid - 1][1]));
    for(var i in types) {
        newId = state["start"]+state["increment"];
        window.details[newId] = Object.assign({},window.details[baseid]);
        if (type == "dual"){
            window.details[newId]["captain"] = window.details[baseid]["captain"][types[i]];
            // dual characters with two specials
            if (window.details[newId].special.character1) {
                // either "character1" or "character2" only
                window.details[newId].special = window.details[baseid].special[types[i % 2]];
            }
            else if (window.details[newId].special.combined){
                window.details[newId].special = (types[i] == "combined") ? window.details[newId].special.combined : window.details[newId].special.base;
            }
            if (window.details[baseid].sailor) window.details[newId]["sailor"] = { "base": window.details[baseid]["sailor"][types[i]], "level1": window.details[baseid]["sailor"]["level1"], };
        }
        if (type == "vs"){
            window.details[newId]["captain"] = window.details[baseid]["captain"][types[i]];
            window.details[newId]["special"] = window.details[baseid]["special"][types[i]];
            window.details[newId]["VSSpecial"] = window.details[baseid]["VSSpecial"][types[i]];
            if (window.details[baseid].sailor) window.details[newId]["sailor"] = { "base": window.details[baseid]["sailor"][types[i]], "level1": window.details[baseid]["sailor"]["level1"], };
        }
        state["increment"] += 1;
    }
};

/******************
 * Initialization *
 ******************/

window.UnitUtils = UnitUtils;

})();
