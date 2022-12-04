const bcrypt = require('bcryptjs');
const User = require('../modeles/user');
const Conversation = require('../modeles/Conversation');
const Message = require('../modeles/Message');
const jwt = require('jsonwebtoken');
// const user = require('../modeles/user');



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
                    userName: user.userName,
                    status : user.status,
                    userToken: jwt.sign(
                        {userId : user._id},
                        'USER_GEECHAT_RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error, message: "erreur de connexion"}));

    })
    .catch(error => res.status(500).json({ "error" : error, message : "erreur serveur"}));
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
        res.status(400).json({error, 'message': "Erreur d'authentification"})
    })
}

const conversation = async(req, res) => {
    const newConversation = new Conversation({
        members : [req.body.senderId, req.body.receiverId],
    })
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json({ savedConversation, message: 'Conversation started'})
    } catch (error) {
        res.status(500).json({error: error, message: ' conversation Server or DB Error'})
    }
}

const getConversation = async(req, res) => {
    try {
        const conversation = await Conversation.find({
            members : {$in : [req.params.userId]}
        })
        res.status(200).json({conversation});
        
    } catch (error) {
        res.status(500).json({error: error, message: 'getConversation Server or DB Error'})
    }
};

const messages = async(req, res) => {
    const userId = req.params.userId
    const newMessage = new User.newMessage(req.body)
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json({error: error, message: 'Message Server or DB Error'})
    }
}

const getMessages = async(req, res) => {
    try {
        const messages = await User.find({_id : req.params.userId})
        res.status(200).json(messages.newMessage);
        
    } catch (error) {
        res.status(500).json({error: error, message: 'getMessages Server or DB Error'})
    }
}
const getUsers = async(req, res) => {
    try {
        const user = await User.find() 
        res.status(200).json(user)  
    } catch (error) {
        res.status(500).json({error, message: 'getUsers Server or DB Error'})

    }
}

const getOneUser = async(req, res) => {
    try {
        const user = await User.find({_id : req.params.userId})
        res.status(200).json({user, message: 'user found'})
    } catch (error) {
        res.status(500).json({error, message: 'getOneUser Server or DB Error'})
    }
}

module.exports = {
    login,
    register,
    conversation,
    getConversation,
    messages,
    getMessages,
    getUsers,
    getOneUser
}
