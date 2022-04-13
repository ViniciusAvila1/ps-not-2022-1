module.exports = {
    index,
    recordMenuControllers,
    recordMenuFalaBrasilControllers,
    recordMenuFalaBrasilCapitalControllers
}

function index(req, res) {
    res.render('./record/frm_inicioMenu.ejs', {
        title: 'Projeto Rotas',
        mensagem: 'Menu Principal',
        titulo: 'Menu Principal',
        autor: 'Vinícius Vicente Ávila Lima - 5º ADS - Programação Script - Noturno'
    })

}

function recordMenuControllers(req, res) {
    res.render('./record/frm_recordMenu.ejs', {
        title: 'Projeto Rotas',
        mensagem: 'Menu Record',
        titulo: 'Programação Record',
        autor: 'Vinícius Vicente Ávila Lima - 5º ADS - Programação Script - Noturno'
    })

}

function recordMenuFalaBrasilControllers(req, res) {
    res.render('./record/frm_recordFalaBrasilMenu.ejs', {
        title: 'Fala Brasil',
        mensagem: 'Programação Fala Brasil',
        titulo: 'Programação Fala Brasil',
        autor: 'Vinícius Vicente Ávila Lima - 5º ADS - Programação Script - Noturno'
    })

}

function recordMenuFalaBrasilCapitalControllers(req, res) {
    res.render('./record/frm_recordFalaBrasilCapitalMenu.ejs', {
        title: 'Notícias da Capital',
        mensagem: 'Programação Fala Brasil - Notícias da Capital',
        titulo: 'Notícias da Capital',
        autor: 'Vinícius Vicente Ávila Lima - 5º ADS - Programação Script - Noturno'
    })

}