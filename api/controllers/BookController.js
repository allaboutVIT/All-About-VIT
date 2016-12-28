



module.exports = {

  create  : function(req, res, next) {

    Book.create(req.params.all(), function bookCreated(err, book) {
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        };
        return res.redirect('/book/index_book');
      }
      res.redirect('/book/index_book');



    });
  },

  index_book : function(req, res, next){

    Book.find(function foundBooks(err, books){
      if(err) return next(err);
      res.view({
        books: books
      });
    });
  },

  edit_book : function(req, res, next){
    Book.findOne(req.param('id'), function foundBook (err, book){
      //find the user by id
      if(err) return next(err);
      if(!book) return next();

      res.view({
        book : book
      });
    });
  },

  update_book : function(req,res,next){

    Book.update(req.param('id'),req.params.all(), function BookUpdated(err){
      if(err){
        return res.redirect('/book/upload/'+req.param('id'));
      }

      res.redirect('/book/index_book/'+req.param('id'));
    });
  },

  destroy_book: function(req, res, next) {
    Book.findOne(req.param('id'), function foundBook(err, book) {

      if (err) return next(err);

      if(!book) return next('Digital Assignment doesn\'t exist ');

      Book.destroy(req.param('id'), function BookDestroyed(err){
        if(err) return next(err);
      });

      res.redirect('/book/index_book');


    });

  }

};

