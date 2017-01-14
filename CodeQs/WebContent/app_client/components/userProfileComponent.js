var app = angular.module("ngCodeQs");

app.component('profileComponent', {
	  controller : function(profileService, authenticationService, $location) {
	      var vm = this;
	      vm.go = function (id) {
	    	  profileService.testId=id; 
	    	  var path = "/profile/" + id;
	      	  $location.path( path );
	      	};
	      vm.currentUser=authenticationService.currentUser;
	    
	 	    vm.data=[]
	 	    
	 	    vm.Profile = function(){
	 	        profileService.getProfiles()
	 	          .then(function(response){
	 	            vm.data = response.data;
	 	    	    console.log(response.data);
	 
	 	          });
	 	    }
	 	    vm.Profile(); 
	 	    console.log(vm.data);
	   },
	      
	    
	  
	    template : `
	      
	      <h2>Hello {{$ctrl.currentUser().name}}</h2>
	      <button class="btn btn-success btn-lg btn-block" ng-click="$ctrl.go(p.id)" ng-repeat="p in $ctrl.data">{{p.name}}</button>
	    <h1>Profile Component</h1>
	     <br>
	     <table>
	       <tr>
	         <th>Profile</th>
	       </tr>
	       <tr ng-repeat=" exam in $ctrl.data">
	         <td>{{category.name}}</td>
	       </tr>
	     </table>
	 `
	  }); 