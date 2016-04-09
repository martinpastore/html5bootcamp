var Movie = (function(){
	this.title;
	this.year;
	this.duration;
});

Movie.prototype.play = function(){

};
Movie.prototype.pause = function(){

};
Movie.prototype.resume = function(){

};
var EventEmmitter = (function(){
/*fijense en la doc de trigger() on() live() off() y vean que basicamente les estan pidiendo que enmascaren esas funciones*/	
});

EventEmmitter.prototype.on = $(document).ready(function(){
	$("#btnMovie1").on("click", function(){
		$("#sw7").removeClass("hide");
		$("#hp7").addClass("hide");
		$("#im3").addClass("hide");
	});
	$("#btnMovie2").on("click", function(){
		$("#sw7").addClass("hide");
		$("#hp7").removeClass("hide");
		$("#im3").addClass("hide");
	});
	$("#btnMovie3").on("click", function(){
		$("#sw7").addClass("hide");
		$("#hp7").addClass("hide");
		$("#im3").removeClass("hide");
	});
	/*esta funcion lo que hace es enmascarar un listener (vean que es un listener)
	lo que va a hacer es tener un callback que hace algo cuando un evento X se trigguerea*/
});
EventEmmitter.prototype.emit = $(document).ready(function(){
$("#showMov").click(function(){	
	$("input").trigger("select");
	});
$("input").select(function(){
	$("#cart").removeClass("hide");
	});
/*2) emit es la funcion que triggerea los eventos*/
});
EventEmmitter.prototype.off = $(document).ready(function(){
	$("sw7").off("click")
	$("hp7").off("click")
	$("im3").off("click")
/*off borra todos los listeners de los eventos que le pasas*/
});


