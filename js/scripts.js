(function ($) {

    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

    function toggleNav() {
        $('#site-wrapper').toggleClass('show-nav');
    }

})(jQuery);

