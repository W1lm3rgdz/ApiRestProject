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

//Create Express Router
var router = express.Router();

//User
router.route('/user/addUser')
.post(userController.addUser);
//.get(authController.isAuthenticated, userController.addUser);

router.route('/user/searchAllUser')
.get(userController.searchAllUser);
//.get(authController.isAuthenticated, userController.searchAllUser);

router.route('/user/searchByIdUser/:id')
.get(userController.searchByIdUser);
//.get(authController.isAuthenticated, userController.searchByIdUser);

router.route('/user/updateUser/:id')
.put(userController.updateUser);
//.put(authController.isAuthenticated, userController.updateUser);

router.route('/user/removeUser/:id')
.delete(userController.removeUser);
//.delete(authController.isAuthenticated, userController.removeUser);

module.exports = router;