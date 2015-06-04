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
    if (Utils.isClickOnOrb(e,e.target)) {
        e.previousSibling();
        e.stopPropagation();
    } else {
        startingSlot = $(e.target).parent();
        $('#removeSlot')[0].style.display = null;
        e.target.style.zIndex = 5;
    }
};

var onUnitMove = function(e) {
    if (startingSlot !== null)
        moveElement(e.target,e.dx,e.dy);
};

var onUnitEndMove = function(e) {
    e.target.style.zIndex = 1;
    e.target.style.webkitTransform = e.target.style.transform = '';
    $('#removeSlot').css('display','none');
    stopPropagation = true;
    coordinates = [ 0, 0 ];
    startingSlot = false;
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
    if (startingSlot === null) return;
    if (e.target.id == 'removeSlot')
        onRemoveZoneEnter(e.relatedTarget);
    else {
        var endingSlot = $(e.target);
        onEmptySlot = endingSlot.hasClass('empty');
        if (onEmptySlot) endingSlot.removeClass('empty');
        if (startingSlot.index() == endingSlot.index()) return;
        var replacedPortrait = endingSlot.find('.unitPortrait');
        ghostPortrait[0].style.backgroundImage = replacedPortrait[0].style.backgroundImage;
        startingSlot.append(ghostPortrait);
        replacedPortrait.css('display','none');
    }
};

var onUnitDragLeave = function(e) {
    if (startingSlot === null) return;
    if (e.target.id == 'removeSlot')
        onRemoveZoneLeave(e.relatedTarget);
    else {
        ghostPortrait.remove();
        $(e.target).find('.unitPortrait')[0].style.display = null;
        if (onEmptySlot) $(e.target).addClass('empty');
    }
};

var onUnitDrop = function(e) {
    if (startingSlot === null) return;
    if (e.target.id == 'removeSlot')
        onRemoveZoneDrop(e.relatedTarget);
    else {
        var endingSlot = $(e.target);
        if (startingSlot.index() == endingSlot.index()) return;
        var replacedPortrait = endingSlot.find('.unitPortrait');
        // switch portraits
        startingSlot.append(replacedPortrait);
        endingSlot.append(e.relatedTarget);
        replacedPortrait[0].style.display = null;
        ghostPortrait.remove();
        if (onEmptySlot) startingSlot.addClass('empty');
        $(document).trigger('unitsSwitched',[ startingSlot.index(), endingSlot.index() ]);
    }
};

/* * * * * Event pseudo-callbacks (remove slot) * * * * */

var onRemoveZoneEnter = function(target) {
    $('#removeSlot').css('backgroundColor','rgba(255,0,0,0.1)');
    target.classList.add('gray');
};

var onRemoveZoneLeave = function(target) {
    $('#removeSlot').css('backgroundColor','white');
    target.classList.remove('gray');
};

var onRemoveZoneDrop = function(target) {
    onRemoveZoneLeave(target);
    $(document).trigger('unitRemoved',$(target).parent().index());
};

/* * * * * UI control * * * * */

$(function() {

    $('#removeSlot').css('display','none');

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
