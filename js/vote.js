$(document).ready(function() {
	var selector = $('.selector');
	var root = $('html, body');
	$('.triptych').find('.vote').click(function() {
		selector.val($(this).data('select'));
		selector.animate({'scrollTop':'500px'}, 'slow');
	});
});