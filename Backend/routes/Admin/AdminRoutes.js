const express = require('express');
const adminController = require('../../controllers/Admin/AdminController');
const { check, validationResult }  = require('express-validator');
const middleWare = require('../../middleware/isAdmin');


const router = express.Router();


router.post('/register', [
    check('name', 'Please enter the name ').not().isEmpty(),
    check('email', 'Please enter email').matches(/.+\@.+\..+/)
    .withMessage("Email must contain @"),
    check('password', 'Please enter the password.').isLength({ min: 6 })
],adminController.register);
router.post('/login',adminController.login);
router.post('/changeUserStatus/:id',[
    check('status', 'Please Choose correct option Active or Inactive').not().isEmpty()
],middleWare.isAdmin,adminController.changeUserStatus);
router.get('/getAllUser',adminController.getAllUsers)
router.get('/logout',middleWare.isAdmin,adminController.logout)



module.exports = router;