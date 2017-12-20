var app = angular.module("app.todos",["xeditable"]);
app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
	$scope.appName ='node todos';
	$scope.formdata={};
	$scope.todos = [];
	$scope.loading=true;
	// load data from api
	svTodos.get().success(function(data){
		$scope.todos=data;
		$scope.loading=false;
	});
	// confirm
	$scope.confirm_delete = function(){
		console.log('somns');
		 return confirm('are you sure?');
	}
	$scope.submit = function(){
		var todo ={
			text:$scope.formdata.text,
			isDone:false
		}
		svTodos.create(todo).success(function(data){
			$scope.todos = data;
			$scope.formdata.text ='';
		});
	}

	$scope.updateTodo = function(todo){
		$scope.loading=true;	
		svTodos.update(todo).success(function(data){
			$scope.todos=data;
			$scope.loading=false;
		});

	}
	$scope.deleteTodo = function(todo){
		$scope.loading=true;
		svTodos.delete(todo._id).success(function(data){
			$scope.todos=data;
			$scope.loading=false;
		});
	}
}]);