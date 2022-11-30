import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import CurrentUserProfile from './CurrentUserProfile';

const UsersArea = () => {
  const [users, setUsers] = useState([]); 

  useEffect(()=>{
    const getUsers = async() => {
        const res = await (await axios.get(process.env.REACT_APP_NOT_SECRET_API+'/users')).data;
        setUsers(res)
    }
    getUsers()
  },[])

  return (
    <div className='search-users-area'>
      <CurrentUserProfile/>
        <div className='users-area'>
          {
            users.map((user) => <Conversation user={user}/>) 
          }
        </div>
    </div>
  )
}

export default UsersArea