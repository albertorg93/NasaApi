require('dotenv').config()
const mongoose = require("mongoose");

//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
const url = process.env.URL_MONGO;
console.log(url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

module.exports = mongoose;