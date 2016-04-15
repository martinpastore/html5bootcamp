var ind;
var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('MoviesCtrl', ['$scope', function($scope){
	$scope.movie = {};
	$scope.movie.details = [{
		"name": "The Avengers",
		"actor1": "Robert Downey Jr.",
		"actor2": "Chris Evans",
		"actor3": "Scarlett Johansson",
		"premiere": "26 de abril de 2012"
	},{
		"name": "Star Wars 7",
		"actor1": "Mark Hamill",
		"actor2": "Adam Driver",
		"actor3": "Harrison Ford",
		"premiere": "17 de diciembre de 2015"
	},{
		"name": "Harry Potter 7",
		"actor1": "Daniel Radcliffe",
		"actor2": "Emma Watson",
		"actor3": "Rupert Grint",
		"premiere": "7 de Julio de 2011"
	},{
		"name": "Fast and Furious 7",
		"actor1": "Paul Walker",
		"actor2": "Vin Diesel",
		"actor3": "Dwayne Johnson",
		"premiere": "2 de abril de 2015"
	},{
		"name": "The Hunger Games",
		"actor1": "Jennifer Lawrence",
		"actor2": "Josh Hutcherson",
		"actor3": "Liam Hemsworth",
		"premiere": "4 de noviembre de 2015"
	}];

	$scope.show = function(index){ 
	   $scope.greeting = $scope.movie.details[index].name + " - " + $scope.movie.details[index].actor1 + " - " + $scope.movie.details[index].actor2 + " - " + $scope.movie.details[index].actor3 + " - " + $scope.movie.details[index].premiere;
	}
	$scope.delete = function(index){
		var del = confirm('Delete movie?');
		if(del){
			$scope.movie.details.splice(index, 1);
			console.log($scope.movie.details[index]);
			$scope.greeting = "";
		}
	}
	$scope.add = function(){
		$scope.movie.details = [{
			"name" : document.getElementById("txtName").value,
			"actor1" : document.getElementById("txtActor1").value,
			"actor2" : document.getElementById("txtActor2").value,
			"actor3" : document.getElementById("txtActor3").value,
			"premiere" : document.getElementById("txtPremiere").value
		}];
		for (var i = 0; i < $scope.movie.details.length; i++) {
			if($scope.movie.details[i] == null){
				$scope.movie.details.push($scope.movie.details);
			}
		};	
	}

}]);
/*
	moviesApp.directive('dir', function(){
	return{
			restric: 'E',
			template: '<li ng-repeat="mov in movie.details">'+
					   '{{ mov.actor1 }} <br/>'+
			           '{{ mov.actor2 }} <br/>'+
			           '{{ mov.actor3 }} <br/>'+
			           '{{ mov.premiere }} <br/>'+
			       	   '</li>',
			controller: ['$scope', function($scope){
				$('#show').click(function(index){
					scope.movie.details = $scope.movie.details[index]
				});
			}],       	     
		};
});			
*/