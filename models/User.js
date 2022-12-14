//NOTE - schema moongose User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
  nom: String,
  prenom: String,
  dateNaissance: String,
  adresse: String,
  emailEmploye: {
    type: String,
    required: [true, "Veuillez fournir un e-mail !"],
    unique: [true, "E-mail existe déjà"],
  },
  emailProfessionel: String, // firstLetter.prenom+nom$@societe.fr
  telephone: String,
  mdp: String,
  // isAbsent: [],
  isActive: Boolean,
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

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema);
module.exports = User;