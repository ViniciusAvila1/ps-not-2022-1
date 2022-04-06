const controllerClassificados = require('../controllers/classificadosControllers.js')


app.get('/classificados/classificadosMenu', controllerClassificados.menuClassificadosControllers)

app.get('/classificados/classificadosAutomoveisMenu', controllerClassificados.menuClassificadosAutomoveisControllers)

app.get('/classificados/classificadosAutomoveisVwMenu', controllerClassificados.menuClassificadosAutomoveisVwControllers)


// app.get('/', controller.index)

