const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/uploadFiles');

/*
** [POST] Route:"/users/signup" [USED]
*/
router.post('/signup', upload.any(), userController.registerNewUserControl);

module.exports = router;