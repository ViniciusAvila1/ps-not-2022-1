const conexao = require('../../config/conexao.js')

module.exports = {
    getAllEngenheiros,
    getByIdEngenheiros,
    aiEngenheiros,
    deleteEngenheiros,    
    updateEngenheiros,
    novoEngenheiro
}

function getAllEngenheiros(callback){
    conexao.query('select * from engenheiros', callback)
}

function getByIdEngenheiros(id, callback){
    conexao.query('select * from engenheiros where eng_codigo = ' + id, callback)
}

function aiEngenheiros(id, ativo, callback){
    console.log("Engenheiros A/I.: "+ ativo)

    p_sql = "update engenheiros set eng_ativoinativo = '" + ativo + "' where eng_codigo = '" + id + "'";

    conexao.query(p_sql, function(err, result){
        conexao.query(p_sql, callback)
    })
    console.log("Retornando de A/I { MODEL }")
}

function deleteEngenheiros(id, callback){
    conexao.query('delete from engenheiros where eng_codigo = ' + id, callback)
}

function updateEngenheiros(id, dados, callback){

   
    const p_sql = "update engenheiros set eng_nome = '" + dados.eng_nome + 
        "', eng_ativoinativo = '" + dados.eng_ativoinativo +
        "', eng_apelido = '"      + dados.eng_apelido +
        "', eng_crea = '"         + dados.eng_crea +
        "', eng_telefone = '"     + dados.eng_telefone +
        "', eng_dtformatura = '"        + dados.eng_dtformatura +
        
        "' where eng_codigo = '" + id + "'";

    console.log("Atualizando engenheiros/Update \n" + p_sql);

    conexao.query(p_sql, callback)

}

function novoEngenheiro(dados, callback) {
    var msql = 'INSERT INTO engenheiros SET ? '

    conexao.query(msql, dados, callback)
}

