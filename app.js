var express = require("express");
var app = express();
const request = require("request");
const parse = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.get("/", function(req, res){
	res.render("home");
});

app.get("/practice", function(req, res){
	res.render("practice");
});

app.get("/challenge", function(req, res){
	res.render("challenge");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});