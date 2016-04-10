var EventEmmitter = (function(movie){
	movie = new Movie();
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
var Movie = (function(title, year, duration){
	this.title = title;
	this.year = year;
	this.duration = duration;
	this.act = [];
});

var starWars = new Movie('Star Wars VII', 2016, 120);
var harryPotter = new Movie('Harry Potter 7', 2013, 125);
var ironman = new Movie('IronMan 3', 2015, 132);

Movie.prototype.play = function(){
	$("#status").html("PLAY");
};
Movie.prototype.pause = function(){
	$("#status").html("PAUSE");
};
Movie.prototype.resume = function(){
	$("#status").html("RESUME");
};

var Logger = (function(){

});

Logger.prototype.log = $(document).ready(function(){
$("#btnMovie1").click(function(){
	movie = starWars;
});
$("#btnMovie2").click(function(){
	movie = harryPotter;
});
$("#btnMovie3").click(function(){
	movie = ironman;
});

  $("#btnPlay").click(function(){	
	if(movie != null){
		console.log(movie);
	}
  });
});

var info = new Logger();

EventEmmitter.prototype = new Movie();

var mov = new EventEmmitter();

//ej 5
/*
Movie.prototype.log = function(movie, act){
		console.log(mov);
};
*/


var Social = {
			share: function(friendName){
				friendName = document.getElementById("txtShare").value;
				$("#liShare").html("Share with " + friendName);
			},
			like: function(friendName){
				friendName = document.getElementById("txtShare").value;
				$("#liLike").html(friendName + " likes the Movie");
			}
}

var soc = Object.assign(Movie.prototype, Social);

var Actor = (function(full_name, age){
	this.full_name = full_name;
	this.age = age;
});

var act1 = new Actor("Scarlett Johansson", 32);
var act2 = new Actor("Ashton Kutcher", 38);
var act3 = new Actor("Emma Watson", 25);

Movie.prototype.addActor = function(act){
	this.act = act;
	console.log(this.act);
}




