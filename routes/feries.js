const express = require('express');
const router = express.Router();
const Ferie = require('../models/Ferie')

router.get('/:id', async (req, res) => {
    try {

        const feries = await Ferie.find({year: req.params.id})
        res.status(200).json(feries)
    } catch (error) {
        console.log(error)
    }

})

router.post('/',(req, res) => {

    Ferie.create(req.body, (error, ferie)=> {
        if(error) console.log(error);
    })
    res.status(201).json({message :'ferie ajouté '})
})

module.exports = router