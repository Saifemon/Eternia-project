(function($){

    // init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.portfolio-filter').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});


})(jQuery);