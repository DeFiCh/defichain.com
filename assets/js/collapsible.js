$(function () {

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

});