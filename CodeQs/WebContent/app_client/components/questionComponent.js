var app = angular.module("ngCodeQs");

app.component('questionComponent', {
	  controller : function(quesitonService, authenticationService, categoryService, $location) {
	      var vm = this;
	    
	      vm.currentUser=authenticationService.currentUser;
	     
	    
	 	    vm.question =[];
	 	    vm.answer =[];
	 	    vm.cat=[]
	 	    
	 	    vm.category = function(){
	 	        categoryService.getCategories()
	 	          .then(function(response){
	 	            vm.cat = response.data;
	 	    	    console.log(response.data);
	 	          });
	 	    }
	 	    vm.category();
	 	    
	 	    
	 	   vm.createQuestion = function(uid,cid){
	 	    	questionService.createQuestion()
	 	    		.then(function(res){
	 	    		vm.question = res.data;
	 	   		})
	 	   	}
	 	   vm.createQuestion(uid,cid);
	  
	 	  vm.createAnswer = function(qid){
	 	    	questionService.createAnswer()
	 	    		.then(function(res){
	 	    		vm.answer = res.data;
	 	   		})
	 	   	}
	 	   vm.createAnswer(qid);  
	 	   
	  },
	  
	  template : `
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	    	<h3>Would you like to create a question</h3>
	    	<div>
	    		<select>
		  			<option ng-repeat="cat in $ctrl.category">{{x}}</option>
		  		</select>
	    	
		      <ul ng-repeat= "question in $ctrl.createQuestion">
			    <li>
			      	<label for="createQuestion">Text:</label>
			  			<input id="createQuestion" type="text" ng-model="questionValue" />
			  			<span class="valueItems"><strong>Value:</strong> {{question.question}}</span><br />
			  		
			  		<label for="customValCheck">Checkbox with custom values:</label>
			  			<input id="customValCheck" type="checkbox" ng-model="customValCheckValue"
	           				ng-true-value="right" ng-false-value="wrong"/>
			  		<span class="valueItems"><strong>Value:</strong> {{customValCheckValue}}</span>
			  	</li>
		      </ul>
	      </div>
	 `

 });