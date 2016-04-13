var moviesApp = angular.module('moviesApp', ["ngResource"], ["ngRoute"]);
/*
moviesApp.controller('MainCtrl', ['$scope', function($scope){
	/*$scope.movie1 = {};
	$scope.movie1.details = {
		"name": "The Avengers",
		"actor1": "Robert Downey Jr.",
		"actor2": "Chris Evans",
		"actor3": "Scarlett Johansson",
		"actor4": "Mark Ruffalo",
		"actor5": "Chris Hemsworth",
		"premiere": "26 de abril de 2012"
	};
	$scope.movie2 = {};
	$scope.movie2.details = {
		"name": "Star Wars 7",
		"actor1": "Mark Hamill",
		"actor2": "Adam Driver",
		"actor3": "Harrison Ford",
		"premiere": "17 de diciembre de 2015"
	};
	$scope.movie3 = {};
	$scope.movie3.details = {
		"name": "Harry Potter 7",
		"actor1": "Daniel Radcliffe",
		"actor2": "Emma Watson",
		"actor3": "Rupert Grint",
		"premiere": "7 de Julio de 2011"
	};
	$scope.movie4 = {};
	$scope.movie4.details = {
		"name": "Fast and Furious 7",
		"actor1": "Paul Walker",
		"actor2": "Vin Diesel",
		"actor3": "Dwayne Johnson",
		"premiere": "2 de abril de 2015"
	};
	$scope.movie5 = {};
	$scope.movie5.details = {
		"name": "The Hunger Games",
		"actor1": "Jennifer Lawrence",
		"actor2": "Josh Hutcherson",
		"actor3": "Liam Hemsworth",
		"premiere": "4 de noviembre de 2015"
	};
}]);
}*/

moviesApp.controller('MainCtrl', function($http, $scope, dataResource){
			
			$http.get("js/mov.json").success(function(data){
				$scope.movie = data;
			});
			$scope.datos = dataResource.get();
	});

moviesApp.factory("dataResource", function ($resource) {
    return $resource("js/data.json", { get: { method: "GET", isArray: true }
    });
});
	//boton
	/*moviesApp.directive('customButton', function(){
		return{

		}
	});*/