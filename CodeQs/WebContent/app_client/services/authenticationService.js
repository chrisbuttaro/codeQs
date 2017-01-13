angular.module('ngCodeQs')
.factory('authenticationService', function($window, $http, $location){
    var service={};
   // Place JWT into local storage
   service.saveToken = function(token){
     $window.localStorage['todo-token'] = token;
   };

   // Retrieve JWT from local storage
   service.getToken = function() {
     return $window.localStorage['todo-token'];
   };

   // Contact the server, authenticate user credentials
   service.login = function(user) {
     return $http({
         method:"POST",
         url:'api/login',
         data: user,
         headers:{
             "Content-type": "application/json"
         }
         })
             .then(function(response){
               service.saveToken(response.data.jwt);
               $location.path('/category')
               
             })
   };
   
   service.create = function(user) {
       console.log('in create');
       return $http({
           method:"POST",
           url:'api/signup',
           data: user,
           headers:{
               "Content-type": "application/json"
           }
           })
               .then(function(response){
                   console.log(response)
                 service.saveToken(response.data.jwt);
                 $location.path('/category')
                 
               })
     };

   // Remove JWT from local storage
   service.logout = function() {
     $window.localStorage.removeItem('todo-token');
   };

   // Check that a user's login is valid (present AND not expired)
   service.isLoggedIn = function() {
     var token = service.getToken();

     if (token) {
       // $window.atob decodes a the encoded string
       var payload = JSON.parse($window.atob(token.split('.')[1]));

       return payload.exp > Date.now() / 1000;

     } else {
       return false;
     }
   };

   // Get current user from JWT
   service.currentUser = function() {
       
     if (service.isLoggedIn()) {
       var token = service.getToken();
       var payload = JSON.parse($window.atob(token.split('.')[1]));

       return {
         name : payload.username,
         id   : payload.user_id
       
       };
     
     }
   };

   return service;
   
})