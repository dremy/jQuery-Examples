$(document).ready(function() {
	var outer = $('#outer');
	outer.fadeIn(); // Show modal
	outer.click(function() {
		outer.fadeOut();
	});
	outer.keypress(function() {
		outer.fadeOut();
	});
});