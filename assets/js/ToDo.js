// check of specific todo's by clicking 

$("li").click(function(){
	$(this).css({
		color: "gray";
		textDecoration: "line-through";
	})

	
	//or
	//$(this).css("color", "gray")
	//$(this).css("text-decoration", "line-through")
})