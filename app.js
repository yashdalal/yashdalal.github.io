

function apiCall() {
	//abbreviations API
	var uid = "4373";
    var tokenid = "S18j5J0VQ5rKxiv0";
    var term = document.getElementById("search");
	var abbrUrl = "http://www.stands4.com/services/v2/abbr.php?uid=" + uid + "&tokenid=" + tokenid + "&term="+term.value;

	//var apiKeyMedDict = "aeee5df0-8558-4f8d-8d5d-83d30f069852";
	//var query = document.getElementById("search");
	//var url = "http://www.dictionaryapi.com/api/v1/references/medical/xml/"+ query.value +"?key="+apiKeyMedDict;
	var xhr = createCORSRequest('GET', abbrUrl);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	if (!xhr) {
    	alert('CORS not supported');
    	return;
  	}

	xhr.onload = function() {
	    var xmlObj = xhr.responseXML;
	    var result = xmlObj.getElementsByTagName("result")[0];
	    var definition = result.getElementsByTagName("definition")[0];
	    console.log(definition.textContent);
	};

	xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
	};

	xhr.send();
}

function testCSV(){
	var csvString = $.ajax({
            url : "word_frequency.csv",
            dataType: "text/csv",
            success : function (data) {
                alert("got here");
            }
        });
	console.log(csvString);
	//var x = "word_frequency.csv"+","+ "asas";
	//var music = $.csv.toObjects(x);
	//console.log(music);
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
