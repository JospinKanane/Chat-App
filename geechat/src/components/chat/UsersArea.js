import React, { useContext, useEffect, useState } from 'react'
import Conversation from './Conversation'
import SearchArea from './SearchArea'
// import { UserContext } from '../../App'
// import axios from 'axios'

const UsersArea = () => {
  // const [conversation, setConversation] = useState([]);
  // const {user} = useContext(UserContext)

  // useEffect(()=>{
  //   const getConversations = async() => {
  //     try {
  //       const result = await axios.get('http://localhost:8765/conversation/'+user_id);
  //       setConversation(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getConversations()
  // },[user_id])
  return (
    <div className='search-users-area'>
        <SearchArea />
        <div className='users-area'>
          {
              <Conversation/>
          }
        </div>
    </div>
  )
}

export default UsersArea