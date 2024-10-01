const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const coffeeRoutes = require('./routes/coffeeRoutes');
const teaRoutes = require('./routes/teaRoutes.js');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://kenny:123@nodejs-crash-course.tfsbwuh.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs-Crash-Course',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })  .then(() => console.log('MongoDB connected'))
        .catch(err => console.log('err'))

app.use('/api/coffee', coffeeRoutes);
app.use('/api/tea', teaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))