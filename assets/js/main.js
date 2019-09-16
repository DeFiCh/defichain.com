$(function () {

  $('.hbg').click(function() {
    $('body').toggleClass('menu-open');
  });

  // Carousel for closer look
  // if ($(".timeline-slider").length > 0) {
  //   $(".timeline-slider").slick({
  //     appendArrows: '.timeline-nav',
  //     arrows: true,
  //     autoplay: false,
  //     autoplaySpeed: 5000,
  //     centerMode: true,
  //     dots: false,
  //     draggable: false,
  //     infinite: false,
  //     initialSlide: 2,
  //     mobileFirst: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     speed: 500,
  //     variableWidth: true,
  //     waitForAnimate: false
  //   });
  // }

  $('.lang-switcher > a').click(function(e) {
    e.preventDefault();
    $('.lang-menu').toggle();
    $('.lang-switcher').toggleClass('active');
  });

});

document.addEventListener('DOMContentLoaded', function () {
  var scope = {};
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'scroll-visible',
      hidden: 'scroll-hidden'
    },
    addHeight: false,
    centerVertical: false,
    once: false,
  }, document.body, window);

  trigger.callScope = scope;

  scope.heroOut = function () {
    $('body > header').addClass('opaque');
    // pause hero animation
  };

  scope.heroIn = function () {
    $('body > header').removeClass('opaque');
    // play hero animation
  };

});