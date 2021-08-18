'use strict';

const {
  Model,Sequelize
} = require('sequelize');
const { model } = require('../../../AulaExercicios27/database');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Endereco, {
        foreignKey: "id_usuario",
        as: "endereco"
      });
      this.belongsToMany(models.Projeto, {
        through: "usuarios_projetos",
        foreignKey:"id_usuario",
        as: "projeto"
      })
    }
  };
  Usuario.init({
    id:{
      allowNull:false,
      primaryKey:true,
      type:Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    nome: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName:'usuarios'
  });
  return Usuario;
};

// npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,senha:string