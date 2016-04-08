function matrix(){
	$("#txtName").empty();
	$("#txtAge").empty();
	var name = document.getElementById("txtName").value;
	var age = document.getElementById("txtAge").value;

	if(!document.getElementById("table")){
		var table = document.createElement('table');
		table.id = "table"
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var td = document.createElement("td");
		tr.appendChild(td);
		var texto1 = document.createTextNode(name);
		var texto2 = document.createTextNode(age);
		td.appendChild(texto1);
		var td1 = document.createElement("td");
		tr.appendChild(td1);
		td1.appendChild(texto2);
		document.getElementById("tab").appendChild(table);
	}else{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		tr.appendChild(td);
		var texto1 = document.createTextNode(name);
		var texto2 = document.createTextNode(age);
		td.appendChild(texto1);
		var td1 = document.createElement("td");
		tr.appendChild(td1);
		td1.appendChild(texto2);
		document.getElementById("table").appendChild(tr);
	}
	

}