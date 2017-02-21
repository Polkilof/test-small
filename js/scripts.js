$(document).ready(function(){

	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		arrows: true,
		draggable: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000,
		pauseOnDotsHover: true
	});

	$('.slider .slide').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});


	$('.services-list li .holder .btn-default').mouseenter(function(event){
			$(this).parents('.holder').toggleClass('addBg');
	}).mouseout(function(event){
			$(this).parents('.holder').toggleClass('addBg');
	});

	$('#form01').validate({
		errorClass: "error",
		validClass: "valid",
		highlight: function(element) {
			$(element).addClass('error').removeClass('valid');
		},
		unhighlight: function(element) {
			$(element).removeClass('error').addClass('valid');
		},
		rules: {
			full_name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true,
				minlength: 2
			},
			message: {
				required: true,
				minlength: 2
			}
		}
	});

	var window_ = $(window),
		body_ = $('body');
	$('<a href="#" class="open-menu">Open Menu</a>').appendTo('#header .container');
	$('<span class="fader"/>').appendTo('#header .container');
	$('.open-menu').click(function(){
		body_.toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function(){
		body_.removeClass('menu-opened');
	});


});
