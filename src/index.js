const express = require('express')
const app = express()
require('./db/mongoose.js')
const bodyParser = require('body-parser')
const port = process.env.PORT
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

app.use(bodyParser.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running')
})