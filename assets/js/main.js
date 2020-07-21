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
  if ($(".latest-release-version").length) {
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/DeFiCh/ain/releases/latest',
      success: function (data) {
        $(".latest-release-version").html(data.tag_name);
      }
    });
  }

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

  if ($(".featured-video").length) {

    $('.video-link').each(function () {
      $(this).click(function () {
        player.cueVideoById($(this).data('video'));
      });
    });
  }

  $('body').scrollspy({
    target: '#TableOfContents',
    offset: 154
  });

  $("#TableOfContents").stick_in_parent({
    offset_top: 144
  });

  $.localScroll({
    duration: 500,
    offset: {
      top: -144
    },
    hash: true,
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
