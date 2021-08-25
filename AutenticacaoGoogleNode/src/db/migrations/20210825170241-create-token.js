'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      token: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      refreshToken: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      UsuarioId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tokens');
  }
};