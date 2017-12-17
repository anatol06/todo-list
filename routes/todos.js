var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');


// Route - List All Todos (GET)
// Route - Create a new Todo (POST)
router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

// Route - Retrieve a Todo (by ID) (GET)
// Route - Update a Todo (PUT)
// Route - Delete a Todo (DELETE)
  router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);


module.exports = router;