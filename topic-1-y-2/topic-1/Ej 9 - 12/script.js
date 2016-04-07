function ajaxCall(){
		var config = new Object();
		config.url = "https://api.github.com/search/repositories";
		var data = "q='JavaScript'";


		var call = $.ajax({
			url: config.url,
			type: 'GET',
			data: data,
			dataType: 'html',
			success: function(responseText){
				document.write(responseText);
			},
			error: function(responseText){
				document.write(responseText);
			}
		});
	}