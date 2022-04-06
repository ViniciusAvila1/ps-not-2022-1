const models = require('../models/livrosModels')

module.exports = {
    livrosIndex,
    livrosGetAll
}

function livrosIndex(req, res) {
    res.json('Rota Livros encontrada!')
    console.log('Rota Livros encontrada!')
}

function livrosGetAll(req, res) {
    models.getAllLivros(function (err, resposta) {
        console.log('Retorno de livros { MODELS }', resposta)
        if (err) {
            throw err
        }
        else {
            res.json(resposta)
        }
    })
}