import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import CurrentUserProfile from './CurrentUserProfile';

const UsersArea = () => {
  const [users, setUsers] = useState([]); 

  useEffect(()=>{
    const getUsers = async() => {
        const res = await (await axios.get('http://localhost:8765/users')).data;
        setUsers(res)
    }
    getUsers()
    console.log(users);
  },[])

  return (
    <div className='search-users-area'>
      <CurrentUserProfile/>
        <div className='users-area'>
          {
            users.map((user) => <Conversation user={user} key={user._id}/>) 
          }
        </div>
    </div>
  )
}

export default UsersArea