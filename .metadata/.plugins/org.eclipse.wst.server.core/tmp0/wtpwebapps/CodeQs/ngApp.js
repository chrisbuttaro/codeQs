angular.module("ngCodeQs", ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
    .when('/',{
    	template: '<login-component></login-component>'
    })
    .when('/register',{
    	template: '<registration-component></registration-component>'
    })
//    .when('/todos',{
//    	template: '<todo-detail></todo-detail>'
//    })
//    .when('/todos/:id',{
//    	 template : '<todo-detail todo=$resolve.myData></todo-detail>',
//         resolve : {
//       
//           myData : function(todoService, $route) {
//             var id = $route.current.params.id;
//
//             return todoService.getTodo(id)
//               .then(function(res) {
//            	   console.log(res.data);
//                 return res.data;
//               })
//           }
//         }
    
    	
//   })
//    .when('/about',{
//    	templateUrl: 'app_client/views/about.html'
//    })
//    .when('/contact',{
//    	templateUrl: 'app_client/views/contact.html'
//    });
	});
