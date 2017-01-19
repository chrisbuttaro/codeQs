var app = angular.module("ngCodeQs");
  
  app.component('categoryComponent', {
  controller : function(categoryService, authenticationService, $location) {
      var vm = this;
      vm.go = function (id) {
    	  var path = "/test/" + id;
      	  $location.path( path );
      	};
      vm.currentUser=authenticationService.currentUser;
    
 	    vm.data=[]
 	    
 	    vm.Category = function(){
 	        categoryService.getCategories()
 	          .then(function(response){
 	            vm.data = response.data;
 	    	    console.log(response.data);
 	          });
 	    }
 	    vm.Category(); 
 	    console.log(vm.data);
   },
      
    
  
    template : `
		<div class="container">
		    <div class="row">
		        <div class = "col-xs-4 col-xs-offset-4">
		            <h1>New Quiz</h1>
		            <p><em>Choose a category to randomly generate an exam:</em></p>
		            <hr>
		            <ul>
		                <li ng-repeat="c in $ctrl.data"><a href="#!/test/{{c.id}}" >{{c.name}}</a></li>
		            </ul>
		        </div>
		    </div>
		</div>
   	`
  }); 