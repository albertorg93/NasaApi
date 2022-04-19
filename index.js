// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
require('./utils/dbMongo.js'); // Abrir conexión a la BBDD Mongo
require('dotenv').config()
// Rutas
const entryRouter = require('./routes/landings');

// Middlewares
//const hasApiKey = require('./middlewares/hasApiKey');
const notFound = require('./middlewares/notFound');

const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT

// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded())
app.use(express.json()); // Para habilitar recepción de datos JSON en una request

// app.use(hasApiKey); // Middleware - APIKEY para todas las rutas


// Rutas
app.use("/api/astronomy",entryRouter);// API

// Middleware de rutas inexistentes
app.use(notFound);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server;