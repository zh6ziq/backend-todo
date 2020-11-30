var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos');


router.post('/:id/comment', todoController.addComment)
/* GET todos listing. */
router.get('/', todoController.getAllTodos)

/* GET one todo listing only. */
router.get('/:id', todoController.getTodo)

// POST todos listing
router.post('/', todoController.createTodo)

// UPDATE todos listing using PATCH
router.patch('/:id', todoController.updateTodo)

// DELETE todos listing
router.delete('/:id', todoController.deleteTodo)

module.exports = router;
