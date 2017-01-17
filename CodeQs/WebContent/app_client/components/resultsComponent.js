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
	    <div class="container">
	    	<h1>Test Results</h1>
		    <h4>Score: {{$ctrl.getScore()}}%</h4>
		    <div ng-repeat="examQ in $ctrl.examQs" ng-init="outerIndex = $index">
		        <b>{{$index+1}}. {{examQ.question.question}}</b>
		        <div ng-if="!examQ.right" ng-init="$ctrl.updateCounter()"></div>
		        <div ng-class="examQ.right ? '.alert alert-success' : '.alert alert-danger'">
		            <div ng-repeat="answer in examQ.question.answers">
		                {{answer.answer}}
		            </div>
		        </div>
		    </div>
		</div>
	 `
	  }); 