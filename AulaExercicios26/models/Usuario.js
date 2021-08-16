const { DataTypes } = require("sequelize");
const { hashSync, compareSync, compare } = require("bcrypt");
const sequelize = require("../database");
// const { Sequelize } = require("../database");

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    nome: {
        type : DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:{
                msg:"Email invalido! "
            }
        }
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false,
        set(value) {
            this.setDataValue("senha",hashSync(value,10))
        }
    }
});
// , {
//     tableName: "usuarios",
//     underscored: true
// }
(async () => {
    try{
        // Cria 1 tabela
        await Usuario.sync({force:true})
        console.log("ok")

        // cria todas as tabelas
        // await sequelize.sync({force:true});
        const pedro = await Usuario.create({
            nome: "pedro",
            email:"pedro@ped.com",
            senha:"123456"
            });
            console.log(pedro.toJSON())
        //modificar pedro
        pedro.email = "pedrao@email.com"
        await pedro.save();
        console.log("#atualizado")
        
        await pedro.destroy();
        console.log("#destruido")

        const usuarios = await Usuario.bulkCreate([
            {
                nome: "pedro",
                email:"pedro@ped.com",
                senha:"123456"
            },
            {
                nome: "jose",
                email:"jose@ped.com",
                senha:"123456"
            }
        ]);
        console.log(usuarios)
        usuarios.forEach(usuario => console.log(usuario.toJSON()));
        
        //comparando senha

        console.log(compareSync("123456",usuarios[0].toJSON().senha))

    } catch (err){
        console.log(err.message)
    } finally{
        sequelize.close();
    }
})();
