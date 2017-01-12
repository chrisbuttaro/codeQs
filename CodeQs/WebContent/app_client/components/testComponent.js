var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
	 controller : function(testService) {
		    var vm = this;
		    vm.data=[]
		    
		    vm.Questions = function(){
		        testService.getQuestions()
		          .then(function(response){
		            vm.data = response.data;
		          });
		    
		    	}
		    vm.Questions(); 
		    },

  template : `
    <h1>Test Component</h1>
    <br>
    <table>
      <tr>
        <th>Question</th>
      </tr>
      <tr ng-repeat="question in $ctrl.data">
        <td>{{question.question}}</td>
      </tr>
    </table>
  `
  
});