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
	   $scope.greeting = $scope.movie.details[index];
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