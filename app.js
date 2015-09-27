function apiCall() {
	var apiKeyMedDict = "aeee5df0-8558-4f8d-8d5d-83d30f069852";
	var query = document.getElementById("search");
	var url = "http://www.dictionaryapi.com/api/v1/references/medical/xml/"+ query.value +"?key="+apiKeyMedDict;
	var xhr = createCORSRequest('GET', url);
	xhr.setRequestHeader('Content-Type', 'text/xml');
	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	if (!xhr) {
    	alert('CORS not supported');
    	return;
  	}
	//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onload = function() {
	    var text = xhr.responseText;
	    var title = getTitle(text);
	    console.log(text);
	    alert('Response from CORS request to ' + url + ': ' + title);
	};

	xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
	};

	xhr.send();
}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		xhr.open(method, url, true);
	} else {
		xhr = null;
	}
	return xhr;
}

function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}



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
