const controller = require('../controllers/livrosControllers.js')

server.get('/livros', controller.livrosIndex)

server.get('/livros/listar', controller.livrosGetAll)

server.get('/livros/:id', controller.livrosGetById)

server.put('/livros/:id', controller.livrosUpdate)

server.delete('/livros/:id', controller.livrosDelete)

server.get('/livros/ai/:id', controller.livrosAi)

