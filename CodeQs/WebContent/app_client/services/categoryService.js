angular.module('ngCodeQs').factory('categoryService', function($http) {
	var service = {};
	
	service.getCategories = function() {
		return $http({
			method : "GET",
			url : 'api/category'
		}) 
	};

	return service;
});