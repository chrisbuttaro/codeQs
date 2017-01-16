var app = angular.module('ngCodeQs');

app.factory('wrongListService', function($http) {
	
	var service = {};
	var vm = this;
	
	service.getWrongListByUser = function(uid){
		console.log(uid);
		return $http({
			method : 'GET',
			url : 'user/' + uid + '/wrongList'
		})
	};
	
	return service;
});