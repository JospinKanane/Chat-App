import React from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import { Route, Switch} from 'wouter';

function Auth() {

  return (
    <div className="auth-container container">
      <Switch>
        <Route path='/'>
          {
            () => <Login />
          }
        </Route>
        <Route path='/register'>
          {
            () => <Register/>
          }
        </Route>   
      </Switch>
    </div>
  )
}

export default Auth