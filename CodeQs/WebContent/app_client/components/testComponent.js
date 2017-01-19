var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
controller : function($location, testService){
	var vm=this; 
	vm.examId = function() {testService.examId};
	console.log(vm.examId);
	
	
	vm.go = function () {
  	  $location.path("/results/");
  	};
  	
  	vm.isRight=function(ansCorrect, Qid){
  		console.log(ansCorrect+" quesitonid "+Qid+" examid"+testService.examId); 
  		testService.updateTestQ(ansCorrect, Qid, testService.examId)
  	};
},
	
  template : `
	<div class="container">
		<div class="row">
			<h1>{{$ctrl.questions[1].category.name}} Quiz</h1>
			<hr>
			<div ng-repeat="question in $ctrl.questions | orderBy:'id'" ng-init="outerIndex = $index">
				<b>{{$index+1}}. {{question.question}}</b>
				<div ng-repeat="answer in question.answers">
					<input type="radio" ng-click="$ctrl.isRight(answer.correct, question.id)" name={{outerIndex}}> </input>{{answer.answer}}
				</div>
				<br>
			</div>
			<button class="btn btn-lg btn-primary btn-block" ng-click="$ctrl.go()">Submit Exam</button>
		</div>
	</div>
   `  ,
   
     bindings : {
    	    questions : "="
    	  }
});