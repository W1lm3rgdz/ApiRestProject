//----------------------------------------------------------------------------//
//
//
//
//
//
//
//
//
//
//----------------------------------------------------------------------------//

//Load packages required
var express          = require('express');
var userController   = require('../controllers/user');
var authController   = require('../controllers/oauthController');
var clientController = require('../controllers/clientOauth2');

//Create Express Router
var router = express.Router();

router.get('/',function(req, res){
	res.json({message: "hello node"});
});

//User
router.route('/user/addUser')
.post(userController.addUser);

router.route('/user/searchAllUser')
.get(authController.isAuthenticated, userController.searchAllUser);

router.route('/user/searchByIdUser/:id')
.get(authController.isAuthenticated, userController.searchByIdUser);

router.route('/user/updateUser/:id')
.put(authController.isAuthenticated, userController.updateUser);

router.route('/user/removeUser/:id')
.delete(authController.isAuthenticated, userController.removeUser);

//Create endpoint handlers for /clients
router.route('/clients')
.post(authController.isAuthenticated, clientController.addClient)
.get(authController.isAuthenticated, clientController.searchAllClient);

module.exports = router;