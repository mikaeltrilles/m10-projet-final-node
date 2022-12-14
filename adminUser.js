const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'open';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')


bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  User.create({
    nom: "toto",
    prenom: "jaco",
    dateNaissance: new Date('1970-01-01'),
    adresse: "Rue dici 34000 Montpellier",
    emailEmploye: "trilloux+1@gmail.com",
    emailProfessionel: "admin1@societe.fr",
    telephone: "0612345678",
    mdp: hash,
    isPresent: "true",
    departement: {
      section: "DSI",
      service: "ADMIN",
      pole: "ADMIN",
      numero: 1,
    },
    role: "ROLE_ADMIN",
    photo: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});





















