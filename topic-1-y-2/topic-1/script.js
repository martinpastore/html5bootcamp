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
			document.write(req.responseText);
		}else if (req.status==404){
			document.write("404 NOT FOUND");
		}else{
			document.write("500 INTERNAL SERVER ERROR");
		}
	}
	}
}
/*
	function ajaxCall(){
		var req = new XMLHttpRequest();
		var url = document.getElementById("uri").value;

	req.onreadystatechange = showAjax;
	$.ajax({
		url: url;
		type: "GET"
		async: false;
		});

	function showAjax(){
	if(req.readyState==4){
		if(req.status==200){
			document.write(req.responseText);
		}else if (req.status==404){
			document.write("404 NOT FOUND");
		}else{
			document.write("500 INTERNAL SERVER ERROR");
		}
	}
	}
}
*/