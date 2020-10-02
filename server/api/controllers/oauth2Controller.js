const loginOauth2UserService = require('../services/userServices/userOauth2GoogleService');

Oauth2Via42 = (req, res, next) => {
    loginOauth2UserService.loginOauth2UserVia42(res, req.user)
}

googleOauth2 = (req, res, next) => {
    loginOauth2UserService.loginOauth2User(res, req.user)
}

module.exports = {
    Oauth2Via42,
    googleOauth2
}