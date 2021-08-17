const { DataTypes, Sequelize, Op, Model } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");
const sequelize = require("../database");
const database = require("../config/database");

// const Projeto = sequelize.define("Projeto", {
//     nome: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     quantidadeHoras : {
//         type:DataTypes.INTEGER,
//         allowNull:false,
//     }
// });

// const Endereco = sequelize.define("Endereco", {
//     rua: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     numero : {
//         type:DataTypes.INTEGER,
//         allowNull:false,
//         validate: {
//             min: 1
//         }
//     }
// });



// const Usuario = sequelize.define('Usuario', {
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: Sequelize.UUIDV4
//     },
//     nome: {
//         type : DataTypes.STRING,
//         allowNull:false
//     },
//     email:{
//         type: DataTypes.STRING,
//         allowNull:false,
//         unique:true,
//         validate:{
//             isEmail:{
//                 msg:"Email invalido! "
//             }
//         }
//     },
//     senha:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         set(value) {
//             this.setDataValue("senha",hashSync(value,10))
//         }
//     }
// });


// , {
//     tableName: "usuarios",
//     underscored: true
// }
(async () => {
    try{
        //criando todas as tabelas

        await sequelize.sync({force:true})

        const pedro = await Usuario.create({
            nome: "pedro",
            email:"pedro@ped.com",
            senha:"123456"
            });

        
        console.log(pedro.checarSenha("1234"));
        // await pedro.createEndereco({
        //     rua: "01",
        //     numero:123
        // });

        const projeto = await Projeto.create({
            nome:"teste",
            quantidadeHoras: 60
        });

        await projeto.addUsuario(pedro);
        await projeto.removeUsuarios();

        // await Endereco.create({
        //     rua:"01",
        //     numero:1234,
        //     idUsuario: pedro.id
        // })
        // Cria tabela
        // await Usuario.sync({force:true})
        // console.log("ok")

        // // cria todas as tabelas
        // // await sequelize.sync({force:true});
        // const pedro = await Usuario.create({
        //     nome: "pedro",
        //     email:"pedro@ped.com",
        //     senha:"123456"
        //     });
        //     console.log(pedro.toJSON())
        // //modificar pedro
        // pedro.email = "pedrao@email.com"
        // await pedro.save();
        // console.log("#atualizado")
        
        // await pedro.destroy();
        // console.log("#destruido")

        // const usuarios = await Usuario.bulkCreate([
        //     {
        //         nome: "pedro",
        //         email:"pedro@ped.com",
        //         senha:"123456"
        //     },
        //     {
        //         nome: "jose",
        //         email:"jose@ped.com",
        //         senha:"123456"
        //     },
        //     {
        //         nome: "paulo",
        //         email:"paulo@ped.com",
        //         senha:"123456"
        //     }
        // ]);
        // console.log(usuarios)
        // usuarios.forEach(usuario => console.log(usuario.toJSON()));
        
        // // comparando senha

        // console.log(compareSync("123456",usuarios[0].toJSON().senha))

        // //mostrando todos users
        // const todosUsuarios = await Usuario.findAll(
        //     {
        //         where: {
        //             nome: {
        //                 [Op.iLike]:"p%"
        //             }
        //         }
        //     }
        // );
        // for(let u of todosUsuarios){
        //     console.log(u.toJSON())
        // }
   
        // const umUser = await Usuario.findOne({
        //     where: {
        //             nome:"paulo"
        //         }
        // })

        // console.log(umUser.toJSON())

        // const jose = await Usuario.findByPk("0b4484af-5ab8-47fb-a26e-cd3c63263e24");
        // console.log(jose.toJSON())
    } catch (err){
        console.log(err.message)
    } finally{
        sequelize.close();
    }
})();