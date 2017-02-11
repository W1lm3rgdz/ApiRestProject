//----------------------------------------------------------------------------//
//
//
//
//
//Version: 1.0.0
//Fecha: 11/02/2017
//Autor: Ing. Wilmer Guedez
//Email: wilmer.guedz@gmail.com
//Descripcion: Api Rest for the control of projects and requirements
//----------------------------------------------------------------------------//

//Load packages required
var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser'); 
var passport   = require('passport');

//Definition modular routes
var route_app  = require('../routes/routes_app');  

//Definition of global variables
var app = express(); //we create express aplication	
var port = process.env.port || 3000; //use port 3000 by default 
app.use(bodyParser.json()); //Use the body-parser package
app.use(bodyParser.urlencoded({extended: true}));

//Middleware load
app.use(passport.initialize());//Use the passport package
app.use('/api',route_app);//Register all our routes with /api

//We create access to the database mydb
mongoose.connect('mongodb://localhost/mydb', function(err){
	if(!err){
		console.log('connection successfully!!!');
	}
	else {
		console.log('connection error!!!');
	}
});

app.listen(port);

