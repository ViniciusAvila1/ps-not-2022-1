const controllers = require('../controllers/engenheirosControllers.js')

server.get('/engenheiros', controllers.engenheirosGetAll)

server.get('/engenheiros/:codigo', controllers.engenheirosGetById)

server.get('/engenheiros/ai/:codigo', controllers.engenheirosAi)

server.delete('/engenheiros/:codigo', controllers.engenheirosDelete)

server.put('/engenheiros/:codigo', controllers.engenheirosUpdate)

server.post('/engenheiros', controllers.engenheirosNovo)