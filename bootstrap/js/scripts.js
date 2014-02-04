$('a[href$="aboutus"]').click(function () {
	$('#aboutus-popup').removeClass('hidden');
	$('#how-popup').addClass('hidden');
	$('#ss-form').hide();
	// $('.full-logo').css({'top': '-385px', 'position': 'relative'});
	$('#tagline').hide();
	$('.instructions').hide();
});

$('.fui-cross').click(function() {
	$('#aboutus-popup').addClass('hidden');
	$('#how-popup').addClass('hidden');
	$('#ss-form').show();
	// $('.full-logo').css({'top': '0'});
	$('#tagline').show();
	$('.instructions').show();
})

$('.closeanywhere').click(function() {
	$('#aboutus-popup').addClass('hidden');
	$('#how-popup').addClass('hidden');
	$('#ss-form').show();
	// $('.full-logo').css({'top': '0'});
	$('#tagline').show();
	$('.instructions').show();
})


$('a[href$="how"]').click(function () {
	$('#how-popup').removeClass('hidden');
	$('#aboutus-popup').addClass('hidden');
	$('#ss-form').hide();
	// $('.full-logo').css({'top': '-385px', 'position': 'relative'});
	$('#tagline').hide();
	$('.instructions').hide();
});


// $('.modal').hasClass('in').css('display','block');



$(document).ready(function(){
    $('#ss-form').submit(function(e) {
    	
		 e.preventDefault;
		 $('#ss-form').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 return false;
	});

});

