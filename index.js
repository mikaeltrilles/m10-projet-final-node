const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6868;
const mongoose = require('mongoose');
const User = require('./models/User');
const Absence = require('./models/Absence');
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





//!SECTION : ADMINISTRATEUR

//TODO - Creation d'un employé par l'administrateur POST

//TODO - Creer les jours RTT Employeur POST

//TODO - Maintenir les jour jours fériés avec l'API Axios: https://www.data.gouv.fr/fr/datasets/jours-feries-en-france/



//!SECTION : EMPLOYE

//TODO - Récupérer liste des absence GET find

//TODO - Saisir demande de congé POST



//!SECTION : MANAGER

//TODO - Validation de congé d'un employé PUT

//TODO - Recuperer liste employé present et absent sur une semaine choisi GET find by ...



app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
