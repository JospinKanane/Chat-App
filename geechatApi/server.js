const { urlencoded } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 9876;
const Routes = require('./Routes/Router')
const cors = require('cors');

require("dotenv").config();

mongoose.connect( process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended : false}))

app.use(Routes)

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});