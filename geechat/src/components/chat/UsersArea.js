import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import SearchArea from './SearchArea'
import axios from 'axios'

const UsersArea = () => {
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem('userId')

  useEffect(()=>{
    const getUsers = async() => {
        const res = await (await axios.get('http://localhost:8765/user')).data;
        setUsers(res)
    }
    getUsers()
  },[])

  const getConversations = async() => {
    const conversation = await (await axios.get('http://localhost:8765/conversation/'+userId)).data;
    console.log(conversation);
  };

  getConversations();

  return (
    <div className='search-users-area'>
        <SearchArea />
        <div className='users-area'>
          {
            users.map((user) => <Conversation user={user}/>) 
          }
        </div>
    </div>
  )
}

export default UsersArea