(function() {

/**************/

// used to stop the propagation of the click event at the end of the drag operation
// if the propagation isn't halted, the default behavior (eg the picker opening up) would occur
var stopPropagation = false;

var coordinates = [ 0, 0 ];
var startingSlot = null;

var ghostContainer = $('<div class="ghostContainer"></div>');
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
    $('#removeSlot')[0].style.display = null;
    e.target.style.zIndex = 4;
    $(e.target.parentNode).addClass('dragging');
};

var onUnitMove = function(e) {
    if (startingSlot !== null)
        moveElement(e.target,e.dx,e.dy);
};

var onUnitEndMove = function(e) {
    e.target.style.zIndex = 3;
    e.target.style.webkitTransform = e.target.style.transform = '';
    $('#removeSlot').css('display','none');
    stopPropagation = true;
    coordinates = [ 0, 0 ];
    startingSlot = null;
    $(e.target.parentNode).removeClass('dragging');
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
        var replacedContainer = endingSlot.find('.unitContainer');
        ghostContainer.html(replacedContainer.html());
        if (replacedContainer.hasClass('gray')) ghostContainer.addClass('gray');
        startingSlot.append(ghostContainer);
        replacedContainer.css('display','none');
    }
};

var onUnitDragLeave = function(e) {
    if (startingSlot === null) return;
    if (e.target.id == 'removeSlot')
        onRemoveZoneLeave(e.relatedTarget);
    else {
        ghostContainer.remove();
        ghostContainer.removeClass('gray');
        $(e.target).find('.unitContainer')[0].style.display = null;
        if (onEmptySlot) $(e.target).addClass('empty');
    }
};

var onUnitDrop = function(scope) {
    return function(e) {
        if (startingSlot === null) return;
        if (e.target.id == 'removeSlot')
            onRemoveZoneDrop(scope,e.relatedTarget);
        else {
            var endingSlot = $(e.target);
            if (startingSlot.index() == endingSlot.index()) return;
            // reset
            var replacedPortrait = endingSlot.find('.unitContainer');
            replacedPortrait[0].style.display = null;
            ghostContainer.remove();
            // switch units
            var i = startingSlot.index(), j = endingSlot.index(), temp;
            temp = scope.data.team[i];
            scope.data.team[i] = scope.data.team[j];
            scope.data.team[j] = temp;
            temp = scope.tdata.team[i];
            scope.tdata.team[i] = scope.tdata.team[j];
            scope.tdata.team[j] = temp;
            scope.$apply();
        }
        $(e.target.parentNode).removeClass('dragging');
    };
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

var onRemoveZoneDrop = function(scope,target) {
    onRemoveZoneLeave(target);
    scope.resetSlot(startingSlot.index());
    scope.$apply();
};

/* * * * * Directive definitions * * * * */

var app = angular.module('optc');
var directives = { };

directives.draggable = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var isDown = false;
            interact(element[0]).draggable({
                manualStart: true,
                onstart: onUnitStartMove,
                onmove: onUnitMove,
                onend: onUnitEndMove
            })
            .on('down',function(e) {
                isDown = false;
                if (e.which > 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
                if ($(e.target).parent().hasClass('slide') || Utils.isClickOnOrb(e,e.target.parentNode)) return;
                if ($(e.target).parent().hasClass('slide')) return;
                isDown = true;
            })
            .on('move',function(e) {
                if (!isDown || e.interaction.interacting()) return;
                e.interaction.start({ name: 'drag' },e.interactable,e.currentTarget);
            })
            .on('up',function(e) {
                isDown = false;
                if (e.interaction.interacting()) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            });
            element.click(onUnitClick);
        }
    };
};

directives.dropzone = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            interact(element[0]).dropzone({
                overlap: 0.5,
                ondragenter: onUnitDragEnter,
                ondragleave: onUnitDragLeave,
                ondrop: onUnitDrop(scope)
            });
        }
    };
};

for (var key in directives)
    app.directive(key,directives[key]);

})();
