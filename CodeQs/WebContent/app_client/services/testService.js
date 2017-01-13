angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	service.getQuestions = function() {
		return $http({
			method : "GET",
			url : 'api/exams',
			header : {
				'Content-Type': 'application/json'
			}
		}) 
	};

	return service;
});