import React, { useState, createContext, } from 'react';
import './App.css'
import Chat from './components/chat/Chat';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const logo = require('./assets/logo.png');
  const image = require('./assets/avat.png');


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
        setUser,
        handleNameChange,
        handleMailChange,
        handlePWChange,
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
              {/* <Routes>
              </Routes> */}
            </Router>
          </div>
    </UserContext.Provider>
  )
}

export default App
