// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
require('./utils/dbMongo.js'); // Abrir conexión a la BBDD Mongo
require('dotenv').config()
// Rutas
const landing = require('./routes/landings');
const neas = require('./routes/neas');

// Middlewares
//const hasApiKey = require('./middlewares/hasApiKey');
const notFound = require('./middlewares/notFound');

const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT || 5000

// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded())
app.use(express.json()); // Para habilitar recepción de datos JSON en una request

// app.use(hasApiKey); // Middleware - APIKEY para todas las rutas


// Rutas
app.use("/api/astronomy/landings",landing);// API
app.use("/api/astronomy/neas",neas);// API

// Middleware de rutas inexistentes
app.use(notFound);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server;