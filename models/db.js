const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://Naren:Naren@cluster0.phl3v.mongodb.net/todo-list',
{
    useUnifiedTopology : true,
    useNewUrlParser : true
},
 err =>{
    if(err)
    console.log(`Error In DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})