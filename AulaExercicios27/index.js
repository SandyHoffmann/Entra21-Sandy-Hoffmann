const sequelize = require("./database");
const {Usuario, Projeto, Endereco} = sequelize.models;

(async () => {
    try{
        await sequelize.sync({force:true})
        console.log("Beleza")
        const pedro = await Usuario.create({
                nome: "pedro",
                email:"pedro@ped.com",
                senha:"123456"
            });
        console.log(pedro.checarSenha("1234"));
        await pedro.createEndereco({
            rua: "01",
            numero:123
        });

    } catch(err){
        console.log(err.message)
    } finally{
        sequelize.close();
    }
})();
