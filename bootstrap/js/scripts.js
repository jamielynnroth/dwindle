
$(document).ready(function(){

	$('a[href$="aboutus"]').click(function () {
		$('#aboutus-popup').removeClass('hidden');
		$('.closeanywhere').removeClass('hidden');
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
	})


	$('a[href$="how"]').click(function () {
		$('#how-popup').removeClass('hidden');
		$('#aboutus-popup').addClass('hidden');
		$('.closeanywhere').removeClass('hidden');
		$('#ss-form').hide();
		$('#tagline').hide();
		$('.instructions').hide();
	});




    $('#ss-form').submit(function(e) {
		 e.preventDefault;
		 $('#ss-form').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 return false;
	});

	$('#ss-form-2').submit(function(e) {
		 e.preventDefault;
		 $('#ss-form-2').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 return false;
	});

});

