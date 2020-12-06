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

  // Fetch DFI price
  if ($("#nav-token").length > 0) {
    $("#nav-token a").append('<span class="dfi-price loading"><span class="spinner"><span class="b1"></span><span class="b2"></span><span class="b3"></span></span></span>');
    $.ajax({
      url: "https://poolapi.cakedefi.com/home",
      success: function (data) {
        for (i = 0; i < data.coinPrices.length; i++) {
          if (data.coinPrices[i].CoinId == "DFI") {
            var DFIPrice = data.coinPrices[i].priceUSD.avg;
          }
        }
        $(".dfi-price").removeClass("loading").empty().html('$' + parseFloat(DFIPrice).toFixed(2));
      }
    });
  }

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
      $a.animate({
        height: $a.attr('data-h') + "px"
      });
      $q.addClass('active');
    }
    // $(this).toggleClass('active').siblings('.faq-q').removeClass('active');
  });

  // Fetch latest releases
  // if ($("body.home").length) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://api.github.com/repos/DeFiCh/ain/releases/latest',
  //     success: function (data) {
  //       $(".latest-cli-url").attr('href', data.html_url);
  //       $(".latest-cli-label").html(data.tag_name);
  //     }
  //   });
  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://api.github.com/repos/DeFiCh/defi-app/releases/latest',
  //     success: function (data) {
  //       $(".latest-app-url").attr('href', data.html_url);
  //       $(".latest-app-label").html(data.tag_name);
  //     }
  //   });
  // }

  // Fetch latest software download links
  if ($("body.downloads").length) {
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/DeFiCh/ain/releases/latest',
      success: function (data) {
        var version = data.name.substring(1);
        var mac_link = "https://github.com/DeFiCh/ain/releases/download/v" + version + "/defichain-" + version + "-x86_64-apple-darwin11.tar.gz";
        var win_link = "https://github.com/DeFiCh/ain/releases/download/v" + version + "/defichain-" + version + "-x86_64-w64-mingw32.zip";
        var linux_link = "https://github.com/DeFiCh/ain/releases/download/v" + version + "/defichain-" + version + "-x86_64-pc-linux-gnu.tar.gz";
        $('.download-cli-mac').attr('href', mac_link);
        $('.download-cli-win').attr('href', win_link);
        $('.download-cli-linux').attr('href', linux_link);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/DeFiCh/app/releases/latest',
      success: function (data) {
        var version = data.name.substring(1);
        var mac_link = "https://github.com/DeFiCh/app/releases/download/v"+version+"/defi-app-"+version+".dmg";
        var win_link = "https://github.com/DeFiCh/app/releases/download/v" + version + "/defi-app-Setup-" + version + ".exe";
        var appimg_link = "https://github.com/DeFiCh/app/releases/download/v" + version + "/defi-app-" + version + ".AppImage";
        $('.download-desktop-app-mac').attr('href', mac_link);
        $('.download-desktop-app-win').attr('href', win_link);
        $('.download-desktop-app-appimg').attr('href', appimg_link);
      }
    });
  }


  // Carousel for timeline
  if ($(".roadmap").length > 0) {
    var roadmapCarousel = new Swiper('.roadmap .carousel', {
      slidesPerView: 'auto',
      initialSlide: 16,
      roundLengths: true,
      centeredSlides: true,
      spaceBetween: 32,
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true,
        invert: true
      },
      navigation: {
        nextEl: '.roadmap .swiper-button-next',
        prevEl: '.roadmap .swiper-button-prev',
      },
      breakpoints: {
        812: {
          spaceBetween: 64
        },
        992: {
          spaceBetween: 80
        }
      }
    });
  }

  // Carousel for Airdrop timeline
  if ($(".why-dfi").length > 0) {
    var roadmapCarousel = new Swiper('.why-dfi .carousel', {
      slidesPerView: 'auto',
      initialSlide: 10,
      roundLengths: true,
      centeredSlides: true,
      spaceBetween: 32,
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true,
        invert: true
      },
      navigation: {
        nextEl: '.why-dfi .swiper-button-next',
        prevEl: '.why-dfi .swiper-button-prev',
      },
      breakpoints: {
        812: {
          spaceBetween: 64
        },
        992: {
          spaceBetween: 80
        }
      }
    });
  }

  // Closer look carousel
  if ($(".closer-look").length) {
    var closerLookCarousel = new Swiper('.closer-look .carousel', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true,
        invert: true
      },
      navigation: {
        nextEl: '.closer-look .swiper-button-next',
        prevEl: '.closer-look .swiper-button-prev',
      },
      breakpoints: {
        812: {
          spaceBetween: 64
        },
        992: {
          spaceBetween: 80
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

  if ($("#TableOfContents").length) {
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
  }

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
    $('body > header').addClass('sticky');
    // pause hero animation
    console.log('hero out');
  };

  scope.heroIn = function () {
    $('body > header').removeClass('sticky');
    console.log("hero in");
    // play hero animation
  };
});
