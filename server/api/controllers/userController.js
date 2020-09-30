const creatNewUserService = require('../services/userServices/creatNewUserService');
const loginformUserService = require("../services/userServices/loginformUserService")

registerNewUserControl = (req, res, next) => {
    creatNewUserService.creatNewUserService(req.body, res);
}

loginformUserControl = (req, res, next) => {
    loginformUserService.loginformUser(req.body, res);
}


module.exports = {
    registerNewUserControl,
    loginformUserControl,
}
