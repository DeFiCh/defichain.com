var onloadCallback = function () {
  grecaptcha.render('google_recaptcha', {
    'sitekey': '6LcSh7UZAAAAAK2s75MiBrNlmzq1BGyI4PI4KD60'
  });
};

$(document).ready(function () {
  var base_url = "http://localhost:8000";

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
      }, function () {
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

  $('#claim-step2 form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      data: JSON.stringify({
        btcAddress: $('#btc_add').val(),
        dfiAddress: $('#dfi_add').val(),
      }),
      url: base_url + "/claim/message",
      dataType: "json",
      type: 'POST',
      beforeSend: function () {
        $('#claim-step2 .claim-wizard-next + .spinner').addClass('show');
      },
      success: function (response) {
        $('.claim-wizard-btc-message').html(response.message);
        $('#prev-incomplete-alert').hide();
        $('#step2-error-alert').hide();
        $('#claim-step2 .claim-wizard-next + .spinner').removeClass('show');
        wizardNextStep();
      },
      error: function (response) {
        $('#claim-step2 .claim-wizard-next + .spinner').removeClass('show');
        $('.claim-message-alert-error').html(response.responseJSON.error.message);
        $('#step2-error-alert').show();
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
    var data = {
      btcAddress: $('#btc_add').val(),
      dfiAddress: $('#dfi_add').val(),
      messageSignature: $('#message_signature').val(),
      email: $('#claim_email').val()
    }
    if (!data.email) {
      delete data['email'];
    }
    var rcres = grecaptcha.getResponse();
    if (!rcres.length) {
      $('#claim-step4 .claim-wizard-next + .spinner').removeClass('show');
      $('.alert').html("Please select recaptcha before proceed");
      $('#step4-error-alert').show();
    } else {
      $.ajax({
        data: JSON.stringify(data),
        url: base_url + "/claim",
        dataType: "json",
        type: 'POST',
        beforeSend: function () {
          $('#claim-step4 .claim-wizard-next + .spinner').addClass('show');
        },
        success: function (response) {
          $('#step4-error-alert').hide();
          $('#claim-step4').css({
            'height': 'auto'
          });
          var rTF = moment(parseInt(response.transactionInfo.requestedTs)).format("ddd, MMM D YYYY, h:mm a");
          $('#claim-step4 .claim-wizard-next + .spinner').removeClass('show');
          $('#dfi-status-value').html(response.transactionInfo.status);
          $('#requested-ts-value').html(rTF);
          $('#step4-success-alert').show();
          $('body').scrollTo('+=272', 500);
        },
        error: function (response) {
          $('#step4-success-alert').hide();
          $('#claim-step4 .claim-wizard-next + .spinner').removeClass('show');
          $('.alert').html(response.responseJSON.error.message);
          $('#step4-error-alert').show();
        }
      });
    }
  });

  $('#claim-status-form form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      data: JSON.stringify({
        btcAddress: $('#btc_address').val(),
      }),
      url: base_url + "/claim/status",
      dataType: "json",
      type: 'POST',
      beforeSend: function () {
        $('#claim-status-form .spinner').addClass('show');
      },
      success: function (response) {
        $('#claim-status-form .spinner').removeClass('show');
        $('#claim-status-error-alert').hide();
        $('#claim-status-value').html(response.status);
        if(response.status === 'COMPLETED'){
          $('#claim-status-txId').html(response.txId);
          $('#claim-status-claimDfiAmount').html(response.claimDfiAmount);
        }
        $('#claim-status-success-alert').show()
      },
      error: function (response) {
        $('#claim-status-form .spinner').removeClass('show');
        $('#claim-status-success-alert').hide()
        $('.status-alert-error').html(response.responseJSON.error.message);
        $('#claim-status-error-alert').show();
      }
    });
  });
})
