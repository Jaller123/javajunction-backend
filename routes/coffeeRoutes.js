const express = require('express')
const router = express.Router()
const Coffee = require('../models/coffee')

// Här hämtar ni alla coffee produkter
router.get('/', async (req, res) =>
{
    try {
        const coffees = await Coffee.find()
        res.json(coffees)
    }

    catch (err) {
        res.status(500).json({  message: err.message  })
    }
})

module.exports = router;