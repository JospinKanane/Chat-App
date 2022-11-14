import React from 'react';
import { Link } from 'wouter';

function Auth({email, password, setEmail, setPassword, loginUser}) {

  const handleMailChange = (e) => {
    setEmail(email =  e.target.value)

  };

  const handlePWChange = (e) => {
    setPassword(password =  e.target.value)
  };

  return (
    <div className='loginPage'>
        <h1>Login to chatApp</h1>
        <form 
        className='loginForm' 
        onSubmit={loginUser}
        >
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
           <button 
           className='loginBTN'>
           Start Chatting
           </button>
        </form>
        <div>
          <span>Not  yet in ?</span>
          <Link href='/register'>
            <a className='link'>Register</a>
          </Link>
        </div>
    </div>
  )
}

export default Auth