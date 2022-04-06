module.exports = {
    /* noticias */
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers,
}

/*function menuNoticiasControllers(req, res) {
    res.render('index.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Noturno'
    })

}
*/

function menuNoticiasControllers(req, res) {
    res.render('./noticias/frm_noticiasMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias',
        autor: '5º ADS - Programação Script - Noturno'
    })

}

function menuNoticiasEsporteControllers(req, res) {
    res.render('./noticias/frm_noticiasEsporteMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias de Esporte',
        autor: '5º ADS - Programação Script - Noturno'
    })
}

function menuNoticiasEsporteFutebolControllers(req, res) {
    res.render('./noticias/frm_noticiasEsporteFutebolMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias de Futebol',
        autor: '5º ADS - Programação Script - Noturno'
    })
}