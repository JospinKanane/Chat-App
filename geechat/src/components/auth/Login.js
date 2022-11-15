import React from 'react';
import { Link } from 'wouter';
// import Button from '@mui/material/Button'

function Auth({email, password, setEmail, setPassword, loginUser}) {

  const handleMailChange = (e) => {
    setEmail(email =  e.target.value)

  };

  const handlePWChange = (e) => {
    setPassword(password =  e.target.value)
  };

  return (
    <div className='loginPage'>
        <h1 className="text-3xl text-gray-700 font-bold mb-5">Login to chatApp</h1>
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
           variant="contained">
           Start Chatting
           </button>
        </form>
        <div className='alter-auth'>
          <span className='prev-link'>Not  yet in ?</span>
          <Link href='/register'>
            <a className='link'>Register</a>
          </Link>
        </div>
    </div>
  )
}

export default Auth