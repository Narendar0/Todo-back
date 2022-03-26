const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()
require('./models/db')


app.use(express.json())
app.use(cors(
   { origin : ["https://localhost:8000/api","https://dashboard.heroku.com/apps/cap-todo-list" ]
}
))


app.use('/api/tasks' , router)

app.listen(process.env.PORT || '8000' , err => {
    if(err) console.log(err)
    console.log('Server is Running at PORT number : 8000')
})