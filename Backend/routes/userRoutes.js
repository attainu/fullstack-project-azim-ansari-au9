const express = require('express');
const userController = require('../controllers/userController');
const { check, validationResult }  = require('express-validator');
const middleware = require('../middleware/isAuth');
const multer = require('multer')
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
});
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
// image path
// limit: 5mb
// filter : png, jpeg,jpg
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


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
router.put('/change-profile-pic',upload.single('profilePic'), middleware.isAuth,userController.cahngeProfilePic);


module.exports = router;