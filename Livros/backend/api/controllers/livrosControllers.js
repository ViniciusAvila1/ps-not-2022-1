const models = require('../models/livrosModels.js')

module.exports = {
    livrosIndex,
    livrosGetAll,
    livrosGetById,
    livrosUpdate,
    livrosDelete,
    livrosAi
}

function livrosIndex(req, res) {
    res.json('Rota Livros Encontrada!')
    console.log('Rota Livros Encontrada!')
    
}

function livrosGetAll(req, res) {
    console.log('Rota Livros Listar!')
    models.getAllLivros(function(err, resposta){
        console.log('Retorno de livros { MODELS }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}


function livrosGetById(req, res) {
    const id = req.params.id
    console.log('Parametro Livro Recebido: '+id)

    models.getByIdLivros(id, function(err, resposta){
        console.log('Retorno de livros Id { M O D E L S }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

   
function livrosUpdate(req, res) {
    const id = req.params.id
    const dados  = req.body;

    console.log('Parametro Livro Update Recebido: ' + id)
    console.log(dados)

    models.updateLivros(id, dados, function(err, resposta){
        console.log('Retorno de livros Id { M O D E L S }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

function livrosDelete(req, res) {
    const id = req.params.id
    console.log('Parametro Livro Delete Recebido: '+id)

    models.deleteLivros(id, function(err, resposta){
        console.log('Retorno de livros Delete { M O D E L S }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })   
}

function livrosAi(req, res) {
    const id = req.params.id
    let p_ativo = ""

    console.log('Parametro Livro Ativo/Inativo Recebido: '+id)
    models.getByIdLivros(id, function(err, resposta){
        console.log('Ativo/Inativo: { M O D E L S }', resposta[0].liv_ativoinativo)
        p_ativo = resposta[0].liv_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == 'A'){
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("A/I: "+p_ativo)
            models.aiLivros(id, p_ativo, function(err, result){
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

