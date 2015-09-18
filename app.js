function parse(){
	var x = document.getElementById("text");
	document.getElementById("demo").innerHTML= x;
}


$(document).ready(function() {
	$("#text").on("input", function(){
		var text = $("text").val();
		$("#demo").val(text);			
	});
});	
