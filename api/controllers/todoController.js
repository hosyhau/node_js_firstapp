var Todos = require("../model/todoModel");

function  getTodos (res) 
{
	// body...
	Todos.find(function(err,todos){
		if (err) {res.status(500).json(err);}
		else {
			res.json(todos);
		}
	});
}

module.exports = function(app){
	// get all document 
	app.get("/todos",function(req,res){
		getTodos(res);
	});
	
	// get document by id
	app.get("/getid/:id",function(req,res){
		Todos.findById({ _id:req.params.id },function(err,todo){
			if (err) {
			throw err;
		}
			else {
				console.log(req.params.id);
				res.json(todo);
			}
		});
	});
	// create a new todo
	app.post("/create",function(req,res){
		var todo =
		{
			text:req.body.text,
			isDone:req.body.isDone,
			score:req.body.score
		};
		Todos.create(todo,function(err,todo){
			if (err) throw err;
			else {
				getTodos(res);
			}
		});
	});
	// update todo
	app.put("/update",function(req,res){
		if (!req.body._id){
			return res.status(500).send("ID is required");
		}
		else {
			Todos.update({
				_id:req.body._id},
				{ 
					text:req.body.text,
					isDone:req.body.isDone,
					score:req.body.score
			},function(err,todo){
				if (err) {
					return res.status(500).json(err);
				}
				else {
					getTodos(res);
				}
			}
			);
		}
	});
	// delete a todo
	app.delete("/delete/:id",function(req,res){
		Todos.remove({_id:req.params.id},
			function(err,todo){
				if (err) {return res.status(500).json(err);}
				else {getTodos(res);console.log(req.params.id);}
		});
	});
}