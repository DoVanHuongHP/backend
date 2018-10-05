'use strict';

var passport = require('passport');
// const Auth0Strategy = require('passport-auth0');

/**
 * Policy for Sails that initializes Passport.js to use.
 *
 * @param   {Request}   request     Request object
 * @param   {Response}  response    Response object
 * @param   {Function}  next        Callback function
 */
module.exports = function(request, response, next) {
  sails.log.verbose(__filename + ':' + __line + ' [Policy.Passport() called]');

  // Initialize Passport
  passport.initialize()(request, response, next);
};


// var strategy = new Auth0Strategy({
//   domain: 'YOUR_AUTH0_DOMAIN',
//   clientID: 'YOUR_CLIENT_ID',
//   clientSecret: 'YOUR_CLIENT_SECRET', // Replace this with the client secret for your app
//   callbackURL: 'http://localhost:3000/callback'
//  },
//  function(accessToken, refreshToken, extraParams, profile, done) {
//    // accessToken is the token to call Auth0 API (not needed in the most cases)
//    // extraParams.id_token has the JSON Web Token
//    // profile has all the information from the user
//    return done(null, profile);
//  }
// );

// passport.use(strategy);

// app.use(passport.initialize());

// // middleware sử dụng kịch bản Passport , sử dụng session lấy thông tin user rồi gắn vào req.user.
// app.use(passport.session());


// //hàm được gọi khi xác thực thành công để lưu thông tin user vào session
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });


// //hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
// passport.deserializeUser(function(user, done) {
// //   done(null, user);
// });