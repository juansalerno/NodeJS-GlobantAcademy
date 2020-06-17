const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json()) // to automatically parse incomming JSON to an object, so we can acces it in opur request handlers

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is on port ' + port)
})

