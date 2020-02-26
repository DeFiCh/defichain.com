$(document).ready(function () {

  // Handle wizard next buttons
  function wizardNextStep() {
    var $ccc = $('.collapsible-head.active').next();
    var $crf = $ccc.find('[required]');
    var $nch = $ccc.next();
    var $ncc = $nch.next();

    console.log($nch);

    if (!$crf.length || $crf.val()) {
      $ncc.animate({
        height: $ncc.attr('data-h') + "px"
      });
      $nch.addClass('active');
      $nch.siblings('.collapsible-head').removeClass('active');
      $ncc.siblings('.collapsible-content').animate({
        height: 0
      }, function() {
          $('body').scrollTo($nch, 500, {
            offset: -$('body > header').height()
          });
      });
    }
  }

  // $('.claim-wizard-next').click(function (e) {
  //   wizardNextStep();
  //    e.preventDefault();
  // });

  $('#claim-step1 .claim-wizard-next').click(function (e) {
    e.preventDefault();
    wizardNextStep();
  });

  $('#claim-step2 form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      data: {
        btcAddress: $('#btc_add').val(),
        dfiAddress: $('#dfi_add').val(),
        messageSignature: $('#message_signature').val()
      },
      url: "/data/message.json",
      dataType: "json",
      beforeSend: function() {
        $('#claim-step2 .claim-wizard-next + .spinner').addClass('show');
      },
      success: function(response) {
        $('.claim-wizard-btc-message').html(response.message);
        $('#prev-incomplete-alert').hide();
        $('#step2-error-alert').hide();
        setTimeout(function() {
          $('#claim-step2 .claim-wizard-next + .spinner').removeClass('show');
          wizardNextStep();
        }, 1000);
      },
      error: function(response) {
        $('#step2-error-alert .alert').html(response.error.message).show();
      }
    });
  });

  // Copy to clipboard button
  var clipboard = new ClipboardJS('.copy-btn');

  clipboard.on('success', function (e) {
    var copyButtonText = $('.copy-btn').html();
    $('.copy-btn').html("Copied!");
    setTimeout(function () {
      $('.copy-btn').html(copyButtonText);
    }, 2000);
    e.clearSelection();
  });

  $('#claim-step3 .claim-wizard-next').click(function (e) {
    e.preventDefault();
    wizardNextStep();
  });

  $('#claim-step4 form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      data: {
        btcAddress: $('#btc_add').val(),
        dfiAddress: $('#dfi_add').val(),
        messageSignature: $('#message_signature').val(),
        email: $('#claim_email').val()
      },
      url: "/data/claim.json",
      dataType: "json",
      beforeSend: function () {
        $('#claim-step4 .claim-wizard-next + .spinner').addClass('show');
      },
      success: function (response) {
        $('#step4-error-alert').hide();
        $('#claim-step4').css({
          'height': 'auto'
        });
        var rTF = moment(parseInt(response.transactionInfo.requestedTs)).format("ddd, MMM D YYYY, h:mm a");
        var iTF = moment(parseInt(response.transactionInfo.initiatedTs)).format("ddd, MMM D YYYY, h:mm a");
        setTimeout(function () {
          $('#claim-step4 .claim-wizard-next + .spinner').removeClass('show');
          $('#dfi-value-value').html(response.dfiValue);
          $('#requested-ts-value').html(rTF);
          $('#initiated-ts-value').html(iTF);
          $('#hash-value').html(response.transactionInfo.hash);
          $('#step4-success-alert').show();
          $('body').scrollTo('+=272', 500);
        }, 1000);
      },
      error: function (response) {
        $('#step4-error-alert .alert').html(response.error.message).show();
      }
    });
  });

})