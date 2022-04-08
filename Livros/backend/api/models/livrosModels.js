const conexao = require('../../config/conexao.js')

module.exports = {
    getAllLivros,
    getByIdLivros,
    updateLivros,
    deleteLivros,
    aiLivros
}

function getAllLivros(callback) {
    conexao.query('select * from livros', callback)
}

function getByIdLivros(id, callback) {
    conexao.query('select * from livros where liv_codigo = ' + id, callback)
}

function updateLivros(id, dados, callback) {
    const p_sql = "update livros set liv_titulo '" + dados.liv_titulo + 
        "', liv_edicao = '" + dados.liv_edicao +
        "', liv_isbn = '" + dados.liv_isbn +
        "', liv_ano = '" + dados.liv_ano +
        "', liv_ativoinativo = '" + dados.liv_ativoinativo +
        "', aut_codigo = '" + dados.aut_codigo +
        "', edt_codigo = '" + dados.edt_codigo +
        "' WHERE liv_codigo = '" + id + "'";

    console.log("Atualizando livros \n"+p_sql)

    conexao.query(p_sql, callback)
}

function deleteLivros(id, callback) {
    conexao.query('delete from livros where liv_codigo = ' + id, callback)
}

function aiLivros(id, ativo,  callback) {
    console.log("Livro Ativo/Inativo ",id + " - " + ativo)
    const p_sql = " update livros set liv_ativoinativo = '" + ativo + "' where liv_codigo = '" + id + "'";
    console.log("SQL: "+p_sql)

    conexao.query(p_sql, function(err, result) {
        conexao.query(p_sql, callback)
    })
    console.log("Retornando de A/I {MODEL} ")
}

