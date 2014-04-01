$(document).ready(function() {
	//Full Name Typing
	var fullNameTyping = $('#fullname');
	fullNameTyping.keyup(function() {
		var fullNameWords = fullNameTyping.val();
		$('.marquee').find('.mirror .mirror-name').html('-' + fullNameWords);	
	});
	
	//Message Typing
	var typing = $('#textarea');
	typing.keyup(function() {
		var words = typing.val();
		$('.marquee').find('.mirror .mirror-text').html(words);	
	});
});