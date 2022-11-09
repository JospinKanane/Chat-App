const router = require('express').Router();
const User = require('../modeles/user');
const bcrypt = require('bcryptjs');

router.post('/', async(req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) 
        const user = new User({
            'userName' : req.body.name,
            'userMail' : req.body.email,
            'userPassword' : hashedPassword,
        })
        user.save()
        .then((data) => {
            res.json({'status': 'success'})
        })
        .catch((error)=>{
            console.log(error);
            res.json({'status': 'error', 'message': "Ereur d'authentification"})
        })
})

module.exports = router;