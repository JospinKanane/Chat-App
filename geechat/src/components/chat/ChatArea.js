import React, { useContext, useEffect, useRef, useState } from 'react';
import {UserContext} from '../../../src/App';
import { CiPaperplane } from 'react-icons/ci'
import Message from './Message';
import ProfileData from './ProfileData';
import axios from 'axios';
import Welcome from './Welcome';
import {v4 as uuidv4} from 'uuid';

const ChatArea = () => {
    const {messages} = useContext(UserContext);
    const {setMessages} = useContext(UserContext);
    const {handleSendMsg} = useContext(UserContext);
    const {currentChat} = useContext(UserContext);
    const {socket} = useContext(UserContext);
    const scrollRef = useRef();
    const [msg, setmsg] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const clearInput = useRef()
    const currentUser = localStorage.getItem('userId')

    useEffect(()=>{
      const getMessages = (async()=>{
        if(currentChat){
          const res = await (await axios.post(process.env.REACT_APP_NOT_SECRET_API+'/getAllMessages', {
            from:currentUser,
            to:currentChat._id
          })).data
          setmsg(res.messages)
        }
      })
      getMessages();
    },[currentChat])

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

    useEffect(()=>{
      if(socket.current){
        socket.current.on("msg-recieve", (msg)=>{
          setArrivalMessage({fromSelf:false, message : messages})
        })
      }
    },[])

    useEffect(()=>{
      arrivalMessage && setMessages((prev)=>[...prev, arrivalMessage])
    },[arrivalMessage])

    useEffect(()=>{
      scrollRef.current?.scrollIntoView({behavior:"smooth"})
    })

  return (
    <div className='chatArea'>
      {
        currentChat === undefined ? <Welcome/> :
      <>
        <ProfileData />
        <div className='chatParts '>
            <div className='messages-area'>
                {
                  msg.map((sms)=>{
                    return <div ref={scrollRef} key={uuidv4()}>
                              <Message sms={sms} own={sms.sender == currentUser} key={sms._id}/>
                           </div>
                  })
                }
                </div>
            <form className='forMsg' onSubmit={e=>sendMsg(e)} ref={clearInput}>
                <input type='text' className='inputMsg' placeholder='geechat message' onChange={(e)=>setMessages(e.target.value)}/>
                <button className='msgSendBTN'>
                  <CiPaperplane className='sendIcon'/>
                </button>
            </form>
          </div>
          </>
          }
    </div>
  )
}

export default ChatArea