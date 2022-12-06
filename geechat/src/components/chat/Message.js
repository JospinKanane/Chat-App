import React, {useContext} from 'react'
import {UserContext} from '../../../src/App';
import {format} from 'timeago.js'

const Message = ({sms, own}) => {
  console.log('own',own);
    // const {messages} = useContext(UserContext);
  return (
    <div className={own ? 'message send' : 'message'}>
        <div className='messageTop'>
          <p className='messageTxt'>{sms.message.text}</p>
        </div>
        <div className='messageBotton'>{format(sms.updatedAt)}</div>
    </div>
        
        
  )
}

export default Message