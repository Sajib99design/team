
jQuery(document).ready(function (
) {

	// Scroll to start
	jQuery('.scrolltotop').click(function () {
		jQuery('html').animate({ 'scrollTop': '0px' }, 300);
		return false;
	});

	jQuery(window).scroll(function () {
		var upto = jQuery(window).scrollTop();
		if (upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

	//collapse the sidebar
	$('.menu-btn').click(function () {
		$('.sidebar-menu').addClass('active');
	});

	$('.close-btn').click(function () {
		$('.sidebar-menu').removeClass('active');
	});

	//  STICKY NAV
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height >= 100) {
			$('header').addClass('fixed-menu');
		} else {
			$('header').removeClass('fixed-menu');
		}
	});



	$('#hero-mainContent').owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		nav: false,
		dots: true,// Adjust to match items
		center: true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		responsive: {
			0: {
				items: 1,
				dots: false

			},
			567: {
				items: 1

			},
			767: {
				items: 1

			},
			1200: {
				items: 1
			}
		}
	});


	//main
});