import React from 'react'

function Auth() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');


  return (
    <div className='authPage'>
        <h1>Welcome to the chatApp</h1>
        <form className='authForm'>
           <label className='name'>Name</label>
           <input type='text' className="inputName" placeholder='Enter a your name or your username here'></input>
           <label className='email'>Mail</label>
           <input type='email' className="inputEmail" placeholder='Enter your email here'></input>
           <button className='submitBTN'>Start Chatting</button>
        </form>
    </div>
  )
}

export default Auth