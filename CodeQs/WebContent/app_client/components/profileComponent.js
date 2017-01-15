var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.data=[]
	 	    
	 	    vm.getAllExamsTaken = function(){
	 	        profileService.getAllExamsTaken(2,1)
	 	          .then(function(response){
	 	            vm.data = response.data;
	 	    	    console.log(response.data);
	 
	 	          });
	 	    }
	 	    vm.getAllExamsTaken();
	 	    console.log(vm.data);
	   },
	      
	    
	  
	    template : `
	      
	    	<h1>{{$ctrl.currentUser().name}} Profile</h1>
	    	<h3>Tests Taken</h3>
	      <ul>
	      <li ng-repeat="exam in $ctrl.data">exam id: {{exam.id}}, category: {{exam.category.name}} </li>
	      </ul>
	 `
	  }); 