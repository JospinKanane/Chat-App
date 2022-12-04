const mongoose = require('mongoose');

const Message = new mongoose.Schema(
    {
        content : String,
        from : Object,
        time : String,
        date : String,
        to : String
    },{ timestamps : true, collection : 'Messages' }
)

module.exports = mongoose.model('userMessage', Message)