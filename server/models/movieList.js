var db = require('../db');

module.exports = {
  // a function which produces all the messages
  get: function (callback) {
    db.query(
      'SELECT * FROM movieList',
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          console.log(results);
          callback(null, results);
        }
      }
    );
  },
  // a function which can be used to insert a message into the database
  post: function (args, callback) {
    db.query(
      'INSERT INTO movieList (title, watched ) VALUES (?, ?)', args,
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  }

};