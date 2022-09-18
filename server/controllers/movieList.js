var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    models.movieList.get((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    console.log('post body:', req.body);
    let args = [req.body['title'], req.body['watched']];
    models.movieList.post(args, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(results);
      }
    });
  }
};