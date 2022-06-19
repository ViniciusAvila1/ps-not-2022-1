const controllers = require('../controllers/editorasControllers')

server.get('/editoras', controllers.editorasGetAll)

server.get('/editoras/:codigo', controllers.editorasGetById)



