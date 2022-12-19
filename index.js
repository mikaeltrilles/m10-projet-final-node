const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6868;
const mongoose = require('mongoose');
const User = require('./models/User');
const Absence = require('./models/Absence');
const moment = require('moment'); // require

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

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


//!SECTION : Connection All

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ emailEmploye: req.body.email })
    if (!user) {
      return res.status(400).json({ message: 'mauvaise requête' })
    }

    const valid = await bcrypt.compare(req.body.mdp, user.mdp);
    if (!valid) {
      res.status(403).json({ message: 'non authorisé' });
      return
    }
    const token = jwt.sign(
      { data: user._id, role: user.role },
      process.env.TOKEN_SECRET,
      { expiresIn: '12h' }
    );
    res.status(200).json({
      isLog: true,
      userId: user._id,
      role: user.role,
      departement: user.departement,
      nom:user.nom,
      prenom:user.prenom,
      token
    })
  } catch (error) {
    console.log(error)
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
//  list absence pour un utilisateur qui est logé
app.get('/absences', async (req, res) => {
  try{
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
  
    const absences = await Absence.find({idEmploye:decodedToken.data});
    res.status(200).json(absences);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// Route pour ROLE_MANAGER
app.get('/validation',async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
    const user = await User.find({_id:decodedToken.data});
    const absences = await Absence.find({departement:user[0].departement});

    // envoyer que les absences dont status ===  'EN_ATTENTE_VALIDATION' ou 'REJETEE'
    const newAbsences = absences.filter((abs)=> abs.statut === 'EN_ATTENTE_VALIDATION' || abs.statut === 'REJETEE' )
    
    res.status(200).json(newAbsences)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

})

// list absences pour tous les salariés d'un manager


// Saisir demande de congé POST


app.post('/creationAbsence', async (req, res) => {

   await Absence.create(req.body, (error, absence) => { 
    const createdAt = new moment(absence.createdAt)
    const updateStatutAt = new moment({hour:23, minute: 59})
    const duration = moment.duration(updateStatutAt.diff(createdAt ))
    let timer
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Retardée d'une seconde.");
      Absence.updateOne({_id:absence._id}, {statut:'EN_ATTENTE_VALIDATION'}, function(err, res) {
        if(err) console.log(err)
      });
    }, 3000) // duration._milliseconds
    console.log(timer)
    // penser à enlever 
  });
    res.status(201).json({ message: 'congé cré' })
})

// Suppresion d'un congé
app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  console.log(id);
  await Absence.deleteOne({ _id: id })
  res.end()
});

app.put('/:id', async (req, res) => {
  // prende en compte role
  await Absence.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  // const token = req.headers.authorization.split(' ')[1]
  // const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);

  res.status(201).json({ message: 'congé modifié' })
});

// TODO
app.put('/validation/:id', async(req, res) => {
  const absences = await Absence.findOneAndUpdate({ _id: req.params.id }, {statut: 'status envoyé par front'});
  res.status(201).json({ message: 'congé validé ou rejeté' })
})


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
