const controller = require('../controllers/livrosControllers.js')

server.get('/livros', controller.livrosIndex)

server.get('/livros/listar', controller.livrosGetAll)


