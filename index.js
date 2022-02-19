const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

const app = express()

//conectra ala base de Ddatos
conectarDB()

//habilitar cors
app.use(cors())

//Habilitar express.json
app.use(express.json({ extended: true }))

// puerto de la app
const port = process.env.PORT || 4000

//imprtar rutas

app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/tareas', require('./routes/tareas'))

app.listen(port, '0.0.0.0', () => {
  console.log(`EL SERVIDOR ESTA ACTIVO EN EL PUERTO ${port}`)
})
