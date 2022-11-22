import React, {useContext} from 'react'
import {UserContext} from '../../../src/App';

const Message = ({send}) => {
    const {image} = useContext(UserContext);
  return (
    <div className={send ? 'message send' : 'message'}>
      <div className='messageTop'>
        <img className='messageImg' src={image} alt='message imageTest'/>
        <p className='messageTxt'>
        Client-server architecture typically features multiple users’ workstations, PCs, or other devices, connected to a central server via an Internet connection or other network.</p>
      </div>
      <div className='messageBotton'> 1 hour ago</div>
    </div>
  )
}

export default Message