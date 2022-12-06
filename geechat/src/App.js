import React, { useState, createContext, useEffect, useRef } from 'react';
import './App.css'
import Chat from './components/chat/Chat';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import {io} from 'socket.io-client'

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState('');
  const [profileName, setProfileName] = useState('');
  const [profileId, setProfileId] = useState('');
  const [messages, setMessages] = useState('');
  const [currentChat, setCurrentChat] = useState(undefined);
  const logo = require('./assets/logo.png');
  const image = require('./assets/avat.png'); 
  const currentUser = localStorage.getItem('userId');
  const socket = useRef();
  
  // handles functions
const handleNameChange = (e) => {
  setName(e.target.value); 
};
const handleMailChange = (e) => {
  setEmail(e.target.value)
};
const handlePWChange = (e) => {
  setPassword(e.target.value)
};


useEffect(()=>{
  if(currentUser){
    socket.current = io(REACT_APP_NOT_SECRET_API, { transports : ['websocket'] }),
    socket.current.emit('add-user', currentUser)
  }
},[currentUser])


const handleSendMsg = async() => {
  await axios.post(REACT_APP_NOT_SECRET_API+'/sendmsg', {
    message : messages,
    from : currentUser,
    to : currentChat._id,
  })
 socket.current.emit('send-msg', {
  to : currentChat._id,
  from : currentUser,
  message : messages,
 })
 const msgs = [...messages];
 msgs.push({fromSelf:true, message:messages})
 setMessages(msgs)
}

const handleChatChange = (chat) => {
  setCurrentChat(chat);
};

console.log('Clicked currentChat', currentChat);
  
  return (
    <UserContext.Provider 
      value={{
        name, 
        email, 
        password,
        logo,
        image,
        user,
        messages,
        profile,
        profileName,
        profileId,
        currentChat,
        socket,
        setName,
        setEmail,
        setPassword,
        setUser,
        setMessages,
        setProfile,
        setProfileName,
        setCurrentChat,
        setProfileId,
        handleNameChange,
        handleMailChange,
        handlePWChange,
        handleSendMsg,
        handleChatChange
        }}>
          <div  >
            <Router>
              <div className="container">
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/chat' element={<Chat/>}/>
              </Routes>
              </div>
            </Router>
          </div>
    </UserContext.Provider>
  )
}

export default App
