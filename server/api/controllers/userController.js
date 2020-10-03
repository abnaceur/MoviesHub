const creatNewUserService = require('../services/userServices/creatNewUserService');
const loginformUserService = require("../services/userServices/loginformUserService")
const resetpwdUserService = require('../services/userServices/resetpwdUserService');
const userInfoService = require('../services/userServices/userInfoService');

registerNewUserControl = (req, res, next) => {
    creatNewUserService.creatNewUserService(req.body, res);
}

loginformUserControl = (req, res, next) => {
    loginformUserService.loginformUser(req.body, res);
}

resetpwdControl = (req, res, next) => {
    resetpwdUserService.resetpwd(req.body, res);
}

getUserInformation = (req, res, next) => {
    let userId = req.params.id;
    userInfoService.getUserInfoData(userId, res);
}

module.exports = {
    getUserInformation,
    registerNewUserControl,
    loginformUserControl,
    resetpwdControl
}
