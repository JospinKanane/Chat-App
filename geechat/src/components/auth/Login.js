import React from 'react'

function Auth({email, password, setEmail, setPassword}) {

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
        method='POST' 
        action='/login'>
           <label 
           className='email' 
           for='loginEmail'>
           Email
           </label>
           <input 
           type='email' 
           id='loginEmail' 
           className="inputEmail" 
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
           placeholder='Enter your password here'
           onChange={handlePWChange}
           />
           <button 
           className='loginBTN'>
           Start Chatting
           </button>
        </form>
    </div>
  )
}

export default Auth