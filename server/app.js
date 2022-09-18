const express = require('express');
const db = require('./db');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Router
var router = require('./routes.js');

const app = express();
module.exports.app = app;

// Set PORT
const PORT = 3000 || process.env.PORT;

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // nested obj parse datatype to JSON
app.use(express.urlencoded({ extended: true })); // catch html to parse

// Set up our routes
app.use('/', router);

// Serve the client files
app.use(express.static('client/dist'));

// If we are being run directly, run the server
if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
}


// if (!module.parent) {
//   app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
// }
