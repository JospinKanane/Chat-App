import React, { useContext, useEffect, createContext, useState } from 'react'; 
import {UserContext} from '../../../src/App';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const {handleMailChange} = useContext(UserContext);
  const {handlePWChange} = useContext(UserContext);
  const {logo} = useContext(UserContext);
  const {email} = useContext(UserContext);
  const {password} = useContext(UserContext);
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const loginUser = async(e) =>{
    e.preventDefault();
    try {
      const userINF = {email, password}
      const response = await (await axios.post('http://localhost:8765/login', userINF)).data;
      setUser(response)
      console.log(response)
      if(response.userToken) {
        localStorage.setItem('token', response.userToken);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('userName', response.userName);
        navigate('/chat')
      }
    
    } catch (error) {
      console.log(error, 'login error');
    }
  }

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/chat')
    } else {navigate('/')}
  }, [])
  

  return (
        <div className='loginPage auth-container '>
            <img  src={logo} alt='logo' className='logo'/>
            <form 
            className='loginForm' 
            onSubmit={loginUser}
            >
              <div className='input-label'>
                <label 
                className='email' 
                for='loginEmail'>
                Email
                </label>
                <input 
                type='email' 
                id='loginEmail' 
                className="inputEmail" 
                name='email'
                placeholder='Enter a your email here'
                onChange={handleMailChange}
                />
              </div>
              <div className='input-label'>
                  <label 
                  className='password'
                  for='loginPassword'>
                  Password
                  </label>
                  <input 
                  type='password' 
                  id='loginPassword' 
                  className="inputPassword" 
                  name='password'
                  placeholder='Enter your password here'
                  onChange={handlePWChange}
                  />
              </div>
              <button 
              variant="contained" className='authBtn'>
              Start Chatting
              </button>
            </form>
            <div className='alter-auth'>
              <span className='prev-link'>Not  yet in ?</span>
              <Link to={'/register'}>
                <a className='link'>Register</a>
              </Link>
            </div>
        </div>

  )
}

export default Login