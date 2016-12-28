module.exports = {

  attributes: {

    book_name : {
      type : 'string',
      required : true
    },

    subject: {
      type : 'string',
      required : true
    },

    email : {
      type : 'email',
      required : true,
      unique : true
    }
  }
};
