const mongoose = require('mongoose');
const TodoSchema = require('../schemas/TodoSchema')

const TodoModel = mongoose.model('Todo', TodoSchema)

module.exports = TodoModel
