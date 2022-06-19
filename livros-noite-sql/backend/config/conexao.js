const mysql = require('mysql2')
const database = 'dados221n'
 
const conexao = mysql.createConnection({
    user: 'root',
    password: 'ViniciusLima27',
    host: '127.0.0.1',
    port: 3306
})

conexao.connect((err) => {
    if(err){
        console.log('Erro ao conectar no MySQL')
        return
    }

    conexao.query('USE ' + database)
    console.log('\nConexão MySQL estabilizada com sucesso!')
})

module.exports = conexao;

