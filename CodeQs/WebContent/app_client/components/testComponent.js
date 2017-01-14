var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
	 controller : function(categoryService,testService, authenticationService) {
		    var vm = this;
		    vm.currentUser=authenticationService.currentUser;
		    vm.data=[]
		    vm.exam={};
		   
		  
		    vm.Category = function(){
		    	testService.getQuestionsByCategory(categoryService.categoryId)
	 	          .then(function(resQuestions){
	 	        	  console.log(resQuestions)
	 	            vm.data = resQuestions.data;
	 	            testService.createExam(vm.currentUser().id)
				     .then(function(resExam){
				    	console.log("new exam data "+resExam.data.id);
				    	console.log(vm.data);
			 	         console.log(vm.data.length)
			 	        for (var i=0; i<vm.data.length; i++){
			 	        	console.log("exam id "+resExam.data.id+" Qids "+resQuestions.data[i].id)
			 			  testService.createExamQ(resExam.data.id, resQuestions.data[i].id);
			 			    	}
				    });
	 	          });
	 	    }
		    vm.Category();
		 	 }
		    ,

  template : `
    <h1>Test Component</h1>
    <br>
    <h1>exam id {{$ctrl.exam.id}}
	  <table>
       <tr>
         <th>Category</th>
       </tr>
       <tr ng-repeat="question in $ctrl.data">
         <td>{{question.question}}</td>
       </tr>
     </table>
	  `
	
});