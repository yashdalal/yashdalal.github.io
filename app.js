function parse(){
	var x = document.getElementById("text");//.value.split(" ");
	//var output;
	/*for (var i = 0; i<x.length; i++){
		var word = (x[i] == "text") ? "bleeeh" : x[i];
		console.log(word);
		output += word + " ";
	}*/


	var y = document.getElementById("demo");
	var z = x.value.split(" ");
	var result;
	for (var i = 0; i < z.length; i++){
		var wordText = z[i];
		if(wordText.length > 7){
			var wordLink = wordText.link("https://en.wikipedia.org/wiki/"+wordText);
			result += wordLink + " ";
		}
		else{
			result += wordText + " ";
		}
	}
	y.innerHTML = result;
	//var data = $.csv.toObjects(csv);
}


function apiRequest(){
	var xhr = new XMLHttpRequest();

}

//$(document).ready(function() {
//	$("#button").click(function(){
//		var text = $("text").val();
//		$("#demo").text(text);		
//	});
//});	
