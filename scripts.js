var hasStorage;

// Check browser support
if (typeof(Storage) != "undefined") {
   hasStorage=true;
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
hasStorage=false
}

var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) { 
 $scope.message = 'leave a random comment here.';
  
var todosStorage=localStorage.getItem("todos");
    if(todosStorage!=null){
	  $scope.todos=todosStorage;
	}else{
	  $scope.todos = [
        'Learn Sketch', 
        'Look at Dribbble and feel inferior',
        'Actually learn how to use the Pen tool'
      ];
	}
	
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
      if(hasStorage){
     // Store
    localStorage.setItem("todos", JSON.stringify($scope.todos));
    }
    }
    
  };
  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
       if(hasStorage){
     // Store
    localStorage.setItem("todos", JSON.stringify($scope.todos));
    }
    }
  };
  
 });