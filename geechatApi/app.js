const express = require('express');
const app = express();
const port = 9876;

app.use('/', (req, res) => {
    res.send('Hi guys !')
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});