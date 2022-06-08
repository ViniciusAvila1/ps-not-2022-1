const { Model , DataTypes } = require('sequelize')

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            pro_descricao: DataTypes.STRING,
            pro_vlrcusto: DataTypes.DECIMAL(10, 2),
            pro_vlrvenda: DataTypes.DECIMAL(10, 2),
            pro_ativoinativo: DataTypes.STRING(1),
        }, {
            sequelize
        })
    }
}

module.exports = Produtos