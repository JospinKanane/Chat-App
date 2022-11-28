import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../../../src/App';

const Conversation = ({user}) => {
    const {image} = useContext(UserContext);
    console.log('user data:', user);

  return (
    <div className='conversation'>
        <img src={image} alt='profile' className='conversImage'/>
        <span className='conversName'>{user.userName}</span>
    </div>
  )
}

export default Conversation