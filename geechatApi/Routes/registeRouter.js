const router = require('express').Router();
const User = require('../modeles/user');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) 
        const user = new User({
            userName : req.body.name,
            userMail : req.body.email,
            userPassword : hashedPassword,
        })
        user.save()
        .then((data) => {
            res.status(201).json({ message: 'Utilisateur enregister avec succes !'})
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).json({'status': 'error', 'message': "Erreur d'authentification"})
        })
})

module.exports = router;