var app = angular.module('ngCodeQs');

app.factory('resultsService', function($http) {

    var service = {};

	service.getResultsByExamId = function(eid) {
	    return $http({
	      method : 'GET',
	      url : 'api/exams/' + eid + '/results/'
	    })	  
	};
	return service;
});