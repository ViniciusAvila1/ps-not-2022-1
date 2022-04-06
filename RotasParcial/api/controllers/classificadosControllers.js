module.exports = {

    menuClassificadosControllers, 
    menuClassificadosAutomoveisControllers,
    menuClassificadosAutomoveisVwControllers
}

function menuClassificadosControllers(req, res){
    res.render('./classificados/frm_classificadosMenu.ejs', {
        title: 'Classificados',
        titulo: 'Classificados',
        autor: 'Vinícius Vicente Ávila Lima - 5° ADS - Programação Script - Noturno'
    })

}

function menuClassificadosAutomoveisControllers(req, res){
    res.render('./classificados/frm_classificadosAutomoveisMenu.ejs', {
        title: 'Automóveis',
        titulo: 'Automóveis',
        autor: 'Vinícius Vicente Ávila Lima - 5° ADS - Programação Script - Noturno'
    })

}

function menuClassificadosAutomoveisVwControllers(req, res){
    res.render('./classificados/frm_classificadosAutomoveisVwMenu.ejs', {
        title: 'Volkswagen',
        titulo: 'Volkswagen',
        autor: 'Vinícius Vicente Ávila Lima - 5° ADS - Programação Script - Noturno'
    })

}