$(function(){
	AOS.init();
	// scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('.menu').addClass('main-menu');
			$('.playlist-holder').addClass('col-md-12 playlist-wide');
		} else {
			$('.menu').removeClass('main-menu');
			$('.playlist-holder').removeClass('col-md-12 playlist-wide');
		}
	});

	// show slider
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 4,
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 4,
				nav: true,
				loop: true,
				margin: 20
			}
		}
	});

	// for menu active
	$(".nav-link").click(function(e){
		$("a.nav-link").removeClass("active");
		$(this).addClass("active");
	});
	
	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});

	// form blur
	$(".group-holder input").on("focus",function(){
		$(this).addClass("focus");
	});

	$(".group-holder input").on("blur",function(){
		if($(this).val() == "")
			$(this).removeClass("focus");
	});

	// Open Modal
	$('.modal-holder').hide();
	$('.show-modal').on('click', function(){
		$('.modal-holder').fadeIn(500);
	});

	// close modal
	$('.close').on('click', function(){
		$('.modal-holder').fadeOut(400);
	});

	// smooth scrolling
	$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// back to top
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('#toTop').fadeIn(); 
		} else { 
			$('#toTop').fadeOut(); 
		} 
	}); 
	$('#toTop').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 1000); 
		return false; 
	}); 
})