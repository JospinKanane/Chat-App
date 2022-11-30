const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.NODE_PORT || 8765;
const Routes = require('./Routes/Router')

require("dotenv").config();

app.use(cors());
app.options('*', cors())
mongoose.connect( process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(express.urlencoded({extended : false}))

app.use(cors(), Routes)

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});