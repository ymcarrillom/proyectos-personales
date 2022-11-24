$(document).ready(function(){
	$(window).scroll(function(){
		var windowwidth = $(window).width();

		if (windowwidth > 800) {
			var scroll = $(window).scrollTop();

			$('header .texto').css({
				'transform': 'translate(0px, ' + scroll / 2  + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4  + '%)'

			});
		}
	});
	$(window).resize(function(){
		var windowwidth = $(window).width();
		if (windowwidth < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'

			});
		}
	});
});