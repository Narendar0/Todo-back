const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()
require('./models/db')


app.use(express.json())
app.use(cors())


app.use('/api/tasks' , router)


app.listen(process.env.PORT ||'8000' , err =>{
    if(err)
    console.log(err)
    console.log('Server is running in PORT number : 8000')
})