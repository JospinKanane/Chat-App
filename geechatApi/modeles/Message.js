const mongoose = require('mongoose');

const Message = new mongoose.Schema(
    {
        message : {
            text : {
                type : String,
                required : true,
            },
        },
        users : Array,
        sender : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
        }
    },{ timestamps : true, collection : 'Messages', minimize : false }
)

module.exports = mongoose.model('userMessage', Message)