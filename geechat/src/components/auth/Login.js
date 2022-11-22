import React, { useContext} from 'react'; 
import {UserContext} from '../../../src/App';
import { Link } from 'react-router-dom';

function Auth() {

  const {loginUser} = useContext(UserContext);
  const {handleMailChange} = useContext(UserContext);
  const {handlePWChange} = useContext(UserContext);
  const {logo} = useContext(UserContext);

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
           variant="contained">
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

export default Auth