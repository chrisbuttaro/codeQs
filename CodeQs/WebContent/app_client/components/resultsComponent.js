var app = angular.module("ngCodeQs");

app.component('resultsComponent', {
	  controller : function(resultsService, testService, authenticationService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.examQs=[]
	 	    
	 	    vm.counter=0;
	 	    
	 	    vm.updateCounter=function(){
	 	    	vm.counter++; 
	 	    }
	 	    
	 	  
	 	    vm.getScore=function(){
	 	    	vm.score=((vm.examQs.length-vm.counter)/vm.examQs.length)*100;
	 	    	return vm.score; 
	 	    }
	 	    
	 	    vm.getResultsByExamId = function(){
	 	        resultsService.getResultsByExamId(testService.examId)
	 	          .then(function(response){
	 	            vm.examQs = response.data;
	 	             //vm.getScore; 
	 	          });
	 	    }
	 	    vm.getResultsByExamId();
	 
	   },
	      
	  
	    template : `

	     <div>Score: {{ $ctrl.getScore()}}%</div>
	    	<table>
       <tr ng-repeat="examQ in $ctrl.examQs" ng-init="outerIndex = $index">
         <td><b>{{$index+1}}. {{examQ.question.question}}</b><div ng-if=!examQ.right ng-init="$ctrl.updateCounter()">X</div>
          <div ng-repeat="answer in examQ.question.answers">
          <div>{{answer.answer}}</div>
          </div>
           <br>
       </tr>
     </table>
	    	 
	 `
	  }); 