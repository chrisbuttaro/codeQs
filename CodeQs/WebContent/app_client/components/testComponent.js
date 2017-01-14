var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
<<<<<<< HEAD
	 controller : function(testService, authenticationService,$location) {
=======
	 controller : function(categoryService,testService, authenticationService) {
>>>>>>> 725ade9c6670ce917f9c60a5f244db2006cb8ad0
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
<<<<<<< HEAD
	  <h2>Hello {{$ctrl.currentUser().name}}</h2>  
	  <h2>Hello {{$ctrl.currentUser().id}}</h2>  
	  <h1>{{$ctrl.data[1].id}}</h1>
	
	`,
	bindings : {
	  category : '<'
//	  $ctrl.category
  }
=======
	  <table>
       <tr>
         <th>Category</th>
       </tr>
       <tr ng-repeat="question in $ctrl.data">
         <td>{{question.question}}</td>
       </tr>
     </table>
	  `
	
>>>>>>> 725ade9c6670ce917f9c60a5f244db2006cb8ad0
});