const express = require("express")

const conectarDB = require('./config/db')

const app = express()

//conectra ala base de Ddatos
conectarDB()

//Habilitar express.json
app.use(express.json({ extended: true }))

// puerto de la app
const PORT = process.env.PORT || 4000

//imprtar rutas

app.use("/api/usuarios", require('./routes/usuarios'))

//pagina principal
app.get("/", (req, res) => {
  res.send("hola mundilla")
  console.log("get")
})

app.listen(PORT, () => {
  console.log(`EL SERVIDOR ESTA ACTIVO EN EL PUERTO ${PORT}`)
})
