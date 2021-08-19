const { Usuario } = require("../db/models");

async function getUsuarios(){
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};

async function getUsuario(id){
    const usuario = await Usuario.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!usuario){
        return res.status(404).json({message :"Usuário não foi encontrado! "});
    }
    console.log(req.params)
    res.json(usuario);
};

async function createUsuario(usuario){

};


async function updateUsuario(usuarioAtualizado){

};


async function removeUsuario(id){

};

module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    updateUsuario,
    removeUsuario
}