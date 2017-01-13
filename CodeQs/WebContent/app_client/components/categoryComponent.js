var app = angular.module("ngCodeQs");

app.component('categoryComponent', {
 controller : function(testService, authenticationService, $location) {
   var vm = this;
   vm.go = function ( path ) {
         $location.path( path );
       };
   vm.currentUser=authenticationService.currentUser;
   vm.createTest=testService.createTest;
   
   
 
   },
 template : `
   
   <h2>Hello {{$ctrl.currentUser().name}}</h2>
   <h2>User Id {{$ctrl.currentUser().id}}
   <button class="btn btn-success btn-lg btn-block" ng-click="$ctrl.go('/test')">Java</button>
   
      
 `
});