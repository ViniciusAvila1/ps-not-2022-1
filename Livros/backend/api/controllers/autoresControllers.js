const models = require('../models/autoresModels.js')

module.exports = {
    autoresIndex,
    autoresGetAll,
    autoresGetById,
    autoresUpdate,
    autoresDelete,
    autoresAi
}

function autoresIndex(req, res) {
    res.json('Rota Autores Encontrada!')
    console.log('Rota Autores Encontrada!')
    
}

function autoresGetAll(req, res) {
    console.log('Rota Autores Listar!')
    models.getAllAutores(function(err, resposta){
        console.log('Retorno de autores { MODELS }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}


function autoresGetById(req, res) {
    const id = req.params.id
    console.log('Parametro Autores Recebido: '+ id)

    models.getByIdAutores(id, function(err, resposta){
        console.log('Retorno de Autores Id { M O D E L S }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

   
function autoresUpdate(req, res) {
    const id = req.params.id
    const dados  = req.body;

    console.log('Atualização de Autores {MODEL}: ' + id)
    console.log(dados)

    models.updateAutores(id, dados, function(err, resposta){
        console.log('Retorno Atualização de Autores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

function autoresDelete(req, res) {
    const id = req.params.id
    console.log('Parametro Autores Delete Recebido: '+id)

    models.deleteAutores(id, function(err, resposta){
        console.log('Retorno de Autores Delete { M O D E L S }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

function autoresAi(req, res) {
    const id = req.params.id
    let p_ativo = ""

    console.log('Parametro Autor Ativo/Inativo Recebido: '+id)
    models.getByIdAutores(id, function(err, resposta){
        console.log('Ativo/Inativo: { M O D E L S }', resposta[0].aut_ativoinativo)
        p_ativo = resposta[0].aut_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == 'A'){
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("A/I: "+ p_ativo)
            models.aiAutores(id, p_ativo, function(err, result){
                if(err){
                    throw err
                } else {
                    console.log("Ativo/Inativo realizada com sucesso!!!")
                }
            })
        }
        res.json(resposta)
    })   
}

