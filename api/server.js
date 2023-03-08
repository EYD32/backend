const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const macrosRouter = require('./user/user-router')

server.use('/api/macros', macrosRouter)

module.exports = server