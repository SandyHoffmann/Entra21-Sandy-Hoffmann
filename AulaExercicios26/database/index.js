require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

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