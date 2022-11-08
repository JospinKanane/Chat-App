const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 9876;

require("dotenv").config();

mongoose.connect( process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/', (req, res) => {
    res.send('Hi guys !')
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});