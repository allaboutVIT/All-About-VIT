
module.exports = {

  'new1' : function(req,res){
    res.view();
  },

  'network' : function (req, res) {
    res.view()
  },

  create  : function(req, res, next) {

    Url.create(req.params.all(), function urlCreated(err, url) {
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        };
        return res.notFound();
      }


      res.redirect('/url/index_url/' );

       // res.redirect('/url/show_url/' + url.id);


    });
  },

  edit_url : function(req, res, next){
    Url.findOne(req.param('id'), function foundUrl (err, url){
      //find the user by id
      if(err) return next(err);
      if(!url) return next();

      res.view({
        url : url
      });
    });
  },

  show_url: function(req, res, next) {
    Url.findOne(req.param('id'), function foundUrl(err, url) {
      if (err) return next(err);
      if (!url) return next();
      res.view({
        url: url
      });
    });
  },

  index_url : function(req, res, next){

    Url.find(function foundUrls(err, urls){
      if(err) return next(err);
      res.view({

        urls: urls
      });
    });
  },

  update_url : function(req,res,next){

    Url.update(req.param('id'),req.params.all(), function urlUpdated(err){
      if(err){
        return res.notFound();
      }

      res.redirect('/url/show_url/'+req.param('id'));
    });
  },




};

