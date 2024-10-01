const mongoose = require('mongoose')

const coffeeSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    }
})

const Coffee = mongoose.model('Coffee', coffeeSchema, 'coffee')
module.exports = Coffee