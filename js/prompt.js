/*Modal alert
alert('You are in undefined territories.');

//Modal for ok, or cancel
confirm('You must do 3 push ups.');

//Modal field - Storing of prompt response in a variable
var userName = prompt("What's your name?");

//Operator - typeof
typeof true //boolean
typeof 'Thats not a valid entry' //String
typeof 42 //number
typeof undefined //undefined
typeof null //object
*/


$(document).ready(function() {
	$('a.button').click(function() { // On click of link
		var gotName = false; //This flag will control our loop, based on whether we've got the users' correct name yet 
		while(gotName == false) { //While we don't have your name, do...
			var userName = prompt("What's your name?"); //Ask for our name, store in variable
			if (confirm('Your name is ' + userName + ' ?')) { //Ask if our names correct, if 'ok' then true and execute, if 'cancel' then restart loop while gotName is false
				alert("'Sup " + userName + "!"); //Now that your names correct, waddup!
				gotName = true; //Set to true, to exit us from while loop
			}
		} 
	});
});