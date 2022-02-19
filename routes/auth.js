// rutas para autenticar usuario
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../Controllers/authController')
const auth = require('../middleware/auth')

//valida un usuario
//api/auth
router.post('/', authController.autenticarUsuario)

router.get('/', auth, authController.usuarioAuth)
module.exports = router
