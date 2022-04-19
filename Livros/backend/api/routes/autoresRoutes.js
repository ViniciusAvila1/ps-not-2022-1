const controller = require('../controllers/autoresControllers.js')

server.get('/autores', controller.autoresIndex)

server.get('/autores/listar', controller.autoresGetAll)

server.get('/autores/:id', controller.autoresGetById)

server.put('/autores/:id', controller.autoresUpdate)

server.delete('/autores/:id', controller.autoresDelete)

server.get('/autores/ai/:id', controller.autoresAi)

