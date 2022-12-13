const mongoose = require('mongoose');
const User = require('./models/User');


mongoose.set('strictQuery', false)

mongoose.connect('mongodb://127.0.0.1:27017/gdadb')


User.create({
  nom: "toto",
  prenom: "jaco",
  dateNaissance: new Date('1970-01-01'),
  adresse: "Rue dici 34000 Montpellier",
  emailEmploye: "trilloux@gmail.com",
  emailProfessionel: "admin@societe.fr",
  telephone: "0612345678",
  mdp: "open",
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