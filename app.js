var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var config = require("./config");
var setUpController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");

var app =express();
var port =process.env.PORT || 2222;

app.use("/assets",express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.set("view engine","ejs");
//db info
console.log(config.getDbConnectionString());
// connect to mongodb
mongoose.connect(config.getDbConnectionString());
//setupAPIcontroller
setUpController(app);
// todocontroller
todoController(app);
//routes
app.get("/",function(req,res) {
	// body... 
	res.render("index");
});

app.listen(port,function(){
	console.log('magic in port' +port);
});