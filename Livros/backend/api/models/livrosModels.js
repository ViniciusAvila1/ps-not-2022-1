const conexao = require('../../config/conexao')

module.exports = {
    getAllLivros
}

function getAllLivros(callback){
    conexao.query('select * from livros', callback)
}