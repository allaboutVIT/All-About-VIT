/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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

};

