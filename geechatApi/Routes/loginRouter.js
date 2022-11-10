const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../modeles/user');

router.post('/', (req, res) => {
    User.findOne({ userMail : req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.userPassword)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                res.status(200).json({
                    userId: user._id,
                    token: 'TOKEN'
                });
            })
            .catch(error => res.status(500).json({ error, message: "erreur de connexion"}));

    })
    .catch(error => res.status(500).json({ error, message : "erreur serveur"}));
})

module.exports = router;