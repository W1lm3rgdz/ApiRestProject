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

var app = express();

app.get('/',function(req, res){
	
	res.send('hola mundo');
});

app.listen(8080);

