require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const Usuario = require("../models/Usuario")
const Projeto = require("../models/Projeto")
const Endereco = require("../models/Endereco")

const sequelize = new Sequelize(dbConfig);

//inicializando models
Usuario.init(sequelize);
Projeto.init(sequelize);
Endereco.init(sequelize);

//Definindo associações para os models

Usuario.associate(sequelize.models);
Projeto.associate(sequelize.models);
Endereco.associate(sequelize.models);

module.exports = sequelize;

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexão deu certo!');
//       } catch (error) {
//         console.error('Não foi possivel conectar:', error);
//       } finally{
//           sequelize.close();
//       }
// })();

// node .\database\index.js