const creatNewUserService = require('../services/userServices/creatNewUserService');
const loginformUserService = require("../services/userServices/loginformUserService")
const resetpwdUserService = require('../services/userServices/resetpwdUserService');

registerNewUserControl = (req, res, next) => {
    creatNewUserService.creatNewUserService(req.body, res);
}

loginformUserControl = (req, res, next) => {
    loginformUserService.loginformUser(req.body, res);
}

resetpwdControl = (req, res, next) => {
    resetpwdUserService.resetpwd(req.body, res);
}


module.exports = {
    registerNewUserControl,
    loginformUserControl,
    resetpwdControl
}
