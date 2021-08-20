const { Usuario } = require("../db/models");
const createError = require("http-errors");

async function getUsuarios() {
    const usuarios = await Usuario.findAll();

    return usuarios;
};
async function getUsuario(id) {
    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });

    if (!usuario) {
        throw new createError(404, "Usuário não encontrado!");
    }

    return usuario;
};
async function createUsuario(NovoUsuario){

    const[usuario, jaCriado] = await Usuario.findOrCreate({
        where : { email: NovoUsuario.email},
        defaults: NovoUsuario
    });
    if (!jaCriado) throw new createError(409,"Usuário ja esta cadastrado!");
    return usuario;
};


async function updateUsuario(id,usuarioAtualizado){
        const usuario = await Usuario.findOne({
            where: {
                id
            }
        });
        if (usuario === null) {
            throw new createError(404, "Usuário não encontrado!");
        }
        else{
            console.log("aaaaaaaaaaaaaaa")
            Object.assign(usuario, usuarioAtualizado);
            await usuario.save();
            return usuario;
        }
};


async function removeUsuario(id){
    const usuario = await Usuario.findOne({
        where:{
            id
        }
    });
    console.log(usuario)
    if (!usuario) throw new createError(404,"Usuário não existe!");
    await usuario.destroy();
};

module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    removeUsuario,
    updateUsuario
}