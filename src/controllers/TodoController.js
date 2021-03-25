const TodoService = require('../services/TodoService')
const autoBind = require("auto-bind");

class TodoController {
    constructor() {
        this.service = new TodoService()
        autoBind(this)
    }

    async readAll(req, res) {
        return res.send(await this.service.readAll())
    }

    async readOne(req, res) {
        const {id} = req.params

        return res.send(await this.service.readOneById(id))
    }

    async create(req, res) {
        const {todo} = req.body

        return res.send(await this.service.create(todo))
    }

    async update(req, res) {
        const {todo} = req.body

        return res.send(await this.service.update(todo))
    }

    async delete(req, res) {
        const {id} = req.params

        const result = await this.service.delete(id)

        return res.send(result)
    }
}

module.exports = new TodoController()
