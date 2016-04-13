var moviesApp = angular.module('moviesApp', ["ngRoute"]);

moviesApp.controller('MoviesCtrl', ['$scope', function($scope){
	$scope.movie = {};
	$scope.movie.details = [{
		"name": "The Avengers",
		"actor1": "Robert Downey Jr.",
		"actor2": "Chris Evans",
		"actor3": "Scarlett Johansson",
		"actor4": "Mark Ruffalo",
		"actor5": "Chris Hemsworth",
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
}]);


moviesApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
			$scope.Movies = {};

			$scope.Movies.name = '';

			$http({
				method: 'GET',
				url: ''

			})
			.success(function(data){
				$scope.movie.name = data.movie.name;
				$scope.movie.actor1 = data.movie.actor1;
				$scope.movie.actor2 = data.movie.actor2;
				$scope.movie.actor3 = data.movie.actor3;
				$scope.movie.premiere = data.movie.premiere;
			});	
	}]);

moviesApp.config('MainCtrl', ['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "view/avengers.html"
	})
	.when('/', {
		templateUrl: "view/sw7.html"
	})
	.when('/', {
		templateUrl: "view/hp7.html"
	})
	.when('/', {
		templateUrl: "view/faf7.html"
	})
	.when('/', {
		templateUrl: "view/hunger.html"
	})
	.otherwirse({
		redirectTo: '/'
	});
}]);