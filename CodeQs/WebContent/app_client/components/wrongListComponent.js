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
	    
	   <h1>Category</h1>
      <p>Please choose a category from the list below:</p>
      <ul>
      <li ng-repeat="c in $ctrl.data"><a href="#!/wrongList/{{c.id}}" >{{c.name}}</a></li>
      </ul>
	`,
	
	 bindings : {
    	    questions : "="
     }
}); 