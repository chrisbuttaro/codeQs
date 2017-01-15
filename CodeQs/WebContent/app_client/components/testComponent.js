var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
controller : function($location, testService){
	var vm=this; 
	vm.go = function () {
  	  $location.path("/results");
  	};
  	
  	vm.isRight=function(ansCorrect, Qid){
  		console.log(ansCorrect+" quesitonid "+Qid+" examid"+testService.examId); 
  		testService.updateTestQ(ansCorrect, Qid, testService.examId)
  	};
},
	
  template : `
    <h1>Test Component</h1>
    <br>
	
	  <table>
       <tr ng-repeat="question in $ctrl.questions" ng-init="outerIndex = $index">
         <td><b>{{$index+1}}. {{question.question}}</b>
          <div ng-repeat="answer in question.answers">
          <div><input type="radio" ng-click="$ctrl.isRight(answer.correct, question.id)" name={{outerIndex}}> </input>{{answer.answer}}</div>
          </div>
           <br>
       </tr>
     </table>
	  <button class="btn btn-success btn-lg btn-block" ng-click="$ctrl.go()">Submit Exam</button>
	
	  `  ,
     bindings : {
    	    questions : "="
    	  }
});