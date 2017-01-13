var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
	 controller : function(testService, authenticationService) {
		    var vm = this;
		    vm.currentUser=authenticationService.currentUser;

		    vm.data=[]
		    
//		    vm.Questions = function(){
//		        testService.getQuestions()
//		          .then(function(response){
//		            vm.data = response.data;
//		          });
//		    
//		    	}
//		    vm.Questions(); 
		    },

  template : `
    <h1>Test Component</h1>
    <br>
	  <h2>Hello {{$ctrl.currentUser().name}}</h2>  
	  <h2>Hello {{$ctrl.currentUser().id}}</h2>  
		    `
  
});