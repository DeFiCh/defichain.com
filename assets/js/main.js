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

  // FAQ toggles
  function storeAnswerHeights() {
    $('.faq-a').css({
      'height': 'auto'
    }).each(function (i) {
      $(this).attr('data-h', $(this).height());
    });

    $('.faq-q').not('.active').next('.faq-a').css('height', 0).removeClass('active');
  }

  storeAnswerHeights();

  $(window).on("debouncedresize", function (event) {
    storeAnswerHeights();
  });

  $('.faq-q').click(function() {
    var $q = $(this);
    var $a = $q.next();
    if ($q.hasClass('active')) {
      $a.animate({
        height: 0
      });
      $q.removeClass('active');
    } else {
      console.log($a.attr('data-h'));
      $a.animate({
        height: $a.attr('data-h') + "px"
      });
      $q.addClass('active');
    }
    // $(this).toggleClass('active').siblings('.faq-q').removeClass('active');
  });

  // Closer look carousel
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

});

$.fn.increment = function (options) {
  var $this = $(this);
  var target = options.target;
  var coef = target / 50;
  var speed = options.speed;
  var value = 0;
  var roll = setInterval(function () {
    value = value + coef;
    $this.html(value.toLocaleString());
    if (value == target) {
      clearInterval(roll);
    }
  }, speed);
};

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


  $("#TableOfContents").stick_in_parent({
    offset_top: 160
  });

  $("#TableOfContents").localScroll({
    duration: 500,
    offset: {
      top: -160
    }
  });

});