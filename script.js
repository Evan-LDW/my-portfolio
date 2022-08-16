$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
            $('.span1').addClass("span2")
        } else {
            $('.navbar').removeClass("sticky")
            $('.span1').removeClass("span2")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")

        } else {
            $('.scroll-up-btn').removeClass("show")
        }

    })


    // navbar home style

    // $(".menu").hover(function () {

    //     if (($(".menu li").index(this)) != 0) {

    //         $('.menu li:eq(0) a').removeClass("home-focus")

    //     }
    // });



    // slide-up script


    $('.scroll-up-btn').click(function () {

        $('html, body').animate({ scrollTop: 0 })


    });




    // toggle menu/nabvar script

    $(".menu-btn").click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })





    let flag = true;




    $(".navbar .menu li").click(function () {

        flag = false;


        var current = $("body .w").eq($(this).index()).offset().top;

        $(this).addClass('current').siblings().removeClass('current');


        $("html, body").stop().animate({
            scrollTop: current
        }, function () {
            setTimeout(() => {
                flag = true
            }, 800);
        })
    })







    $(window).scroll(function () {

        if ($(document).scrollTop() > 0) {
            $(".navbar .max-width .menu li a.home-focus").removeClass("home-focus");
        }


        if (flag) {
            console.log(flag);

            $("body .w").each(function (i, ele) {

                if ($(document).scrollTop() == $(document).height() - $(window).height()) {
                    $(".navbar .max-width .menu li").eq(5).addClass("current").siblings().removeClass();
                }

                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".navbar .max-width .menu li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }

    })

























    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Full-stack Developer", "UI Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })



    var typed = new Typed(".typing-2", {
        strings: ["Full-stack Developer", "UI Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })







    // owl carousel script


    $('.owl-carousel').owlCarousel({

        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                item: 1,
                nav: false
            },
            1000: {
                item: 2,
                nav: false
            },
            1400: {
                item: 3,
                nav: false
            }

        }

    });

});