$(function () {

    const mvs = new Swiper('.main_visual_slide', {

        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, disableOnInteraction: false,
        }
    })
})


$(function () {

    const mis = new Swiper('.main_item_slide', {

        loop: true,

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_item .inner .desc_area .itm').removeClass('on');
                $('.main_item .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        },

        navigation: {
            nextEl: '.main_item .arrows .next',
            prevEl: '.main_item .arrows .prev',
        },


    })
})

$(function () {

    $('.header_bottom .mbtn').on('click', function () {
        $('.header_bottom .gnb').toggleClass('on');
    })

    $('.header_bottom .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header_bottom .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }

    })
    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })


    $('header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })



    $('.to_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })
})