var app = angular.module("ngCodeQs");

app.component('navComponent', {
	controller : function(profileService, authenticationService, $location) {
	var vm = this;
	
	vm.currentUser=authenticationService.currentUser;
	
	vm.go = function () {
//	    	  profileService.profileId=id; 
	    	  var path = "/profile/"
	      	  $location.path( path );
	      	};
	      	
	},

	template : `
	<div>
		<p>You are logged in as {{$ctrl.currentUser().name}}</p>
		<button class="btn btn-success btn-lg" ng-click="$ctrl.go()">Go to Profile</button>
	
	<div>
	
	`
	      	
})