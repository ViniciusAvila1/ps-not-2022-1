<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const http = require('http')
const routes = require('./src/api/routes/routes')

require('./src/database/indexDb.js')
 
server = express()
server.use(cors())

server.use(express.json())

server.use(routes)

// configurar a porta e url para execução do aplicativo
server.set('porta', 3000)
server.set('url', 'http://localhost:')

http.createServer(server).listen(server.get('porta'), function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})


=======
const express = require('express')
const cors = require('cors')
const http = require('http')
const routes = require('./src/api/routes/routes')

require('./src/database/indexDb.js')
 
server = express()
server.use(cors())

server.use(express.json())

server.use(routes)

server.set('porta', 3000)
server.set('url', 'http://localhost:')

http.createServer(server).listen(server.get('porta'), function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})


>>>>>>> 3cf89df4c684e2e335dc1ad467e24191dc014868
