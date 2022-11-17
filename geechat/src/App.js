import React, { useState, createContext } from 'react';
// import logo from '../assets/geechat-logo.png'
import Auth from './components/Auth';
import './App.css'
export const UserContext = createContext();

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const logo = require('../assets/geechat-logo-cropped.png');
  const appName = "GeeChat"


  // Register && login user
const handleNameChange = (e) => {
  setName({name : e.target.value}); 
};
const handleMailChange = (e) => {
  setEmail({email :  e.target.value})

};
const handlePWChange = (e) => {
  setPassword({password :  e.target.value})
};

// Fetch fonctions
  async function registerUser(e){
    e.preventDefault();
    const response = await fetch(`http://localhost:9876/register`,
    {
      method : 'POST',
      headers : { 'Content-type': 'application/json' },
      body : JSON.stringify({name, email, password})
    })

    const data = await response.json();
    console.log(data)
  }

  async function loginUser(e){
    e.preventDefault();
    const response = await fetch(`http://localhost:9876/login`,
    {
      method : 'POST',
      headers : { 'Content-type': 'application/json', 'Authorization': 'Bearer ' },
      body : JSON.stringify({email, password})
    })

    const data = await response.json();
    console.log(data)
  }

  return (
    <UserContext.Provider 
      value={{
        name, 
        email, 
        password,
        appName,
        logo,
        setName,
        setEmail,
        setPassword,
        handleNameChange,
        handleMailChange,
        handlePWChange,
        registerUser,
        loginUser
        }}>
          <div className='container' >
            {/* <img src={logo}/> */}
            <Auth/>
          </div>
    </UserContext.Provider>
  )
}

export default App
