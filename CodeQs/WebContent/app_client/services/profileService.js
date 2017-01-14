var app = angular.module('ngCodeQs');

app.factory('profileService', function($http) {
	
	var service = {};
	var vm = this;
	vm.profileId;
	
	
	service.getAllExamsTaken = function(eid){
		console.log("in profile, eid =" + eid)
		return $http({
			method : 'GET',
			url : 'api/profile/'
		})
	};
	return service;
});