// rutas para crear usuarios
const express = require('express')
const usuarioController = require('../Controllers/usuariosController')
const router = express.Router()
const { check } = require('express-validator')

//crea un usuario
//api/usuario
router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email Válido').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({
      min: 6
    })
  ],
  usuarioController.crearUsuario
)

module.exports = router
