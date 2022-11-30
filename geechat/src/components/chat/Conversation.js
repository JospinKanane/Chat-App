import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
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
      const conversation = await (await axios.get(process.env.REACT_APP_NOT_SECRET_API+'/conversation/'+profileId)).data;
      console.log('conversation of this clicked user is ', conversation);
    }


  return (
    <div className='conversation' onClick={getConversation}>
        <img src={image} alt='profile' className='conversImage'/>
        <span className='conversName'>{user.userName}</span>
    </div>
  )
}

export default Conversation