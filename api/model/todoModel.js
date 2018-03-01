var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var todoSchema = new Schema({
	text:String,
	isDone:Boolean,
	score:String
});

var todos = mongoose.model("todos",todoSchema);
module.exports = todos;