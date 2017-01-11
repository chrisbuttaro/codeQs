var app = angular.module("ngCodeQs");

app.component('categoryComponent', {
  controller : function(authenticationService) {
    var vm = this;
    vm.createTest=testService.createTest; 
    
    
  
    },
  template : `
    
    <h2>Hello {{$ctrl.currentUser().name}}</h2>
    <button class="btn btn-success btn-lg btn-block"ng-click="$ctrl.createTest($ctrl.user)">Sign In</button>
  `
});