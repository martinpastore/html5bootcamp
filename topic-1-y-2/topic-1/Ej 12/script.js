function matrix(){
	$("#txtName").empty();
	$("#txtAge").empty();

	var matriz = new Array(2);
	matriz[0] = document.getElementById("txtName").value;
	matriz[1] = document.getElementById("txtAge").value;
	//var name = 
	//var age = document.getElementById("txtAge").value;

	if(!document.getElementById("table")){
		var table = document.createElement('table');
		table.id = "table"
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var td = document.createElement("td");
		tr.appendChild(td);
		var texto1 = document.createTextNode(matriz[0]);
		var texto2 = document.createTextNode(matriz[1]);
		td.appendChild(texto1);
		var td1 = document.createElement("td");
		tr.appendChild(td1);
		td1.appendChild(texto2);
		document.getElementById("tab").appendChild(table);
	}else{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		tr.appendChild(td);
		var texto1 = document.createTextNode(matriz[0]);
		var texto2 = document.createTextNode(matriz[1]);
		td.appendChild(texto1);
		var td1 = document.createElement("td");
		tr.appendChild(td1);
		td1.appendChild(texto2);
		document.getElementById("table").appendChild(tr);
	}
	

}