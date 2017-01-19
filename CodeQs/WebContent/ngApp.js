angular.module("ngCodeQs", ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
    .when('/',{
    	template: '<login-component></login-component>'
    })
    .when('/register',{
    	template: '<registration-component></registration-component>'
    })
    .when('/category',{
    	//:id
    	template: '<nav-component></nav-component><category-component></category-component>'
    }).when('/results',{
    	template: '<nav-component></nav-component><results-component eid="$resolve.eid"></results-component>',
    	resolve : {
    		eid : function(testService) {
    			var id = testService.ExamId;
    			return {'id' : id};
    		}
    	}
    })
    .when('/test/:catId',{
    	template: '<nav-component></nav-component><test-component questions=$resolve.myData></test-component>',
    	
    	resolve : {
    	       
            myData : function(testService, authenticationService, $route) {
              var catId = $route.current.params.catId;

              return testService.getQuestionsByCategory(catId)
              .then(function(resQuestions){
                testService.createExam(authenticationService.currentUser().id, catId)
     		     .then(function(resExam){
     		    	 testService.examId=resExam.data.id; 

     	 	        for (var i=0; i<resQuestions.data.length; i++){
     	 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
     	 			    	}
     		    });
            	  return resQuestions.data;
              });
            }
          }
    })
    
    .when('/profile',{
    	template: '<nav-component></nav-component><profile-component></profile-component>'
    })
    .when('/wrongList',{
    	template: '<nav-component></nav-component><wrong-list-component></wrong-list-component>',

    })
    .when('/wrongList/:catId', {
    	template: '<nav-component></nav-component><test-component questions=$resolve.myData></test-component>',
    	
    	resolve : {
  	       
            myData : function(testService, wrongListService, authenticationService, $route) {
              var catId = $route.current.params.catId;

              return wrongListService.getWrongListByUser(authenticationService.currentUser().id, catId)
              .then(function(resQuestions){
                testService.createExam(authenticationService.currentUser().id, catId)
     		     .then(function(resExam){
     		    	 testService.examId=resExam.data.id; 
     		    	 testService.categoryId = catId;
     	 	         if (resQuestions.data.length === 0) {
     	 	        	 return [];
     	 	         }
     	 	        for (var i=0; i<resQuestions.data.length; i++){
     	 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
     	 			    	}
     		    });
            	  return resQuestions.data;
              });
            }
          }
    })
    .when('/question',{
    	template: '<nav-component></nav-component><question-component></question-component>',
    })
});
