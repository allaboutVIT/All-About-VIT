


var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[dateObj.getMonth()];

newdate = day + "/" + n + "/" + year;



module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,


  attributes: {

    body : {
      type : 'text'
    },

    comments: {
      type: 'string',
    },

    creationDate: {
      columnName: 'cre_dt',
      type: 'string',

      defaultsTo: function() {return newdate;}
    },



    updateDate: {
      columnName: 'upd_dt',
      type: 'datetime',
      defaultsTo: function() {return newdate;}
    }



  },

  beforeValidate:function(values,next) {
    values.updateDate= new Date();
    next();
  }
};

