(function() {

var team = [ null, null, null, null, null, null ];
var stopPropagation = false;
var coordinates = [ 0, 0 ];
var dropped = false;

var startingSlot = null;

var ghostPortrait = $('<div class="ghostPortrait"></div>');
var onEmptySlot = false;

/* * * * * Functions * * * * */

var moveElement = function(target,byX,byY) {
    var x = coordinates[0] + byX, y = coordinates[1] + byY;
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    coordinates = [ x, y ];
};


/* * * * * Event callbacks (draggables) * * * * */

var onUnitStartMove = function(e) {
    startingSlot = $(e.target).parent();
    e.target.style.zIndex = 5;
};

var onUnitMove = function(e) {
    moveElement(e.target,e.dx,e.dy);
};

var onUnitEndMove = function(e) {
    e.target.style.zIndex = 1;
    e.target.style.webkitTransform = e.target.style.transform = '';
    stopPropagation = true;
    coordinates = [ 0, 0 ];
};

var onUnitClick = function(e) {
    if (!stopPropagation) return;
    e.stopPropagation();
    e.preventDefault();
    stopPropagation = false;
    return false;
};

/* * * * * Event callbacks (dropzones) * * * * */

var onUnitDragEnter = function(e)  {
    var endingSlot = $(e.target);
    onEmptySlot = endingSlot.hasClass('empty');
    if (onEmptySlot) endingSlot.removeClass('empty');
    if (startingSlot.index() == endingSlot.index()) return;
    var replacedPortrait = endingSlot.find('.unitPortrait');
    ghostPortrait[0].style.backgroundImage = replacedPortrait[0].style.backgroundImage;
    startingSlot.append(ghostPortrait);
    replacedPortrait.hide();
};

var onUnitDragLeave = function(e) {
    ghostPortrait.remove();
    $(e.target).find('.unitPortrait').show();
    if (onEmptySlot) $(e.target).addClass('empty');
};

var onUnitDrop = function(e) {
    var endingSlot = $(e.target);
    if (startingSlot.index() == endingSlot.index()) return;
    var replacedPortrait = endingSlot.find('.unitPortrait');
    // switch portraits
    startingSlot.append(replacedPortrait);
    endingSlot.append(e.relatedTarget);
    replacedPortrait.show();
    ghostPortrait.remove();
    if (onEmptySlot) startingSlot.addClass('empty');
    $(document).trigger('unitsSwitched',[ startingSlot.index(), endingSlot.index() ]);
};

/* * * * * UI control * * * * */


$(function() {

    $('.unitPortrait').click(onUnitClick);

    interact('.unitPortrait').draggable({
        onstart: onUnitStartMove,
        onmove: onUnitMove,
        onend: onUnitEndMove
    });

    interact('.unit').dropzone({
        overlap: 0.5,
        ondragenter: onUnitDragEnter,
        ondragleave: onUnitDragLeave,
        ondrop: onUnitDrop
    });

});


})();
