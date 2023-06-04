const express = require('express')
const conectarDB = require('./config/db.js')
const cors = require('cors')

const app = express()

//conectra ala base de Ddatos
conectarDB()

// habilitar cors
const whitelist = [
  'http://localhost:3000',
  'https://mern-stack-proyectos.vercel.app',
  'https://mern-proyect.netlify.app'
]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))

//Habilitar express.json
app.use(express.json({ extended: true }))

// puerto de la app
const port = process.env.PORT || 4000

//importar rutas
app.get('/',(req, res)=> { return res.json({msg:'Bienvenido'}))
app.use('/api/usuarios', require('./routes/usuarios.js'))
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/proyectos', require('./routes/proyectos.js'))
app.use('/api/tareas', require('./routes/tareas.js'))

// arrancar la app
app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})
