var mongoose = require('mongoose');
		mongoose.set('debug', true);

var mongoURI = require('../config/keys.js');

mongoose.connect(mongoURI)
  .then(() => console.log('DB connection succesful'))
  .catch((err) => console.error(err));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

