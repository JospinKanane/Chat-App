import React, { useState, createContext } from 'react';
// import logo from '../assets/geechat-logo.png'
// import Auth from './components/Auth';
import './App.css'
import Chat from './components/chat/Chat';
import { Route, Switch} from 'wouter';

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState('hhhh');
  const [token, setToken] = useState('');
  const logo = require('../assets/geechat-logo-cropped.png');
  const sendIcon = require('../assets/sendIcon.svg');
  const imageTest = require('../assets/image-test.jpg');


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
  await fetch(`http://localhost:9876/register`,
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
    await fetch(`http://localhost:9876/login`,
    {
      method : 'POST',
      headers : { 
        'Content-type': 'application/json',
      },
      body : JSON.stringify({email, password})
    })
    .then(data => data.json())
    .then(res => console.log(setUserId(res.userId), setToken(res.token)))
    .catch('erreur de fetch')
  }

  console.log('UserId stocké dans le variable ' + userId)
  console.log('Token stocké dans le variable ' + token)

  return (
    <UserContext.Provider 
      value={{
        name, 
        email, 
        password,
        logo,
        sendIcon,
        imageTest,
        setName,
        setEmail,
        setPassword,
        handleNameChange,
        handleMailChange,
        handlePWChange,
        registerUser,
        loginUser
        }}>
          <div className='' >
            <Switch>
              <Route path='/chat'>
                {
                  () => <Chat />
                }
              </Route>   
            </Switch>
          </div>
    </UserContext.Provider>
  )
}

export default App
