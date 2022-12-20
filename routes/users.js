const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
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
        nom: user.nom,
        prenom: user.prenom,
        token
      })
    } catch (error) {
      console.log(error)
    }
  })
  
//LINK - Creation d'un employé par l'administrateur POST
  router.post('/signup', async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  })

  router.get('/all', async (req, res) => {
    try {
      const users = await User.find()
      const arr= users.map( user => {
        return {
          name: user.nom +' '+ user.prenom
        }
      })
      
      res.status(200).json(arr);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })

module.exports = router