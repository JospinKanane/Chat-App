const bcrypt = require('bcryptjs');
const User = require('../modeles/user');
// const Conversation = require('../modeles/Conversation');
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

// const conversation = async(req, res) => {
//     const newConversation = new Conversation({
//         members : [req.body.senderId, req.body.receiverId],
//     })
//     try {
//         const savedConversation = await newConversation.save();
//         res.status(200).json({ savedConversation, message: 'Conversation started'})
//     } catch (error) {
//         res.status(500).json({error: error, message: ' conversation Server or DB Error'})
//     }
// }

// const getConversation = async(req, res) => {
//     try {
//         const conversation = await Conversation.find({
//             members : {$in : [req.params.userId]}
//         })
//         res.status(200).json({conversation});
        
//     } catch (error) {
//         res.status(500).json({error: error, message: 'getConversation Server or DB Error'})
//     }
// };

const addMessage = async(req, res) => {
    try {
        const {from, to, message} = req.body;
        const data = await Message.create({
            message : {text : message},
            users : [from, to],
            sender : from,
        });
        if(data) return res.json({msg : 'Message added successfully !', data});
        return res.status(400).json({msg : 'Fail to add message to the data base !'})
    } catch (error) {
        res.status(500).json({error: error, message: 'Message Server or DB Error'})
    }
}

const getAllMessages = async(req, res) => {
    try {
        const {from, to} = req.body;
        const messages = await Message.find({
            users : {
                $all : [from, to]
            }
        })
        .sort({ updatedAt: 1 });
        const projectMessages = messages.map((msg)=>{
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            }
        })
        res.status(200).json({messages, message : "msg fetched" })
        
    } catch (error) {
        res.status(500).json({error: error, message: 'getMessages Server or DB Error'})
    }
}
const getUsers = async(req, res) => {
    try {
        const user = await User.find({_id: { $ne: req.params.id } }).select([
            "userMail",
            "userName",
            "_id"
        ]) 
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
    addMessage,
    getAllMessages,
    getUsers,
    getOneUser
}
