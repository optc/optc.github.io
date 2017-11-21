(function() {

/**************/

// used to stop the propagation of the click event at the end of the drag operation
// if the propagation isn't halted, the default behavior (eg the picker opening up) would occur
var stopPropagation = false;

var coordinates = [ 0, 0 ];
var startObject = null;
var startTarget = null;

var ghostContainer = $('<div class="ghostContainer"></div>');
var onEmptyObject = false;
var dropped = false;

/* * * * * Functions * * * * */

var moveElement = function(target, byX, byY) {
    var x = coordinates[0] + byX, y = coordinates[1] + byY;
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    coordinates = [ x, y ];
};

/* * * * * Event callbacks (draggables) * * * * */

var onStartMove = function(removable) {
    return function(e) {
        startTarget = e.target.getAttribute('drop-target');
        startObject = $(e.target).closest('[dropzone="' + startTarget + '"]');
        if (removable) $('#removeZone').show();
        e.target.style.zIndex = 4;
        startObject.addClass('ghoster ghost-floating');
        $(e.target.parentNode).addClass('dragging');
        dropped = false;
    };
};

var onMove = function(e) {
    if (startObject !== null)
        moveElement(e.target,e.dx,e.dy);
};

var onEndMove = function(stopProp, removable) {
    return function(e) {
		setTimeout(function() {
			e.target.style.zIndex = 3;
			e.target.style.webkitTransform = e.target.style.transform = '';
			if (removable) $('#removeZone').hide();
			if (stopProp && stopProp(dropped)) stopPropagation = true;
			else stopPropagation = false;
			coordinates = [ 0, 0 ];
			startObject.removeClass('ghoster');
			startObject = null;
			$(e.target.parentNode).removeClass('dragging');
		}, 100);
    };
};

var onClick = function(e) {
    if (!stopPropagation) return true;
    e.stopPropagation();
    e.preventDefault();
    stopPropagation = false;
    return false;
};

/* * * * * Event callbacks (dropzones) * * * * */

var onDragEnter = function(e)  {
    var dropTarget = e.target.getAttribute('drop-target');
    var isRemoveZone = (e.target.id == 'removeZone');
    if (startObject === null || (!isRemoveZone && dropTarget != startTarget))
        return;
    if (isRemoveZone)
        onRemoveZoneEnter(e.relatedTarget);
    else {
        var endObject = $(e.target);
        onEmptyObject = endObject.hasClass('empty');
        if (onEmptyObject) endObject.removeClass('empty');
        if (startObject.index() == endObject.index()) return;
        var replacingContainer = startObject.find('[draggable="' + startTarget + '"]');
        var replacedContainer = endObject.find('[draggable="' + startTarget + '"]');
        ghostContainer.html(replacedContainer.html());
        if (replacedContainer.hasClass('gray')) ghostContainer.addClass('gray');
        replacingContainer.after(ghostContainer);
        replacedContainer.parent().addClass('ghosted');
        startObject.removeClass('ghost-floating');
    }
};

var onDragLeave = function(e) {
    if (startObject === null) return;
    if (e.target.id == 'removeZone')
        onRemoveZoneLeave(e.relatedTarget);
    else {
        ghostContainer.remove();
        ghostContainer.removeClass('gray');
        startObject.addClass('ghost-floating');
        $(e.target).find('[draggable="' + startTarget + '"]').parent().removeClass('ghosted');
        if (onEmptyObject) $(e.target).addClass('empty');
    }
};

var onDrop = function(scope) {
    return function(e) {
        if (startObject === null) return;
        if (e.target.id == 'removeZone')
            onRemoveZoneDrop(scope,e.relatedTarget);
        else {
            var endObject = $(e.target);
            if (startObject.index() == endObject.index()) return;
            // reset
            endObject.find('[draggable="' + startTarget + '"]').parent().removeClass('ghosted');
            ghostContainer.remove();
            // switch
            var i = startObject.index(), j = endObject.index(), temp;
            if (scope.onDrop) scope.onDrop(i, j);
            scope.$apply();
        }
        $(e.target.parentNode).removeClass('dragging');
        dropped = true;
    };
};

/* * * * * Event pseudo-callbacks (remove slot) * * * * */

var onRemoveZoneEnter = function(target) {
    $('#removeZone').css('backgroundColor','rgba(255,0,0,0.1)');
    target.classList.add('gray');
};

var onRemoveZoneLeave = function(target) {
    $('#removeZone').css('backgroundColor','white');
    target.classList.remove('gray');
};

var onRemoveZoneDrop = function(scope,target) {
    onRemoveZoneLeave(target);
    if (scope.onRemove)
        scope.onRemove(startObject.index());
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
            var removable = attrs.hasOwnProperty('removable');
            element.attr('drop-target', attrs.draggable);
            interact(element[0]).draggable({
                manualStart: true,
                onstart: onStartMove(removable),
                onmove: onMove,
                onend: onEndMove(scope.stopPropagation, removable)
            })
            .on('down',function(e) {
                isDown = false;
                if (e.which > 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
                if ($(e.target).parent().hasClass('slide') || (scope.isDraggable && !scope.isDraggable(e))) return;
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
             element.click(onClick);
        }
    };
};

directives.dropzone = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.attr('drop-target', attrs.dropzone);
            interact(element[0]).dropzone({
                overlap: 0.5,
                ondragenter: onDragEnter,
                ondragleave: onDragLeave,
                ondrop: onDrop(scope)
            });
        }
    };
};

for (var key in directives)
    app.directive(key,directives[key]);

})();
