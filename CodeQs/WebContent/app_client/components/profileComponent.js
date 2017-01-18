var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, categoryService, testService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	  
	 	    vm.data2=[]
	 	    vm.exams =[];
	 	    vm.averages=[];
	 	    vm.avgObj = {};
	 	   
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
	 	    		vm.getAverageByCategory(response);
	 	    	})
	 	    }
	 	    vm.category(); 
	 	    vm.getExamsForUser = function() {
	 	    	profileService.getExamsForUser(vm.currentUser().id)
	 	    		.then(function(res) {
	 	    	
	 	    			vm.exam = res.data;
	 	    		})
	 	    }
	 	    
	 	   vm.getAverageByCategory=function(catResponse){
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
	 	    		   vm.avgObj[catResponse.data[i].name] = average;
	 	    		 
	 	    		   }
	 	    		   //console.log(vm.averages[i].averageQscore);
	 	    	   }
	 	    	  console.log(vm.averages[0].catName+" Average Score "+vm.averages[0].averageQscore);
	 	    	  })
	 	    	 

	 	    };
	
	 	    vm.getExamsForUser();
	 	     
	   
	  },
	    
	  
	    template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	    	<h3>Tests Taken</h3>
	    	<h5>Click on a test to review it</h5>
	  	<div>
		  	<ul ng-repeat="category in $ctrl.data2" >
		  		<li>
		  			{{category.name}}  <div ng-show="$ctrl.avgObj[category.name] != null">Average Score: {{$ctrl.avgObj[category.name]}} %</div>
		  		</li>
		  	<ul>
		  		<li ng-click="$ctrl.go(exam.id)" ng-repeat="exam in $ctrl.exam" ng-if="exam.category.id == category.id"><a href=""> 
		  			Review Exam {{exam.id}}</a>
		  		</li>
		  	</ul>
	    	</ul>
	  	</div>

	 `
	  }); 