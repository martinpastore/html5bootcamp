var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('MainCtrl', ['$scope', function($scope){
	$scope.movie1 = {};
	$scope.movie1.details = {
		"name": "The Avengers",
		"actors": "Bob Marley xD"
	};
	$scope.movie2 = {};
	$scope.movie2.details = {

	};
	$scope.movie3 = {};
	$scope.movie3.details = {

	};
	$scope.movie4 = {};
	$scope.movie4.details = {

	};
	$scope.movie5 = {};
	$scope.movie5.details = {

	};
}]);