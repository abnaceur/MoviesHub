const creatNewUserService = require('../services/userServices/creatNewUserService');

registerNewUserControl = (req, res, next) => {
    creatNewUserService.creatNewUserService(req.body, req.files, res);
}

module.exports = {
    registerNewUserControl,
}
