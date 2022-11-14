import React, { useState } from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import { Route, Switch} from 'wouter'

function Auth() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(e){
    e.preventDefault();
    const response = await fetch(`http://localhost:9876/register`,
    {
      method : 'POST',
      headers : { 'Content-type': 'application/json' },
      body : JSON.stringify({name, email, password})
    })

    const data = await response.json();
    console.log(data)
  }

  async function loginUser(e){
    e.preventDefault();
    const response = await fetch(`http://localhost:9876/login`,
    {
      method : 'POST',
      headers : { 'Content-type': 'application/json' },
      body : JSON.stringify({email, password})
    })

    const data = await response.json();
    console.log(data)
  }

  return (
    <div className='app'>
      <Switch>
        <Route path='/'>
          {
            () => <Login
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword} 
                    loginUser={loginUser}
                  />
          }
        </Route>
        <Route path='/register'>
          {
            () => <Register
                    name={name}
                    email={email}
                    password={password}
                    setName={setName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    registerUser={registerUser}
                  />
          }
        </Route>   
      </Switch>
    </div>
  )
}

export default Auth