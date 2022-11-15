import React from 'react';
import { Link } from 'wouter';

function Register({name, email, password, setName, setPassword, setEmail, registerUser}) {

  // const errName = document.querySelector('.errName')

  const handleNameChange = (e) => {
    setName(name = e.target.value); 
  };
  const handleMailChange = (e) => {
    setEmail(email =  e.target.value)

  };
  const handlePWChange = (e) => {
    setPassword(password =  e.target.value);
  };


  return (
    <div className='signPage'>
        <h1>SignUp to chatApp</h1>
        <form 
        className='signForm' 
        onSubmit={registerUser}
        >
           <div className='input-label'>
              <label 
              className='name' 
              for='signName'>
              Name
              </label>
              <input 
              type='text' 
              id='signName' 
              className="inputName" 
              name='name'
              placeholder='Enter a your name or your username here'
              onChange={handleNameChange}
              />
            </div>
           {/* <span 
           className='errName' 
           style={{color: "red"}}>
           </span> */}
            <div className='input-label'>
              <label 
              className='email' 
              for='signEmail'>
              Email
              </label>
              <input type='text' 
              id='signEmail' 
              className="inputName" 
              name='email'
              placeholder='Enter a your email here'
              onChange={handleMailChange}
              />
           </div>
           {/* <span 
           className='errMail' 
           style={{color: "red"}}>
           </span> */}
           <div className='input-label'>
              <label 
              className='password' 
              for='signPassword'>
              Password
              </label>
              <input 
              type='password' 
              id='signPassword' 
              className="inputPassword" 
              name='password' 
              placeholder='Enter your password here'
              onChange={handlePWChange}
              />
           </div>
           {/* <span 
           className='errPassword' 
           style={{color: "red"}}>
           </span> */}
           <button 
           className='signBTN'>
           signUp
           {/* onClick={registration} */}
           </button>
        </form>
        <div className='alter-auth'>
          <span className='prev-link'>Yet in ?</span>
          <Link href='/'>
            <a className='link'>Login</a>
          </Link>
        </div>
    </div>
  )
}

export default Register