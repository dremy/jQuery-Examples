$(document).ready(function(){
  $('.triptych').addClass('all'); //Give all rows all
  $(".filter").find(".on-sale").click(function(){ //Click 'On Sale'
    $('.triptych').removeClass('all highlight'); // Remove any highlighted classes
    $('.triptych').filter('.sale').addClass('highlight').fadeTo('slow'); //Filter tours, add 'highlight' class
  });

  $(".filter").find(".featured").click(function(){
    $('.triptych').removeClass('all highlight'); // Remove any highlighted classes
    $(".triptych").filter(".featured").addClass("highlight").fadeTo('slow');
  });

  $('.filter').find('.all').click(function() {
  	$('.triptych').removeClass('highlight');
  	$('.triptych').addClass('all');
  });
});