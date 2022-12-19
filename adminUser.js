const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'employe';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')


bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  User.create({
    nom: "toto",
    prenom: "jaco",
    dateNaissance: new Date('1970-01-01'),
    adresse: "Rue dici 34000 Montpellier",
    emailEmploye: "employe@gmail.com",
    emailProfessionel: "admin1@societe.fr",
    telephone: "0612345678",
    mdp: hash,
    isPresent: "true",
    departement: 'DSI/DEV/JAVA POLE 1',
    role: "ROLE_USER",
    photo: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});