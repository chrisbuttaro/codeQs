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
      
      <h2>Hello {{$ctrl.currentUser().name}}</h2>
      <button class="btn btn-success btn-lg btn-block" ng-click="$ctrl.go(c.id)" ng-repeat="c in $ctrl.data">{{c.name}}</button>
    <h1>Category Component</h1>
     <br>
     <table>
       <tr>
         <th>Category</th>
       </tr>
       <tr ng-repeat="category in $ctrl.data">
         <td>{{category.name}}</td>
       </tr>
     </table>
 `
  }); 