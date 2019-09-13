$(function () {

  $('.hbg').click(function() {
    $('.menu').toggle();
    $(this).toggleClass('active');
  });

  // Carousel for timeline
  if ($(".timeline-slider").length > 0) {
    $(".timeline-slider").slick({
      appendArrows: '.timeline-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 2,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: false
    });
  }

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
    $('body > header').hide().addClass('sticky').fadeIn();
    // pause hero animation
  };

  scope.heroIn = function () {
    $('body > header').fadeOut(function() {
      $(this).removeClass('sticky').show();
    });
    // play hero animation
  };

  scope.mapFaces = function () {
    var $lms = $('.location-member');
    var currRandom;
    function randomFace() {
      var nextRandom = Math.floor(Math.random() * $lms.length);
      if (nextRandom != currRandom) {
        currRandom = nextRandom;
        var life = Math.floor(Math.random() * (4000 - 2000 + 1) + 2000);
        $('.location.active').removeClass('active');
        $lms.eq(nextRandom).parent().addClass('active');
        $lms.eq(nextRandom).fadeIn('fast').delay(life).fadeOut('fast', function () {
          randomFace();
        });
      } else {
        randomFace();
      }
    }
    randomFace();
  }
});