var app = angular.module("ngCodeQs");

app.component('categoryComponent', {
  controller : function(testService, authenticationService) {
    var vm = this;
    vm.currentUser=authenticationService.currentUser;
    vm.createTest=testService.createTest; 
    
    
  
    },
  template : `
    
    <h2>Hello {{$ctrl.currentUser().name}}</h2>
    <button class="btn btn-success btn-lg btn-block"ng-click="$ctrl.createTest()">Java</button>
  `
});