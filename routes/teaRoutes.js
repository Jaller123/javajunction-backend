const express = require('express');
const router = express.Router();
const Tea = require('../models/tea');

router.get('/', async (req, res) => {
    try {
        const teas = await Tea.find();
        res.json(teas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
