const todoRouter = require('express').Router()
const TodoController = require('../../controllers/TodoController')

todoRouter.get('/', TodoController.readAll)
todoRouter.get('/:id', TodoController.readOne)
todoRouter.post('/', TodoController.create)
todoRouter.patch('/', TodoController.update)
todoRouter.delete('/:id', TodoController.delete)

module.exports = todoRouter
