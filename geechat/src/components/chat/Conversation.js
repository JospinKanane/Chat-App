import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../../../src/App';
import {RxAvatar} from 'react-icons/rx'

const Conversation = ({user}) => {
  const {setProfileName} = useContext(UserContext)
  const {setProfileId} = useContext(UserContext)
  const {setCurrentChat} = useContext(UserContext)

  const getUserdata = async() => {
    const userdata = await (await axios.get(REACT_APP_NOT_SECRET_API+'/users/'+user._id)).data
    console.log(userdata);
    setProfileId(user)
    setProfileName(user.userName)
    setProfileId(user._id)
    setCurrentChat(user)
  }
  

  return (
    <div className='conversation' onClick={getUserdata}>
        {/* <img src={image} alt='profile' className='conversImage'/> */}
        <RxAvatar className='conversImage'/>
        <span className='conversName'>{user.userName}</span>
    </div>
  )
}

export default Conversation