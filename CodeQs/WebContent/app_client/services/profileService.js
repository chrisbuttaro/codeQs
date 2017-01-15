var app = angular.module('ngCodeQs');

app.factory('profileService', function($http) {
	
	var service = {};
	var vm = this;
	vm.profileId;
	
	
	service.getAllExamsTaken = function(uid, cid){
		return $http({
			method : 'GET',
			url : 'api/user/' + uid + '/category/' + cid + '/exam'
		})
	};
	
	return service;
});