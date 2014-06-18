$(document).ready(function() {
	//Full Name Typing
	var fullNameTyping = $('#fullname');
	fullNameTyping.keyup(function() {
		var fullNameWords = fullNameTyping.val();
		$('.marquee').find('.mirror .mirror-name').html('-' + fullNameWords);	
	});
	
	//Message Typing
	var typing = $('#textarea');
	typing.keyup(
		function () {
		var words = typing.val();
		$('.marquee').find('.mirror .mirror-text').html(words);
		var wordCount = 0;
		for(var i = 0; i < words.length; i++) {
			if(words.charAt(i) == " ") {
				wordCount++;
			}
		} 
		if (words.length == 0) {
			wordCount = 0;
		} else {
			wordCount = wordCount + 1;
		}
		$('.marquee').find('.mirror .word-count').html(wordCount + " words");
	}		
	);
});