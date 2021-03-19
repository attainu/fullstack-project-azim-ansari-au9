const express = require('express');
const userController = require('../controllers/userController');
const { check, validationResult }  = require('express-validator');
const middleware = require('../middleware/isAuth');

const router = express.Router();


router.post('/signup', [
    check('name', 'Please enter the name ').not().isEmpty(),
    check('email', 'Please enter email').matches(/.+\@.+\..+/)
    .withMessage("Email must contain @"),
    check('password', 'Please enter the password.').isLength({ min: 6 })
],userController.signup);
router.get('/profile',middleware.isAuth,userController.profile)
router.post('/login',userController.login);
router.post('/changePassword',[
    check("oldPassword", "Please Enter Correct old password").not().isEmpty(),
    check("newPassword", "Please Enter new password").not().isEmpty(),
    check("confirmPassword", "Please Enter same new password again").not().isEmpty() 
  ], middleware.isAuth,userController.changePassword);
router.get('/logout',middleware.isAuth,userController.logout);
router.patch('/editProfile/:id',middleware.isAuth,userController.editProfile);


module.exports = router;