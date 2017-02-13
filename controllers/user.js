









var User = require('../models/user');

//Determine the date of creation and update
var gdateCreate = new Date();
var gdateUpdate = new Date();

//POST: Add new user
addUser = function(req, res){
	var newUser = new User({
		username: 	req.body.username,
		password: 	req.body.password,
		roles: 	    'ReadWrite', //Pending review 
		dateCreate: gdateCreate,
		dateUpdate: gdateUpdate, 
		language:   'ES', //Pending review 
		status:     'Enable'
	}); 
	
	newUser.save(function(err){
		if(!err){
			res.send(newUser);
		}
		else{
			console.log('Error: '+err);
		}
	});
}

//GET: Search all user
searchAllUser = function(req, res){
	User.find(function(err,user){
		if(!err){
			res.send(user);
		}
		else{
			console.log('err: '+err);
		}
	});
}

/*
//GET: Search by id user
searchByIdUser = function(req, res){
	User.findById(req.params.id,function(err,user){
		if(!err){
			res.send(user);
		}
		else{
			console.log('err: '+err);
		}
	});
}

//PUT: Update user
updateUser = function(req, res){
	User.findById(req.params.id,function(err,user){
		user.username   = req.body.username;
		user.password   = req.body.password;
		user.dateUpdate = gdateUpdate;
		user.language   = req.body.language;
		user.status     = req.body.status;
		user.save(function(err){
			if(!err){
				res.send(user);
			}
			else{
				console.log('err: '+err);
			}			
		});
	});
}

//DELETE: Remove user
removeUser = function(req, res){
	User.findById(req.params.id,function(err,user){
		user.remove(function(err){
			if(!err){
				res.send(user);
			}
			else{
				console.log('err: '+err);
			}			
		});
	});
}

*/
exports.addUser        = addUser;
exports.searchAllUser  = searchAllUser;
//exports.searchByIdUser = searchByIdUser; 
//exports.updateUser     = updateUser;
//exports.removeUser     = removeUser;
