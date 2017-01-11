var app = angular.module("ngCodeQs");

app.component('categoryComponent', {
  controller : function(authenticationService) {
    var vm = this;
    vm.currentUser=authenticationService.currentUser; 
    console.log(vm.currentUser()); 
    
  
    },
  template : `
    <h1>Category Component</h1>
    <h2>Hello {{$ctrl.currentUser().name}}
  `
});