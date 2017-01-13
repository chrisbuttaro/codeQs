angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	service.getQuestionsByCategory = function() {
		return $http({
			method : "GET",
			url : 'api/category/1/questions'
		
		}) 
	};

	return service;
});