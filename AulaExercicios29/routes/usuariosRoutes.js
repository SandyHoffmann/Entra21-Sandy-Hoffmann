const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
       
    } catch (error) {
        res.status(400).json({message :"deu ruim"});
    }
  });


router.get('/', async (req, res) => {
    try {
       
    } catch (error) {
        res.status(400).json({message :"deu ruim"});
    }
  });

router.post('/', async (req, res) => {
    // validar se usuario já existe atraves do email
    try {
        const usuarioCriado = await Usuario.create(req.body);
        res.status(201).json(usuarioCriado);
    } catch (error) {
        res.status(400).json({message :"deu ruim"});
    }
  });


router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!usuario){
            return res.status(404).json({message :"Usuário não foi encontrado! "});
        }
        await usuario.destroy();
        res.status(204).end();

    } catch (error) {
        res.status(400).json({message :"deu ruim"});
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!usuario){
            return res.status(404).json({message :"Usuário não foi encontrado! "});
        }
        const usuarioAtualizado = req.body;
        Object.assign(usuario, usuarioAtualizado);
        await usuario.save();
        res.json(usuario);

    } catch (error) {
        res.status(400).json({message :"deu ruim"});
    }
});

module.exports = router;