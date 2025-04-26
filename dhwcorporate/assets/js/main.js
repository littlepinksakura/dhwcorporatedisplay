"use strict";

{
  // navbar
  $(function () {
    // header__btn & menu
    $(".header__btn").on("click", function () {
      $(".nav").toggleClass("active");
    });

    $(".nav__btn, .nav__item a").on("click", function () {
      $(".nav").removeClass("active");
    });
  }); // jQuery end

  // slider index page

  $(document).ready(function () {
    $(".sliderBackground").slick({
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  });

  // slider topic page
  $(".slider").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769, //769px以下のブラウザサイズ
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //scrollTop
  $(".topBtn").on("click", function () {
    const position = 0;
    const speed = 600;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      speed
    );
  });

  //fadein content
  $(window).on("load scroll", function () {
    const fadeIn = $(".fadeIn");

    fadeIn.each(function () {
      const boxOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass("animated");
      }
    });
  });
}
