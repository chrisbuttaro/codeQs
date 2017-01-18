var app = angular.module("ngCodeQs");

app.component('resultsComponent', {
	  controller : function(resultsService, testService, authenticationService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.examQs=[]
	 	    
	 	    vm.counter=0;
	 	    vm.examId=testService.examId;
	 	    vm.score;
	 	    
	 	    
	 	    
	 	   
	 	   
	 	    
	 	    
	 	    vm.getResultsByExamId = function(id){
	 	        resultsService.getResultsByExamId(id)
	 	          .then(function(response){
	 	            vm.examQs = response.data;
	 	            for(var i=0; i<vm.examQs.length; i++){
	 	            	if(!vm.examQs[i].right){
	 	            		vm.counter++; 
	 	            	}
	 	            }
	 	           vm.score=((vm.examQs.length-vm.counter)/vm.examQs.length)*100;
		 	       testService.updateScore(vm.examId, vm.score); 
	 	          });
	 	    }
	 	   vm.getResultsByExamId(vm.examId);
	 
	   },
	      
	  
	    template : `
	     <div class="container">
            <h1>Test Results</h1>
            <h4>Score: {{$ctrl.score}} %</h4>
            <div ng-repeat="examQ in $ctrl.examQs | orderBy:'question.id'" ng-init="outerIndex = $index">
                <b>{{$index+1}}. {{examQ.question.question}}</b>
                <div ng-if="!examQ.right"></div>
                <div ng-class="examQ.right ? '.alert alert-success' : '.alert alert-danger'">
                    <div ng-repeat="answer in examQ.question.answers" ng-class="answer.correct ? 'rightAnswer' : 'wrongAnswer'">
                        {{answer.answer}}
                    </div>
                </div>
            </div>
        </div>
	    	 
	 `
	  }); 