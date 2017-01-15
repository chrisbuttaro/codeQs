var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
  template : `
    <h1>Test Component</h1>
    <br>
  
	  <table>
       <tr ng-repeat="question in $ctrl.questions">
         <td><b>{{question.question}}</b>
          <div ng-repeat="answer in question.answers">
          <div>{{answer.answer}}</div>
          </div>
           <br>
       </tr>
      
     </table>
	  `  ,
     bindings : {
    	    questions : "="
    	  }
});