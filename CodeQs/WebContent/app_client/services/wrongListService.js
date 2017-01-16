var app = angular.module('ngCodeQs');

app.factory('wrongListService', function($http) {
	
	var service = {};
	var vm = this;
	
	service.getWrongListByUser = function(uid){
		console.log(uid);
		return $http({
			method : 'GET',
			url : 'user/' + uid + '/category/' + cid + 'wrongList'
		})
	};
	
	return service;
});