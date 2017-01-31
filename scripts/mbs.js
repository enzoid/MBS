$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 180) {
        $('.controls').addClass('fixed');
        $("back-to-top").css('display:block;');
    } else {
        $('.controls').removeClass('fixed');
        $("back-to-top").css('display:none;');
    }
});
