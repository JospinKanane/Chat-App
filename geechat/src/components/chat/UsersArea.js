import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import CurrentUserProfile from './CurrentUserProfile';
import {UserContext} from '../../../src/App';
import { Navigate, useNavigate } from 'react-router-dom';

const UsersArea = () => {
  const [users, setUsers] = useState([]); 
  const {handleChatChange} = useContext(UserContext)
  const {setCurrentChat} = useContext(UserContext)
  const [currentSelected, setCurrentSelected] = useState([]);
  const currentUser = localStorage.getItem('userId')
  const navigate = useNavigate()

  useEffect(()=>{
    const getUsers = async() => {
      if(currentUser){
        const res = await (await axios.get('http://localhost:8765/getallusers/'+currentUser)).data;
        setUsers(res)
      } else {
        navigate('/')
      }
    }
    getUsers()
    console.log(users);
  },[currentUser])

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    handleChatChange(contact)
    setCurrentChat(contact)
  }

  return (
    <div className='search-users-area'>
      <CurrentUserProfile/>
        <div className='users-area'>
          {
            users.map((user) => <Conversation user={user} key={user._id} onClick={(e)=>changeCurrentChat(index, contact)}/>) 
          }
        </div>
    </div>
  )
}

export default UsersArea