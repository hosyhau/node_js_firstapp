var Todos = require("../model/todoModel");

module.exports = function(app){
	// set up many document for mongo db
	app.get("/setup",function(req,res){
		//setup seed data
		var seedTodos =[
			{
				text:"học node js",
				isDone:false
			},
			{
				text:"học angular js",
				isDone:false
			},
			{
				text:"học python",
				isDone:false
			},
			{
				text:"học machine learning",
				isDone:false
			}
		];
		Todos.create(seedTodos,function(err,results){
		res.send(results);
	});
	});
}