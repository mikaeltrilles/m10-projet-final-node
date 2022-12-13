//NOTE - schema moongose User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: String,
  prenom: String,
  dateNaissance: String,
  adresse: String,
  emailEmploye: String,
  emailProfessionel: String, // firstLetter.prenom+nom$@societe.fr
  telephone: String,
  mdp: String,
  isPresent: Boolean,
  departement: {
    section: String,
    service: String,
    pole: String,
    numero: Number,
  },
  equipe: String,
  role: String,
  photo: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})















const User = mongoose.model('User', UserSchema);
module.exports = User;