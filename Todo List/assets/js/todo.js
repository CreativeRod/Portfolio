/*************************
Marking Items Completed
*************************/

// Check off specific todos by clicking / the second arguement tells up to listen for the li's in the UL
$("ul").on("click", "li", function() {
// If li is gray turn black e;se turn black
	$(this).toggleClass("completed");
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

/*************************
Deleting Items Via "X"
*************************/
/*************************
//Click on X to delete /
"Event bubbling: click event
bubbles up to parent elements"
occurs here, use work around
event.stopPropgation();
*************************/
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
	event.stopPropgation();
});

/*************************
Deleting Items Via "X"
*************************/
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabs todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a ne li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

/*************************
Form Toggle via "plus sign"
*************************/

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
