import React from 'react'
import ChatArea from './ChatArea'
import UsersArea from './UsersArea'

const Chat = () => {
  return (
    <div className='chat' id='chatid'>
      <UsersArea />
      <ChatArea />
    </div>
  )
}

export default Chat