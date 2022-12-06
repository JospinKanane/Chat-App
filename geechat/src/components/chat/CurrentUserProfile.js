import React, { useContext } from 'react'
import {IoIosContact} from 'react-icons/io'
import {BiExit} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const CurrentUserProfile = () => {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('userName');
  const exit = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div>
        <div className='profile'>
        <div className='profileData'>
            <IoIosContact className='profileImage'/>
            <span className='profileName'>{currentUser}</span>
        </div>
      <BiExit className='exit' onClick={()=>exit()}/>
    </div>
    </div>
  )
}

export default CurrentUserProfile