function showSection(){
	document.getElementById("hidden").style.visibility = "visible";
}
function returnFunction(){
	var req = new XMLHttpRequest();

	req.onreadystatechange = showContain;
	req.open('GET', 'http://api.icndb.com/jokes/random', true);
	req.send(null)


	function showContain(){
	if(req.readyState ==4){
		if(req.status==200){
			$("#ajax").html(req.responseText);
		}else if (req.status==404){
			$('section').addClass("error");
			//document.write("404 NOT FOUND");
		}else{
			$('section').addClass("error");
			//document.write("500 INTERNAL SERVER ERROR");			
		}
	}
	}
}

	function ajaxCall(){
		var config = new Object();
		config.url = document.getElementById("uri").value;
		var promise = new Promise(function(resolve,reject){
		var call = $.ajax({
			url: config.url,
			type: 'GET',
			dataType: 'html',
			success: function(responseText){
				Promise.resolve($("#ajax").html(responseText));
			},
			error: function(){
				$('div').addClass("error");
				Promise.reject($("#ajax").html("ERROR NAME NOT RESOLVED"));
			}
		})
	})

		promise.then(function(result){
			document.write(result);
		}, function(error){
			alert(error);
		});
	}

