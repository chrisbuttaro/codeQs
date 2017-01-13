var app = angular.module("ngCodeQs");

app.component('testComponent', {
	
	 controller : function(testService, authenticationService) {
		    var vm = this;
		    vm.currentUser=authenticationService.currentUser;

		    vm.data=[]
		    
		    vm.questions = function(){
		        testService.getQuestionsByCategory()
		          .then(function(response){
		            vm.data = response.data;
		            console.log(response.data);
		          });
		    
		    }
		    vm.questions();
		    console.log(vm.data);
		    },

  template : `
    <h1>Test Component</h1>
    <br>
	  <h2>Hello {{$ctrl.currentUser().name}}</h2>  
	  <h2>Hello {{$ctrl.currentUser().id}}</h2>  
	  <h1>{{$ctrl.data[1].id}}</h1>
	`
  
});