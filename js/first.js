/*global console, $*/

$(function () {
    'use strict';
    
/* =============== Search Icon Of The Navbar =============== */
    $('.switch').on('click', function () {
        $(this).hide(500).before('<input class="search" type="text" placeholder="Search">');
        $('.search').show(500, function () {
            $(this).focus();
        });
        
        $('.search').blur(function () {
            $(this).hide(500, function () {
                $(this).remove();
            });
            $('.switch').show(500);
        });
    });

/* =============== Menu Icon Of The Navbar =============== */
    $('.menu i:last-child').click(function () {
        $('ul').slideToggle(500);
    });

/* =============== Link Each Sections With The Navbar =============== */
    $('ul a').click(function () {
        $('html, body').animate({
            scrollTop: $('.' + $(this).data('id')).offset().top
        }, 1000);
    });

/* =============== Set Height For The Header =============== */
    $('.header').height($(window).height());
    
/* =============== Centering The Header Title =============== */
    $('.header .contain').css({
        marginTop: (($('.header').height() - $('.header .contain').height()) / 2.5)
    });
    
/* =============== Resizing The Screen =============== */
    $(window).resize(function () {
        // Set Height For The Header
        $('.header').height($(window).height());
        // Centering The Header Title
        $('.header .contain').css({
            marginTop: (($('.header').height() - $('.header .contain').height()) / 2.5)
        });
        // Centering The Header Dots
        $('.header .dots').css({
            left: (($('.header').width() - $('.header .dots').width()) / 2)
        });
        // Centering The Video Icon
        $('.video i').css({
            marginTop: (($('.video').height() - $('.video i').height()) / 2)
        });
    });
    
/* =============== Slider Of The Header =============== */
    (function autoSlider() {
        $('.contain .appear').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(4000).fadeOut(500, function () {
                    $(this).removeClass('appear').next().addClass('appear').fadeIn(500);
                    autoSlider();
                });
            } else {
                $(this).delay(4000).fadeOut(500, function () {
                    $(this).removeClass('appear');
                    $('.slide').eq(0).addClass('appear').fadeIn(500);
                    autoSlider();
                });
            }
            // Link Each Header With Its Dot
            $('#' + $('.appear').data('id')).css('color', '#FFF')
                .siblings().css('color', 'transparent');
        });
    }());
    
/* =============== Centering The Header Dots =============== */
    $('.header .dots').css({
        left: (($('.header').width() - $('.header .dots').width()) / 2)
    });
    
/* =============== Centering The Video Icon =============== */
    $('.video i').css({
        marginTop: (($('.video').height() - $('.video i').height()) / 2)
    });

/* =============== Slider Of The Tweets =============== */
    $('.tweets .next').click(function () {
        $('.tw-cont .show').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).fadeOut(500, function () {
                    $(this).removeClass('show').next().addClass('show').fadeIn(500);
                });
            } else {
                $(this).fadeOut(500, function () {
                    $(this).removeClass('show');
                    $('.tw').first().addClass('show').fadeIn(500);
                });
            }
        });
    });
    
    $('.tweets .prev').click(function () {
        $('.tw-cont .show').each(function () {
            if (!$(this).is(':first-child')) {
                $(this).fadeOut(500, function () {
                    $(this).removeClass('show').prev().addClass('show').fadeIn(500);
                });
            } else {
                $(this).fadeOut(500, function () {
                    $(this).removeClass('show');
                    $('.tw').last().addClass('show').fadeIn(500);
                });
            }
        });
    });

/* =============== Slider Of The Events =============== */
    $('.events .next').click(function () {
        $('.eves .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(2500).removeClass('active').next().addClass('active');
            } else {
                $(this).delay(2500).removeClass('active');
                $('.e').first().addClass('active');
            }
        });
    });
    
    $('.events .prev').click(function () {
        $('.eves .active').each(function () {
            if (!$(this).is(':first-child')) {
                $(this).removeClass('active').prev().addClass('active');
            } else {
                $(this).removeClass('active');
                $('.e').last().addClass('active');
            }
        });
    });

/* =============== Scroll To Top Button =============== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.categ').offset().top) {
            $('.scroll-top').fadeIn(250);
        } else {
            $('.scroll-top').fadeOut(250);
        }
    });
    
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    
    $('.scroll-top').hover(function () {
        $('.scroll-top span').animate({
            left: '8px',
            opacity: 1
        }, 250);
    }, function () {
        $('.scroll-top span').animate({
            left: '50%',
            opacity: 0
        }, 250);
    });

/* =============== Trigger For Nice Scroll =============== */
    $(function () {
        $("html").niceScroll({
            cursorcolor: '#0BB',
            cursorwidth: '8px',
            cursorborderradius: "3px"
        });
    });

});