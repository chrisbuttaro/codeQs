var app = angular.module('ngCodeQs');

app.factory('profileService', function($http) {
	
	service.getResults = function(){
		return $http({
			method : 'GET',
			url : 'api/profile/'
		})
	};
});