var app = angular.module('ngCodeQs');

app.factory('questionService', function($http) {
	
	var service = {};
	var vm = this;	

	service.createQuestion=function(quest, uid, cid){
		return $http({
			method : "POST",
			data : quest,
			url : 'api/user/'+uid+'/category/'+cid+'/question',
			headers : {
			    'Content-Type' : 'application/json'
			}
	    }) 
	};
	
	service.createAnswer=function(qid){
		return $http({
			method : "POST",
			data : {},
			url : 'api/question/'+qid+'/answer',
		}) 
	};
	return service;
});