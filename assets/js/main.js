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
  $('.buy-dfi .buy-dfi-link').click(function (e) {
    e.preventDefault();
    $('.buy-dfi').toggleClass('active');
  });

  $('.buy-dfi-list-link .buy-dfi-link').click(function (e) {
    e.preventDefault();
    $('.buy-dfi-list-link').toggleClass('active');
  });

  // Fetch DFI price
  var DFIPrice;
  
  $(".buy-dfi-link").append('<span class="dfi-price loading"><span class="spinner"><span class="b1"></span><span class="b2"></span><span class="b3"></span></span></span>');

  $.ajax({
    url: "https://api.cakedefi.com/home",
    success: function (data) {
      for (i = 0; i < data.coinPrices.length; i++) {
        if (data.coinPrices[i].CoinId === "DFI") {
          DFIPrice = data.coinPrices[i].priceUSD.avg;
        }
      }
      $(".dfi-price").removeClass("loading").empty().html('$' + parseFloat(DFIPrice).toFixed(2));
    }
  });

  // Fetch LM APRs
  $.ajax({
    url: "https://ocean.defichain.com/v0/mainnet/poolpairs",
    success: function (data) {
      data.data.forEach((lp) => {
        const apr_value = (lp.apr.total * 100).toFixed(2) + "%"
        $('#apr-' + lp.displaySymbol).removeClass('loading').prepend(apr_value);
      })
    }})

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
        $('.download-cli-mac-dfc').attr('href', mac_link);
        $('.download-cli-win-dfc').attr('href', win_link);
        $('.download-cli-linux-dfc').attr('href', linux_link);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/DeFiCh/app/releases/latest',
      success: function (data) {
        var version = data.name.substring(1);
        var mac_link = "https://github.com/DeFiCh/app/releases/download/v"+version+"/DeFi-Wallet-"+version+".dmg";
        var win_link = "https://github.com/DeFiCh/app/releases/download/v" + version + "/DeFi-Wallet-Setup-" + version + ".exe";
        var appimg_link = "https://github.com/DeFiCh/app/releases/download/v" + version + "/DeFi-Wallet-" + version + ".AppImage";
        $('.download-desktop-app-mac-dfc').attr('href', mac_link);
        $('.download-desktop-app-win-dfc').attr('href', win_link);
        $('.download-desktop-app-appimg-dfc').attr('href', appimg_link);
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
      initialSlide: 13,
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

  if ($(".bounty").length) {
    $.localScroll({
      duration: 500,
      offset: {
        top: -96
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
