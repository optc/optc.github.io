var pressed = [], konami = "38,38,40,40,37,39,37,39,66,65";

function hideChopper() {
    $("#Chopper").remove();
    $("#hide").remove();
    $("#overlay").remove();
}

$(document).keydown(function(e) {

  pressed.push( e.keyCode );

  if (pressed.toString().indexOf(konami)>=0) {

    $(document).unbind('keydown',arguments.callee);
    
    // Add a Spinning Chopperman to the index Page
    var kon = document.createElement("img");
    //Chopperman
    //kon.src = "http://i.imgur.com/gKxW9cm.png";
    //Fat Usoppp
    kon.src = "http://i.imgur.com/zy5IoXu.png";
    kon.alt = "Chopperman";
    kon.id = "Chopper";
    
    var overlay = document.createElement("div");
    overlay.className = "overlay";
      
    var hide = document.createElement("div");
    hide.className = "hide";
    hide.id = "hide";
    
    document.getElementById("empty").appendChild(overlay);
    document.getElementById("empty").appendChild(hide);
    document.getElementById("hide").appendChild(kon);
    //Add an onCLick Event to disable him again
    var chopper = document.getElementById("Chopper");
    chopper.addEventListener("click", hideChopper, false);
  
  }

});

window.onload = function() {
    
    //Add new Units with Pics here so they show up in the Updates
    //7 Units are about the Max you can add, otherwise you would need to implement another tr for them
    var newUnits = [ 1380, 1378, 1376, 1374, 1372, 1362, 1360 ];

    for (var i = 0, len = newUnits.length; i < len; i++) {
        var unit = document.createElement("a");
        unit.href = "/characters/#/view/"+newUnits[i];
        unit.className = "slot small";
        unit.target = "_blank";
        unit.title = window.units[newUnits[i]-1][0];
        unit.style = "background-image: url("+Utils.getThumbnailUrl(newUnits[i])+");";
        
        document.getElementById("newUnits").appendChild(unit);
    }
}