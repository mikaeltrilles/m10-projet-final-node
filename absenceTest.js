const mongoose = require('mongoose');
const Absence = require('./models/Absence');


mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')

Absence.create({
    dateDebut: new Date('2000-01-01'),
    dateFin: new Date('2002-12-11'),
    type: "Congés payés",
    motif: "Congés annuels",
    statut: "INITIALE",
    idEmploye: "639ae0126df24197a4b83ce7",
}, (error, user) => { console.log(error, user) });
