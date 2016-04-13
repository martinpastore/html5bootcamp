var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('MoviesCtrl', ['$scope', function($scope){
	$scope.movie = {};
	$scope.movie.name = [{
		"name": "The Avengers"
	},{
		"name": "Star Wars 7"
	},{
		"name": "Harry Potter 7"
	},{
		"name": "Fast and Furious 7"
	},{
		"name": "The Hunger Games"
	}];
}]);

moviesApp.controller('AvenCtrl', ['$scope' ,'$http', function($scope, $html){
	$scope.details= {};
	$scope.details= {
		"actor1": "Robert Downey Jr.",
		"actor2": "Chris Evans",
		"actor3": "Scarlett Johansson",
		"premiere": "26 de abril de 2012"
	};
}]);
moviesApp.controller('StarCtrl', ['$scope' ,'$http', function($scope, $html){
	$scope.details= {};
	$scope.details= {
		"actor1": "Mark Hamill",
		"actor2": "Adam Driver",
		"actor3": "Harrison Ford",
		"premiere": "17 de diciembre de 2015"
	};
}]);
moviesApp.controller('HarryCtrl', ['$scope' ,'$http', function($scope, $html){
	$scope.details= {};
	$scope.details= {
		"actor1": "Daniel Radcliffe",
		"actor2": "Emma Watson",
		"actor3": "Rupert Grint",
		"premiere": "7 de Julio de 2011"
	};
}]);
moviesApp.controller('FastCtrl', ['$scope' ,'$http', function($scope, $html){
	$scope.details= {};
	$scope.details= {
		"actor1": "Paul Walker",
		"actor2": "Vin Diesel",
		"actor3": "Dwayne Johnson",
		"premiere": "2 de abril de 2015"
	};
}]);
moviesApp.controller('HungerCtrl', ['$scope' ,'$http', function($scope, $html){
	$scope.details= {};
	$scope.details= {
		"actor1": "Jennifer Lawrence",
		"actor2": "Josh Hutcherson",
		"actor3": "Liam Hemsworth",
		"premiere": "4 de noviembre de 2015"
	};
}]);

moviesApp.config(MainCtrl, ['ngRoute', function($routeProvider){
	$routeProvider
	.when('/avengers', {
		templateUrl: "view/avengers.html",
		controller: 'AvenCtrl' 
	})
	.when('/sw7', {
		templateUrl: "view/sw7.html",
		controller: 'StarCtrl'
	})
	.when('/hp7', {
		templateUrl: "view/hp7.html",
		controller: 'HarryCtrl'
	})
	.when('/faf7', {
		templateUrl: "view/faf7.html",
		controller: 'FastCtrl'
	})
	.when('/hunger', {
		templateUrl: "view/hunger.html",
		controller: 'HungerCtrl'
	})
	.otherwirse({
		redirectTo: '/'
	});
}]);