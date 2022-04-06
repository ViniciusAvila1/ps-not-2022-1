const http = require('http')
const server = require('./config/aplicativo.js')

const conexao = require('./config/conexao.js')

http.createServer(server).listen(server.get('porta'), function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})



  