const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const User = new mongoose.Schema(
    {
    userName : {type : 'string', required: [true, "Can't be empty"]},
    userMail : {type : 'string', required: [true, "Can't be empty"], unique: true},
    userPassword : {type : 'string', required: [true, "Can't be empty"]},
    userProfilePicture : {type : 'string'},
    newMessage : {type : Object, default : {}},
    status : {type : String, default : 'online'}
    },{ collection : 'users-data', minimize : false }
)

User.plugin(uniqueValidator);

module.exports = mongoose.model('userData', User)