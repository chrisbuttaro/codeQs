var app = angular.module("ngCodeQs");

app.component('registrationComponent', {
  controller : function(authenticationService) {
    var vm = this;
    vm.create=authenticationService.create;
    vm.user={};
    },
    
    template: `
 

	<div class="container">
			    <form class="form-signin">
		    	<h1>CodeQs</h1>
			      <h2 class="form-signin-heading">Who are you?</h2>
			      <label for="inputUserName" class="sr-only">Username</label>
			      <input type="text" id="inputUserName" class="form-control" ng-model="$ctrl.user.username" placeholder="Username" required autofocus>
			      <label for="inputPassword" class="sr-only">Password</label>
			      <input type="password" id="inputPassword" class="form-control" ng-model="$ctrl.user.password" placeholder="Password" required>
			      <div class="checkbox">
			        <label>
			          <input type="checkbox" value="remember-me"> Remember me
			        </label>
			      </div>
			      <button class="btn btn-lg btn-primary btn-block" ng-click="$ctrl.create($ctrl.user); $ctrl.login($ctrl.user)" type="submit">Register</button>
			      <a href="#!/">Login</a>
			    </form>
	    	</div>`
   
      });































