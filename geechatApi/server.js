const { urlencoded } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 9876;
const loginRouter = require('./Routes/loginRouter');
const registeRouter = require('./Routes/registeRouter');
const cors = require('cors');


const user = [];

require("dotenv").config();

mongoose.connect( process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());
app.use(express.urlencoded({extended : false}))
app.get('/', (req, res) => {
    res.send('Hi guys !')
});

app.use('/register', registeRouter )
app.use('/login', loginRouter )

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

module.exports = {
    user
}