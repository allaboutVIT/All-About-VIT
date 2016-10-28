var passport = require('passport');

module.exports = {


  // login action will render the login view
  login: function (req, res) {
    console.log('entered into auth-login');

    res.view();
  },

  // logout action will logout using Passport
  // and redirect
  logout: function(req, res) {

    req.logout();
    res.redirect('/home');
  },

  // Here is were we specify our facebook strategy.
  // https://developers.facebook.com/docs/
  // https://developers.facebook.com/docs/reference/login/
  facebook: function(req, res) {

    passport.authenticate('facebook',
      { failureRedirect: '/login', scope: ['email'] },

      function(err,user) {

        req.logIn(user, function(err) {

          if (err) {
            console.log(err);
            res.view('500');
            return;
          }


            req.session.authenticated = true;
            req.session.User = user;
            res.redirect('/user/show/' + user.id);
            return;

        });
      })(req, res);
  }

};
