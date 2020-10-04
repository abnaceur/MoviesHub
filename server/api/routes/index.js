var express = require('express');
var router = express.Router();
var FortyTwoStrategy = require('passport-42').Strategy;
var passport = require('passport');
const oauth2Controller = require('../../api/controllers/oauth2Controller')
const keys = require('../../config/googleOath2');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user)
})


/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<h1>TEsting</h1>');
});


// Googe Oauth2
passport.use(new GoogleStrategy({
  clientID: '393906309113-lf7gnp6pkk65bjeelg0rh90rqulqb574.apps.googleusercontent.com',
  clientSecret: 'QT3XCRQLbRADLQbFuZPD0NL6',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}))


router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google Oauth2 callback url
router.get('/auth/google/callback', passport.authenticate('google'), oauth2Controller.googleOauth2);



// 42
passport.use(new FortyTwoStrategy({
  clientID: `68abacbe412c524c68a6141b67ceb6b25ac395a93220385d592ac9f00bd97914`,
  clientSecret: `84ffed74ea3199186db0bbb003fd0f7e8ac47d636964d1fd3ae8c8308434ff1d`,
  callbackURL: '/auth/42/callback'
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));


router.get('/login/42',
  passport.authenticate('42'));

router.get('/auth/42/callback',
  passport.authenticate('42', { failureRedirect: '/login' }),
  oauth2Controller.Oauth2Via42);

module.exports = router;