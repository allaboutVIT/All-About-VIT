//
// module.exports = {
//
//
//   attributes: {
//     uid: 'STRING',
//     name: 'STRING',
//     email: 'STRING',
//
//   }
// };
//





module.exports = {

  schema: true,



  attributes: {


    uid: 'STRING',

    name: {
      type: 'string',
    },



    regNo : {
      type : 'string'
    },

    email: {
      type: 'string',
      email: true,
      unique: true
    },

    encryptedPassword: {
      type: 'string'
    },









    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj._csrf;
      return obj;
    }



  } ,

    beforeValidation: function (values, next) {
    console.log('entered into beforeVlidation');
    if (typeof values.admin !== 'undefined') {
      if (values.admin === 'unchecked') {
        values.admin = false;
      } else  if (values.admin[1] === 'on') {
        values.admin = true;
      }
    }
    next();
  },

   // beforeCreate: function (values, next) {
   //   if (!values.password || values.password != values.confirmation) {
   //     return next({err: ["Password doesn't match password confirmation."]});
   //   }
   //
   //   require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
   //     if (err) return next(err);
   //     values.encryptedPassword = encryptedPassword;
   //
   //     next();
   //   });
   // }



};



