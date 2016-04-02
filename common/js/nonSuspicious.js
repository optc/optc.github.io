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