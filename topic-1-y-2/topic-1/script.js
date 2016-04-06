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
			$("#hidden").html(req.responseText);
		}else if (req.status==404){
			document.write("404 NOT FOUND");
		}else{
			document.write("500 INTERNAL SERVER ERROR");
		}
	}
	}
}

	function ajaxCall(){
		var config = new Object();
		config.url = document.getElementById("uri").value;

		var call = $.ajax({
			url: config.url,
			type: 'GET',
			dataType: 'html',
			success: function(responseText){
				$("#hidden").html(responseText);
			}

		});
	}

