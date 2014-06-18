//Ajax call to load xml/html information from confirmation.html
$('confirmation').on('click', 'button', function() {
	$.ajax('confirmation.html?confNum=1234', {
		success: function(response) {
			$('.ticket').html(response).slideDown();
		}
	});
});

//Ajax call to load xml/html information from confirmation.html
$('confirmation').on('click', 'button', function() {
	$.ajax('confirmation.html', {
		success: function(response) {
			$('.ticket').html(response).slideDown();
		},
		data: {
		 "confNum": 1234
		}		 
	});
});

// Same thing using get
$('confirmation').on('click', 'button', function() {
	$.get('confirmation.html?confNum=1234', function(response) {
		$('.ticket').html(response).slideDown();
	});
});

//Ajax call to load xml/html information from confirmation.html
//$('.confirmation .button').on('click', function() { }); Don't use this, use event delegation below
$('.confirmation').on('click', '.button', function() { //Event delegation 1. Listen for click events inside .confirmation, when they happen, check if the target was .button
	$.ajax('confirmation.html', {
		success: function(response) {
			$('.ticket').html(response).slideDown();
		}, //don't for get the comma!
		data: { 
			"confNum": $(".ticket").data("confNum") // If there's a data-confNum attribute on the div
		},
		timeout: 3000, // How much time to try and reach the url -- 3 seconds 
		error: function(request, errorType, errorMessage) {
			beforeSend: funcion() { //Runs before Ajax Request -- perfect for spinner
				$('.confirmation').addClass('is-loading');
			},
			complete: function() { // Runs after both success and error
				$('.confirmation').removeClass('is-loading');	
			},
		}
	});
});

var tour = {
	init: function() {
		$('.confirmation').on('click', '.button', this.fetchTickets); //Event delegation 1. Listen for click events inside .confirmation, when they happen, check if the target was .button
	fetchTickets: function() {	//Created a new JS object
		$.ajax('confirmation.html', {
			success: function(response) {
				$('.ticket').html(response).slideDown();
			}, //don't for get the comma!
			data: { 
				"confNum": $(".ticket").data("confNum") // If there's a data-confNum attribute on the div
			},
			timeout: 3000, // How much time to try and reach the url -- 3 seconds 
			error: function(request, errorType, errorMessage) {
				beforeSend: funcion() { //Runs before Ajax Request -- perfect for spinner
					$('.confirmation').addClass('is-loading');
				},
				complete: function() { // Runs after both success and error
					$('.confirmation').removeClass('is-loading');	
				},
			}
		});
	}
	}
}

$(document).ready(functino() {
	tour.init();
});


function Confirmation(el) { //'el' refers to the element (passing it in as a parameter)
	this.el = el; //Save a reference to the past in element 
	this.ticket = this.el.find('.ticket'); //Selects only the .ticket of the passed element
	var confirmation = this; //Must set this as a variable, since ajax will thinking 'this' is referring to ajax settings and not the passed in element above
	//helper methods
	this.loadConfirmation = function() {
		$.ajax('confirmation.html', {
			timeout: 3000,
			context: confirmation, //Allows us to set the value of 'this' inside our call backs
			success: function(response) {
				this.ticket.html(response).slideDown();
			}
		});
	}
	this.showBoardingPass = function(event) {
		event.preventDefault();
		$(this).hide(); //hide link .view-boarding-pass
		confirmation.el.find('.boarding-pass').show(); //use confirmation to replicate 'this.el'
	}
	//event handlers
	this.el.on('click', 'button', this.loadConfirmation);
	this.el.on('click', '.view-boarding-pass', this.showBoardingPass);

}

$(document).ready(function() {
	var paris = new Confirmation($('#paris')); //creates a new confirmation for each ticket
	var london = new Confirmation($('#london')); //creates a new confirmation for each ticket
});

/* fetchPhotos function refactoring*/
function Tour(el) { //creating new function 'Tour' with 'el' parameter
  var tour = this;
  this.el = el;
  this.fetchPhotos = function() { //creating new fetchPhotos function on this
    $.ajax('/photos.html', {
      data: {location: tour.el.data('location')}, //tour.el == this.el due to context
      context: tour, // new context
      success: function(response) {
        this.el.find('.photos').html(response).fadeIn(); //want only the .photos in this element, not all elements
      },
      error: function() {
        this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>'); // same as success
      },
      timeout: 3000,
      beforeSend: function() {
        this.el.addClass('is-fetching'); //add class to this element
      },
      complete: function() {
        this.el.removeClass('is-fetching');
      }
    });
  };
  this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});


