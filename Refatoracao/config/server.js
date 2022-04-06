const express = require('express')
const path = require('path')
const consign = require('consign')
const rotas = express.Router()

const app = express()

//const porta = process.env.PORT = 3000
app.set('porta', 3000)
app.use(express.json())
app.use('/', rotas)
 
app.set('views', path.join(__dirname, './')) // dirname é a referencia inicial
app.set('view engine', 'ejs')

app.use('/static', express.static(__dirname + '/publico'))
app.use(express.static('publico'))
app.use(express.static('imagens'))
app.use(express.static('estilos'))

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('route')
    .into(app)
;

module.exports = app