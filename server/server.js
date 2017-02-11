//----------------------------------------------------------------------------//
//
//
//
//
//Version: 1.0.0
//Fecha: 11/02/2017
//Autor: Ing. Wilmer Guedez
//Email: wilmer.guedz@gmail.com
//Descripcion: Api Rest para el control y Seguimiento de Proyectos 
//----------------------------------------------------------------------------//

//importando paquetes necesarios
var express = require('express');

var app = express();

app.get('/',function(req, res){
	
	res.send('hola mundo');
});

app.listen(8080);

