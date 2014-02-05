
$(document).ready(function(){

	$('a[href$="aboutus"]').click(function () {
		$('#aboutus-popup').removeClass('hidden');
		$('.closeanywhere').removeClass('hidden');
		// $('#thanks').addClass('hidden');
		$('#how-popup').addClass('hidden');
		$('#ss-form').hide();
		$('#tagline').hide();
		$('.instructions').hide();
	});

	$('.fui-cross').click(function() {
		$('#aboutus-popup').addClass('hidden');
		$('#how-popup').addClass('hidden');
		$('.closeanywhere').addClass('hidden');
		$('#ss-form').show();
		$('#tagline').show();
		$('.instructions').show();
	})

	$('.closeanywhere').click(function() {
		$('#aboutus-popup').addClass('hidden');
		$('#how-popup').addClass('hidden');
		$('#ss-form').show();
		$('#tagline').show();
		$('.instructions').show();
		$('.full-logo').show();
		$('.closeanywhere').addClass('hidden');
	})


	$('a[href$="how"]').click(function () {
		$('#how-popup').removeClass('hidden');
		$('#aboutus-popup').addClass('hidden');
		// $('#thanks').addClass('hidden');
		$('.closeanywhere').removeClass('hidden');
		$('#ss-form').hide();
		$('#tagline').hide();
		$('.instructions').hide();
	});




    $('#ss-form').submit(function(e) {
    	 e.stopPropagation();
		 e.preventDefault;
		 $('#ss-form').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 $('nav').hide();
		 $('.home-link').removeClass('hidden');

		 //return false;
	});

	$('#ss-form-2').submit(function(e) {
		 e.stopPropagation();
		 e.preventDefault;
		 $('#ss-form-2').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 $('nav').hide();
		 $('.home-link').removeClass('hidden');

		 //return false;
	});

});

