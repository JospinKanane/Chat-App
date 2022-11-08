const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {type : 'string', required: true},
    userMail : {type : 'string', required: true, unique: true},
    userPassword : {type : 'string', required: true},
    userProfilePicture : {type : 'string'}
})

module.exports = mongoose.model('user', userSchema)