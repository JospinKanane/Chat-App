import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../../../src/App';
import {RxAvatar} from 'react-icons/rx'

const Conversation = ({user}) => {
  const {setProfileName} = useContext(UserContext)
  const {setProfileId} = useContext(UserContext)

  const getUserdata = async() => {
    const userdata = await (await axios.get('http://localhost:8765/users/'+user._id)).data
    console.log(userdata);
    setProfileName(user.userName)
    setProfileId(user._id)
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