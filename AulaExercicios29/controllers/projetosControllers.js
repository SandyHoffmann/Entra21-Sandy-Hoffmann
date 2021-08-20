const projetosServices = require("../services/projetosServices");

async function getAll(req, res, next){
    try {
        const projetos = await projetosServices.getProjetos();
        res.json(projetos);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function create(req, res, next){
    // validar se usuario já existe atraves do email
    try {
        const projetoCriado = await projetosServices.createProjeto(req.body);
        res.json(projetoCriado);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// async function getOne(req, res, next){
//     try {
//         const usuarios = await usuariosServices.getUsuario(req.params.id);
//         res.json(usuarios);
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }


// async function update(req, res, next){
//         try {
//             const usuario = await usuariosServices.updateUsuario(req.params.id,req.body);
//             console.log(usuario)
//             res.json(usuario); 
//         } catch (error) {
//             console.log(error.message)
//             next(error);
//         }
// }

// async function remove(req, res, next){
//     try {
//         await usuariosServices.removeUsuario(req.params.id);
//         res.status(204).end();

//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }

module.exports = {
    getAll,
    // getOne,
    create,
    // remove,
    // update
}