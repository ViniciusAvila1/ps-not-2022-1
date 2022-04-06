const express = require('express')
const path = require('path')
const rotas = express.Router()
const consign = require('consign')

app = express()
  
app.use(express.json())

app.set('porta', 3000)

app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

app.set('views', path.join(__dirname, '../api/views'))
  
app.use('/', rotas)

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app

