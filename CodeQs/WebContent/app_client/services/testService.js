angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	service.getQuestionsByCategory = function(cid) {
		return $http({
			method : "GET",
			url : 'api/category/' + cid + '/questions'
		
		}) 
	};

	return service;
});