function parse(){
	var x = document.getElementById("text").value.split(" ");
	var output;
	for (var i = 0; i<x.length; i++){
		var word = (x[i] == "text") ? "bleeeh" : x[i];
		output += word + " ";
	}
	document.getElementById("demo").innerHTML= output;
}


//$(document).ready(function() {
//	$("#button").click(function(){
//		var text = $("text").val();
//		$("#demo").text(text);		
//	});
//});	
