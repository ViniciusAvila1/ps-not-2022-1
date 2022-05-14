const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const controllersCategorias = require('../controllers/categoriasControllers')
const controllersDepartamentos = require('../controllers/departamentosControllers')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de categorias
routes.post('/categorias', controllersCategorias.store)
routes.get('/categorias', controllersCategorias.index)
routes.get('/categorias/:codigo_id', controllersCategorias.indexId)
routes.put('/categorias/:codigo_id', controllersCategorias.update)
routes.delete('/categorias/:codigo_id', controllersCategorias.delete)

// rotas de departamentos
routes.post('/departamentos', controllersDepartamentos.store)
routes.get('/departamentos', controllersDepartamentos.index)
routes.get('/departamentos/:codigo_id', controllersDepartamentos.indexId)
routes.put('/departamentos/:codigo_id', controllersDepartamentos.update)
routes.delete('/departamentos/:codigo_id', controllersDepartamentos.delete)

module.exports = routes

