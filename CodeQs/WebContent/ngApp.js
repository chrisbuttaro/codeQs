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
    .when('/test/:id',{
    	template: '<nav-component></nav-component><test-component questions=$resolve.myData></test-component>',
    	
    	resolve : {
    	       
            myData : function(testService, authenticationService, $route) {
              var id = $route.current.params.id;

              return testService.getQuestionsByCategory(id)
              .then(function(resQuestions){
            	  console.log(resQuestions)
                testService.createExam(authenticationService.currentUser().id)
     		     .then(function(resExam){
     		    	console.log("new exam data "+resExam.data.id);
     	 	         console.log(resQuestions.data.length)
     	 	        for (var i=0; i<resQuestions.data.length; i++){
     	 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
     	 			    	}
     	 	       console.log(resQuestions.data[1].answers);
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
    	template: '<nav-component></nav-component><wrong-list-component></wrong-list-component>'
    })
	});
