$(function () {

  $('.hbg').click(function() {
    $('body').toggleClass('menu-open');
  });


  var closerLookCarousel = new Swiper('.carousel', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      812: {
        spaceBetween: 60
      },
      992: {
        spaceBetween: 90
      }
    }
  });


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