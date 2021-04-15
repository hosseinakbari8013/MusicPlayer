(function($) {

    'use strict';

    var smoothScroll = function() {
        var $root = $('html, body');

        $('a.smoothscroll[href^="#"]').click(function () {
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);

            return false;
        });

    };
    smoothScroll();



})(jQuery);