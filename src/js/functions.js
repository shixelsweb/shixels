$(document).ready(function() {
  $('.shixels_nav_options li, .shixels_logo, .shixels_button').click(function (e) {
  		e.preventDefault();
  		var link = '/' + $(e.currentTarget).data('link');
  		var link_to_activate = link + '_link';
		window.location = link;
    });

  $('.shixels_next_section').click(function (e) {
  		var link = '.shixels_services_' + (parseInt($(e.currentTarget).data('current')) + 1);

  		console.log(link);
		$('html,body').animate({
	  	 	scrollTop: $(link).offset().top 
		});
  		

  });

  $('.shixels_prev_section').click(function (e) {
  		var link = '.shixels_services_' + (parseInt($(e.currentTarget).data('current')) - 1);

  		console.log(link);
		$('html,body').animate({
	  	 	scrollTop: $(link).offset().top 
		});

  });

  $('.work_img').mouseover(function(e) {
  	$(this).addClass('floating');
  });

  $('.work_img').mouseout(function(e) {
  	$(this).removeClass('floating');
  });

  $('.work_img').click(function(e) {
  	var link = $(e.currentTarget).data('link');
  	window.location = link;
  });
	

  $('.shixels_mobile_menu').click(function(e) {
    if ( $('.shixels_mobile_menu_options').css('right') === '0px') {
      $('.shixels_mobile_menu_options').css('right', '-300px');
    } else {
      $('.shixels_mobile_menu_options').css('right', '0px');
    }
    
  });

  $('.shixels_send_button').click(function(e) {
    e.preventDefault();
    var name = $('.name');
    var phone = $('.phone');
    var email = $('.email');
    var website = $('.website');
    var service = $('.service');
    var budget = $('.budget');
    var message = $('.message');
    var data = {
      name:   name.val(),
      phone:  phone.val(),
      email: email.val(),
      website: website.val(),
      service:  service.val(),
      budget:  budget.val(),
      message: message.val()
    };
    console.log('data: ', data);
    if (!data.name) {
      name.addClass('error');
      $('.shixels_error').show();
    } else {
      name.removeClass('error');
    }
    if (!data.email) {
      email.addClass('error');
      $('.shixels_error').show();
    } else {
      email.removeClass('error');
    }
    if (!data.message) {
      message.addClass('error');
      $('.shixels_error').show();
    } else {
      message.removeClass('error');
    }

    if (data.name && data.email && data.message) {
      $('.shixels_error').hide();

      $.ajax({
        type: 'POST',
        url: '/src/php/contact.php',
        data: data,
        dataType: 'json',
        success: function(response) {
          if (response !== 'false') {
            $('.shixels_contact_form').slideUp();
            $('.shixels_thanks').fadeIn();
          } else {
            $('.shixels_contact_form').slideUp();
            $('.shixels_nothanks').fadeIn();
          }
        }
      });
    }
  });
});