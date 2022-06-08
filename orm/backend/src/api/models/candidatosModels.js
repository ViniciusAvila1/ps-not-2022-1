const { Model , DataTypes } = require('sequelize')

class Candidatos extends Model {
    static init(sequelize) {
        super.init({
            can_nome: DataTypes.STRING,
            can_apelido: DataTypes.STRING,
            can_sexo: DataTypes.STRING(1),
            can_partido: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Candidatos