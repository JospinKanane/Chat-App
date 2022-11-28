import axios from 'axios';
import React, {useContext, useState} from 'react'
import {UserContext} from '../../../src/App';

const Conversation = ({user}) => {
    const {image} = useContext(UserContext);
    const {setProfileName} = useContext(UserContext);
    const {setProfileId} = useContext(UserContext);
    const {profileId} = useContext(UserContext);

    const getConversation = async() => {
      console.log('userId is:', user._id, 'and userName is:', user.userName);
      setProfileName(user.userName);
      setProfileId(user._id)
      const conversation = await (await axios.get('http://localhost:8765/conversation/'+profileId)).data;
      console.log('conversation of this user is ', conversation);
    }

  return (
    <div className='conversation' onClick={getConversation}>
        <img src={image} alt='profile' className='conversImage'/>
        <span className='conversName'>{user.userName}</span>
    </div>
  )
}

export default Conversation