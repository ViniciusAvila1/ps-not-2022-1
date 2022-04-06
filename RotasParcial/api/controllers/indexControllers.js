module.exports = {
    index
}

function index(req, res) {
    res.render('index.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Noturno'
    })

}

   