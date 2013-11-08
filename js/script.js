$(window).bind("load", function() {
	$('#textizen, #mindmixer, #textmybus, #adoptahydrant, #bizfriendly, #smartprocure, #schoolbus, #auntbertha, #civicinsight, #streetmix, #recordtrac, #tothetrails').hover(
		function() {
			$(this).popover("show");
		},
		function() {
			$(this).popover("hide");
		}
	);
});
