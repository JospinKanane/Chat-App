import React, { useContext } from 'react'
import {IoIosContact} from 'react-icons/io'

const CurrentUserProfile = () => {
  const currentUser = localStorage.getItem('userName');
  return (
    <div>
        <div className='profile'>
        <div className='profileData'>
            <IoIosContact className='profileImage'/>
            <span className='profileName'>{currentUser}</span>
        </div>
    </div>
    </div>
  )
}

export default CurrentUserProfile