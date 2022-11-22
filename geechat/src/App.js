import React, { useState, createContext, } from 'react';
// import {logo} from './assets/logo.png'
// import Auth from './components/Auth';
import './App.css'
import Chat from './components/chat/Chat';
// import { Route, Switch} from 'wouter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const logo = require('./assets/logo.png');
  const image = require('./assets/image-test.jpg');


  // Register && login user
const handleNameChange = (e) => {
  setName(e.target.value); 
};
const handleMailChange = (e) => {
  setEmail(e.target.value)

};
const handlePWChange = (e) => {
  setPassword(e.target.value)
};

// Fetch fonctions
const registerUser = async(e) => {
  e.preventDefault();
  await fetch(`http://localhost:8765/register`,
  {
    method : 'POST',
    headers : { 'Content-type': 'application/json' },
    body : JSON.stringify({name, email, password})
  })
  .then(data => data.json())
  .then(res => console.log(res))
  .catch("erreur d'enregistrement")
}

  const loginUser = async(e) =>{
    e.preventDefault();
    await fetch(`http://localhost:8765/login`,
    {
      method : 'POST',
      headers : { 
        'Content-type': 'application/json',
      },
      body : JSON.stringify({email, password})
    })
    .then(data => data.json())
    .then(res => console.log(setUserId(res.userId), setToken(res.userToken), setUser(res)))
    .catch('erreur de fetch')
  }

  // console.log('UserId stocké dans le variable ' + userId)
  // console.log('Token stocké dans le variable ' + token)
  console.log(user);

  return (
    <UserContext.Provider 
      value={{
        name, 
        email, 
        password,
        logo,
        image,
        user,
        setName,
        setEmail,
        setPassword,
        handleNameChange,
        handleMailChange,
        handlePWChange,
        registerUser,
        loginUser
        }}>
          <div  >
            <Router>
              {/* <div className="container">
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
              </Routes>
              </div> */}
              <Routes>
                <Route path='/chat' element={<Chat/>}/>
              </Routes>
            </Router>
          </div>
    </UserContext.Provider>
  )
}

export default App
