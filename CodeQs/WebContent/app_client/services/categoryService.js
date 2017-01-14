angular.module('ngCodeQs').factory('categoryService', function($http) {
	var service = {};
	var vm=this;
	vm.categoryId;
	
	service.getCategories = function() {
		return $http({
			method : "GET",
			url : 'api/category'
		}) 
	};

	return service;
});