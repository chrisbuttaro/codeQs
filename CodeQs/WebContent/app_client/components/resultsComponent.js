var app = angular.module("ngCodeQs");

app.component('resultsComponent', {
	  controller : function(resultsService, testService, authenticationService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.examQs=[]
	 	    
	 	    vm.getResultsByExamId = function(){
	 	        resultsService.getResultsByExamId(testService.examId)
	 	          .then(function(response){
	 	            vm.examQs = response.data;
	 	   	    console.log(response.data);
	 	          });
	 	     
	 	    }
	 	    vm.getResultsByExamId();
	 
	   },
	      
	    
	  
	    template : `
	      
	    	<table>
       <tr ng-repeat="examQ in $ctrl.examQs" ng-init="outerIndex = $index">
         <td><b>{{$index+1}}. {{examQ.question.question}}</b><div ng-if=!examQ.right>X</div>
          <div ng-repeat="answer in examQ.question.answers">
          <div>{{answer.answer}}</div>
          </div>
           <br>
       </tr>
     </table>
	 `
	  }); 