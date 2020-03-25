// check of specific todo's by clicking 
$("li").click(function(){

	// =====Boolean logic way to toggle click output ========
	// 	if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	$(this).toggleClass("compleated");
	//or
	//$(this).css("color", "gray")
	//$(this).css("text-decoration", "line-through")
});

// Click on X to delete toDo

$("span").click(function(event){

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});