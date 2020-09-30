const creatNewUserService = require('../services/userServices/creatNewUserService');

registerNewUserControl = (req, res, next) => {
    console.log("req :", req.body);
    creatNewUserService.creatNewUserService(req.body, res);
}

module.exports = {
    registerNewUserControl,
}
