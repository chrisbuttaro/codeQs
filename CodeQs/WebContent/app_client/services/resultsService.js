var app = angular.module('ngCodeQs');

app.factory('resultsService', function($http) {

  var service = {};

service.getResultsByExamId = function(eid) {
    return $http({
      method : 'GET',
      url : 'api/exams/' + eid + '/results/'
    })	  
  };

//  service.createTodo = function(t) {
//	  return $http({
//		  method : 'POST',
//		  url : 'api/todos/',
//		  headers : {
//		    'Content-Type' : 'application/json'
//		  },
//		  data : {task: t, completed: false}
//		})
//  };
//
//  service.deleteTodo = function(todo) {
////    var index = todos.indexOf(todo);
//    
////	  console.log(index);
//	  return $http({
//	      method : 'DELETE',
//	      url : 'api/todos/' + (todo.id)
//	    })
//  };
//  
//  service.updateTodo = function(todo) {
//	  return $http({
//		  method : 'PUT',
//		  url : 'api/todos/' + (todo.id),
//		  headers : {"Content-Type" : "application/json"},
//		  data : todo
//	  })
//  };
//
//  service.showTodo = function(id) {
//	  return $http({
//		  method : 'GET',
//		  url : 'api/todos/' + (id)		  
//	  })
//	  
//  }
  return service;
});