var app = angular.module("app.todos",["xeditable"]);
app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
	$scope.appName ='node todos';
	$scope.formdata={};
	$scope.todos = [];
	$scope.loading=true;
	$scope.scores = [
    { score: 'A'},
    { score: 'B+'},
    {score: 'B'},
    { score: 'C+'},
    { score: 'C'},
    {score: 'C+'},
    {score: 'D'},
    {score: 'D+'}
  ]; 
	// load data from api
	svTodos.get().success(function(data){
		$scope.todos=data;
		$scope.loading=false;
	});
	// confirm
	$scope.confirm_delete = function(todo){
		// console.log('somns');
		if (confirm('Are you sure?'))
		{
			$scope.loading=true;
			svTodos.delete(todo._id).success(function(data){
			$scope.todos=data;
			$scope.loading=false;
		});
		}
		else {
			$scope.loading=false;
		}
	}
	$scope.create = function(){
		var todo ={
			text:$scope.formdata.text,
			isDone:false,
			score:$scope.formdata.score
		}
		svTodos.create(todo).success(function(data){
			$scope.todos = data;
			$scope.formdata.text ='';
			$scope.formdata.score='';
		});
	}

	$scope.updateTodo = function(todo){
		$scope.loading=true;	
		svTodos.update(todo).success(function(data){
			$scope.todos=data;
			$scope.loading=false;
		});

	}

}]);