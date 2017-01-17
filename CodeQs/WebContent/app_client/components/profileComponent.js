var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, categoryService, testService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	     
	    
//	 	    vm.data=[]
//	 	    vm.data2=[]
	 	    vm.exams =[];
	 	   
	 	    vm.go=function(id){
	 	    	testService.examId=id;
	 	    	console.log(testService.examId);
	 	    	var path = "/results/" ;
	 	    
	 	      	  $location.path( path );
	 	    	};
	 	    
//	 	    vm.category = function(){
//	 	    	categoryService.getCategories()
//	 	    	.then(function(response){
//	 	    		vm.data2 = response.data;
//	 	    		console.log(response.data);
//	 	    	});
//	 	    }
//	 	    vm.category(); 
//	 	    
//	 	    vm.getAllExamsTaken = function(){
//	 	        profileService.getAllExamsTaken(vm.currentUser().id)
//	 	          .then(function(response){
//	 	            vm.data = response.data;
//	 	          });
//	 	    }
	 	    
	 	    vm.getExamsForUser = function() {
	 	    	profileService.getExamsForUser(vm.currentUser().id)
	 	    		.then(function(res) {
	 	    	
	 	    			vm.exam = res.data;
	 	    		})
	 	    }
//	 	    vm.getAllExamsTaken();
	 	    vm.getExamsForUser();
	 	  
	   
  },
	    
	  
	    template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	    	<h3>Tests Taken</h3>
	    	<div >
	    	  
		      <ul ng-repeat= "exam in $ctrl.exam">
		      	<li> Exam ID {{exam.id}}, {{exam.category.name}}</li>	
		    		<button ng-click="$ctrl.go(exam.id)">Review Exam {{exam.id}}</button>
		      </ul>
	      </div>
	 `
	  }); 