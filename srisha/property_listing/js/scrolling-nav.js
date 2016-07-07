//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").css("color","#00adee");
        $(".navbar-right-focus").css("color","#00adee");
        $(".nav-after").css("color","#00adee");
        $(".header-position").css({"padding-top":"0px","height":"40"});
         
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").css("color","white");
        $(".navbar-right").css("color","white");
        $(".nav-after").css("color","#fff");
         $(".header-position").css({"padding":"10px","height":"75"});
    }

});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
