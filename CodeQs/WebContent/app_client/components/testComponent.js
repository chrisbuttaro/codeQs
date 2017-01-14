var app = angular.module("ngCodeQs");

app.component('testComponent', {
	

	

	 controller : function(categoryService,testService, authenticationService) {
		    var vm = this;
		    vm.currentUser=authenticationService.currentUser;
		    vm.data=[]
		    vm.Category = function(){
		    	testService.getQuestionsByCategory(categoryService.categoryId)
	 	          .then(function(response){
	 	            vm.data = response.data;
	 	          });
	 	    }
		    vm.Category();
	 }
		    ,

  template : `
    <h1>Test Component</h1>
    <br>
	  <table>
       <tr>
         <th>Category</th>
       </tr>
       <tr ng-repeat="question in $ctrl.data">
         <td>{{question.question}}</td>
       </tr>
     </table>
	  `
});