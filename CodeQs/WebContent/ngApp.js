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
    	template: '<nav-component></nav-component><results-component></results-component>'
    })
    .when('/test/:catId',{
    	template: '<nav-component></nav-component><test-component questions=$resolve.myData></test-component>',
    	
    	resolve : {
    	       
            myData : function(testService, authenticationService, $route) {
              var catId = $route.current.params.catId;

              return testService.getQuestionsByCategory(catId)
              .then(function(resQuestions){
//            	  console.log(resQuestions)
                testService.createExam(authenticationService.currentUser().id, catId)
     		     .then(function(resExam){
     		    	 testService.examId=resExam.data.id; 
//     		    	 testService.categoryId = catId;
//     		    	console.log("new exam data "+resExam.data.id);
//     	 	         console.log(resQuestions.data.length)
     	 	        for (var i=0; i<resQuestions.data.length; i++){
     	 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
     	 			    	}
     	 	       console.log(resQuestions.data);
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
            	  console.log(resQuestions + '******************************')
                testService.createExam(authenticationService.currentUser().id, catId)
     		     .then(function(resExam){
     		    	 testService.examId=resExam.data.id; 
     		    	 testService.categoryId = catId;
     		    	console.log("new exam data "+resExam.data.id);
     	 	         console.log(resQuestions.data.length)
     	 	        for (var i=0; i<resQuestions.data.length; i++){
     	 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
     	 			  console.log(resQuestions.data);
     	 			    	}
     	 	       console.log(resQuestions.data[1].answers);
     		    });
            	  return resQuestions.data;
              });
            }
          }
    })
	});
