'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: {
          type: DataTypes.UUID,
          name: "UsuarioId"
        },
        as: "Usuario"
      });
    }
  };
  Token.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    token: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};