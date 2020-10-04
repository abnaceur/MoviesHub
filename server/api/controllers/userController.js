const creatNewUserService = require('../services/userServices/creatNewUserService');
const loginformUserService = require("../services/userServices/loginformUserService")
const resetpwdUserService = require('../services/userServices/resetpwdUserService');
const userInfoService = require('../services/userServices/userInfoService');
const updateProfileService = require('../services/userServices/updateProfile');
const getAllUsersService = require('../services/userServices/getAllUsersService');

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
    let userId = req.params.id; const updateProfileService = require('../services/userServices/updateProfile');

    userInfoService.getUserInfoData(userId, res);
}

updateUserProfile = (req, res, next) => {
    updateProfileService.updateProfile(req, res)
}

getAllusers = (req, res, next) => {
    getAllUsersService.listAlluser(res);
}

module.exports = {
    getUserInformation,
    registerNewUserControl,
    loginformUserControl,
    updateUserProfile,
    getAllusers,
    resetpwdControl
}
