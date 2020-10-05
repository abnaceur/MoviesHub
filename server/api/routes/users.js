const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/uploadFiles');
const authCkeck = require("../middleware/check-auth");

/*
** [POST] Route:"/users/signup" [USED]
*/
router.post('/register', upload.any(), userController.registerNewUserControl);

/*
** [POST] Route:"/users/loginform" [USED]
*/
router.post('/loginform', userController.loginformUserControl);

/*
** [POST] Route:"/users/resetpwd" [USED]
*/
router.post('/resetpwd', userController.resetpwdControl);

/*
** [POST] Route:"/users/resetpwd" [USED]
*/
router.get('/:id', userController.getUserInformation);

/*
** [PUT] Route:"/users/profile" [USED]
*/
router.put('/profile', upload.any(), userController.updateUserProfile)

/*
** [GET] Route:"/users/all/:page" [USED]
*/
router.get('/all/members', userController.getAllusers);

module.exports = router;