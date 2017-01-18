var app = angular.module('ngCodeQs');

app.factory('questionService', function($http) {
	
	var service = {};
	var vm = this;	


service.createQuestion=function(uid, cid){
		return $http({
		method : "POST",
		data : {},
		url : 'api/user/'+uid+'/category/'+cid+'/question',
//		headers : {
//		    'Content-Type' : 'application/json'
//		  }
	}) 
	};
	
	service.createAnswer=function(qid){
		return $http({
		method : "POST",
		data : {},
		url : 'api/question/'+qid+'/answer',
//		headers : {
//		    'Content-Type' : 'application/json'
//		  }
	}) 
	};
	
	return service;
});