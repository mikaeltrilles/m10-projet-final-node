const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6868;
const mongoose = require('mongoose');
const User = require('./models/User');
const Absence = require('./models/Absence');
const moment = require('moment'); // require

const userRoutes = require('./routes/users');
const absenceRoutes = require('./routes/absences');
const ferieRoutes = require('./routes/feries')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb', {
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



app.use('/api/auth',userRoutes);
app.use('/api/absences',absenceRoutes );
app.use('/api/feries',ferieRoutes );
// app.use('/api/auth',userRoutes);
// app.use('/api/tasks',tasksRoutes);

//!SECTION : ADMINISTRATEUR

//TODO - Creer les jours RTT Employeur POST

//TODO - Maintenir les jour jours fériés avec l'API Axios: https://www.data.gouv.fr/fr/datasets/jours-feries-en-france/
// Je recupère les jours fériés de l'année en cours sur l'api et je crée un tableau avec les jours fériés dans la base de données
app.get('/api/joursFeries/:annee', async (req, res) => {
  try {
    const joursFeries = await axios.get(`https://jours-feries-france.antoine-augusti.fr/api/${req.params.annee}.json`)
    res.status(200).json(joursFeries.data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})


//TODO - Recuperer liste employé present et absent sur une semaine choisi GET find by ...



app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
