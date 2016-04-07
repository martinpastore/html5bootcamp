function ajaxCall(){
		var data = "q='JavaScript'";


		var call = $.ajax({
			url: "https://api.github.com/search/repositories",
			type: 'GET',
			data: data,
			dataType: 'html',
			success: function(responseText){

			},
			error: function(responseText){
				console.log(responseText);
			}
		});
	}


