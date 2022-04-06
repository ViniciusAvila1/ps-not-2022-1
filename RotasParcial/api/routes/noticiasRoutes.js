const controllerNoticias = require('../controllers/noticiasControllers.js')

app.get('/noticias/noticiasMenu', controllerNoticias.menuNoticiasControllers)

app.get('/noticias/noticiasEsporteMenu', controllerNoticias.menuNoticiasEsporteControllers)

app.get('/noticias/noticiasEsporteFutebolMenu', controllerNoticias.menuNoticiasEsporteFutebolControllers)


// app.get('/', controller.index)

