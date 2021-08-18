const { sequelize, Usuario, Endereco, Projeto } = require("./db/models");
const endereco = require("./db/models/endereco");
const projeto = require("./db/models/projeto");

(async () => {
    try {
        await sequelize.sync({
            force:true
        });
        console.log("Beleza!")
        //inserindo
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        })
        await pedro.createEndereco({
            rua:"Rua 1",
            numero:23
        });

        console.log(pedro)

        const projeto = await pedro.createProjeto({
            nome: "Projeto 1",
            quantidadeHoras : 10
        })

        console.log(projeto)
    } catch (error) {
        console.log(error.message)
    } finally{
        sequelize.close();
    }
})();