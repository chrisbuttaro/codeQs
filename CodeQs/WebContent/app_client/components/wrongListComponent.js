var app = angular.module("ngCodeQs");

app.component('wrongListComponent', {
	controller : function(categoryService, wrongListService, authenticationService, $location) {
	    var vm = this;
	    vm.go = function (id) {
	  	  var path = "/wrongList/" + id;
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
		            <p>Choose a category:</p>
		            <ul>
		                <li ng-repeat="c in $ctrl.data"><a href="#!/wrongList/{{c.id}}" ng-hide="{{c.exam}}">{{c.name}}</a></li>
		            </ul>
		        </div>
		    </div>
		  </div>
	  `,
	
	 bindings : {
    	    questions : "="
     }
}); 