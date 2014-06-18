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

// An array is a data structure with automatically indexed positions

var passengers = [ "Greg Pollack", "Aimee Simone" ];
passengers[1];

//If we want to change the value contained at any index, we use.
passengers[1] = "Eric Allam";
passengers.length; //Gives us number of cells in an array
passengers.pop(); //Deletes the last position, and retreives its value
passengers.push("Adam Rensel"); //Adds a cell to the last position of an array;

var comboArray1 = ["One" , "fish", 2, "fish"]; // Can use strings, values, variables ,other arrays
for (var i = 0; i < comboArray1.length; i++ ) {}

var poisson = "fish";

var comboArray2 = ["Red", poisson, "Blue", poisson]; // will evaluate as "Red", "fish", "Blue" , "fish"

var arrayOfArrays [comboArray1, comboArray2];

//2 dimensional arrays
console.log(arrayOfArrays); //names of arrays disappears, will show two arrays with 4 items;
console.log(arrayOfArrays[1]); //"red fish, blue fish"
console.log(arrayOfArrays[1][2]); // first selects an array (0 or 1) then sellects a cell (cell 2)

// Iterates throuhgh an array
var numberList = [2 , 5 , 4 , 2 , 15 , 6 ];
for (var i = 0; i < numberList.length; i++ ) {
	console.log("The value in cell " + i + " is " numberList[i]);
}

numberList[5] = undefined; //makes a cell empty

// Iterates through an array, counts the number of even numbers, erases odd numbers.
var evenCount = 0;
for (var i = 0; i < numberList.length; i++ ) {
	if (numberList[i] % 2 == 0) { //if referenced value divided by 2, has a remainder of 0, increase evenCount variable.
		evenCount++;
	} else {
		numberList[i] = undefined;
	}
}
console.log(evenCount);
// Number of odds
console.log(numberList.length - evenCount);

//
$(document).ready(function() {
	$('a').click(function() { // On click of link
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

function addPasenger ( name, list) {
	if (list.length == 0) {
		list.push(name);
	} else {
		for (var i = 0; i < list; i++) {
			if (list[i] == undefined) {
				list[i] = name;
				return list;
			} else if (i == list.length - 1){ // checks if we're at end of array
				list.push(name);
				return list;
			}
		}
	}
}

function deletePassenger (name, list) {
	if (list.length == 0) {
		console.log("List is empty, dude!");
	} else {
		for (var i = 0; i < list; i++) {
			if (list[i] == name) { //if the contents of this cell are equaly to name, then set as empty.
				list[i] = undefined;
				return list;
			}
			else if (i == list.length - 1) {
				console.log("Passenger not found");
			}
		}
	}
	return list;
}


var passengerList = [];
passengerList = addPassenger("Gregg Pollack", passengerList);
passengerList = addPassenger("Ashley Smith", passengerList);
passengerList = addPassenger("John Friskics", passengerList);
passengerList = deletePassenger("Ashley Smith", passengerList);
passengerList = addPassenger("Adam Rensel", passengerList);
passengerList = deletePassenger("Ashley Smith", passengerList);
passengerList = deletePassenger("Gregg Pollack", passengerList);
passengerList = addPassenger("Dom Remy", passengerList);