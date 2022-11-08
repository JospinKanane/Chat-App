import React, { useState } from 'react';
import Login from './auth/Login';
import Register from './auth/Register';

function Auth() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
        <Register
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        />
        <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword} 
        />
    </div>
  )
}

export default Auth