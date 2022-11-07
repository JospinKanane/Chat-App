import React from 'react'

function Register() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');


  return (
    <div className='signPage'>
        <h1>SignUp to chatApp</h1>
        <form className='signForm' method='POST' action='/signin'>
           <label className='name' for='signName'>Name</label>
           <input type='text' id='signName' className="inputName" placeholder='Enter a your name or your username here'/>
           <label className='email' for='signEmail'>Email</label>
           <input type='text' id='signEmail' className="inputName" placeholder='Enter a your email here'/>
           <label className='password' for='signPassword'>Password</label>
           <input type='password' id='signPassword' className="inputPassword" placeholder='Enter your password here'/>
           <button className='signBTN'>signUp</button>
        </form>
    </div>
  )
}

export default Register