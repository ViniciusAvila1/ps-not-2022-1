const models = require('../models/engenheirosModels.js')

module.exports = {
    engenheirosGetAll,
    engenheirosGetById,
    engenheirosAi,
    engenheirosDelete,
    engenheirosUpdate,
    engenheirosNovo
}

function engenheirosGetAll(req, res) {
    console.log('Listar Engenheiros { MODEL }')
    models.getAllEngenheiros(function (err, resposta) {
        console.log('Retorno de Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 

}

function engenheirosGetById(req, res) {
    console.log('Consultar Engenheiros { MODEL }')
    const id = req.params.codigo
    models.getByIdEngenheiros(id, function (err, resposta) {
        console.log('Retorno Consulta Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}


function engenheirosAi(req, res) {
    const id = req.params.codigo
    let p_ativo = ""
    console.log('Ativar/Inativar Engenheiros { MODEL } ' + id)

    models.getByIdEngenheiros(id, function (err, resposta) {
        console.log('Retorno Consulta Engenheiros A/I { M O D E L }', resposta[0].eng_nome)
        console.log("Registro A/I: "+resposta[0].eng_ativoinativo)
        p_ativo = resposta[0].eng_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == "A") {
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("Registro A/I: "+ p_ativo)
            models.aiEngenheiros(id, p_ativo, function(err, result){
                if(err){
                    throw err
                }else {
                    console.log("Processo A/I realizado com sucesso!")
                }
            })
            res.json(resposta)
        }
    }) 

}

function engenheirosDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Engenheiros { MODEL } '+ id)
    models.deleteEngenheiros(id, function (err, resposta) {
        console.log('Retorno Delete Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function engenheirosUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Engenheiros { MODEL } '+id)
    console.log(dados)

    models.updateEngenheiros(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function engenheirosNovo(req, res) {
    // body recebe o que estiver nos inputs
    var dados = req.body;
    console.log("Gravando novo registro de engenheiros...");
    console.log(req.body)
    // como a chave primária não altera, fica null
    dados.eng_codigo = null
    console.log("Inserindo novo registro de engenheiros...")
    models.novoEngenheiro(dados, function(err, result) {
        if (err) {
            throw err
        }
        res.status(201)
        res.redirect('/engenheiros')
    })
}
