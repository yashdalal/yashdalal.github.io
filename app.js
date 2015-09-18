function parse(){
	var x = document.getElementById("text").value.split(" ");
	for (var i = 0; i<x.length; i++){
		if (x[i] == "text"){
			x[i] = "bleeeh";
		}	
	}
	document.getElementById("demo").innerHTML= x;
}


//$(document).ready(function() {
//	$("#button").click(function(){
//		var text = $("text").val();
//		$("#demo").text(text);		
//	});
//});	
