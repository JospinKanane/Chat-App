const bcrypt = require('bcryptjs');
const User = require('../modeles/user');
const jwt = require('jsonwebtoken');



const login = (req, res) => {
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
                    token: jwt.sign(
                        {userId : user._id},
                        'USER_GEECHAT_RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error, message: "erreur de connexion"}));

    })
    .catch(error => res.status(500).json({ error, message : "erreur serveur"}));
}

const register = async(req, res) => {
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
}

module.exports = {
    login,
    register,
}

