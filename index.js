const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6868;
const mongoose = require('mongoose');
const User = require('./models/User');
const Absence = require('./models/Absence');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/gdadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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


//!SECTION : Connection All

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ emailEmploye: req.body.email })
    // console.log(req.body);
    // console.log(user);
    if (user.mdp == req.body.mdp) {
      res.status(200).json({ isLog: true })
    } else {
      throw new Error('Email ou mot de passe incorrect')
    }
  } catch (error) {
    res.send('Email ou mot de passe incorrect')
  }
})


//!SECTION : ADMINISTRATEUR

//TODO - Creation d'un employé par l'administrateur POST
app.post('/createUser', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//TODO - Creer les jours RTT Employeur POST

//TODO - Maintenir les jour jours fériés avec l'API Axios: https://www.data.gouv.fr/fr/datasets/jours-feries-en-france/




//!SECTION : EMPLOYE

//TODO - Récupérer liste des absences GET find
// app.get('/absences', async (req, res) => {
  // try {
    // const absence = await Absence.find()
    // res.status(200).json(absence)
  // } catch (error) {
    // res.status(400).json({ message: error.message })
  // }
// })


//TODO - Saisir demande de congé POST



//!SECTION : MANAGER

//TODO - Validation de congé d'un employé PUT
// app.put('/absences/:id', async (req, res) => {
  // try {
    // const absence = await Absence.findByIdAndUpdate
      // (req
        // .params
        // .id
        // .req.body, { new: true })
    // res.status(200).json(absence)
  // } catch (error) {
    // res.status(400).json({ message: error.message })
  // }
// })


//TODO - Recuperer liste employé present et absent sur une semaine choisi GET find by ...



app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
