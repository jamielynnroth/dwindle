$(document).ready(function(){

	$('a[href$="aboutus"]').click(function (e) {
		e.preventDefault();
		$('#aboutus-popup').removeClass('hidden');
		$('.closeanywhere').removeClass('hidden');
		$('#how-popup').addClass('hidden');
		// $('#ss-form').hide();
		// $('#tagline').hide();
		// $('.instructions').hide();
	});

	$('.fui-cross').click(function() {
		$('#aboutus-popup').addClass('hidden');
		$('#how-popup').addClass('hidden');
		$('.closeanywhere').addClass('hidden');
		$('#ss-form').show();
		$('#tagline').show();
		$('.instructions').show();
	});

	$('.closeanywhere').click(function() {
		$('#aboutus-popup').addClass('hidden');
		$('#how-popup').addClass('hidden');
		$('#ss-form').show();
		$('#tagline').show();
		$('.instructions').show();
		$('.full-logo').show();
		$('.closeanywhere').addClass('hidden');
	});


	$('a[href$="how"]').click(function (e) {
		e.preventDefault();
		$('#how-popup').removeClass('hidden');
		$('#aboutus-popup').addClass('hidden');
		$('.closeanywhere').removeClass('hidden');
		// $('#ss-form').hide();
		// $('#tagline').hide();
		// $('.instructions').hide();
	});





	$('#ss-form-2').submit(function(e) {
		 e.stopPropagation();
		 e.preventDefault();
		 $('#ss-form-2').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 $('nav').hide();
		 $('.home-link').removeClass('hidden');
	});

	$('#ss-form').submit(function(e) {
		 e.stopPropagation();
		 e.preventDefault();
		 $('#ss-form').hide();
		 $('.instructions').hide();
		 $('#tagline').hide();
		 $('.full-logo').hide();
		 $('#thanks').removeClass();
		 $('nav').hide();
		 $('#how-steps').hide();
		 $('.home-link').removeClass('hidden');
	});

	$('#mc_embed_signup').submit(function(e) {
		 e.stopPropagation();
		 e.preventDefault();
		 $('#mc_embed_signup').hide();
		 // $('.instructions').hide();
		 // $('#tagline').hide();
		 // $('.full-logo').hide();
		 $('#signup-confirm').removeClass('hidden');
		 $('nav').hide();
		 $('#how-steps').hide();
		 $('.home-link').removeClass('hidden');
	});


// Initialize bootstrap tooltip API
 $("[rel=tooltip]").tooltip();

// happy.js initialization for signup form validation

// function happyEmail () {
// 	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
// 	if (reg.test(email)) {
// 	return true; 
// 	}
// 	else {
// 	return false;
// 	} 
// };



// $('#ss-form').isHappy({
//           fields: {
//             // reference the field you're talking about, probably by `id`
//             // but you could certainly do $('[name=name]') as well.
//             '#entry_1697004160': {
//               required: true,
//               message: 'Please provide your ConEd.com username'
//             },
//             '#entry_1581237788': {
//               required: true,
//               message: "Please provide your ConEd.com password - we'll never share it."
//             },
//             '#entry_1063886520': {
//               required: true,
//               message: "Please provide your email so we can share your savings!"
//               test: happy.email
//             }
//           }
//         });
});
