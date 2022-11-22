const mongoose = require('mongoose');

const Message = new mongoose.Schema(
    {
        conversationId : {
            type : String,
        },
        sender : {
            type : String,
        },
        text : {
            type : String,
        }
    },{ timestamps : true, collection : 'Messages' }
)

module.exports = mongoose.model('userMessage', Message)