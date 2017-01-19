var app = angular.module("ngCodeQs");

app.component('questionComponent', {
	  controller : function(questionService, authenticationService, categoryService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	     
	    
	 	    vm.question= {
	 	    		"answers": []
	 	    };
	 	    vm.answer =[];
	 	    vm.cat=[];
	 	    vm.catSelected;
	 	    
	 	    vm.category = function(){
	 	        categoryService.getCategories()
	 	          .then(function(response){
	 	            vm.cat = response.data;
	 	    	    console.log(response.data);
	 	    	    console.log(vm.currentUser.id);
	 	          });
	 	    }
	 	    vm.category();
	 	    
	 	    
	 	   vm.createQuestion = questionService.createQuestion;
	 	    	
	 	   	
	  
//	 	  vm.createAnswer = function(qid){
//	 	    	questionService.createAnswer()
//	 	    		.then(function(res){
//	 	    		vm.answer = res.data;
//	 	   		})
//	 	   	}
//	 	   vm.createAnswer(qid);  
	 	   
	  },
	  
	  template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
<h3>Would you like to create a question</h3>
<div>
   <!-- <select
     ng-model="$ctrl.catSelected" [ng-repeat="cat in $ctrl.cat"]>{{cat.name}}</option>
   </select> -->
<select ng-model="$ctrl.catSelected" ng-options="cat.name for cat in $ctrl.cat">
</select>   

   {{$ctrl.catSelected}}
   
   
   

  
         <label for="createQuestion">Enter Question:</label>
         <input type="text" ng-model="$ctrl.question.question" />
         <label for="createAnswer">First Answer:</label>
         <input type="text" ng-model="$ctrl.question.answers[0].answer" />
         <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[0].correct" />
         <label for="customValCheck">Is this the correct answer:</label>
         <input type="text" ng-model="$ctrl.question.answers[1].answer" />
         <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[1].correct" />
         <label for="customValCheck">Is this the correct answer:</label>
         <input type="text" ng-model="$ctrl.question.answers[2].answer" />
         <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[2].correct" />
         <label for="customValCheck">Is this the correct answer:</label>
         <input type="text" ng-model="$ctrl.question.answers[3].answer" />
         <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[3].correct" />
         <label for="customValCheck">Is this the correct answer:</label>
         <p>
        <!--	{{$ctrl.question.question}}
      	{{$ctrl.question.answers[0]}}
      	{{$ctrl.question.answers[1]}}
      	{{$ctrl.question.answers[2]}}
      	{{$ctrl.question.answers[3]}}
      	{{$ctrl.question.answers[0].correct}}-->
      	{{$ctrl.question}} 
		</p>
		$ctrl.question
  <button ng-click="$ctrl.createQuestion($ctrl.question, $ctrl.currentUser().id, $ctrl.catSelected.id)">Submit</button>
</div>
	 `

 });