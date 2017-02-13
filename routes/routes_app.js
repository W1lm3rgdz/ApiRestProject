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
var authController   = require('../controllers/auth');
var clientController = require('../controllers/client');
var oauth2Controller = require('../controllers/oauth2');

//Create Express Router
var router = express.Router();

router.get('/',function(req, res){
	res.render('index',{message: "hello node"});
});

//Create endpoint handlers for /users
router.route('/users')
.post(userController.addUser)
.get(authController.isAuthenticated, userController.searchAllUser);

//Create endpoint handlers for /clients
router.route('/api/clients')
  .post(authController.isAuthenticated, clientController.addClient)
  .get(authController.isAuthenticated, clientController.searchAllClient);

//Create endpoint handlers for oauth2 authorize
router.route('/api/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

//Create endpoint handlers for oauth2 token
router.route('/api/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

/*
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
*/

module.exports = router;