const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const authRouter = require('./auth/auth-router')
const userRouter = require('./user/user-router')

server.use('/api/user', userRouter)
server.use('/api/auth', authRouter)

server.use(( err, req, res, next) => {
    res.status( err.status || 500).json({
      message: err.message || 'Internal server error',
      stack: err.stack
    })
  })

module.exports = server