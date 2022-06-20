const models = require('../models/autoresModels.js')

module.exports = {
    autoresGetAll,
    autoresGetById,
    autoresAi,
    autoresDelete,
    autoresUpdate,
    autoresNovo
}

function autoresGetAll(req, res) {
    console.log('Listar Autores { MODEL }')
    models.getAllAutores(function (err, resposta) {
        console.log('Retorno de Autores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 

}

function autoresGetById(req, res) {
    console.log('Consultar Autores { MODEL }')
    const id = req.params.codigo
    models.getByIdAutores(id, function (err, resposta) {
        console.log('Retorno Consulta Autores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}


function autoresAi(req, res) {
    const id = req.params.codigo
    let p_ativo = ""
    console.log('Ativar/Inativar Autores { MODEL } ' + id)

    models.getByIdAutores(id, function (err, resposta) {
        console.log('Retorno Consulta Autores A/I { M O D E L }', resposta[0].aut_nome)
        console.log("Registro A/I: "+resposta[0].aut_ativoinativo)
        p_ativo = resposta[0].aut_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == "A") {
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("Registro A/I: "+p_ativo)
            models.aiAutores(id, p_ativo, function(err, result){
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

function autoresDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Autores { MODEL } '+id)
    models.deleteAutores(id, function (err, resposta) {
        console.log('Retorno Delete Autores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function autoresUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Autores { MODEL } '+id)
    console.log(dados)

    models.updateAutores(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Autores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function autoresNovo(req, res) {
    // body recebe o que estiver nos inputs
    var dados = req.body;
    console.log("Gravando novo registro de autores...");
    console.log(req.body)
    // como a chave primária não altera, fica null
    dados.aut_codigo = null
    console.log("Inserindo novo registro de autores...")
    models.novoAutor(dados, function(err, result) {
        if (err) {
            throw err
        }
        res.status(201)
        res.redirect('/autores')
    })
}
