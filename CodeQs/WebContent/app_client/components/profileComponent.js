var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, categoryService, testService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	  
	    
//	 	    vm.data=[]
//	 	    vm.data2=[]
	 	    vm.exams =[];
	 	    vm.averages=[]
	 	   
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
	 	    
	 	   vm.getAverageByCategory=function(){
	 		   
	 		  categoryService.getCategories()
	 	    	 .then(function(catResponse){
	 	    	  profileService.getExamsForUser(vm.currentUser().id)
	 	    	  .then(function(examsResponse){
	 	    	   console.log(examsResponse.data)
	 	    	   for(var i=0; i<catResponse.data.length; i++){
	 	    		  var examCount=0;
	 	    		  var scoreSum=0;
	 	    		  var average=0;
	 	    		   for(var j=0; j<examsResponse.data.length; j++){
	 	    			   if(catResponse.data[i].id===examsResponse.data[j].category.id){
	 	    				 examCount++; 
	 	    				 scoreSum += examsResponse.data[j].score;
	 	    			   }
	 	    		   }
	 	    		   average=scoreSum/examCount;
	 	    		   if(!isNaN(average)){
	 	    		   vm.averages[i]={catName : catResponse.data[i].name, averageQscore : average};
	 	    		 console.log(vm.averages[i].catName+" Average Score "+vm.averages[i].averageQscore);
	 	    		   }
	 	    	   }
	 	    	  })
	 	    	 })
//	 	    	categoryService.getCategories()
//	 	    	 .then(function(response){
//	 	          for(var i=0; i<response.data.length; i++){
//	 	        	 vm.averages[i]={name : response.data[i].name, averageQscore: 100};
//	 	        	 console.log(vm.averages[i].name+" Average Score "+vm.averages[i].averageQscore); 
//	 	          }
//	 	    	 })
	 	    };
	
	 	    
//	 	    vm.getAllExamsTaken();
	 	    vm.getExamsForUser();
	 	    vm.getAverageByCategory(); 
	   
  },
	    
	  
	    template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	    	<h3>Tests Taken</h3>
	    
	    	  
		      <ul ng-repeat= "exam in $ctrl.exam">
		      	<li> Exam ID {{exam.id}}, {{exam.category.name}}</li>	
		    		<button ng-click="$ctrl.go(exam.id)">Review Exam {{exam.id}}</button>
		      </ul>
	 `
	  }); 