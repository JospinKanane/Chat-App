import React, { useContext } from 'react';
import {UserContext} from '../../../src/App';
import ProfileData from './ProfileData';

const ChatArea = () => {
    const {sendIcon} = useContext(UserContext);
  return (
    <div className='chatArea'>
      <ProfileData />
      <div className='chatParts '>
        <div className='messages-area'> messages here</div>
          <form className='forMsg'>
              <input type='text' className='inputMsg' placeholder='geechat message'/>
              <img src={sendIcon} alt='send icon' className='sendIcon'/>
          </form>
        </div>
    </div>
  )
}

export default ChatArea