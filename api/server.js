const express = require('express')


const server = express()
server.use(express.json())

const macrosRouter = require('./macros/macros-router')

module.exports = server