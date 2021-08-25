'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Token), {
        foreignKey: "user_id", as: "Token"
      }
    }
  };
  Usuario.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: true,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
      }
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["google","site"]]
      },
      defaultValue:'google'
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName:'Usuarios'
  });
  return Usuario;
};