const express = require('express')
const { dbConnection } = require('./db/config')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Database
dbConnection()

// CORS
app.use(cors())

// Public directory
app.use(express.static('public'))

//Read and parse body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// Listen for requests
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
