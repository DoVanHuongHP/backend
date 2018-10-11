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


  passport.session()(request,response,next);
   //hàm được gọi khi xác thực thành công để lưu thông tin user vào session
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  //hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};

