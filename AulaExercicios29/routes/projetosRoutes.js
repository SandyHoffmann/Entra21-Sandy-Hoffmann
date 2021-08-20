const express = require('express');
const router = express.Router();
const projetosControllers = require("../controllers/projetosControllers")

//importando getOne do controller
router.get('/', projetosControllers.getAll);

router.get('/:id', projetosControllers.getOne);

router.post('/', projetosControllers.create);

router.delete('/:id', projetosControllers.remove);

router.put('/:id', projetosControllers.update);

module.exports = router;