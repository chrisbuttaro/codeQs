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
	 	    	if(!isNaN(vm.score)){
	 	    	testService.updateScore(testService.examId, vm.score); 
	 	    	}
	 	    	return vm.score; 
	 	    }
	 	   vm.getScore();
	 	    
	 	    
	 	    vm.getResultsByExamId = function(id){
	 	        resultsService.getResultsByExamId(id)
	 	          .then(function(response){
	 	            vm.examQs = response.data;
	 	          });
	 	    }
	 	    vm.getResultsByExamId(testService.examId);
	 
	   },
	      
	  
	    template : `
	     <div class="container">
            <h1>Test Results</h1>
            <h4>Score: {{$ctrl.getScore()}}%</h4>
            <div ng-repeat="examQ in $ctrl.examQs | orderBy:'question.id'" ng-init="outerIndex = $index">
                <b>{{$index+1}}. {{examQ.question.question}}</b>
                <div ng-if="!examQ.right" ng-init="$ctrl.updateCounter()"></div>
                <div ng-class="examQ.right ? '.alert alert-success' : '.alert alert-danger'">
                    <div ng-repeat="answer in examQ.question.answers">
                        {{answer.answer}}
                    </div>
                </div>
            </div>
        </div>
	    	 
	 `,
	 bindings : {
	   eid : '<'
	   }
	  }); 