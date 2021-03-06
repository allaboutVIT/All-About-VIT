

module.exports = {

  'new': function (req, res) {
    res.view('session/new');
  },

  create: function (req, res, next) {
    if (!req.param('email') || !req.param('password')) {
      var usernamePasswordRequiredError = [{
        name: 'usernamePasswordRequired',
        message: 'You must enter both a username and password.'
      }];

      req.session.flash = {
        err: usernamePasswordRequiredError
      };

      res.redirect('/session/new');
      return;
    }
    User.findOneByEmail(req.param('email'), function foundUser(err, user) {
      if (err) return next(err);

      // If no user is found...
      if (!user) {
        var noAccountError = [{
          name: 'noAccount',
          message: 'The email address ' + req.param('email') + ' not found.'
        }];
        req.session.flash = {
          err: noAccountError
        };
        res.redirect('/session/new');
        return;
      }

      bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {

          if (err) return next(err);

          // If the password from the form doesn't match the password from the database...
          if (!valid) {
            var usernamePasswordMismatchError = [{
              name: 'usernamePasswordMismatch',
              message: 'Invalid username and password combination.'
            }]
            req.session.flash = {
              err: usernamePasswordMismatchError
            }
            res.redirect('/session/new');
            return;
          }

        req.session.authenticated = true;
        req.session.User = user;

      res.redirect('/user/show/' + user.id);
    });

    });

  },


  destroy: function (req, res, next) {

    req.session.destroy();

    // Redirect the browser to the sign-in screen
    res.redirect('/');


  }
};

