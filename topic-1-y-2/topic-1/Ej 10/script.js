function searchRepo(){
		$("#full_name_list").empty();
		var data = "q=" + document.getElementById("txtFNL").value; 

		var call = $.ajax({
			url: "https://api.github.com/search/repositories",
			type: 'GET',
			data: data,
			dataType: 'json',
			success: function(data){
				$.each(data.items, function(i, items){
					$("#full_name_list").append(items.full_name + "</br>");
				});
			},
			error: function(responseText){
				document.write(responseText);
			}
		});
	}


