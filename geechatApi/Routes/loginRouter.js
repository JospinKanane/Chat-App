const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../modeles/user');

router.post('/', async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = User.findOne({
            'userMail' : req.body.email,
            'userPassword' : hashedPassword,
        });

        if(user){
            return res.json({'status': 'ok', user : true}); 
        } else {
            console.log(err);
            return res.status(404).json({'status': 'not found', user :false});
        };
})

module.exports = router;