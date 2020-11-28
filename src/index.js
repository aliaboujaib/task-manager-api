const express = require('express')
require('./db/mongoose.js')
const UsersRouter = require('./routers/user')
const TasksRouter = require('./routers/task')

const port = process.env.PORT
const app = express()


app.use(express.json())
app.use(UsersRouter)
app.use(TasksRouter)


app.listen(port , () => {
    console.log('connecting on port' , port)
})

