$(document).ready(function() {
	var selector = $('.selector');
	$('.triptych').find('.vote').click(function() {
		selector.val($(this).data('select'));
		selector.animate({'scrollTop':'500px'}, 'slow');
	});
	$('a.vote').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 700);
	    return false;
	});	
});