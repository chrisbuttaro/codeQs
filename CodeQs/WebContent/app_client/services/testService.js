angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	
	
	service.createExam=function(uid){
		return $http({
			method : "POST",
			data : {},
			url : 'api/user/'+uid+'/exams',
			headers : {
			    'Content-Type' : 'application/json'
			  }
		
		}) 
	}
	
	service.createExamQ=function(eid, qid){
		return $http({
		method : "POST",
		data : {},
		url : 'api/Exam/'+eid+'/Question/'+qid+'/ExamQuestions',
		headers : {
		    'Content-Type' : 'application/json'
		  }
	}) 
	};
	
	service.getQuestionsByCategory = function(cid) {
		return $http({
			method : "GET",
			url : 'api/category/' + cid + '/questions'
		
		}) 
	};

	return service;
});