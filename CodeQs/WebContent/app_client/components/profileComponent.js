var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, categoryService, testService, $location, $filter) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	     
	    
//	 	    vm.data=[]
	 	    vm.data2=[]
	 	    vm.exams =[];
	 	   
	 	    vm.go=function(id){
	 	    	testService.examId=id;
	 	    	console.log(testService.examId);
	 	    	var path = "/results/" ;
	 	    
	 	      	  $location.path( path );
	 	    	};
	 	    
	 	    vm.category = function(){
	 	    	categoryService.getCategories()
	 	    	.then(function(response){
	 	    		vm.data2 = response.data;
	 	    		console.log(response.data);
	 	    	});
	 	    }
	 	    vm.category(); 
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
	 	    	
	 	    			vm.exams = res.data;
	 	    			
	 	    		})
	 	    }
//	 	    vm.getAllExamsTaken();
	 	    vm.getExamsForUser();
	 	    
	 	    vm.showCategory = function(ex,c) {
	 	    	var show = false;
	 	    	console.log(ex)
	 	    	ex.forEach(function(e) {
	 	    		console.log(e)
	 	    		if (e.category.id === c.id) {
	 	    			show = true;
	 	    		}
	 	    	});
	 	    	return show;
	 	    }
	 	    
	  },
	    
	  
	    template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	    	<h3>Tests Taken</h3>
	    	<h5>Click on a test to review it</h5>
	  	<div>
		  	<ul ng-repeat="category in $ctrl.data2" >
		  		<li ng-show="$ctrl.showCategory($ctrl.exams, category)">
		  			{{category.name}}
		  		</li>
		  	<ul>
		  		<li ng-click="$ctrl.go(exam.id)" ng-repeat="exam in $ctrl.exams" ng-if="exam.category.id == category.id"><a href=""> 
		  			Review Exam {{exam.id}}</a>
		  		</li>
		  	</ul>
	    	</ul>
	  	</div>
	 `
	  }); 