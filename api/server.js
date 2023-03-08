const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const userRouter = require('./user/user-router')

server.use('/api/user', userRouter)

module.exports = server