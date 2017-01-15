var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
  template : `
    <h1>Test Component</h1>
    <br>
  
	  <table>
       <tr ng-repeat="question in $ctrl.questions" ng-init="outerIndex = $index">
         <td><b>{{$index+1}}. {{ question.question}}</b>
          <div ng-repeat="answer in question.answers">
          <div><input type="radio" name={{outerIndex}}> </input>{{ answer.answer}}</div>
          </div>
           <br>
       </tr>
      
     </table>
	  `  ,
     bindings : {
    	    questions : "="
    	  }
});