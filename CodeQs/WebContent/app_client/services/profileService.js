var app = angular.module('ngCodeQs');

app.factory('profileService', function($http) {
	
	var service = {};
	var vm = this;
	vm.profileId;
	
	
	service.getAllExamsTaken = function(uid){
		console.log(uid);
		return $http({
			method : 'GET',
			url : 'api/user/' + uid +'/exam'
		})
	};
	
	service.getExamsForUser = function(uid){
		return $http({
			method : 'GET',
			url : 'api/user/' + uid + '/exams' 
		})
	};
	

	
	return service;
});