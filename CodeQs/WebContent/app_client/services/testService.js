angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	service.getQuestionsByCategory = function() {
		return $http({
			method : "GET",
			url : 'api/category/{id}/questions'
		
		}) 
	};

	return service;
});