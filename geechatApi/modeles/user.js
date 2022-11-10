const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const User = new mongoose.Schema(
    {
    userName : {type : 'string', required: true},
    userMail : {type : 'string', required: true, unique: true},
    userPassword : {type : 'string', required: true},
    userProfilePicture : {type : 'string'}
    },{ collection : 'user-data' }
)

User.plugin(uniqueValidator);

module.exports = mongoose.model('userData', User)