'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey:{
          type: DataTypes.UUID,
          name:"id_usuario",
          allowNull: false
        },
        as: "usuario"
      });
    }
  };
  Endereco.init({
    rua: {
      type: DataTypes.STRING,
      allowNull:false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName:'enderecos'
  });
  return Endereco;
};

// npx sequelize-cli model:generate --name Endereco --attributes rua:string,numero:integer