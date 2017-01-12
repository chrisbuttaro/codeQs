angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	service.createTest = function() {
		return $http({
			method : "GET",
			url : 'api/createTest'
		})
		.then(function(response) {
			console.log(response)
			$location.path('/test')

		})
	};

	return service;
});