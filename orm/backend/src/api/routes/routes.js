const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const controllersCategorias = require('../controllers/categoriasControllers')
const controllersDepartamentos = require('../controllers/departamentosControllers')
const controllersCidades = require('../controllers/cidadesControllers')
const controllersCursos = require('../controllers/cursosControllers')
const controllersProdutos = require('../controllers/produtosControllers')
const controllersCandidatos = require('../controllers/candidatosControllers')
const controllersTelefones = require('../controllers/telefonesControllers')

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

// rotas de cidades
routes.post('/cidades', controllersCidades.store)
routes.get('/cidades', controllersCidades.index)
routes.get('/cidades/:codigo_id', controllersCidades.indexId)
routes.put('/cidades/:codigo_id', controllersCidades.update)
routes.delete('/cidades/:codigo_id', controllersCidades.delete)

// rotas de cursos
routes.post('/cursos', controllersCursos.store)
routes.get('/cursos', controllersCursos.index)
routes.get('/cursos/:codigo_id', controllersCursos.indexId)
routes.put('/cursos/:codigo_id', controllersCursos.update)
routes.delete('/cursos/:codigo_id', controllersCursos.delete)

// rotas de produtos
routes.post('/produtos', controllersProdutos.store)
routes.get('/produtos', controllersProdutos.index)
routes.get('/produtos/:codigo_id', controllersProdutos.indexId)
routes.put('/produtos/:codigo_id', controllersProdutos.update)
routes.delete('/produtos/:codigo_id', controllersProdutos.delete)

// rotas de candidatos
routes.post('/candidatos', controllersCandidatos.store)
routes.get('/candidatos', controllersCandidatos.index)
routes.get('/candidatos/:codigo_id', controllersCandidatos.indexId)
routes.put('/candidatos/:codigo_id', controllersCandidatos.update)
routes.delete('/candidatos/:codigo_id', controllersCandidatos.delete)

// rotas de telefones
routes.post('/telefones', controllersTelefones.store)
routes.get('/telefones', controllersTelefones.index)
routes.get('/telefones/:codigo_id', controllersTelefones.indexId)
routes.put('/telefones/:codigo_id', controllersTelefones.update)
routes.delete('/telefones/:codigo_id', controllersTelefones.delete)

module.exports = routes