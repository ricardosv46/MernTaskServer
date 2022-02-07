// rutas para autenticar usuario
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../Controllers/authController')

//valida un usuario
//api/auth
router.post('/', [
  check('email', 'Agrega un email Válido').isEmail(),
  check('password', 'El password debe ser minimo de 6 caracteres').isLength({
    min: 6
  }),
  authController.autenticarUsuario
])

module.exports = router
