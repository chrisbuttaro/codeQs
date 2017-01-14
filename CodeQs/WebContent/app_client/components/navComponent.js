var app = angular.module("ngCodeQs");

app.component('navComponent', {
	controller : function(authenticationService, $location) {
	var vm = this;
	console.log("Shit");
	
	vm.currentUser=authenticationService.currentUser;
	
	vm.go = function (id) {
	    	  profileService.profileId=id; 
	    	  var path = "/profile/" + id;
	      	  $location.path( path );
	      	};
	      	
	},

	template : `
	<div>
		<p>You are logged in as {{$ctrl.currentUser().name}}, DICK!</p>
		<button class="btn btn-success btn-lg" ng-click="$ctrl.go(id)">Go to Profile</button>
	
	<div>
	
	`
	      	
})