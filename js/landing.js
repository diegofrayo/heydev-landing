(function($) {

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

})(jQuery);


// Contact Form Scripts
$(function() {

  $('#contact-form').submit(function(event) {

    event.preventDefault();

    var name = $('input#name').val();
    var email = $('input#email').val();
    var phone = $('input#phone').val();
    var message = $('textarea#message').val();

    var btnSendMessage = jQuery('#btn-send-message');
    btnSendMessage.button('loading');

    setTimeout(function() {

      //clear all fields
      btnSendMessage.button('reset');
      $('#send-message-success-alert').removeClass('hidden').fadeIn(1000);

      setTimeout(function() {
        $('#contact-form').trigger('reset');
        $('#send-message-success-alert').fadeOut(1000);
      }, 5000);

    }, 2000);

  });

});