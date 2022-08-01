//window drag logic
var isDownMove = false;
var currentDragId;
var windowInFocus;
$(document).mouseup(function() {
    isDownMove = false;
    offset = null;
    windowInFocus = currentDragId.parent();
    currentDragId = null;
});
$(document).mousemove(function() {
    if (isDownMove) {
        currentDragId.parent().css({
            left: (event.pageX + offset[0]) + 'px',
            top: (event.pageY + offset[1]) + 'px'
        })
    }
});
$(document).on('mousedown', '.move-top', function() { 
    isDownMove = true;
    offset = [$(this).parent().offset().left - event.pageX,$(this).parent().offset().top - event.pageY];
    currentDragId = $(this);
});
$(document).on('mousedown', '.del_window', function() { 
    windowInFocus.remove();
});
//window creation logic
$(".new_window").click(function(){
    $("body").append(
        `<div class="details">
            <div id="move" class="move-top unselectable">
                <div class="circle" id="one"></div>
                <div class="circle" id="two"></div>
                <div class="circle" id="three"></div>
                <p>details</p>
            </div>
            <div class="ascanvas unselectable">
            </div>
            <div class="table-wrap">
            </div>
        </div>`);
});
