const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/uploadFiles');

/*
** [POST] Route:"/users/signup" [USED]
*/
router.post('/register', upload.any(), userController.registerNewUserControl);

/*
** [POST] Route:"/users/loginform" [USED]
*/
router.post('/loginform', userController.loginformUserControl);

module.exports = router;