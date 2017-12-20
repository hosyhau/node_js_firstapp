var app = angular.module("app.todos");
app.factory("svTodos",["$http",function($http){
	return {
		get:function(){
			return $http.get("/todos");
		},
		create:function(todoData){
			return $http.post("/create",todoData);
		},
		update:function(todoData){
			return $http.put("/update",todoData);
		},
		delete:function(id){
			return $http.delete("/delete/"+ id);
		}
	}
}]);