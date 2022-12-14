const mongoose = require('mongoose');
const User = require('./models/User');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'open';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')


// mdpSecure = bcrypt.genSalt(saltRounds, function (err, salt) {
  // bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    // Store hash in your password DB.
    // console.log(mdpSecure)
    // return
  // });
// });

User.create({
  nom: "toto",
  prenom: "jaco",
  dateNaissance: new Date('1970-01-01'),
  adresse: "Rue dici 34000 Montpellier",
  emailEmploye: "trilloux+1@gmail.com",
  emailProfessionel: "admin@societe.fr",
  telephone: "0612345678",
  mdp: 'open',
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