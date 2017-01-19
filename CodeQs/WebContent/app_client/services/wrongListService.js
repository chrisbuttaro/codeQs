var app = angular.module('ngCodeQs');

app.factory('wrongListService', function($http) {
	
	var service = {};
	var vm = this;
	
	service.getWrongListByUser = function(uid, cid){
		return $http({
			method : 'GET',
			url : 'api/user/' + uid + '/category/' + cid + '/wrongList'
		})
	};
	return service;
});