// Ajax Request - Send Data
$('form').on('submit', function(event) {
	event.preventDefault(); //Default event on submit is to refresh page, this prevents page refresh 
	$.ajax('/book', {
		type: 'POST',
		data: { //Sends over below dataa 
			"destination": $('#destination').val(), //Identifies data key, and then asks what value should it use
			"quantity": $("#quantity").val()
		}
		success: function(result) { //Upon success do this...
			$('form').remove(); // Remove the form
			$('#vacation').hide().html(result).fadeIn(); //Hide vacation div, write result, fade vacation div back in
		}
	});
});

// Ajax Request - Serialize method
$('form').on('submit', function(event) {
	event.preventDefault(); //Default event on submit is to refresh page, this prevents page refresh 
	$.ajax('/book', {
		type: 'POST',
		data: { 
			$('form').serialize() // Pass all form data
		}
		success: function(result) { //Upon success do this...
			$('form').remove(); // Remove the form
			$('#vacation').hide().html(result).fadeIn(); //Hide vacation div, write result, fade vacation div back in
		}
	});
});


// Ajax Request - Refactor Form
$('form').on('submit', function(event) { //because we're already in $('form')
	var form = $(this);
	event.preventDefault(); //Default event on submit is to refresh page, this prevents page refresh 
	$.ajax('/book', {
		type: 'POST',
		data: { 
			form.serialize() // Pass all form data
		}
		success: function(result) { //Upon success do this...
			form.remove(); // Remove the form
			$('#vacation').hide().html(result).fadeIn(); //Hide vacation div, write result, fade vacation div back in
		}
	});
});

// 3.5 Success Callback

$(document).ready(function() {
  $('form').on('submit', function(event) {
    var form = $(this);
    event.preventDefault();
    $('.tour').fadeOut(500); // Fade out on submit
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      success: function(result) {
      	$('.tour').html(result).fadeIn(3000); // Fade in on success
      }
    });
  });
});

// Ajax Request - JSON
$('form').on('submit', function(event) { //because we're already in $('form')
	var form = $(this);
	event.preventDefault(); //Default event on submit is to refresh page, this prevents page refresh 
	$.ajax (form.attr('action'), { //Keeps us from replicating the action URL twice.
		type: form.attr('method'),
		data: { 
			form.serialize() // Pass all form data
		}
		dataType: "json", //Parse response as JSON
		success: function(result) { //Upon success do this...
			form.remove(); // Remove the form
			/*NEW*/
			var msg = $("<p></p>");
			msg.append("Destination: " + result.location + ". ");
			msg.append("Price: " + result.totalPrice + ". ");
			msg.append("Nights: " + result.nights + ". ");
			msg.append("Price: " + result.confirmation + ". ");
			$('#vacation').hide().html(msg).fadeIn(); //Hide vacation div, write result, fade vacation div back in
		},
		contentType: 'application/json'
	});
});
        msg.append("You are all set to go to " + response.destination + " for the price of " + response.price + " over " + response.nights + ". Your confirmation code is " + response.confirmation ". Thank you traveling with us.");

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      dataType: "json",
      success: function(response) {
        $('form').remove();
        var msg = $("<p></p>");
        msg.append("You are all set to go to on the " + response.description + " for the price of " + response.price + " over " + response.nights + ". Your confirmation code is " + response.confirmation + ". Thank you traveling with us." );
        $('.tour').hide().html(msg).fadeIn();
      },
      contentType: "application/json"
    });
  });
});

//Using the .each and .map utility functions
// Use .each when the divs have already been created for you, your're just plugging in json data
$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        var deal = $('.deal-' + index);
        deal.find('.name').html(dealItem.name);
        deal.find('.price').html(dealItem.price);
      });
    }
  });
});

//Changed $.ajax to use .getJSON so we can eliminate dataType, success, & contentType options  
$('button').on('click', function() {
  $.getJSON('/cities/deals', function(result) {
    $.each(result, function(index, dealItem) {
      var dealElement = $('.deal-' + index);
      dealElement.find('.name').hide().html(dealItem.name).fadeIn(500);
      dealElement.find('.price').hide().html(dealItem.price).fadeIn(4000);
  	});
  });
});

//Using $.map to create the spaces we want the JSON data to go
$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
  	var flightElements = $.map(result, function(flightItem, index){ //iterate through flight items
      var listItem = $('<li></li>'); //create a container for info
      $('<h3>Flight Number: ' + flightItem.flightNumber + '</h3>').appendTo(listItem); //append said data inside listItem
      $('<p>' + flightItem.time + '</p>').appendTo(listItem);
      return listItem; //When finished return the list item.
    });
    $('.flight-times').detach)() //detach .flight-times, write html, then re-attach
    				  .html(flightElements); //since this was turned into an object, we can write it in.flight-times div
    				  .appendTo('.flights')
  });
});



