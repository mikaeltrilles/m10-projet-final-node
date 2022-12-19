//TODO - schema moongose Absence
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbsenceSchema = new Schema({
  dateDebut: Date,
  dateFin: Date,
  type: String,
  motif: String,
  statut: String,
  idEmploye: String,
  departement:String,
  nom:String,
  prenom:String,
  jours:Array,
  createdAt:Date
})

const Absence = mongoose.model('Absence', AbsenceSchema);
module.exports = Absence;