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
	 	          });
	 	    }
	 	    vm.category();
	 	    
	 	   vm.createQuestion = questionService.createQuestion;
	 	    		 	   
	  },
	  
	  template : `
	    <div class = "container">
		    <h1>Create a Question</h1>
		    <hr>
		    <div>
		    	<div class = "form-group">
			    	<label>Select Question Category:</label>
				    <select ng-model="$ctrl.catSelected" ng-options="cat.name for cat in $ctrl.cat" class="form-control">
			    </select>   
			    </div>
			    <div class = "form-group">
				    <label for="createQuestion">Enter Question:</label>
				    <input type="text" ng-model="$ctrl.question.question" class="form-control" />
			    </div>
			    <div class = "form-group">
				    <label for="createAnswer">First Answer:</label>
				    <input type="text" ng-model="$ctrl.question.answers[0].answer" class="form-control" />
				    <label for="customValCheck">Is this the correct answer:</label>
				    <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[0].correct" />
		  		</div>
		  		<div class = "form-group">
		  			<label>Second Answer:</label>
				    <input type="text" ng-model="$ctrl.question.answers[1].answer" class="form-control" />
		  		    <label for="customValCheck">Is this the correct answer:</label>
				    <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[1].correct" />
			    </div>
			    <div class = "form-group">
				    <label>Third Answer:</label>
				    <input type="text" ng-model="$ctrl.question.answers[2].answer" class="form-control" />
				    <label for="customValCheck">Is this the correct answer:</label>
				    <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[2].correct" />
			    </div>
			    <div class = "form-group">
			    	<label>Fourth Answer</label>
				    <input type="text" ng-model="$ctrl.question.answers[3].answer" class="form-control" />
				    <label for="customValCheck">Is this the correct answer:</label>
				    <input id="basicCheck" type="checkbox" ng-model="$ctrl.question.answers[3].correct" />
			    </div>
			    <button class = "btn btn-lg btn-primary btn-block" ng-click="$ctrl.createQuestion($ctrl.question, $ctrl.currentUser().id, $ctrl.catSelected.id)">Submit</button>
		    </div>
	   </div>
	 `

 });