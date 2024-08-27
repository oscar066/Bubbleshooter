
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function($){
    var ui = {
        BUBBLE_DIMS : 44,
        init : function(){

        },

        hideDialog : function(){
            $(".dialog").fadeOut(300);
        },

        getMouseCoords : function(e) {
            var coords = {x : e.pageX, y : e.pageY};
            return coords;
        },

        getBubbleCoords : function(bubble){
            var bubbleCoords = bubble.position();
            bubbleCoords.left += ui.BUBBLE_DIMS/2;
            bubbleCoords.top  += ui.BUBBLE_DIMS/2;
            return bubbleCoords;
        },

        getBubbleAngle : function(bubble, e){
            var MouseCoords = ui.getMouseCoords(e);
            var bubbleCoords = ui.getBubbleCoords(bubble);
            var gameCoords = $("#game").position();
            var boardLeft = 120;
            var angle = Math.atan((MouseCoords.x - bubbleCoords.left - boardLeft)/(bubbleCoords.top + gameCoords.top - MouseCoords.y));
            if (MouseCoords.y > bubbleCoords.top + gameCoords.top){
                angle += Math.PI;
            }
            return angle;
        },

        fireBubble : function(bubble, coords, duration){
            bubble.getSprite().animate({
                left : coords.x - ui.BUBBLE_DIMS/2,
                top : coords.y - ui.BUBBLE_DIMS/2
            },{
                duration : duration,
                easing : "linear"
            });
        }
    };
    return ui;
})(jQuery);