const { Model , DataTypes } = require('sequelize')

class Cidades extends Model {
    static init(sequelize) {
        super.init({
            cid_descricao: DataTypes.STRING,
            cid_uf: DataTypes.STRING(2),
            cid_regiao: DataTypes.STRING(12)
        }, {
            sequelize
        })
    }
}

module.exports = Cidades