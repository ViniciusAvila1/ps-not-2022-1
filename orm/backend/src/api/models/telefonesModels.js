const { Model , DataTypes } = require('sequelize')

class Telefones extends Model {
    static init(sequelize) {
        super.init({
            tel_proprietario: DataTypes.STRING,
            tel_ddd: DataTypes.INTEGER,
            tel_numero: DataTypes.INTEGER,
            tel_tipo: DataTypes.STRING(7),
        }, {
            sequelize
        })
    }
}

module.exports = Telefones