const mongoose = require('mongoose')

const teaSchema = new mongoose.Schema({

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

const Tea = mongoose.model('Tea', teaSchema, 'tea')
module.exports = Tea