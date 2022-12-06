const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.NODE_PORT || 8765;
const Routes = require('./Routes/Router');
const socket = require('socket.io')

require("dotenv").config();

app.use(cors());
app.options('*', cors())
mongoose.connect( process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(express.urlencoded({extended : false}))
app.use((req, res, next) => {
    res.header ('Access-Control-Allow-Origin', '*')
    res.header ('Access-Control-Allow-Credentials', true)
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})

app.use(cors(), Routes)

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

 const io = socket(server, {
    cors : {
        origin : 'https://geechat.vercel.app/chat',
        credentials : true,
    }
 })

 global.onlineUsers = new Map();
 io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });
 })

 socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if(sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-receive", data.message);
    }
 });