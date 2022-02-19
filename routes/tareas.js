const express = require('express')
const router = express.Router()
const TareaController = require('../Controllers/tareaController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//crear una tarea
//api tareas
router.post(
  '/',
  auth,
  [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
    check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
  ],
  TareaController.crearTarea
)

//obtener tareas por royectos
router.get('/', auth, TareaController.obtenerTareas)

//actualizar tarea
router.put('/:id', auth, TareaController.actualizarTarea)

//eliminar tarea
router.delete('/:id', auth, TareaController.eliminarTarea)

module.exports = router
