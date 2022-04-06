const mysql = require('mysql2')
const database = 'dados221n'

const conexao = mysql.createConnection({
    user: 'root',
    password:'fatec123*',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao MySQL! ', err)
        return
    }
    conexao.query('USE ' + database)
    console.log('\nConexão MySQL estabilizada com sucesso! ' )
})


module.exports = conexao;