$(document).ready(function(){

	//preloader
	$(window).load(function() {
		$("#loading").delay(2000).fadeOut(500);
		//$("#loading").fadeOut(500);
	});

	/*---------------about us section start----------------*/
	/*---------------about us section end----------------*/

    /*---------------portfolio section start---------------*/

	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//isotop active button
	$('.portfolio-menu button').on( 'click', function(event){
		$ (this).siblings('.active').removeClass('active');
		$ (this).addClass('active');
		event.preventDefault();
	});
	/*---------------portfolio section end---------------------*/

});