const loginOauth2UserService = require('../services/userServices/userOauth2GoogleService');

Oauth2Via42 = (req, res, next) => {
    console.log("req.user ", req.user);
    loginOauth2UserService.loginOauth2UserVia42(res, req.user)
}

module.exports = {
    Oauth2Via42
}