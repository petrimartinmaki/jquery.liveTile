/*! jQuery.liveTile.js
 *
 * Copyright (c) 2013 Petri Martinmaki
 * Available under the MIT license
 */

(function($) {
    $.fn.liveTile = function( options ) {
        var settings = $.extend({
            fullHeight: false,
        }, options);

        return this.each( function() {
            var that = this;

            var minTop = function () {
                if(!settings.fullHeight) {
                    return $(that).height() - $(that).children(":nth-child(2)").outerHeight();
                }
                return 0;
            }
            var maxTop = function () {
                var firstHiddenElem = $(that).children(":nth-child(2)").children(":nth-child(2)");
                return $(that).height() - firstHiddenElem.position().top;
            }

            $(that).css("position", "relative");
            $(that).css("overflow", "hidden");
            $(that).children(":nth-child(1)").css("width", "100%");
            $(that).children(":nth-child(1)").css("height", "100%");
            $(that).children(":nth-child(2)").css("position", "absolute");
            $(that).children(":nth-child(2)").css("width", "100%");
            if(settings.fullHeight) 
                $(that).children(":nth-child(2)").css("height", "100%");
            $(that).children(":nth-child(2)").css("left", 0);
            $(that).children(":nth-child(2)").css("top", maxTop());
            $(that).on({
                'mouseenter': function(){
                    $(that).children(":nth-child(2)").stop().animate({top: minTop()});
                }, 
                'mouseleave': function(){
                    $(that).children(":nth-child(2)").stop().animate({top: maxTop()});
                }
            });
        });
    }
}(jQuery));
