const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json()) // to automatically parse incomming JSON to an object, so we can access it in our request handlers

app.use(userRouter)
app.use(taskRouter)

module.exports = app