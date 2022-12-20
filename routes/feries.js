const express = require('express');
const router = express.Router();
const Ferie = require('../models/Ferie')

router.get('/:id', async (req, res) => {
    try {
        const feries = await Ferie.find({ year: req.params.id })
        res.status(200).json(feries)
    } catch (error) {
        console.log(error)
    }

})

router.post('/', (req, res) => {
    Ferie.create(req.body, (error, ferie) => {
        if (error) console.log(error);
    })
    res.status(201).json({ message: 'ferie ajouté ' })
})

router.put('/:id', async (req, res) => {
    try {
        await Ferie.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
        res.status(201).json({ message: 'ferie modifie' })
    } catch (error) {
        console.log(error)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Ferie.deleteOne({ _id: id })
        res.status(201).json({ message: 'ferie supprimé' })
    } catch (error) {
        console.log(error)
    }
});

module.exports = router