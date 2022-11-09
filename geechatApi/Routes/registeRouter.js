const router = require('express').Router();
const bcrypt = require('bcryptjs');
const user = require('../server')

router.post('/', async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) 
        user.create({
            id : req.params.id,
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword,

        })
        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
    }
    console.log(user)
    
})

module.exports = router;