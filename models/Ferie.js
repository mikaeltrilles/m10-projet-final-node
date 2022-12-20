//TODO - schema moongose Ferie
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FerieSchema = new Schema({
date:  {
  type: Date,
  required: true,
  unique: true,
},
commentaire: String,
// J'affiche le jour en fonction de la date
// jour: new Date(property).toLocaleDateString('fr-FR', { weekday: 'long' }),
jour: String,
type: String, // Ferie ou Rtt Attention lors de la création des jours via l'api, il faut que le type soit Férié
})

const Ferie = mongoose.model('Ferie', FerieSchema);
module.exports = Ferie;