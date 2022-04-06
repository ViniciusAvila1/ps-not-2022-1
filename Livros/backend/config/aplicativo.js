const express = require('express')
const consign = require('consign')
const cors = require('cors') // cors permite a comunicação entre front e back, pois ambos vêm de portas diferentes
const body = require('body-parser')

server = express()
  
server.use(cors())
server.use(express.json())

server.set('porta', 3000)
server.set('url', 'http://localhost:')


consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server

