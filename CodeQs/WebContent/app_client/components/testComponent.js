var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
  template : `
    <h1>Test Component</h1>
    <br>
    <h1>
	  <table>
       <tr>
         <th>Category</th>
       </tr>
       <tr ng-repeat="question in $ctrl.questions">
         <td>{{question.question}}</td>
       </tr>
     </table>
	  `  ,
     bindings : {
    	    questions : "="
    	  }
});