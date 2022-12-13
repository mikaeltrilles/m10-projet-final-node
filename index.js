const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6868;
const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cors
let cors = require('cors')
app.use(cors())

// Connexion à la base de données
db = mongoose.connection;

// Affichage des erreurs
db.on('error', console.error.bind(console, 'connection error:'));

// Affichage de la connexion réussie
db.once('open', function () {
  console.log("connecté à Mongoose")
});



app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
