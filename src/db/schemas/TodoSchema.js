const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    beginDate: Date,
    endDate: Date,
    status: Number,
    priority: Number,
    archived: Boolean
})

module.exports = TodoSchema
