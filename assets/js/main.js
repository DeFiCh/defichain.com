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
  function storeCollapsibleHeights() {
    $('.collapsible-content').css({
      'height': 'auto'
    }).each(function (i) {
      $(this).attr('data-h', $(this).height());
    });
    $('.collapsible-head').not('.active').next('.collapsible-content').css('height', 0).removeClass('active');
  }

  storeCollapsibleHeights();

  $(window).on("debouncedresize", function (event) {
    storeCollapsibleHeights();
  });

  // Handle collapsible toggles
  $('.collapsible-head').click(function() {
    var $ch = $(this);
    var $cc = $ch.next();
    if ($ch.hasClass('active')) {
      // $cc.animate({
      //   height: 0
      // });
      // $ch.removeClass('active');
    } else {
      $cc.animate({
        height: $cc.attr('data-h') + "px"
      });
      $ch.addClass('active');
      $ch.siblings('.collapsible-head').removeClass('active');
      $cc.siblings('.collapsible-content').animate({
        height: 0
      });
    }
  });

  // Handle wizard next buttons
  function wizardNextStep() {
    var $ccc = $('.collapsible-head.active').next();
    var $crf = $ccc.find('[required]');
    var $nch = $ccc.next();
    var $ncc = $nch.next();

    if (!$crf.length || $crf.val()) {
      $ncc.animate({
        height: $ncc.attr('data-h') + "px"
      });
      $nch.addClass('active');
      $nch.siblings('.collapsible-head').removeClass('active');
      $ncc.siblings('.collapsible-content').animate({
        height: 0
      });
    }
  }

  $('.claim-wizard-next').click(function (e) {
    wizardNextStep();
    e.preventDefault();
  });

  // Enable disabled next buttons
  $('[required]').keyup(function() {
    var $ccc = $(this).parents('.collapsible-content');
    var $cerf = $ccc.find('[required]').filter(function () {
      return !this.value;
    });
    var $cbtn = $ccc.find('.btn');
    if ($cerf.length) {
      $cbtn.attr('disabled', 'disabled');
    } else {
      $cbtn.removeAttr('disabled');
    }
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