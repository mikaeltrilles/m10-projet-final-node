const express = require('express');
const router = express.Router();
const Absence = require('../models/Absence');
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const moment = require('moment');

//!SECTION : EMPLOYE
//  list absence pour un utilisateur qui est logé
router.get('/', async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
  
      const absences = await Absence.find({ idEmploye: decodedToken.data });
      res.status(200).json(absences);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })

  router.get('/all', async (req, res) => {
    try {
      const absences = await Absence.find();
      res.status(200).json(absences);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })



//LINK Saisir demande de congé POST
  router.post('/', async (req, res) => {

    await Absence.create(req.body, (error, absence) => {
      const createdAt = new moment(absence.createdAt)
      const updateStatutAt = new moment({ hour: 23, minute: 59 })
      const duration = moment.duration(updateStatutAt.diff(createdAt))
      let timer
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("Retardée d'une seconde.");
        Absence.updateOne({ _id: absence._id }, { statut: 'EN_ATTENTE_VALIDATION' }, function (err, res) {
          if (err) console.log(err)
        });
      }, 3000) // duration._milliseconds
      console.log(timer)
      // penser à enlever 
    });
    res.status(201).json({ message: 'congé cré' })
  })

//LINK Suppresion d'un congé
  router.delete('/:id', async (req, res) => {
    const id = req.params.id
    // console.log(id);
    await Absence.deleteOne({ _id: id })
    res.status(201).json({ message: 'congé supprimé' })
  });

  //LINK - Modification d'un congé
  router.put('/:id', async (req, res) => {
    // prende en compte role
    await Absence.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
    // const token = req.headers.authorization.split(' ')[1]
    // const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
  
    res.status(201).json({ message: 'congé modifié' })
  });


//!SECTION : MANAGER
//LINK Route pour ROLE_MANAGER validation des absences
// list absences pour tous les salariés d'un manager
router.get('/validation', async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await User.find({ _id: decodedToken.data });
      const absences = await Absence.find({ departement: user[0].departement });
  
      // envoyer que les absences dont status ===  'EN_ATTENTE_VALIDATION' ou 'REJETEE'
      const newAbsences = absences.filter((abs) => abs.statut === 'EN_ATTENTE_VALIDATION' || abs.statut === 'REJETEE')
  
      res.status(200).json(newAbsences)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  
  })


// LINK - Validation OU REJETTE de congé d'un employé PUT
router.put('/validation/:id', async (req, res) => {
    await Absence.findOneAndUpdate({ _id: req.params.id }, { statut: req.body.data.statut });
    if (req.body.data.statut === 'VALIDEE') {
      res.status(201).json({ message: 'congé validé' })
    } else {
      res.status(201).json({ message: 'congé rejeté' })
    }
  
  })






module.exports = router