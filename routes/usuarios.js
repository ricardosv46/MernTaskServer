// rutas para crear usuarios
const express = require('express');
const usuarioController = require('../Controllers/usuariosController');

const router = express.Router();
//crea un usuario
router.post('/', usuarioController.crearUsuario);

module.exports = router;
