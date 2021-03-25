const TodoModel = require('../db/models/TodoModel')
const autoBind = require("auto-bind");

class TodoService {
    constructor() {
        this.model = TodoModel
        autoBind(this)
    }

    async readAll() {
        return this.model.find()
    }

    async readOneById(id) {
        return this.model.findById({
            _id: id
        })
    }

    async create(todo) {
        return this.model.create(todo);
    }

    async update(todo) {
        return this.model.updateOne({
            _id: todo.id
        }, {$set: {...todo}})
    }

    async delete(id) {
        return this.model.deleteOne({
            _id: id
        });
    }
}

module.exports = TodoService
