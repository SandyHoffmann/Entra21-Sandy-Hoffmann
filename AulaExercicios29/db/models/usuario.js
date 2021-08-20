'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Projeto, {
        through: "usuarios_projetos",
        foreignKey:"id_usuario",
        as: "projeto"
      })
    }
  };
  Usuario.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('senha', bcrypt.hashSync(value, 10));
      },
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};