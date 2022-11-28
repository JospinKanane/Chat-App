import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import CurrentUserProfile from './CurrentUserProfile';

const UsersArea = () => {
  const [users, setUsers] = useState([]);
  // const userId = localStorage.getItem('userId')

  useEffect(()=>{
    const getUsers = async() => {
        const res = await (await axios.get('http://localhost:8765/user')).data;
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