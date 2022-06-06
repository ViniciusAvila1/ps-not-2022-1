<<<<<<< HEAD
const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const categorias = require('../api/models/categoriasModels')
const departamentos = require('../api/models/departamentosModels')
const cidades = require('../api/models/cidadesModels')
/*const cursos = require('../api/models/cursosModels')
const produtos = require('../api/models/produtosModels')
const candidatos = require('../api/models/candidatosModels')
const telefones = require('../api/models/telefonesModels')*/

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

categorias.init(conexao)
departamentos.init(conexao)
cidades.init(conexao)
/* cursos.init(conexao)
produtos.init(conexao)
candidatos.init(conexao)
telefones.init(conexao)*/


module.exports = conexao;
=======
const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const categorias = require('../api/models/categoriasModels')
const departamentos = require('../api/models/departamentosModels')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

categorias.init(conexao)
departamentos.init(conexao)

module.exports = conexao;
>>>>>>> 3cf89df4c684e2e335dc1ad467e24191dc014868
