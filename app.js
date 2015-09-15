$( document ).ready(function() {
	$('#text').on('input', function(){
		var text = $('text').val();
		$('#demo').innerHTML = text;			
	});
});	
