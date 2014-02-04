// $('nav ul li #aboutus').click(function () {
// 	$('#popup-background').removeClass('invisible');
// 	$('#about-popup').removeClass('invisible');
// });

// $('.modal').hasClass('in').css('display','block');


// $('#aboutus').click(function() {
// 	$('#myModal').modal(toggle);
// });


$(document).ready(function(){
    $('#ss-form').submit(function(e) {
    	//return false;
		 e.preventDefault;
		 $('#ss-form').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
	});

});

