import React, { useContext } from 'react';
import { UserContext } from '../../../src/App';
import { Link } from 'react-router-dom';

function Register() {

  const {registerUser} = useContext(UserContext);
  const {handleNameChange} = useContext(UserContext);
  const {handleMailChange} = useContext(UserContext);
  const {handlePWChange} = useContext(UserContext);
  const {logo} = useContext(UserContext);

  return (
    <div className='signPage'>
        <img src={logo} alt='logo' className='logo'/>
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
           <button 
           className='signBTN'>
           Register
           </button>
        </form>
        <div className='alter-auth'>
          <span className='prev-link'>Yet in ?</span>
          <Link to={'/'}>
            <a className='link'>Login</a>
          </Link>
        </div>
    </div>
  )
}

export default Register