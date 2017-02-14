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

module.exports = router;