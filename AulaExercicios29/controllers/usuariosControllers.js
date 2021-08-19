const usuariosServices = require("../services/usuariosServices");

async function getAll(req, res, next){
    try {
        const usuarios = await usuariosServices.getUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getOne(){

}

async function create(){

}

async function update(){

}

async function remove(){

}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}