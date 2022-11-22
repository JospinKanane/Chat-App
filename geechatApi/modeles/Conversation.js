const mongoose = require('mongoose');

const Conversation = new mongoose.Schema(
    {
        members : {
            type : Array,
        }
    },{ timestamps : true, collection : 'conversation' }
)

module.exports = mongoose.model('userConversation', Conversation)