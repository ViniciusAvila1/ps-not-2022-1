<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize')

class Departamentos extends Model {
    static init(sequelize) {
        super.init({
            dep_descricao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

=======
const { Model, DataTypes } = require('sequelize')

class Departamentos extends Model {
    static init(sequelize) {
        super.init({
            dep_descricao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

>>>>>>> 3cf89df4c684e2e335dc1ad467e24191dc014868
module.exports = Departamentos