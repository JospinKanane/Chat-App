import React from 'react'

function Auth() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');


  return (
    <div className='loginPage'>
        <h1>Login to chatApp</h1>
        <form className='loginForm' method='POST' action='/login'>
           <label className='email' for='loginEmail'>Email</label>
           <input type='text' id='loginEmail' className="inputName" placeholder='Enter a your email here'/>
           <label className='password' for='loginPassword'>Password</label>
           <input type='password' id='loginPassword' className="inputPassword" placeholder='Enter your password here'/>
           <button className='loginBTN'>Start Chatting</button>
        </form>
    </div>
  )
}

export default Auth