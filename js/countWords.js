//Function does something step by step
/*$(document).ready(function() {
	var typing = $("#textarea");
	typing.keyup(
		
	);
});
	//COMPLEX - FUNCTIONS
	/*
	function countWords () {
		var phrase = prompt("Which phrase would you like to examine?");
		if (typeof(phrase) != "string")	{
			alert("Invalid phrase. Try again.");
			return false; 
		} else {
			var wordCount = 0;
			for(var index = 0; index < phrase.length; index++) {
				if(phrase.charAt(index) == " ") {
					wordCount++;
				}
			}
			if (phrase.length == 0) {
				wordCount = 0;
			} else {
				wordCount = wordCount + 1;
			}
			alert("There are " + wordCount + " words in \"" + phrase + "\".");
			return true;
		}
	}

	 */

	/*
	function countE () {
		var phrase  = prompt("Which phrase would you like to examine?");
		if ( typeof(phrase) != "string") {
			alert("Please write a phrase");
			return false;
		} else {
			var eCount = 0;
			for (var index = 0; index < phrase.length; index++) {
				if(phrase.charAt(index) == "e" || phrase.charAt(index) == "E") {
					eCount++;
				}
			}
			alert("There are " + eCount + " E's in \"" + phrase + "\".");
			return true;
		}
	}
	*/

/* SIMPLE - FUNCTIONS
			//title		//parameters
	function sumOfCubes (a, b) {
		//do some stuff
		var aCubed = a*a*a; //cube each numbers
		var bCubed = b*b*b; //cube each numbers
		var sum = aCubed + bCubed; //sum the cubes
		
		return sum; //you're done, exit and give us whatever follows (because it can be used to instantly exit)
	}
	//assignment expression
	mysum = sumOfCubes(5, 6); //get two numbers
	alert(mysum);
	*/