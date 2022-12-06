import React, { useState, createContext, useEffect } from 'react';
import './App.css'
import Chat from './components/chat/Chat';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

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

const handleSendMsg = async() => {
  await axios.post(REACT_APP_NOT_SECRET_API+'/sendmsg', {
    message : messages,
    from : currentUser,
    to : profileId,
  })

  console.log(messages);
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
