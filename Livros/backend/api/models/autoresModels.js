const conexao = require('../../config/conexao.js')

module.exports = {
    getAllAutores,
    getByIdAutores,
    updateAutores,
    deleteAutores,
    aiAutores
}

function getAllAutores(callback) {
    conexao.query('select * from autores', callback)
}

function getByIdAutores(id, callback) {
    conexao.query('select * from autores where aut_codigo = ' + id, callback)
}

function updateAutores(id, dados, callback) {
    const p_sql = "update autores set aut_nome '" + dados.aut_nome + 
        "', aut_ativoinativo = '" + dados.aut_ativoinativo +
        "', aut_apelido = '" + dados.aut_apelido +
        "', aut_sexo = '" + dados.aut_sexo +
        "', aut_telefone = '" + dados.aut_telefone +
        "', aut_email = '" + dados.aut_email +

        "' where aut_codigo = '" + id + "'";

    console.log("Atualizando Autores/Update \n"+ p_sql)

    conexao.query(p_sql, callback)
}

function deleteAutores(id, callback) {
    conexao.query('delete from autores where aut_codigo = ' + id, callback)
}

function aiAutores(id, ativo,  callback) {
    const p_sql = " update autores set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";
    console.log("SQL: "+p_sql)

    conexao.query(p_sql, function(err, result) {
        conexao.query(p_sql, callback)
    })
    console.log("Retornando de A/I {MODEL} ")
}

