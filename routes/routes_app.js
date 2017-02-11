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

//Create Express Router
var router = express.Router();

//User
router.route('/user/addUser')
.get(authController.isAuthenticated, userController.addUser);

router.route('/user/searchAllUser')
.get(authController.isAuthenticated, userController.searchAllUser);

router.route('/user/searchByIdUser/:id')
.get(authController.isAuthenticated, userController.searchByIdUser);

router.route('/user/updateUser/:id')
.put(authController.isAuthenticated, userController.updateUser);

router.route('/user/removeUser/:id')
.delete(authController.isAuthenticated, userController.removeUser);

module.exports = router;