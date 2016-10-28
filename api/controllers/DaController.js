
module.exports = {

  'new' : function(req,res){
    res.view();
  },

  create  : function(req, res, next) {

    Da.create(req.params.all(), function daCreated(err, da) {
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        };
        return res.redirect('/da/new');
      }


      res.redirect('/da/index_da');



    });
  },

  edit_da : function(req, res, next){
    Da.findOne(req.param('id'), function foundDa (err, da){
      //find the user by id
      if(err) return next(err);
      if(!da) return next();

      res.view({
        da : da
      });
    });
  },

  show_da: function(req, res, next) {
    Da.findOne(req.param('id'), function foundDa(err, da) {
      if (err) return next(err);
      if (!da) return next();
      res.view({
        da: da
      });
    });
  },

  index_da : function(req, res, next){

    Da.find(function foundDas(err, das){
      if(err) return next(err);
      res.view({
        das: das
      });
    });
  },

  update_da : function(req,res,next){

    Da.update(req.param('id'),req.params.all(), function daUpdated(err){
      if(err){
        return res.redirect('/da/upload/'+req.param('id'));
      }

      res.redirect('/da/show_da/'+req.param('id'));
    });
  },

  destroy_da: function(req, res, next) {
    Da.findOne(req.param('id'), function foundDa(err, da) {

      if (err) return next(err);

      if(!da) return next('Digital Assignment doesn\'t exist ');

      Da.destroy(req.param('id'), function daDestroyed(err){
        if(err) return next(err);
      });

      res.redirect('/da/index_da');


    });

  }
};

