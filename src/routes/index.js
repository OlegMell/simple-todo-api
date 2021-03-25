const todoRouter = require("./todos");
const api = require('express').Router()

api.use('/api/todos', todoRouter)

module.exports = api
