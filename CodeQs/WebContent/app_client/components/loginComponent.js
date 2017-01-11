var app = angular.module("ngCodeQs");

app.component('loginComponent', {
  controller : function(authenticationService, $location) {
    var vm = this;
    vm.login=function(user){authenticationService.login(user)}; 
    vm.user={};
  
    },
    
    template: `<h1>CodeQs</h1>
    <br>
    <form class="col-md-12">
    <div class="form-group">
        <input type="text" ng-model="$ctrl.user.username" placeholder="Username">
    </div>
    <div class="form-group">
        <input type="text"  ng-model="$ctrl.user.password" placeholder="Password">
    </div>
  
    <div class="form-group">
        <button class="btn btn-primary btn-lg btn-block"ng-click="$ctrl.login($ctrl.user)">Sign In</button>
       
        <span class="pull-right"><a href="#!/register">New Registration</a></span>
    </div>
</form>`
   
      });