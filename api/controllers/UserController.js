var passport = require('passport');

module.exports = {



  // 'new' : function( req, res){
  //   res.view();
  // },

  login: function (req, res) {
    res.view();
  },

  // logout action will logout using Passport
  // and redirect
  logout: function(req, res) {

    req.logout();
    res.redirect('/login');
  },


  facebook: function(req, res) {
    passport.authenticate('facebook',
      { failureRedirect: '/login', scope: ['email'] },

      function(err, user) {

        req.logIn(user, function(err) {
          if (err) {
            res.view('500');
            return;
          }

          res.redirect('/user/show/' + user.id);
          return;
        });
      })(req, res);
  },



  create : function(req, res, next){

    User.create( req.params.all(), function userCreated(err, user){
        if(err) {
          console.log(err);
        req.session.flash={
          err : err
        };
        return res.redirect('/user/new');
      }
      console.log('passed');
      req.session.authenticated = true;
      req.session.User=user;
      console.log('again passed');


      res.redirect('/user/show/' + user.id);

    });

  },



  show: function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  hostels_1 : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },



  singlebedac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  singlebednonac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  twobedac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  twobednonac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  threebedac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  threebednonac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  fourbedac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  fourbednonac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  sixbedac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  sixbednonac : function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  mess_1 : function(req, res, next){
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },



  restaurents_1 : function(req, res, next){
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },





  index : function(req, res, next){

    User.find(function foundUsers(err, users){
      if(err) return next(err);
      res.view({
        users: users
      });
    });
  },
  // //this function is used for returning all the users in form of array.
  //
  edit : function(req, res, next){
    User.findOne(req.param('id'), function foundUser (err, user){
      //find the user by id
      if(err) return next(err);
      if(!user) return next();

      res.view({
        user : user
      });
    });
  },

  update : function(req,res,next){

    User.update(req.param('id'),req.params.all(), function userUpdated(err){
      if(err){
        return res.redirect('/user/edit/'+req.param('id'));
      }



      res.redirect('/user/show/'+req.param('id'));
    });
  },


  destroy: function(req, res, next) {
    User.findOne(req.session.User.id, function foundUser(err, user) {

      if (err) return next(err);

      if(!user) return next('User doesn\'t exist ');

      User.destroy(req.param('id'), function userDestroyed(err){
        if(err) return next(err);
      });

      res.redirect('/user/index');


    });

  }
};





