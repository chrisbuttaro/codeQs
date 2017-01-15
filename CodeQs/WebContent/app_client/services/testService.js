angular.module('ngCodeQs').factory('testService', function($http, $location) {
	var service = {};
	var vm=this;
	vm.examId;
	
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
	
	service.updateTestQ=function(ansCorrect, qId, eId){
		return $http({
			method : "PUT",
			url : 'api/Exam/'+eId+'/Question/'+qId+'/right/'+ansCorrect+'/ExamQuestions'
		
		
		}) 
	}

	return service;
});