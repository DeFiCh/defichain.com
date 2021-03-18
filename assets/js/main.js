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

  // Buy DFI popover
  $('.buy-dfi-link').click(function (e) {
    e.preventDefault();
    $('.buy-dfi').toggleClass('active');
  });

  // Fetch DFI price
  $(".buy-dfi-link").append('<span class="dfi-price loading"><span class="spinner"><span class="b1"></span><span class="b2"></span><span class="b3"></span></span></span>');
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

  // Fetch LM APYs
  if ($(".apy-eth-dfi").length > 0) {
    var lpETHDFIAPY;
    var lpBTCDFIAPY;
    var lpUSDTDFIAPY;
    var lpDOGEDFIAPY;
    $.ajax({
      url: "https://api.defichain.io/v1/listyieldfarming?network=mainnet",
      success: function (data) {
        lpBTCDFIAPY = data.pools[0].apy.toFixed(2);
        lpETHDFIAPY = data.pools[1].apy.toFixed(2);
        lpUSDTDFIAPY = data.pools[2].apy.toFixed(2);
        lpLTCDFIAPY = data.pools[3].apy.toFixed(2);
        lpDOGEDFIAPY = data.pools[4].apy.toFixed(2);
        $('.apy-btc-dfi .apy-value').removeClass('loading').prepend(lpBTCDFIAPY + "%");
        $('.apy-eth-dfi .apy-value').removeClass('loading').prepend(lpETHDFIAPY + "%");
        $('.apy-usdt-dfi .apy-value').removeClass('loading').prepend(lpUSDTDFIAPY + "%");
        $('.apy-ltc-dfi .apy-value').removeClass('loading').prepend(lpLTCDFIAPY + "%");
        $('.apy-doge-dfi .apy-value').removeClass('loading').prepend(lpDOGEDFIAPY + "%");
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
        var version = data.tag_name.substring(1);
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

    $(".carousel-5y").slick({
      appendArrows: '.carousel-5y-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 0,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });

    $(".carousel-3y").slick({
      appendArrows: '.carousel-3y-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 0,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });

    $(".carousel-2021").slick({
      appendArrows: '.carousel-2021-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 6,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });
    
    // 2020
    $(".carousel-2020").slick({
      appendArrows: '.carousel-2020-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 14,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });

    // 2019
    $(".carousel-2019").slick({
      appendArrows: '.carousel-2019-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 1,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });
    
  }

  // Carousel for Airdrop timeline
  if ($(".why-dfi").length > 0) {
    $(".why-dfi .carousel").slick({
      appendArrows: '.why-dfi .carousel-nav',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      draggable: false,
      infinite: false,
      initialSlide: 10,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
    });
  }

  // Closer look carousel
  if ($(".closer-look").length) {
    $(".closer-look .carousel").slick({
      appendArrows: '.closer-look .carousel-nav',
      arrows: true,
      autoplay: false,
      dots: false,
      draggable: false,
      infinite: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      waitForAnimate: true
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
      offset_top: 192
    });

    $.localScroll({
      duration: 500,
      offset: {
        top: -192
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
