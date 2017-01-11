angular.module('ngCodeQs')
.factory('authenticationService', function($http){
	
	service.create = function(id) {
        return $http({
      	  method:"POST",
      	  url:'api/createTest',
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
	
    return service; 
});