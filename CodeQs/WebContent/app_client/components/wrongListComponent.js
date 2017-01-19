var app = angular.module("ngCodeQs");

app.component('wrongListComponent', {
	controller : function(categoryService, wrongListService, profileService, authenticationService, $location) {
	    var vm = this;
	    
	    vm.exams = [];
	    vm.categories = [];
	   
	    vm.go = function (id) {
	  	  var path = "/wrongList/" + id;
	    	  $location.path( path );
	    	};
	    vm.currentUser=authenticationService.currentUser;
	    
	    vm.getExamsForUser = function(){
 	        profileService.getExamsForUser(vm.currentUser().id)
 	          .then(function(response){
 	            vm.exams = response.data;
 	            console.log("response data" + response.data);
 	            console.log(vm.exams);
 	          });
 	    }
	    vm.getExamsForUser();
	    
	    console.log("here");
	    console.log("****************" + vm.exams);
	  
		    vm.data=[]
		    
		    vm.Category = function(){
		        categoryService.getCategories()
		          .then(function(response){
		            vm.data = response.data;
		    	    console.log(response.data);
		    	    vm.getCategories(response);
		          });
		    }
		    vm.Category(); 
		    console.log(vm.data);
		    
		    vm.getCategories=function(catResponse){
                profileService.getExamsForUser(vm.currentUser().id)
                .then(function(examsResponse){
                 for(var i=0; i<catResponse.data.length; i++){
                    var examCount=0;
                     for(var j=0; j<examsResponse.data.length; j++){
                         if(catResponse.data[i].id===examsResponse.data[j].category.id){
                           examCount++;
                         }
                     }
                     if(examCount > 0){
                     vm.categories[i]=catResponse.data[i];
                     console.log(vm.categories[i])
                     }
                 }
               })
          };
          
	 },
	
	  template : `
	    
		  <div class="container">
		    <div class="row">
		        <div class = "col-xs-4 col-xs-offset-4">
		            <h1>New Quiz</h1>
		            <p>Choose a category:</p>
		            <ul>
		                <li ng-repeat="c in $ctrl.categories"><a href="#!/wrongList/{{c.id}}">{{c.name}}</a></li>
		            </ul>
		        </div>
		    </div>
		  </div>
	  `,
	
	 bindings : {
    	    questions : "="
     }
}); 