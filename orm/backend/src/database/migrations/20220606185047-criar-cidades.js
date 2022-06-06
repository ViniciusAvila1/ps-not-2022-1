'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('cidades', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cid_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      cid_uf: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      cid_regiao: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('cidades')
  }
};
