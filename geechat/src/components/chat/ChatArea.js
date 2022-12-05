import React, { useContext, useEffect, useRef, useState } from 'react';
import {UserContext} from '../../../src/App';
import { CiPaperplane } from 'react-icons/ci'
import Message from './Message';
import ProfileData from './ProfileData';
import axios from 'axios';

const ChatArea = () => {
    const {messages} = useContext(UserContext);
    const {setMessages} = useContext(UserContext);
    const {handleSendMsg} = useContext(UserContext);
    const {profileId} = useContext(UserContext);
    const {profile} = useContext(UserContext);
    const [msg, setmsg] = useState([])
    const clearInput = useRef()
    const currentUser = localStorage.getItem('userId')

    useEffect(()=>{
      const getMessages = (async()=>{
        const res = await (await axios.post('http://localhost:8765/getAllMessages', {
          from:currentUser,
          to:profileId
        })).data
        setmsg(res.messages)
      })
      getMessages();
    },[profile])

    console.log('Messages are ', msg);

const clear = () => {
  clearInput.current.reset();
};
  
    const sendMsg = (e) => {
      e.preventDefault();
      if(messages.length > 0) {
        handleSendMsg(messages);
      }
      clear()
      setMessages("")
    }

  return (
    <div className='chatArea'>
      <ProfileData />
      <div className='chatParts '>
        {
          messages ? <span className='ifNotMessage'>Select a user to start a new conversation</span> :
          <div className='messages-area'>
              {
                msg.map((sms)=>{
                  return <Message sms={sms} send={true} key={sms._id}/>
                })
              }
            </div>
        }
          <form className='forMsg' onSubmit={e=>sendMsg(e)} ref={clearInput}>
              <input type='text' className='inputMsg' placeholder='geechat message' onChange={(e)=>setMessages(e.target.value)}/>
              <button className='msgSendBTN'>
                <CiPaperplane className='sendIcon'/>
              </button>
          </form>
        </div>
    </div>
  )
}

export default ChatArea