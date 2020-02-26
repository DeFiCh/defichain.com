$(function () {

  // Hamburger menu
  $('.hbg').click(function() {
    $('body').toggleClass('menu-open');
  });

  // Language switcher
  $('.lang-switcher > a').click(function (e) {
    e.preventDefault();
    $('.lang-menu').toggle();
    $('.lang-switcher').toggleClass('active');
  });

  // Closer look carousel
  if ($(".closer-look").length) {
    var closerLookCarousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true,
        invert: true
      },
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
  }

  $.localScroll({
    duration: 500,
    offset: {
      top: -144
    }
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
    // pause hero animation
  };

  scope.heroIn = function () {
    // play hero animation
  };
});