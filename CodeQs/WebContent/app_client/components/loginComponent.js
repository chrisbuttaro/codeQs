var app = angular.module("ngCodeQs");

app.component('loginComponent', {
  controller : function(authenticationService) {
    var vm = this;
    vm.login=function(user){authenticationService.login(user)}; 
    vm.user={};
  
    },
    
    template: `<h1>CodeQs</h1>
    <!-- <br>
    <form class="col-md-12">
    <div class="form-group">
        <input type="text" class="form-control input-lg" ng-model="$ctrl.user.username" placeholder="Username">
    </div>
    <div class="form-group">
        <input type="password" class="form-control input-lg"  ng-model="$ctrl.user.password" placeholder="Password">
    </div>
  
    <div class="form-group">
        <button class="btn btn-primary btn-lg btn-block"ng-click="$ctrl.login($ctrl.user)">Sign In</button>
        <span class="pull-right"><a href="#!/register">New Registration</a></span>
    </div>
</form> -->
    	
    	
    	
    	
    	<div class="container">

    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputUserName" class="sr-only">Email address</label>
      <input type="text" id="inputUserName" class="form-control" ng-model="$ctrl.user.username" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" ng-model="$ctrl.user.password" placeholder="Password" required>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" ng-click="$ctrl.login($ctrl.user)" type="submit">Sign in</button>
      <a href="#!/register">New User?</a>
    </form>

  </div>
  `
   
      });