var app = angular.module("ngCodeQs");

app.component('registrationComponent', {
  controller : function(authenticationService) {
    var vm = this;
    vm.create=authenticationService.create;
    vm.user={};
    },
    
    template: `<h1>CodeQs</h1>
    <br>
    <h2>Register</h2>
    <form class="col-md-12">
    <div class="form-group">
        <input type="text" class="form-control input-lg" ng-model="$ctrl.user.username" placeholder="Username">
    </div>
    <div class="form-group">
        <input type="password" class="form-control input-lg" ng-model="$ctrl.user.password" placeholder="Password">
    </div>
    <div class="form-group">
        <button class="btn btn-primary btn-lg btn-block" ng-click="$ctrl.create($ctrl.user)">Register</button>
        <span><a href="#">Login</a></span>
     
    </div>
</form>`
   
      });































