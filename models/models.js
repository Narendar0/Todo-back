const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete :Boolean
})

const Task = mongoose.model('task',TaskSchema)    //singular form of collection name    //model searches for a collections in DB

module.exports = Task