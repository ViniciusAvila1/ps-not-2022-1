const controller = require('../controllers/recordControllers.js')

app.get('/', controller.index)

app.get('/record/recordMenu', controller.recordMenuControllers)

app.get('/record/recordMenu/recordFalaBrasilMenu', controller.recordMenuFalaBrasilControllers)

app.get('/record/recordMenu/recordFalaBrasilMenu/recordFalaBrasilCapitalMenu', controller.recordMenuFalaBrasilCapitalControllers)


