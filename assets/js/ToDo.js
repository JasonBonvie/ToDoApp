// check of specific todo's by clicking 
$("ul").on("click", "li",function(){

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

$("ul").on("click", "span", function(event){

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		 var todoText = $(this).val();
		 $(this).val("");

		 // create a new li and append 

		 $("ul").append('<li><span><i class="fas fa-minus-circle"></i> </span>' +  todoText + "</li>");
	}
});

$(".fa-arrow-alt-circle-down").click(function(){
	$("input[type='text'] ").fadeToggle();
})