$(window).bind("load", function() {
	$('#textizen, #mindmixer, #textmybus, #adoptahydrant, #bizfriendly, #smartprocure, #schoolbus, #auntbertha, #civicinsight, #streetmix, #recordtrac, #tothetrails').hover(
		function() {
			$(this).popover("show");
		},
		function() {
			$(this).popover("hide");
		}
	);

	$('.program-pill').hover(function() { $(this).popover('show'); }, function() { $(this).popover('hide'); } );

	$('.icon-social').hover(
		function() { $(this).css("width", "155px"); },
		function() { $(this).css("width", "150px"); }
		);
});
