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

//Definition of global variables
var app = express(); //we create express aplication	
var port = process.env.port || 3000; //use port 3000 by default 
app.use(bodyParser.json()); //Use the body-parser package in our application
app.use(bodyParser.urlencoded({extended: true}));

//Test dummy hello world
app.get('/',function(req, res){	
	res.send('Helo World');
});

app.listen(port);

