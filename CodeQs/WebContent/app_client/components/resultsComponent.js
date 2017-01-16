var app = angular.module("ngCodeQs");

app.component('resultsComponent', {
	  controller : function(resultsService, authenticationService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.data=[]
	 	    
	 	    vm.getResultsByExamId = function(){
	 	        resultsService.getResultsByExamId(vm.currentUser().id,1)
	 	          .then(function(response){
	 	            vm.data = response.data;
	 	          });
	 	     
	 	    }
	 	    vm.getResultsByExamId();
	 	    console.log(vm.data);
	   },
	      
	    
	  
	    template : `
	      
	    	<h1>{{$ctrl.currentUser().name}} Profile</h1>
	    	<h3>Results of Test Taken</h3>
	    	<div ng-hide="!$ctrl.data.length">
	    	  <h4>Java</h4>	
		      <ul ng-if="$ctrl.data">
		    	<li ng-repeat="exam in $ctrl.data">exam id: {{exam.id}}, category: {{exam.category.name}} </li>
		      </ul>
	      </div>
	      <div ng-hide="!$ctrl.data2.length">
	    	   <h4>JavaScript</h4>
			   <ul>
		    	<li ng-repeat="exam in $ctrl.data2">exam id: {{exam.id}}, category: {{exam.category.name}} </li>
			   </ul>
		   </div>
	 `
	  }); 